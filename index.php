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
      <?php

        $level_user = $_GET["level"];

        if ($level_user == "guest") { ?>

          <canvas id="grafico"></canvas>

        <?php }
        elseif ($level_user == "employee") { ?>

          <canvas id="grafico"></canvas>

          <canvas id="grafico2"></canvas>

        <?php }
        elseif ($level_user == "clevel") { ?>

          <canvas id="grafico"></canvas>

          <canvas id="grafico2"></canvas>

          <canvas id="grafico3"></canvas>

        <?php } ?>


      <script src="main.js" charset="utf-8"></script>
    </div>
  </body>
</html>
