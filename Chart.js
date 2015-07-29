    google.load('visualization', '1.1', {packages: ['line']});
    google.setOnLoadCallback(drawChart);

    function drawChart() {

      var data = new google.visualization.DataTable();
      data.addColumn('number', 'Month');
      data.addColumn('number', 'Your Home Usage');
      data.addColumn('number', 'Similar Homes\' Usage');
      data.addColumn('number', 'Recommmended  Usage');

      data.addRows([
        [1,  480, 550, 500],
        [2,  490, 620, 485],
        [3,  430, 540, 410],
        [4,  400, 500, 390],
        [5,  455, 550, 385],
        [6,   440, 475, 350],
        [7,   415, 530, 370],
        [8,  435, 605, 410],
        [9,  500, 625, 399],
        [10, 385, 520, 405],
        [11,  395, 500, 400],
        [12,  475,  620, 386]
      ]);

      var options = {
        chart: {
          title: 'Last 12 Months Household Comparison',
          subtitle: 'Electricity \(kWh)'
        },
        width: 900,
        height: 500
      };

      var chart = new google.charts.Line(document.getElementById('linechart_material'));

      chart.draw(data, options);
    }
