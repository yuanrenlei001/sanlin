// pages/trend/detail.js
const app = getApp();
Page({

  /**
   * 页面的初始数据
   */
  data: {
      id:'',
      main:'',
      zan:0,
      isLike:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    const that = this;
    this.setData({
      id: options.id
    })
    // 获取详情接口
    // wx.request({
    //   url: app.ajaxUrl + '/newsDetail.do', //仅为示例，并非真实的接口地址
    //   data: {
    //     id: that.data.id
    //     // pagenum:5
    //   },
    //   header: {
    //     'content-type': 'application/json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data)
    //     const data = res.data.data.content;
    //     const main = res.data.data;
    //     const zan = res.data.data.likeNum == '' ? 0 : res.data.data.likeNum;
    //     that.setData({
    //       nodes: data,
    //       main:main,
    //       zan: zan
    //     });
    //   }
    // });
    // 获取评论
    wx.request({
      url: app.ajaxUrl + '/reviewList.do', //仅为示例，并非真实的接口地址
      data: {
        id: that.data.id,
        pagesize:1,
        pagenum:5
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        // const data = res.data.data.content;
        // const main = res.data.data;
        // const zan = res.data.data.likeNum;
        // that.setData({
        //   nodes: data,
        //   main: main,
        //   zan: zan
        // });
      }
    });
  },
  // 点赞
  zan:function(e){
    const that = this;
    const isLike = that.data.isLike;
    if (isLike === false) {
      that.setData({
        zan: that.data.zan + 1,
        isLike:true
      })
      wx.request({
        url: app.ajaxUrl + '/newsLikeNum.do', //仅为示例，并非真实的接口地址
        data: {
          id: that.data.id,
          operate: 1
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          // const data = res.data.data.content;
          // const main = res.data.data;
          // const zan = res.data.data.likeNum;
          // that.setData({
          //   nodes: data,
          //   main: main,
          //   zan: zan
          // });
        }
      })
    }else{
      that.setData({
        zan: that.data.zan - 1,
        isLike: false
      })
      wx.request({
        url: app.ajaxUrl + '/newsLikeNum.do', //仅为示例，并非真实的接口地址
        data: {
          id: that.data.id,
          operate: 2
        },
        header: {
          'content-type': 'application/json' // 默认值
        },
        success: function (res) {
          console.log(res.data)
          // const data = res.data.data.content;
          // const main = res.data.data;
          // const zan = res.data.data.likeNum;
          // that.setData({
          //   nodes: data,
          //   main: main,
          //   zan: zan
          // });
        }
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