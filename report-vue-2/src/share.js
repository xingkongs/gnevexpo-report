let WM_DOMAIN = 'd1ev.com';
let WM_PROTOCOL = window.location.protocol;
const EV_GLOBAL = {
  WM_PC_URL: WM_PROTOCOL + '//www.' + WM_DOMAIN, //pc端host
  WM_DOMAIN_URL: WM_PROTOCOL + '//' + WM_DOMAIN, //不带 WWW 的 URL 地址
  WM_WAP_URL: WM_PROTOCOL + '//m.' + WM_DOMAIN, //WAP 站的 URL 地址
  WM_UPLOAD_CDN_URL: WM_PROTOCOL + '//cdn-fs.' + WM_DOMAIN//上传文件 CDN 的 URL 地址

};

$.ajax({
  url: EV_GLOBAL.WM_WAP_URL + '/upload/file/jssdk_signpackage', //获取微信 jssdk 签名信息
  type: 'POST',
  dataType: 'json',
  data: {'share_url': window.location.href}, //当前页面 URL
  success: function ($data) {
    //console.log($data); //调试返回数据
    if ($data.appId !== undefined) {
      let shareImg = '';
      let imgObj = $(document).find('meta[name="app-share-img"]');
      if (imgObj.length > 0) {
        shareImg = imgObj.attr('content').length > 0 ? imgObj.attr('content') : EV_GLOBAL.WM_WAP_URL + '/src/wap/images/logo-app.jpg';
      } else {
        shareImg = EV_GLOBAL.WM_WAP_URL + '/src/wap/images/logo-app.jpg'
      }
      let shareData = {
        title: $(document).find('title') ? $(document).find('title').text() : '', //标题
        desc: $(document).find('meta[name="description"]').length > 0 ? $(document).find('meta[name="description"]').attr('content') : '', //描述
        link: $data.url, //URL，及 share_url
        imgUrl: shareImg //图标
      };
      //console.log(shareData);
      wx.config({
        debug: false,
        appId: $data.appId,
        timestamp: $data.timestamp,
        nonceStr: $data.nonceStr,
        signature: $data.signature,
        jsApiList: ['checkJsApi', 'onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone']
      });
      wx.ready(function () {
        wx.onMenuShareTimeline(shareData);
        wx.onMenuShareAppMessage(shareData);
        wx.onMenuShareQQ(shareData);
        wx.onMenuShareWeibo(shareData);
        wx.onMenuShareQZone(shareData);
      });
    }
  }
});
