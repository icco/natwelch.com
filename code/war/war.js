/** 
 * The backend for this little war game.
 *
 * @author Nathaniel "Nat" Welch
 * @date 3.31.09
 *
 * I'm not 100% positive this will work for all game scenarios,
 * but as they say "the only winning move is not to play".
 */

// Runs when the page is first loaded, build the card arrays
function init()
{
	// Who's hand is it in? 1 if player, -1 if comp 
	cards = new Array(53);

	// Shuffle deck. http://en.wikipedia.org/wiki/Shuffle
	for(var i = 0; i < 53; i++)
	{
		cards[i] = i < 27 ? -1 : 1;
	}

	// Based off of http://en.wikipedia.org/wiki/Fisher-Yates_shuffle
	var i = cards.length;
	while (--i)
	{
		var j = $random(1,i);
		var ti = cards[i];
		var tj = cards[j];
		cards[i] = tj;
		cards[j] = ti;
	}


	// where is the card image?
	cardimg = new Array(53);

	// Initialize all cards
	cardimg[1] =  "img/clubs-a-100.png";
	cardimg[2] =  "img/clubs-2-100.png";
	cardimg[3] =  "img/clubs-3-100.png";
	cardimg[4] =  "img/clubs-4-100.png";
	cardimg[5] =  "img/clubs-5-100.png";
	cardimg[6] =  "img/clubs-6-100.png";
	cardimg[7] =  "img/clubs-7-100.png";
	cardimg[8] =  "img/clubs-8-100.png";
	cardimg[9] =  "img/clubs-9-100.png";
	cardimg[10] = "img/clubs-10-100.png";
	cardimg[11] = "img/clubs-j-100.png";
	cardimg[12] = "img/clubs-q-100.png";
	cardimg[13] = "img/clubs-k-100.png";

	cardimg[14] = "img/diamonds-a-100.png";
	cardimg[15] = "img/diamonds-2-100.png";
	cardimg[16] = "img/diamonds-3-100.png";
	cardimg[17] = "img/diamonds-4-100.png";
	cardimg[18] = "img/diamonds-5-100.png";
	cardimg[19] = "img/diamonds-6-100.png";
	cardimg[20] = "img/diamonds-7-100.png";
	cardimg[21] = "img/diamonds-8-100.png";
	cardimg[22] = "img/diamonds-9-100.png";
	cardimg[23] = "img/diamonds-10-100.png";
	cardimg[24] = "img/diamonds-j-100.png";
	cardimg[25] = "img/diamonds-q-100.png";
	cardimg[26] = "img/diamonds-k-100.png";

	cardimg[27] = "img/hearts-a-100.png";
	cardimg[28] = "img/hearts-2-100.png";
	cardimg[29] = "img/hearts-3-100.png";
	cardimg[30] = "img/hearts-4-100.png";
	cardimg[31] = "img/hearts-5-100.png";
	cardimg[32] = "img/hearts-6-100.png";
	cardimg[33] = "img/hearts-7-100.png";
	cardimg[34] = "img/hearts-8-100.png";
	cardimg[35] = "img/hearts-9-100.png";
	cardimg[36] = "img/hearts-10-100.png";
	cardimg[37] = "img/hearts-j-100.png";
	cardimg[38] = "img/hearts-q-100.png";
	cardimg[39] = "img/hearts-k-100.png";

	cardimg[40] = "img/spades-a-100.png";
	cardimg[41] = "img/spades-2-100.png";
	cardimg[42] = "img/spades-3-100.png";
	cardimg[43] = "img/spades-4-100.png";
	cardimg[44] = "img/spades-5-100.png";
	cardimg[45] = "img/spades-6-100.png";
	cardimg[46] = "img/spades-7-100.png";
	cardimg[47] = "img/spades-8-100.png";
	cardimg[48] = "img/spades-9-100.png";
	cardimg[49] = "img/spades-10-100.png";
	cardimg[50] = "img/spades-j-100.png";
	cardimg[51] = "img/spades-q-100.png";
	cardimg[52] = "img/spades-k-100.png";
}

// Get a card's image. r is card, sv is suit 
function getCardImg(r, sv)
{
	var ret;

	ret = cardimg[r+(13*sv)];
	//console.log(ret);
						
	return ret;
}

function dump()
{
	var temp = "[ ";
	for(var i = 1; i < 53; i++)
	{
		temp += cardimg[i] + ":" + cards[i] +", ";
	}

	//console.log(temp,"]");
}

