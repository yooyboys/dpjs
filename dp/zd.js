// 根据屏幕尺寸  
if (screen && screen.width > 480) {  
document.write('<script src="https://cdn.bskchina.cn/p2p/p2p.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/RayP2P/klink/p2p.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/gh/RayP2P/klink/p2p.js"><\/script>');
//document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script>');
}  

// userAgent判断  
if( /Android|webOS|iPhone|Linux|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){  
document.write('<script type="text/javascript" src="https://cdn.jsdelivr.net/npm/hls.js/dist/hls.min.js"><\/script><script type="text/javascript" src="https://cdn.jsdelivr.net/npm/metacdn.hls.js@0.6.2-71/dist/hls.min.js"><\/script>');
}  