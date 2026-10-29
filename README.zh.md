# Backlink Pilot v3

**用 AI Agent 按可控节奏做目录 / 列表外链：默认免费与免费排队，把交换链、徽章、所有权验证当成可配置成本，并用账本沉淀成可复用的外链库。**

> 需要旧版 CLI（OpenClaw / Claude Code / bb-browser / Playwright）？请看分支 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)（v2.1）。  
> **必读：** [风险免责与建议](docs/disclaimer.zh.md) — 搜索引擎反对操纵排名的链接方案；本仓库**不承诺排名**。

[English](README.md) · [完整指南](docs/guide.zh.md) · [文档首页](docs/index.md)

---

## 为什么是 Agent，而不是「一条命令打几百站」

目录表单差异大，常要登录、验证码、排期和邮件验证。真正难的是 **策略判断 + 邮件闭环 + 控速**，不是单次填表。脚本仍适合无账号即时表单和简单 API；主路径应是带日限额的 Agent 作业。

## 5 分钟上手

1. 读 [免责声明](docs/disclaimer.zh.md) 与 [策略档](docs/strategy.zh.md)（默认 **标准** 档）
2. 复制 [产品卡模板](templates/product.example.yaml) 与 [外链库空表](templates/library.schema.csv)
3. 按需建站点 `/links` 页（见 [交换链与徽章](docs/reciprocity.zh.md)）
4. 配置 Agent：[通用配置](docs/agent-setup.zh.md) 或 [Grok Bot 案例](docs/grok-bot.zh.md)（虚构产品演示）
5. **每天真正提交约 2–4 个站**；大批量只做筛站，不做提交

## 文档地图

| 文档 | 内容 |
|------|------|
| [guide.zh.md](docs/guide.zh.md) | 完整 playbook |
| [disclaimer.zh.md](docs/disclaimer.zh.md) | Google / SEO 风险与建议 |
| [strategy.zh.md](docs/strategy.zh.md) | 策略档、节奏、跳过规则 |
| [reciprocity.zh.md](docs/reciprocity.zh.md) | 交换链 / 徽章 / 所有权 · `/links` |
| [library.zh.md](docs/library.zh.md) | 外链库账本与复用提交流程 |
| [agent-setup.zh.md](docs/agent-setup.zh.md) | 通用 Agent 配置 |
| [grok-bot.zh.md](docs/grok-bot.zh.md) | Grok Bot 案例（虚构产品） |
| [funnel.zh.md](docs/funnel.zh.md) | 找站 → 提交 → 记账 |
| [email.zh.md](docs/email.zh.md) | 验证邮件与拒信 |
| [github-lists.zh.md](docs/github-lists.zh.md) | awesome / 资源列表 PR |
| [troubleshooting.zh.md](docs/troubleshooting.zh.md) | 常见坑（脱敏） |
| [migrating-from-v2.zh.md](docs/migrating-from-v2.zh.md) | 从 v2 CLI 迁移 |

## 默认策略（标准档）摘要

- **允许：** 免费、免费排队；自愿挂徽章换 dofollow；域名 meta / DNS 所有权验证  
- **默认跳过：** 付费插队；**强制**互链 / 交换才能收录；点赞换积分（除非你单独授权例外）  
- **节奏：** 每天约 2–4 次真正提交；多产品轮换  

细节见 [strategy.zh.md](docs/strategy.zh.md)。

## 仓库里有什么 / 没有什么

| 有 | 没有 |
|----|------|
| 方法文档与空模板 | 可运行的批量提交 CLI（在 `old`） |
| `targets.yaml` 历史清单（**未再维护**） | 真实提交日志、密码、cookie |
| 空外链库 CSV 表头 | 填好的目录站名单或实交 live URL |

## License

MIT · 作者 sagasu。v3 按真实外链作业经验重写文档；自动化代码见 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)。
