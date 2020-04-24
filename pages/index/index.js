
var app = getApp()
Page({
  data: {
    imgTempPath:[]
  },

  onLoad(options) {
  },

  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      count: 9, // 默认最多9张图片（官方默认设定）
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: (res)=> { 
        //存储图片临时地址
         var img = res.tempFilePaths
         that.setData({
           imgTempPath:img
         })    
      }
    })
  },

  upload:function(e){
    var successUp = 0; //成功个数
    var failUp = 0; //失败个数
    var length = this.data.imgTempPath.length;//总共个数
    var i = 0; //第几个
    //存给全局变量供其他页面使用
    console.log("上传图片数量: "+length)
    getApp().globalData.imgPath = this.data.imgTempPath;
    //上传图片，跳转页面
    this.uploadImage(this.data.imgTempPath,successUp,failUp,i,length);
  },

  uploadImage: function (filePaths,successUp,failUp,i,length) {
    var that = this;
    wx.uploadFile({
      url: 'http://localhost:8080/ssm/upload',
      filePath: filePaths[i],
      name: 'file',
      header: { "Content-Type": "multipart/form-data" },
      formData: {
        'user': 'test'
      },
      success: (res) => {
        successUp++;
        // TODO 请求图片识别分类
      }, fail: (res) => {
        failUp++;
      }, complete: () => {
        i++;
        // 上传完毕动作
        if (i == length) {
          wx.showToast({
            icon : "loading",
            title : "上传识别中",
            duration : 9000
          });
          setTimeout(function(){
            
          },3000)
          //请求分类标签
          wx.request({
            url: 'http://127.0.0.1:8888/classify',
            method: 'GET',
            header: {
              'content-type': 'application/json'
            },
            success:function(res){
              app.globalData.imgTitle = res.data
              setTimeout(function(){
                wx.switchTab({
                  url: '/pages/select/select',
                });
              },1000)
            }
          })
        }
        else {  //递归调用uploadDIY函数
          this.uploadImage(filePaths,successUp,failUp,i,length);
        }
      }
    })
  },

  /**
   * 预览图片
   */
  // 删除图片
  deleteImg: function (e) {
    var imgs = this.data.imgTempPath;
    var index = e.currentTarget.dataset.index;
    imgs.splice(index, 1);
    this.setData({
      imgTempPath: imgs
    });
  },
  // 预览图片
  previewImg: function (e) {
    //获取当前图片的下标
    var index = e.currentTarget.dataset.index;
    //所有图片
    var imgs = this.data.imgTempPath;
    wx.previewImage({
      //当前显示图片
      current: imgs[index],
      //所有图片
      urls: imgs
    })
  },

  
})