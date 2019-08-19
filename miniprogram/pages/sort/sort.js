// pages/family/family.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },
    jumpComment1: function () {
      //跳转又返回按钮
      wx.navigateTo({
        url: '/pages/family/family',
      });
    },
    jumpComment2: function () {
      //跳转又返回按钮
      wx.navigateTo({
        url: '/pages/mom/mom',
      });
    },
    jumpComment3: function () {
      //跳转又返回按钮
      wx.navigateTo({
        url: '/pages/health/health',
      });
    },
    jumpComment4: function () {
      //跳转又返回按钮
      wx.navigateTo({
        url: '/pages/appliance/appliance',
      });
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
})