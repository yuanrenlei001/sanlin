// pages/scenery/scenery.js
const template = require('../template/template.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: '',
    pageSize: 1,
    next: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    this.setData();
    this.getAttractionList();
  },
  getAttractionList: function () {
    const that = this;
    // 获取详情接口
    wx.request({
      url: app.ajaxUrl + '/attractionList.do', //仅为示例，并非真实的接口地址
      data: {
        pagesize: that.data.pageSize,
        pagenum: 5
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        const list = res.data.data.attractions;
        const pageSize = that.data.pageSize + 1;
        const next = res.data.data.attractions.length;
        that.setData({
          list: list,
          pageSize: pageSize,
          next: next
        })
        console.log(that.data.list)
        // const data = res.data.data.content;
        // const banner = res.data.data.images;
        // _this.setData({
        //   nodes: data,
        //   banner: banner
        // });
      }
    })
  },
  // 加载更多
  more: function () {
    const that = this;
    // 加载更多
    wx.request({
      url: app.ajaxUrl + '/policyList.do', //仅为示例，并非真实的接口地址
      data: {
        pagesize: that.data.pageSize,
        pagenum: 5
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        const len = res.data.data.policies;
        const list = that.data.list;
        const pageSize = that.data.pageSize + 1;
        const next = res.data.data.policies.length;
        for (var i = 0; i < len.length; i++) {
          list.push(len[i])
        }
        console.log(list)
        that.setData({
          list: list,
          pageSize: pageSize,
          next: next
        })

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