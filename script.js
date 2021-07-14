$(document).ready(function(){
    $("#current-day").text(moment().format("dddd, MMMM Do"));

    $(".saveBtn").on("click", function() { //saveBtn click
        var textInput = $(this).siblings(".task").val();
        var  time = $(this).parent().attr("id");
        localStorage.setItem(time, textInput);
        console.log("test")
    });

        //saving text input in the local storage
//local storage for each of the hours

  $("#h-9 .task").val(localStorage.getItem("h-9"));
  $("#h-10 .task").val(localStorage.getItem("h-10"));
  $("#h-11 .task").val(localStorage.getItem("h-11"));
  $("#h-12 .task").val(localStorage.getItem("h-12"));
  $("#h-13 .task").val(localStorage.getItem("h-13"));
  $("#h-14 .task").val(localStorage.getItem("h-14"));
  $("#h-15 .task").val(localStorage.getItem("h-15"));
  $("#h-16 .task").val(localStorage.getItem("h-16"));
  $("#h-17 .task").val(localStorage.getItem("h-17"));


    function hourChange() {
        var thisHour = moment().hour(); //retrieving the hours 
        console.log(thisHour)
        $(".time-block").each(function() {
            var otherHour = parseInt($(this).attr("id").split("-")[1]);
            if (otherHour < thisHour) {
                $(this).addClass("past");
            }
            else if (otherHour == thisHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("past");
                $(this).removeClass("present");
                $(this).addClass("future");
            }
            
        });
    }
    hourChange();
});