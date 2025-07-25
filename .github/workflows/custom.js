let mainConfig = {
  vssueConfig: {
    owner: "sparkzky",
    repo: "sparkzky.github.io",
    clientId: "2783a4b752f56c0ed912",
    clientSecret: "c8d9116fcade901567ff34aa1fb09216731683a3"
  },

  repoConfig: {
    owner: "sparkzky",
    repo: "sparkzky.github.io",
    pushBranch: "master",
    email: "sparkhhhhhhhhhh@outlook.com",
    filterUsers: ["sparkzky"]
  },

  title: "Sparkzky's Blog",
  description: "Nothing to be found",
  customDomain: "",
  base: "/",
  lang: "zh",

  slogan: {
    main: "Just",
    sub: "Take it easy",
  },

  themeConfig: {
    nav: [
      {
        name: "首页",
        link: "/sparkzky.github.io"
      },
      {
        name: "照片",
        link: "/sparkzky.github.io/gallery"
      },
      {
        name: "Github",
        link: "https://github.com/sparkzky"
      },
      {
        name: "CV",
        link: "/sparkzky.github.io/cv.html"
      }
    ],
    headTitle: ["每想到一些天地都容纳不下的说法，心里就烧起烟霞"],
    friendLinks: [
      
    ],
    extraFooters: [
      {
        title: "",
        text: "Nothing",
        link: ""
      }
    ],
    pageCount: true
  },

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "https://avatars.githubusercontent.com/u/146502758?s=400&u=b8a39089c210f747787383af20846de9556386c8&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
