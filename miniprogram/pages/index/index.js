// pages/index/index.js'/images/health3.jpg/',
const db = wx.cloud.database({});
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    list: [],
    imgUrls: [
    'https://7765-web-9ksud-1259655232.tcb.qcloud.la/index/CgAgFV1ECveABZ_CAAIpu2EyW4A342.jpg?sign=d842c2278eb749ed51760918a49719b3&t=1565226222',
    'https://7765-web-9ksud-1259655232.tcb.qcloud.la/index/6.jpg?sign=3cec0e3946d54d9e96bcc4ae5ffc7266&t=1565226090',
    'https://7765-web-9ksud-1259655232.tcb.qcloud.la/index/7.jpg?sign=6b2aefd8d2a3bd6a0cfb976ae18cefee&t=1565226120',
    'https://7765-web-9ksud-1259655232.tcb.qcloud.la/index/8.jpg?sign=6dc0c1959b2d340b1c89c4d4188bf035&t=1565226135',
    ],
    indicatorDots: false,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  
  //函数：此函数负责获取index集合所有记录，并显示模板中
  //1.获取集合index所有记录
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
    db.collection('index').get({
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
    wx.stopPullDownRefresh(
    console.log(1230))
  },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    // wx.stopPullDownRefresh(
    //   wx.showLoading({
    //     title: '玩命加载中',
    //   })
    // )
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})