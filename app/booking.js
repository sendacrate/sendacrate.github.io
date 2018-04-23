$(document).ready(function() {
    url = '/app/itin.json';
    // console.log("hi")
    var param1 = getParamValue('city');
    $.getJSON(url, function(data) {
        for(var i=0;i<data.bookings.length;i++){
          city= data.bookings[i]['city']
          date = data.bookings[i]['startDate']+"-"+data.bookings[i]['endDate']
          if (param1 == city) {
              document.getElementById('city').innerHTML = city
              document.getElementById('date').innerHTML = date
                  // booking_url = "booking.html?city="+name+"&param2=22"
                  // $('#myIframe').attr('src', booking_url);
              console.log(param1)
          } else {
              console.log("nah")
        }
        // city = data.bookings[1]['city']

        console.log(city)

        // console.log()
        // console.log("hi")


        // console.log(param1)

        }
    });
})
