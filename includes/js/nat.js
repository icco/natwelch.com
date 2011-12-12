/**
 * JS for natwelch.com
 */
var Nat = {
  updateAge : function () {
    // Make age accurate
    bday = new Date(1988,1,22,17);
    diff = bday.diff(new Date());
    $('age').set('text', (diff / 365.4).toFixed(2));
  },

  expand : function () {
    $('more-data').show();
    $('expander').hide();
    $('buffer').setStyle('height', '150px');
  },

  changeBG : function () {
    document.body.setStyles({
      backgroundImage: 'url("/i/konamipower.gif")'
    });
  },
};

window.addEvent("domready", function() {
  Nat.updateAge();
  konami = new Konami(function() { Nat.changeBG(); });
});

