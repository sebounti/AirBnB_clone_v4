$('document').ready(function () {
  // Créez un objet pour stocker les aménités sélectionnées
  const amenities = {};

  // Gestionnaire d'événements pour les cases à cocher
  $('INPUT[type="checkbox"]').change(function () {
    if ($(this).is(':checked')) {
      // Si la case à cocher est cochée, ajoutez l'aménité à l'objet "amenities"
      amenities[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      // Si la case à cocher est décochée, supprimez l'aménité de l'objet "amenities"
      delete amenities[$(this).attr('data-id')];
    }

    // Update le texte dans le <H4></H4> avec la liste des aménités sélectionnées
    // Object.values pour obtenir les valeurs de l'objet "amenities"
    $('.amenities H4').text(Object.values(amenities).join(', '));
  });
});
