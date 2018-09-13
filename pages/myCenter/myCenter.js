var app = getApp();
// pages/myCenter/myCenter.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //我的订单的数量
     orderSum:2,
    //我的拼团的数量
      ptSum:3,
    //选卡项的数据
    termList: [{
        id: 1,
        image: "/images/iconfont-dingdan.png",
        text: "我的订单",
         url:"#",
      },
      {
        id: 2,
        image: "/images/iconfont-card.png",
        text: "我的代金券",
         url:"#"
      },
      {
        id: 3,
        image: "/images/iconfont-icontuan.png",
        text: "我的拼团",
         url:"#"
      },
      {
        id: 4,
        image: "/images/iconfont-address.png",
        text: "收货地址管理",
         url:"#"
      },
      {
        id: 5,
        image: "/images/iconfont-kefu.png",
        text: "联系客服",
         url:"#"
      },
      {
        id: 6,
        image: "/images/iconfont-help.png",
        text: "常见问题",
         url:"#"
      },

    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})