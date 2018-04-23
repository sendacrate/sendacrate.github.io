$(document).ready(function() {

  var param1 = getParamValue('city');
  console.log("iuoihoh",param1)
  url = "/details.html?city="+param1
  $('#myIframe2').attr('src', url);
  document.getElementById('city').innerHTML = param1
})
function myFunction(){
  var param1 = getParamValue('city');
  url = "/details.html?city="+param1
  $('#myIframe2').attr('src', url);
  // window.location.href = "/app/details.html";
  window.top.location.href ="/app/details.html";
}
