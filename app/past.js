$(document).ready(function() {
    url = '/app/itin.json';
    // console.log("hi")
    var param1 = getParamValue('city');
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
          start_dt = new Date(data.bookings[i]['startDate']);
          // console.log(start_dt);
          if (start_dt<=today){
          city= data.bookings[i]['city']
          date = data.bookings[i]['startDate']+"-"+data.bookings[i]['endDate']
          if (param1 == city) {
              document.getElementById('city').innerHTML = city
              document.getElementById('date').innerHTML = date
                  // booking_url = "booking.html?city="+name+"&param2=22"
                  // $('#myIframe').attr('src', booking_url);
              // console.log(param1)
          }
        // city = data.bookings[1]['city']

        // console.log(city)

        // console.log()
        // console.log("hi")


        // console.log(param1)
      }
        }
    });
})
