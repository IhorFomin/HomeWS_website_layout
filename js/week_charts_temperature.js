google.charts.load('current', { 'packages': ['bar'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['День', 'Температура'],
        ['09.01', 23],
        ['10.01', 24],
        ['11.01', 26],
        ['12.01', 22],
        ['13.01', 21],
        ['14.01', 27],
        ['15.01', 26],
    ]);

    var options = {
        focusTarget: 'category',
        color: '#373737',
        curveType: 'function',
        legend: { position: 'none'},
        lineWidth: 3,
        colors: ['#ff342d'],
        backgroundColor: '#fff',
        fontSize: 16,
        height: 170,
        width: 350,
        hAxis: { baselineColor: '#000', title:'', textStyle: '#373737', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' } },
        vAxis: { gridlines: '#000', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' }},
    };

    var chart = new google.charts.Bar(document.getElementById('temperature_chart_week'));

    chart.draw(data, google.charts.Bar.convertOptions(options));
}