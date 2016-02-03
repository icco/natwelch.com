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

$(document).ready(function() {
  window.setInterval(function(){ Nat.updateAge(); }, 50);

  $.getJSON('https://writing.natwelch.com/posts.json').success(function(data) {
    for (var i = 0; i < 6; i++) {
      console.log(data[i]);
      var li = $('<li>');
      var dt = $('<time>');
      dt.attr('datetime', data[i].date);
      dt.text(moment(data[i].date).fromNow());
      var a = $('<a>');
      a.attr('href', "https://writing.natwelch.com/post/" + data[i].id);
      a.text(data[i].title);
      li.append(dt);
      li.append(": ");
      li.append(a);
      $('#posts').append(li);
    }
  });
});

// Google Anal
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-333449-2', 'auto');
ga('send', 'pageview');
