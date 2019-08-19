// pages/login/login.js
const db = wx.cloud.database({})
Page({

  /**
   * 页面的初始数据
   */
  data: {
      list:[],
  },
  reg: function () {
    //跳转又返回按钮
    wx.navigateTo({
      url: '/pages/reg/reg',
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //1、引用数据库   
    
    //2、开始查询数据了  reg对应的是集合的名称   
    db.collection('reg').get({
      
      //如果查询成功的话    
      success: res => {
        //这一步很重要，给list赋值，没有这一步的话，前台就不会显示值 
        var list = res.data     
        this.setData({
          list:list
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