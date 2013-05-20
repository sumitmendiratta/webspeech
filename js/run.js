

var rec = new webkitSpeechRecognition();
    rec.onresult = function(event) {
      if (event.results.length > 0) {
        te.value = event.results[0][0].transcript;
        
        formsubmi();
      }
    }
    
    
    


    function showDashBoard(){
      for(var i = 1; i <= 3; i++) {
        $('.col'+i).each(function(){
            $(this).addClass('fadeInForward-'+i).removeClass('fadeOutback');
        });
      }
    }

    function fadeDashBoard(){
      for(var i = 1; i <= 3; i++) {
        $('.col'+i).addClass('fadeOutback').removeClass('fadeInForward-'+i);
      }
    }
      




//weather 
// weather by http://www.wunderground.com/
      weather();
      function weather()
      {
        
        jQuery(document).ready(function($) {
  $.ajax({
  url : "https://api.wunderground.com/api/2f6ce915672a9219/geolookup/conditions/q/IN/vellore.json",
  dataType : "jsonp",
  success : function(parsed_json) {
  var location = parsed_json['location']['city'];
  var temp_c = parsed_json['current_observation']['temp_c'];
  
  document.getElementById("weather").innerHTML=location + " " + temp_c + " °C\n";
 
  }
  });
});
      }
repeat();
function repeat() {
var date=new Date();
var h=date.getHours();
var m=date.getMinutes();
var s=date.getSeconds();
if(h<10)
{
  h="0"+h;
}
if(m<10)
{
  m="0"+m;
}
if(s<10)
{
  s="0"+s;
}
document.getElementById("display").innerHTML=h + ":" + m + ":" + s;
 setTimeout("repeat();", 500);
}





   
    
    $('#unlock-button').click(function(){
          $('.login-screen').removeClass('slidePageInFromLeft').addClass('slidePageBackLeft');
          showDashBoard();
    });

  $('.big, .small').each(function(){
    var $this= $(this),
        page = $this.data('page');
    $this.on('click',function(){
      $('.page.'+page).addClass('openpage');
      fadeDashBoard();
    })
  });
  $('.close-button').click(function(){
    $(this).parent().addClass('slidePageLeft')
          .one('webkitAnimationEnd oanimationend msAnimationEnd animationend', function(e) {
                $(this).removeClass('slidePageLeft').removeClass('openpage');
              });
      showDashBoard();
  });


  $('.view-demo-button').hover(function() {
    $(this).parent().addClass('slideDemoOverlayUp');
      showDashBoard();
  });



function copytoclip() {
 //to be done in future 
}




function formsubmi(){
  
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
   
  xmlDoc=xmlhttp.responseXML; 

var x=xmlDoc.getElementsByTagName("root");
for (i=0;i<x.length;i++)
  { 
  
  
var translated=x[i].getElementsByTagName("translation")[0].childNodes[0].nodeValue;
  
document.getElementById("translated").innerHTML=translated;
  }


    }
}  
xmlhttp.open("GET",action,true);
xmlhttp.send();


}