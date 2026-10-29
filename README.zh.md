# Backlink Pilot v3

用 AI Agent 按可控节奏做目录 / 列表外链：默认免费与免费排队，把交换链、徽章、所有权验证当成可配置成本，沉淀成可复用的外链库。

[English](README.md) · [文档首页](docs/index.md) · [完整指南](docs/guide.zh.md) · Agent 手册 [`AGENTS.zh.md`](AGENTS.zh.md) · 旧版 CLI 分支 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)（v2.1）

---

## 是什么

**Backlink Pilot** 是一份面向 **AI Agent（含 Grok Bot 等）** 的外链作业 playbook，不是「一条命令打几百站」的黑盒脚本。

| 版本 | 内容 |
|------|------|
| **v3（本分支 `main`）** | 策略档、日限额、邮件闭环、`/links`、外链库账本、风险说明；给人看的 README + 给 Agent 的 [`AGENTS.zh.md`](AGENTS.zh.md) |
| **v2.1（分支 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)）** | 旧 CLI：OpenClaw / Claude Code / bb-browser / Playwright 等自动化工具箱 |

仓库里有：方法文档、空模板（产品卡含媒体字段、library CSV、`/links` 示例、[assets](docs/assets.zh.md) 清单）、历史参考清单 `targets.yaml`（**未再维护**）。  
仓库里没有：可运行批量提交主程序（在 `old`）、真实提交日志、密码 / cookie、填好的目录站名单。

---

## 有什么用

独立产品上线后，常见需求是往**目录站、免费排队 launch、资源 / awesome 列表**等渠道申请外链。表单差异大，还经常要登录、验证码、排期和邮件验证——难的是 **策略判断 + 邮件闭环 + 控速**，不是单次填表。

本项目帮你：

1. **定规则**：保守 / 标准 / 进取三档；默认 **标准**（免费与免费排队；自愿徽章与域名所有权验证可以；付费与强制互链默认跳过）
2. **控节奏**：真正提交约 **每天 2–4 个**，筛站可批量、提交必须慢
3. **可复用**：外链库账本记录站点属性与各产品状态，下一款产品优先打「已验证过」的站
4. **可交接**：人只处理 DNS/meta、域名邮箱、付费/升档等例外；Agent 扛研究、提交、验证链接与记账
5. **说清楚风险**：目录链接价值参差，数量 ≠ 排名（见文末免责）

它**不是**排名承诺，也不是买卖链接或规避搜索处罚的教程。

---

## 如何用

### 给人类

**最短路径：**

1. 读本文 [注意事项](#注意事项) 与 [免责声明](#免责声明)（完整版：[docs/disclaimer.zh.md](docs/disclaimer.zh.md)）
2. 复制 [templates/product.example.yaml](templates/product.example.yaml) 改成你的产品（**地点、邮箱须与条款 / 隐私一致**）
3. **准备媒体包**：logo（方图透明底）、OG（常见 1200×630）、桌面/移动截图、可选 banner / 宣传视频，以及短/长口号变体。清单见 [docs/assets.zh.md](docs/assets.zh.md)；路径写进产品卡
4. 复制 [templates/library.schema.csv](templates/library.schema.csv) 到本地（如 `library.filled.csv`），**不要把实填库推进公开 git**
5. 按需建站点 `/links` 页（模板：[templates/links-page.example.md](templates/links-page.example.md)；说明：[docs/reciprocity.zh.md](docs/reciprocity.zh.md)）
6. 把 [`AGENTS.zh.md`](AGENTS.zh.md)（或 [templates/agent-prompt.md](templates/agent-prompt.md) 中文段）贴进 Agent 的系统 / 项目说明；写明策略档（建议标准）与日限额 2–4
7. 给 Agent 一个可收验证信的邮箱；域名 `support@` 留给你点

**必须人做的事（Agent 应停下来问你）：**

| 事项 | 说明 |
|------|------|
| DNS TXT / 页面 meta 所有权 | 动你的域名或生产站 |
| 域名邮箱里的验证链接 | Agent 往往读不到 |
| 付费插队 / Featured | 标准档默认禁止 |
| 强制互链、不挂徽章就不能提交、点赞换积分 | 策略例外 |
| 拒信后改地点 / 换邮箱再交 | 可能涉及法律页 |
| 验证码 / 2FA / 未授权批量 GitHub PR | 账号与合规 |
| Logo / OG / 截图 / 视频终稿 | 设计导出与品牌；Agent 只检查与上传 |

配置参考：[docs/agent-setup.zh.md](docs/agent-setup.zh.md) · Grok Bot 案例（虚构产品 Northstar Notes）：[docs/grok-bot.zh.md](docs/grok-bot.zh.md) · 总指南：[docs/guide.zh.md](docs/guide.zh.md)

还想用本地 Chrome 脚本 / 旧适配器？切分支 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)，见 [docs/migrating-from-v2.zh.md](docs/migrating-from-v2.zh.md)。

### 已验证的 Agent

**目前仅 Grok Bot 在 v3（`main`）上被验证过**（验证窗口至 2026-10）。Claude Code、OpenAI Codex、DeepSeek 类 Agent、Cursor Cloud Agent、单独的 ChatGPT / Custom GPT、OpenClaw 等 **尚未** 做过「读 AGENTS.md + 模板 → 提交 / 邮件闭环」的系统冒烟。

文档设计成 Agent 无关（Markdown 手册 + 模板），但**未验证 ≠ 已验证能跟着做**。完整标准、矩阵表、与分支 `old`（v2.1 CLI 工具箱目标）的区别，见 [docs/verified-agents.zh.md](docs/verified-agents.zh.md)。

