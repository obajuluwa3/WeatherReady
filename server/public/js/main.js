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

var womensAccessories = ['/images/womens/accessory1.png', '/images/womens/accessory2.png', '/images/womens/accessory3.png', '/images/womens/accessory4.png', '/images/womens/accessory5.png', '/images/womens/accessory6.png', '/images/womens/accessory7.png', '/images/womens/accessory8.png', '/images/womens/accessory9.png', '/images/womens/accessory10.png', '/images/womens/accessory13.png', '/images/womens/accessory14.png', '/images/womens/accessory15.png', '/images/womens/accessory16.png', '/images/womens/accessory18.png', '/images/womens/accessory19.png'];
var mensAccessories = ['/images/mens/accessory1.png', '/images/mens/accessory2.png', '/images/mens/accessory3.png', '/images/mens/accessory4.png', '/images/mens/accessory5.png', '/images/mens/accessory6.png', '/images/mens/accessory7.png', '/images/mens/accessory8.png', '/images/mens/accessory9.png', '/images/mens/accessory11.png', '/images/mens/accessory14.png'];

var womenAccessoryIndex = Math.floor((Math.random() * womensAccessories.length));
var womenAccessory2Index = Math.floor((Math.random() * womensAccessories.length));
var womenAccessory3Index = Math.floor((Math.random() * womensAccessories.length));

var menAccessoryIndex = Math.floor((Math.random() * mensAccessories.length));
var menAccessory2Index = Math.floor((Math.random() * mensAccessories.length));
var menAccessory3Index = Math.floor((Math.random() * mensAccessories.length));

var womensJackets = ['/images/womens/jacket1.png', '/images/womens/jacket2.png', '/images/womens/jacket3.png', '/images/womens/jacket5.png', '/images/womens/jacket6.png', '/images/womens/jacket7.png', '/images/womens/jacket8.png'];
var mensJackets = ['/images/mens/jacket1.png', '/images/mens/jacket2.png', '/images/mens/jacket3.png', '/images/mens/jacket5.png', '/images/mens/jacket6.png', '/images/mens/jacket7.png', '/images/mens/jacket8.png', '/images/mens/jacket9.png'];

var womenJacketIndex = Math.floor((Math.random() * womensJackets.length));
var menJacketIndex = Math.floor((Math.random() * mensJackets.length));

var womensPants = ['/images/womens/pant1.png', '/images/womens/pant2.png', '/images/womens/pant3.png', '/images/womens/pant4.png', '/images/womens/pant5.png', '/images/womens/pant6.png'];
var mensPants = ['/images/mens/pants1.png', '/images/mens/pants2.png', '/images/mens/pants3.png', '/images/mens/pants4.png', '/images/mens/pants5.png'];

var menPant2Index = Math.floor((Math.random() * mensPants.length));

var womenPantIndex = Math.floor((Math.random() * womensPants.length));
var womenPant2Index = Math.floor((Math.random() * womensPants.length));
var menPantIndex = Math.floor((Math.random() * mensPants.length));

var womensShoes = ['/images/womens/shoe1.png', '/images/womens/shoe3.png', '/images/womens/shoe4.png', '/images/womens/shoe5.png', '/images/womens/shoe6.png'];
var mensShoes = ['/images/mens/shoe2.png', '/images/mens/shoe3.png', '/images/mens/shoe5.png', '/images/mens/shoe6.png'];

var womenShoeIndex = Math.floor((Math.random() * womensShoes.length));
var menShoeIndex = Math.floor((Math.random() * mensShoes.length));

var womensShorts = ['/images/womens/shorts1.png', '/images/womens/shorts2.png', '/images/womens/shorts3.png', '/images/womens/shorts4.png', '/images/womens/shorts5.png'];
var mensShorts = ['/images/mens/shorts1.png', '/images/mens/shorts2.png', '/images/mens/shorts3.png', '/images/mens/shorts4.png', '/images/mens/shorts5.png', '/images/mens/shorts6.png'];

var womenShortIndex = Math.floor((Math.random() * womensShorts.length));
var womenShort2Index = Math.floor((Math.random() * womensShorts.length));
var menShortIndex = Math.floor((Math.random() * mensShorts.length));

