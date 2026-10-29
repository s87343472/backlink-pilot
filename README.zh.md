# Backlink Pilot v3

**用 AI Agent 按可控节奏做目录 / 列表外链：默认免费与免费排队，把交换链、徽章、所有权验证当成可配置成本，并用账本沉淀成可复用的外链库。**

| 你是谁 | 从哪读 |
|--------|--------|
| **人类（产品 / 运营）** | 下文 [给人类](#给人类for-humans) |
| **AI Agent** | 下文 [给 Agent](#给-agentfor-agents) 摘要 → 完整操作手册 [`AGENTS.zh.md`](AGENTS.zh.md) |

[English](README.md) · [完整指南](docs/guide.zh.md) · [文档首页](docs/index.md) · 旧 CLI 分支 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)（v2.1）

> **必读免责：** [docs/disclaimer.zh.md](docs/disclaimer.zh.md) — 搜索引擎反对操纵排名的链接方案；本仓库**不承诺排名**。默认真正提交约 **2–4 个站 / 天**，不要一天交几十上百。

---

## 给人类（For humans）

### 外链在这里指什么

面向独立产品常见的 **目录站提交、免费排队 launch、资源 / awesome 列表 PR** 等「可申请的外链渠道」。不是买卖链接教程，也不是「一条命令打几百站」的脚本主叙事（那套在分支 `old`）。

目录表单差异大，常要登录、验证码、排期、邮件验证。真正难的是 **策略判断 + 邮件闭环 + 控速**；Agent 适合扛重复劳动，人适合拍板例外与改站点。

### 为什么要控速

短时间、大规模、低相关、模式化外链有被搜索引擎视为垃圾链接或触发处理的风险。数量 ≠ 排名。本 playbook 的默认建议是：

1. 每天真正提交约 **2–4** 个（筛站可批量，提交必须控速）
2. 描述真实、分类匹配；**地点 / 邮箱与条款、隐私政策一致**
3. 目录只是渠道之一；更重视产品与自然提及
4. 交换链 / 徽章集中在 **`/links`**，便于日后下线
5. 默认跳过付费插队与**强制**互链；升档自担风险

完整表述见 [免责声明](docs/disclaimer.zh.md)。

### 策略档（你定一档，写进给 Agent 的说明）

| 档位 | 允许 | 默认跳过 |
|------|------|----------|
| 保守 | 免费、免费排队 | 付费、强制徽章、互链、点赞换积分 |
| **标准（推荐）** | 上 + **自愿**挂徽章换 dofollow、域名 meta / DNS 所有权验证 | 付费；**强制**互链才收录；点赞换积分（除非你单独授权） |
| 进取 | 标准 + 你自设上限的小额付费插队 | 强制互链仍建议谨慎；若放开只用 `/links` |

细节：[docs/strategy.zh.md](docs/strategy.zh.md)。

### `/links` 页与外链库

- **交换链 / 徽章：** 业界常见做法是建 `yoursite.example/links`，集中放伙伴链接与徽章，首页只放入口。见 [reciprocity](docs/reciprocity.zh.md) 与 [templates/links-page.example.md](templates/links-page.example.md)。标准档**默认不接强制互链**。
- **外链库账本：** 每次筛站 / 提交写成一行 CSV，新产品优先打「已验证过」的站。空表：[templates/library.schema.csv](templates/library.schema.csv)。**实填库本地留，不要推进本公开仓库。** 说明：[library](docs/library.zh.md)。
- 仓库里的 `targets.yaml` 是历史大池，文首已标 **未再维护**，仅供参考。

### 你怎么 brief 一个 Agent（最短路径）

1. 复制 [templates/product.example.yaml](templates/product.example.yaml) 改成你的产品（地点、邮箱务必与法律页一致）
2. 复制 `templates/library.schema.csv` 到本地（如 `library.filled.csv`），路径告诉 Agent
3. 把策略档写成「标准」（或你选的档）+ 日限额 2–4
4. 把 [`AGENTS.zh.md`](AGENTS.zh.md) 或 [templates/agent-prompt.md](templates/agent-prompt.md) 中文段贴进 Agent 系统 / 项目说明
5. （可选）建好 `/links` 空页，方便以后自愿徽章或升档互链
6. 配置 Agent 收件箱用于注册验证；域名 `support@` 留给你点

Grok Bot 形态案例（虚构产品 **Northstar Notes**）：[docs/grok-bot.zh.md](docs/grok-bot.zh.md)。通用配置：[docs/agent-setup.zh.md](docs/agent-setup.zh.md)。

### 哪些事必须人做（Agent 应停下来问你）

| 事项 | 为什么 |
|------|--------|
| 加 DNS TXT / 页面 meta 所有权标签 | 要动你的域名或生产站 |
| 点开发到**域名邮箱**的验证 | Agent 往往读不到该邮箱 |
| 付费插队 / Featured | 花钱，标准档默认禁止 |
| 接受**强制**互链或「不挂徽章就不能提交」 | 策略例外 |
| 点赞 / 评论换积分 | 默认跳过 |
| 拒信后改地点 / 换邮箱再交 | 可能涉及法律页与品牌 |
| 验证码 / 2FA / 未授权的批量 GitHub PR | 合规与账号安全 |

你只需要：回复「加好了去验证」「跳过」「升档并写进 /links」这类短指令。

### 人类侧文档地图

| 文档 | 内容 |
|------|------|
| [guide.zh.md](docs/guide.zh.md) | 完整 playbook |
| [disclaimer.zh.md](docs/disclaimer.zh.md) | 风险与建议 |
| [strategy.zh.md](docs/strategy.zh.md) | 档位与节奏 |
| [reciprocity.zh.md](docs/reciprocity.zh.md) | 交换链 · 徽章 · `/links` |
| [library.zh.md](docs/library.zh.md) | 外链库字段与复用 |
| [email.zh.md](docs/email.zh.md) | 邮件类型怎么处理 |
| [funnel.zh.md](docs/funnel.zh.md) | 找站 → 提交 → 记账 |
| [github-lists.zh.md](docs/github-lists.zh.md) | awesome 等 PR 注意 |
| [troubleshooting.zh.md](docs/troubleshooting.zh.md) | 常见坑（脱敏） |
| [migrating-from-v2.zh.md](docs/migrating-from-v2.zh.md) | 还要用 CLI 时看 `old` |

### 仓库有什么 / 没有什么

| 有 | 没有 |
|----|------|
| 方法文档、空模板、`AGENTS*.md` | 可运行批量 CLI（见 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)） |
| `targets.yaml`（未再维护） | 真实提交日志、密码、cookie、实填外链库 |
| 虚构示例 Northstar Notes | 我们实交过的目录站名或 live URL |

