declare module YoutubeMp3Downloader {
  export type DownloadFilter = 'audioandvideo' | 'video' | 'videoonly' | 'audio' | 'audioonly';
  export type DownloadQuality = 'lowest' | 'highest' | string | number;
  export type DownloadFormat = 'mp3' | 'ogg' | 'wav' | 'flac' | 'm4a' | 'wma' | 'aac' | 'mp4' | 'mpg' | 'wmv';

  export interface IYoutubeMp3DownloaderOptions {
    ffmpegPath?: string;
    outputPath: string;
    // https://github.com/fent/node-ytdl-core/blob/0574df33f3382f3a825e4bef30f21e51cd78eafe/typings/index.d.ts#L7
    youtubeVideoQuality?: DownloadQuality;
    queueParallelism: number;
    progressTimeout: number;
    filter?: DownloadFilter;
    format?: DownloadFormat;
  }

  export interface IResultObject {
    videoId: string;
  }

  export interface IVideoTask {
    videoId: string;
    // https://github.com/freeall/progress-stream#usage
    progress: {
      percentage: number;
      transferred: number;
      length: number;
      remaining: number;
      eta: number;
      runtime: number;
      delta: number;
      speed: number;
    }
  }
}

interface IDwonloadTask {
  videoId: string;
  fileName: string;
}

declare class YoutubeMp3Downloader {
  constructor(options: YoutubeMp3Downloader.IYoutubeMp3DownloaderOptions)

  cleanFileName(fileName: string): string;
  download(videoId: string, fileName?: string): void;
  performDownload(task: IDwonloadTask, callback: (errorNessage?: string, output?: any) => void): void;
  setOutputPath(parh: string): void;
  setQuality(quality: YoutubeMp3Downloader.DownloadQuality): void;
  setFormat(format: YoutubeMp3Downloader.DownloadFormat): void;
  on(event: 'queueSize', listener: (total : number) => void): this;
  on(event: 'addToQueue' | 'gettingInfo', listener: (videoId: string) => void): this;
  on(event: 'error' | 'finished', listener: (err: any, data: any) => void): this;
  on(event: 'progress', listener: (video: YoutubeMp3Downloader.IVideoTask) => void): this;
}

declare module 'youtube-mp3-downloader' {
  export = YoutubeMp3Downloader;
}
