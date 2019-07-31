module.exports = {
  audioFormats: {
    wav: null,
    flac: null,
    m4a: null,
    wma: null,
    mp3: {
      codec: 'libmp3lame',
    },
    ogg: {
      codec: 'libvorbis',
    },
    aac: {
      format: 'adts'
    },
  },
  videoFormats: {
    mp4: null,
    mpg: null,
    wmv: null,
  }
}