var wms_layers = [];


        var lyr_GoogleEarth_0 = new ol.layer.Tile({
            'title': 'Google Earth',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OpenStreetMap_2 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CoordinacionSanFelipe_3 = new ol.format.GeoJSON();
var features_CoordinacionSanFelipe_3 = format_CoordinacionSanFelipe_3.readFeatures(json_CoordinacionSanFelipe_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanFelipe_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanFelipe_3.addFeatures(features_CoordinacionSanFelipe_3);
var lyr_CoordinacionSanFelipe_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanFelipe_3, 
                style: style_CoordinacionSanFelipe_3,
                interactive: false,
                title: '<img src="styles/legend/CoordinacionSanFelipe_3.png" /> Coordinacion San Felipe'
            });
var format_EduacionMediaSuperiorySuperior_4 = new ol.format.GeoJSON();
var features_EduacionMediaSuperiorySuperior_4 = format_EduacionMediaSuperiorySuperior_4.readFeatures(json_EduacionMediaSuperiorySuperior_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EduacionMediaSuperiorySuperior_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EduacionMediaSuperiorySuperior_4.addFeatures(features_EduacionMediaSuperiorySuperior_4);
var lyr_EduacionMediaSuperiorySuperior_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EduacionMediaSuperiorySuperior_4, 
                style: style_EduacionMediaSuperiorySuperior_4,
                interactive: true,
                title: '<img src="styles/legend/EduacionMediaSuperiorySuperior_4.png" /> Eduacion MediaSuperior y Superior'
            });
var format_MicroregionSN4_5 = new ol.format.GeoJSON();
var features_MicroregionSN4_5 = format_MicroregionSN4_5.readFeatures(json_MicroregionSN4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSN4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSN4_5.addFeatures(features_MicroregionSN4_5);
var lyr_MicroregionSN4_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSN4_5, 
                style: style_MicroregionSN4_5,
                interactive: false,
    title: 'Microregion SN4<br />\
    <img src="styles/legend/MicroregionSN4_5_0.png" /> 1 - 31 Personas<br />\
    <img src="styles/legend/MicroregionSN4_5_1.png" /> 31 - 76 Personas<br />\
    <img src="styles/legend/MicroregionSN4_5_2.png" /> 76 - 130 Personas<br />\
    <img src="styles/legend/MicroregionSN4_5_3.png" /> 130 - 211 Personas<br />\
    <img src="styles/legend/MicroregionSN4_5_4.png" /> 211 - 282 Personas<br />'
        });
var format_MicroregionSN3_6 = new ol.format.GeoJSON();
var features_MicroregionSN3_6 = format_MicroregionSN3_6.readFeatures(json_MicroregionSN3_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSN3_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSN3_6.addFeatures(features_MicroregionSN3_6);
var lyr_MicroregionSN3_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSN3_6, 
                style: style_MicroregionSN3_6,
                interactive: false,
    title: 'Microregion SN3<br />\
    <img src="styles/legend/MicroregionSN3_6_0.png" /> 2 - 28 Personas<br />\
    <img src="styles/legend/MicroregionSN3_6_1.png" /> 28 - 102 Personas<br />\
    <img src="styles/legend/MicroregionSN3_6_2.png" /> 102 - 241 Personas<br />\
    <img src="styles/legend/MicroregionSN3_6_3.png" /> 241 - 333 Personas<br />\
    <img src="styles/legend/MicroregionSN3_6_4.png" /> 333 - 601 Personas<br />'
        });
var format_MicroregionSN2_7 = new ol.format.GeoJSON();
var features_MicroregionSN2_7 = format_MicroregionSN2_7.readFeatures(json_MicroregionSN2_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSN2_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSN2_7.addFeatures(features_MicroregionSN2_7);
var lyr_MicroregionSN2_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSN2_7, 
                style: style_MicroregionSN2_7,
                interactive: false,
    title: 'Microregion SN2<br />\
    <img src="styles/legend/MicroregionSN2_7_0.png" /> 2 - 23 Personas<br />\
    <img src="styles/legend/MicroregionSN2_7_1.png" /> 23 - 71 Personas<br />\
    <img src="styles/legend/MicroregionSN2_7_2.png" /> 71 - 171 Personas<br />\
    <img src="styles/legend/MicroregionSN2_7_3.png" /> 171 - 406 Personas<br />\
    <img src="styles/legend/MicroregionSN2_7_4.png" /> 406 - 909 Personas<br />'
        });
