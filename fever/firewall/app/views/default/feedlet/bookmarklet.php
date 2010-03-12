<?php $paths = $this->install_paths(); ?>
var __feedlet = 
{
	fever : '<?php e($paths['full'])?>/',
	sniff : function()
	{
		var pageTitle	= document.title;
		var url			= window.location.href;
		var feeds 		= [];
		
		if (document.xmlVersion || url.match(/^feed:\/\//i))
		{
			feeds.push(
			{
				title 	: pageTitle,
				href	: url,
				type	: 'feed'
			});
		}
		else
		{
			var links		= document.getElementsByTagName('link');
			for (var i=0; i<links.length; i++)
			{
				var link = links[i];
				if (link.href && 
					link.rel && 
					link.type &&
					link.rel.toLowerCase() == 'alternate' &&
					link.type.match(/^application\/(rss|atom)\+xml$/i)
					)
				{
					feeds.push(
					{
						title 	: link.title ? link.title : link.type.replace(/^application\/(rss|atom)\+xml$/i, '$1'),
						href	: link.href,
						type	: 'link'
					});
				};
			};
			
			if (true) // !feeds.length
			{
				var unique 	= [];
				var anchors	= document.getElementsByTagName('a');
				for (var j=0; j<anchors.length; j++)
				{
					var a = anchors[j];
					var str = a.href + ' ' + a.title + ' ' + a.innerHTML + ' ' + a.rel + ' ' + a.id;
					if (str.match(/\b(rss|atom|feed|xml|syndicate)\b/i))
					{
						// sniff out known web-based reader links
						var href = a.href.replace(/https?:\/\/(www\.)?(netvibes|bloglines)\.com\/(subscribe\.php\?url=|sub\/)(.+$)/i, '$4');
						if (this.arrayHas(unique, href))
						{
							continue;
						};
						
						// sniff out title
						var title = a.title;
						if (title.match(/^\s*$/))
						{
							var div = document.createElement('div');
							div.innerHTML = a.innerHTML;
							
							var imgs = div.getElementsByTagName('img');
							for (var k=0; k<imgs.length; k++)
							{
								var img = imgs[k];
								if (title.match(/^\s*$/))
								{
									title = img.alt;
								};
								div.removeChild(img);
							};
							
							if (title.match(/^\s*$/))
							{
								title = div.innerHTML.replace(/(<[^>]+>|&nbsp;|^\s*|\s*$)/gi, '');
							};
						};
								
						unique.push(href);
						feeds.push(
						{
							title 	: title,
							href	: href,
							type	: 'a'
						});
					};
				};
			};
		};
		
		var tmp = '';
		
		var configUrl = this.fever + '?feedlet'; 
		configUrl += '&url=' + encodeURIComponent(url);
		configUrl += '&title=' + encodeURIComponent(pageTitle);
		
		for (var n=0; n<feeds.length; n++)
		{
			var feed = feeds[n];
			configUrl += '&feeds['+n+'][href]=' + encodeURIComponent(feed.href);
			configUrl += '&feeds['+n+'][title]=' + encodeURIComponent(feed.title);
			configUrl += '&feeds['+n+'][type]=' + encodeURIComponent(feed.type);
		};
		
		// alert(configUrl);
		window.location.href = configUrl;
	},
	
	// support
	arrayHas : function(anArray, value)
	{
		for (var i=0; i<anArray.length; i++)
		{
			if (anArray[i] == value)
			{
				return true;
			};
		}
		return false;
	}
};
__feedlet.sniff();