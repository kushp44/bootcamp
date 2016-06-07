function createMutant(mutantName) {
  $.post({
    url:mutantUrl,
    data: {
    mutant: {
      mutant_name: mutantName,
      real_name: 'Not-So-Super '+ mutantName
    succes: addMutant
  })
}
