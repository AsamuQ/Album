//login.js
//获取应用实例
var app = getApp();
Page({
  data: {
    remind: '加载中',
    angle: 0,
    userInfo: {}
  },
  goToIndex: function() {
     // 登录
     wx.login({
      success: function (r) {
        //获取code
        var code = r.code;
        //debugger;
        if (code) {
          console.log("code: "+code)
          //发送code到后台，分析openid
          wx.request({
            //本人租赁服务器，随时失效
            url: 'http://84.39.189.10:8080/ssm/regist?code=' + code,
            method: 'POST',
            header: {
              'content-type': 'application/json'
            },
            success: function (res) {
              //debugger;
              console.log("userInfo: "+res.data)
              if (res.data.status == 0) {
                //status为空时登录凭证code为空,为1表示数据库中openid已存在，2表示openid不存在
                wx.showToast({
                   title: '登录凭证code为空...',
                   icon: "none",
                   duration: 2500
                })
              } else{
                  wx.showToast({
                    title: '登录成功',
                    icon: "success",
                    duration: 2500
                 })
                app.globalData.userInfo=res.data.userInfo;
                setTimeout(function(){
                  wx.switchTab({
                    url: '/pages/index/index',
                  });
                },3000)
              }
            }
          })
        }
      }
    })
    
  },
  onLoad: function() {
        
  },
  onShow: function() {
    let that = this
    let userInfo = wx.getStorageSync('userInfo')
    if (!userInfo) {
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
          })
        }
      })
    } else {
      that.setData({
        userInfo: userInfo
      })
    }
  },
  onReady: function() {
    var that = this;
    setTimeout(function() {
      that.setData({
        remind: ''
      });
    }, 1000);
    wx.onAccelerometerChange(function(res) {
      var angle = -(res.x * 30).toFixed(1);
      if (angle > 14) {
        angle = 14;
      } else if (angle < -14) {
        angle = -14;
      }
      if (that.data.angle !== angle) {
        that.setData({
          angle: angle
        });
      }
    });
  }
});