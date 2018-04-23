$(document).ready(function() {


})
function myFunction(){
  var param1 = getParamValue('city');
  console.log("iuoihoh",param1)
  window.location.href = "/details?city="+param1+".html";
  // window.top.location.href ="details.html";
}
