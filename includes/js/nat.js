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

   move : function (nextid) {
      datas = $$('.data');
      datas.each(function (elm) {
         if (elm.id == 'data' + nextid) {
            elm.show();
         } else {
            elm.hide();
         }
      });
   },

   updateAge : function () {
      // Make age accurate
      bday = new Date(1988,1,22,17);
      diff = bday.diff(new Date());
      $('age').set('text', (diff / 365.4).toFixed(2));
   },

   lastfm : function () {
      // Not working yet
      // API: c8a55898b287950c836a1af12d91ce7d
      var reqUrl = 'http://ws.audioscrobbler.com/2.0/?method=user.gettopalbums&user=icco&api_key=c8a55898b287950c836a1af12d91ce7d';
      var req = new Request({
         url : reqUrl,
         isSuccess : function (text, xml) {
            console.log(xml);
            console.log(text);
         }
      });
      req.send({
         method: 'get'
      });
   }
};

window.addEvent("domready", function() {
   Nat.updateAge();
   konami = new Konami(function(){ Nat.sort(); });

   // Keyboard navigation
   /* Disabling.
   var curid = 1;
   window.addEvent('keypress', function (ev) {
      if (ev.key == 'right') {
         curid = curid >= $$('.data').length ? $$('.data').length : (curid + 1);
         Nat.move(curid);
      } else if (ev.key == 'left') {
         curid = curid <= 1 ? 1 : (curid - 1);
         Nat.move(curid);
      }
   });
   */
});

