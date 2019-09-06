// pages/trend/trend.js
const app = getApp();
const template = require('../template/template.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    btns: ["新闻动态", "三务公开", "活动展示"],
    cons: [],
    active: 0,//控制当前显示盒子 
    progressNum:0
  },
  toggle: function (e) {

    console.log(e.currentTarget.dataset.index)

    this.setData({

      //设置active的值为用户点击按钮的索引值

      active: e.currentTarget.dataset.index,

    })
    // var progressNum = 0;
    this.goProgress(1);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    this.setData();
    this.goProgress();
   
  },
  goProgress:function(type){
    console.log(type)

     var progressNum = 0;
    var that = this;
    var timer = setInterval(function () {
      progressNum++;
      //当进度条为100时清除定时任务
      if (progressNum >= 100) {
        clearInterval(timer);
        
      }
      //并且把当前的进度值设置到progress中
      that.setData({
        progress: progressNum
      })
    },2)
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