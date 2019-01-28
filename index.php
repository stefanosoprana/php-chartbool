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

      <?php include 'data.php'; ?>
      <canvas id="grafico" data-database="<?php echo $database ?>"></canvas>
      
    </div>
    <script src="main.js" charset="utf-8"></script>
  </body>
</html>
