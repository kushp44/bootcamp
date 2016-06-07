var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

function processMutants(ajaxResults) {
  $.each(ajaxResults, function(i, mutant){
    console.log(mutant.mutant_name);
  })
}
function addMutant(mutant) {
  var li = $('li.template')
    .clone()
    .removeClass('template')
    .attr('data-id', mutant.id);

  $('#mutantList').append(li);
}
li.find('mutant-name')
  .html(mutant.mutant_name);
$('#mutantList').append(li);

var mutantsUrl = 'https://mutant-school.herokuapp.com/api/v1/mutants';

$(document).on('click', 'a.delete', function(ev) {
  var li = $(ev.currentTarget).closest('li');
  var id = li.data('id');
  deleteMutant(id, li);
});

$(function() {
  $.get({
    url: mutantsUrl,
    success: processMutants
  });
});

$.ajax({
  url: ''
  method: 'delete'
})
