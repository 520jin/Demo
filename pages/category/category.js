// pages/category/category.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    /*
     * 左侧导航栏的数据      
     */
    navDataList: [{
        id: 1,
        titel: "美食",
        Categorys: [{
            id: 1,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386484218_pc_list.jpg",
            text: "饼干"
          },
          {
            id: 2,
            image: "https://image3.suning.cn/uimg/asbs/ad/1528981806427_imgWap_tmndir.jpg",
            text: "卤味小吃"
          },
          {
            id: 3,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386619902_pc_list.jpg",
            text: "肉脯"
          },
          {
            id: 4,
            image: "https://image1.suning.cn/uimg/asbs/ad/1494386762381_pc_list.jpg",
            text: "薯片"
          },
          {
            id: 5,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386536264_pc_list.jpg",
            text: "坚果"
          },
          {
            id: 6,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386658302_pc_list.jpg",
            text: "果脯"
          },
          {
            id: 7,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386688486_pc_list.jpg",
            text: "点心"
          },
          {
            id: 8,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386898686_pc_list.jpg",
            text: "口香糖"
          },
          {
            id: 9,
            image: "https://image4.suning.cn/uimg/asbs/ad/1528981953497_imgWap_tmndir.jpg",
            text: "豆干"
          },
          {
            id: 10,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386556521_pc_list.jpg",
            text: "糖果"
          },
          {
            id: 11,
            image: "http://image5.suning.cn/uimg/asbs/ad/1528982242289_imgWap_tmndir.jpg",
            text: "海味食品"
          },
          {
            id: 12,
            image: "https://image5.suning.cn/uimg/asbs/ad/1494396906954_pc_list.jpg",
            text: "桂圆"
          }
        ]
      },
      {
        id: 2,
        titel: "家电",
        Categorys: [{
            id: 1,
            image: "https://image5.suning.cn/uimg/asbs/ad/1497000442657_pc_list.jpg",
            text: "变频烤炉"
          },
          {
            id: 2,
            image: "https://image4.suning.cn/uimg/asbs/ad/1493970408235_pc_list.jpg",
            text: "高音炮"
          },
          {
            id: 3,
            image: "https://image2.suning.cn/uimg/cms/img/150969326275453574.png",
            text: "扫地机器人"
          },
          {
            id: 4,
            image: "https://image.suning.cn/uimg/asbs/ad/1493946827440_app_list.jpg",
            text: "先锋笔记本"
          },
          {
            id: 5,
            image: "https://image4.suning.cn/uimg/asbs/ad/1526549803266_imgWap_tmndir.png",
            text: "拯救者"
          },
          {
            id: 6,
            image: "https://image.suning.cn/uimg/asbs/ad/1493946965497_app_list.jpg",
            text: "牛叉手机"
          },
          {
            id: 7,
            image: "https://image3.suning.cn/uimg/asbs/ad/1493019147058_pc_list.jpg",
            text: "节能煤气灶"
          },
          {
            id: 8,
            image: "https://image2.suning.cn/uimg/asbs/ad/1505960193120_imgApp_tmndir.jpg",
            text: "高效电磁炉"
          },
          {
            id: 9,
            image: "https://image.suning.cn/uimg/asbs/ad/1505960704078_imgApp_tmndir.jpg",
            text: "九阳电饭煲"
          },
          {
            id: 10,
            image: "https://image1.suning.cn/uimg/asbs/ad/1493983034658_pc_list.jpg",
            text: "迷你电饭锅"
          },
          {
            id: 11,
            image: "https://image5.suning.cn/uimg/asbs/ad/1520324765517_imgApp_tmndir.jpg",
            text: "高尚上档次电风扇"
          },
          {
            id: 12,
            image: "https://image5.suning.cn/uimg/asbs/ad/1514892720814_imgApp_tmndir.jpg",
            text: "好用电地拖"
          }
        ]
      },
      {
        id: 3,
        titel: "租房",
        Categorys: [{
            id: 1,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386484218_pc_list.jpg",
            text: "饼干"
          },
          {
            id: 2,
            image: "https://image3.suning.cn/uimg/asbs/ad/1528981806427_imgWap_tmndir.jpg",
            text: "卤味小吃"
          },
          {
            id: 3,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386619902_pc_list.jpg",
            text: "肉脯"
          },
          {
            id: 4,
            image: "https://image1.suning.cn/uimg/asbs/ad/1494386762381_pc_list.jpg",
            text: "薯片"
          },
          {
            id: 5,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386536264_pc_list.jpg",
            text: "坚果"
          },
          {
            id: 6,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386658302_pc_list.jpg",
            text: "果脯"
          },
          {
            id: 7,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386688486_pc_list.jpg",
            text: "点心"
          },
          {
            id: 8,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386898686_pc_list.jpg",
            text: "口香糖"
          },
          {
            id: 9,
            image: "https://image4.suning.cn/uimg/asbs/ad/1528981953497_imgWap_tmndir.jpg",
            text: "豆干"
          },
          {
            id: 10,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386556521_pc_list.jpg",
            text: "糖果"
          },
          {
            id: 11,
            image: "https://image5.suning.cn/uimg/asbs/ad/1528982242289_imgWap_tmndir.jpg",
            text: "海味即食品"
          },
          {
            id: 12,
            image: "https://image5.suning.cn/uimg/asbs/ad/1494396906954_pc_list.jpg",
            text: "桂圆"
          }
        ]
      },
      {
        id: 4,
        titel: "生鲜",
        Categorys: [{
            id: 1,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386484218_pc_list.jpg",
            text: "饼干"
          },
          {
            id: 2,
            image: "https://image3.suning.cn/uimg/asbs/ad/1528981806427_imgWap_tmndir.jpg",
            text: "卤味小吃"
          },
          {
            id: 3,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386619902_pc_list.jpg",
            text: "肉脯"
          },
          {
            id: 4,
            image: "https://image1.suning.cn/uimg/asbs/ad/1494386762381_pc_list.jpg",
            text: "薯片"
          },
          {
            id: 5,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386536264_pc_list.jpg",
            text: "坚果"
          },
          {
            id: 6,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386658302_pc_list.jpg",
            text: "果脯"
          },
          {
            id: 7,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386688486_pc_list.jpg",
            text: "点心"
          },
          {
            id: 8,
            image: "https://image3.suning.cn/uimg/asbs/ad/1494386898686_pc_list.jpg",
            text: "口香糖"
          },
          {
            id: 9,
            image: "https://image4.suning.cn/uimg/asbs/ad/1528981953497_imgWap_tmndir.jpg",
            text: "豆干"
          },
          {
            id: 10,
            image: "https://image4.suning.cn/uimg/asbs/ad/1494386556521_pc_list.jpg",
            text: "糖果"
          },
          {
            id: 11,
            image: "https://image5.suning.cn/uimg/asbs/ad/1528982242289_imgWap_tmndir.jpg",
            text: "海味即食品"
          },
          {
            id: 12,
            image: "https://image5.suning.cn/uimg/asbs/ad/1494396906954_pc_list.jpg",
            text: "桂圆"
          }
        ]
      },
      {
        id: 5,
        titel: "汽车"
      },
      {
        id: 6,
        titel: "首饰"
      }
    ],
    /**
     * 右侧的种类数据
     */
    categoryList: [],

    /*初始化基本变量*/
    //定义navDataList的数组下标初始值
    id: 0,
    //左边导航栏的背景色
    changeNavItemStyle: 'background-color:#fff;border-left:15rpx solid peachpuff;',
    nomalNavItemStyle: 'background-color: #f2f2f2;'
  },



  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    //console.log(this.data.navDataList);
    this.setData({
      categoryList: this.data.navDataList[0].Categorys
    })
  },
  /**
   * 判断导航是否被点击
   */
  isTap: function(event) {
    var category = this.data.navDataList[event.currentTarget.dataset.index];
    if (category.Categorys==undefined){
      wx.showToast({
        title: category.titel+'类型的暂无数据',
        icon:'loading',
        mask:true,
        duration:200,
        
      })
      return;
    }
   
    this.setData({
      id: event.currentTarget.dataset.index,
      categoryList: category.Categorys

    });


  },
  // /**
  //  * 生命周期函数--监听页面初次渲染完成
  //  */
  // onReady: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面显示
  //  */
  // onShow: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面隐藏
  //  */
  // onHide: function() {

  // },

  // /**
  //  * 生命周期函数--监听页面卸载
  //  */
  // onUnload: function() {

  // },

  // /**
  //  * 页面相关事件处理函数--监听用户下拉动作
  //  */
  // onPullDownRefresh: function() {

  // },

  // /**
  //  * 页面上拉触底事件的处理函数
  //  */
  // onReachBottom: function() {

  // },

  // /**
  //  * 用户点击右上角分享
  //  */
  // onShareAppMessage: function() {

  // },

})