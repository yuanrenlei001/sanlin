// pages/homestay/homestay.js
const template = require('../template/template.js');
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperH: '',//swiper高度
    nowIdx: 0,//当前swiper索引
    imgList: [//图片列表
     {
        img: "/img/index/banner.png",
        name:'林中小屋',
        address:'浙江省德清县莫干山镇老岭村领坑里13号'
     },
      {
        img: "/img/index/banner.png",
        name: '林中小屋2',
        address: '1232'
      },
      {
        img: "/img/index/banner.png",
        name: '林中小屋3',
        address: '1233'
      }
    ],
  },

  //获取swiper高度
  getHeight: function (e) {
    var winWid = wx.getSystemInfoSync().windowWidth - 2 * 50;//获取当前屏幕的宽度
    var imgh = e.detail.height;//图片高度
    var imgw = e.detail.width;
    var sH = '809rpx'
    this.setData({
      swiperH: sH//设置高度
    })
  },
  //swiper滑动事件
  swiperChange: function (e) {
    this.setData({
      nowIdx: e.detail.current
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    template.tabbar("tabBar", 0, this)//0表示第一个tabbar
    this.setData();
    const that = this;
    // 获取详情接口
    wx.request({
      url: app.ajaxUrl + '/homestayList.do', //仅为示例，并非真实的接口地址
      data: {
        pagesize:1,
        pagenum:5
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
        // const data = res.data.data.content;
        // const banner = res.data.data.images;
        // _this.setData({
        //   nodes: data,
        //   banner: banner
        // });
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