// 根据屏幕尺寸  
if (screen && screen.width > 480) {  
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.0/dp/p2p.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.0/dp/p2p.js"><\/script>');
//document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script>');
}  

// userAgent判断  
if( /Android|webOS|iPhone|Linux|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){  
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/metacdn.hls.js@0.6.2-71/dist/hls.min.js"><\/script>');
}  

// 00~03点
function adCheck(){
  var myDate = new Date();
  var aaa=myDate.getHours();
  if(parseInt(aaa)>=0 && parseInt(aaa)<=3){  //时间
    return true;
  }else{
    return false;
  }
}
  if(adCheck()){
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/metacdn.hls.js@0.6.2-71/dist/hls.min.js"><\/script>');

  }else{
    //留空
  }

// 20~23点
function adCheck(){
  var myDate = new Date();
  var aaa=myDate.getHours();
  if(parseInt(aaa)>=20 && parseInt(aaa)<=23){  //时间
    return true;
  }else{
    return false;
  }
}
  if(adCheck()){
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/metacdn.hls.js@0.6.2-71/dist/hls.min.js"><\/script>');

  }else{
    //留空
  }