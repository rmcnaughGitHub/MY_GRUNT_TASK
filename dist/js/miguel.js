(function(){
	'use strict'

	var run = {
		var time = 1;
	},

	init:function(){
		setElements();
		console.log('run');
	},

	setElements:function(){
		buttonsPress();
	},

	buttonsPress:function(){
		$('button').click(function () {
			alert("jQuery alert!");
		});
	}

	return {
		init: init
	}

	run.init();
});

