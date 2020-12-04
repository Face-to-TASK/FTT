var util=require('../../utils/util')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    n:3,
    text:["吃饭","睡觉","打豆豆"],
    weekday:"加载中"
  },
  
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var getWeekByDate = util.getWeekByDate(new Date());
    this.setData({
      weekday:getWeekByDate
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
  tap2: function () {
 
    wx.navigateTo({
 
      url: '/pages/todopull/todopull',
 
      success: function (res) { },
 
      fail: function (res) { },
 
      complete: function (res) { },
 
    })
 
  },



  tap1: function () {
 
    wx.navigateTo({
 
      url: '/pages/notice/notice',
 
      success: function (res) { },
 
      fail: function (res) { },
 
      complete: function (res) { },
 
    })
 
  },



  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})
