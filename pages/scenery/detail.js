// pages/scenery/detail.js
var app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow:'hide'
  },
  phoneShow:function(e){
    const _this = this;
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;

    let data = '<div style="text-indent:2em;">荡舟水面，人在画中行，草长白鹭飞。德清县三林村，一个江南水乡常见的小乡村，却凭借今年6月强势推出的“万鸟园”，在发展美丽经济、振兴美丽乡村的道路上实现了新的飞跃。</div>';

    _this.setData({ nodes: data });
    console.log(_this.isShow)
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