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

   github : function () {
       var login = 'icco';

       var gh = new Request.JSONP({
         url: 'http://github.com/api/v1/json/' + login,
         callbackKey: 'callback',
         onComplete: function(data) {
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
               'themealist',
            ];

            // Only my repos that I like
            var repos = data.user.repositories.filter(function(item) { return myRepos.indexOf(item.name) >= 0; });

            var other_repos = data.user.repositories.filter(function(item) { return myRepos.indexOf(item.name) < 0 && !item.fork; });

            // Sort by last push
            repos.sort(function(a, b) {
               var compA = b.pushed_at;
               var compB = a.pushed_at;
               return (compA < compB) ? -1 : (compA > compB) ? 1 : 0;
            });

            // Sort by name
            other_repos.sort(function(a, b) {
               var compA = b.name.toLowerCase();
               var compB = a.name.toLowerCase();
               return (compA > compB) ? -1 : (compA < compB) ? 1 : 0;
            });

            // Detailed repositories
            repos.each(function(repo) {
               hp = '<a href="' + repo.homepage + '">#</a>';
               desc = '<small> - ' + repo.description + '</small>';
               a = '<a href="' + repo.url + '">' + repo.name + '</a> ';
               a = repo.homepage ? a + hp : a;

               var li = new Element('li', { html: a + '<br />' + desc });
               li.inject($('repos'));
            });

            // others repositories
            other_repos.each(function(repo) {
               a = '<a href="' + repo.url + '">' + repo.name + '</a> ';
               var li = new Element('li', { html: a });
               li.inject($('other_repos'));
            });
         }
      }).send();
   },

   flickr : function () {
      var fapi = new Request.JSONP({
         url: ' http://api.flickr.com/services/rest/',
         callbackKey: 'jsoncallback',
         data: {
            api_key: "5c282af934cd475695e1f727dd0404a9",
            secret: "49b3b77e99947328",
            user_id: "42027916@N00",
            method: "flickr.people.getPublicPhotos",
            format: "json",
            extras: "url_sq",
            per_page: "72",
         },
         onComplete: function(data) {

            data.photos.photo.each(function(photo) {
               url = "http://www.flickr.com/photos/" + photo.owner + "/" + photo.id;
               img = "<img src=\"" + photo.url_sq + "\" \\>";
               a = '<a href="' + url + '">' + img + '</a>';
               var li = new Element('li', { html: a });
               li.inject($('photos'));
            });
         }
      }).send();
   }
};

window.addEvent("domready", function() {
   Nat.updateAge();
   konami = new Konami(function() { Nat.changeBG(); });

   Nat.github();

   Nat.flickr();

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

