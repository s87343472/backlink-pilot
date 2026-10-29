# 通用 Agent 配置

适用于任意能读文档、跑例程、收邮件或驱动浏览器的 AI Agent。Grok Bot 专篇见 [grok-bot.zh.md](grok-bot.zh.md)。

文档设计成 Agent 无关，但 **v3 目前仅 Grok Bot 被验证过**；Claude Code / Codex / DeepSeek 等未做系统冒烟。完整矩阵与「已验证」标准：[verified-agents.zh.md](verified-agents.zh.md)。

## 最小配置清单

1. **策略档：** 默认标准；写进系统提示或项目说明  
2. **日限额：** 真正提交 2–4 / 天  
3. **产品卡：** 每产品一份 YAML / Markdown（见 templates）  
4. **外链库路径：** 本地 CSV；gitignore  
5. **邮箱：** Agent 收件箱用于注册；域名邮箱策略写清  
6. **交接句式：** 何时必须问人（付费、强制互链、DNS、拒信重交）  

提示词骨架：[AGENTS.zh.md](../AGENTS.zh.md) · [templates/agent-prompt.md](../templates/agent-prompt.md)。

## 建议例程

| 例程 | 触发 | 行为 |
|------|------|------|
| 外链邮件 | 收件即跑 / 每小时 | 分类验证 / 通过 / 拒信 / 广告；自动点安全验证链接 |
| 每日提交 | 工作日定时 | 从库中取 2–4 个未交项；交完写账本并汇报 |

## 工具分工（示意）

- 研究：网页检索、公开列表、探活 HEAD/GET  
- 简单提交：HTTP 表单 / 公开 API  
- 复杂表单：桌面浏览器（需人值守验证码时停下）  
- 进度：本地 CSV / JSON，不进公开 git  

## 多产品

每产品一个目录：`product` 卡 + `submit-log` + `RESULTS`（名称自定）。日限额在产品间轮换。
