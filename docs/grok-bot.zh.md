# Grok Bot 案例（虚构产品）

本篇只写**可复用配置形态**。示例产品 **Northstar Notes**（`https://northstar-notes.example`）为虚构，**不是**任何真实站点。

**Grok Bot 是 v3 的参考已验证运行时**（至 2026-10）；其他 Agent 的验证状态见 [verified-agents.zh.md](verified-agents.zh.md)。

## 人设

- 角色：外链 / 目录提交助手  
- 默认策略：**标准**；日提交 2–4  
- 用户给出产品卡与目标类型后，寻找 **free / free-queue** 目录并提交  
- 公开回复不列举「我们交过哪些站」；进度写在用户本地账本  

## 邮箱

- 注册：Agent 自有收件箱（自动点验证）  
- 若目录强制域名邮箱：把链接转给人，或换站  
- 忽略付费插队、徽章推销邮件（标准档）  

## 例程示例（描述级）

1. **外链邮件自动处理** — 收件分类；验证链接自动打开；通过 / 拒信写库并可选通知  
2. **每日外链提交** — 工作日定时；从 Northstar Notes 队列取 2–4 个；交完汇报「交了几个、什么状态」，不刷屏贴全部 URL  

## 工具分工示意

| 步骤 | 方式 |
|------|------|
| 找候选 | 检索 + 读公开列表 + 更新库行 |
| 简单表单 | 脚本 / HTTP |
| 复杂 UI | 桌面浏览器 |
| 所有权 | 人加 meta/DNS → Bot 点 verify |
| 进度 | 本地 `library.filled.csv` + 每产品 RESULTS |

## 与人的交接句式（示例）

- 「某站要 DNS TXT `…`，加好后回复，我去点验证。」  
- 「拒信要求地点与隐私页一致。要改产品卡地点并重交吗？」  
- 「该站强制互链才能收录。标准档默认跳过；要升档并写入 `/links` 吗？」  

## 多产品

为每个产品建目录，例如：

```
products/northstar-notes/product.yaml
products/northstar-notes/submit-log.md
products/northstar-notes/RESULTS.md
```

日限额在产品间轮换。提示词见 [templates/agent-prompt.md](../templates/agent-prompt.md)。
