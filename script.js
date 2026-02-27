/**
 * ScholarCanvas 页面切换逻辑
 */

// 阻止卡片内链接的点击事件冒泡，避免跳转链接时同时触发页面切换
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.paper-card .links a').forEach(function (link) {
        link.addEventListener('click', function (e) {
            e.stopPropagation();
        });
    });
});

function showPage(pageId) {
    // 隐藏所有页面
    document.querySelectorAll('.page-section').forEach(section => {
        section.classList.remove('active');
    });
    // 显示指定页面
    document.getElementById(pageId).classList.add('active');

    // 更新侧边栏状态
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.classList.remove('active');
    });
    const activeNav = document.getElementById('nav-' + pageId);
    if (activeNav) activeNav.classList.add('active');

    // 滚动回顶部
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