var format_MicroregionSN1_8 = new ol.format.GeoJSON();
var features_MicroregionSN1_8 = format_MicroregionSN1_8.readFeatures(json_MicroregionSN1_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionSN1_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionSN1_8.addFeatures(features_MicroregionSN1_8);
var lyr_MicroregionSN1_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionSN1_8, 
                style: style_MicroregionSN1_8,
                interactive: false,
    title: 'Microregion SN1<br />\
    <img src="styles/legend/MicroregionSN1_8_0.png" /> 3 - 11 Personas<br />\
    <img src="styles/legend/MicroregionSN1_8_1.png" /> 11 - 23 Personas<br />\
    <img src="styles/legend/MicroregionSN1_8_2.png" /> 23 - 42 Personas<br />\
    <img src="styles/legend/MicroregionSN1_8_3.png" /> 42 - 129 Personas<br />\
    <img src="styles/legend/MicroregionSN1_8_4.png" /> 129 - 210 Personas<br />'
        });
var format_MicroregionOC1_9 = new ol.format.GeoJSON();
var features_MicroregionOC1_9 = format_MicroregionOC1_9.readFeatures(json_MicroregionOC1_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MicroregionOC1_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MicroregionOC1_9.addFeatures(features_MicroregionOC1_9);
var lyr_MicroregionOC1_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_MicroregionOC1_9, 
                style: style_MicroregionOC1_9,
                interactive: false,
    title: 'Microregion OC1<br />\
    <img src="styles/legend/MicroregionOC1_9_0.png" /> 2 - 32 Personas<br />\
    <img src="styles/legend/MicroregionOC1_9_1.png" /> 32 - 87 Personas<br />\
    <img src="styles/legend/MicroregionOC1_9_2.png" /> 87 - 243 Personas<br />\
    <img src="styles/legend/MicroregionOC1_9_3.png" /> 243 - 390 Personas<br />\
    <img src="styles/legend/MicroregionOC1_9_4.png" /> 390 - 759 Personas<br />'
        });
var format_CoordinacionSanFelipe_10 = new ol.format.GeoJSON();
var features_CoordinacionSanFelipe_10 = format_CoordinacionSanFelipe_10.readFeatures(json_CoordinacionSanFelipe_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CoordinacionSanFelipe_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CoordinacionSanFelipe_10.addFeatures(features_CoordinacionSanFelipe_10);
var lyr_CoordinacionSanFelipe_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_CoordinacionSanFelipe_10, 
                style: style_CoordinacionSanFelipe_10,
                interactive: true,
                title: '<img src="styles/legend/CoordinacionSanFelipe_10.png" /> Coordinacion San Felipe'
            });
var group_CoordinacionSanFelipeRezago = new ol.layer.Group({
                                layers: [lyr_MicroregionSN4_5,lyr_MicroregionSN3_6,lyr_MicroregionSN2_7,lyr_MicroregionSN1_8,lyr_MicroregionOC1_9,],
                                title: "Coordinacion San Felipe Rezago"});
var group_DatosEducacinMediaSuperiorySuperior = new ol.layer.Group({
                                layers: [lyr_EduacionMediaSuperiorySuperior_4,],
                                title: "Datos Educación Media Superior y Superior"});
var group_CapazSecundarias = new ol.layer.Group({
                                layers: [lyr_CoordinacionSanFelipe_3,],
                                title: "Capaz Secundarias"});
var group_MapasBase = new ol.layer.Group({
                                layers: [lyr_GoogleEarth_0,lyr_GoogleSatellite_1,lyr_OpenStreetMap_2,],
                                title: "Mapas Base"});

