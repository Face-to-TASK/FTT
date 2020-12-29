
let app=getApp()

Page({
  
  num:0,
  data: {
    testLocal:'test',

    task:[
      
    ]
  },

  onLoad: function(){
    console.log("begin");
    this.setData({
       
        slideButtons: [{
          type: 'warn',
          text: '删除',
          src:'/img/删 除 .png'
          
        }],
    });



  },

  onShow: function () {
    
    var k = this;
    this.setData({ 
      num : app.globalData.num
    });
    for (let index = 0; index < app.globalData.num; index++) {
      
      this.setData({ 
        [`task[${index}]`] : app.globalData.task[index]
      });

    
    }

    for (let index = 0; index < k.data.task.length; index++) {
      
      console.log('=====',k.data.task[index]);

    }
  },

  tap1: function () {
 
    wx.navigateTo({
      url:"/pages/addTask/addTask",
 
      success: function (res) { },
 
      fail: function (res) { },
 
      complete: function (res) { },
 
    });

   
 
  },
  tap2: function () {
    console.log(app.globalData.task[app.globalData.num-1]),
    wx.navigateTo({
 
      
      success: function (res) { },
 
      fail: function (res) { },
 
      complete: function (res) { },
 
    })
 
  },
    
    slideButtonTap(e) {
        console.log('slide button tap', e.detail)
    }
});