// Gets a random card for each player.
function playCard()
{
	//dump();
	var war = 0;

	var tempArr1 = new Array();	
	var tempArr2 = new Array();	
	var j = 0;
	var k = 0;
	var s1 = 0;
	var s2 = 0;
	var c1 = 0;
	var c2 = 0;

	//console.log(cards);

	for(i = 1; i < 53; i++)
	{
		switch(cards[i])
		{
		case 1:
			tempArr1[j] = i;
			j += 1;
			break;
		case -1:
			tempArr2[k] = i;
			k++;
			break;
		}
	}

	j = tempArr1.getRandom();
	k = tempArr2.getRandom();
	//j = k = 1; //Insta war

	s1 = Math.floor(j/13);
	c1 = j-(s1*13);
	s2 = Math.floor(k/13);
	c2 = k-(s2*13);

	//console.log('j:',j,' k:',k,' s1:',s1,' c1:', c1, ' s2:',s2,' c2:',c2); 

	//move computer card south
	$('computer').setStyle('position','absolute');
	$('computer').set('tween',{duration: 110,link:'chain'});
	$('computer').tween('margin-top',195).tween('visibility','hidden').tween('margin-top',0).tween('visibility','visible');

	var winner;

	$('c1').getElement('img').set('src',getCardImg(c1,s1));
	$('c2').getElement('img').set('src',getCardImg(c2,s2));
	$('c1').getElement('img').set('alt','A Card');
	$('c2').getElement('img').set('alt','A Card');

	// somethings wrong with my math, this fixes it temporarily tho
	if(c1 == 0)
	{
		c1 = 13;
	}

	if(c2 == 0)
	{
		c2 = 13;
	}

	if(c1 == c2)
	{
		// Need to add logic for war here...
		//console.log("WAR!");
		war = 3;
		winner = 0;
		$('c1').getElement('img').set('src','img/back-blue-100-4.png');
		$('c2').getElement('img').set('src','img/back-blue-100-4.png');
		$('winner').set('html',"WAR!");

		var d1 = 3;
		var d2 = 3;

		// Oh dear god this is ugly.
		while(d1 > 0 && d2 > 0)
		{
			var i = 0; 
			var arr = new Array(10);

			for(var j = 0; j < 10; j++)
			{
				arr[j] = $random(1,52);
			}

			for(i in arr)
			{

				if(cards[i] == -1)
				{
					d1 -= 1;
					cards[i] = !cards[i];
				}
				else if(d1 <= 0 && d2 <= 0)
				{
					break;
				}
				else
				{
					d2 -= 1;
					cards[i] = !cards[i];
				}
			}
		}
	}
	else
	{
		winner = c1 > c2 ? 1 : -1;
		if(winner > 0) // User Wins
		{
			var uwin = parseInt($('uwin').get('html'));
			uwin = uwin + 1;
			$('uwin').set('html', uwin);
			$('winner').set('html',"USER");
			//console.log(c2," < ",c1,": User wins round...");

			cards[c1+(s1*13)] = 1;
			cards[c2+(s2*13)] = 1;

			$$('.flipped ').each(function(e) {
				// Do something to move cards...
				});
		}
		else if(winner < 0) // Computer Wins
		{
			var cwin = parseInt($('cwin').get('html'));
			cwin = cwin + 1;
			$('cwin').set('html', cwin);
			$('winner').set('html',"COMPUTER");
			//console.log(c2," > ",c1,": Computer wins round...");

			cards[c1+(s1*13)] = -1;
			cards[c2+(s2*13)] = -1;

			$$('.flipped').each(function(e) {
				// Do something to move cards...
				});
		}
	}

	temp1 = $('uhand').get('html').toInt();
	temp2 = $('chand').get('html').toInt();
	temp = war ? 4 : 1;

	if(winner > 0)
	{
		temp1 += temp;
		temp2 -= temp;
		$('uwcnt').set('text',$('uwcnt').get('html').toInt()+temp);
		$('clcnt').set('text',$('clcnt').get('html').toInt()+temp);
	}
	else if(winner < 0)
	{
		temp1 -= temp;
		temp2 += temp;
		$('cwcnt').set('text',$('cwcnt').get('html').toInt()+temp);
		$('ulcnt').set('text',$('ulcnt').get('html').toInt()+temp);
	}
	else if(war)
	{

	}

	$('uhand').set('text',temp1);
	$('chand').set('text',temp2);
}

function alertTop(msg)
{
	$('alertBox').set('text',msg);
	$('alertBox').set('slide', { onComplete: function(){ $('alertBox').slide('out'); }});
	$('alertBox').slide('in');
	//console.log(msg,alertbox);
}

window.addEvent('domready', function(){

	alertbox = new Fx.Slide('alertBox',{duration: 15, transition: Fx.Transitions.Bounce.easeOut});
	alertbox.hide(); // Start Closed

	help = new Fx.Slide('help', {transition: Fx.Transitions.Bounce.easeOut});
	help.hide(); // Start Closed
	$('toggleHelp').addEvent('click',function(el)
	{
		el.stop();
		help.toggle();
		$('toggleHelp').set('html',!(help.open) ? 'close help?' : 'open help?');
	});

	var drop = $$('.side');
	var count = 0;
	var d = $('moveable').clone(true,true);

	$$('div.drag').each(function(i) {
		// Begin dragging code...
		new Drag.Move(i, { 
		droppables: '#middle', 
		onDrop: function(element, droppable)
			{
				if(!droppable) 
				{
					//console.log(element, ' dropped on nothing');
				}
				else
				{ 
					//console.log(element, 'dropped on', droppable);
					count += 1;
					$('cnt').set('html', count);
					$('Ccnt').set('html', count);
					$('user').grab(element);
					playCard();
					element.setStyles({	top: '0px', left: '0px', position: 'relative'});
				}
			},
		});
	});
});

