// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {'packages':['corechart']});

$(function() {
    var context = $.extend(APP_CONFIG, {
        'template_path': 'jst/example.html',
        'config': JSON.stringify(APP_CONFIG, null, 4),
        'copy': JSON.stringify(COPY, null, 4),
        'cantons': [{"nombre":"Abangares","slug":"abangares","headline":"70% de personas no tiene agua potable","total_abonados":19.310,"abonado_potable":4.499,"porcentaje_abonado_potable":"23.30%","abonado_no_potable":13.611,"porcentaje_abonado_no_potable":"70.49%","sin_datos":1.200,"porcentaje_sin_datos":"6.21%","total_viviendas":25.416,"acueducto_empresa_coperativa":55,"porcentaje_acueducto_empresa_cooperativa":"0.22%","acueducto_aya":14.465,"porcentaje_acueducto_aya":"56.91%","acueducto_municipal":6.580,"porcentaje_acueducto_municipal":"25.89%","acueducto_comunal_asada":2.961,"porcentaje_acueducto_comunal_asada":"11.65%","no_aplica":20,"porcentaje_no_aplica":"0.08%","otra_fuente":122,"porcentaje_otra_fuente":"0.48%","pozo":853,"porcentaje_pozo":"3.36%","rio":360,"porcentaje_rio":"1.42%","poblacion":18.039},
{"nombre":"Bagaces","slug":"bagaces","headline":"6.810 hogares reciben agua de Asadas","total_abonados":21.449,"abonado_potable":12.150,"porcentaje_abonado_potable":"56.65%","abonado_no_potable":2.834,"porcentaje_abonado_no_potable":"13.21%","sin_datos":6.465,"porcentaje_sin_datos":"30.14%","total_viviendas":9.666,"acueducto_empresa_coperativa":167,"porcentaje_acueducto_empresa_cooperativa":"1.73%","acueducto_aya":2.101,"porcentaje_acueducto_aya":"21.74%","acueducto_municipal":102,"porcentaje_acueducto_municipal":"1.06%","acueducto_comunal_asada":6.810,"porcentaje_acueducto_comunal_asada":"70.45%","no_aplica":9,"porcentaje_no_aplica":"0.09%","otra_fuente":141,"porcentaje_otra_fuente":"1.46%","pozo":496,"porcentaje_pozo":"5.13%","rio":169,"porcentaje_rio":"1.75%","poblacion":19.536},
{"nombre":"Canas","slug":"canas","headline":"Más del 50% de la población recibe agua del AyA","total_abonados":24.376,"abonado_potable":22.604,"porcentaje_abonado_potable":"92.73%","abonado_no_potable":381,"porcentaje_abonado_no_potable":"1.56%","sin_datos":1.391,"porcentaje_sin_datos":"5.71%","total_viviendas":10.801,"acueducto_empresa_coperativa":5,"porcentaje_acueducto_empresa_cooperativa":"0.05%","acueducto_aya":11.738,"porcentaje_acueducto_aya":"108.68%","acueducto_municipal":1.787,"porcentaje_acueducto_municipal":"16.54%","acueducto_comunal_asada":6.138,"porcentaje_acueducto_comunal_asada":"56.83%","no_aplica":13,"porcentaje_no_aplica":"0.12%","otra_fuente":116,"porcentaje_otra_fuente":"1.07%","pozo":470,"porcentaje_pozo":"4.35%","rio":177,"porcentaje_rio":"1.64%","poblacion":26.201},
{"nombre":"Carrillo","slug":"carrillo","headline":"98% de personas de Carrillo tienen agua potable","total_abonados":39.336,"abonado_potable":35.248,"porcentaje_abonado_potable":"89.61%","abonado_no_potable":626,"porcentaje_abonado_no_potable":"1.59%","sin_datos":3.462,"porcentaje_sin_datos":"8.80%","total_viviendas":20.444,"acueducto_empresa_coperativa":1,"porcentaje_acueducto_empresa_cooperativa":"0.00%","acueducto_aya":6.912,"porcentaje_acueducto_aya":"33.81%","acueducto_municipal":133,"porcentaje_acueducto_municipal":"0.65%","acueducto_comunal_asada":2.853,"porcentaje_acueducto_comunal_asada":"13.96%","no_aplica":10,"porcentaje_no_aplica":"0.05%","otra_fuente":68,"porcentaje_otra_fuente":"0.33%","pozo":780,"porcentaje_pozo":"3.82%","rio":44,"porcentaje_rio":"0.22%","poblacion":37.122},
{"nombre":"Hojancha","slug":"hojancha","headline":"Se desconoce la calidad o procedencia del agua para casi 50% de la población","total_abonados":8.291,"abonado_potable":4.247,"porcentaje_abonado_potable":"51.22%","abonado_no_potable":73,"porcentaje_abonado_no_potable":"0.88%","sin_datos":3.971,"porcentaje_sin_datos":"47.90%","total_viviendas":2.028,"acueducto_empresa_coperativa":0,"porcentaje_acueducto_empresa_cooperativa":"0.00%","acueducto_aya":739,"porcentaje_acueducto_aya":"36.44%","acueducto_municipal":18,"porcentaje_acueducto_municipal":"0.89%","acueducto_comunal_asada":833,"porcentaje_acueducto_comunal_asada":"41.07%","no_aplica":0,"porcentaje_no_aplica":"0.00%","otra_fuente":20,"porcentaje_otra_fuente":"0.99%","pozo":211,"porcentaje_pozo":"10.40%","rio":207,"porcentaje_rio":"10.21%","poblacion":7.197},
{"nombre":"La Cruz","slug":"la-cruz","headline":"2.800 de personas consumen agua no potable","total_abonados":13.856,"abonado_potable":5.667,"porcentaje_abonado_potable":"40.90%","abonado_no_potable":2.823,"porcentaje_abonado_no_potable":"20.37%","sin_datos":5.366,"porcentaje_sin_datos":"38.73%","total_viviendas":4.737,"acueducto_empresa_coperativa":8,"porcentaje_acueducto_empresa_cooperativa":"0.17%","acueducto_aya":1.718,"porcentaje_acueducto_aya":"36.27%","acueducto_municipal":267,"porcentaje_acueducto_municipal":"5.64%","acueducto_comunal_asada":2.011,"porcentaje_acueducto_comunal_asada":"42.45%","no_aplica":5,"porcentaje_no_aplica":"0.11%","otra_fuente":93,"porcentaje_otra_fuente":"1.96%","pozo":437,"porcentaje_pozo":"9.23%","rio":198,"porcentaje_rio":"4.18%","poblacion":19.181},
{"nombre":"Liberia","slug":"liberia","headline":"El cantón con la mayor cantidad de habitantes que reciben agua potable","total_abonados":72.452,"abonado_potable":71.052,"porcentaje_abonado_potable":"98.07%","abonado_no_potable":735,"porcentaje_abonado_no_potable":"1.01%","sin_datos":665,"porcentaje_sin_datos":"0.92%","total_viviendas":16.596,"acueducto_empresa_coperativa":5,"porcentaje_acueducto_empresa_cooperativa":"0.03%","acueducto_aya":15.167,"porcentaje_acueducto_aya":"91.39%","acueducto_municipal":31,"porcentaje_acueducto_municipal":"0.19%","acueducto_comunal_asada":700,"porcentaje_acueducto_comunal_asada":"4.22%","no_aplica":19,"porcentaje_no_aplica":"0.11%","otra_fuente":102,"porcentaje_otra_fuente":"0.61%","pozo":447,"porcentaje_pozo":"2.69%","rio":125,"porcentaje_rio":"0.75%","poblacion":62.987},
{"nombre":"Nandayure","slug":"nandayure","headline":"413 hogares usan agua de río","total_abonados":10.268,"abonado_potable":5.649,"porcentaje_abonado_potable":"55.02%","abonado_no_potable":1.151,"porcentaje_abonado_no_potable":"11.21%","sin_datos":3.468,"porcentaje_sin_datos":"33.77%","total_viviendas":12.843,"acueducto_empresa_coperativa":130,"porcentaje_acueducto_empresa_cooperativa":"1.01%","acueducto_aya":5.943,"porcentaje_acueducto_aya":"46.27%","acueducto_municipal":3.939,"porcentaje_acueducto_municipal":"30.67%","acueducto_comunal_asada":1.945,"porcentaje_acueducto_comunal_asada":"15.14%","no_aplica":8,"porcentaje_no_aplica":"0.06%","otra_fuente":78,"porcentaje_otra_fuente":"0.61%","pozo":387,"porcentaje_pozo":"3.01%","rio":413,"porcentaje_rio":"3.22%","poblacion":11.121},
{"nombre":"Nicoya","slug":"nicoya","headline":"Nicoya, el cantón con más Asadas en el país","total_abonados":50.010,"abonado_potable":30.163,"porcentaje_abonado_potable":"60.31%","abonado_no_potable":1.075,"porcentaje_abonado_no_potable":"2.15%","sin_datos":18.772,"porcentaje_sin_datos":"37.54%","total_viviendas":36.845,"acueducto_empresa_coperativa":45,"porcentaje_acueducto_empresa_cooperativa":"0.12%","acueducto_aya":23.935,"porcentaje_acueducto_aya":"64.96%","acueducto_municipal":2.760,"porcentaje_acueducto_municipal":"7.49%","acueducto_comunal_asada":7.633,"porcentaje_acueducto_comunal_asada":"20.72%","no_aplica":24,"porcentaje_no_aplica":"0.07%","otra_fuente":190,"porcentaje_otra_fuente":"0.52%","pozo":1.345,"porcentaje_pozo":"3.65%","rio":913,"porcentaje_rio":"2.48%","poblacion":50.825},
{"nombre":"Santa Cruz","slug":"santa-cruz","headline":"El cantón de Guanacaste con más hogares que sacan agua de pozos","total_abonados":67.317,"abonado_potable":53.250,"porcentaje_abonado_potable":"79.10%","abonado_no_potable":1.256,"porcentaje_abonado_no_potable":"1.87%","sin_datos":12.811,"porcentaje_sin_datos":"19.03%","total_viviendas":18.073,"acueducto_empresa_coperativa":6,"porcentaje_acueducto_empresa_cooperativa":"0.03%","acueducto_aya":6.993,"porcentaje_acueducto_aya":"38.69%","acueducto_municipal":60,"porcentaje_acueducto_municipal":"0.33%","acueducto_comunal_asada":8.559,"porcentaje_acueducto_comunal_asada":"47.36%","no_aplica":13,"porcentaje_no_aplica":"0.07%","otra_fuente":97,"porcentaje_otra_fuente":"0.54%","pozo":1.740,"porcentaje_pozo":"9.63%","rio":605,"porcentaje_rio":"3.35%","poblacion":55.104},
{"nombre":"Tilaran","slug":"tilaran","headline":"23.000 personas tienen agua potable","total_abonados":23.933,"abonado_potable":18.323,"porcentaje_abonado_potable":"76.56%","abonado_no_potable":4.089,"porcentaje_abonado_no_potable":"17.09%","sin_datos":1.521,"porcentaje_sin_datos":"6.36%","total_viviendas":10.232,"acueducto_empresa_coperativa":25,"porcentaje_acueducto_empresa_cooperativa":"0.24%","acueducto_aya":2.677,"porcentaje_acueducto_aya":"26.16%","acueducto_municipal":2.025,"porcentaje_acueducto_municipal":"19.79%","acueducto_comunal_asada":4.918,"porcentaje_acueducto_comunal_asada":"48.06%","no_aplica":9,"porcentaje_no_aplica":"0.09%","otra_fuente":137,"porcentaje_otra_fuente":"1.34%","pozo":77,"porcentaje_pozo":"0.75%","rio":364,"porcentaje_rio":"3.56%","poblacion":19.640}]
        });

    var $home = $('#home');
    var $canton_list = $('#canton_list');
    var $cantons = $('#cantons');

    $canton_list.html(JST.canton_list(context));
    $cantons.html(JST.cantons(context));
    
    var $home_link = $cantons.find('a#home-link');
    
    $home_link.click(function(){
        $cantons.find('section.canton').hide();
        $home.show();
        $home_link.hide();
    });
    
    $canton_list.find('a').click(function(){
        var slug= this.getAttribute('rel-data');
        $home.hide();
        $home_link.css( "display", "block");
        $cantons.find('section.canton').hide();
        $cantons.find('section.canton#' + slug).show();
    });
    

    // Set a callback to run when the Google Visualization API is loaded.
    google.setOnLoadCallback(drawChart);
    google.setOnLoadCallback(drawChart2);

    // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart() {
    
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Compania');
      data.addColumn('number', 'Porcentajes');
      data.addRows([
        ['AyA', 56.91],
        ['ASADAS', 11.65],
        ['Luvia', 2.13],
        ['Pozo', 3.36],
        ['Rio/Quebrada', 1.42],
        ['Muninicipal', 25.89],
        ['Empresa', 0.22],
        ['Otra Fuente', 0.48],
        ['No Aplica', 0.08]
      ]);
    
      // Set chart options
      var options = {'title':'Abangares',
                     'width':400,
                     'height':300};
    
      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart_div'));
      chart.draw(data, options);
    }

          // Callback that creates and populates a data table,
    // instantiates the pie chart, passes in the data and
    // draws it.
    function drawChart2() {
    
      // Create the data table.
      var data = new google.visualization.DataTable();
      data.addColumn('string', 'Compania');
      data.addColumn('number', 'Porcentajes');
      data.addRows([
        ['AyA', 54.99],
        ['ASADAS', 27],
        ['Luvia', 2.13],
        ['Pozo', 4.31],
        ['Rio/Quebrada', 4],
        ['Muninicipal', 10.54],
        ['Empresa', 0.27],
        ['Otra Fuente', 0.69],
        ['No Aplica', 0.08]
      ]);
    
      // Set chart options
      var options = {'title':'Guanacaste',
                     'width':400,
                     'height':300};
    
      // Instantiate and draw our chart, passing in some options.
      var chart = new google.visualization.PieChart(document.getElementById('chart2_div'));
      chart.draw(data, options);
    }
    
    
});
