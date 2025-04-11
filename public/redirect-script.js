// 此脚本用于在GitHub Pages上重定向SPA路由
(function() {
  // 获取当前URL的查询参数
  const query = window.location.search;
  if (query.includes('redirect=')) {
    // 从查询参数中提取重定向路径
    const redirectPath = new URLSearchParams(query).get('redirect');
    if (redirectPath) {
      // 执行重定向
      window.history.replaceState(null, null, redirectPath);
    }
  }
})(); 