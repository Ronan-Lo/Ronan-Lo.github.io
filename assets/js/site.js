/* Almond Blossom — shared site behaviour: drifting petals + scroll reveal */
(function () {
  // drifting petals
  var layer = document.getElementById('petals');
  if (layer && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    var N = 20;
    for (var i = 0; i < N; i++) {
      var p = document.createElement('span');
      p.className = 'petal';
      var dur = 12 + Math.random() * 12, size = 9 + Math.random() * 8;
      p.style.left = (Math.random() * 100) + 'vw';
      p.style.width = size + 'px';
      p.style.height = (size * 0.8) + 'px';
      p.style.animationDuration = dur + 's';
      p.style.animationDelay = (-Math.random() * 20) + 's';
      p.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
      layer.appendChild(p);
    }
  }

  // scroll reveal (exposed so dynamically rendered nodes can opt in)
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  window.observeReveal = function (el) { io.observe(el); };
  document.querySelectorAll('.reveal').forEach(function (el) { io.observe(el); });

  // lazy-load shim (replaces the old jQuery.lazy): swap data-src -> src/background
  document.querySelectorAll('img.lazy[data-src]').forEach(function (img) {
    img.src = img.getAttribute('data-src');
    img.classList.remove('lazy');
  });
  document.querySelectorAll('div.lazy[data-src]').forEach(function (d) {
    d.style.backgroundImage = "url('" + d.getAttribute('data-src') + "')";
    d.style.backgroundSize = 'cover';
    d.style.backgroundPosition = 'center';
    d.classList.remove('lazy');
  });

  // trip carousel(s)
  var reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  document.querySelectorAll('[data-carousel]').forEach(function (car) {
    var slides = Array.prototype.slice.call(car.querySelectorAll('.sc-slide'));
    var dots = Array.prototype.slice.call(car.querySelectorAll('.sc-dot'));
    if (slides.length <= 1) return;
    var idx = 0, timer = null;
    function show(n) {
      idx = (n + slides.length) % slides.length;
      slides.forEach(function (s, i) { s.classList.toggle('is-active', i === idx); });
      dots.forEach(function (d, i) { d.classList.toggle('is-active', i === idx); });
    }
    function start() { if (!reduce) timer = setInterval(function () { show(idx + 1); }, 5000); }
    function reset() { if (timer) clearInterval(timer); start(); }
    var nextBtn = car.querySelector('[data-next]'), prevBtn = car.querySelector('[data-prev]');
    if (nextBtn) nextBtn.addEventListener('click', function () { show(idx + 1); reset(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { show(idx - 1); reset(); });
    dots.forEach(function (d) { d.addEventListener('click', function () { show(+d.getAttribute('data-dot')); reset(); }); });
    car.addEventListener('mouseenter', function () { if (timer) clearInterval(timer); });
    car.addEventListener('mouseleave', start);
    start();
  });
})();
