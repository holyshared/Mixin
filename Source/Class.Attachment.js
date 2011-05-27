/*
---
name: Attachment

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

	_attachHandlers: {},

	attach: function(selecter){
		if (!Type.isFunction(this.attachHandler)){

		}
		var elements = $$(selecter);
		this._attachHandlers[selecter] = elements;
		elements.addEvent(this.attachEvent, this.attachHandler);
	},

	dettach: function(selecter){
		if (!this._attachHandlers[selecter]){

		}
		var handler = this._attachHandlers[selecter];
		elements.removeEvent(this.attachEvent, this.attachHandler);
	}

});

}($$));
