Page({
  data: {
    images: []
  },
  goToList: function() {
    wx.navigateTo({
      url: '../list/list'
    });
  },
  goToNew: function() {
    wx.navigateTo({
      url: '../new/new'
    });
  }
});