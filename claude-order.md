値が入っている場合 → 「販売期間：◯月〜◯月」

値が両方空の場合 → 「通年販売」

前提

メタフィールド

product.metafields.season.start_month（例: "06"）

product.metafields.season.end_month（例: "09")

値は ゼロ埋め 2桁文字列 "01"〜"12"

実装タスク

商品カードの任意の位置（例: 商品タイトル下など）に以下のLiquidを追加する。

start_month と end_month を日本語の「◯月」に変換し、文言を組み立てる。

両方未設定なら「通年販売」と表示する。

コードスニペット
{%- assign start_m = product.metafields.season.start_month | default: '' -%}
{%- assign end_m   = product.metafields.season.end_month   | default: '' -%}

{%- assign month_labels = 
  "01:1月|02:2月|03:3月|04:4月|05:5月|06:6月|07:7月|08:8月|09:9月|10:10月|11:11月|12:12月" 
  | split: "|" -%}

{%- assign start_label = '' -%}
{%- assign end_label = '' -%}

{%- for pair in month_labels -%}
  {%- assign kv = pair | split: ":" -%}
  {%- if kv[0] == start_m -%}{%- assign start_label = kv[1] -%}{%- endif -%}
  {%- if kv[0] == end_m   -%}{%- assign end_label   = kv[1] -%}{%- endif -%}
{%- endfor -%}

<div class="product-season text-sm opacity-80">
  {%- if start_label != '' or end_label != '' -%}
    販売期間：{{ start_label }}〜{{ end_label }}
  {%- else -%}
    通年販売
  {%- endif -%}
</div>

受け入れ基準

start=06, end=09 → 「販売期間：6月〜9月」

start=12, end=06 → 「販売期間：12月〜6月」

両方空 → 「通年販売」

カードの任意の位置に正しく表示される