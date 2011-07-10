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

   changeBG : function () {
      document.body.setStyles({
         backgroundImage: 'url("images/konamipower.gif")'
      });

      $$('.container').setStyles({
         borderColor: '#607890'
      });

      $$('#nav ul li').setStyles({
         backgroundColor: '#607890'
      });
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

      req.send({ method: 'get' });
   },

   // TODO: finish porting from jQuery.
   github : function () {
       var login = 'icco';
       new Request.JSON({url: 'http://github.com/api/v1/json/' + login + '?callback=?', onSuccess: function(person){
          // The repos I want to feature
          var myRepos = [
             'Agent355',
             'CSC484',
             'Javascript_Embed',
             'RainbowDeathSwarm',
             'Resume',
             'bloomFilter',
             'coffee_shop',
             'dotFiles',
             'pseudoweb',
             'thestack',
          ];

          // No forks plz
          var repos = $.grep(data.user.repositories, function() { return !this.fork });

          // Sort by last push
          repos.sort(function(a, b) {
             var compA = b.pushed_at;
             var compB = a.pushed_at;
             return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
          });

          featured_repos = repos.filter(function(x) { return myRepos.indexOf(x.name) >= 0; });

          // Detailed repositories
          featured_repos.each(function(repo) {
             hp = '<a href="' + this.homepage + '">#</a>';
             desc = '<small> - ' + this.description + '</small>';
             a = '<a href="' + this.url + '">' + this.name + '</a> ';
             a = this.homepage ? a + hp : a;

             $('#repos > ul').append('<li>' + a + '<br />' + desc + '</li>')
          });
       } }).get();
   }
};

window.addEvent("domready", function() {
   Nat.updateAge();
   konami = new Konami(function() { Nat.changeBG(); });
   //Nat.github();

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

   /* What I used to generate photo.
   $('natphoto').closePixelate([
      { shape: 'circle', resolution: 32, size: 6, offset: 8 },
      { shape: 'circle', resolution: 32, size: 9, offset: 16 },
      { shape: 'circle', resolution: 32, size: 12, offset: 24 },
      { shape: 'circle', resolution: 32, size: 9, offset: 0 }
   ]);
   */
});

