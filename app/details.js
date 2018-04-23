$(document).ready(function() {

  var param1 = getParamValue('city');
  console.log("iuoihoh",param1)
  url = "/details?city="+param1+".html"
  $('#myIframe2').attr('src', url);
})
function myFunction(){
  var param1 = getParamValue('city');
  window.location.href = "/details.html?city="+param1;
  // window.top.location.href ="details.html";
}
