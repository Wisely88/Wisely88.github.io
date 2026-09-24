window.YINGKE_SOURCES = [
  {
    id: "demo",
    name: "公开测试源",
    items: [
      {
        id: "bbb",
        title: "Big Buck Bunny",
        year: 2008,
        category: "电影",
        tags: ["动画", "开源", "测试"],
        actors: "Blender Foundation",
        desc: "开源动画短片，用作播放器测试。",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/440px-Big_buck_bunny_poster_big.jpg",
        backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Big_buck_bunny_poster_big.jpg/1280px-Big_buck_bunny_poster_big.jpg",
        play: [
          { name: "MP4 直链", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", type: "mp4" },
          { name: "备用同片", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4", type: "mp4" }
        ]
      },
      {
        id: "elephants",
        title: "Elephants Dream",
        year: 2006,
        category: "电影",
        tags: ["动画", "开源"],
        actors: "Blender Institute",
        desc: "Blender 第一部开源电影。",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Elephants_Dream_s5_both.jpg/440px-Elephants_Dream_s5_both.jpg",
        backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Elephants_Dream_s5_both.jpg/1280px-Elephants_Dream_s5_both.jpg",
        play: [{ name: "样例 MP4", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4", type: "mp4" }]
      },
      {
        id: "sintel",
        title: "Sintel",
        year: 2010,
        category: "电影",
        tags: ["动画", "奇幻"],
        actors: "Blender Foundation",
        desc: "开源短片 Sintel。",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sintel_poster.jpg/440px-Sintel_poster.jpg",
        backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Sintel_poster.jpg/800px-Sintel_poster.jpg",
        play: [{ name: "样例 MP4", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4", type: "mp4" }]
      },
      {
        id: "tears",
        title: "Tears of Steel",
        year: 2012,
        category: "电影",
        tags: ["科幻"],
        actors: "Blender Foundation",
        desc: "实拍与 CG 结合的开源短片。",
        poster: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tears_of_Steel_poster.jpg/440px-Tears_of_Steel_poster.jpg",
        backdrop: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Tears_of_Steel_poster.jpg/800px-Tears_of_Steel_poster.jpg",
        play: [{ name: "样例 MP4", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4", type: "mp4" }]
      }
    ]
  },
  {
    id: "hls",
    name: "HLS 测试源",
    items: [
      {
        id: "mux-hls",
        title: "Mux HLS 测试流",
        year: 2024,
        category: "测试",
        tags: ["HLS"],
        actors: "Mux",
        desc: "公开 HLS 测试流。Safari 通常可直接播。",
        poster: "",
        backdrop: "",
        play: [{ name: "HLS", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8", type: "hls" }]
      },
      {
        id: "for-bigger-joyrides",
        title: "For Bigger Joyrides",
        year: 2015,
        category: "测试",
        tags: ["短片"],
        actors: "Google",
        desc: "Google 样例短片。",
        poster: "",
        backdrop: "",
        play: [{ name: "MP4", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4", type: "mp4" }]
      }
    ]
  },
  {
    id: "custom",
    name: "我的片源（占位）",
    items: [
      {
        id: "custom-1",
        title: "把这里换成你的文件",
        year: 2026,
        category: "自定义",
        tags: ["本地"],
        actors: "你",
        desc: "把 play.url 改成你自己的直链即可。",
        poster: "",
        backdrop: "",
        play: [{ name: "示例", url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4", type: "mp4" }]
      }
    ]
  }
];
window.YINGKE_CATS = ["全部", "电影", "测试", "自定义"];
