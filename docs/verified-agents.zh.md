# 已验证的 Agent（v3）

本页回答：**哪些 AI Agent 真正按本仓库 v3 的 `AGENTS.md` / 模板跑通过**，哪些只是「设计上可兼容、尚未验证」。

**结论先说：** 截至 **2026-10**，v3 主 playbook（`main` 分支）**仅验证过 Grok Bot**。Claude Code、OpenAI Codex、DeepSeek 类 Agent、Cursor Cloud Agent、单独的 ChatGPT / Custom GPT、OpenClaw 等 **均未** 在本仓库上做过系统冒烟（读手册 → 真实或 dry-run 提交 + 邮件闭环）。

设计目标是 **Agent 无关**（Markdown 手册 + 空模板），但「设计成可给任意 Agent 读」≠「已验证能跟着做」。在有人按下方标准记下一轮通过之前，请把未列表里的运行时一律当作 **未验证**。

英文对照：[verified-agents.md](verified-agents.md)。

### 欢迎反馈

用任意 Agent（含矩阵里「未验证」的）按本仓库手册测过的，欢迎开 [GitHub Issue](https://github.com/s87343472/backlink-pilot/issues) 或 PR：能不能读懂 `AGENTS`、卡在哪一步、是否遵守日限额与人闸。跑通上文标准的，请按文末维护者清单发 PR，把该 Agent 标成已验证。勿提交实填库、真实站名单、密码 / cookie。方法、模板、翻译改进见 [contributing.md](contributing.md)。

---

## 「已验证」指什么

某 Agent 要算 **v3 已验证**，须在使用本仓库说明的前提下，至少完整观察到一次：

1. **读得懂并遵守** [`AGENTS.md`](../AGENTS.md) / [`AGENTS.zh.md`](../AGENTS.zh.md) + 产品卡；默认不发明付费 / 强制互链路径  
2. **遵守日限额 2–4** 与标准档跳过规则（付费、强制互链、点赞换积分等）  
3. **能研究 / 打标候选**，并完成 HTTP/API 提交，或在验证码、DNS、域名邮箱等人闸处干净停下问人  
4. **处理或汇报** 邮件验证 / 通过 / 拒信，且不向人类刷屏垃圾进度  
5. **本地写** 外链库 / submit-log，且 **不把秘密提交进 git**

未满足以上任一项，或仅「能打开 README」——不算验证通过。

---

## 验证矩阵（v3 / `main`）

| Agent / 运行时 | v3 状态 | 说明 |
|----------------|---------|------|
| **Grok Bot** | **已验证** | 本 playbook 从真实的多产品目录 / 列表提交流程沉淀（策略标准、日提交 2–4、邮件闭环、外链库账本、`/links`、媒体资产）。验证窗口：至 **2026-10**。参考形态见 [grok-bot.zh.md](grok-bot.zh.md)（文中产品名为虚构）。 |
| Claude Code | **未验证** | 未对「读 AGENTS.md + 模板 → 提交/邮件闭环」做过系统冒烟。 |
| OpenAI Codex | **未验证** | 同上。 |
| DeepSeek 类 Agent | **未验证** | 同上。 |
| Cursor Cloud Agent | **未验证** | 同上。 |
| ChatGPT / Custom GPT（单独） | **未验证** | 同上。 |
| OpenClaw | **未验证（对 v3）** | 见下方「与 `old` 分支的区别」。 |
| 其他未点名的 Agent | **未验证** | 欢迎按文末清单补测后 PR。 |

不要把上表解读成「未验证的就不能用」或「应该也能跑」——只表示 **还没有书面验证记录**。

---

## 与 v2.1 分支 `old` 的区别（勿混淆）

| | v3（`main`） | v2.1（[`old`](https://github.com/s87343472/backlink-pilot/tree/old)） |
|--|-------------|------------------------------------------------------------------------|
| 形态 | Markdown playbook + 模板 | CLI / 浏览器自动化工具箱 |
| 文档入口 | `AGENTS.md`、README 七段结构 | 旧 README / 适配器说明 |
| 曾提及的运行时 | **仅 Grok Bot 记为已验证** | 历史上把 Claude Code、OpenClaw、bb-browser、Playwright 等当作 **CLI 工具箱目标** |

在 `old` 上「能接某 CLI / 浏览器适配器」**不等于**「已验证能理解并跟随 v3 的 `AGENTS.md`」。读者若只需要 v2.1 脚本路径，请切分支 `old`，并读 [migrating-from-v2.zh.md](migrating-from-v2.zh.md)；不要据此在 README 里宣称 Claude / OpenClaw 已通过 v3 验证。

---

## 维护者：如何新增一条「已验证」

补测通过后，请用 PR 更新本页表格，并尽量附上：

1. **日期**（验证完成日，建议 `YYYY-MM`）  
2. **Agent 名称 + 版本**（若可知：模型 / 客户端 / 插件）  
3. **测了什么**：是否覆盖上文 5 条标准；真实提交还是 dry-run；策略档与日限额  
4. **证据说明**：本地日志路径、私有笔记链接等——**勿**把真实站名清单、密码、cookie、实填库推进公开仓库  
5. **同步**：更新本页 ZH/EN 双子、README 文档地图中的简述，以及（若适用）[agent-setup](agent-setup.zh.md)

PR 标题示例：`docs: mark <Agent> verified for v3 (YYYY-MM)`。

---

## 相关文档

- Agent 手册：[AGENTS.zh.md](../AGENTS.zh.md)  
- 通用配置：[agent-setup.zh.md](agent-setup.zh.md)  
- Grok Bot 参考运行时：[grok-bot.zh.md](grok-bot.zh.md)  
- 完整指南：[guide.zh.md](guide.zh.md)
