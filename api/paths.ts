import { getBookImage, getMovieImage, getYoutubeVideoId } from '../utils/const';

const BaseUrl = 'http://192.168.1.30:9000/rpc';
const RootPath = '/movie';

export interface BookData {
  name: string;
  path: string;
  index: number;
  image: string;
  movies: MovieGroup[];
}

export interface MovieData {
  type: 'main' | 'explanatory' | 'karaoke';
  name: string;
  path: string;
}

export interface MovieGroup {
  name: string;
  index: number;
  image: string;
  main: MovieData;
  explanatory: MovieData;
  karaoke: MovieData;
  youtubeId: string;
}

interface ResponseData {
  name: string;
  path: string;
  directory: boolean;
  size: number;
}

let cache: BookData[] | undefined;

export async function getAllPath(): Promise<BookData[]> {
  if (cache !== undefined) {
    return cache;
  }

  const base = BaseUrl + '/ls';
  const root = await fetchGet(base + RootPath);
  const result = root
    .filter((data) => /DVD BOOK\d?$/.test(data.name))
    .sort((a, b) => compareString(a.name, b.name))
    .map(toBook);

  const children = await Promise.all(
    result.map((p) => fetchGet(base + encodeURI(p.path)))
  );
  children.map((c, i) => {
    result[i].movies = toMovieGroup(c, i);
  });
  if (result.length > 0) {
    cache = result;
  }
  return result;
}

export function getMovieUrl(path: string): string {
  return BaseUrl + '/cat' + path;
}

async function fetchGet(url: string): Promise<ResponseData[]> {
  const res = await fetch(url);
  if (!res.ok) {
    console.warn('Error to call API.', res.status, url);
    throw new Error('Failed to fetch: ' + url);
  }
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  return await res.json();
}

function compareString(a: string, b: string): -1 | 0 | 1 {
  if (a > b) return 1;
  if (a < b) return -1;
  return 0;
}

function toBook(data: ResponseData, index: number): BookData {
  return {
    name: data.name,
    path: data.path,
    index,
    image: getBookImage(index),
    movies: [],
  };
}
function toMovieGroup(data: ResponseData[], book: number): MovieGroup[] {
  const result: MovieGroup[] = [];
  for (const item of data) {
    const m = toMovie(item);
    if (m === undefined) {
      continue;
    }

    if (result[m.index] === undefined) {
      result[m.index] = {
        name: m.name,
        index: m.index,
        image: getMovieImage(book, m.index),
        main: m.movie,
        explanatory: m.movie,
        karaoke: m.movie,
        youtubeId: getYoutubeVideoId(book, m.index) ?? '',
      };
    } else {
      switch (m.movie.type) {
        case 'main':
          result[m.index].main = m.movie;
          break;
        case 'explanatory':
          result[m.index].explanatory = m.movie;
          break;
        case 'karaoke':
          result[m.index].karaoke = m.movie;
          break;
      }
    }
  }
  return result;
}
function toMovie(
  data: ResponseData
): { movie: MovieData; name: string; index: number } | undefined {
  function parseType(type: string): MovieData['type'] | undefined {
    switch (type) {
      case '1':
        return 'main';
      case '2':
        return 'explanatory';
      case '3':
        return 'karaoke';
      default:
        return;
    }
  }

  const m = /^(\d+)-(\d)\.(.+)\.mp4/.exec(data.name);
  if (m === null) {
    return;
  }
  const index = parseInt(m[1], 10) - 1;
  const type = parseType(m[2]);
  const name = m[3];
  if (type === undefined) {
    return;
  }
  return {
    movie: {
      type,
      name: data.name,
      path: data.path,
    },
    name,
    index,
  };
}
