riot.tag('markdown', '<div id="editor"><textarea oninput="{ edit }"># hello</textarea><div name="resultdiv"></div></div>', '#editor { margin: 0; height: 100%; font-family: \'Helvetica Neue\', Arial, sans-serif; color: #333; } #editor textarea, #editor div { display: inline-block; width: 49%; height: 100%; vertical-align: top; -webkit-box-sizing: border-box; -moz-box-sizing: border-box; box-sizing: border-box; padding: 0 20px; min-height: 600px; } #editor textarea { border: none; border-right: 1px solid #ccc; resize: none; outline: none; background-color: #f6f6f6; font-size: 14px; font-family: \'Monaco\', courier, monospace; padding: 20px; height: 100%; }', function(opts) {
		'use strict';
		var md = window.markdownit();
	    this.resultdiv.innerHTML = md.render('# hello');
	    
	    this.edit = function(e) {
	    var md = window.markdownit();
	    this.resultdiv.innerHTML = md.render(e.target.value);
	    }
	
});