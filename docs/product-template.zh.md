# 产品卡字段

提交前准备一张「产品卡」。示例文件：[templates/product.example.yaml](../templates/product.example.yaml)。  
媒体规格与清单：[assets.zh.md](assets.zh.md)。

## 基础字段

| 字段 | 说明 |
|------|------|
| name | 产品名 |
| url | 主站 URL |
| tagline / slogan | 一行口号 |
| tagline_short | 更短变体（严限字符） |
| elevator | 约 10 秒口述版（可选） |
| short / long | 短 / 长描述 |
| email | 注册用邮箱 |
| location | 主体地点 — **须与条款 / 隐私一致** |
| founder | 创始人展示名（若需要） |
| pricing | free / freemium / paid … |
| categories | 候选分类关键词 |
| twitter / social | 可选 |
| keywords | 检索与分类辅助 |
| strategy_tier / daily_submit_cap | 策略与日限额 |

## 媒体字段

| 字段 | 说明 |
|------|------|
| assets_dir | 素材目录 |
| favicon | 站点图标 |
| logo | 方 logo（优先透明 PNG ≥512） |
| logo_wordmark | 横版字标（可选） |
| og_image | 社交 / OG，常见 1200×630 |
| banner | launch / hero（可选） |
| screenshots[].path / alt / form_factor | 桌面或移动截图 |
| promo_video / promo_gif | 宣传视频或 GIF；无则 `null` |

## 邮箱与地点

- **Agent / bot 邮箱：** 适合大量注册与自动点验证链接  
- **域名 support@：** 更「正规」，验证常要人点；部分目录拒绝临时或 agent 邮箱  
- 地点、公司主体必须与站点法律页一致  

密码、cookie、API token：**不进 git**。大媒体文件是否进 git 由你自定；产品卡里给 **Agent 可读取的本地路径** 即可。
