/**
 * JS for natwelch.com
 */
var Nat = {
   sort : function () {
      // Sorts the link list
      var s = new Fx.Sort($$('ul#melinks li'));
      var list = $$('ul#melinks li');
      var text_list = new Array();
      var idx_list = new Array();
      
      list.each(function (x) {
         text_list.push(x.get('text').trim());
      });
      
      var sort_list = $A(text_list);
      
      sort_list.sort();
      sort_list.each(function (x) {
         idx_list.push(text_list.indexOf(x));
      });

      s.sort(idx_list);
   },

   updateAge : function () {
      // Make age accurate
      bday = new Date(1988,1,22,17);
      diff = bday.diff(new Date());
      $('age').set('text', (diff / 365.4).toFixed(2));
   }
};

window.addEvent("domready", function() {
   Nat.updateAge();
   konami = new Konami(function(){ Nat.sort(); });
});

