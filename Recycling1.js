
//please add to github Thanks, Eli Perr
var search;
var recycling=["newspaper","aluminum can","paper", "egg cartons","water bottle","construction paper","wine bottles"]
var compost=["Chinese food container","food","apple core","banana", "milk carton", "pizza box", "bioware","carrots",""]
var trash=["candy wrapper","plastic bag", "diapers","toothbrush", "plastic straws","juice box","plastic forks","plastic spoons", "plastic knives","chip bag","styrofoam"] //third item not working
//autocorrect is in order of list?
//compostable option for tooth brush, tip: food soiled paper in compost
function find() {
	
	//var search=prompt("What would like to get rid of?");//program starts-asks user for product
	if ( search != null) {
		document.getElementById("search").innerHTML =
		"You want to get rid of " + search + " ?";

		var ans=recycling.indexOf(search); //looking for item search
		if (ans!=-1) //if ans exists in that list
		{recycling_function();}
		else 
			{
			var ans2=compost.indexOf(search);
			if (ans2!=-1)
			{
			  compost_function();
			}
			else {var ans3=trash.indexOf(search);
				if (ans3!=-1)
				{ trash_function();
				}
				else 
					{notFound()}
			
				}
			}
		
	
     
			
	}

}

function recycling_function()
{
//if you have a variable in js can you put into the html?
document.getElementById("ans").innerHTML =
			'<h1>Recycling</h1><div id="bin"> <img src="Recycle Bin.png" height=500px></div>';
			document.getElementById("message").innerHTML =
		"<p>You need to put " + search + " in the recycling. <p> ";
		
			
	};
function compost_function()
{document.getElementById("ans").innerHTML = '<h1>Compost</h1><div id="bin"> <img src="Compost Bin.png" height=500px> </div>';
	document.getElementById("message").innerHTML =
		"<p>You need to put " + search + " in the compost. <p> ";
}
function trash_function()
{
	document.getElementById("ans").innerHTML = 
	'<h1>Trash</h1><div id="bin"> <img src="Landfill Bin.png" height=500px> </div>';
	document.getElementById("message").innerHTML =
		"<p>You need to put " + search + " in the trash. <p> ";
		
}    
function notFound() {
	
	
	document.getElementById("ans").innerHTML = 
	'<h1 id="notFound">Item not found.</h1><br><br><br><div id="bin"> <img src="https://d13yacurqjgara.cloudfront.net/users/492116/screenshots/1667059/thrillist-404.gif" height=250x> </div>'; //placeholder img
	document.getElementById("message").innerHTML =
		"<b>Tip:</b><em> Is your spelling correct?</em> <br> <em> If so try searching for similar items or choosing similar items from the suggestion bar. </em>  "; //create quick tips here for plastic and food items and common materials
}


$(function autocomplete() {
  
   var items=trash.concat(compost,recycling)
    $( "#user_input" ).autocomplete({
      source: items  
    });
  });
  function test(){
    search = document.getElementById("user_input").value;
    
	find();
}
//can also press submit button (see html) 


function keyCode(event) {   //how this work?
    
   if (event.keyCode == 13) { //13 is keycode for enter
        test();
    }
}






	//autocomplete jquery button
//http://jqueryui.com/autocomplete/
