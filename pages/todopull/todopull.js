// pages/todopull/todopull.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    todolist:[]
  },

  /******点亮星 */
  light_star:function(res){
    let dataget = res.currentTarget.dataset
    let todolist = this.data.todolist
    
    todolist[dataget.tap_event_num].star = (3 - dataget.tap_star_num)
    this.setData({
      todolist
    })
    console.log(this.data.todolist)

  },

  /**取消点亮星 */
  gloom_star:function(res){
    let dataget = res.currentTarget.dataset
    let todolist = this.data.todolist
    
    /**要区分是否点到最左的星 */
    todolist[dataget.tap_event_num].star -= 
      dataget.tap_star_num + (dataget.tap_star_num?0:1)
    this.setData({
      todolist
    })
    
    console.log(this.data.todolist)

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      todolist:[
        {event:"任务1",star:3},
        {event:"任务2",star:2},
        {event:"任务3",star:1},
        {event:"任务4",star:0},
        {event:"任务5",star:0},
        {event:"任务6",star:0},
        {event:"任务7",star:0},
        {event:"任务8",star:0}
        ]
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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})