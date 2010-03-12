// for v4 of Nat Welch . com

var open = false;

function init_page() {
	var f = $('card-front');
	var cardSlide = new Fx.Slide('card-back', {
		transition: Fx.Transitions.Sine.easeOut
	});
	var footSlide = new Fx.Reveal($('footer'));
	var out = $('container');

	cardSlide.hide();
	footSlide.dissolve();

	out.removeClass('card-open');
	out.addClass('card-closed');

	var fWrap = $('clicker');
	fWrap.show();

	var toggleDrop = function(e) {
		ex = new Event(e);
		cardSlide.toggle().chain(function() {footSlide.toggle(); });
		ex.stop();

		var heightEffect = new Fx.Morph('container', { transition: Fx.Transitions.Sine.easeOut});

		if(open) {
			heightEffect.start('.card-closed');
			fWrap.set('text', 'More');
			open = false;
		} else {
			heightEffect.start('.card-open');
			fWrap.set('text', 'Less');
			open = true;
		}
	}

	f.setStyles({'cursor':'pointer'});
	fWrap.setStyles({'cursor':'pointer'});
	f.addEvent('click', toggleDrop);
	fWrap.addEvent('click', toggleDrop);

	//s = new Sortables('melinks');
   s = new Fx.Sort($('melinks'));
}
