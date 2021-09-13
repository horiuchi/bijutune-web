import fetch from 'node-fetch';
import {writeFile } from 'fs/promises';
import { join } from 'path';
import * as qs from 'querystring';

// eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-var-requires
const { apiKey } = require('./.key');

const ApiUrl = 'https://youtube.googleapis.com/youtube/v3/playlistItems';
const playlistId = 'PLcynJ47QaWNuynFw5-uESyLHgHXxhKApj';
const lastVideoId = '-fuKaBwqosk'; // プリマヴェーラに家庭訪問

const outputPath = join(__dirname, '../utils/unrecorded.ts');

interface PlayListItems {
  items: PlayListItem[];
  nextPageToken: string;
}
interface PlayListItem {
  id: string;
  snippet: {
    publishedAt: string; // date
    title: string;
    description: string;
    playlistId: string;
    position: number;
    resourceId: {
      kind: string;
      videoId: string;
    };
  };
}

interface ResultItem {
  id: string;
  name: string;
}

async function loadPlaylist(): Promise<PlayListItems> {
  const url =
    ApiUrl +
    '?' +
    qs.stringify({
      playlistId,
      part: 'snippet',
      maxResults: 20,
      key: apiKey as string,
    });
  const res = await fetch(url);
  const json = (await res.json()) as PlayListItems;
  // console.log(JSON.stringify(json, null, 2));
  return json;
}

function convertList(list: PlayListItem[]): ResultItem[] {
  const results: ResultItem[] = [];
  for (const item of list) {
    const id = item.snippet.resourceId.videoId;
    if (id === lastVideoId) {
      break;
    }
    const name = convertTitle(item.snippet.title);
    results.push({ id, name });
  }
  return results;
}
function convertTitle(title: string): string {
  // '[びじゅチューン！] 焔(ほのお)のお習字教室 | NHK'
  const m = /\] ([^ ]+) \|/.exec(title);
  if (m == null) {
    return title;
  }
  return m[1];
}

async function outputFile(items: ResultItem[]): Promise<void> {
  const content = `import { YoutubeVideoInfo } from './const';

  export function getUnrecordedVideos(): YoutubeVideoInfo[] {
    return UNRECORDED_VIDEO_IDS;
  }

  // from https://www.youtube.com/playlist?list=PLcynJ47QaWNuynFw5-uESyLHgHXxhKApj
  const UNRECORDED_VIDEO_IDS: YoutubeVideoInfo[] =${JSON.stringify(items, null, 2)};`;

  await writeFile(outputPath, content, 'utf-8');
}

async function main(): Promise<void> {
  const list = await loadPlaylist();
  const result = convertList(list.items);
  await outputFile(result.reverse());
}
main().catch((err) => console.error(err));
