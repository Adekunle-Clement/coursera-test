//making Say hello responsing to cliking

function sayHello() {
	var name =
   document.getElementById("name").value
   var message = "<h2>Hello " + name + "!</h2"; //This is to make the message appear in h2 format

   //retrieving  our message and put it in the div content
   //document.getElementById("content")
     //    .textContent = message;

    document.getElementById("content")
         .innerHTML = message;          //THis to make the message not just to appear as text h2 element
                                        // but the brwoser can format it as html
     
      if (name==="student") {
      	var title =
      	document.querySelector("#title")
      	.textContent;
      	title += " & Lovin '  it!";

      	document.querySelector("h1") //h1 is used instead of #title becasuse we only have only one h1, 
      	                              //even if it is more than one the first that match it will be selected
      	.textContent = title ;  // pass by reference or value

      }
	// body...
}