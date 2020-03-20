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
document.write('<script src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.9/dp/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.9/dp/hls.min.js"><\/script>');

  }else{
    //留空
  }
