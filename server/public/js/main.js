var zipCode = prompt("What is your zipcode?");

$.ajax({
  method: "GET",
  url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",
  success: function(response) {
    console.log(response);
    var min = Math.round(response.main.temp_min);
    $('#numLow').html(min + '<span id="lowF">&deg;F</span>');
    var max = Math.round(response.main.temp_max);
    $('#numHigh').html(max + '<span id="highF">&deg;F</span>');
    var current = Math.round(response.main.temp);
    $('#numCurrent').html(current + '<span id="currentF">&deg;F</span>');
    $('#location').html('in ' + response.name);
    $('img').attr('src', 'http://openweathermap.org/img/w/'+response.weather[0].icon+'.png')
    $('img').attr('id', 'icon');
    var description = response.weather[0].description;
    $('#description').html(description);
  }
})

$('#button').click(function() {
  var zipCode = prompt("What is your zipcode?");
  $.ajax({
    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",
    success: function(response) {
      console.log(response);
      var min = Math.round(response.main.temp_min);
      $('#numLow').html(min + '<span id="lowF">&deg;F</span>');
      var max = Math.round(response.main.temp_max);
      $('#numHigh').html(max + '<span id="highF">&deg;F</span>');
      var current = Math.round(response.main.temp);
      $('#numCurrent').html(current + '<span id="currentF">&deg;F</span>');
      $('#location').html('in ' + response.name);
      $('img').attr('src', 'http://openweathermap.org/img/w/'+response.weather[0].icon+'.png')
      $('img').attr('id', 'icon');
      var description = response.weather[0].description;
      $('#description').html(description);
    }
  })
})
