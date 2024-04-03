// JavaScript Document

var consttsource="tsource"; 

function getparams( name )
{
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp ( regexS );
	var tmpURL = window.location.href;
	var results = regex.exec( tmpURL );
	if( results == null )
		return"";
	else
		return results[1];
}

function setparams( name )
{	    
	param = getparams(consttsource);
	if (param != "") 
	{		    
		url=document.getElementById(name).href + "?" + consttsource + "=" + param;
		document.getElementById(name).href = url;	    		
	}	
}

function load ()
{	    
	
    param = getparams(consttsource);
	    
    var i;
   
    for (i = 0; i < document.anchors.length; i++)
    {
		setparams( document.anchors[i].id );        
    }	
}
