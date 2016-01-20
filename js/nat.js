/**
 * JS for natwelch.com
 */
var Nat = {
  updateAge : function () {
    // Make age accurate
    bday = new Date(1988,1,22,17);

    var now = new Date;
    var duration = now - bday;
    var years = duration / 31556900000;

    var majorMinor = years.toFixed(9).toString();

    $('#age').text(majorMinor);
  },
};

$(function() {
  window.setInterval(function(){ Nat.updateAge(); }, 50);
});

// Google Anal
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-333449-2', 'auto');
ga('send', 'pageview');
