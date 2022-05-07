google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Час', 'Тиск'],
        ['1:00', 1],
        ['2:00', 1.1],
        ['3:00', 1.1],
        ['4:00', 1.1],
        ['5:00', 1.1],
        ['6:00', 1.1],
        ['7:00', 1.1],
        ['8:00', 1.1],
        ['9:00', 1],
        ['10:00', 1],
        ['11:00', 1],
        ['12:00', 1],
        ['13:00', 0.9],
        ['14:00', 0.9],
        ['15:00', 0.9],
        ['16:00', 0.9],
        ['17:00', 0.9],
        ['18:00', 1],
        ['19:00', 1],
        ['20:00', 1],
        ['21:00', 1],
        ['22:00', 1.1],
        ['23:00', 1.1],
        ['00:00', 1.1],
    ]);

    var options = {
        // tooltip: { isHtml: true },
        focusTarget: 'category',
        color: '#373737',
        curveType: 'function',
        legend: { position: 'none'},
        lineWidth: 3,
        colors: ['#009222'],
        backgroundColor: '#fff',
        fontSize: 16,
        height:480,
        width:1150,
        hAxis: { baselineColor: '#000', textStyle: '#373737', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' } },
        vAxis: { gridlines: '#000', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' }},
        chartArea:{left:70,top:10},
    };

    var chart = new google.visualization.AreaChart(document.getElementById('pressure_chart_day'));

    chart.draw(data, options);
    
}