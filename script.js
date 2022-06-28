


function dostawa(){

	var x=document.getElementById("trasa").value;
	x=x/1;
	if(document.getElementById("check").checked==true){
		
		document.getElementById("hide").innerHTML="Dowieziemy Twoją pizzę za darmo";
		
	}else if(x<30){
		x=x*2;
		document.getElementById("hide").innerHTML="Dowóz będzie Cię kosztował "+x+" złotych";

	} else {
		document.getElementById("hide").innerHTML="Dostawa niemożliwa";
	}
	
	
}






	








