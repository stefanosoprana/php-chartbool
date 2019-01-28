$(document).ready(function(){

  $.ajax({
    url: 'http://localhost/esercizio6/data.php',
    method: 'GET',
    success: function(data){
      var database = JSON.parse(data);

      var data_line = (database.fatturato.data);
      var type_line = (database.fatturato.type);

      var type_pie = (database.fatturato_by_agent.type);
      var data_pie = (database.fatturato_by_agent.data);

      function get_name_pie(){
        var result = [];
        for (var nome in data_pie) {
          result.push(nome);
        };
        return result;
      };

      function get_data_pie(){
        var result = [];
        for (var nome in data_pie) {
          result.push(data_pie[nome]);
        };
        return result;
      };

      var ctx = $('#grafico');
      var chart = new Chart(ctx, {
        type: type_line,
        data: {
          labels: ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'],
          datasets: [{
            label: "My First dataset",
            backgroundColor: 'rgb(255, 99, 132)',
            borderColor: 'rgb(255, 99, 132)',
            data: data_line,
          }]
        },
      });

      var ctx2 = $('#grafico2');
      var myPieChart = new Chart(ctx2,{
        type: type_pie,
        data: {
          datasets: [{
            data: get_data_pie(),
          }],
          labels: get_name_pie(),
        },
      });
    },
    error: function(){
      alert('si è verificato un errore');
    }
  })
});
