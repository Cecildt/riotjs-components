riot.tag('comment-box', '<h1>{ opts.title }</h1><comment-list comments="{ comments }"></comment-list><comment-form ></comment-form>', function(opts) {
		'use strict';
		  this.comments = [];
		  
		  this.add = function(comment) {
		    this.comments.push(comment);
		    this.update();
		  }
	
});
riot.tag('comment', '<comment each="{ opts.comments }" name="{ this.name }" message="{ this.message }"></comment></comment-list><comment-form><form onsubmit="{ add }"><input type="text" name="name"><textarea name="message"></textarea><input type="submit" value="Post"></form></comment-form><comment><div><h2>{ opts.name }</h2><p>{ opts.message }</p></div>', '-list', function(opts) {
		'use strict';
		  
		this.add = function(e) {
	    var comment = {
	      name: this.name.value,
	      message: this.message.value
	    }
	
	    this.parent.add(comment);
	    e.target.reset();
	  }
	
});