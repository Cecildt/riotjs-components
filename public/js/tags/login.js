riot.tag('script', '', function(opts) {
	'use strict';

	var auth = riot.observable()
	
	auth.login = function(params) {
	  $.get('/api', params, function(json) {
	    auth.trigger('login', json)
	  })
	}

});

<!-- login view -->
riot.tag('login', '<form onsubmit="{ login }"><input name="username" type="text" placeholder="username"><input name="password" type="password" placeholder="password"></form>', function(opts) {
		'use strict';
			this.login = function() {
			this.opts.login({
			  username: this.username.value,
			  password: this.password.value
			});
			};

	  this.opts.on('login', function() {

	  });
	
});

<!--
riot.tag('body', '<login></login>', function(opts) {riot.mount('login', auth)
});

-->