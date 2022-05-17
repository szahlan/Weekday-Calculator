import Weekday from './../src/js/weekday.js';

describe ('Weekday', ()=> {

  test('create a weekday object with year, month & day', () =>{
    const weekday = new Weekday(2022,5,15);
    expect(weekday.year).toEqual(2022);
    expect(weekday.month).toEqual(5);
    expect(weekday.day).toEqual(15);
  });

  test('calculate the days from jan 1, 0001 to the first of every month in 2022', () =>{
    const cases = [738170, 738201, 738229, 738260, 738290, 738321, 738351, 738382, 738413, 738443, 738474, 738504];

    for (let month = 1; month<=12; month++) {
      const weekday = new Weekday(2022,month,1);
      weekday.dayCounter();
      expect(weekday.totalDays).toEqual(cases[month - 1]);
    }
  });



  test('calculate the days from jan 1, 0001 to the first of every month in 2024', () =>{
    const cases = [738900, 738931, 738960, 738991, 739021, 739052, 739082, 739113, 739144, 739174, 739205, 739235];

    for (let month = 1; month<=12; month++) {
      const weekday = new Weekday(2024,month,1);
      weekday.dayCounter();
      expect(weekday.totalDays).toEqual(cases[month - 1]);
    }
  });
  
  test('return the day of the week from a user inputted date', ()=> {
    const cases = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    for (let day =1; day <= 7; day++){
      const weekday = new Weekday(2022,5,day);
      weekday.getWeekday();
      expect(weekday.weekday).toEqual(cases[day - 1]);
    }

  });
});