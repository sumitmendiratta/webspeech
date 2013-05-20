function translate(){
var src=document.getElementById("src").value;
	var dest=document.getElementById("dest").value;
	var text=document.getElementById("te").value;
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	var action="http://www.syslang.com/frengly/controller?action=translateREST&src="+src+"&dest="+dest+"&text="+text+"&email="+username+"&password="+password;



	
	

var xmlhttp,xmlDoc;
var txt,x,xx,i;
if (window.XMLHttpRequest)
  {// code for IE7+, Firefox, Chrome, Opera, Safari
  xmlhttp=new XMLHttpRequest();
  }
else
  {// code for IE6, IE5
  xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
  }
xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    txt="<table border='1'><tr><th>Title</th></tr>";
  xmlDoc=xmlhttp.responseXML; 

var x=xmlDoc.getElementsByTagName("root");
for (i=0;i<x.length;i++)
  { 
  document.write("<tr><td>");
  document.write(x[i].getElementsByTagName("translation")[0].childNodes[0].nodeValue);
  
  var translated=x[i].getElementsByTagName("translation")[0].childNodes[0].nodeValue;
  
document.getElementById(translated).innerHTML=translated;
  }


    }
}  
xmlhttp.open("GET",action,true);
xmlhttp.send();


}