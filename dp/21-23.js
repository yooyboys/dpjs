// 21~23点
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
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.4/dp/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.4/dp/hls.min.js"><\/script>');
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.4/dp/hls/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.4/dp/hls/hls.min.js"><\/script>');

  }else{
    //留空
  }
