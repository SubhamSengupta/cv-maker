
$(document.body).on('click', '.vert-bar', function (e) {
  var barWidth = $(this).innerWidth();
  var barLeft = $(this).offset().left;
  var clickX = e.pageX;
  var clickWidth = clickX - barLeft;
  var percent = clickWidth / barWidth * 100;
  var count = $(this).parent().parent().attr('id').substr(9);
  $(`#hiddendiv-${count} #skillprof${count}`).val(Math.floor(percent));
  $(this).find('#fill-prof').animate({width: `${percent}%`},200);
});
