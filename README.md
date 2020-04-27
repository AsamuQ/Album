# Album
=======
# 微信小程序——炫酷相册


## 功能介绍
    基于TensorFlow2.1，图像识别方向的应用：用户登录/注册上传图片，后台进行识别返回图片标签，前端自动分类；选择你要生成相册的图片生成你想要的相册样式。

## 目录结构
```c
    ┠--  start        // 登录
    ┠--  index        // 图片选择/上传页面
    ┠--  select       // 图片分类页面
    ┠--  myalbum      // 相册生成页面

```

## 后台
>[Java SSM]待上传……  
>>实现登录/注册、上传文件接口

>[Python Flash]待上传……
>>实现图片识别服务

## 应用截图
|授权|登陆|
|:---:|:---:|
|![image](https://github.com/AsamuQ/Album/blob/master/images/screenshot/grant.png)|![image](https://github.com/AsamuQ/Album/blob/master/images/screenshot/login.png)

|选择|上传|
|:---:|:---:|
|![image](https://github.com/AsamuQ/Album/blob/master/images/screenshot/select.png)|![image](https://github.com/AsamuQ/Album/blob/master/images/screenshot/uploading.png)

|分类|功能|
|:---:|:---:|
|![image](https://github.com/AsamuQ/Album/blob/master/images/screenshot/classify.png)|![image](https://github.com/AsamuQ/Album/blob/master/images/screenshot/selectfunction.png)

|选择特效|
|:---:|
|![image](https://github.com/AsamuQ/Album/blob/master/images/screenshot/album.png)

## 后台请求
|登陆请求|官方登陆接口|
|:---:|:---:|
|![image](https://github.com/AsamuQ/HomeJob/blob/master/ScreenShot/login_request.png)|![image](https://github.com/AsamuQ/HomeJob/blob/master/ScreenShot/wechatsns.png)

|识别请求|预测结果|训练记录|
|:---:|:---:|:---:|
|![image](https://github.com/AsamuQ/HomeJob/blob/master/ScreenShot/classify_request.png)|![image](https://github.com/AsamuQ/HomeJob/blob/master/ScreenShot/predict.png)|![image](https://github.com/AsamuQ/HomeJob/blob/master/ScreenShot/graph.png)

## 插件库
[Animate]http://www.animate.net.cn/

[LottieFiles]https://lottiefiles.com/

## 参考
[微信小程序 使用animate CSS动画库]https://github.com/YulRW/Wechat-animate-demo

[TensorFlow2+ResNet 图像分类模型的训练和预测]https://blog.csdn.net/u013421629/article/details/102863701?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromBaidu-2

[TensorFlow+Inception 迁移学习]https://blog.csdn.net/White_Idiot/article/details/78816850?depth_1-utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2&utm_source=distribute.pc_relevant.none-task-blog-BlogCommendFromMachineLearnPai2-2
