export function getBookImage(index: number): string {
  return `/bijutune${index + 1}.jpg`;
}

export function getMovieImage(bookIndex: number, index: number): string {
  return `/book${bookIndex + 1}/movie${index + 1}.jpg`;
}

const YOUTUBE_VIDEO_IDS = [
  [
    // 1
    'RSAN-L9JljM', // 委員長はヴィーナス
    'ZVcCQLkcXao', // 風神雷神図屏風デート
    'JGh_5VcY2gc', // 樹花鳥獣図屏風事件
    'j_9EcGdaV6w', // お局のモナ・リザさん
    '_odL-IeWTEI', // 見返りすぎてほぼドリル
    'u2QDRq-UW_8', // LOVEタージ・マハル先輩
    'v5xuP_FBMfI', // オフィーリア、まだまだ
    'FyszN-ap50M', // 住んでます八橋蒔絵硯箱
    'kNPX0QSTYpI', // ムンクの叫びラーメン
    '_ku2ynqTrYw', // 鳥獣戯画ジム
    'ZVpvLxlX3Cw', // レーサーはゴーギャン
    'yWvEO4D2FB4', // ツタンカーmail
    'CRJcSUUWFeA', // その天女、柄マニアにつき
    'Mmfac-XKrqQ', // ザパーンドプーンLOVE
    'ApjCSddtl3A', // ルソー５
    'vs5hKCuXGDE', // 転校しないで五絃琵琶
  ],
  [
    // 2
    'z_0hWNkpGjw', // アイネクライネ唐獅子ムジーク
    'K47MDbOOD4o', // ナスカの地上絵、微生物
    '0x_dGY-DdtQ', // 貴婦人でごめユニコーン
    'PPJBp5naSf8', // 兵馬俑ウエディング
    'YdjzqE4QjjA', // 保健室に太陽の塔
    'Av42zVqJXl8', // ランチは地獄の門の奥に
    'bW8DxeCx3aQ', // 紅白梅図屏風グラフ
    '_3zy3j_rOtY', // 真珠の耳飾りのくノ一
    'eNEGYBym3n4', // 縄文土器先生
    'pMjj2587R9o', // 火消しが来りて笛を吹く
    'w9q2dGcx-Kw', // 祖母のコロッセオハット
    'BTC3QSRRkNE', // 崖のぼり、のちキス
    'TAB7XHgt1cM', // ベーカリー空也
    'u9BH_KPOQVY', // 便利だわブロードウェイ・ブギウギ
    'qYCR0V4wmmw', // ラス・メニーナス、開演前
    'I0E310ooZH0', // 姫路城と初デート
  ],
  [
    // 3
    'Hb2PUjMnD1U', // 洛中洛外シスターズ
    'ob3c_kOyWXU', // 夏野菜たちのランウェイ
    'Vw6_uyKdWNU', // 武蔵の遅刻理由
    'DTPw0GRo7_Q', // 私たちは元パルテノン神殿
    'ZPWlcR21cw0', // Walking!ニケ
    'oToWEH8HLKs', // 敢えて湖畔
    'mOlz1P3NI6M', // 月曜日モンスター
    'Fz_JakAlQz0', // ナルキッソス天気予報
    'BzVQ9OQdV4M', // 通勤フロム山水長巻
    '0TzNtM_rHE8', // 曜変天目ディスコ
    'QNalJSlYYgo', // 潜入捜査inムーラン・ド・ラ・ギャレット
    'yNX_05LwXUY', // 噴火する背中
    'v5GZrMVolk8', // プロポーズはラスコーの洞窟で
    'hz9aPSoiG5s', // 1500年のオーディション
    'T8QIW7WgynU', // 博士、それ象牙多層球ですよ
    'gdJvYNyUFq0', // サグラダ・編みリア
  ],
  [
    // 4
    'I1f1cuDant8', // ひまわりがお掃除しちゃうわよ
    'KACzjiQEmt4', // 小面の休日
    'nDVyzpu73dw', // 雨は愛すが人逃げる
    'g3IIbLdKz2o', // 厳島ライフセイバー
    'pvOm49Foczo', // 夢パフューマー麗子
    '9mPwQQsOdsA', // 民衆を温泉に導く自由の女神
    'RobgSVb7jsE', // ツボのツボマッサージ師
    'ycFfBhPqHG0', // 審判はフリーダ
    'slNrVxPOfNs', // ハッピーバースデーdearニーゼン山
    '6lw7OJbpGoQ', // 出会えないりんごとオレンジ
    '7SFneJraj7M', // ヘルスチェックインザヘル
    '6FzPLfCgPfM', // 雪中のフォーメーション＜山＞
    'fplluaVQ0Cg', // 睡蓮ノート
    'wBTvtzAy5g8', // 夕暮れ、浄土堂ショー
    '_GuI3PROu6Y', // 特急三日月宗近
    'pia0iJLqzmA', // 何にでも牛乳を注ぐ女
  ],
  [
    // 5
    'LyloNQRfYxw', // 鮭ミラーボール
    'ANZYn8QxaiI', // ひとり縄文会議
    'ZSjfVAjkQRg', // ツイスト出産
    '-Gl1ausEkXI', // 平熱でうらめしや
    '3EpT09Ohnho', // テュルプ博士の参観日
    'G8Od0dUirqo', // 指揮者が手
    'BNP2Py4_ugY', // 写楽式洗顔
    'qxjTSbLGoq8', // 地元が快楽の園
    'eOOJ-Hx0BHE', // 人を真似る瓶
    '3-DORh9vvmE', // 龍虎旅館
    '_M2gduWRdbo', // 私を投げ入れて
    'bOaN2Ms6CUw', // 立体曼荼羅マスゲーム
    '-BG44KR5328', // いちご泥棒大脱走
    'IXZaMG1NVKc', // おりがみのよりとも
    'uSqOTbeq1eA', // 再配達には金印を
    'hQ5WDcanR6g', // 夏秋草図屏風デート
  ],
  [
    // 6
    'cIyIGsXHeB0', // エスパーカフェ
    'U2FBIWPEs2E', // アルルの訳あり物件
    'JRpbC415jtM', // 電気さえあれば
    'v394cL3OcS4', // 松林ズ
    '6Gq2onDDEl0', // ダンス寿司
    '1sWeFk77Xy8', // ひそひそと、秘儀の間で
    'mBkH2RBVEkE', // お互い擬態
    'wzwA7ccvNTc', // ひとよだけ巡査
    'QAY8LaDLFsc', // 犬派はモノクロ猫派はカラー
    'QMPkAreByhQ', // 私たちが削るべきは床
    '5PrxG1RELg0', // 納涼シアター
    'mbtfWIk7wyw', // 歩く泡
    'KhKIBXiolow', // 落穂拾子
    '0gwhPn4bOr4', // 竜田川にフタをする
    'lH2_zy1imo4', // デンタルクリニック死の島
    'jEpevtrwi2o', // 続いては、信貴山の石橋さ〜ん
    '-fuKaBwqosk', // プリマヴェーラに家庭訪問
  ],
  [
    // 7
    'zV1gwR-x52s', // 鶴下ウェイ
    'AHuAHO5Hi8Y', // 書紀に必要なギャルの精神
    'k_uA3phAxXc', // 玉虫の家庭教師が玉虫厨子
    'Yg8KciFtH9g', // スパイゴッデス
    '_y-5z-Rj1Vw', // アルノルフィーニ夫妻のベルト防衛戦
    'kmPnUtteRks', // 焔(ほのお)のお習字教室
  ],
];

export const EXCLUDED_YOUTUBE_VIDEO_IDS = [];

export function getYoutubeVideoId(
  bookIndex: number,
  index: number
): string | undefined {
  return YOUTUBE_VIDEO_IDS[bookIndex]?.[index];
}