---

## 给 Agent（For agents）

> **完整可执行手册以 [`AGENTS.zh.md`](AGENTS.zh.md) 为准**（多数 Agent 工具会自动读 `AGENTS.md`；中文项目优先读 `AGENTS.zh.md`）。下面是 README 内摘要，便于人类扫一眼你的约束。

### 你的任务

按用户产品卡与**日限额**，寻找并提交 **free / free-queue** 目录或列表；维护本地外链库；处理可自动完成的验证邮件；例外一律问人。

### 硬默认（除非用户改写）

- 策略档：**标准**
- 真正提交：**2–4 / 天**（筛站不计入「提交」）
- **允许：** 免费、免费排队；自愿徽章换 dofollow；人加好后的 meta/DNS 验证点击
- **跳过：** 付费；强制互链；点赞换积分；死站；fit 不符
- 不承诺排名；不把密钥 / cookie / 实填库推进 git
- 公开回复**不要**列举用户未要求的大量第三方提交 URL；用数量 + 状态汇报

### 角色

1. 研究：候选站打标 `free` / `free-queue` / `paid` / `badge` / `reciprocal` / `dead` / `fit`
2. 提交：优先 HTTP/API；复杂再用浏览器；验证码停
3. 邮件：验证链接可自动；广告与付费推销忽略；所有权 token 交人
4. 记账：更新本地 library CSV

### 必须问人

付费、强制互链、强制才能提交的徽章、点赞换积分、改法律地点、域名邮箱验证、DNS/meta 未加好、拒信后重交、未授权批量 GitHub PR。

### 产品卡与库

- 产品字段见 [product-template](docs/product-template.zh.md)；示例 [product.example.yaml](templates/product.example.yaml)（虚构）
- 库字段见 [library.schema.csv](templates/library.schema.csv)
- 提示词可粘贴：[templates/agent-prompt.md](templates/agent-prompt.md)

漏斗：`harvest → 去重 → 探测 → 入队 → 提交 → 邮件 → 账本`（[funnel](docs/funnel.zh.md)）。

---

## License

MIT · 作者 sagasu。v3 为 Agent playbook；自动化代码见 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)。
