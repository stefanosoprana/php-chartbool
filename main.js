$(document).ready(function(){

  $.ajax({
    url: 'http://localhost/esercizio6/data.php',
    method: 'GET',
    success: function(data){
      var database = JSON.parse(data);
      console.log(database);

      var ctx = $('#grafico');
      var chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: database,
          }]
        },
      });
    },
    error: function(){
      alert('si è verificato un errore');
    }
  })
});
