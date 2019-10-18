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

function basictest(numbe) {
    goto("basic2", true);
    setTimeout(function() {
        const now = new Date();
        const secondsSinceEpoch = Math.round(now.getTime() / 1000)  ;
        var prettyplis = 0;
        var skip = false;
        switch (numbe) {
            case 1:
               do {console.log("Stressing!"); prettyplis++}  while(prettyplis < 1000)
               break;
            case 2:
                do {console.log("Stressing!"); prettyplis++}  while(prettyplis < 10000)
                break;
            case 3:
                do {console.log("Stressing!"); prettyplis++}  while(prettyplis < 100000)
                break;
            case 4:
                do {console.log("Stressing!"); prettyplis++}  while(prettyplis < 1000000)
                break;
            default:
                $.notify("Invalid operation! What are you trying to do here!? >:(");
                skip = true;
                break;
        }
        if (!skip) {
            const now2 = new Date();
            const secondsSinceEpoch2 = Math.round(now.getTime() / 1000) ;

            var finish = now2.getTime() - now.getTime();

            $.notify(
                "The stress test has been completed! It took " + finish.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ", ") + "ms to finish.", 
                { position:"bottom-right", style: "io-success" }
            );
        }
        goto("home", false);
    }, 1000)
}

setTimeout(
    function(){ 
        goto("home", false);
    }
    , 2000);

// advanced stuff incoming

var virtualConsole = false;
var intermissionEnabled = false;

function check(thing, goto2, isdark) {
    if ($("#" + thing).val().trim() != "") {
        goto(goto2, isdark)
    } else {
        $.notify(
            "This cannot be empty!", 
            { position:"bottom-right", style: "io-bad" }
        );
    }
}

var decimalWarning = false;

function checkNum(thing, goto2, isdark) {
    if ($("#" + thing).val().trim() != "") {
        if (parseInt($("#" + thing).val()) === 0) {
            $.notify(
                "Your input has now been set to 1 as it was 0.", 
                { position:"bottom-right", style: "io-warning" }
            );
            document.getElementById(thing).value = 1;
        }
        if (parseInt($("#" + thing).val()) != $("#" + thing).val()) {
            $.notify(
                "Your input has been converted into an integer.", 
                { position:"bottom-right", style: "io-info" }
            );
            document.getElementById(thing).value = parseInt($("#" + thing).val());
        }
        goto(goto2, isdark)
    } else {
        $.notify(
            "This cannot be empty!", 
            { position:"bottom-right", style: "io-bad" }
        );
    }
}

function updateInfo() {
    
}


