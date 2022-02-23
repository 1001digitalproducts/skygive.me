countdown.setLabels(
	'| sec| min| hr| d',
	'ms| sec| min||| wks|| yrs',
	', ');

function getTimeLeft(){
    var timeleft = moment()
    .countdown(
        "2021-12-01", 
        countdown.MONTHS|
        countdown.DAYS|
        countdown.HOURS|
        countdown.MINUTES|
        countdown.SECONDS, 
        4, 
        0
    ).toString().split(",");

    var len = timeleft.length
    let timeleft_html = ""

    var last_seq = timeleft[len-1].trim().split(" ")[1].toUpperCase()
    if (last_seq != "" && last_seq != "SEC"){
        timeleft.push("0 SEC")
        len = timeleft.length
    }
    
    var diff = 4 - timeleft.length
    for (let i = 0; i < diff; i++) {
        timeleft.unshift('-')
        len = timeleft.length
    }
    
    for (let i = 0; i < len; i++) {
        var item = timeleft[i].trim().split(" ")
        var str_time = ""
        var unit = ""
        if (item[0] == "-"){
            str_time = "0 <br/> "

            switch (i) {
                case 0:
                    str_time += "DAYS"
                    break;
                case 1:
                    str_time += "HOURS"
                    break;
                case 2:
                    str_time += "MIN"
                    break;
                case 3:
                    str_time += "SEC"
                    break;
            
                default:
                    break;
            }
        } else {
            unit = item[1].toUpperCase()
            str_time = item[0] + "<br/>" + unit
        }

        timeleft_html += "<div class='flex items-center justify-center font-bold'>" + str_time + "</div>"
    }

    $('#timeleft').html(timeleft_html)

    setInterval(function(){
        getTimeLeft()
    }, 1000)
}

function animateSquare(){
    anime({
        targets: '.block',
        translateX: () => anime.random(-600, 600),
        translateY: () => anime.random(-400, 400),
        easing: 'linear',
        duration: 5000,
        delay: anime.stagger(10),
        complete: animateSquare
    });
}

function animateSpinner(){
    anime({
        targets: '.spinner-time',
        width: '100%', // -> from '28px' to '100%',
        easing: 'easeInOutQuad',
        direction: 'alternate',
        duration: 10000,
        loop: true
    });
}