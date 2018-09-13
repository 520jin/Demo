// pages/shopList/shopList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
    goodsList:[
      { id: 1, image: "https://image3.suning.cn/uimg/b2c/newcatentries/0070204492-000000000742867539_1.jpg_300w_300h_4e?ver=2003", name: "优米思沙琪玛蜜枣芝麻混合1000g酥红枣早餐糕点办公室美食小吃零食袋装", tips:"奶香十足 | 营养早餐 | 美味实惠",price:30.90,num:2100,score:80,goodsSum:100},
      { id: 2, image: "https://image2.suning.cn/uimg/b2c/newcatentries/0070165898-000000000127977655_1.jpg_300w_300h_4e?ver=2003", name: "蒸蛋糕奶香原味900g营养早代餐美食品点心口袋面包小吃节日礼盒", tips: "年货礼盒 | 蒸蛋糕 | 早餐面包", price: 39.90, num: 1800, score: 99,goodsSum:0},
      { id: 3, image: "https://image2.suning.cn/uimg/b2c/newcatentries/0070061119-000000000694063801_1.jpg_300w_300h_4e?ver=2001", name: "threesquirrels休闲食品糕点美食办公室零食榴莲味", tips: "喷香糕点 | 榴莲口味", price: 19.90, num: 1000, score: 60,goodsSum: 400},
      { id: 4, image: "https://imgservice1.suning.cn/uimg1/b2c/image/HHdkdt-5e6yv1ZnOj0HWBw==.jpg_300w_300h_4e", name: "threesquirrels休闲零食糕点点心美食香芒味糕类袋装", tips: "香芒味麻薯 | 日式麻薯", price: 31.80, num: 2100, score: 85,goodsSum: 300},
      { id: 5, image: "https://imgservice3.suning.cn/uimg1/b2c/image/omHXY1IrfTdWMKN6YYDlYQ==.jpg_300w_300h_4e", name: "手撕面包 800g手撕面包撕棒-原味整箱 包邮营养早餐面包糕点点心小吃美食休闲零食", tips: "奶香十足 | 营养早餐 | 美味实惠", price: 30.90, num: 2100, score: 75.5,goodsSum:25 },
      { id: 6, image: "https://imgservice1.suning.cn/uimg1/b2c/image/nhQYMDYp1YXprH7iASCp6w==.jpg_300w_300h_4e", name: "乳酸菌小口袋面包500g散装网红美食小白心里软办公室零食早餐面包下午茶糕点", tips: "奶香十足 | 营养早餐 | 美味实惠", price: 25.80, num: 100, score: 95,goodsSum:0 }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(this.data.goodsList[1].goodsSum);
      console.log(this.data.goodsList[1].goodsSum==0);
  },
  // 跳转到商品详情
  linkToDetail:function(e){
    wx.navigateTo({
      url: '/pages/goods/goods',
    })
  },
  //将商品加入购物车
  joinCar:function(e){
    // console.log(e);
    // console.log(e.currentTarget.dataset.id);
    var data=this.data.goodsList[e.currentTarget.dataset.id];
    console.log(data)
    wx.setStorageSync("goodsList", data);
    wx.switchTab({
      url: '/pages/car/car',
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