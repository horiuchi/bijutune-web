import { YoutubeVideoInfo } from './const';

export function getUnrecordedVideos(): YoutubeVideoInfo[] {
  return UNRECORDED_VIDEO_IDS;
}

// from https://www.youtube.com/playlist?list=PLcynJ47QaWNuynFw5-uESyLHgHXxhKApj
const UNRECORDED_VIDEO_IDS: YoutubeVideoInfo[] = [
  {
    id: 'zV1gwR-x52s',
    name: '鶴下ウェイ',
  },
  {
    id: 'AHuAHO5Hi8Y',
    name: '書記に必要なギャルの精神',
  },
  {
    id: 'k_uA3phAxXc',
    name: '玉虫の家庭教師が玉虫厨子',
  },
  {
    id: 'Yg8KciFtH9g',
    name: 'スパイゴッデス',
  },
  {
    id: '_y-5z-Rj1Vw',
    name: 'アルノルフィーニ夫妻のベルト防衛戦',
  },
  {
    id: 'kmPnUtteRks',
    name: '焔(ほのお)のお習字教室',
  },
  {
    id: 'gn5eyDB5cTY',
    name: '銅鐸仮面舞踏会',
  },
  {
    id: 'l2af7z_Yylk',
    name: '葉が地に着くその前に',
  },
  {
    id: '3UIvjmmyQmY',
    name: '海の幸のチューン',
  },
  {
    id: 'oAReH7gzBcU',
    name: '猫の手もアダムの手も借りたい',
  },
];
