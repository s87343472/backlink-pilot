# 邮件处理规则

| 类型 | 动作 |
|------|------|
| 邮箱验证链接 / 短码 | Agent 可自动处理（注意短时效） |
| 收录通过 / 上线 | 记进度，可通知人 |
| 被拒 | 记原因；改字段重交需人确认 |
| newsletter / 付费插队 / 引流 | 忽略、不回 |
| 域名所有权（meta / DNS） | 人加标签，Agent 再点 verify |

## 实务提示

- 用 **Agent 自有收件箱** 接注册验证，减少打扰人  
- 目录要求 **域名邮箱** 时，把验证交给人，或换站  
- 同一推销邮件反复出现 → 库中标记 `email_behavior=upsell-heavy`，不必每次问人  
- 拒信若要求换邮箱或改地点：摘要给人，**不要**自行改法律页说法  

相关：[reciprocity.zh.md](reciprocity.zh.md)（所有权）· [troubleshooting.zh.md](troubleshooting.zh.md)
