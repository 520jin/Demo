// pages/goods/goods.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      sliderImgList:[
        { id: 1, image:"https://imgservice.suning.cn/uimg1/b2c/image/9tLO009gh0Xn7lOZEZGx9w==.jpg_400w_400h_4e_100Q"},
        { id: 2, image: "https://imgservice.suning.cn/uimg1/b2c/image/zxINU9wlXdJhU4t0XIgXjw==.jpg_400w_400h_4e_100Q" },
        { id: 3, image: "https://imgservice.suning.cn/uimg1/b2c/image/HKFoqzZzstqLJMe5d4qNIA==.jpg_800w_800h_4e_100Q" }
      ],
    region: ["广东省", "茂名市", "高州"],
    multiTypes:[
      ["草莓味", "苹果味", "芒果味", "蓝莓味", "西瓜味", "香蕉味"],
      ["180g", "300g", "500g"],
      [1,2,3,4,5,6,7,8,9,10]
      ] ,
    typeindex:[0,0,0],
    array:["1","2","3"],
    index:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  danxuan: function (e) {
    this.setData({
      index: e.detail.value
    });
  },
  bindPickerChange:function(e){
    this.setData({
      region: e.detail.value
    });
  },
  typeChange: function (e) {
    this.setData({
      typeindex: e.detail.value
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})