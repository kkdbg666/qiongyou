var app = getApp();
Page({
  data: {
    sceneryList: []
  },
  onLoad: function () {
    this.setData({
      sceneryList: app.globalData.sceneryList
    });
  }
});