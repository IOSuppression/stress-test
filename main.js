var current = "loading"
var currentold = "nil";
var darkmode = true;
function goto(gotostring, isdark) {
	currentold = current;
	current = gotostring;
    $("." + currentold).removeClass("slide-in-blurred-bottom");
    $("." + currentold).addClass("slide-out-blurred-top");
    if (isdark != darkmode) {
        darkmode = isdark;
        if (isdark) {
                $("body").addClass("dark");
        } else {
                $("body").removeClass("dark");
        }
    }
    setTimeout(
    function(){ 
    	$("." + currentold).addClass("hidden"); 
        $("." + current).addClass("slide-in-blurred-bottom");
    	$("." + current).removeClass("hidden");
    }
    , 410);
}

function basictest() {
    
}

setTimeout(
    function(){ 
        goto("home", false);
    }
    , 2000);



