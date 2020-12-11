var app=getApp();

Page({
  

  onShareAppMessage() {
    return {
      title: 'form',
      path: 'page/component/pages/form/form'
    }
  },

  data: {
    pickerHidden: true,
    chosen: '',
    test:'555'
  },

  pickerConfirm(e) {
    this.setData({
      pickerHidden: true
    })
    this.setData({
      chosen: e.detail.value
    })
  },

  pickerCancel() {
    this.setData({
      pickerHidden: true
    })
  },

  pickerShow() {
    this.setData({
      pickerHidden: false
    })
  },

  onLoad:function(){
   
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value);
    app.globalData.task[app.globalData.num]=e.detail.value;
    app.globalData.num +=1;
    console.log(app.globalData.num,' ',app.globalData.task[app.globalData.num-1])
  },

  formReset(e) {
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
  }
})