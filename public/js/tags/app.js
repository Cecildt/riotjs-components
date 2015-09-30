riot.tag('app', '<div class="header"><h1>RiotJS Components</h1><span class="source"> Built with <a href="https://muut.com/riotjs/" target="_blank">Riot.js - { this.version }</a></span></div><div id="componentView"></div>', function(opts) {
	  'use strict';
	  var self = this;
	  self.currentView = null;
    self.version = riot.version;
	  
	  self.loadView = function(viewName, opts) {
	    if (self.currentView) {
	      self.currentView.unmount(true);
	    }
		
	    self.currentView = riot.mount('div#componentView', viewName, opts)[0];
	  };
	  
	  self.appRouter = function(view, opts) {
	    switch(view) {
	    case 'markdown-editor':
        System.import('/js/tags/markdown-editor.js')	      
              .then(function(){
                self.loadView('markdown', opts);
              });                	      
	      break;
	    case 'burger-menu':
        System.import('/js/tags/burger-menu.js')
              .then(function(){
                self.loadView('burger-menu', opts);
              });
	      break;
	    case 'pin-post':
        System.import('/js/tags/pin-post.js')
              .then(function(){
                self.loadView('pin-post', opts);
              });
	      break;
      case 'article-card':
        System.import('/js/tags/article-card.js')
              .then(function(){
                self.loadView('article-card', opts);
              });
	      break;
      case 'comments':
        System.import('/js/tags/comments.js')
              .then(function(){
                self.loadView('comment-box', { title: 'Comment Box' });
              });
	      break;
      case 'share-bar':
        System.import('/js/tags/share-bar.js')
              .then(function(){
                self.loadView('share-bar', opts);
              });
	      break;
	    default:
	      riot.route('/');
	    }
	  }
	  
	  riot.route(self.appRouter);
	  
	  self.on('mount', function() {
	    riot.route.exec(self.appRouter);
	  });
  
});