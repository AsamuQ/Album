// pages/select/select.js
import  lottie  from "lottie-miniapp";
var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    currentTab: 0,      //tab页
    imgData:[],          //图片地址、是否选择信息
  },
// 多选事件
  itemSelected:function(e){
    let index = e.currentTarget.dataset.index
    let item = this.data.imgData[index]
    item['isSelected'] = !item['isSelected']
    this.setData({
      ['imgData['+index+'].isSelected']:item['isSelected']
    })
  },

   //滑动切换
   swiperTab: function(e) {
    var that = this;
    that.setData({
      currentTab: e.detail.current
    });
  },
  //点击切换 
  clickTab: function(e) {
    var that = this;
    if (this.data.currentTab === e.target.dataset.current) {
      return false;
    } else {
      that.setData({
        currentTab: e.target.dataset.current
      })
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let imgPath = app.globalData.imgPath
    let imgTitle = app.globalData.imgTitle
    if (imgPath!=null){      
      let i=0;
      for (let item of imgPath){
        this.setData({
          ['imgData['+i+'].path']:item,
          ['imgData['+i+'].isSelected']:false,
          ['imgData['+i+'].title']:imgTitle[i]
        })
        i++
      }
    }else{
      console.log("select页面没有传入图片")
    }
    this.showConva(this)
  },

  showConva:function(page){
    const canvasContext = wx.createCanvasContext('test-canvas',page);
    //  请求到的lottie json数据
    const animationData = require("../../utils/lottie.js").json_data
    // 请求lottie的路径。注意开启downloadFile域名并且返回格式是json
    // const animationPath = 'https://xxxxx';

    // 指定canvas大小
    canvasContext.canvas = {
      width: 100,
      height: 100
    };

    // 如果同时指定 animationData 和 path， 优先取 animationData
    lottie.loadAnimation({
      renderer: 'canvas', // 只支持canvas
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        context: canvasContext,
        clearCanvas: true
      }
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 弹出菜单事件
   */
  showMenu:function(){
    wx.showActionSheet({
      itemList: ['幻灯片', '魔方相册', '开发中'],
      success: function (res) {
        app.globalData.album_option = res.tapIndex
        console.log("album_option: "+app.globalData.album_option)
        wx.switchTab({
          url: '/pages/myalbum/myalbum',
        })
        
        if (res.tapIndex==1||res.tapIndex==2){
          wx.showToast({
            title: '开发中',
            icon:'waiting'
          })
        }
      },
      fail: function (res) {
        console.log(res.errMsg)
      }
    })
  }
})