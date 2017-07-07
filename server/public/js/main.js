// add slick slider to display outfits
$(document).ready(function(){
  $('#outfits').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 1,
    prevArrow: $('#prevOutfitBtn'),
    nextArrow: $('#nextOutfitBtn'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// add slick slider to display accessories
$(document).ready(function(){
  $('#accessories').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    prevArrow: $('#prevAccBtn'),
    nextArrow: $('#nextAccBtn'),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
});

// grab zip code from hidden input field in profile.hbs and assign to variable
var zipCode = $('#zipCode').val();

// use ajax request to populate weather info, store in function to make DRY
var getWeather = function() {
  $.ajax({
    method: "GET",
    url: "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=052f26926ae9784c2d677ca7bc5dec98&units=imperial",
    success: function(response) {
      console.log(response);
      var min = Math.round(response.main.temp_min);
      $('#tempLo').text(min + 'º');
      var max = Math.round(response.main.temp_max);
      $('#tempHi').html(max + 'º');
      var current = Math.round(response.main.temp);
      $('#temp').html(current);
      $('#city').html(response.name);
      $('.weatherImg').attr('src', 'http://openweathermap.org/img/w/'+response.weather[0].icon+'.png')
      $('.weatherImg').attr('id', 'icon');
      var description = response.weather[0].main;
      $('#description').html(description);
    }
  })
}
// call function that populates weather info
getWeather();

// when change location button is clicked, new location is received and getWeather is run again
$('#newLocationBtn').click(function() {
  zipCode = prompt("What is your zipcode?");
  $('#zipCode').val(zipCode);
  getWeather();
})

// display current day of the week
var day = new Date();
var weekday = new Array(7);
weekday[0] =  "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

$('#day').text(weekday[day.getDay()]);

// display current date
var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
$('#date').text(today);

// Display recommended outfits


