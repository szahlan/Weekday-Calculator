export default class Weekday {
        constructor(year, month, day) {
    this.year = year;
    this.month = month;
    this.day = day;
    }

    dayCounter() {
    let days = (this.year - 1) * 365 ; // calculates days up to the end of prev. year
    const leapYears = Math.trunc((this.year - 1)/4);
    days += leapYears; // caclculates extra days due to leap years
    
    if(this.month === 1 ) {
        days += 0;
    } else if(this.month === 2) {
        days+= 31; 
    } else if(this.month === 3) {
        days += 59;
    } else if (this.month === 4) {
        days += 90;
    } else if (this.month === 5) {
        days += 120;
    } else if (this.month === 6) {
        days += 151;
    } else if (this.month === 7) {
        days += 181;
    } else if (this.month === 8) {
        days += 212;
    } else if (this.month === 9) {
        days += 243;
    } else if (this.month === 10) {
        days += 273;
    } else if (this.month === 11) {
        days += 304;
    } else {
        days += 334;
    } // caclulates days in current (requested) year up to the end of the previous month.

    if (this.year % 4 === 0 && this.month > 2) {
        days += 1;
    } // accounts for extra days if current year is leap year AND if the date is past 2/29

    days += this.day - 1; // finally, adds days of current month

    this.totalDays = days;
    }

    getWeekday() {
    this.dayCounter();

        if (this.totalDays % 7 === 0) {
            this.weekday = "Sunday";
        } else if (this.totalDays % 7 === 1) {
            this.weekday = "Monday";
        } else if (this.totalDays % 7 === 2) {
            this.weekday = "Tuesday";
        } else if (this.totalDays % 7 === 3) {
            this.weekday = "Wednesday";
        } else if (this.totalDays % 7 === 4) {
            this.weekday = "Thursday";
        } else if (this.totalDays % 7 === 5) {
            this.weekday = "Friday";
        } else {
            this.weekday = "Saturday";
        }
    }
}


