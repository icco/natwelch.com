/**
 * JS for natwelch.com
 */
var Nat = {
  updateAge : function () {
    // Make age accurate
    bday = new Date(1988,1,22,17);
    $('#age').text(moment(bday).fromNow(true));
  },
};

$(function() {
  $(window).resize(function() {
    if ($(this).width() >= 767) {
      $.backstretch("/i/coffeeshopmode.jpg", {speed: 150});
    }
  }).resize(); // trigger resize on page load

  $('h1.name-plate').lettering();

  Nat.updateAge();
});