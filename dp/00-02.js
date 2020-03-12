// 00~02点
function adCheck(){
  var myDate = new Date();
  var aaa=myDate.getHours();
  if(parseInt(aaa)>=0 && parseInt(aaa)<=2){  //时间
    return true;
  }else{
    return false;
  }
}
  if(adCheck()){
document.write('<script src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.5/dp/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.5/dp/hls.min.js"><\/script>');
document.write('<script src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script>');

  }else{
    //留空
  }
