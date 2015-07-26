require.config({
	paths: {
		"jquery"			: "../libs/jquery/dist/jquery",
		"underscore"	: "../libs/underscore-amd/underscore",
		"backbone"		: "../libs/backbone/backbone",
		"bootstrap"		: "../libs/bootstrap/dist/js/bootstrap",
		"sockjs"			: "../libs/sockjs/sockjs.min",
		"stomp"			: "../libs/stomp-websocket/lib/stomp.min",
		"navigator"		: "utils/navigator",
		"fblogin"		: "../libs/jquery/jquery.fblogin.min.js"
	},

    shim: {
        "bootstrap": {
          deps: ["jquery"]
        }
    }
});

require(['applications/index'], function(IndexApp){
});
