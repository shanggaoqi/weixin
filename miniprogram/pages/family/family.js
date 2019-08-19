// pages/family/family.js
const db = wx.cloud.database({}); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [],
    imgUrls: [
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/10.jpg?sign=e65700f233148b81b089f7fe8e673992&t=1565227479',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/11.jpg?sign=931e6cd06a7c826cd2215b51500d9564&t=1565227538',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/12.jpg?sign=0e9fafbc4d7176cea321aed56816a73d&t=1565227558',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/13.jpg?sign=154c03739cf4006312a1b84ebe8a3aaf&t=1565227574',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/family/14.jpg?sign=f6a93c9567dd3ee3e45b1efb68e872a5&t=1565227598',
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
    //1、引用数据库   
    const db = wx.cloud.database({
      //这个是环境ID不是环境名称     
      env: 'web-9ksud'
    })
    //2、开始查询数据了  news对应的是集合的名称   
    db.collection('family').get({
      //如果查询成功的话    
      success: res => {      
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
      title: '家庭常备'
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