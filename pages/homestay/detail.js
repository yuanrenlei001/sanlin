// pages/homestay/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: [
      '/img/homestay/banner1.jpg',
      '/img/homestay/banner1.jpg',
      '/img/homestay/banner1.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 3000,
    duration: 1000
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const _this = this;

    let data = '<div style="text-indent:2em;">位于三林白鹭区碧湖旁，始建于明代万历年间，已被列为德清市文保单位。村落依山而建，屋舍呈阶梯状分布，泥墙青瓦的建筑外貌风格统一，错落有致，是瓯越风情古建筑的典型代表。35 幢不同的民宿，有不同的功能，同时也是一个开放平台：乡村创业学堂、民宿、创意工作室、手工艺空间、咖啡厅、书吧、会议室等各种多元素融合，通过保护性开发，外表质朴，内部精装修，奢华与朴素混搭，以“一院一品,一房一景”为设计理念，每幢房子基本上都有不同的庭院，有不同的品质和风格。</div>';

    _this.setData({ nodes: data });
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