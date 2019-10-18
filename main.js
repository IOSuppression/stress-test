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
    if (gotostring === "advanced6") {
        updateInfo();
    }
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
    if (virtualConsole === true) {
        $("#check-d").html("Yes");
    } else {
        $("#check-d").html("No");
    }
    $("#check-a").html($("#lname").val());
    $("#check-b").html($("#iocool").val());
    $("#check-c").html($("#lname2").val());
}

function advancedTest() {
    $("#advancedtable").html("<tr><th>Run #</th><th>Run Time</th></tr>")
    $("#advancedtable2").html("<tr><th>Run #</th><th>Run Time</th></tr>")
    
    if (virtualConsole) {
        goto("advanced_runwconsole", true); $("#advancedtable2").css("display", "none"); $("#inter2").css("display", "block"); $("#inter3").css("display", "none"); $("#home2").css("display", "none");  setTimeout(function() {
            var runs = [];
            var totaltime = 0;
            
    
            do {
                const p1 = new Date().getTime();
                var i = 0;
                do {
                    $("#virtualconsole").html( $("#virtualconsole").html() + "<p>" + $("#lname").val() + "</p>" );
    
                    i++;
                }
    
                while(i < $("#iocool").val());
    
                const p2 = new Date().getTime();
    
                var runspush = p2 - p1;
                runs.push(runspush)
            }
    
            while(runs.length < $("#lname2").val())
    
            var beepboop = 1;
            for (v of runs) {
                $("#advancedtable").html( $("#advancedtable").html() + "<tr> <td> " + beepboop + " </td> <td>" + v + "ms</td> </tr>")
                totaltime = totaltime + v; // beep boop
                beepboop++;
            }
            $("#advancedtable2").html( $("#advancedtable").html() + "<tr> <td> Total </td> <td>" + totaltime + "ms</td> </tr>")
            $("#inter2").css("display", "none"); 
            $("#advancedtable2").css("display", "block");
            $("#home2").css("display", "block");
            $("#inter3").css("display", "block"); 
        }, 1000)
    } else {
        goto("advanced_runwtable", true); $("#advancedtable").css("display", "none"); $("#inter1").css("display", "block"); $("#home1").css("display", "none");  setTimeout(function() {
        var runs = [];
        var totaltime = 0;
        

        do {
            const p1 = new Date().getTime();
            var i = 0;
            do {
                console.log($("#lname").val());

                i++;
            }

            while(i < $("#iocool").val());

            const p2 = new Date().getTime();

            var runspush = p2 - p1;
            runs.push(runspush)
        }

        while(runs.length < $("#lname2").val())

        var beepboop = 1;
        for (v of runs) {
            $("#advancedtable").html( $("#advancedtable").html() + "<tr> <td> " + beepboop + " </td> <td>" + v + "ms</td> </tr>")
            totaltime = totaltime + v; // beep boop
            beepboop++;
        }
        $("#advancedtable").html( $("#advancedtable").html() + "<tr> <td> Total </td> <td>" + totaltime + "ms</td> </tr>")
        $("#inter1").css("display", "none"); 
        $("#advancedtable").css("display", "block");
        $("#home1").css("display", "block");
    }, 1000)}
    
}

function clearEverything() {
    virtualConsole = false;
    intermissionEnabled = false;
    document.getElementById("lname2").value = "1";
    document.getElementById("iocool").value = "1";
    document.getElementById("lname").value = "IOSuppression Stress Tester is currently Running - (4-10182019)";
}

