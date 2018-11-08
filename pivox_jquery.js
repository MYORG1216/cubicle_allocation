/*      onload      */
function selectNull()
{
	$("#name").val([]);
	 $("#num").val([]);
}
/*setting title*/

/* setting the width of side nav to 250px and pg.c marg.l to 250px*/ 

$(document).ready(function(){
	$('#open').on("click",function(){
		$('#mySidenav').width(250);
		$('#main').css("marginLeft","250px");
		
	});	
});




/* setting the width of side nav to 0px and pg.c marg.l to 0px */
$('#closebtn').on("click",function(){
		$('#mySidenav').width(0);
		$('#main').css("marginLeft","0px");
			});


/*employee arrangement */
function arrange() {
     var emp = $("#name").val();
	 var numb =$("#num").val();
	 
	     
    for (var i = 1; i < 29; i++) {
                    var p = document.getElementById(`h${i}`).title;
        if (p == emp) {
            alert("person is already assigned");
			     break;
			}
         else {
            if (`h${numb}` == `h${i}`) {

                if (!document.getElementById(`h${i}`).title) {
                    document.getElementById(`h${i}`).title = emp;
                    document.getElementById(`h${i}`).style = "background-color:#32CD32;";
				}
			   
                else {
                    alert("chair is already filled");
					break;
				}

				} 
            }
        }
 }
/* delete */
 
	$("#dell").click( function()
	{
	 var demp = $("#name").val();
	 var dnumb = $("#num").val();
	 
	 for(var i = 0; i < 25 ;i ++)
	 {
		if( i == dnumb )
		{
			if(document.getElementById(`h${i}`).title)
				{
					document.getElementById(`h${i}`).title = " ";
					document.getElementById(`h${i}`).style="background-color:white;";		        
				}	
			else
			{
				alert("chair is already empty");
		    }
		}
		}
	});
	
	
/*reset*/ 
$('#restq').on("click", function(){	
	 $("#name").val([]);
	 $("#num").val([]);
	 //*debugger;	
});
 
 /*swap*/
 
 function swap(){
	var ch1 = $("#c1").val();
	 var ch2 = $("#c2").val();
	 //*debugger;
	 //* var title1 = $(`h${ch1}`).prop("title");
	 //*var title2 = $(`h${ch2}`).prop("title");
	  var title1 = document.getElementById(`h${ch1}`).title;
	  var title2 = document.getElementById(`h${ch2}`).title;
	  debugger;
	 if ( title1 != "" && title2 != "")
			 {
	document.getElementById(`h${ch1}`).title = title2;
	document.getElementById(`h${ch2}`).title = title1 ;
	alert("successfully swaped");
			 }
	else {
		 alert("swaping is not possible");
	}
	 
	
}
 

 
 
/* $("p[title|='Tomorrow']");  */
 
 
 
 
 
 
 
 
 
 
 
