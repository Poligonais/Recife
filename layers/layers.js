var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_AnexoIEspaosAquticos_1 = new ol.format.GeoJSON();
var features_AnexoIEspaosAquticos_1 = format_AnexoIEspaosAquticos_1.readFeatures(json_AnexoIEspaosAquticos_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIEspaosAquticos_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIEspaosAquticos_1.addFeatures(features_AnexoIEspaosAquticos_1);
var lyr_AnexoIEspaosAquticos_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIEspaosAquticos_1, 
                style: style_AnexoIEspaosAquticos_1,
                popuplayertitle: "Anexo I - Espaços Aquáticos",
                interactive: true,
                title: '<img src="styles/legend/AnexoIEspaosAquticos_1.png" /> Anexo I - Espaços Aquáticos'
            });
var format_AnexoIIFortalezadoBuraco_2 = new ol.format.GeoJSON();
var features_AnexoIIFortalezadoBuraco_2 = format_AnexoIIFortalezadoBuraco_2.readFeatures(json_AnexoIIFortalezadoBuraco_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIFortalezadoBuraco_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIFortalezadoBuraco_2.addFeatures(features_AnexoIIFortalezadoBuraco_2);
var lyr_AnexoIIFortalezadoBuraco_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIFortalezadoBuraco_2, 
                style: style_AnexoIIFortalezadoBuraco_2,
                popuplayertitle: "Anexo II - Fortaleza do Buraco",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIFortalezadoBuraco_2.png" /> Anexo II - Fortaleza do Buraco'
            });
var format_AnexoIIICaisNorte_3 = new ol.format.GeoJSON();
var features_AnexoIIICaisNorte_3 = format_AnexoIIICaisNorte_3.readFeatures(json_AnexoIIICaisNorte_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIIICaisNorte_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIIICaisNorte_3.addFeatures(features_AnexoIIICaisNorte_3);
var lyr_AnexoIIICaisNorte_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIIICaisNorte_3, 
                style: style_AnexoIIICaisNorte_3,
                popuplayertitle: "Anexo III - Cais Norte",
                interactive: true,
                title: '<img src="styles/legend/AnexoIIICaisNorte_3.png" /> Anexo III - Cais Norte'
            });
var format_AnexoIVRetrorea1_4 = new ol.format.GeoJSON();
var features_AnexoIVRetrorea1_4 = format_AnexoIVRetrorea1_4.readFeatures(json_AnexoIVRetrorea1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIVRetrorea1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIVRetrorea1_4.addFeatures(features_AnexoIVRetrorea1_4);
var lyr_AnexoIVRetrorea1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIVRetrorea1_4, 
                style: style_AnexoIVRetrorea1_4,
                popuplayertitle: "Anexo IV - Retroárea 1",
                interactive: true,
                title: '<img src="styles/legend/AnexoIVRetrorea1_4.png" /> Anexo IV - Retroárea 1'
            });
var format_AnexoVRetrorea2_5 = new ol.format.GeoJSON();
var features_AnexoVRetrorea2_5 = format_AnexoVRetrorea2_5.readFeatures(json_AnexoVRetrorea2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVRetrorea2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVRetrorea2_5.addFeatures(features_AnexoVRetrorea2_5);
var lyr_AnexoVRetrorea2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVRetrorea2_5, 
                style: style_AnexoVRetrorea2_5,
                popuplayertitle: "Anexo V - Retroárea 2",
                interactive: true,
                title: '<img src="styles/legend/AnexoVRetrorea2_5.png" /> Anexo V - Retroárea 2'
            });
var format_AnexoVICaisSul_6 = new ol.format.GeoJSON();
var features_AnexoVICaisSul_6 = format_AnexoVICaisSul_6.readFeatures(json_AnexoVICaisSul_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVICaisSul_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVICaisSul_6.addFeatures(features_AnexoVICaisSul_6);
var lyr_AnexoVICaisSul_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVICaisSul_6, 
                style: style_AnexoVICaisSul_6,
                popuplayertitle: "Anexo VI - Cais Sul",
                interactive: true,
                title: '<img src="styles/legend/AnexoVICaisSul_6.png" /> Anexo VI - Cais Sul'
            });
