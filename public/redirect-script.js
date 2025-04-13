// 此脚本用于在GitHub Pages上重定向SPA路由
(function() {
  // 移动端识别函数
  function isMobileDevice() {
    return (navigator.userAgent.match(/Android/i) ||
           navigator.userAgent.match(/webOS/i) ||
           navigator.userAgent.match(/iPhone/i) ||
           navigator.userAgent.match(/iPad/i) ||
           navigator.userAgent.match(/iPod/i) ||
           navigator.userAgent.match(/BlackBerry/i) ||
           navigator.userAgent.match(/Windows Phone/i));
  }

  // 获取当前URL的查询参数
  const query = window.location.search;
  
  // 处理重定向
  if (query.includes('redirect=')) {
    // 从查询参数中提取重定向路径
    const redirectPath = new URLSearchParams(query).get('redirect');
    if (redirectPath) {
      // 执行重定向
      window.history.replaceState(null, null, redirectPath);
    }
  }
  
  // 移动端优化：防止页面不必要的刷新
  if (isMobileDevice()) {
    // 阻止某些会导致刷新的触摸事件
    document.addEventListener('touchmove', function(e) {
      // 只有当触摸的是特定元素时才阻止默认行为
      const target = e.target;
      if (target.classList.contains('flow-item') || 
          target.closest('.artistic-bubble-container')) {
        e.preventDefault();
      }
    }, { passive: false });
    
    // 修复iOS上的双击缩放问题
    let lastTouchEnd = 0;
    document.addEventListener('touchend', function(e) {
      const now = Date.now();
      if (now - lastTouchEnd < 300) {
        e.preventDefault();
      }
      lastTouchEnd = now;
    }, { passive: false });
  }
})(); 