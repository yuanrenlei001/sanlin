const app = getApp();
const template = require('../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    user:'',
    text:'12312312'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabBar", 2, this)//0表示第一个tabbar
    this.setData({
      user: app.globalData.userInfo
    });
    console.log(this.data.user)
    
  },
  getPhoneNumber(e) {
    console.log(e)
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
    wx.login({
      success: res => {
        if (res.code) {
          console.log(res.code)
        }
      }
    })
  },
  onGotUserInfo:function(e){
    
    this.setData({
      user: e.detail.userInfo
    });
      console.log(this.data.user)
  },
  infomation:function(){
    console.log(this.data.user)
    if (this.data.user == null){

    }else{
      wx.navigateTo({
        url: '../user/infomation',
      })
    }
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