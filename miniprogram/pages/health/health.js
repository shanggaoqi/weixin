// pages/health/health.js
const db = wx.cloud.database({}); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    imgUrls: [
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/health/19.jpg?sign=1f72c3b689a36dfc70fff90983375d7f&t=1565227772',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/health/20.jpg?sign=308890a8388ce8a0a0dc506e08ea40be&t=1565227785',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/health/21.jpg?sign=0cb8ec0b4c2d32fdb0a2c65123900fc6&t=1565227800',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/health/22.jpg?sign=1bbddfe456f35d30e522bd40c33a0596&t=1565227812',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/health/23.jpg?sign=cc9bee851db53f7c57eed9a3ea3db056&t=1565227825',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const db = wx.cloud.database({
      //这个是环境ID不是环境名称     
      env: 'web-9ksud'
    })
    //2、开始查询数据了  news对应的是集合的名称   
    db.collection('health').get({
      //如果查询成功的话    
      success: res => {
        console.log(res)
        //这一步很重要，给list赋值，没有这一步的话，前台就不会显示值      
        this.setData({
          list: res.data
        })
        console.log(list)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    wx.setNavigationBarTitle({
      title: '滋补保健'
    })
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