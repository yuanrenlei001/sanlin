// pages/join/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    nodes: '',
    banner: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;



    // 获取详情接口
    wx.request({
      url: app.ajaxUrl + '/honor.do', //仅为示例，并非真实的接口地址
      data: {
        // pagesize:1,
        // pagenum:5
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        // const banner = res.data.data.images;
        // // banner.push()
        // that.setData({
        //   banner: banner
        // })
        console.log(res.data)
        const data = res.data.data.content;
        const banner = res.data.data.images;
        _this.setData({
          nodes: data,
          banner: banner
        });
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