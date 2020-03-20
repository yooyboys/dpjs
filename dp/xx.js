// 根据屏幕尺寸  
if (screen && screen.width > 480) {  
document.write('<script src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.9/dp/p2p.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.9/dp/p2p.js"><\/script>');

}  

// userAgent判断  
if( /Android|webOS|iPhone|Linux|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){  
document.write('<script src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.9/dp/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.9/dp/hls.min.js"><\/script>');

}  

// 调用
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.9/dp/00-02.js"><\/script>');
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/yooyboys/dpjs@1.9/dp/20-23.js"><\/script>');
