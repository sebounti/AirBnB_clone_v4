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

  // display check box on each item
  const amenities = {};
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

  $('button').on('click', function () {
    $.ajax({
      type: 'POST',
      url: 'http://0.0.0.0:5001/api/v1/places_search/',
      data: JSON.stringify({}),
      headers: {
        'Content-type': 'application/json'
      },
      success: function (data) {
        data.forEach(function (place) {
          const article = $('<article>');
          article.html(
            `<div class="title_box">
              <h2>${place.name}</h2>
                <div class="price_by_night">$${place.price_by_night}</div>
            </div>
            <div class="information">
              <div class="max_guest">
                ${place.max_guest} Guest${place.max_guest !== 1 ? 's' : ''}
              </div>
              <div class="number_rooms">
                ${place.number_rooms} Bedroom${place.number_rooms !== 1 ? 's' : ''}
              </div>
              <div class="number_bathrooms">
                ${place.number_bathrooms} Bathroom${place.number_bathrooms !== 1 ? 's' : ''}
              </div>
            </div>
            <div class="description">${place.description}</div>`
          );
          $('section.places').append(article);
        });
      }
    });
  });
});
