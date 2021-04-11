(function (window){
	var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
	for (var name in names) {
 		var lc =names[name].toLowerCase();
  		var firstLetter =lc.charAt(0);
  		if (firstLetter=='j') {
    	byeSpeaker.speak(names[name]);
  		} else {
    		helloSpeaker.speak(names[name]);
  		}
	}
})(window);