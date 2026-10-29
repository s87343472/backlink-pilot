# 外链库账本

目标：每次筛站与提交都沉淀成**自己的外链库**。新产品上线时，优先打「已验证过」的站，而不是每次从零 harvest。

与仓库里的 `targets.yaml` 关系：旧 yaml 是**历史大池、未再维护**；外链库是你本地 / 私有的权威账本。

## 字段说明

空表头见 [templates/library.schema.csv](../templates/library.schema.csv)。

| 字段 | 含义 |
|------|------|
| domain / name | 目录站 |
| submit_url | 提交入口 |
| free_status | free / free-queue / paid / unknown / dead |
| link_type | dofollow / nofollow / unknown |
| requires | 无账号 / 注册 / OAuth / 域名邮箱 / meta·DNS / 徽章 / 反链 / 人工审 … |
| reciprocity | none / optional-badge / required-badge / required-backlink |
| backlink_placement | 若需反链：如 `/links` |
| queue_notes | 排队时长、是否排期 launch |
| email_behavior | 验证链接 / 仅回执 / 常推付费 |
| fit | 适合产品类型（工具 / 游戏 / 招聘板 / 通用…） |
| last_checked | 上次探活或提交日期 |
| result_by_product | 各产品：not_tried / submitted / pending / live / rejected / skipped |
| skip_reason | 付费、死站、fit 不符、拒 agent 邮箱… |
| notes | 拒信规律、地点要求等 |

## 使用方式

1. 筛站 / 提交时写入或更新一行（Agent 维护，人可改）  
2. 新产品：按 `fit` + `free_status` + `requires` 过滤「可快交」队列，再套日限额  
3. **实填库不要推进本公开仓库**（见 `.gitignore`：`library.filled.csv` 等）

## 公开仓库只提供

- 字段说明（本文）  
- 空 CSV 表头  
- 方法文档  

不提供填好的站名列表或提交结果链接。
