// pages/appliance/appliance.js
const db = wx.cloud.database({}); 
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    imgUrls: [
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/appliance/24.jpg?sign=6ca462308266c55c4fb129906542a2af&t=1565227871',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/appliance/25.jpg?sign=0046d2c75ed04f2d00bfd7a7d9d67c72&t=1565227889',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/appliance/26.jpg?sign=9a036af853fd18fa618b241334b4a386&t=1565227903',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/appliance/27.jpg?sign=bfea39a60b825eeb6923e0a8bcc420ab&t=1565227919',
      'https://7765-web-9ksud-1259655232.tcb.qcloud.la/appliance/28.jpg?sign=8c45785c506308535df72b3b2a1cf69f&t=1565227933',
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
    db.collection('appliance').get({
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
      title: '器械商城'
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