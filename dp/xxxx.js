// 根据屏幕尺寸  
if (screen && screen.width > 480) {  
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.3/dp/p2p.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.3/dp/p2p.js"><\/script>');
//document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script>');

}  

// userAgent判断  
if( /Android|webOS|iPhone|Linux|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){  
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.3/dp/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.3/dp/hls.min.js"><\/script>');
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.3/dp/hls/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.3/dp/hls/hls.min.js"><\/script>');

}  

// 调用
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.3/dp/00-03.js"><\/script>');
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.3/dp/21-23.js"><\/script>');