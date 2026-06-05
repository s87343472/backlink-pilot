// awesome/templates.js — Generate GitHub Issue bodies for awesome-list submissions

import { utmUrl } from '../config.js';

// Pre-configured awesome-list targets
const TARGETS = {
  'chinese-independent-developer': {
    repo: '1c7/chinese-independent-developer',
    template: 'chinese',
  },
  'awesome-privacy': {
    repo: 'Lissy93/awesome-privacy',
    template: 'english',
  },
  'awesome-wasm': {
    repo: 'mbasso/awesome-wasm',
    template: 'english',
  },
  'awesome-cloudflare': {
    repo: 'zhuima/awesome-cloudflare',
    template: 'chinese',
  },
  'awesome-pwa': {
    repo: 'hemanth/awesome-pwa',
    template: 'english',
  },
  'awesome-indie': {
    repo: 'mezod/awesome-indie',
    template: 'english',
  },
  'awesome-oss-alternatives': {
    repo: 'RunaCapital/awesome-oss-alternatives',
    template: 'english',
  },
  'awesome-free-apps': {
    repo: 'Axorax/awesome-free-apps',
    template: 'english',
  },
  'awesome-no-login-web-apps': {
    repo: 'aviaryan/awesome-no-login-web-apps',
    template: 'english',
  },
  'awesome-astro': {
    repo: 'one-aalam/awesome-astro',
    template: 'english',
  },
  'awesome-ai-tools': {
    repo: 'mahseema/awesome-ai-tools',
    template: 'english',
  },
};

function generateBody(product, template, repo) {
  const url = product.utm_url || product.url;

  if (template === 'chinese') {
    return `## 推荐添加: ${product.name}

**链接:** ${url}

**描述:** ${product.description}

**类别:** ${(product.categories || []).join(', ')}

**为什么推荐:**
${product.long_description || product.description}

---
希望这个项目能对大家有帮助！`;
  }

  return `## Add: ${product.name}

**Link:** ${url}

**Description:** ${product.description}

**Category:** ${(product.categories || []).join(', ')}

**Why it fits this list:**
${product.long_description || product.description}

---
I believe this project would be a valuable addition to this awesome list.`;
}

export async function generateAwesomeIssue(repoKey, opts) {
  const { config } = opts;
  const target = TARGETS[repoKey];

  if (!target) {
    console.error(`❌ Unknown repo "${repoKey}".`);
    console.log('\nAvailable targets:');
    for (const [key, val] of Object.entries(TARGETS)) {
      console.log(`  - ${key} (${val.repo})`);
    }
    return;
  }

  const product = {
    ...config.product,
    utm_url: utmUrl(config, 'github'),
  };

  const title = `Add ${product.name}`;
  const body = generateBody(product, target.template, target.repo);

  console.log(`\n📋 Issue for ${target.repo}\n`);
  console.log(`Title: ${title}\n`);
  console.log(body);

  const issueUrl = `https://github.com/${target.repo}/issues/new?title=${encodeURIComponent(title)}&body=${encodeURIComponent(body)}`;
  console.log(`\n🔗 Create issue: ${issueUrl}`);

  if (opts.open) {
    const { exec } = await import('child_process');
    exec(`open "${issueUrl}"`);
  }
}
