$(document).ready(function(){
//saveBtn click
    $(".saveBtn").on("click", function() {
    var textInput = $(this).siblings(".task").val();
    var  time = $(this).parent().attr("id");
    }); 
    $("#current-day").text(moment().format("dddd, MMMM Do"));
    localStorage.setItem(time, textInput); //saving in the local storage
  });
//local storage for the hours

$("#h-9 .task").val(localStorage.getItem("h-9"));
$("#h-10 .task").val(localStorage.getItem("h-10"));
$("#h-11 .task").val(localStorage.getItem("h-11"));
$("#h-12 .task").val(localStorage.getItem("h-12"));
$("#h-13 .task").val(localStorage.getItem("h-13"));
$("#h-14 .task").val(localStorage.getItem("h-14"));
$("#h-15 .task").val(localStorage.getItem("h-15"));
$("#h-16 .task").val(localStorage.getItem("h-16"));
$("#h-17 .task").val(localStorage.getItem("h-17"));


  function hourUpdate();
  var thisHour = moment().hours(); //retrieving the hours 

  $(".time-block").each(function() {
    var eachHour = parseInt($(this).attr("id").split("-")[1]);
    if (eachHour < thisHour) {
        $(this).removeClass("past");
        $(this).addClass("present");
    }
    else if (eachHour == thisHour)
        $(this).removeClass("past");
        $(this).addClass("present");

    }