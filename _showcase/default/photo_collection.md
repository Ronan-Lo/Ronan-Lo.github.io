---
show: true
width: 8
date: 2099-12-25 00:01:00 +0000
# height: 295px
images:
- src: assets/images/trip/cover.JPG
  title: My journey
# - src: https://picsum.photos/seed/second22/800/800
#   title: Photo 2
#   desc: Description 2
# - src: https://picsum.photos/seed/third33/800/800
---

{% include widgets/carousel.html id=page.id images=page.images height=page.height %}
