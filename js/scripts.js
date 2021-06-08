$(document).ready(function() {
  jQuery("h1").click(function() {
    alert("This is a heading.");
  });

  $("p").click(function() {
    alert("This is a paragraph.");
  });

  $("img").click(function() {
    alert("This is an image.");
  });
});