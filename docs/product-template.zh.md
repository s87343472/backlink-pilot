# 产品卡字段

提交前准备一张「产品卡」。示例文件：[templates/product.example.yaml](../templates/product.example.yaml)。

## 字段清单

| 字段 | 说明 |
|------|------|
| name | 产品名 |
| url | 主站 URL |
| tagline | 一句话 |
| short / long | 短 / 长描述 |
| email | 注册用邮箱（见下） |
| location | 主体地点 — **须与条款 / 隐私一致** |
| founder | 创始人展示名（若需要） |
| pricing | free / freemium / paid … |
| categories | 候选分类关键词 |
| logo / screenshots | 资源路径或 URL |
| twitter / social | 可选 |
| keywords | 检索与分类辅助 |

## 邮箱与地点

- **Agent / bot 邮箱：** 适合大量注册与自动点验证链接  
- **域名 support@：** 更「正规」，但验证码 / 链接常要人点；部分目录**拒绝**临时或 agent 邮箱  
- 地点、公司主体必须与站点法律页一致，否则易拒  

密码、cookie、API token：**不进 git**。
