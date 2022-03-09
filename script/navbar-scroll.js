//function untuk memunculkan background pada navbar ketika di scroll dengn target kelas navbar fixed top lebih panjang dari target height atau tidak
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    $nav.toggleClass("scrolled", $(this).scrollTop() > $nav.height());
  });
});
