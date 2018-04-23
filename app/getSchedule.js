$(document).ready (function(){
  url = '/app/itin.json';
  // console.log("hi")

  $.getJSON(url, function(data) {
      for(var i=0;i<data.bookings.length;i++){
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
