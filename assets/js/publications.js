/* Almond Blossom — interactive publication grouping.
   Operates on server-rendered .pub cards in #pub-source, regrouping them
   into #pub-root by Theme / Venue / Type / Year. */
(function () {
  var controls = document.getElementById('pub-seg');
  var root = document.getElementById('pub-root');
  var source = document.getElementById('pub-source');
  if (!controls || !root || !source) return;

  var cards = Array.prototype.slice.call(source.querySelectorAll('.pub'));

  var GROUPERS = {
    theme: { key: 'theme', order: ['IRT & Deep Learning', 'Bayesian & Statistical Methods', 'Applied ML in Psychology'] },
    venue: { key: 'venue', order: ['Psychometrika', 'JEBS', 'J. Eating Disorders', 'arXiv', 'EDM 2022'] },
    type:  { key: 'type',  label: { Journal: 'Journal Articles', Preprint: 'Preprints', Conference: 'Conference Papers' },
             order: ['Journal Articles', 'Preprints', 'Conference Papers'] },
    year:  { key: 'year',  order: null }
  };

  function keyFor(mode, card) {
    var g = GROUPERS[mode];
    var raw = card.dataset[g.key] || '—';
    return (g.label && g.label[raw]) || raw;
  }

  function render(mode) {
    var g = GROUPERS[mode];
    var groups = {}, orderSeen = [];
    cards.forEach(function (c) {
      var k = keyFor(mode, c);
      if (!groups[k]) { groups[k] = []; orderSeen.push(k); }
      groups[k].push(c);
    });
    var keys = Object.keys(groups);
    if (g.order) keys.sort(function (a, b) { return g.order.indexOf(a) - g.order.indexOf(b); });
    else keys.sort(function (a, b) { return b.localeCompare(a); }); // years descending

    root.innerHTML = '';
    keys.forEach(function (k) {
      var sec = document.createElement('section');
      sec.className = 'pub-group';
      var head = document.createElement('div');
      head.className = 'pub-group-head';
      head.innerHTML = '<span class="gname"></span><span class="gcount"></span><span class="pub-group-rule"></span>';
      head.querySelector('.gname').textContent = k;
      head.querySelector('.gcount').textContent = groups[k].length;
      sec.appendChild(head);
      groups[k].forEach(function (c) {
        c.classList.add('reveal');
        sec.appendChild(c);
        if (window.observeReveal) window.observeReveal(c); else c.classList.add('in');
      });
      root.appendChild(sec);
    });
  }

  controls.addEventListener('click', function (e) {
    var b = e.target.closest('button');
    if (!b) return;
    controls.querySelectorAll('button').forEach(function (x) { x.classList.remove('active'); });
    b.classList.add('active');
    render(b.dataset.mode);
  });

  render('theme');
})();
