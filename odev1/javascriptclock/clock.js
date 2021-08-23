let name = prompt ("Adınız nedir?")
myName.innerHTML = `${name}`

function startTime() {
    const day = new Date()
    let h = day.getHours()
    let m = day.getMinutes()
    let s = day.getSeconds()
    h = checkTime (h)
    m = checkTime (m)
    s = checkTime (s)
    myClock.innerHTML = ` ${h} : ${m} : ${s}  ${dayname}`
    setTimeout(startTime, 1000)
    }

    function checkTime (i) {
        if (10>i) {i="0" + i}
        return i
    }

    const day = new Date()
let today = day.getDay()
let dayname 
switch(today) {
    case 1 :
    dayname = "Pazartesi";
    break;
    case 2 :
    dayname = "Salı";
    break;
    case 2 :
    dayname = "Çarşamba";
    break;
    case 4 :
    dayname = "Perşembe";
    break;
    case 5:
    dayname = "Cuma";
    break;
}





