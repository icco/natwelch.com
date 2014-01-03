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

  // Nat.updateAge();
});

var _gauges = _gauges || [];
(function() {
  var t   = document.createElement('script');
  t.type  = 'text/javascript';
  t.async = true;
  t.id    = 'gauges-tracker';
  t.setAttribute('data-site-id', '5213bb1df5a1f5312100001b');
  t.src = '//secure.gaug.es/track.js';
  var s = document.getElementsByTagName('script')[0];
  s.parentNode.insertBefore(t, s);
})();

var _gaq = [['_setAccount', 'UA-333449-2'], ['_trackPageview']];
(function(d, t) {
  var g = d.createElement(t), s = d.getElementsByTagName(t)[0];
  g.async = true;
  g.src = '//www.google-analytics.com/ga.js';
  s.parentNode.insertBefore(g, s);
})(document, 'script');
