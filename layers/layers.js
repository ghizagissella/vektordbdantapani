ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([11939072.685490, -793013.445022, 11974045.764818, -774653.697871]);
var wms_layers = [];


        var lyr_ESRIStandard_0 = new ol.layer.Tile({
            'title': 'ESRI Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Street_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_SUNGAI_AR_25K_1 = new ol.format.GeoJSON();
var features_SUNGAI_AR_25K_1 = format_SUNGAI_AR_25K_1.readFeatures(json_SUNGAI_AR_25K_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUNGAI_AR_25K_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUNGAI_AR_25K_1.addFeatures(features_SUNGAI_AR_25K_1);
var lyr_SUNGAI_AR_25K_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUNGAI_AR_25K_1, 
                style: style_SUNGAI_AR_25K_1,
                popuplayertitle: "SUNGAI_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/SUNGAI_AR_25K_1.png" /> SUNGAI_AR_25K'
            });
var format_JALAN_AR_25K_2 = new ol.format.GeoJSON();
var features_JALAN_AR_25K_2 = format_JALAN_AR_25K_2.readFeatures(json_JALAN_AR_25K_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_AR_25K_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_AR_25K_2.addFeatures(features_JALAN_AR_25K_2);
var lyr_JALAN_AR_25K_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_AR_25K_2, 
                style: style_JALAN_AR_25K_2,
                popuplayertitle: "JALAN_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/JALAN_AR_25K_2.png" /> JALAN_AR_25K'
            });
var format_KecSindangkerta1_3 = new ol.format.GeoJSON();
var features_KecSindangkerta1_3 = format_KecSindangkerta1_3.readFeatures(json_KecSindangkerta1_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_KecSindangkerta1_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_KecSindangkerta1_3.addFeatures(features_KecSindangkerta1_3);
var lyr_KecSindangkerta1_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_KecSindangkerta1_3, 
                style: style_KecSindangkerta1_3,
                popuplayertitle: "Kec. Sindangkerta 1",
                interactive: true,
                title: '<img src="styles/legend/KecSindangkerta1_3.png" /> Kec. Sindangkerta 1'
            });
var format_BUffer200_4 = new ol.format.GeoJSON();
var features_BUffer200_4 = format_BUffer200_4.readFeatures(json_BUffer200_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BUffer200_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BUffer200_4.addFeatures(features_BUffer200_4);
var lyr_BUffer200_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BUffer200_4, 
                style: style_BUffer200_4,
                popuplayertitle: "BUffer 200",
                interactive: true,
                title: '<img src="styles/legend/BUffer200_4.png" /> BUffer 200'
            });
var format_UTMperindukanvektor_5 = new ol.format.GeoJSON();
var features_UTMperindukanvektor_5 = format_UTMperindukanvektor_5.readFeatures(json_UTMperindukanvektor_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_UTMperindukanvektor_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_UTMperindukanvektor_5.addFeatures(features_UTMperindukanvektor_5);
var lyr_UTMperindukanvektor_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_UTMperindukanvektor_5, 
                style: style_UTMperindukanvektor_5,
                popuplayertitle: "UTM perindukan vektor",
                interactive: true,
                title: '<img src="styles/legend/UTMperindukanvektor_5.png" /> UTM perindukan vektor'
            });

lyr_ESRIStandard_0.setVisible(true);lyr_SUNGAI_AR_25K_1.setVisible(true);lyr_JALAN_AR_25K_2.setVisible(true);lyr_KecSindangkerta1_3.setVisible(true);lyr_BUffer200_4.setVisible(true);lyr_UTMperindukanvektor_5.setVisible(true);
var layersList = [lyr_ESRIStandard_0,lyr_SUNGAI_AR_25K_1,lyr_JALAN_AR_25K_2,lyr_KecSindangkerta1_3,lyr_BUffer200_4,lyr_UTMperindukanvektor_5];
lyr_SUNGAI_AR_25K_1.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'JNSSNG': 'JNSSNG', 'KLSSNG': 'KLSSNG', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMWS': 'NAMWS', 'NAMDAS': 'NAMDAS', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_JALAN_AR_25K_2.set('fieldAliases', {'NAMRJL': 'NAMRJL', 'KONRJL': 'KONRJL', 'MATRJL': 'MATRJL', 'FGSRJL': 'FGSRJL', 'UTKRJL': 'UTKRJL', 'TOLRJL': 'TOLRJL', 'WLYRJL': 'WLYRJL', 'AUTRJL': 'AUTRJL', 'KLSRJL': 'KLSRJL', 'SPCRJL': 'SPCRJL', 'JPARJL': 'JPARJL', 'ARHRJL': 'ARHRJL', 'STARJL': 'STARJL', 'KLLRJL': 'KLLRJL', 'MEDRJL': 'MEDRJL', 'LOCRJL': 'LOCRJL', 'JARRJL': 'JARRJL', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'NAMOBJ': 'NAMOBJ', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_KecSindangkerta1_3.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BUffer200_4.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_UTMperindukanvektor_5.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_SUNGAI_AR_25K_1.set('fieldImages', {'NAMOBJ': '', 'JNSSNG': '', 'KLSSNG': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMWS': '', 'NAMDAS': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_JALAN_AR_25K_2.set('fieldImages', {'NAMRJL': '', 'KONRJL': '', 'MATRJL': '', 'FGSRJL': '', 'UTKRJL': '', 'TOLRJL': '', 'WLYRJL': '', 'AUTRJL': '', 'KLSRJL': '', 'SPCRJL': '', 'JPARJL': '', 'ARHRJL': '', 'STARJL': '', 'KLLRJL': '', 'MEDRJL': '', 'LOCRJL': '', 'JARRJL': '', 'FCODE': '', 'REMARK': '', 'SRS_ID': '', 'LCODE': '', 'METADATA': '', 'NAMOBJ': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_KecSindangkerta1_3.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'Range', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BUffer200_4.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_UTMperindukanvektor_5.set('fieldImages', {'Name': '', 'descriptio': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMo': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_SUNGAI_AR_25K_1.set('fieldLabels', {'NAMOBJ': 'no label', 'JNSSNG': 'no label', 'KLSSNG': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMWS': 'no label', 'NAMDAS': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_JALAN_AR_25K_2.set('fieldLabels', {'NAMRJL': 'no label', 'KONRJL': 'no label', 'MATRJL': 'no label', 'FGSRJL': 'no label', 'UTKRJL': 'no label', 'TOLRJL': 'no label', 'WLYRJL': 'no label', 'AUTRJL': 'no label', 'KLSRJL': 'no label', 'SPCRJL': 'no label', 'JPARJL': 'no label', 'ARHRJL': 'no label', 'STARJL': 'no label', 'KLLRJL': 'no label', 'MEDRJL': 'no label', 'LOCRJL': 'no label', 'JARRJL': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'NAMOBJ': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_KecSindangkerta1_3.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_BUffer200_4.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMperindukanvektor_5.set('fieldLabels', {'Name': 'inline label - always visible', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_UTMperindukanvektor_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});