# 漏斗：找站 → 提交 → 记账

公开文档只描述漏斗与标签，**不贴实交站名或结果链接**。

```
harvest 候选
  → 去重（按 domain / submit_url）
  → 探测（活死 / 是否表单 / 是否付费文案 / 是否要求反链·徽章）
  → 规则入队（只留 free / free-queue；标准档再放行 optional-badge-for-dofollow）
  → 提交（脚本优先；复杂走浏览器；遵守日限额）
  → 邮件（验证 / 回执 / 通过 / 拒绝 / 忽略广告）
  → 账本（submitted / pending / live / rejected / skipped）
```

## 入队规则（示例）

写入本地库一行时至少填：`free_status`、`requires`、`reciprocity`、`fit`。

- `paid` 且策略非进取 → 不入提交队列  
- `required-backlink` 且策略为标准 → 不入队（或另队列等人升档）  
- `fit` 不符 → `skipped` + `skip_reason`  

## 提交优先级

1. 库中该产品 `not_tried` 且 `free` + 要求少  
2. 同产品尚未覆盖的 `free-queue`  
3. 需徽章 / 所有权的项：确认 `/links` 或 DNS 已就绪后再交  

日限额用完即停，把剩余留在队列。
