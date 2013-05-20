
  
    var recognizing;
    var recognition1 = new webkitSpeechRecognition();
    recognition1.continuous = true;
    recognition1.interim = true;
    reset();
  //  recognition1.onend = reset;
 
    recognition1.onresult = function (event) {
     var final = "";
      var interim = "";
      for (var i = 0; i < event.results.length; ++i) {
        if (event.results[i].final) {
          final += event.results[i][0].transcript;
        } else {
          interim += event.results[i][0].transcript;
        }
      }
      final_span.innerHTML = final;
      interim_span.innerHTML = interim;
    }

    function reset() {
      recognizing = false;
      emailbutton.innerHTML = "Click to Speak";
    }

    function toggleStartStop() {
      if (recognizing) {
        recognition1.stop();
        reset();
      } else {
        recognition1.start();
        recognizing = true;
        emailbutton.innerHTML = "Click to Stop";
       // final_span.innerHTML = "";
       //interim_span.innerHTML = "";
      }
    }
  
 