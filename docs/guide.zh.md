# Backlink Pilot 完整指南（v3）

先读 [免责声明](disclaimer.zh.md)。默认策略档：**标准**（见 [strategy.zh.md](strategy.zh.md)）。

## 1. 为什么用 Agent，而不是纯脚本

- 目录表单差异大，常要登录、验证码、排期  
- 真正难的是：**策略判断 + 邮件闭环 + 控速**  
- 脚本仍适合：无账号即时表单、简单 API、重复字段探测  

v2 CLI 与浏览器自动化整包在分支 [`old`](https://github.com/s87343472/backlink-pilot/tree/old)。博客评论批量也只保留在 `old`，v3 不主推。

## 2. 角色拆分

1. **研究 Agent：** 找候选站；标注 free / free-queue / paid / badge / reciprocal / dead  
2. **提交 Agent：** 按日限额提交；能 curl / API 则不用浏览器  
3. **邮件 Agent / 例程：** 自动点验证链接；记收录 / 拒信；域名邮箱留给人  
4. **人：** 拍板付费、点赞换积分、改地点、挂徽章、DNS / meta  

## 3. 策略与节奏

见 [strategy.zh.md](strategy.zh.md)。摘要：每天真正提交约 2–4 个；多产品轮换；标准档允许自愿徽章与所有权验证，默认跳过付费与强制互链。

## 4. 交换链、徽章、所有权

见 [reciprocity.zh.md](reciprocity.zh.md)。交换与徽章放在 `/links`；强制互链标准档默认不接。

## 5. 产品卡

见 [product-template.zh.md](product-template.zh.md)。地点与邮箱须与条款一致。

## 6. 漏斗

见 [funnel.zh.md](funnel.zh.md)：

`harvest → 去重 → 探测 → 规则入队 → 提交 → 邮件 → 账本`

## 7. 邮件

见 [email.zh.md](email.zh.md)。验证链接可自动；付费推销忽略；域名所有权等人加完再 verify。

## 8. 外链库

见 [library.zh.md](library.zh.md)。公开仓库只有空表；实填库本地留。

## 9. GitHub 资源列表

见 [github-lists.zh.md](github-lists.zh.md)。先读 CONTRIBUTING；常批权限须账号主人同意。

## 10. Agent 怎么配

- 通用：[agent-setup.zh.md](agent-setup.zh.md)  
- Grok Bot 案例（虚构产品）：[grok-bot.zh.md](grok-bot.zh.md)  
- 提示词草稿：[templates/agent-prompt.md](../templates/agent-prompt.md)  

## 11. 安全与合规（公开版）

- 不提交密钥、密码、cookie 到 git  
- 不教绕过支付墙；付费项标注 skip  
- 尊重站点 ToS；验证码 / 2FA 交给人时说明清楚  

## 12. 从 v2 迁移

见 [migrating-from-v2.zh.md](migrating-from-v2.zh.md)。

## 13. 排障

见 [troubleshooting.zh.md](troubleshooting.zh.md)（脱敏，不点名实交站）。
