Mixin
===========================================

It builds in the class and crowding and a variety of Mixin classes are offered.  
It is possible to use it only by building it in the class.

![Mixin](http://holyshared.github.com/Mixin/logo.png "Mixin")

How to use
-------------------------------------------

### Class.Attachment

#### Definition of class

The Attachment class is built in with Implements. 
And, attachEvent and attachHandler are defined.

	var Mock = new Class({

		Implements: [Attachment],

		//Generated event type.
		attachEvent: 'click',

		//Attached event.
		attachHandler: function(event){
			//do something
		}

	});

#### Attachment to event

The event is attached to the corresponding element by the use of the attach method.  
The dettach method is used to release the event. 

	var mock = Mock();
	mock.attach('ul li a');

	mock.attach(dettach);


Option of build
-------------------------------------------

Mixin/* +use-only Mixin
