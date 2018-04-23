$(document).ready(function() {

  var param1 = getParamValue('city');
  console.log("iuoihoh",param1)
  url = "/details.html?city="+param1
  $('#myIframe2').attr('src', url);
})
function myFunction(){
  var param1 = getParamValue('city');
  url = "/details.html?city="+param1
  $('#myIframe2').attr('src', url);
  window.location.href = "/details.html?city="+param1;
  // window.top.location.href ="details.html";
}
