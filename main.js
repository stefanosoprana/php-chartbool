$(document).ready(function(){

  var database = $('#grafico').data('database');
  var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

      var ctx = $('#grafico');
      var chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: mesi,
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: database,
          }]
        },
      });

});
