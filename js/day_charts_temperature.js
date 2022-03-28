google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Час', 'Температура'],
        ['1:00', 22.3],
        ['2:00', 22.4],
        ['3:00', 22.6],
        ['4:00', 22.4],
        ['5:00', 22.2],
        ['6:00', 21.0],
        ['7:00', 21.3],
        ['8:00', 21.5],
        ['9:00', 22.0],
        ['10:00', 22.3],
        ['11:00', 22.4],
        ['12:00', 22.5],
        ['13:00', 22.7],
        ['14:00', 23.0],
        ['15:00', 23.4],
        ['16:00', 23.4],
        ['17:00', 23.2],
        ['18:00', 23.0],
        ['19:00', 22.7],
        ['20:00', 22.6],
        ['21:00', 22.5],
        ['22:00', 22.4],
        ['23:00', 22.2],
        ['00:00', 22.1],
    ]);

    var options = {
        // tooltip: { isHtml: true },
        focusTarget: 'category',
        color: '#373737',
        curveType: 'function',
        legend: { position: 'none'},
        lineWidth: 3,
        colors: ['#ff0000'],
        backgroundColor: '#fff',
        fontSize: 16,
        height:480,
        width:1150,
        hAxis: { baselineColor: '#000', textStyle: '#373737', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' } },
        vAxis: { gridlines: '#000', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' }},
        chartArea:{left:70,top:10},
    };

    var chart = new google.visualization.AreaChart(document.getElementById('temperature_chart_day'));

    chart.draw(data, options);
    
}