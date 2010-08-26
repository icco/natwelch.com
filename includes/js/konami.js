// Konami_Mootools Class 1.0
// http://www.schlaeps.com/libraries/konomi_mootools/
// Written by Jonathan Schlaepfer

var Konami = new Class({
	code: ["up","up","down","down","left","right","left","right","b","a","enter"],
    
	step: 0,

	initialize: function(func1,func2,func3){
		if($defined(func2))
			this.func2 = func2;
		if($defined(func3))
			this.func3 = func3;
		this.func = func1;
		window.addEvent('keyup',this.keystroke.bind(this));
	},
    
	keystroke: function(e){
		ev = new Event(e);
    	
		if(ev.key == this.code[this.step]){
			if($defined(this.func2))
				this.func2.attempt(this.step);
			this.step++;
			if(this.step == this.code.length){
				this.step = 0;
				this.func.attempt();
			}
		} else {
			this.step = 0;
			if($defined(this.func3))
				this.func3.attempt();
		}
	}
});
