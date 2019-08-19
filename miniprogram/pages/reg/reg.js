Page({

  /**
   * 页面的初始数据
   */
  data: {
    ajxtrue: false,
  },
  // 手机号验证
  blurPhone: function (e) {
    var phone = e.detail.value;
    let that = this
    if (!(/^1[34578]\d{9}$/.test(phone))) {
      this.setData({
        ajxtrue: false
      })
      if (phone.length != 11) {
        wx.showToast({
          title: '手机号码不正确',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
      wx.showToast({
        title: '手机号正确',
        icon: 'success',
        duration: 2000
      })
    }
  },
  // 密码验证
  blurpwd: function (e) {
    var pwd = e.detail.value;
    let that = this
    if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pwd)) {
      this.setData({
        ajxtrue: false
      })
      if (pwd.length <= 6 || pwd.length >= 20) {
        wx.showToast({
          title: '数字和字母组成',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
      wx.showToast({
        title: '密码格式正确',
        icon: 'success',
        duration: 2000
      })
    }
  },

  // 密码验证
  blurpass: function (e) {
    var pass = e.detail.value;
    let that = this
    if (!/^(?![0-9]+$)(?![a-zA-Z]+$)[a-zA-Z0-9]{6,20}/.test(pass)) {
      this.setData({
        ajxtrue: false
      })
      if (pass.length <= 6 || pass.length >= 20) {
        wx.showToast({
          title: '数字和字母组成',
          icon: 'success',
          duration: 2000
        })
      }
    } else {
      this.setData({
        ajxtrue: true
      })
      wx.showToast({
        title: '密码格式正确',
        icon: 'success',
        duration: 2000
      })
    }
  },
  //添加
  formSubmit: function (e) {
    const db = wx.cloud.database()
    if (e.detail.value.phone.length == 0 || e.detail.value.pwd.length == 0) {
      wx.showToast({
        title: '注册失败',
        icon: 'success',
        duration: 2000
      })
      console.log('手机号密码不能为空')
    }else{
    db.collection('reg').add({
      data: {
        phone: e.detail.value.phone,
        pwd: e.detail.value.pwd,
        pass: e.detail.value.pass
      },
      success: res => {
        // 在返回结果中会包含新创建的记录的 _id
        this.setData({
          phone: e.detail.value.phone,
          pwd: e.detail.value.pwd,
          pass: e.detail.value.pass
        })
        wx.showToast({
          title: '注册成功',
          icon: 'success',
          duration: 5000
        })
        wx.navigateTo({
          url: '/pages/login/login',
        }); 
      },
     })
    }
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