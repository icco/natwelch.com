/**
 * JS for natwelch.com
 */
window.addEvent("domready", function() {
   // Doesn't actually do anything.
   s = new Fx.Sort($$('ul#melinks li'));
   s.sort();

   // Make age accurate
   bday = new Date(1988,1,22,17);
   diff = bday.diff(new Date());
   $('age').set('text', (diff / 365.4).toFixed(1));
});

