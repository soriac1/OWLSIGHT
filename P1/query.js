const http = require("http");
const mysql= require("mysql");
const utils = require('./utils.js');
const connection_pool = mysql.createPool({
host: '34.71.69.130',
user: 'root',
password: 'OWLSIGHT',
database:'owlsight',
connectionLimit :10
});
exports.login = function(query,res){
	console.log("hi");
        console.log(query.reqUser);
	console.log(query.reqPass);
	console.log(query.reqCheck);
        connection_pool.query('SELECT * FROM logindata;',function(error, select_results,fields){
                        flag  = false;
			console.log(select_results);
                        for (x of select_results){

				if (query.reqUser ==  x.username && query.reqPass == x.passowrd){
					flag = true;
					if (query.reqUser == "admin"){
						let responseObj = "Admin";
                                        	res.writeHead(200,{'Content-Type':'application/json'});
                                        	res.write(JSON.stringify(responseObj));
                                        	res.end();
                                        //res.writeHead(301,{'Content-Type':'./owlsight.html"});
                                        	return;
					}
					else {

						let responseObj = "Student";
						res.writeHead(200,{'Content-Type':'application/json'});
                                 		res.write(JSON.stringify(responseObj));
                                 		res.end();
					//res.writeHead(301,{'Content-Type':'./owlsight.html"});
                                 		return;
					}
				 }
                        }
			if(flag == false){
                		let responseObj = {'result' : 'User not Found'};
                        	res.writeHead(200,{"Content-Type":"application/json"});
                        	res.write(JSON.stringify(responseObj));
                        	//console.log(responseObj)
                       	 	res.end();
		}
});
}
exports.signup = function(query,res){
        console.log("hi");
        console.log(query.reqFirst);
	console.log(query.reqLast);
	console.log(query.reqNUser);
	console.log(query.reqNPass);
	console.log(query.reqRole);
	var f = JSON.stringify(query.reqFirst);
	var l = JSON.stringify(query.reqLast);
	var u = JSON.stringify(query.reqNUser);
	var p = JSON.stringify(query.reqNPass);
//	console.log("String");
//	console.log(f);
//	if (f !== " " && l !== " " && u !== " " && p !== " "){
        connection_pool.query('INSERT INTO logindata (Firstname,Lastname,username, passowrd )VALUES(?,?,?,?)',[query.reqFirst, query.reqLast,query.reqNUser,query.reqNPass],function (err, select_results, fields){


        let responseObj = "Success";
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(responseObj));
        res.end();
        return;

	connection_pool.query('SELECT * FROM logindata;',function(error, select_results,fields){
                        flag  = false;
                        for (x of select_results){
                                console.log(x);
			}
});
});



}





exports.adminpage = function(res){
        console.log("ESSSSSSSSSSSSSSS");
        let responseObj = "Success";
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(responseObj));
        res.end();
        return;
}

exports.admininfo = function(query,res){
        console.log("hi admin");
        console.log(query.reqBuild);
        console.log(query.reqClass);
        console.log(query.reqTime);
        connection_pool.query('INSERT INTO locations (Class_name, B_name, room_num, Time, Days, prof_name)VALUES(?,?,?,?,?,?)',
	[query.reqClass, query.reqBuild,query.reqRoom,query.reqTime,query.reqDay,query.reqPro],function (err, select_results, fields) {
//      console.log("SIGNUPPPPP");
//      for (x of select_results){
//              console.log(x);
//      }
        let responseObj = "Success";
        res.writeHead(200,{'Content-Type':'application/json'});
        res.write(JSON.stringify(responseObj));
        res.end();
        connection_pool.query('SELECT * FROM locations;',function(error, select_results,fields){
                        flag  = false;
                        for (x of select_results){
                                console.log(x);
                        }
	return;
});
});
        //}
        //else{
        //let responseObj = "Fail";
        //res.writeHead(200,{'Content-Type':'application/json'});
        //res.write(JSON.stringify(responseObj));
        //res.end();
        //return;
        //}
}




exports.classearch = function(query,res){
        console.log("hi");
        console.log(query.reqUser);
        connection_pool.query('SELECT * FROM locations ;',function(error, select_results,fields){
			 for (x of select_results){
				if (query.reqUser == x.Class_name){


					console.log(x);

                       			let resp = x;
                       			res.writeHead(200,{'Content-Type':'application/json'});
                       			res.write(JSON.stringify(resp));
                       			res.end();
                     		        return;


}
}


});
}
