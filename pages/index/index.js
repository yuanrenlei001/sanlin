//index.js
//获取应用实例
const app = getApp();
const template = require('../template/template.js');

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    user: '',
    banner: '',
    news1:'',
    news2: '',
    showView: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    list: [{
        text: "对话",
        iconPath: "/example/images/tabbar_icon_chat_default.png",
        selectedIconPath: "/example/images/tabbar_icon_chat_active.png",
      },
      {
        text: "设置",
        iconPath: "/example/images/tabbar_icon_setting_default.png",
        selectedIconPath: "/example/images/tabbar_icon_setting_active.png",
        badge: 'New'
      }
    ]
  },

  onLoad: function(options) {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true,
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    };
    template.tabbar("tabBar", 0, this) //0表示第一个tabbar
    this.setData();
    const that = this;
    // 查看是否授权
    wx.getSetting({
      success: function(res) {
        if (res.authSetting['scope.userInfo']) {
          wx.getUserInfo({
            lang: "zh_CN",
            success: function(res) {
              // 用户已经授权过,不需要显示授权页面,所以不需要改变 isHide 的值
              // 根据自己的需求有其他操作再补充
              // 我这里实现的是在用户授权成功后，调用微信的 wx.login 接口，从而获取code
              wx.login({
                success: res => {
                  // 获取到用户的 code 之后：res.code
                  console.log("用户的code:" + res.code);
                  // 可以传给后台，再经过解析获取用户的 openid
                  // 或者可以直接使用微信的提供的接口直接获取 openid ，方法如下：
                  // wx.request({
                  //     // 自行补上自己的 APPID 和 SECRET
                  //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=自己的APPID&secret=自己的SECRET&js_code=' + res.code + '&grant_type=authorization_code',
                  //     success: res => {
                  //         // 获取到用户的 openid
                  //         console.log("用户的openid:" + res.data.openid);
                  //     }
                  // });
                }
              });
            }
          });
        } else {
          // 用户没有授权
          // 改变 isHide 的值，显示授权页面
          that.setData({
            isHide: true
          });
        }
      }
    });

    this.getBanner();
    this.getFistNews();

  },
  // 首页轮播
  getBanner: function() {
    const that = this;
    wx.request({
      url: app.ajaxUrl + '/rotatePic.do', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function(res) {
        const banner = res.data.data.images;
        // banner.push()
        that.setData({
          banner: banner
        })
      }
    })

  },
  // 三林动态
  getFistNews:function(){
    const that = this;
    wx.request({
      url: app.ajaxUrl + '/firstNews.do', //仅为示例，并非真实的接口地址
      data: {},
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        const len = res.data.data.text;
        const new1 ={};
        const new2 = {};
        for(var i=0;i<len.length;i++){
            if(len[i].type == 1){
              new1['id'] = len[i].id;
              new1['title'] = len[i].title;
            } else if (len[i].type == 3){
              new2['id'] = len[i].id;
              new2['title'] = len[i].title;
            }
        }
        // // banner.push()
        that.setData({
          new1: new1,
          new2: new2
        })
        console.log(res.data)
      }
    })
  },
  bindGetUserInfo: function(e) {
    if (e.detail.userInfo) {
      //用户按了允许授权按钮
      var that = this;
      // 获取到用户的信息了，打印到控制台上看下
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      //授权成功后,通过改变 isHide 的值，让实现页面显示出来，把授权页面隐藏起来
      that.setData({
        isHide: false
      });
    } else {
      //用户按了拒绝按钮
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: '返回授权',
        success: function(res) {
          // 用户没有授权成功，不需要改变 isHide 的值
          if (res.confirm) {
            console.log('用户点击了“返回授权”');
          }
        }
      });
    }
  },
  tabChange(e) {
    console.log('tab change', e)
  },
  goTrend: function() {
    wx.navigateTo({
      url: '../trend/trend'
    })
  },
  loding: function() {
    console.log(1);
    wx.switchTab({
      url: '../null/null'
    })
  },
  // 走进三林
  join: function() {
    wx.switchTab({
      url: '../join/join'
    })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },

})