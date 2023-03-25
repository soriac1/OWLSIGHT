const urlPrefix= "http://34.74.227.117/";

var button1 = document.getElementById("button1");

button1.addEventListener("click",function() {

    let  qObj = document.getElementById("text").value;

	console.log(qObj);
    var a=qObj+ "/1.jpg"
    var b = qObj+ "/2.jpg"
     var c = qObj+ "/3.jpg"
      var d = qObj+ "/4.jpg"
      var e = qObj+ "/5.jpg"
       var f = qObj+ "/6.jpg"
       var g = qObj+ "/7.jpg"
       var h = qObj+ "/8.jpg"
       var i = qObj+ "/9.jpg"
      var  j = qObj+ "/10.jpg"

  //    console.log(l);

     document.getElementById("yes").setAttribute("src", a);
     document.getElementById("yes2").setAttribute("src", b);
    document.getElementById("yes3").setAttribute("src", c);
     document.getElementById("yes4").setAttribute("src", d);
    document.getElementById("yes5").setAttribute("src", e);
    document.getElementById("yes6").setAttribute("src", f);
    document.getElementById("yes7").setAttribute("src", g);
    document.getElementById("yes8").setAttribute("src", h);
    document.getElementById("yes9").setAttribute("src", i);
      document.getElementById("yes10").setAttribute("src", j);



    // document.getElementById("direct").innerHTML =image;


});