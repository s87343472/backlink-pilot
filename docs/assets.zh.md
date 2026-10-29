# 媒体与文案素材清单

很多目录 / launch 站不只收 URL：还要 **logo、OG 图、截图、banner、口号，有时还有宣传视频**。提交前把素材备齐，并写进产品卡路径；缺素材时 Agent 应跳过该站或问人，而不是交残缺表单。

虚构示例产品 **Northstar Notes** 仅作路径示意。

## 建议目录结构

把素材放在产品目录下（路径写进产品卡，**大文件勿强行推进公开 git** 若仓库不需要）：

```
products/northstar-notes/
  product.yaml
  assets/
    favicon.ico
    favicon-32.png
    logo-1024.png          # 方图，透明底优先
    logo-wordmark.png      # 可选横版字标
    og-1200x630.png        # 社交分享 / OG
    screenshot-desktop-1.png
    screenshot-desktop-2.png
    screenshot-mobile-1.png
    banner-1200x400.png    # 或站点要求的尺寸
    promo.mp4              # 可选
    promo.gif              # 可选短循环
```

## 清单（提交前勾选）

| 素材 | 常见规格（以目标站为准） | 说明 |
|------|--------------------------|------|
| Favicon | 32×32 / 48×48 ICO 或 PNG | 部分「添加到主屏 / 目录卡片」会用 |
| Logo（方） | ≥512×512，最好 1024×1024；PNG 透明底 | 最常被要；勿带大面积白边裁切失误 |
| Logo（横 / 字标） | 按站要求 | 导航条或列表用 |
| OG / 社交分享图 | 常见 **1200×630**（约 1.91:1） | Open Graph、Twitter/X card；无则站点可能抓到难看的自动截图 |
| 桌面截图 | ≥1280 宽，清晰 UI | 常要 1–5 张；展示真实产品，避免空状态糊图 |
| 移动截图 | 常见 9:19 或站方比例 | 移动优先产品几乎必交 |
| Banner / Hero | 如 1200×400、1920×1080 等 | launch 页、featured 位 |
| 宣传视频 | MP4/WebM，时长与大小看站规 | 可选；没有就标 `promo_video: null` |
| GIF | 短、循环、文件别过大 | 部分站接受 GIF 代替视频 |
| 口号 / Tagline | 见下文多长度 | 几乎必填 |
| 图注 alt | 每张有一句英文或站点语言 | 无障碍与部分表单字段 |

**以目标站说明为准**；上表是备货尺寸，交之前读该站的 upload 提示。

## 口号 / 文案变体（写进产品卡）

| 字段 | 长度感 | 用途 |
|------|--------|------|
| `tagline` / `slogan` | ≈6–12 词 / 中文约 12–24 字 | 列表一行 |
| `tagline_short` | 更短，适合徽章旁 | 严限字符时 |
| `short` | 1–2 句 | 卡片摘要 |
| `long` | 段落 | 详情页 |
| `elevator` | 口头 10 秒版 | 视频字幕 / 社交 |

同一事实，多长度；**不要**每个目录编造不同夸大卖点。

## 谁准备什么

| 角色 | 负责 |
|------|------|
| **人** | 设计导出、品牌色、最终 logo/OG/视频、法律上可用的截图（无未授权客户数据） |
| **Agent** | 检查产品卡路径是否存在、尺寸/体积是否明显不符、缺必填素材时 skip 或问人；按站要求选对文件上传；写库 `requires`（如 `logo,screenshots,og`） |

Agent **不要**用低质随机图冒充产品 UI，除非人明确授权用占位并知悉可能被拒。

## 常见拒因 / 失败模式

- 比例错误（把方 logo 硬拉成 OG 1.91:1）
- 过小（如 64×64 当主 logo）或过大超站方 MB 限制
- 透明底在站方 JPEG 预览里变黑/白块（可备一份非透明备选）
- 水印、「草稿」「Figma」边框、大量压缩马赛克
- 截图与产品卡描述不符 / 过期 UI
- 视频无声道要求却只有静音、或格式不支持
- 口号超字符上限未准备 short 变体

## 与外链库

在 library 的 `requires` 中注明媒体需求，例如：`logo+3screenshots+og`；可选列 `requires_media`（见 schema）。缺素材且无法补齐 → `skipped` + `skip_reason=missing-media`。

更多字段见 [product-template.zh.md](product-template.zh.md) · Agent 规则见 [AGENTS.zh.md](../AGENTS.zh.md)。
