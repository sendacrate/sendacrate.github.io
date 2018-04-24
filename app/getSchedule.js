$(document).ready (function(){
  url = '/app/itin.json';
  // console.log("hi")
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth()+1; //January is 0!
  var yy = String(today.getFullYear()).substring(2,4);

  if(dd<10) {
      dd = '0'+dd
  }

  if(mm<10) {
      mm = '0'+mm
  }

  today = new Date(mm + '/' + dd + '/' + yy);
  $.getJSON(url, function(data) {
      for(var i=0;i<data.bookings.length;i++){
        if (start_dt>=today){
        start_dt = new Date(data.bookings[i]['startDate']);
        city= data.bookings[i]['city']
        booking_url = "booking.html?city="+city
        var iframe = document.createElement('iframe');
        iframe.frameBorder=0;
        iframe.width="250px";
        iframe.height="250px";
        iframe.id=city;
        // booking_url = "booking.html?city="+"Boston"
        iframe.setAttribute("src", booking_url);
        document.getElementById("container").appendChild(iframe);
      }
    }
  });


$('#myIframe').attr('src', booking_url);

  // console.log(param1)
})
function getParamValue(paramName)
{
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    for (var i = 0; i < qArray.length; i++)
    {
        var pArr = qArray[i].split('='); //split key and value
        if (pArr[0] == paramName)
            return pArr[1]; //return value
    }
}
