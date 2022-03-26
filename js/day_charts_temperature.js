google.charts.load('current', { 'packages': ['corechart'] });
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Hour', 'Temperatura'],
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
        // title: 'Температура воздуха',
        color: '#373737',
        curveType: 'function',
        legend: { position: 'none' },
        lineWidth: 3,
        colors: ['#00ff00'],
        backgroundColor: '#fff',
        fontSize: 16,
        // chartArea:{left:80,top:50,width:'90%',height:'80%'},
        // hAxis: {baselineColor:'#000',textStyle:'#000',title:'Час отримання даних (Години:Хвилини:Секунди)',textStyle:{color:'#000'},titleTextStyle:{color:'#000',fontSize:'20'}},
        hAxis: { baselineColor: '#000', textStyle: '#373737', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' } },
        vAxis: { gridlines: '#000', textStyle: { color: '#373737', fontName: 'Roboto', bold: true, fontSize: '16' }, titleTextStyle: { color: '#000', fontSize: '20' }},
        // title:'',
        // 'color': '#373737',
        // 'fontSize': 18,
        //  'backgroundColor':'#000',
        //  'width':1000,,
        //  'height':650,
        //  'colors':['red'],
        // annotations: {
        //     textStyle: {
        //         fontName: 'Roboto',
        //         fontSize: 300,
        //         bold: true,
        //         italic: true,
        //         // The color of the text.
        //         color: '#fff',
        //         // The color of the text outline.
        //         auraColor: '#d799ae',
        //         // The transparency of the text.
        //         opacity: 0.8
        //      }
        // }
        // backgroundColor:{
        //   stroke: "#fff",
        //   strokeWidth: 0,
        // },
        // chartArea:{
        //   backgroundColor:{
        //   stroke: "#000",
        //   strokeWidth: 0,
        // }
        // }
        // titleTextStyle:{color:'white',fontSize:'30'},
        //            'backgroundColor':'#e6e3f4',
        //           //  'width':610,
        //           //  'height':370,
        //            'colors':['red']};
    };

    var chart = new google.visualization.AreaChart(document.getElementById('temperature_chart_day'));

    chart.draw(data, options);
}