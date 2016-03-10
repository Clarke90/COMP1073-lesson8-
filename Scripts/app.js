"use strict";

// setup your IIFE (Immediately Invoked Function Expression)
(function () {
    
    "use strict";
    
    var person = {
        
        "age": 25, 
        "name": "Chad", 
    }; /*var person = new object();*/
    


for(var key in person){
    console.log(person[key]);
}
    
    
})();

