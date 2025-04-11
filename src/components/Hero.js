import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const containerRef = useRef(null);
  const animationRef = useRef(null);
  const bubblesRef = useRef([]);
  const dragInfoRef = useRef({
    isDragging: false,
    currentBubble: null,
    offsetX: 0,
    offsetY: 0
  });
  
  useEffect(() => {
    // 给容器一点时间渲染，然后初始化气泡
    const timer = setTimeout(() => {
      // 初始化气泡动画
      const initBubbles = () => {
        const container = containerRef.current;
        if (!container) return;
        
        // 获取所有气泡元素
        const bubbleNodes = container.querySelectorAll('.flow-item');
        const bubbles = [];
        
        // 获取容器尺寸
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
        
        // 记录已占用位置，防止气泡堆叠
        const occupiedAreas = [];
        
        // 初始化每个气泡的位置和速度
        bubbleNodes.forEach(node => {
          // 获取气泡尺寸
          const width = node.offsetWidth;
          const height = node.offsetHeight;
          
          // 尝试找到一个不与其他气泡重叠的位置
          let x, y;
          let attempts = 0;
          let found = false;
          
          // 最多尝试20次找到不重叠的位置
          while (!found && attempts < 20) {
            x = Math.random() * (containerWidth - width - 40) + 20;
            y = Math.random() * (containerHeight - height - 40) + 20;
            
            // 检查是否与已占用区域重叠
            const overlaps = occupiedAreas.some(area => {
              const horizontalOverlap = x < area.x + area.width + 10 && x + width + 10 > area.x;
              const verticalOverlap = y < area.y + area.height + 10 && y + height + 10 > area.y;
              return horizontalOverlap && verticalOverlap;
            });
            
            if (!overlaps) {
              found = true;
            }
            
            attempts++;
          }
          
          // 如果找不到不重叠的位置，就随机放置
          if (!found) {
            x = Math.random() * (containerWidth - width - 40) + 20;
            y = Math.random() * (containerHeight - height - 40) + 20;
          }
          
          // 记录此气泡占用的区域
          occupiedAreas.push({ x, y, width, height });
          
          const bubble = {
            el: node,
            x,
            y,
            width,
            height,
            vx: (Math.random() - 0.5) * 0.4, // 随机水平速度，稍微慢一点
            vy: (Math.random() - 0.5) * 0.4, // 随机垂直速度，稍微慢一点
            rotation: 0, // 随机旋转角度
            // rotation: Math.random() * 8 - 4, // 随机旋转角度
            isDragging: false // 添加拖动标志
          };
          
          // 应用初始位置
          node.style.position = 'absolute';
          node.style.left = `${bubble.x}px`;
          node.style.top = `${bubble.y}px`;
          node.style.transform = `rotate(${bubble.rotation}deg)`;
          node.style.transition = 'none'; // 移除过渡效果
          node.style.opacity = '0'; // 初始设为透明
          
          // 添加拖动事件监听器
          node.addEventListener('mousedown', (e) => handleDragStart(e, bubble));
          node.addEventListener('touchstart', (e) => handleDragStart(e, bubble), { passive: false });
          
          // 使用延迟淡入效果使气泡平滑出现
          setTimeout(() => {
            node.style.transition = 'opacity 0.5s ease';
            node.style.opacity = '1';
          }, Math.random() * 500); // 随机延迟，让气泡随机出现
          
          bubbles.push(bubble);
        });
        
        bubblesRef.current = bubbles;
        
        // 添加全局鼠标/触摸移动和释放事件
        document.addEventListener('mousemove', handleDragMove);
        document.addEventListener('mouseup', handleDragEnd);
        document.addEventListener('touchmove', handleDragMove, { passive: false });
        document.addEventListener('touchend', handleDragEnd);
        
        return bubbles;
      };
      
      // 拖动相关函数
      const handleDragStart = (e, bubble) => {
        e.preventDefault();
        
        // 设置当前拖动的气泡
        bubble.isDragging = true;
        dragInfoRef.current.isDragging = true;
        dragInfoRef.current.currentBubble = bubble;
        
        // 计算鼠标/触摸位置与气泡位置的偏移量
        const pageX = e.pageX || (e.touches && e.touches[0].pageX);
        const pageY = e.pageY || (e.touches && e.touches[0].pageY);
        
        dragInfoRef.current.offsetX = pageX - bubble.x;
        dragInfoRef.current.offsetY = pageY - bubble.y;
        
        // 将拖动的气泡置于顶层
        bubble.el.style.zIndex = "100";
        
        // 添加正在拖动的类，用于自定义样式
        bubble.el.classList.add('dragging');
      };
      
      const handleDragMove = (e) => {
        e.preventDefault();
        
        if (!dragInfoRef.current.isDragging) return;
        
        const bubble = dragInfoRef.current.currentBubble;
        const container = containerRef.current;
        
        if (!bubble || !container) return;
        
        // 获取鼠标/触摸位置
        const pageX = e.pageX || (e.touches && e.touches[0].pageX);
        const pageY = e.pageY || (e.touches && e.touches[0].pageY);
        
        // 计算新位置
        const containerRect = container.getBoundingClientRect();
        const newX = pageX - dragInfoRef.current.offsetX;
        const newY = pageY - dragInfoRef.current.offsetY;
        
        // 确保气泡不会超出容器边界
        const maxX = containerRect.width - bubble.width;
        const maxY = containerRect.height - bubble.height;
        
        bubble.x = Math.max(0, Math.min(newX, maxX));
        bubble.y = Math.max(0, Math.min(newY, maxY));
        
        // 应用新位置
        bubble.el.style.left = `${bubble.x}px`;
        bubble.el.style.top = `${bubble.y}px`;
      };
      
      const handleDragEnd = (e) => {
        if (!dragInfoRef.current.isDragging) return;
        
        const bubble = dragInfoRef.current.currentBubble;
        
        if (bubble) {
          // 恢复气泡的层级
          bubble.el.style.zIndex = "";
          bubble.isDragging = false;
          
          // 移除正在拖动的类
          bubble.el.classList.remove('dragging');
          
          // 给气泡一个随机的初速度
          bubble.vx = (Math.random() - 0.5) * 0.4;
          bubble.vy = (Math.random() - 0.5) * 0.4;
        }
        
        // 重置拖动状态
        dragInfoRef.current.isDragging = false;
        dragInfoRef.current.currentBubble = null;
      };
      
      // 动画函数 - 更新气泡位置
      const animateBubbles = () => {
        const container = containerRef.current;
        if (!container) return;
        
        const containerRect = container.getBoundingClientRect();
        const containerWidth = containerRect.width;
        const containerHeight = containerRect.height;
        
        // 更新每个气泡的位置
        bubblesRef.current.forEach(bubble => {
          // 如果正在拖动，则跳过动画更新
          if (bubble.isDragging) return;
          
          // 移动气泡
          bubble.x += bubble.vx;
          bubble.y += bubble.vy;
          
          // 碰撞检测 - 边界
          if (bubble.x <= 20 || bubble.x >= containerWidth - bubble.width - 20) {
            bubble.vx *= -1; // 反转水平方向
            bubble.rotation = Math.random() * 6 - 3; // 稍微旋转
          }
          
          if (bubble.y <= 20 || bubble.y >= containerHeight - bubble.height - 20) {
            bubble.vy *= -1; // 反转垂直方向
            bubble.rotation = Math.random() * 6 - 3; // 稍微旋转
          }
          
          // 应用新位置
          bubble.el.style.left = `${bubble.x}px`;
          bubble.el.style.top = `${bubble.y}px`;
          bubble.el.style.transform = `rotate(${bubble.rotation}deg)`;
        });
        
        // 循环动画
        animationRef.current = requestAnimationFrame(animateBubbles);
      };
      
      // 启动动画
      const startAnimation = () => {
        initBubbles();
        animationRef.current = requestAnimationFrame(animateBubbles);
      };
      
      // 窗口大小改变时重新初始化
      const handleResize = () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        
        // 清除拖动状态
        dragInfoRef.current = {
          isDragging: false,
          currentBubble: null,
          offsetX: 0,
          offsetY: 0
        };
        
        // 移除事件监听器
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleDragMove);
        document.removeEventListener('touchend', handleDragEnd);
        
        startAnimation();
      };
      
      // 初始化动画
      startAnimation();
      
      // 监听窗口大小变化
      window.addEventListener('resize', handleResize);
      
      // 清理函数
      return () => {
        if (animationRef.current) {
          cancelAnimationFrame(animationRef.current);
        }
        
        // 移除事件监听器
        document.removeEventListener('mousemove', handleDragMove);
        document.removeEventListener('mouseup', handleDragEnd);
        document.removeEventListener('touchmove', handleDragMove);
        document.removeEventListener('touchend', handleDragEnd);
        
        window.removeEventListener('resize', handleResize);
      };
    }, 300); // 短暂延迟确保容器已正确渲染
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <h1>Design with AI</h1>
          <p className="semester">2D Spring 2025</p>
          <p className="subtitle">探索人工智能与创意设计的融合前沿</p>
          {/* <p>本课程旨在引领研究生深入探索人工智能与设计融合的前沿领域，通过理论与实践相结合的教学方法，培养学生的跨学科思维与创新能力。随着AI技术的迅猛发展，我们将系统研究AI如何重塑交互体验的未来，帮助不同背景的学生建立互补技能——使设计专业学生掌握AI技术原理，同时引导技术背景学生建立设计思维框架。课程将基于Midjourney、DALL-E、Stable Diffusion等前沿生成式AI工具及Coze平台，指导学生通过跨学科协作方法论，共同构建具有学术深度和实用价值的智能交互产品与系统。</p> */}
          
          <div className="artistic-bubble-container" ref={containerRef}>
            <h3 className="highlight-title bubble-heading"></h3>
            
            <div className="flow-item">设计师如何构思视觉表达？</div>
            <div className="flow-item">如何设计眼前一亮的海报？</div>
            <div className="flow-item">设计与人文内涵的联系</div>
            <div className="flow-item">如何产生天马行空的创意？</div>
            <div className="flow-item">如何设计多智能体交互？</div>
            <div className="flow-item">场景化的AI原生应用</div>
            <div className="flow-item">AI绘图基础与可控生成</div>
            <div className="flow-item">AI作图工作流</div>
            <div className="flow-item">AI视觉展望（gemini，gpt4o，mcp+figma、blender）</div>
            <div className="flow-item">coze-智能体制作</div>
            <div className="flow-item">coze-GUI制作</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 