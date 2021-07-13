 $(document).ready(function() {
    $('#current-day').text(moment().format(MM,DD,YYYY)); //moment.js date format//
    $(".save-btn").on("click", function () {
        var date = $(this).parent().attr("id");
        var text = $(this).siblings(".task").val();
        localStorage.setItem(date, text);
    })
 });