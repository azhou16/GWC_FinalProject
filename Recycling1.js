//autocorrect is in order of list
var search;
var recycling=["newspaper","aluminum can","pizza box","paper", "egg cartons"]
var compost=["Chinese food container","food","apple core","banana"]
var trash=["candy wrapper","plastic bag", "diapers"] //third item not working


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
					{document.getElementById("ans").innerHTML =
					"not in this list";}
			
				}
			}
		
	
     
			
	}

}

function recycling_function()
{

document.getElementById("ans").innerHTML =
			'<h1>Recycling</h1><div id="recycle"> <img src="http://www.clker.com/cliparts/M/P/p/0/1/U/recycle-bin-md.png" height=500px> </div>';
		
			
	};
function compost_function()
{document.getElementById("ans").innerHTML = '<h1>Compost</h1><div id="compost"> <img src="http://3.bp.blogspot.com/--cz-5yfltiY/T1E58IadXkI/AAAAAAAARdg/WpJvLLHmIBc/s1600/Green_Bin.JPG" height=500px> </div>';
	
}
function trash_function()
{
	document.getElementById("ans").innerHTML = 
	'<h1>Trash</h1><div id="trash"> <img src="http://blog.timesunion.com/opinion/files/2011/03/0405_WVdisposable.jpg" height=500px> </div>';
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










	//autocomplete jquery button
//http://jqueryui.com/autocomplete/