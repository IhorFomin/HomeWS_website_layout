google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Час', 'Вологість'],
        ['1:00', 53],
        ['2:00', 53],
        ['3:00', 54],
        ['4:00', 54],
        ['5:00', 53],
        ['6:00', 52],
        ['7:00', 50],
        ['8:00', 49],
        ['9:00', 50],
        ['10:00', 51],
        ['11:00', 49],
        ['12:00', 48],
        ['13:00', 47],
        ['14:00', 48],
        ['15:00', 49],
        ['16:00', 49],
        ['17:00', 49],
        ['18:00', 49],
        ['19:00', 50],
        ['20:00', 51],
        ['21:00', 52],
        ['22:00', 53],
        ['23:00', 53],
        ['00:00', 53],
    ]);

    var options = {
        // tooltip: { isHtml: true },
        focusTarget: 'category',
        color: '#373737',
        curveType: 'function',
        legend: { position: 'none'},
        lineWidth: 3,
        colors: ['#0024d5'],
        backgroundColor: '#fff',
        fontSize: 16,
        height:480,
        width:1150,
        hAxis: { baselineColor: '#000', textStyle: '#373737', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' } },
        vAxis: { gridlines: '#000', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' }},
        chartArea:{left:70,top:10},
    };

    var chart = new google.visualization.AreaChart(document.getElementById('humidity_chart_day'));

    chart.draw(data, options);
    
}