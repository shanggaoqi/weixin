// pages/mom/mom.js
const db = wx.cloud.database({}); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    imgUrls: [
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/mom/15.jpg?sign=64120019d94f7dbbcf6bcfbcd30e4907&t=1565227663',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/mom/16.jpg?sign=3e07815203391eb9e1ffda18b64d98fe&t=1565227677',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/mom/17.jpg?sign=696c511b39626edbfe0fc4be9fc02d5f&t=1565227694',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/mom/18.jpg?sign=e8f5d7e78b0e31aace165ed413e8aa2b&t=1565227709',
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
    db.collection('mom').get({
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
      title: '母婴中心'
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