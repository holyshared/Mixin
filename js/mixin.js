/*
---
name: Attachment

description: The function to be attached to the class of the event in each selector is built in.

license: MIT-style

authors:
- Noritaka Horio

requires:
  - Core/Type
  - Core/Function
  - Core/$$
  - Core/Element
  - Core/Elements
  - Core/Element.Event
  - Core/Class

provides: [Attachment]

...
*/

(function($$){

var Attachment = this.Attachment = new Class({

	_attachHandlers: {},

	attach: function(selecter){
		if (!Type.isFunction(this.attachHandler)){
			throw new Error('The attached event handler is not defined.');
		}
		var elements = $$(selecter);
		this._attachHandlers[selecter] = elements;
		elements.addEvent(this.attachEvent, this.attachHandler);
	},

	dettach: function(selecter){
		if (!this._attachHandlers[selecter]){
			throw new Error('There is no attached event handler corresponding to the selector.');
		}
		var elements = this._attachHandlers[selecter];
		elements.removeEvent(this.attachEvent, this.attachHandler);
	}

});

}($$));
