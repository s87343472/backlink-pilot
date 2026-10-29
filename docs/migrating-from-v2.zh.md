# 从 v2 CLI 迁到 v3 Agent 玩法

| 旧（分支 `old`） | 新（`main` v3） |
|------------------|-----------------|
| `node cli.js` + bb-browser / Playwright | Agent playbook + 例程 |
| OpenClaw / Claude Code 主叙事 | 通用 Agent；Grok Bot 为案例之一 |
| 偏「可自动提交很多站」 | 清单仅参考；日提交 2–4 |
| 适配器驱动 | 策略 + 邮件 + 账本驱动 |
| 博客评论批量 | 仅留在 `old`，v3 不主推 |

## 何时仍用 `old`

- 你只想在本地 Chrome 上跑已有适配器 / 脚本  
- 需要 `batch-submit` 一类旧工具且自知风险  

检出：

```bash
git clone https://github.com/s87343472/backlink-pilot.git
cd backlink-pilot
git checkout old
```

## 何时用 v3

- 多产品、要邮件闭环与日限额  
- 想沉淀可复用外链库  
- 把交换链 / 徽章 / 所有权当成明确成本  

把 `targets.yaml` 当作**灵感池**即可：探活后写入你自己的 `library.filled.csv`，不要假设 yaml 内 URL 仍可交。