var womensSkirts = ['/images/womens/skirt1.png', '/images/womens/skirt2.png', '/images/womens/skirt3.png'];

var womenSkirtIndex = Math.floor((Math.random() * womensSkirts.length));

var womensSweaters = ['/images/womens/sweater1.png', '/images/womens/sweater2.png', '/images/womens/sweater3.png', '/images/womens/sweater4.png'];
var mensSweaters = ['/images/mens/sweater1.png', '/images/mens/sweater2.png', '/images/mens/sweater3.png', '/images/mens/sweater4.png', '/images/mens/sweater5.png']

var womenSweaterIndex = Math.floor((Math.random() * womensSweaters.length));
var menSweaterIndex = Math.floor((Math.random() * mensSweaters.length));

var womensTees = ['/images/womens/tee1.png', '/images/womens/tee2.png', '/images/womens/tee3.png', '/images/womens/tee4.png', '/images/womens/tee5.png'];
var mensTees = ['/images/mens/tee1.png', '/images/mens/tee2.png', '/images/mens/tee3.png', '/images/mens/tee4.png'];

var womenTeeIndex = Math.floor((Math.random() * womensTees.length));
var womenTee2Index = Math.floor((Math.random() * womensTees.length));
var menTeeIndex = Math.floor((Math.random() * mensTees.length));
var menTee2Index = Math.floor((Math.random() * mensTees.length));


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
      if (response.main.temp >= 80 && (response.cod === 200 || response.cod === 201 || response.cod === 202 || response.cod === 210 || response.cod === 211 || response.cod === 212 || response.cod === 221 || response.cod === 230 || response.cod === 231 || response.cod === 232 || response.cod === 300 || response.cod === 301 || response.cod === 302 || response.cod === 310 || response.cod === 311 || response.cod === 312 || response.cod === 313 || response.cod === 314 || response.cod === 321 || response.cod === 500 || response.cod === 501 || response.cod === 502 || response.cod === 503 || response.cod === 504 || response.cod === 511 || response.cod === 520 || response.cod === 521 || response.cod === 522 || response.cod === 531)) {
        $('#topImg').append('<img src=' + '"' + womensTees[womenTeeIndex] + '"' + 'height="100" width="100">');
        $('#bottomImg').append('<img src=' + '"' + womensShorts[womenShortIndex] + '"' + 'height="100" width="100">');
        $('#shoeImg').append('<img src="/images/womens/shoe2.png" height="100" width="100">');
        $('#top2Img').append('<img src=' + '"' + womensTees[womenTee2Index] + '"' + 'height="100" width="100">');
        $('#bottom2Img').append('<img src=' + '"' + womensShorts[womenShort2Index] + '"' + 'height="100" width="100">');
        $('#jacketImg').append('<img src="/images/womens/jacket3.png" height="100" width="100">')
        $('#acc1').append('<img src="/images/womens/accessory17.png" height="50" width="50">')
        $('#acc2').append('<img src="/images/womens/accessory3.png" height="50" width="50">')
        $('#acc3').append('<img src="/images/womens/accessory16.png" height="50" width="50">')
      }
      else if (response.main.temp >= 80) {
        $('#topImg').append('<img src=' + '"' + womensTees[womenTeeIndex] + '"' + 'height="100" width="100">');
        $('#bottomImg').append('<img src=' + '"' + womensShorts[womenShortIndex] + '"' + 'height="100" width="100">');
        $('#shoeImg').append('<img src="/images/womens/shoe2.png" height="100" width="100">');
        $('#top2Img').append('<img src=' + '"' + womensTees[womenTee2Index] + '"' + 'height="100" width="100">');
        $('#bottom2Img').append('<img src=' + '"' + womensShorts[womenShort2Index] + '"' + 'height="100" width="100">');
        $('#jacketImg').append('<img src="/images/womens/jacket3.png" height="100" width="100">')
        $('#acc1').append('<img src="/images/womens/accessory17.png" height="50" width="50">')
        $('#acc2').append('<img src="/images/womens/accessory3.png" height="50" width="50">')
        $('#acc3').append('<img src="/images/womens/accessory16.png" height="50" width="50">')
      }
      else if (response.main.temp > 50 && (response.cod === 200 || response.cod === 201 || response.cod === 202 || response.cod === 210 || response.cod === 211 || response.cod === 212 || response.cod === 221 || response.cod === 230 || response.cod === 231 || response.cod === 232 || response.cod === 300 || response.cod === 301 || response.cod === 302 || response.cod === 310 || response.cod === 311 || response.cod === 312 || response.cod === 313 || response.cod === 314 || response.cod === 321 || response.cod === 500 || response.cod === 501 || response.cod === 502 || response.cod === 503 || response.cod === 504 || response.cod === 511 || response.cod === 520 || response.cod === 521 || response.cod === 522 || response.cod === 531)) {
        $('#topImg').append('<img src=' + '"' + mensTees[menTeeIndex] + '"' + 'height="100" width="100">');
        $('#bottomImg').append('<img src=' + '"' + mensPants[menPantIndex] + '"' + 'height="100" width="100">');
        $('#shoeImg').append('<img src="/images/womens/shoe2.png" height="100" width="100">');
        $('#top2Img').append('<img src=' + '"' + mensTees[menTee2Index] + '"' + 'height="100" width="100">');
        $('#bottom2Img').append('<img src=' + '"' + mensPants[menPant2Index] + '"' + 'height="100" width="100">');
        $('#jacketImg').append('<img src="/images/womens/jacket3.png" height="100" width="100">')
        $('#acc1').append('<img src="/images/womens/accessory17.png" height="50" width="50">')
        $('#acc2').append('<img src="/images/womens/accessory3.png" height="50" width="50">')
        $('#acc3').append('<img src="/images/womens/accessory16.png" height="50" width="50">')
      }
      else if (response.main.temp > 50) {
        $('#bottomImg').append('<img src=' + '"' + mensPants[menPantIndex] + '"' + 'height="100" width="100">');
        $('#shoeImg').append('<img src="/images/womens/shoe2.png" height="100" width="100">');
        $('#top2Img').append('<img src=' + '"' + womensTees[womenTee2Index] + '"' + 'height="100" width="100">');
        $('#bottom2Img').append('<img src=' + '"' + mensPants[menPant2Index] + '"' + 'height="100" width="100">');
        $('#jacketImg').append('<img src="/images/womens/jacket3.png" height="100" width="100">')
        $('#acc1').append('<img src="/images/womens/accessory17.png" height="50" width="50">')
        $('#acc2').append('<img src="/images/womens/accessory3.png" height="50" width="50">')
        $('#acc3').append('<img src="/images/womens/accessory16.png" height="50" width="50">')
      }

      else if (response.main.temp > 30) {
        $('#bottomImg').append('<img src=' + '"' + mensPants[menPantIndex] + '"' + 'height="100" width="100">');
        $('#shoeImg').append('<img src="/images/womens/shoe2.png" height="100" width="100">');
        $('#top2Img').append('<img src=' + '"' + womensTees[womenTee2Index] + '"' + 'height="100" width="100">');
        $('#bottom2Img').append('<img src=' + '"' + mensPants[menPant2Index] + '"' + 'height="100" width="100">');
        $('#jacketImg').append('<img src="/images/womens/jacket3.png" height="100" width="100">')
        $('#acc1').append('<img src="/images/womens/accessory17.png" height="50" width="50">')
        $('#acc2').append('<img src="/images/womens/accessory3.png" height="50" width="50">')
        $('#acc3').append('<img src="/images/womens/accessory16.png" height="50" width="50">')
      }

      else  {
        $('#bottomImg').append('<img src=' + '"' + mensPants[menPantIndex] + '"' + 'height="100" width="100">');
        $('#shoeImg').append('<img src="/images/womens/shoe2.png" height="100" width="100">');
        $('#top2Img').append('<img src=' + '"' + womensTees[womenTee2Index] + '"' + 'height="100" width="100">');
        $('#bottom2Img').append('<img src=' + '"' + mensPants[menPant2Index] + '"' + 'height="100" width="100">');
        $('#jacketImg').append('<img src="/images/womens/jacket3.png" height="100" width="100">')
        $('#acc1').append('<img src="/images/womens/accessory17.png" height="50" width="50">')
        $('#acc2').append('<img src="/images/womens/accessory3.png" height="50" width="50">')
        $('#acc3').append('<img src="/images/womens/accessory16.png" height="50" width="50">')
      }
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