用任意 Agent（含上表未验证的）按本仓库手册测过的，欢迎开 [Issue](https://github.com/s87343472/backlink-pilot/issues) / PR 反馈：能不能读懂 `AGENTS`、卡在哪、是否遵守日限额与人闸。跑通验证标准的，请按 [docs/verified-agents.zh.md](docs/verified-agents.zh.md) 文末清单发 PR，把该 Agent 标成已验证（勿提交实填库、真实站名单、密码 / cookie）。文档、模板、翻译的改进也欢迎，见 [docs/contributing.md](docs/contributing.md)。

### 给 Agent

**完整可执行手册以 [`AGENTS.zh.md`](AGENTS.zh.md) 为准**（英文：[`AGENTS.md`](AGENTS.md)）。摘要如下：

| 项 | 默认 |
|----|------|
| 策略档 | **标准** |
| 日真正提交 | **2–4**（筛站不计） |
| 允许 | free、free-queue；自愿徽章换 dofollow；人加好后的 meta/DNS verify |
| 跳过 | 付费；强制互链；点赞换积分；死站；fit 不符 |
| 角色 | 研究打标 → 提交（优先 HTTP/API）→ 邮件分流 → 写本地 CSV |
| 媒体 | 提交前核对产品卡路径；缺站方必填图/视频 → skip 或问人（[assets](docs/assets.zh.md)） |
| 必问人 | 付费、强制互链/强制徽章、点赞换积分、改法律地点、域名邮箱、DNS/meta、拒信重交、未授权批量 PR、补设计导出 |
| 汇报 | 提交 / 等待 / 跳过数量与原因；非请求时不刷屏贴第三方 URL |

产品字段：[docs/product-template.zh.md](docs/product-template.zh.md) · 库字段：[docs/library.zh.md](docs/library.zh.md) · 邮件：[docs/email.zh.md](docs/email.zh.md) · 漏斗：[docs/funnel.zh.md](docs/funnel.zh.md)

### 文档地图

| 文档 | 内容 |
|------|------|
| [AGENTS.zh.md](AGENTS.zh.md) | Agent 操作手册 |
| [docs/guide.zh.md](docs/guide.zh.md) | 完整 playbook |
| [docs/strategy.zh.md](docs/strategy.zh.md) | 策略档与节奏 |
| [docs/reciprocity.zh.md](docs/reciprocity.zh.md) | 交换链 · 徽章 · `/links` |
| [docs/library.zh.md](docs/library.zh.md) | 外链库账本 |
| [docs/assets.zh.md](docs/assets.zh.md) | Logo / OG / 截图 / 视频 / 口号 |
| [docs/verified-agents.zh.md](docs/verified-agents.zh.md) | 哪些 Agent 已验证（目前仅 Grok Bot） |
| [docs/disclaimer.zh.md](docs/disclaimer.zh.md) | 风险免责全文 |
| [docs/troubleshooting.zh.md](docs/troubleshooting.zh.md) | 常见坑（脱敏） |

---

## 注意事项

1. **控速**：推荐每天真正提交约 2–4 个；不要把「一天注册 / 提交几十上百」当推荐玩法。
2. **策略档**：公开文档默认按 **标准** 写；强制互链标准档默认跳过；自愿徽章与所有权验证可以。详见 [docs/strategy.zh.md](docs/strategy.zh.md)。
3. **`/links`**：交换链与徽章放独立页，勿塞进首页主内容；强制互链仅在你升档后使用。
4. **外链库**：实填 CSV 本地保留；本仓库只提供空表头。`targets.yaml` 是历史灵感池，**不保证仍可提交**。
5. **诚实与一致**：产品描述真实；分类匹配；地点 / 主体 / 邮箱与法律页一致，否则易被拒。
6. **媒体**：多数站要 logo / OG / 截图甚至视频；比例与体积不对会被拒。人事先导出，Agent 按站选用；详见 [docs/assets.zh.md](docs/assets.zh.md)。
7. **秘密**：密码、cookie、验证 token、实填库不要提交到 git（见 `.gitignore`）。
8. **GitHub 列表**：先读目标仓库 CONTRIBUTING；无账号主人授权不做批量代开 PR。
9. **博客评论批量**：仅留在分支 `old`，v3 不主推。

---

## 版权声明

本项目采用 **MIT License**（见 [LICENSE](LICENSE)）。

Copyright (c) 2026 **SagaSu**（Jingshen Su / @sujingshen）。

你可以自由使用、复制、修改、合并、发布、分发本软件，惟须保留版权与许可声明。软件按「原样」提供，详见 LICENSE 全文。

---

## 免责声明

- 搜索引擎（含 Google）长期反对**用于操纵排名的链接方案**。短时间、大规模、低相关、模式化外链有被视为垃圾链接或触发处理的风险。
- 外链有质量与来源评价；目录站链接价值参差。**数量 ≠ 排名。** 本项目**不承诺**任何流量或排名结果。
- 本仓库是作业方法说明，**不是**黑帽教程，也不提供「如何规避处罚」的指导。
- 使用本 playbook 产生的站点行为与后果由**使用者自负**；作者与维护者不承担损失。

请阅读完整说明：[docs/disclaimer.zh.md](docs/disclaimer.zh.md)。官方材料可参考 [Google Search documentation](https://developers.google.com/search/docs)（以官方原文为准）。

---

## 关于作者 / 关注我

**SagaSu**（@sujingshen）— 独立开发与产品实验。

- Twitter / X： [https://x.com/sujingshen](https://x.com/sujingshen)
- 个人博客： [https://www.sagasu.art/](https://www.sagasu.art/)

欢迎关注、交流产品与外链作业实践。若本仓库对你有用，也欢迎 Star。
