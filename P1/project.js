const http = require('http');
const url = require('url');
const qs = require('./query.js');
const fileServer = require('./fileServer.js');
const utils = require('./utils.js');

function handle_incoming_request(req, res) {
    console.log(req.url);
    // get the path of the file to served
    const path = url.parse(req.url).pathname;
    // get a query (true makes sure the query string is parsed into an object)
    const queryObj = url.parse(req.url,"true").query;
	console.log("path is:");
	console.log(path);

    switch (path) {
	case "/login" :
		qs.login(queryObj,res);
		break;
	case "/signup" :
		qs.signup(queryObj,res);
		console.log('confirmed');
		//fileServer.serve_static_file("./public_html/signup.html",res);
		break;
        case "/Admin" :
		qs.adminpage(res);
		break;
	case "/AdminInfo" :
		qs.admininfo(queryObj,res);
		break;
	case "/classearch":
		qs.classearch(queryObj,res);
		break;
        case "/" :  //return default homepage
    // precede the given path with name of the subdirectory in which
            // the client files are stored 
            fileServer.serve_static_file("./public_html/index.html",res);
            break;
        default:
            fileServer.serve_static_file("./public_html"+ path,res);
            break;
    }    
        
     
 }


 const server = http.createServer(handle_incoming_request);

 server.listen(80,function() {console.log("port 80")});