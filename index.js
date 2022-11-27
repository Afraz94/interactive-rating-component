$(".round").hover(function () {
  $(this).toggleClass("bho");
});

$(".round").click(function(){
  localStorage.setItem("number", $(this).text());
  $(this).toggleClass("bh");
  $(".round").not(this).removeClass("bh");
});

 $(".message").html("<p class=\"thankyou-text\">You selected "+localStorage.getItem("number")+" out of 5</p>");
