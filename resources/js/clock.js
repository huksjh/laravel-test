"use strict";

function runTimes() {
    const clock_wrap = document.querySelector("#clock_wrap"),
        AMPM = clock_wrap.querySelector(".AMPM"),
        hours = clock_wrap.querySelector(".Hours"),
        minutes = clock_wrap.querySelector(".Minutes"),
        seconds = clock_wrap.querySelector(".Seconds"),
        years = clock_wrap.querySelector(".years"),
        month = clock_wrap.querySelector(".month"),
        days = clock_wrap.querySelector(".days"),
        dayWeeks = clock_wrap.querySelector(".dayWeeks");

    const date = new Date(),
        date_h = date.getHours(),
        date_m = date.getMinutes(),
        date_s = date.getSeconds(),
        date_year = date.getFullYear(),
        date_month = date.getMonth() + 1,
        date_day = date.getDate(),
        dayWeek = date.getDay();
    const Days = new Array(
        "일요일",
        "월요일",
        "화요일",
        "수요일",
        "목요일",
        "금요일",
        "토요일"
    );

    AMPM.innerText = date_h >= 12 ? "PM" : "AM";
    hours.innerText = date_h < 10 ? `0${date_h}` : `${date_h}`;
    minutes.innerText = date_m < 10 ? `0${date_m}` : `${date_m}`;
    seconds.innerText = date_s < 10 ? `0${date_s}` : `${date_s}`;

    years.innerText = date_year;
    month.innerText = date_month;
    days.innerText = date_day;
    dayWeeks.innerText = Days[dayWeek];
}

function init() {
    runTimes();
    setInterval(runTimes, 1000);
}

init();
