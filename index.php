<!DOCTYPE html>
<html lang="en" dir="ltr">
  <head>
    <meta charset="utf-8">
    <title>ChartBool</title>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.3/Chart.min.js" charset="utf-8"></script>
  </head>
  <body>
    <div class="container">
      <canvas id="grafico"></canvas>
    </div>
    <!-- <script src="main.js" charset="utf-8"></script> -->
    <script type="text/javascript">

    var mesi = ['Gennaio','Febbraio','Marzo','Aprile','Maggio','Giugno','Luglio','Agosto','Settembre','Ottobre','Novembre','Dicembre']
    var data = [1000,1322,1123,2301,3288,988,502,2300,5332,2300,1233,2322];

    <?php include 'data.php'; ?>

    var dataFromPHP = "<?php echo json_encode($data); ?>";
    var database = JSON.parse(dataFromPHP);

    console.log(database);

    $(document).ready(function(){
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

    </script>
  </body>
</html>
