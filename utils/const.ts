export function getBookImage(index: number): string {
  return `/bijutune${index + 1}.jpg`;
}

export function getMovieImage(bookIndex: number, index: number): string {
  return `/book${bookIndex + 1}/movie${index + 1}.jpg`;
}

interface YoutubeVideoInfo {
  id: string;
  name: string;
}
export const YOUTUBE_VIDEO_IDS: YoutubeVideoInfo[][] = [
  [
    // 1
    { id: 'RSAN-L9JljM', name: '委員長はヴィーナス' },
    { id: 'ZVcCQLkcXao', name: '風神雷神図屏風デート' },
    { id: 'JGh_5VcY2gc', name: '樹花鳥獣図屏風事件' },
    { id: 'j_9EcGdaV6w', name: 'お局のモナ・リザさん' },
    { id: '_odL-IeWTEI', name: '見返りすぎてほぼドリル' },
    { id: 'u2QDRq-UW_8', name: 'LOVEタージ・マハル先輩' },
    { id: 'v5xuP_FBMfI', name: 'オフィーリア、まだまだ' },
    { id: 'FyszN-ap50M', name: '住んでます八橋蒔絵硯箱' },
    { id: 'kNPX0QSTYpI', name: 'ムンクの叫びラーメン' },
    { id: '_ku2ynqTrYw', name: '鳥獣戯画ジム' },
    { id: 'ZVpvLxlX3Cw', name: 'レーサーはゴーギャン' },
    { id: 'yWvEO4D2FB4', name: 'ツタンカーmail' },
    { id: 'CRJcSUUWFeA', name: 'その天女、柄マニアにつき' },
    { id: 'Mmfac-XKrqQ', name: 'ザパーンドプーンLOVE' },
    { id: 'ApjCSddtl3A', name: 'ルソー５' },
    { id: 'vs5hKCuXGDE', name: '転校しないで五絃琵琶' },
  ],
  [
    // 2
    { id: 'z_0hWNkpGjw', name: 'アイネクライネ唐獅子ムジーク' },
    { id: 'K47MDbOOD4o', name: 'ナスカの地上絵、微生物' },
    { id: '0x_dGY-DdtQ', name: '貴婦人でごめユニコーン' },
    { id: 'PPJBp5naSf8', name: '兵馬俑ウエディング' },
    { id: 'YdjzqE4QjjA', name: '保健室に太陽の塔' },
    { id: 'Av42zVqJXl8', name: 'ランチは地獄の門の奥に' },
    { id: 'bW8DxeCx3aQ', name: '紅白梅図屏風グラフ' },
    { id: '_3zy3j_rOtY', name: '真珠の耳飾りのくノ一' },
    { id: 'eNEGYBym3n4', name: '縄文土器先生' },
    { id: 'pMjj2587R9o', name: '火消しが来りて笛を吹く' },
    { id: 'w9q2dGcx-Kw', name: '祖母のコロッセオハット' },
    { id: 'BTC3QSRRkNE', name: '崖のぼり、のちキス' },
    { id: 'TAB7XHgt1cM', name: 'ベーカリー空也' },
    { id: 'u9BH_KPOQVY', name: '便利だわブロードウェイ・ブギウギ' },
    { id: 'qYCR0V4wmmw', name: 'ラス・メニーナス、開演前' },
    { id: 'I0E310ooZH0', name: '姫路城と初デート' },
  ],
  [
    // 3
    { id: 'Hb2PUjMnD1U', name: '洛中洛外シスターズ' },
    { id: 'ob3c_kOyWXU', name: '夏野菜たちのランウェイ' },
    { id: 'Vw6_uyKdWNU', name: '武蔵の遅刻理由' },
    { id: 'DTPw0GRo7_Q', name: '私たちは元パルテノン神殿' },
    { id: 'ZPWlcR21cw0', name: 'Walking!ニケ' },
    { id: 'oToWEH8HLKs', name: '敢えて湖畔' },
    { id: 'mOlz1P3NI6M', name: '月曜日モンスター' },
    { id: 'Fz_JakAlQz0', name: 'ナルキッソス天気予報' },
    { id: 'BzVQ9OQdV4M', name: '通勤フロム山水長巻' },
    { id: '0TzNtM_rHE8', name: '曜変天目ディスコ' },
    { id: 'QNalJSlYYgo', name: '潜入捜査inムーラン・ド・ラ・ギャレット' },
    { id: 'yNX_05LwXUY', name: '噴火する背中' },
    { id: 'v5GZrMVolk8', name: 'プロポーズはラスコーの洞窟で' },
    { id: 'hz9aPSoiG5s', name: '1500年のオーディション' },
    { id: 'T8QIW7WgynU', name: '博士、それ象牙多層球ですよ' },
    { id: 'gdJvYNyUFq0', name: 'サグラダ・編みリア' },
  ],
  [
    // 4
    { id: 'I1f1cuDant8', name: 'ひまわりがお掃除しちゃうわよ' },
    { id: 'KACzjiQEmt4', name: '小面の休日' },
    { id: 'nDVyzpu73dw', name: '雨は愛すが人逃げる' },
    { id: 'g3IIbLdKz2o', name: '厳島ライフセイバー' },
    { id: 'pvOm49Foczo', name: '夢パフューマー麗子' },
    { id: '9mPwQQsOdsA', name: '民衆を温泉に導く自由の女神' },
    { id: 'RobgSVb7jsE', name: 'ツボのツボマッサージ師' },
    { id: 'ycFfBhPqHG0', name: '審判はフリーダ' },
    { id: 'slNrVxPOfNs', name: 'ハッピーバースデーdearニーゼン山' },
    { id: '6lw7OJbpGoQ', name: '出会えないりんごとオレンジ' },
    { id: '7SFneJraj7M', name: 'ヘルスチェックインザヘル' },
    { id: '6FzPLfCgPfM', name: '雪中のフォーメーション＜山＞' },
    { id: 'fplluaVQ0Cg', name: '睡蓮ノート' },
    { id: 'wBTvtzAy5g8', name: '夕暮れ、浄土堂ショー' },
    { id: '_GuI3PROu6Y', name: '特急三日月宗近' },
    { id: 'pia0iJLqzmA', name: '何にでも牛乳を注ぐ女' },
  ],
  [
    // 5
    { id: 'LyloNQRfYxw', name: '鮭ミラーボール' },
    { id: 'ANZYn8QxaiI', name: 'ひとり縄文会議' },
    { id: 'ZSjfVAjkQRg', name: 'ツイスト出産' },
    { id: '-Gl1ausEkXI', name: '平熱でうらめしや' },
    { id: '3EpT09Ohnho', name: 'テュルプ博士の参観日' },
    { id: 'G8Od0dUirqo', name: '指揮者が手' },
    { id: 'BNP2Py4_ugY', name: '写楽式洗顔' },
    { id: 'qxjTSbLGoq8', name: '地元が快楽の園' },
    { id: 'eOOJ-Hx0BHE', name: '人を真似る瓶' },
    { id: '3-DORh9vvmE', name: '龍虎旅館' },
    { id: '_M2gduWRdbo', name: '私を投げ入れて' },
    { id: 'bOaN2Ms6CUw', name: '立体曼荼羅マスゲーム' },
    { id: '-BG44KR5328', name: 'いちご泥棒大脱走' },
    { id: 'IXZaMG1NVKc', name: 'おりがみのよりとも' },
    { id: 'uSqOTbeq1eA', name: '再配達には金印を' },
    { id: 'hQ5WDcanR6g', name: '夏秋草図屏風デート' },
  ],
  [
    // 6
    { id: 'cIyIGsXHeB0', name: 'エスパーカフェ' },
    { id: 'U2FBIWPEs2E', name: 'アルルの訳あり物件' },
    { id: 'JRpbC415jtM', name: '電気さえあれば' },
    { id: 'v394cL3OcS4', name: '松林ズ' },
    { id: '6Gq2onDDEl0', name: 'ダンス寿司' },
    { id: '1sWeFk77Xy8', name: 'ひそひそと、秘儀の間で' },
    { id: 'mBkH2RBVEkE', name: 'お互い擬態' },
    { id: 'wzwA7ccvNTc', name: 'ひとよだけ巡査' },
    { id: 'QAY8LaDLFsc', name: '犬派はモノクロ猫派はカラー' },
    { id: 'QMPkAreByhQ', name: '私たちが削るべきは床' },
    { id: '5PrxG1RELg0', name: '納涼シアター' },
    { id: 'mbtfWIk7wyw', name: '歩く泡' },
    { id: 'KhKIBXiolow', name: '落穂拾子' },
    { id: '0gwhPn4bOr4', name: '竜田川にフタをする' },
    { id: 'lH2_zy1imo4', name: 'デンタルクリニック死の島' },
    { id: 'jEpevtrwi2o', name: '続いては、信貴山の石橋さ〜ん' },
    { id: '-fuKaBwqosk', name: 'プリマヴェーラに家庭訪問' },
  ],
  [
    // 7
    { id: 'zV1gwR-x52s', name: '鶴下ウェイ' },
    { id: 'AHuAHO5Hi8Y', name: '書紀に必要なギャルの精神' },
    { id: 'k_uA3phAxXc', name: '玉虫の家庭教師が玉虫厨子' },
    { id: 'Yg8KciFtH9g', name: 'スパイゴッデス' },
    { id: '_y-5z-Rj1Vw', name: 'アルノルフィーニ夫妻のベルト防衛戦' },
    { id: 'kmPnUtteRks', name: '焔(ほのお)のお習字教室' },
  ],
];

export function getYoutubeVideoId(
  bookIndex: number,
  index: number
): string | undefined {
  return YOUTUBE_VIDEO_IDS[bookIndex]?.[index]?.id;
}
