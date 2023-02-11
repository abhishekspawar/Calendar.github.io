const mainarea = document.querySelector('.mainarea')
const today = document.getElementById('today')
let presentYear = new Date().getFullYear()  //returns year 2023 number
let presentMonth = new Date().getMonth() + 1//returns month 0(jan)-11(dec) number
let presentDay = new Date().getDay() + 1 //returns weekday 0(sunday)-6(saturday) number
let daysInMonth = new Date(presentYear, presentMonth, 0).getDate() //returns total days in a month 1-31 number

let presentDate = new Date().getDate()

let firstWeekday = new Date(presentYear, presentMonth, 1).getDay() // returns weekday of 1st date of month 0(sunday)-6(saturday) number


function numTostr(presentMonth) {
    let monthInStr;
    switch (presentMonth) {
        case 1:
            monthInStr = 'January';
            break;
        case 2:
            monthInStr = 'February';
            break;
        case 3:
            monthInStr = 'March';
            break;
        case 4:
            monthInStr = 'April';
            break;
        case 5:
            monthInStr = 'May';
            break;
        case 6:
            monthInStr = 'June';
            break;
        case 7:
            monthInStr = 'July';
            break;
        case 8:
            monthInStr = 'August';
            break;
        case 9:
            monthInStr = 'September';
            break;
        case 10:
            monthInStr = 'October';
            break;
        case 11:
            monthInStr = 'November';
            break;
        case 12:
            monthInStr = 'December';
            break;
    }
    today.innerHTML = `${monthInStr} ${presentDate}, ${presentYear}`
}

numTostr(presentMonth);



function changeCalendar(b, c) {
    mainarea.innerHTML = ''
    let a = b + c;
    console.log(b, c)
    if (a > 35) {
        mainarea.style.gridTemplateRows = "repeat(6,1fr)";
        for (let i = 1; i <= 42; i++) {
            let newdiv = document.createElement('div');
            mainarea.append(newdiv)
        }
    } else {
        mainarea.style.gridTemplateRows = "repeat(5,1fr)";
        for (let i = 1; i <= 35; i++) {
            let newdiv = document.createElement('div');
            mainarea.append(newdiv)
        }
    }
    console.log(b, c) //b= daysInMonth and c= fistWeekday
    for (let n = 0; n < b; n++) {
        let elem = mainarea.children[c + n]
        elem.innerHTML = n + 1;
        if (n + 1 == presentDate) {
            elem.id = 'todayDate'
        }
        if ((c + n) % 7 == 0) {
            elem.className = 'red';
        }

    }
}

changeCalendar(daysInMonth, firstWeekday)

function prevMonth() {
    if (presentMonth == 1) {
        presentYear = presentYear - 1;
        presentMonth = 12;
    } else {
        presentMonth = presentMonth - 1;
    }
    numTostr(presentMonth)
    daysInMonth = new Date(presentYear, presentMonth, 0).getDate()
    firstWeekday = new Date(presentYear, presentMonth - 1, 1).getDay()
    changeCalendar(daysInMonth, firstWeekday)

}

function nextMonth() {
    if (presentMonth == 12) {
        presentYear = presentYear + 1;
        presentMonth = 1;
    } else {
        presentMonth = presentMonth + 1;
    }
    numTostr(presentMonth)
    daysInMonth = new Date(presentYear, presentMonth, 0).getDate()
    firstWeekday = new Date(presentYear, presentMonth - 1, 1).getDay()
    changeCalendar(daysInMonth, firstWeekday)

}