// pages/go/go.js
const app = getApp()
const innerAudioContext = wx.createInnerAudioContext()
Page({
  /**
   * 页面的初始数据
   */
  data: {
    check: 1,//代表当前页面
    jb: {},
  },
  checkact({ currentTarget: { dataset: { check } } }) {
    // console.log(check)
    this.setData({ check: Number(check) });
    // console.log('1111')
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    // console.log(innerAudioContext.onPlay)
    // if(innerAudioContext.onPlay){
    //   innerAudioContext.stop()
    // }
    this.setData({
      jb: app.globalData.userInfo
    })
    if (innerAudioContext.stop) {
      innerAudioContext.play()
    }
    innerAudioContext.autoplay = true
    innerAudioContext.loop = true
    innerAudioContext.src = '/audio/伞兵一号.m4a'
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
    // innerAudioContext.stop()
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    innerAudioContext.stop()

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