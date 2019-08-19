// pages/cart/cart.js
Page(Object.assign({

  /**
   * 页面的初始数据
   */
  data: {
    isAllSelect: false,
    totalMoney: 0,
    // 商品详情介绍
    carts: [
      {
        pic: "https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/30.jpg?sign=e221cf35e26edf996fcf239a06dbe0d5&t=1565060069",
        name: "风寒感冒颗粒",
        price: 7.90,
        isSelect: false,
        // 数据设定
        count: {
          quantity:2,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/31.jpg?sign=a9b948bcf62463ceeca0d643685049dc&t=1565060117',
        name: "感冒清热软胶囊",
        price: 22.00,
        isSelect: false,
        // 数据设定
        count: {
          quantity:1,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/32.jpg?sign=26084a5510b374a165346a605c65bd7a&t=1565060141',
        name: "四季感冒片",
        price: 16.80,
        isSelect: false,
        // 数据设定
        count: {
          quantity:3,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/33.jpg?sign=c3ac11e25684b6a99d059fed1b4d6031&t=1565060159',
        name: "葛根汤颗粒",
        price: 36.00,
        isSelect: false,
        // 数据设定
        count: {
          quantity:10,
          min: 1,
          max: 20
        },
      },
      {
        pic: 'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/34.jpg?sign=6258a460e7c4461e6e3dc4167b71769e&t=1565060178',
        name: "藿胆丸",
        price: 8.00,
        isSelect: false,
        // 数据设定
        count: {
          quantity:1,
          min: 1,
          max: 20
        },
      },
      {
        pic: "https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/35.jpg?sign=006f148a260218eadde0280f7b0612b0&t=1565060198",
        name: "川贝止咳糖浆",
        price: 28,
        isSelect:false,
        // 数据设定
        count: {
          quantity:1,
          min: 1,
          max: 20
        },
      },
    ],
  },
  toBuy: function () {
    //跳转又返回按钮
    wx.navigateTo({
      url: '/pages/weixin/weixin',
    });
  },
  //勾选事件处理函数  
  switchSelect: function (e) {
    // 获取item项的id，和数组的下标值  
    var Allprice = 0, i = 0;
    let id = e.target.dataset.id,
      index = parseInt(e.target.dataset.index);
    this.data.carts[index].isSelect = !this.data.carts[index].isSelect;
    //价钱统计
    if (this.data.carts[index].isSelect) {
      this.data.totalMoney = this.data.totalMoney+this.data.carts[index].price;
    }
    else {
      this.data.totalMoney = this.data.totalMoney - this.data.carts[index].price;
    }
    //是否全选判断
    for (i = 0; i < this.data.carts.length; i++) {
      Allprice = Allprice + this.data.carts[i].price;
    }
    if (Allprice == this.data.totalMoney) {
      this.data.isAllSelect = true;
    }
    else {
      this.data.isAllSelect = false;
    }
    this.setData({
      carts: this.data.carts,
      totalMoney: this.data.totalMoney,
      isAllSelect: this.data.isAllSelect,
    })
  },
  //全选
  allSelect: function (e) {
    //处理全选逻辑
    let i = 0;
    if (!this.data.isAllSelect) {
      this.data.totalMoney=0;
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = true;
        this.data.totalMoney = this.data.totalMoney+ this.data.carts[i].price; 
      }
    } 
  
     else {
      for (i = 0; i < this.data.carts.length; i++) {
        this.data.carts[i].isSelect = false;
      }
      this.data.totalMoney = 0;
    }
    this.setData({
      carts: this.data.carts,
      isAllSelect: !this.data.isAllSelect,
      totalMoney: this.data.totalMoney,
    })
  },
  // 结算
  toBuy() {
    
    // wx.showToast({
    //   title: '结算',
    //   image:'/images/cart/1.jpeg',
    //   icon: 'success',
    //   duration: 10000
    // });
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  //数量变化处理
  handleQuantityChange(e) {
    var componentId = e.componentId;
    var quantity = e.quantity;
    this.data.carts[componentId].count.quantity = quantity;
    this.setData({
      carts: this.data.carts,
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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
}))