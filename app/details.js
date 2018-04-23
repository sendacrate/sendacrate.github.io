$(document).ready(function() {

  var param1 = getParamValue('city');
  // console.log("iuoihoh",param1)
  url = "/app/details.html?city="+param1
  $('#myIframe2').attr('src', url);
  // document.getElementById('city').innerHTML = param1
  url = '/app/itin.json';
  // console.log("hi")

  $.getJSON(url, function(data) {
      for(var i=0;i<data.bookings.length;i++){
        date = data.bookings[i]['startDate']+"-"+data.bookings[i]['endDate']
        city= data.bookings[i]['city']
        console.log(data.bookings[i]['flight-info'][0]['res-num'])
        resnum= data.bookings[i]['flight-info'][0]['res-num']
        flightnum = data.bookings[i]['flight-info'][0]['flight-num']
        dep_airport= data.bookings[i]['flight-info'][0]['from']
        dep_dt = data.bookings[i]['flight-info'][0]['dep']
        board_pos= data.bookings[i]['flight-info'][0]['pos']
        terminal = data.bookings[i]['flight-info'][0]['terminal']
        gate= data.bookings[i]['flight-info'][0]['gate']
        arr_airport = data.bookings[i]['flight-info'][0]['to']
        arr_dt = data.bookings[i]['flight-info'][0]['arr']
        if (param1 == city) {
            document.getElementById('res-num').innerHTML = resnum
            document.getElementById('flight-num').innerHTML = flightnum
            document.getElementById('dep-air').innerHTML = dep_airport
            document.getElementById('dep').innerHTML = dep_dt
            document.getElementById('pos').innerHTML = board_pos
            document.getElementById('terminal').innerHTML = terminal
            document.getElementById('gate').innerHTML = gate
            document.getElementById('arr').innerHTML = arr_dt
            document.getElementById('arr-air').innerHTML = arr_airport
            document.getElementById('city-det').innerHTML = param1+", "+date
                // booking_url = "booking.html?city="+name+"&param2=22"
                // $('#myIframe').attr('src', booking_url);
        }

      }

    })
})
function myFunction(){
  var param1 = getParamValue('city');
  // url = "/app/details.html?city="+param1
  // $('#myIframe2').attr('src', url);
  // window.location.href = "/app/details.html";
  window.top.location.href ="/app/details.html?city="+param1;
}
