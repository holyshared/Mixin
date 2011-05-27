/*
---
name: Class.Attachment

description: 

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Core/$$
  - Core/Element
  - Core/Elements
  - Core/Class

provides: [Attachment]

...
*/

(function($$){

var Attachment = this.Attachment = new Class({

	handlers: {},

//	attachEvent: 'click',
//	attachHandler: null,

	attach: funmction(selecter){
		var elements = $$(selecter);
		this.handlers[selecter] = elements;
		elements.addEvent(this.attachEvent, this.attachHandler);
	},

	dettach: funmction(selecter){
		var handler = this.handlers[selecter];
		elements.removeEvent(this.attachEvent, this.attachHandler);
	}

});

}($$));
