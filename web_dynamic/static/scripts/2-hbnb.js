$(document).ready(function () {
    // Initialisez une liste vide pour stocker les aménités cochées
    let selectedAmenities = [];
  
    // Sélectionnez toutes les cases à cocher avec la classe "checkbox-amenities"
    $('.checkbox-amenities').change(function () {
      var amenityId = $(this).data('id');
      var amenityName = $(this).data('name');
  
      if ($(this).is(':checked')) {
        // Si la case à cocher est cochée, ajoutez l'aménité à la liste
        selectedAmenities.push({ id: amenityId, name: amenityName });
      } else {
        // Si la case à cocher est décochée, retirez l'aménité de la liste
        selectedAmenities = selectedAmenities.filter(function (amenity) {
          return amenity.id !== amenityId;
        });
      }
  
      // Mettez à jour la balise h4 avec la liste des aménités cochées
      var amenityList = selectedAmenities.map(function (amenity) {
        return amenity.name;
      }).join(', ');
  
      $('.amenities h4').text('Amenities: ' + amenityList);
    });
  });

$(document).ready(function () {
    // requête GET vers l'URL de l'API
    $.get('http://0.0.0.0:5001/api/v1/status/', function (data) {
        if (data.status === 'OK') {
            // Si le statut est OK, ajoutez la classe "available" à div#api_status
            $('#api_status').addClass('available');
        } else {
            // Sinon, supprimez la classe "available"
            $('#api_status').removeClass('available');
        }
    });
});
