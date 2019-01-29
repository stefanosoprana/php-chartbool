$(document).ready(function(){

  function line(nome, tipo, label, data){

    var ctx = nome;
    var chart = new Chart(ctx, {
      type: tipo,
      data: {
        labels: label,
        datasets: [{
          label: "My First dataset",
          data: data,
        }]
      },
    });

    return ctx
  }
  function multiline(nome, tipo, label, data1, data2, data3){
    var ctx = nome;
    var chart = new Chart(ctx, {
      type: tipo,
      data: {
        labels: label,
        datasets: [{
          label: "My First dataset",
            data: data1,
          },
          {
            data: data2,
          },
          {
            data: data3,
          }
        ]},
    });

    return ctx;

  }
  function pie(nome, tipo, label, data){
    var ctx = nome;
    var myPieChart = new Chart(ctx,{
      type: tipo,
      data: {
        datasets: [{
          data: data,
        }],
        labels: label,
      },
    });

    return ctx;

  }

  $.ajax({
    url: 'http://localhost/esercizio6/data.php',
    method: 'GET',
    success: function(data){
      var database = JSON.parse(data);
      var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre'];

      var data_line = (database.fatturato.data);
      var type_line = (database.fatturato.type);

      var type_pie = (database.fatturato_by_agent.type);
      var data_pie = (database.fatturato_by_agent.data);

      var type_multiline = (database.team_efficiency.type);
      var data_multiline_1 = (database.team_efficiency.data.Team1);
      var data_multiline_2 = (database.team_efficiency.data.Team2);
      var data_multiline_3 = (database.team_efficiency.data.Team3);

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

      var level_guest = (database.fatturato.access);
      console.log(level_guest);

      line($('#grafico'), type_line, mesi, data_line);

      pie($('#grafico2'), type_pie, get_name_pie(), get_data_pie());

      multiline($('#grafico3'), type_multiline, mesi, data_multiline_1, data_multiline_2, data_multiline_3);

    },
    error: function(){
      alert('si è verificato un errore');
    }
  })
});
