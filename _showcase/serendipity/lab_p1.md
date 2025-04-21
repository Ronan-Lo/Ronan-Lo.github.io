---
show: true
width: 4
date: 2025-01-10 00:01:00 +0800
group: Appreciate all erendipity
---

<!-- 内联拍立得风格 CSS -->
<style>
.polaroid {
  background: #fff;
  border: 1px solid #ddd;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  padding: 0.5rem 0.5rem 1.5rem; /* 底部留出更大空白写标题 */
  margin-bottom: 1rem;
}
.polaroid img {
  display: block;
  width: 100%;
  height: auto;
  border-bottom: 1px solid #ddd; /* 底部留白上方的细线 */
}
.polaroid-caption {
  text-align: right;  /* 文字右对齐 */
  font-size: 0.875rem;
  margin-top: 0.5rem;
}
</style>

<div class="polaroid">
  <!-- 懒加载：data-src 里是真图，src 先用占位 -->
  <img
    data-src="assets/images/ser/lab photo.jpg"
    class="lazy"
    src="{{ '/assets/images/empty_300x200.png' | relative_url }}"
  >
  <div class="polaroid-caption">
    What a wonderful lab team!
  </div>
</div>
