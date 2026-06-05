// Run once with: node scripts/build-pokemon-db.js
// Requires Node 18+ (native fetch). No extra deps.
// Fetches all data from tyradex.app, downloads sprites to public/sprites/.

const fs = require('fs');
const path = require('path');

const TOTAL = 1010;
const SPRITES_DIR = path.join(__dirname, '../public/sprites');
const JSON_OUT = path.join(__dirname, '../src/data/pokemon.json');
const DELAY_MS = 200;

const sleep = (ms) => new Promise(r => setTimeout(r, ms));

async function fetchWithRetry(url, retries = 3) {
  for (let i = 0; i < retries; i++) {
    try {
      const res = await fetch(url);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res;
    } catch (e) {
      if (i === retries - 1) throw e;
      await sleep(1000 * (i + 1));
    }
  }
}

async function downloadSprite(url, destPath) {
  if (fs.existsSync(destPath)) return; // skip if already downloaded
  const res = await fetchWithRetry(url);
  const buffer = Buffer.from(await res.arrayBuffer());
  fs.writeFileSync(destPath, buffer);
}

async function main() {
  fs.mkdirSync(SPRITES_DIR, { recursive: true });
  fs.mkdirSync(path.dirname(JSON_OUT), { recursive: true });

  const results = [];
  const errors = [];

  for (let id = 1; id <= TOTAL; id++) {
    try {
      const res = await fetchWithRetry(`https://tyradex.app/api/v1/pokemon/${id}`);
      const data = await res.json();

      const spriteUrl = data.sprites?.regular;
      const spritePath = `/sprites/${id}.png`;

      if (spriteUrl) {
        await downloadSprite(spriteUrl, path.join(SPRITES_DIR, `${id}.png`));
      }

      results.push({
        id,
        name: data.name.fr,
        category: data.category ?? null,
        height: data.height ?? null,
        weight: data.weight ?? null,
        types: (data.types ?? []).map(t => t.name).filter(Boolean),
        stats: data.stats ?? null,
        talents: (data.talents ?? []).map(t => t.name).filter(Boolean),
        sprite: spriteUrl ? spritePath : null,
      });

      if (id % 50 === 0) console.log(`${id}/${TOTAL} — ${data.name.fr}`);
    } catch (e) {
      console.warn(`  SKIP id=${id}: ${e.message}`);
      errors.push(id);
    }

    await sleep(DELAY_MS);
  }

  fs.writeFileSync(JSON_OUT, JSON.stringify(results));
  console.log(`\nDone. ${results.length} Pokémon → src/data/pokemon.json`);
  console.log(`Sprites → public/sprites/ (${fs.readdirSync(SPRITES_DIR).length} files)`);
  if (errors.length) console.warn(`Failed IDs: ${errors.join(', ')}`);
}

main().catch(console.error);
