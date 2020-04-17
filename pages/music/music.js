// pages/music/music.js
const innerAudioContext = wx.createInnerAudioContext()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ismusic: true
  },
  musicStop(){
    this.setData({
      ismusic: false
    })
    innerAudioContext.pause()
  },
  musicStart(){
    this.setData({
      ismusic: true
    })
    innerAudioContext.play()
     
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function () {
    if(innerAudioContext.pause){
      innerAudioContext.play()
    }
    innerAudioContext.autoplay = true
    innerAudioContext.loop = true
    innerAudioContext.src = '/audio/伞兵一号.m4a'
    innerAudioContext.onPlay(() =>{
      console.log('开始播放')
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