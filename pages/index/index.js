//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    //主题栏数据
    sliderImgList: [{
        id: 1,
        image: "/images/sliderImg1.jpg",
         path: "/pages/shopList/shopList"
      },
      {
        id: 1,
        image: "/images/sliderImg2.jpg",
         path: "/pages/shopList/shopList"
      },
      {
        id: 1,
        image: "/images/sliderImg3.jpg",
         path: "/pages/shopList/shopList"
      }
    ],
    navList: [{
        id: 1,
        image: "/images/nav1.jpg",
        text: "美食",
        path: "/pages/shopList/shopList",
        opentype:"navigate"
      },
      {
        id: 2,
        image: "/images/nav2.jpg",
        text: "沐浴",
        path: "/pages/shopList/shopList",
        opentype:"navigate"
      },
      {
        id: 3,
        image: "/images/nav3.jpg",
        text: "卡拉Ok",
        path:"/pages/shopList/shopList",
        opentype:"navigate"
      },
      {
        id: 4,
        image: "/images/nav4.jpg",
        text: "找工作",
        path:"/pages/shopList/shopList",
        opentype:"navigate"
      },
      {
        id: 5,
        image: "/images/nav5.jpg",
        text: "补习班",
        path: "/pages/shopList/shopList",
        opentype:"navigate"
      },
      {
        id: 6,
        image: "/images/nav6.jpg",
        text: "租房",
        path:"/pages/shopList/shopList",
        opentype:"navigate"
      },
      {
        id: 7,
        image: "/images/nav7.jpg",
        text: "维修",
        path: "/pages/shopList/shopList",
        opentype:"navigate"
      },
      {
        id: 8,
        image: "/images/nav8.jpg",
        text: "电器",
        path:"/pages/shopList/shopList",
        opentype:"navigate"
      },
      {
        id: 9,
        image: "/images/icon_pressed.png",
        text: "更多",
        path:"/pages/category/category",
        opentype:"switchTab"
      }
    ]
  },
  onLoad: function() {

  }
})