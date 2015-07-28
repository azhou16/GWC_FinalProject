var search;
var recycling=["newspapers","aluminum cans","paper","plastic","cereal boxes", "egg cartons","water bottles","construction paper","plastic straws","wine bottles","plastic forks","plastic spoons", "plastic knives", "Pepsi cans", "Gatorade bottles"] //now plastics in recycle sf
var compost=["Chinese food containers","food","apple cores","bananas","cotton balls", "milk cartons", "pizza boxes", "bioware","carrots","greenware","rice","eggs"] //adding brand names
var trash=["candy wrappers","plastic bags", "diapers","toothbrushes","gum","plastic wrap","juice boxes","chip bags","styrofoam", "plastic coat hangers","dog poop"] //third item not working
var special =["batteries", "TVs","laptops","computers","paint", "electronics", "lamps","medicine","clothes"]
//autocorrect is in order of list?
//compostable option for tooth brush, tip food soiled paper in compost
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
				{ var ans4=special.indexOf(search);
			      if (ans4!=-1)
				  {  special_function();}
					
				else
				
					{
						notFound()
					}
				}
				
				}
			}
		
	
     
			
	}

}
function tip()
{
var plastic=["water bottles","plastic","plastic forks", "plastic bags", "plastic straws","plastic knives","plastic spoons", "plastic wrap","Gatorade bottles","plastic coat hangers"]
 var good_tip=plastic.indexOf(search);
 if (good_tip!=-1)
	{
		document.getElementById("tip").innerHTML = '<div id="bulb" style= "margin-bottom: -75px; margin-left: -70px"><img src="Tip Icon.png" height=100px></div><h3>Tip:</h3> <p> In general plastics that are rigid and cannot be easily ripped apart by hand are recyclable <br> while soft, easily-broken plastics must go in the trash. <br> <a href="#pagetwo" class="ui-btn"style="height: 35px; width: 100px; margin-left: 620px"> See All Tips </a> </p> '
	   
	}

else
	  
	{ var food_soiled=["Chinese food containers", "pizza boxes", "milk cartons"]
	  var good_tip2=food_soiled.indexOf(search);
	  if (good_tip2!=-1)
	  {
		  document.getElementById("tip").innerHTML = '<div id="bulb" style= "margin-bottom: -75px; margin-left: -70px"><img src="Tip Icon.png" height=100px></div><h3>Tip:</h3> <p> All paper products that have been food-soiled should be put in the compost.</p> <br> <a href="#pagetwo" class="ui-btn"style="height: 35px; width: 100px; margin-left: 620px"> See All Tips </a>'
	       
	  }
	  else 
		  
		{ if (search=="styrofoam")
			{ document.getElementById("tip").innerHTML = '<div id="bulb" style= "margin-bottom: -75px; margin-left: -70px; margin-top: -200px"><img src="Tip Icon.png" height=100px></div><h3 style="margin-top: -100px">Tip:</h3> <p> Styrofoam peanuts can be dropped off at many mail houses for reuse.</p> <br> <a href="#pagetwo" class="ui-btn"style="height: 35px; width: 100px; margin-left: 620px"> See All Tips </a>'
				
			}
		else {
				document.getElementById("tip").innerHTML = ' <a href="#pagetwo" class="ui-btn"style="height: 35px; width: 100px; margin-left: 620px"> <p> Tips </p><img src="Tip Icon.png" style= "margin-left: -70px; height: 100px; margin-top: -100px"></a>'
				//get spacing right 
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
		"<p>You need to put " + search + " in the recycling. </p> ";
		
			
	};
function compost_function()
{document.getElementById("ans").innerHTML = '<h1>Compost</h1><div id="bin"> <img src="Compost Bin.png" height=500px> </div>';
	document.getElementById("message").innerHTML =
		"<p>You need to put " + search + " in the compost. </p> ";
}
function trash_function()
{
	document.getElementById("ans").innerHTML = 
	'<h1>Trash</h1><div id="bin"> <img src="Landfill Bin.png" height=500px> </div>';
	document.getElementById("message").innerHTML =
		"<p>You need to put " + search + " in the trash. </p> ";
		
}   
  function special_function() 
 {
 document.getElementById("ans").innerHTML = '<h1>Special</h1> <br> <div id="bin"> <img src="Special Bin.png" height=500px> </div>';
  
  if (search=="medicine")
			{
			document.getElementById("message").innerHTML ="<p> You need to drop medicine off at a police station or at certain pharmacies. </p>  <em> Medicine flushed down the drain or disposed in the garbage can find its way into the water supply!</em>";
			}
  else  if  (search=="clothes")
			 
			 {
				 document.getElementById("message").innerHTML ='<p> You need to fold up clothes in a cardboard box and set up a special pick up with the </p>  <a href="http://www.recyclemyjunk.com/" target="_blank"> RecycleMyJunk Program </a> ';
			 }
				 		 
			 else
			 {
				document.getElementById("message").innerHTML = ' <div><p> You need to take ' + search +  ' directly to the  <a href="http://www.recologysf.com/index.php/for-homes/transfer-station-residential" target="_blank"> dump </a> or schedule a pick up with the  <a href="http://www.recyclemyjunk.com/" target="_blank"> RecycleMyJunk Program</a>. </p> </div> ';
			 }
		 
  };
 
 //}


function notFound() {
	
	
	document.getElementById("ans").innerHTML = 
	'<h1 id="notFound">Item not found.</h1><div id="404bin" style="margin-top: -200px"> <img src="Not Found Bin.png" height=500px> </div>'; //placeholder img
	document.getElementById("message").innerHTML =
		'<b>Tip:</b><em> Is your spelling correct?</em> <br> <em> If so try searching for similar items or choosing similar items from the suggestion bar. </em><br><br>'; //create quick tips here for plastic and food items and common materials
                  
		document.getElementById("tip").innerHTML = '   <a href="#pagetwo" class="ui-btn"style="height: 35px; width: 100px; margin-left: 335px; margin-top: 300px"> <p> Tips </p><img src="Tip Icon.png" style= "margin-left: -70px; height: 100px; margin-top: 200px"></a>'
		}


$(function autocomplete() {
  
   var items=trash.concat(compost,recycling,special)
    $( "#user_input" ).autocomplete({
      source: items  
    });
  });
  function test(){
    search = document.getElementById("user_input").value;
    
	find();
	tip();
}
//can also press submit button (see html) 


function keyCode(event) {   //how this work?
    
   if (event.keyCode == 13) { //13 is keycode for enter
        test();
    }
}






	//autocomplete jquery button
//http://jqueryui.com/autocomplete/