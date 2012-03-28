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

  changeBG : function () {
    document.body.setStyles({
      backgroundImage: 'url("/i/konamipower.gif")',
      backgroundRepeat: 'repeat',
      backgroundSize: 'auto'
    });
  },
};

window.addEvent("domready", function() {
  Nat.updateAge();
  konami = new Konami(function() { Nat.changeBG(); });
});

