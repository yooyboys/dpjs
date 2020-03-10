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
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.2/dp/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.2/dp/hls.min.js"><\/script>');
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.2/dp/hls/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.2/dp/hls/hls.min.js"><\/script>');

  }else{
    //留空
  }