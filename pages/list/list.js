// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: true,//照骗遮罩层默认样式
    listCheck: 1, // 当前列表
  },
  show() {
    this.setData({ flag: false })
  },
  hide() {
    this.setData({ flag: true })
  },
  //tab栏切换
  checkList({ target: { dataset: { listcheck } } }) {
    this.setData({ listCheck: Number(listcheck) });
  },
  Go() {
    wx.navigateTo({
      url: '/pages/go/go',
    })
  },
  Gomusic() {
    wx.navigateTo({
      url: '/pages/music/music',
    })
  },
  Govideo() {
    wx.navigateTo({
      url: '/pages/jump/jump',
    })
  },
  //小程序跳别的小程序
  GoDouYu() {
    wx.navigateToMiniProgram({
      appId: 'wxca1e7ba3fe18ff12',
      path: '/pages/room?roomId=1126960&is_vertical=1',
      success(res) {
        // 打开其他小程序成功同步触发

        wx.showToast({
          title: '跳转成功'
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

})