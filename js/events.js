function getIt() {
  $('p').on("click", function () {
    alert("Hey!");}
)}
function frameit() {
  $('img').on('load',function () {
    $('img').addClass('tasty');
  })
}
$(document).ready(function(){

// call functions here

});
