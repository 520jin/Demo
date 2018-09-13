// pages/car/car.js
Page({
  
  /**
   * 页面的初始数据
   */
  data: {
    carItemList:[],
    arr:[{id:"1",ip:"2"}],
    region: ["广东省", "广州市", "天河区"],
    array: [],
    flag:true,
    showAddress:false
  },
  //修改收货地址
  addressChange:function(e){
    this.setData({
      region:e.detail.value
    })
  },
  //添加购物项
  append: function(e){
    if (this.data.flag) {
      console.log("11111")
      this.data.array.push(wx.getStorageSync("goodsList"));
      wx.setStorageSync("array", this.data.array);
    }else{
    var list = wx.getStorageSync("array");
    list.push(wx.getStorageSync("goodsList"));
    wx.setStorageSync("array", list);
    console.log(list);
    }
   
    console.log(wx.getStorageSync("array"))
    this.setData({
      carItemList: wx.getStorageSync("array")
    })
   
  },
  //返回上一页
  backFore: function(e){
    wx.redirectTo({
      url: '/pages/shopList/shopList',
    })
  },
  //展示地址
  showAddress: function(e){
    this.setData({
      showAddress:!this.data.showAddress
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      carItemList: wx.getStorageSync("array")
    })
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
    if (wx.getStorageSync("array").length !== 0) {
      console.log("0000");
      this.data.flag = false;
    }
    console.log(1111111111)
    console.log(wx.getStorageSync("goodsList"))
    if (wx.getStorageSync("goodsList") !== '') {
      this.append();
      wx.setStorageSync("goodsList", '')
    }

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