var format_AnexoVIIArmazm18_7 = new ol.format.GeoJSON();
var features_AnexoVIIArmazm18_7 = format_AnexoVIIArmazm18_7.readFeatures(json_AnexoVIIArmazm18_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIArmazm18_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIArmazm18_7.addFeatures(features_AnexoVIIArmazm18_7);
var lyr_AnexoVIIArmazm18_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIArmazm18_7, 
                style: style_AnexoVIIArmazm18_7,
                popuplayertitle: "Anexo VII - Armazém 18",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIArmazm18_7.png" /> Anexo VII - Armazém 18'
            });
var format_AnexoVIIIArmazns16e17_8 = new ol.format.GeoJSON();
var features_AnexoVIIIArmazns16e17_8 = format_AnexoVIIIArmazns16e17_8.readFeatures(json_AnexoVIIIArmazns16e17_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoVIIIArmazns16e17_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoVIIIArmazns16e17_8.addFeatures(features_AnexoVIIIArmazns16e17_8);
var lyr_AnexoVIIIArmazns16e17_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoVIIIArmazns16e17_8, 
                style: style_AnexoVIIIArmazns16e17_8,
                popuplayertitle: "Anexo VIII - Armazéns 16 e 17",
                interactive: true,
                title: '<img src="styles/legend/AnexoVIIIArmazns16e17_8.png" /> Anexo VIII - Armazéns 16 e 17'
            });
var format_AnexoIXArmazm15_9 = new ol.format.GeoJSON();
var features_AnexoIXArmazm15_9 = format_AnexoIXArmazm15_9.readFeatures(json_AnexoIXArmazm15_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnexoIXArmazm15_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnexoIXArmazm15_9.addFeatures(features_AnexoIXArmazm15_9);
var lyr_AnexoIXArmazm15_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AnexoIXArmazm15_9, 
                style: style_AnexoIXArmazm15_9,
                popuplayertitle: "Anexo IX - Armazém 15",
                interactive: true,
                title: '<img src="styles/legend/AnexoIXArmazm15_9.png" /> Anexo IX - Armazém 15'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_AnexoIEspaosAquticos_1.setVisible(true);lyr_AnexoIIFortalezadoBuraco_2.setVisible(true);lyr_AnexoIIICaisNorte_3.setVisible(true);lyr_AnexoIVRetrorea1_4.setVisible(true);lyr_AnexoVRetrorea2_5.setVisible(true);lyr_AnexoVICaisSul_6.setVisible(true);lyr_AnexoVIIArmazm18_7.setVisible(true);lyr_AnexoVIIIArmazns16e17_8.setVisible(true);lyr_AnexoIXArmazm15_9.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_AnexoIEspaosAquticos_1,lyr_AnexoIIFortalezadoBuraco_2,lyr_AnexoIIICaisNorte_3,lyr_AnexoIVRetrorea1_4,lyr_AnexoVRetrorea2_5,lyr_AnexoVICaisSul_6,lyr_AnexoVIIArmazm18_7,lyr_AnexoVIIIArmazns16e17_8,lyr_AnexoIXArmazm15_9];
lyr_AnexoIEspaosAquticos_1.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIFortalezadoBuraco_2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIIICaisNorte_3.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIVRetrorea1_4.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVRetrorea2_5.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVICaisSul_6.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIArmazm18_7.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoVIIIArmazns16e17_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIXArmazm15_9.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_AnexoIEspaosAquticos_1.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIFortalezadoBuraco_2.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIIICaisNorte_3.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIVRetrorea1_4.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVRetrorea2_5.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVICaisSul_6.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIArmazm18_7.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoVIIIArmazns16e17_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIXArmazm15_9.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_AnexoIEspaosAquticos_1.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIFortalezadoBuraco_2.set('fieldLabels', {'Name': 'inline label - visible with data', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIIICaisNorte_3.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIVRetrorea1_4.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVRetrorea2_5.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVICaisSul_6.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIArmazm18_7.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoVIIIArmazns16e17_8.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXArmazm15_9.set('fieldLabels', {'Name': 'inline label - always visible', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_AnexoIXArmazm15_9.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});