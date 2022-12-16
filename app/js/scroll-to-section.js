

$(".nav--list").find("a").click(function (e) {
  e.preventDefault();
  var section = $(this).attr("href");
  $("html, body").animate({
    scrollTop: $(section).offset().top - 80
  });
});

if (typeof ScrollReveal == 'function' ) {
  window.sr = ScrollReveal();

sr.reveal('h1', {
  reset: true,
  delay: 500,
  distance: '100px',
  origin: 'left',
  rotate: { x: 45, y: 0, z: 0 },
  mobile: false,
  scale: 0.8,
});

sr.reveal('.square1', {
  reset: true,
  delay: 500,
  distance: '100px',
  origin: 'right',
  mobile: false,
});

sr.reveal('.square2', {
  reset: true,
  delay: 500,
  distance: '100px',
  origin: 'left',
  mobile: false,
});

sr.reveal('.section', {
  reset: true,
  delay: 300,
  distance: '100px',
  origin: 'left',
  mobile: true,
  reset: false,
});
}
