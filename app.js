// app.js
App({
  onLaunch() {
    // 展示本地存储能力
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
    this.globalData = {
      sceneryList: [
        {
          image: '/images/introduction/view/100a75fc123cec917f2aaffa235df52.jpg', // 需要替换为你自己的图片地址
          name: '三亚',
          location: '中国海南省',
          openingTime: '周一至周五9:00-18:00',
          score: 4.8
        },
        {
          image: '/images/introduction/view/b5f445694c3a4b0b378341adaed089b.jpg', // 需要替换为你自己的图片地址
          name: '海口',
          location: '中国海南省',
          openingTime: '周一至周五9:00-18:00',
          score: 4.5
        },
        {
          image: '/images/introduction/view/4db4b18fbe49baa81aa1cb1cf4c28b9.jpg', // 需要替换为你自己的图片地址
          name: '琼海',
          location: '中国海南省',
          openingTime: '周一至周五9:00-18:00',
          score: 4
        },
        {
          image: '/images/introduction/view/6eddef75a136778f659b325d163b568.jpg', // 需要替换为你自己的图片地址
          name: '亚龙湾',
          location: '中国海南省',
          openingTime: '周一至周五9:00-18:00',
          score: 5
        },
        {
          image: '/images/introduction/view/27b8b62a5a6ea4f391f22dbca090128.jpg', // 需要替换为你自己的图片地址
          name: '蜈支洲岛',
          location: '中国海南省',
          openingTime: '周一至周五9:00-18:00',
          score: 5
        }
      ]
    }
    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
      }
    })
  },
  globalData: {
    userInfo: null
  }
})
