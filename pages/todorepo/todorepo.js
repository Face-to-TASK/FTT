
Page({
  data: {
    task:[
      {name:'1'},
      {name:'2'},
      {name:'waibibabo'}
    ]
  },
  tap1: function () {
 
    wx.navigateTo({
      url:"/pages/addTask/addTask",
 
      success: function (res) { },
 
      fail: function (res) { },
 
      complete: function (res) { },
 
    })
 
  },
  tap2: function () {
 
    wx.navigateTo({
 
 
      success: function (res) { },
 
      fail: function (res) { },
 
      complete: function (res) { },
 
    })
 
  },
    onLoad: function(){
        this.setData({
           
            slideButtons: [{
              type: 'warn',
              text: '删除',
              src:'/img/删 除 .png'
              
            }],
        });
    },
    slideButtonTap(e) {
        console.log('slide button tap', e.detail)
    }
});