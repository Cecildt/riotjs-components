riot.tag('app', '<div class="header"><h1>RiotJS Components</h1><span class="source"> Built with <a href="https://muut.com/riotjs/" target="_blank">Riot.js</a></span></div><div id="componentView"></div>', function(opts) {
	  'use strict';
	  var self = this;
	  self.currentView = null;
	  
	  self.loadView = function(viewName, id) {
	    if (self.currentView) {
	      self.currentView.unmount(true);
	    }
		
	    self.currentView = riot.mount('div#componentView', viewName, {data: id})[0];
	  };
	  
	  self.studyRoute = function(view, id) {
	    switch(view) {
	    case 'markdown-editor':
	      require('./views/markdown-view.html');
	      self.loadView('markdown-editor', id);
	      break
	    case 'item':
	      require('./views/item-view.html');
	      self.loadView('item-view', id);
	      break
	    case 'news':
	      require('./views/news-view.html');
	      self.loadView('news-view', id);
	      break
	    default:
	      riot.route('/');
	    }
	  }
	  
	  riot.route(self.studyRoute);
	  
	  self.on('mount', function() {
	    riot.route.exec(self.studyRoute)
	  });
  
});