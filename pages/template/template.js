//初始化数据
function tabbarinit() {
  return [
    {
      "current": 0,
      "selectedIconPath": "/img/index/home_ico2.png",
      "iconPath": "/img/index/home_ico1.png",
      "pagePath": "/pages/index/index",
      "text": "首页"
    },
    {
      "current": 0,
      "selectedIconPath": "/img/index/shopping_ico2.png",
      "iconPath": "/img/index/shopping_ico1.png",
      "pagePath": "/pages/car/car",
      "text": "购物车"
    },
    {
      "current": 0,
      "selectedIconPath": "/img/index/person_ico2.png",
      "iconPath": "/img/index/person_ico1.png",
      "pagePath": "/pages/user/user",
      "text": "个人中心"
    }
  ]

}
//tabbar 主入口
function tabbarmain(bindName = "tabdata", id, target) {
  var that = target;
  var bindData = {};
  var otabbar = tabbarinit();
  otabbar[id]['iconPath'] = otabbar[id]['selectedIconPath']//换当前的icon
  otabbar[id]['current'] = 1;
  bindData[bindName] = otabbar
  that.setData({ bindData });
}

module.exports = {
  tabbar: tabbarmain
}