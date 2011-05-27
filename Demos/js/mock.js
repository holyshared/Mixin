(function(){

var Mock = new Class({

	Implemenets: [Attachment],

	attachEvent: 'click',
	attachHandler: this.trrigerHandler,

	initiazlize: function(){
	},

	trrigerHandler: function(event){
alert('aaa');
	}

});

}());