lyr_GoogleEarth_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_OpenStreetMap_2.setVisible(true);lyr_CoordinacionSanFelipe_3.setVisible(true);lyr_EduacionMediaSuperiorySuperior_4.setVisible(true);lyr_MicroregionSN4_5.setVisible(true);lyr_MicroregionSN3_6.setVisible(true);lyr_MicroregionSN2_7.setVisible(true);lyr_MicroregionSN1_8.setVisible(true);lyr_MicroregionOC1_9.setVisible(true);lyr_CoordinacionSanFelipe_10.setVisible(true);
var layersList = [group_MapasBase,group_CapazSecundarias,group_DatosEducacinMediaSuperiorySuperior,group_CoordinacionSanFelipeRezago,lyr_CoordinacionSanFelipe_10];
lyr_CoordinacionSanFelipe_3.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'cat': 'cat', 'cve_mun': 'cve_mun', 'nom_mun': 'nom_mun', 'cozo': 'cozo', 'region': 'region', 'micro': 'micro', 'Shape_Leng': 'Shape_Leng', 'Shape_Area': 'Shape_Area', 'layer': 'layer', 'path': 'path', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldAliases', {'Clave CT': 'Clave CT', 'Nombre CT': 'Nombre CT', 'Cve. Local': 'Cve. Local', 'Cve. Munic': 'Cve. Munic', 'Ageb': 'Ageb', 'Longitud': 'Longitud', 'Latitud': 'Latitud', 'Nivel': 'Nivel', });
lyr_MicroregionSN4_5.set('fieldAliases', {'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'Rezago': 'Rezago', 'TipoLocali': 'TipoLocali', });
lyr_MicroregionSN3_6.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSN2_7.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionSN1_8.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_MicroregionOC1_9.set('fieldAliases', {'MUN': 'MUN', 'NOM_MUN': 'NOM_MUN', 'LOC': 'LOC', 'NOM_LOC': 'NOM_LOC', 'AGEB': 'AGEB', 'MZA': 'MZA', 'P15YM_AN': 'P15YM_AN', 'P15PRI_IN': 'P15PRI_IN', 'P15PRI_CO': 'P15PRI_CO', 'P15SEC_IN': 'P15SEC_IN', 'Rezago': 'Rezago', 'Clave de m': 'Clave de m', 'Nombre del': 'Nombre del', 'Clave de l': 'Clave de l', 'Nombre d_1': 'Nombre d_1', '15ym�sAn': '15ym�sAn', '15ym�sPr': '15ym�sPr', '15ym�s_1': '15ym�s_1', '15ym�sSe': '15ym�sSe', 'TipoLocali': 'TipoLocali', 'layer': 'layer', 'path': 'path', });
lyr_CoordinacionSanFelipe_10.set('fieldAliases', {'Micro': 'Micro', 'Coord': 'Coord', 'Muni': 'Muni', 'Region': 'Region', 'Analf': 'Analf', 'PrimIncom': 'PrimIncom', 'PrimComp': 'PrimComp', 'SecuComp': 'SecuComp', 'Rezago': 'Rezago', });
lyr_CoordinacionSanFelipe_3.set('fieldImages', {'OBJECTID': 'TextEdit', 'cat': 'TextEdit', 'cve_mun': 'TextEdit', 'nom_mun': 'TextEdit', 'cozo': 'TextEdit', 'region': 'TextEdit', 'micro': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Area': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_EduacionMediaSuperiorySuperior_4.set('fieldImages', {'Clave CT': 'TextEdit', 'Nombre CT': 'TextEdit', 'Cve. Local': 'TextEdit', 'Cve. Munic': 'TextEdit', 'Ageb': 'TextEdit', 'Longitud': 'TextEdit', 'Latitud': 'TextEdit', 'Nivel': 'TextEdit', });
lyr_MicroregionSN4_5.set('fieldImages', {'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'Rezago': 'TextEdit', 'TipoLocali': 'TextEdit', });
lyr_MicroregionSN3_6.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSN2_7.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionSN1_8.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_MicroregionOC1_9.set('fieldImages', {'MUN': 'TextEdit', 'NOM_MUN': 'TextEdit', 'LOC': 'TextEdit', 'NOM_LOC': 'TextEdit', 'AGEB': 'TextEdit', 'MZA': 'TextEdit', 'P15YM_AN': 'TextEdit', 'P15PRI_IN': 'TextEdit', 'P15PRI_CO': 'TextEdit', 'P15SEC_IN': 'TextEdit', 'Rezago': 'TextEdit', 'Clave de m': 'TextEdit', 'Nombre del': 'TextEdit', 'Clave de l': 'TextEdit', 'Nombre d_1': 'TextEdit', '15ym�sAn': 'TextEdit', '15ym�sPr': 'TextEdit', '15ym�s_1': 'TextEdit', '15ym�sSe': 'TextEdit', 'TipoLocali': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CoordinacionSanFelipe_10.set('fieldImages', {'Micro': 'TextEdit', 'Coord': 'TextEdit', 'Muni': 'TextEdit', 'Region': 'TextEdit', 'Analf': 'TextEdit', 'PrimIncom': 'TextEdit', 'PrimComp': 'TextEdit', 'SecuComp': 'TextEdit', 'Rezago': 'TextEdit', });
lyr_CoordinacionSanFelipe_3.set('fieldLabels', {});
lyr_EduacionMediaSuperiorySuperior_4.set('fieldLabels', {});
lyr_MicroregionSN4_5.set('fieldLabels', {});
lyr_MicroregionSN3_6.set('fieldLabels', {});
lyr_MicroregionSN2_7.set('fieldLabels', {});
lyr_MicroregionSN1_8.set('fieldLabels', {});
lyr_MicroregionOC1_9.set('fieldLabels', {});
lyr_CoordinacionSanFelipe_10.set('fieldLabels', {'Micro': 'inline label', 'Coord': 'inline label', 'Muni': 'inline label', 'Region': 'inline label', 'Analf': 'inline label', 'PrimIncom': 'inline label', 'PrimComp': 'inline label', 'SecuComp': 'inline label', 'Rezago': 'inline label', });
lyr_CoordinacionSanFelipe_10.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});