const digitalClock = () => {

    const now = new Date();

    let sec = now.getSeconds();
    let min = now.getMinutes();
    let hor = now.getHours();
    let date = now.toDateString();
    let mood = "am";

    if (hor > 12) {
        hor = hor -12
        mood = "pm"
    }

    if (sec < 10) {
        sec =`0${sec}`
    }

    if (min < 10) {
        min =`0${min}`
    }

    if (hor < 10) {
        hor =`0${hor}`
    }

    if (hor ==0) {
        
        hor = 12

    }






    const clock = `

                   <div id="date">
                   ${date}
                   </div>
         
         
         
         
                   <div id="time">
         
                   ${hor}:${min}:${sec} ${mood}
         
         
                   </div> `;

                   clockcont.innerHTML = clock;

}

// 

setInterval(digitalClock, 1000);