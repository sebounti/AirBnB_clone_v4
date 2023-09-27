$('document').ready(function () {
  // requête GET vers l'URL de l'API
$.get('http://0.0.0.0:5001/api/v1/status/places_search/', function (data) {
  if (data.status === 'OK') {
      // Si le statut est OK, ajoutez la classe "available"
      $('#api_status').addClass('available');
  } else {
      // Sinon, supprimez la classe "available" (pour que le bouton passe au gris)
      $('#api_status').removeClass('available');
  }
});

  //display check box on each item
  let amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
      if ($(this).is(':checked')) {
          amenities[$(this).attr('data-id')] = $(this).attr('data-name');
      } else {
          delete amenities[$(this).attr('data-id')];
      }
      if (Object.values(amenities).length === 0) {
          $('.amenities H4').html('&nbsp;');
      } else {
          $('.amenities H4').text(Object.values(amenities).join(', '));
      }
  });
$.ajax({
  type : 'POST',
  url : 'http://0.0.0.0:5001/api/v1/places_search/',
  contentType : 'application/json',
  data : JSON.stringify({}),
  success : function (data) {
    console.log(data);
    },
    error : function (data) {
    console.log(data);
    }
  });
});
