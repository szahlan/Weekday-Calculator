import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';

$(document).ready(function(){
  $("#userInput").submit(function(){
    const year = $("#year").val();
    const month = $("#month").val();
    const day = $("#day").val();

    let weekday = new Weekday(year,month,day);

    $("#monthVal").text(weekday.month);
    $("#dayVal").text(weekday.day);
    $("#yearVal").text(weekday.year);

    weekday.getWeekday(); 

    $("#weekday").text(weekday.weekday);
    $("#result").show();

    event.preventDefault();

  });
  
});