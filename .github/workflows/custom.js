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
        name: "Github",
        link: "https://github.com/sparkzky"
      },
      {
        name: "CV",
        link: "/sparkzky.github.io/cv.html"
      }
    ],
    headTitle: ["暮春早夏的月亮", "原是情人的月亮，不比秋冬是诗人的月亮"],
    friendLinks: [
      {
        name: "watercow",
        link: "https://github.com/watercow/watercow.github.io/issues"
      },
      {
        name: "ycjgg",
        link: "https://ycjgg.github.io"
      }
    ],
    extraFooters: [
      {
        title: "",
        text: "Nothing",
        link: "https://beian.miit.gov.cn/"
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
        href: "https://avatars2.githubusercontent.com/u/16968934?s=460&v=4"
      }
    ]
  ]
}

module.exports = mainConfig
