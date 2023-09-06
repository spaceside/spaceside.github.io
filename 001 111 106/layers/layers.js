var wms_layers = [];


    var projection_Gisborne03mRuralAerialPhotos20172019_0 = ol.proj.get('EPSG:3857');
    var projectionExtent_Gisborne03mRuralAerialPhotos20172019_0 = projection_Gisborne03mRuralAerialPhotos20172019_0.getExtent();
    var size_Gisborne03mRuralAerialPhotos20172019_0 = ol.extent.getWidth(projectionExtent_Gisborne03mRuralAerialPhotos20172019_0) / 256;
    var resolutions_Gisborne03mRuralAerialPhotos20172019_0 = new Array(14);
    var matrixIds_Gisborne03mRuralAerialPhotos20172019_0 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Gisborne03mRuralAerialPhotos20172019_0[z] = size_Gisborne03mRuralAerialPhotos20172019_0 / Math.pow(2, z);
        matrixIds_Gisborne03mRuralAerialPhotos20172019_0[z] = z;
    }
    var lyr_Gisborne03mRuralAerialPhotos20172019_0 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://data.linz.govt.nz/services;key=3dcc3897a3b845138768ed63b5f0efd0/wmts/1.0.0/layer/99025/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "layer-99025",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Gisborne03mRuralAerialPhotos20172019_0,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Gisborne03mRuralAerialPhotos20172019_0),
                resolutions: resolutions_Gisborne03mRuralAerialPhotos20172019_0,
                matrixIds: matrixIds_Gisborne03mRuralAerialPhotos20172019_0
              }),
              style: 'style=auto',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Gisborne 0.3m Rural Aerial Photos (2017-2019)",
                            opacity: 1.0,
                            
                            
                          });

    var projection_Gisborne01mUrbanAerialPhotos20222023_1 = ol.proj.get('EPSG:3857');
    var projectionExtent_Gisborne01mUrbanAerialPhotos20222023_1 = projection_Gisborne01mUrbanAerialPhotos20222023_1.getExtent();
    var size_Gisborne01mUrbanAerialPhotos20222023_1 = ol.extent.getWidth(projectionExtent_Gisborne01mUrbanAerialPhotos20222023_1) / 256;
    var resolutions_Gisborne01mUrbanAerialPhotos20222023_1 = new Array(14);
    var matrixIds_Gisborne01mUrbanAerialPhotos20222023_1 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Gisborne01mUrbanAerialPhotos20222023_1[z] = size_Gisborne01mUrbanAerialPhotos20222023_1 / Math.pow(2, z);
        matrixIds_Gisborne01mUrbanAerialPhotos20222023_1[z] = z;
    }
    var lyr_Gisborne01mUrbanAerialPhotos20222023_1 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://data.linz.govt.nz/services;key=3dcc3897a3b845138768ed63b5f0efd0/wmts/1.0.0/layer/112886/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "layer-112886",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Gisborne01mUrbanAerialPhotos20222023_1,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Gisborne01mUrbanAerialPhotos20222023_1),
                resolutions: resolutions_Gisborne01mUrbanAerialPhotos20222023_1,
                matrixIds: matrixIds_Gisborne01mUrbanAerialPhotos20222023_1
              }),
              style: 'style=auto',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Gisborne 0.1m Urban Aerial Photos (2022-2023)",
                            opacity: 1.0,
                            
                            
                          });

    var projection_Gisborne02mRuralAerialPhotos20212023_2 = ol.proj.get('EPSG:3857');
    var projectionExtent_Gisborne02mRuralAerialPhotos20212023_2 = projection_Gisborne02mRuralAerialPhotos20212023_2.getExtent();
    var size_Gisborne02mRuralAerialPhotos20212023_2 = ol.extent.getWidth(projectionExtent_Gisborne02mRuralAerialPhotos20212023_2) / 256;
    var resolutions_Gisborne02mRuralAerialPhotos20212023_2 = new Array(14);
    var matrixIds_Gisborne02mRuralAerialPhotos20212023_2 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Gisborne02mRuralAerialPhotos20212023_2[z] = size_Gisborne02mRuralAerialPhotos20212023_2 / Math.pow(2, z);
        matrixIds_Gisborne02mRuralAerialPhotos20212023_2[z] = z;
    }
    var lyr_Gisborne02mRuralAerialPhotos20212023_2 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://data.linz.govt.nz/services;key=3dcc3897a3b845138768ed63b5f0efd0/wmts/1.0.0/layer/113725/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "layer-113725",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Gisborne02mRuralAerialPhotos20212023_2,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Gisborne02mRuralAerialPhotos20212023_2),
                resolutions: resolutions_Gisborne02mRuralAerialPhotos20212023_2,
                matrixIds: matrixIds_Gisborne02mRuralAerialPhotos20212023_2
              }),
              style: 'style=auto',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Gisborne 0.2m Rural Aerial Photos (2021-2023)",
                            opacity: 1.0,
                            
                            
                          });
var format_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3 = new ol.format.GeoJSON();
var features_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3 = format_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3.readFeatures(json_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3.addFeatures(features_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3);
var lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3, 
                style: style_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3,
                interactive: true,
                title: '<img src="styles/legend/formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3.png" /> ?format=geojson&projection=nztm&forcePoint=false&description=Bridge — OGRGeoJSON'
            });
var format_116AllBridges_4 = new ol.format.GeoJSON();
var features_116AllBridges_4 = format_116AllBridges_4.readFeatures(json_116AllBridges_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_116AllBridges_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_116AllBridges_4.addFeatures(features_116AllBridges_4);
var lyr_116AllBridges_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_116AllBridges_4, 
                style: style_116AllBridges_4,
                interactive: true,
                title: '<img src="styles/legend/116AllBridges_4.png" /> 116 All Bridges'
            });
var format_AnalysisBridges_5 = new ol.format.GeoJSON();
var features_AnalysisBridges_5 = format_AnalysisBridges_5.readFeatures(json_AnalysisBridges_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalysisBridges_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalysisBridges_5.addFeatures(features_AnalysisBridges_5);
var lyr_AnalysisBridges_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnalysisBridges_5, 
                style: style_AnalysisBridges_5,
                interactive: true,
                title: '<img src="styles/legend/AnalysisBridges_5.png" /> Analysis Bridges'
            });
var format_116routes_6 = new ol.format.GeoJSON();
var features_116routes_6 = format_116routes_6.readFeatures(json_116routes_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_116routes_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_116routes_6.addFeatures(features_116routes_6);
var lyr_116routes_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_116routes_6, 
                style: style_116routes_6,
                interactive: true,
                title: '<img src="styles/legend/116routes_6.png" /> 116 routes'
            });
var format_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7 = new ol.format.GeoJSON();
var features_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7 = format_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7.readFeatures(json_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7.addFeatures(features_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7);
var lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7, 
                style: style_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7,
                interactive: true,
                title: '<img src="styles/legend/formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7.png" /> ?format=geojson&projection=nztm&forcePoint=false&description=Carriageway%20Section — OGRGeoJSON'
            });

    var projection_Gisborne03mRuralAerialPhotos20172019_8 = ol.proj.get('EPSG:3857');
    var projectionExtent_Gisborne03mRuralAerialPhotos20172019_8 = projection_Gisborne03mRuralAerialPhotos20172019_8.getExtent();
    var size_Gisborne03mRuralAerialPhotos20172019_8 = ol.extent.getWidth(projectionExtent_Gisborne03mRuralAerialPhotos20172019_8) / 256;
    var resolutions_Gisborne03mRuralAerialPhotos20172019_8 = new Array(14);
    var matrixIds_Gisborne03mRuralAerialPhotos20172019_8 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Gisborne03mRuralAerialPhotos20172019_8[z] = size_Gisborne03mRuralAerialPhotos20172019_8 / Math.pow(2, z);
        matrixIds_Gisborne03mRuralAerialPhotos20172019_8[z] = z;
    }
    var lyr_Gisborne03mRuralAerialPhotos20172019_8 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://data.linz.govt.nz/services;key=3dcc3897a3b845138768ed63b5f0efd0/wmts/1.0.0/layer/99025/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "layer-99025",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Gisborne03mRuralAerialPhotos20172019_8,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Gisborne03mRuralAerialPhotos20172019_8),
                resolutions: resolutions_Gisborne03mRuralAerialPhotos20172019_8,
                matrixIds: matrixIds_Gisborne03mRuralAerialPhotos20172019_8
              }),
              style: 'style=auto',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Gisborne 0.3m Rural Aerial Photos (2017-2019)",
                            opacity: 1.0,
                            
                            
                          });

    var projection_Gisborne01mUrbanAerialPhotos20222023_9 = ol.proj.get('EPSG:3857');
    var projectionExtent_Gisborne01mUrbanAerialPhotos20222023_9 = projection_Gisborne01mUrbanAerialPhotos20222023_9.getExtent();
    var size_Gisborne01mUrbanAerialPhotos20222023_9 = ol.extent.getWidth(projectionExtent_Gisborne01mUrbanAerialPhotos20222023_9) / 256;
    var resolutions_Gisborne01mUrbanAerialPhotos20222023_9 = new Array(14);
    var matrixIds_Gisborne01mUrbanAerialPhotos20222023_9 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Gisborne01mUrbanAerialPhotos20222023_9[z] = size_Gisborne01mUrbanAerialPhotos20222023_9 / Math.pow(2, z);
        matrixIds_Gisborne01mUrbanAerialPhotos20222023_9[z] = z;
    }
    var lyr_Gisborne01mUrbanAerialPhotos20222023_9 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://data.linz.govt.nz/services;key=3dcc3897a3b845138768ed63b5f0efd0/wmts/1.0.0/layer/112886/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "layer-112886",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Gisborne01mUrbanAerialPhotos20222023_9,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Gisborne01mUrbanAerialPhotos20222023_9),
                resolutions: resolutions_Gisborne01mUrbanAerialPhotos20222023_9,
                matrixIds: matrixIds_Gisborne01mUrbanAerialPhotos20222023_9
              }),
              style: 'style=auto',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Gisborne 0.1m Urban Aerial Photos (2022-2023)",
                            opacity: 1.0,
                            
                            
                          });

    var projection_Gisborne02mRuralAerialPhotos20212023_10 = ol.proj.get('EPSG:3857');
    var projectionExtent_Gisborne02mRuralAerialPhotos20212023_10 = projection_Gisborne02mRuralAerialPhotos20212023_10.getExtent();
    var size_Gisborne02mRuralAerialPhotos20212023_10 = ol.extent.getWidth(projectionExtent_Gisborne02mRuralAerialPhotos20212023_10) / 256;
    var resolutions_Gisborne02mRuralAerialPhotos20212023_10 = new Array(14);
    var matrixIds_Gisborne02mRuralAerialPhotos20212023_10 = new Array(14);
    for (var z = 0; z < 14; ++z) {
        // generate resolutions and matrixIds arrays for this WMTS
        resolutions_Gisborne02mRuralAerialPhotos20212023_10[z] = size_Gisborne02mRuralAerialPhotos20212023_10 / Math.pow(2, z);
        matrixIds_Gisborne02mRuralAerialPhotos20212023_10[z] = z;
    }
    var lyr_Gisborne02mRuralAerialPhotos20212023_10 = new ol.layer.Tile({
                            source: new ol.source.WMTS(({
                              url: "https://data.linz.govt.nz/services;key=3dcc3897a3b845138768ed63b5f0efd0/wmts/1.0.0/layer/113725/WMTSCapabilities.xml",
    attributions: ' ',
                                "layer": "layer-113725",
                                "TILED": "true",
             matrixSet: 'EPSG:3857',
             format: 'image/png',
              projection: projection_Gisborne02mRuralAerialPhotos20212023_10,
              tileGrid: new ol.tilegrid.WMTS({
                origin: ol.extent.getTopLeft(projectionExtent_Gisborne02mRuralAerialPhotos20212023_10),
                resolutions: resolutions_Gisborne02mRuralAerialPhotos20212023_10,
                matrixIds: matrixIds_Gisborne02mRuralAerialPhotos20212023_10
              }),
              style: 'style=auto',
              wrapX: true,
                                "VERSION": "1.0.0",
                            })),
                            title: "Gisborne 0.2m Rural Aerial Photos (2021-2023)",
                            opacity: 1.0,
                            
                            
                          });
var format_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11 = new ol.format.GeoJSON();
var features_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11 = format_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11.readFeatures(json_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11.addFeatures(features_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11);
var lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11, 
                style: style_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11,
                interactive: true,
                title: '<img src="styles/legend/formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11.png" /> ?format=geojson&projection=nztm&forcePoint=false&description=Bridge — OGRGeoJSON'
            });
var format_116AllBridges_12 = new ol.format.GeoJSON();
var features_116AllBridges_12 = format_116AllBridges_12.readFeatures(json_116AllBridges_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_116AllBridges_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_116AllBridges_12.addFeatures(features_116AllBridges_12);
var lyr_116AllBridges_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_116AllBridges_12, 
                style: style_116AllBridges_12,
                interactive: true,
                title: '<img src="styles/legend/116AllBridges_12.png" /> 116 All Bridges'
            });
var format_AnalysisBridges_13 = new ol.format.GeoJSON();
var features_AnalysisBridges_13 = format_AnalysisBridges_13.readFeatures(json_AnalysisBridges_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AnalysisBridges_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AnalysisBridges_13.addFeatures(features_AnalysisBridges_13);
var lyr_AnalysisBridges_13 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_AnalysisBridges_13, 
                style: style_AnalysisBridges_13,
                interactive: true,
                title: '<img src="styles/legend/AnalysisBridges_13.png" /> Analysis Bridges'
            });
var format_116routes_14 = new ol.format.GeoJSON();
var features_116routes_14 = format_116routes_14.readFeatures(json_116routes_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_116routes_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_116routes_14.addFeatures(features_116routes_14);
var lyr_116routes_14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_116routes_14, 
                style: style_116routes_14,
                interactive: true,
                title: '<img src="styles/legend/116routes_14.png" /> 116 routes'
            });
var format_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15 = new ol.format.GeoJSON();
var features_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15 = format_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15.readFeatures(json_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15.addFeatures(features_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15);
var lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15, 
                style: style_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15,
                interactive: true,
                title: '<img src="styles/legend/formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15.png" /> ?format=geojson&projection=nztm&forcePoint=false&description=Carriageway%20Section — OGRGeoJSON'
            });
var format_001111106allroutes_16 = new ol.format.GeoJSON();
var features_001111106allroutes_16 = format_001111106allroutes_16.readFeatures(json_001111106allroutes_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_001111106allroutes_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_001111106allroutes_16.addFeatures(features_001111106allroutes_16);
var lyr_001111106allroutes_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_001111106allroutes_16, 
                style: style_001111106allroutes_16,
                interactive: true,
                title: '<img src="styles/legend/001111106allroutes_16.png" /> 001 111 106 all routes'
            });
var format_R4MANGATAIACCESSBRIDGESONROUTE_17 = new ol.format.GeoJSON();
var features_R4MANGATAIACCESSBRIDGESONROUTE_17 = format_R4MANGATAIACCESSBRIDGESONROUTE_17.readFeatures(json_R4MANGATAIACCESSBRIDGESONROUTE_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R4MANGATAIACCESSBRIDGESONROUTE_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R4MANGATAIACCESSBRIDGESONROUTE_17.addFeatures(features_R4MANGATAIACCESSBRIDGESONROUTE_17);
var lyr_R4MANGATAIACCESSBRIDGESONROUTE_17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R4MANGATAIACCESSBRIDGESONROUTE_17, 
                style: style_R4MANGATAIACCESSBRIDGESONROUTE_17,
                interactive: true,
                title: '<img src="styles/legend/R4MANGATAIACCESSBRIDGESONROUTE_17.png" /> R4 MANGATAI ACCESS BRIDGES ON ROUTE'
            });
var format_R4MANGATAIACCESS_18 = new ol.format.GeoJSON();
var features_R4MANGATAIACCESS_18 = format_R4MANGATAIACCESS_18.readFeatures(json_R4MANGATAIACCESS_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R4MANGATAIACCESS_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R4MANGATAIACCESS_18.addFeatures(features_R4MANGATAIACCESS_18);
var lyr_R4MANGATAIACCESS_18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R4MANGATAIACCESS_18, 
                style: style_R4MANGATAIACCESS_18,
                interactive: true,
                title: '<img src="styles/legend/R4MANGATAIACCESS_18.png" /> R4 MANGATAI ACCESS'
            });
var format_R3AMATAHUIARUABRIDGESONROUTE_19 = new ol.format.GeoJSON();
var features_R3AMATAHUIARUABRIDGESONROUTE_19 = format_R3AMATAHUIARUABRIDGESONROUTE_19.readFeatures(json_R3AMATAHUIARUABRIDGESONROUTE_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3AMATAHUIARUABRIDGESONROUTE_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3AMATAHUIARUABRIDGESONROUTE_19.addFeatures(features_R3AMATAHUIARUABRIDGESONROUTE_19);
var lyr_R3AMATAHUIARUABRIDGESONROUTE_19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R3AMATAHUIARUABRIDGESONROUTE_19, 
                style: style_R3AMATAHUIARUABRIDGESONROUTE_19,
                interactive: true,
                title: '<img src="styles/legend/R3AMATAHUIARUABRIDGESONROUTE_19.png" /> R3A MATA HUIARUA BRIDGES ON ROUTE'
            });
var format_R3AMATAHUIARUA_20 = new ol.format.GeoJSON();
var features_R3AMATAHUIARUA_20 = format_R3AMATAHUIARUA_20.readFeatures(json_R3AMATAHUIARUA_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3AMATAHUIARUA_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3AMATAHUIARUA_20.addFeatures(features_R3AMATAHUIARUA_20);
var lyr_R3AMATAHUIARUA_20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R3AMATAHUIARUA_20, 
                style: style_R3AMATAHUIARUA_20,
                interactive: true,
                title: '<img src="styles/legend/R3AMATAHUIARUA_20.png" /> R3A MATA HUIARUA'
            });
var format_R3MATAHUIARUABRIDGESONROUTE_21 = new ol.format.GeoJSON();
var features_R3MATAHUIARUABRIDGESONROUTE_21 = format_R3MATAHUIARUABRIDGESONROUTE_21.readFeatures(json_R3MATAHUIARUABRIDGESONROUTE_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3MATAHUIARUABRIDGESONROUTE_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3MATAHUIARUABRIDGESONROUTE_21.addFeatures(features_R3MATAHUIARUABRIDGESONROUTE_21);
var lyr_R3MATAHUIARUABRIDGESONROUTE_21 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R3MATAHUIARUABRIDGESONROUTE_21, 
                style: style_R3MATAHUIARUABRIDGESONROUTE_21,
                interactive: true,
                title: '<img src="styles/legend/R3MATAHUIARUABRIDGESONROUTE_21.png" /> R3 MATA HUIARUA BRIDGES ON ROUTE'
            });
var format_R3MATAHUIARUA_22 = new ol.format.GeoJSON();
var features_R3MATAHUIARUA_22 = format_R3MATAHUIARUA_22.readFeatures(json_R3MATAHUIARUA_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R3MATAHUIARUA_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R3MATAHUIARUA_22.addFeatures(features_R3MATAHUIARUA_22);
var lyr_R3MATAHUIARUA_22 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R3MATAHUIARUA_22, 
                style: style_R3MATAHUIARUA_22,
                interactive: true,
                title: '<img src="styles/legend/R3MATAHUIARUA_22.png" /> R3 MATA HUIARUA'
            });
var format_R2GRAYSBRIDGEBRIDGESONROUTE_23 = new ol.format.GeoJSON();
var features_R2GRAYSBRIDGEBRIDGESONROUTE_23 = format_R2GRAYSBRIDGEBRIDGESONROUTE_23.readFeatures(json_R2GRAYSBRIDGEBRIDGESONROUTE_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2GRAYSBRIDGEBRIDGESONROUTE_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2GRAYSBRIDGEBRIDGESONROUTE_23.addFeatures(features_R2GRAYSBRIDGEBRIDGESONROUTE_23);
var lyr_R2GRAYSBRIDGEBRIDGESONROUTE_23 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2GRAYSBRIDGEBRIDGESONROUTE_23, 
                style: style_R2GRAYSBRIDGEBRIDGESONROUTE_23,
                interactive: true,
                title: '<img src="styles/legend/R2GRAYSBRIDGEBRIDGESONROUTE_23.png" /> R2 GRAYS BRIDGE BRIDGES ON ROUTE'
            });
var format_R2GRAYSBRIDGE_24 = new ol.format.GeoJSON();
var features_R2GRAYSBRIDGE_24 = format_R2GRAYSBRIDGE_24.readFeatures(json_R2GRAYSBRIDGE_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R2GRAYSBRIDGE_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R2GRAYSBRIDGE_24.addFeatures(features_R2GRAYSBRIDGE_24);
var lyr_R2GRAYSBRIDGE_24 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R2GRAYSBRIDGE_24, 
                style: style_R2GRAYSBRIDGE_24,
                interactive: true,
                title: '<img src="styles/legend/R2GRAYSBRIDGE_24.png" /> R2 GRAYS BRIDGE'
            });
var format_R1BSTLEGERSBRIDGESONROUTE_25 = new ol.format.GeoJSON();
var features_R1BSTLEGERSBRIDGESONROUTE_25 = format_R1BSTLEGERSBRIDGESONROUTE_25.readFeatures(json_R1BSTLEGERSBRIDGESONROUTE_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R1BSTLEGERSBRIDGESONROUTE_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1BSTLEGERSBRIDGESONROUTE_25.addFeatures(features_R1BSTLEGERSBRIDGESONROUTE_25);
var lyr_R1BSTLEGERSBRIDGESONROUTE_25 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R1BSTLEGERSBRIDGESONROUTE_25, 
                style: style_R1BSTLEGERSBRIDGESONROUTE_25,
                interactive: true,
                title: '<img src="styles/legend/R1BSTLEGERSBRIDGESONROUTE_25.png" /> R1B ST LEGERS BRIDGES ON ROUTE'
            });
var format_R1BSTLEGER_26 = new ol.format.GeoJSON();
var features_R1BSTLEGER_26 = format_R1BSTLEGER_26.readFeatures(json_R1BSTLEGER_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R1BSTLEGER_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1BSTLEGER_26.addFeatures(features_R1BSTLEGER_26);
var lyr_R1BSTLEGER_26 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R1BSTLEGER_26, 
                style: style_R1BSTLEGER_26,
                interactive: true,
                title: '<img src="styles/legend/R1BSTLEGER_26.png" /> R1B ST LEGER'
            });
var format_R1ASTLEGERBRIDGESONROUTE_27 = new ol.format.GeoJSON();
var features_R1ASTLEGERBRIDGESONROUTE_27 = format_R1ASTLEGERBRIDGESONROUTE_27.readFeatures(json_R1ASTLEGERBRIDGESONROUTE_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R1ASTLEGERBRIDGESONROUTE_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1ASTLEGERBRIDGESONROUTE_27.addFeatures(features_R1ASTLEGERBRIDGESONROUTE_27);
var lyr_R1ASTLEGERBRIDGESONROUTE_27 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R1ASTLEGERBRIDGESONROUTE_27, 
                style: style_R1ASTLEGERBRIDGESONROUTE_27,
                interactive: true,
                title: '<img src="styles/legend/R1ASTLEGERBRIDGESONROUTE_27.png" /> R1A ST LEGER BRIDGES ON ROUTE'
            });
var format_R1ASTLEGER_28 = new ol.format.GeoJSON();
var features_R1ASTLEGER_28 = format_R1ASTLEGER_28.readFeatures(json_R1ASTLEGER_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R1ASTLEGER_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1ASTLEGER_28.addFeatures(features_R1ASTLEGER_28);
var lyr_R1ASTLEGER_28 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R1ASTLEGER_28, 
                style: style_R1ASTLEGER_28,
                interactive: true,
                title: '<img src="styles/legend/R1ASTLEGER_28.png" /> R1A ST LEGER'
            });
var format_R0GStLegerRouteAltRoute_29 = new ol.format.GeoJSON();
var features_R0GStLegerRouteAltRoute_29 = format_R0GStLegerRouteAltRoute_29.readFeatures(json_R0GStLegerRouteAltRoute_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R0GStLegerRouteAltRoute_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R0GStLegerRouteAltRoute_29.addFeatures(features_R0GStLegerRouteAltRoute_29);
var lyr_R0GStLegerRouteAltRoute_29 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R0GStLegerRouteAltRoute_29, 
                style: style_R0GStLegerRouteAltRoute_29,
                interactive: true,
                title: 'R0G St Leger Route Alt Route'
            });
var format_Clusters_30 = new ol.format.GeoJSON();
var features_Clusters_30 = format_Clusters_30.readFeatures(json_Clusters_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clusters_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clusters_30.addFeatures(features_Clusters_30);
var lyr_Clusters_30 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Clusters_30, 
                style: style_Clusters_30,
                interactive: true,
                title: '<img src="styles/legend/Clusters_30.png" /> Clusters'
            });
var format_Pasted_31 = new ol.format.GeoJSON();
var features_Pasted_31 = format_Pasted_31.readFeatures(json_Pasted_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pasted_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pasted_31.addFeatures(features_Pasted_31);
var lyr_Pasted_31 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Pasted_31, 
                style: style_Pasted_31,
                interactive: true,
                title: 'Pasted'
            });
var format_R1STLEGERBRIDGESONROUTE_32 = new ol.format.GeoJSON();
var features_R1STLEGERBRIDGESONROUTE_32 = format_R1STLEGERBRIDGESONROUTE_32.readFeatures(json_R1STLEGERBRIDGESONROUTE_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R1STLEGERBRIDGESONROUTE_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1STLEGERBRIDGESONROUTE_32.addFeatures(features_R1STLEGERBRIDGESONROUTE_32);
var lyr_R1STLEGERBRIDGESONROUTE_32 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R1STLEGERBRIDGESONROUTE_32, 
                style: style_R1STLEGERBRIDGESONROUTE_32,
                interactive: true,
                title: '<img src="styles/legend/R1STLEGERBRIDGESONROUTE_32.png" /> R1 ST LEGER BRIDGES ON ROUTE'
            });
var format_R1STLEGER_33 = new ol.format.GeoJSON();
var features_R1STLEGER_33 = format_R1STLEGER_33.readFeatures(json_R1STLEGER_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_R1STLEGER_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_R1STLEGER_33.addFeatures(features_R1STLEGER_33);
var lyr_R1STLEGER_33 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_R1STLEGER_33, 
                style: style_R1STLEGER_33,
                interactive: true,
                title: '<img src="styles/legend/R1STLEGER_33.png" /> R1 ST LEGER'
            });
var group_R1 = new ol.layer.Group({
                                layers: [lyr_R1STLEGERBRIDGESONROUTE_32,lyr_R1STLEGER_33,],
                                title: "R1"});
var group_R1A = new ol.layer.Group({
                                layers: [lyr_R1ASTLEGERBRIDGESONROUTE_27,lyr_R1ASTLEGER_28,lyr_R0GStLegerRouteAltRoute_29,lyr_Clusters_30,lyr_Pasted_31,],
                                title: "R1A"});
var group_R1B = new ol.layer.Group({
                                layers: [lyr_R1BSTLEGERSBRIDGESONROUTE_25,lyr_R1BSTLEGER_26,],
                                title: "R1B"});
var group_R2 = new ol.layer.Group({
                                layers: [lyr_R2GRAYSBRIDGEBRIDGESONROUTE_23,lyr_R2GRAYSBRIDGE_24,],
                                title: "R2"});
var group_R3 = new ol.layer.Group({
                                layers: [lyr_R3MATAHUIARUABRIDGESONROUTE_21,lyr_R3MATAHUIARUA_22,],
                                title: "R3"});
var group_R3A = new ol.layer.Group({
                                layers: [lyr_R3AMATAHUIARUABRIDGESONROUTE_19,lyr_R3AMATAHUIARUA_20,],
                                title: "R3A"});
var group_R4 = new ol.layer.Group({
                                layers: [lyr_R4MANGATAIACCESSBRIDGESONROUTE_17,lyr_R4MANGATAIACCESS_18,],
                                title: "R4"});
var group_BGLAYERS = new ol.layer.Group({
                                layers: [lyr_Gisborne03mRuralAerialPhotos20172019_8,lyr_Gisborne01mUrbanAerialPhotos20222023_9,lyr_Gisborne02mRuralAerialPhotos20212023_10,lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11,lyr_116AllBridges_12,lyr_AnalysisBridges_13,lyr_116routes_14,lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15,lyr_001111106allroutes_16,],
                                title: "BG LAYERS"});
var group_Routes = new ol.layer.Group({
                                layers: [lyr_116routes_14,lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15,],
                                title: "Routes"});
var group_Bridges = new ol.layer.Group({
                                layers: [lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11,lyr_116AllBridges_12,lyr_AnalysisBridges_13,],
                                title: "Bridges"});
var group_Imagery = new ol.layer.Group({
                                layers: [lyr_Gisborne03mRuralAerialPhotos20172019_8,lyr_Gisborne01mUrbanAerialPhotos20222023_9,lyr_Gisborne02mRuralAerialPhotos20212023_10,],
                                title: "Imagery"});

lyr_Gisborne03mRuralAerialPhotos20172019_0.setVisible(true);lyr_Gisborne01mUrbanAerialPhotos20222023_1.setVisible(true);lyr_Gisborne02mRuralAerialPhotos20212023_2.setVisible(true);lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3.setVisible(true);lyr_116AllBridges_4.setVisible(true);lyr_AnalysisBridges_5.setVisible(true);lyr_116routes_6.setVisible(true);lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7.setVisible(true);lyr_Gisborne03mRuralAerialPhotos20172019_8.setVisible(true);lyr_Gisborne01mUrbanAerialPhotos20222023_9.setVisible(true);lyr_Gisborne02mRuralAerialPhotos20212023_10.setVisible(true);lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11.setVisible(true);lyr_116AllBridges_12.setVisible(true);lyr_AnalysisBridges_13.setVisible(true);lyr_116routes_14.setVisible(true);lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15.setVisible(true);lyr_001111106allroutes_16.setVisible(true);lyr_R4MANGATAIACCESSBRIDGESONROUTE_17.setVisible(true);lyr_R4MANGATAIACCESS_18.setVisible(true);lyr_R3AMATAHUIARUABRIDGESONROUTE_19.setVisible(true);lyr_R3AMATAHUIARUA_20.setVisible(true);lyr_R3MATAHUIARUABRIDGESONROUTE_21.setVisible(true);lyr_R3MATAHUIARUA_22.setVisible(true);lyr_R2GRAYSBRIDGEBRIDGESONROUTE_23.setVisible(true);lyr_R2GRAYSBRIDGE_24.setVisible(true);lyr_R1BSTLEGERSBRIDGESONROUTE_25.setVisible(true);lyr_R1BSTLEGER_26.setVisible(true);lyr_R1ASTLEGERBRIDGESONROUTE_27.setVisible(true);lyr_R1ASTLEGER_28.setVisible(true);lyr_R0GStLegerRouteAltRoute_29.setVisible(true);lyr_Clusters_30.setVisible(true);lyr_Pasted_31.setVisible(true);lyr_R1STLEGERBRIDGESONROUTE_32.setVisible(true);lyr_R1STLEGER_33.setVisible(true);
var layersList = [group_Imagery,group_Bridges,group_Routes,group_BGLAYERS,group_R4,group_R3A,group_R3,group_R2,group_R1B,group_R1A,group_R1];
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_rail': 'rail_to_rail', 'bridge_no': 'bridge_no', 'bridge_name': 'bridge_name', 'local_desc': 'local_desc', 'bridge_type': 'bridge_type', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_converted': 'is_converted', });
lyr_116AllBridges_4.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_AnalysisBridges_5.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_116routes_6.set('fieldAliases', {'road_id': 'road_id', 'carrway_st': 'carrway_st', 'carrway_en': 'carrway_en', 'start_name': 'start_name', 'end_name': 'end_name', 'length_m': 'length_m', 'cway_width': 'cway_width', 'total_area': 'total_area', 'cway_area': 'cway_area', 'cway_sub_a': 'cway_sub_a', 'cway_hiera': 'cway_hiera', 'pavement_t': 'pavement_t', 'pavement_u': 'pavement_u', 'urban_rura': 'urban_rura', 'owner_type': 'owner_type', 'id': 'id', 'is_convert': 'is_convert', });
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7.set('fieldAliases', {'road_id': 'road_id', 'carrway_start_m': 'carrway_start_m', 'carrway_end_m': 'carrway_end_m', 'start_name': 'start_name', 'end_name': 'end_name', 'length_m': 'length_m', 'cway_width': 'cway_width', 'total_area': 'total_area', 'cway_area': 'cway_area', 'cway_sub_area': 'cway_sub_area', 'cway_hierarchy': 'cway_hierarchy', 'pavement_type': 'pavement_type', 'pavement_use': 'pavement_use', 'urban_rural': 'urban_rural', 'owner_type': 'owner_type', 'id': 'id', 'is_converted': 'is_converted', });
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_rail': 'rail_to_rail', 'bridge_no': 'bridge_no', 'bridge_name': 'bridge_name', 'local_desc': 'local_desc', 'bridge_type': 'bridge_type', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_converted': 'is_converted', });
lyr_116AllBridges_12.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_AnalysisBridges_13.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_116routes_14.set('fieldAliases', {'road_id': 'road_id', 'carrway_st': 'carrway_st', 'carrway_en': 'carrway_en', 'start_name': 'start_name', 'end_name': 'end_name', 'length_m': 'length_m', 'cway_width': 'cway_width', 'total_area': 'total_area', 'cway_area': 'cway_area', 'cway_sub_a': 'cway_sub_a', 'cway_hiera': 'cway_hiera', 'pavement_t': 'pavement_t', 'pavement_u': 'pavement_u', 'urban_rura': 'urban_rura', 'owner_type': 'owner_type', 'id': 'id', 'is_convert': 'is_convert', });
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15.set('fieldAliases', {'road_id': 'road_id', 'carrway_start_m': 'carrway_start_m', 'carrway_end_m': 'carrway_end_m', 'start_name': 'start_name', 'end_name': 'end_name', 'length_m': 'length_m', 'cway_width': 'cway_width', 'total_area': 'total_area', 'cway_area': 'cway_area', 'cway_sub_area': 'cway_sub_area', 'cway_hierarchy': 'cway_hierarchy', 'pavement_type': 'pavement_type', 'pavement_use': 'pavement_use', 'urban_rural': 'urban_rural', 'owner_type': 'owner_type', 'id': 'id', 'is_converted': 'is_converted', });
lyr_001111106allroutes_16.set('fieldAliases', {'ANGLE': 'ANGLE', 'AREA': 'AREA', 'BLOCKNAME': 'BLOCKNAME', 'BULGE': 'BULGE', 'CENTER': 'CENTER', 'CENTROID': 'CENTROID', 'CLASSNAME': 'CLASSNAME', 'COLOR': 'COLOR', 'DWGNAME': 'DWGNAME', 'EANGLE': 'EANGLE', 'EHANDLE': 'EHANDLE', 'ELEVATION': 'ELEVATION', 'EWIDTH': 'EWIDTH', 'HEIGHT': 'HEIGHT', 'IMAGENAME': 'IMAGENAME', 'LABELPT': 'LABELPT', 'LAYER': 'LAYER', 'LENGTH': 'LENGTH', 'LINETYPE': 'LINETYPE', 'LINEWEIGHT': 'LINEWEIGHT', 'LOCKSTAT': 'LOCKSTAT', 'PLOTSTYLE': 'PLOTSTYLE', 'RADIUS': 'RADIUS', 'ROTATION': 'ROTATION', 'SANGLE': 'SANGLE', 'SHAPENAME': 'SHAPENAME', 'SIZE': 'SIZE', 'STRING': 'STRING', 'STYLE': 'STYLE', 'SWIDTH': 'SWIDTH', 'TAG': 'TAG', 'THICKNESS': 'THICKNESS', 'TRUECOLOR': 'TRUECOLOR', 'TYPE': 'TYPE', 'URL': 'URL', 'X1_Y1_Z1': 'X1_Y1_Z1', 'X1': 'X1', 'Y1': 'Y1', 'Z1': 'Z1', 'X2_Y2_Z2': 'X2_Y2_Z2', 'X2': 'X2', 'Y2': 'Y2', 'Z2': 'Z2', 'X3_Y3_Z3': 'X3_Y3_Z3', 'X3': 'X3', 'Y3': 'Y3', 'Z3': 'Z3', 'X4_Y4_Z4': 'X4_Y4_Z4', 'X4': 'X4', 'Y4': 'Y4', 'Z4': 'Z4', 'XSCALE': 'XSCALE', 'YSCALE': 'YSCALE', 'ZSCALE': 'ZSCALE', 'FeatId4': 'FeatId4', 'road_id': 'road_id', 'carrway_st': 'carrway_st', 'carrway_en': 'carrway_en', 'start_name': 'start_name', 'end_name': 'end_name', 'length_m': 'length_m', 'cway_width': 'cway_width', 'total_area': 'total_area', 'cway_area': 'cway_area', 'cway_sub_a': 'cway_sub_a', 'cway_hiera': 'cway_hiera', 'pavement_t': 'pavement_t', 'pavement_u': 'pavement_u', 'urban_rura': 'urban_rura', 'owner_type': 'owner_type', 'id': 'id', 'is_convert': 'is_convert', 'FeatId1': 'FeatId1', 'asset_name': 'asset_name', 'd_assetgro': 'd_assetgro', 'd_assettyp': 'd_assettyp', 'd_lifecycl': 'd_lifecycl', 'd_voltage_': 'd_voltage_', 'Shape_Leng': 'Shape_Leng', 'FeatId2': 'FeatId2', 'asset_nam1': 'asset_nam1', 'd_assetgr1': 'd_assetgr1', 'd_assetty1': 'd_assetty1', 'd_lifecyc1': 'd_lifecyc1', 'd_voltage1': 'd_voltage1', 'FeatId3': 'FeatId3', 'road_id1': 'road_id1', 'carrway_s1': 'carrway_s1', 'carrway_e1': 'carrway_e1', 'start_nam1': 'start_nam1', 'end_name1': 'end_name1', 'length_m1': 'length_m1', 'cway_widt1': 'cway_widt1', 'total_are1': 'total_are1', 'cway_area1': 'cway_area1', 'cway_sub_1': 'cway_sub_1', 'cway_hier1': 'cway_hier1', 'pavement_1': 'pavement_1', 'pavement_2': 'pavement_2', 'urban_rur1': 'urban_rur1', 'owner_typ1': 'owner_typ1', 'id1': 'id1', 'is_conver1': 'is_conver1', });
lyr_R4MANGATAIACCESSBRIDGESONROUTE_17.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_R4MANGATAIACCESS_18.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_R3AMATAHUIARUABRIDGESONROUTE_19.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_R3AMATAHUIARUA_20.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_R3MATAHUIARUABRIDGESONROUTE_21.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_R3MATAHUIARUA_22.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_R2GRAYSBRIDGEBRIDGESONROUTE_23.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_R2GRAYSBRIDGE_24.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_R1BSTLEGERSBRIDGESONROUTE_25.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_R1BSTLEGER_26.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_R1ASTLEGERBRIDGESONROUTE_27.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_R1ASTLEGER_28.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_R0GStLegerRouteAltRoute_29.set('fieldAliases', {'Step Number': 'Step Number', 'Position X': 'Position X', 'Position Y': 'Position Y', 'Position Z': 'Position Z', 'Distance': 'Distance', 'Max Steering Angle': 'Max Steering Angle', 'Min Steering Angle': 'Min Steering Angle', 'Actual Steering Angle': 'Actual Steering Angle', 'Percentage of Max Steering Angle': 'Percentage of Max Steering Angle', 'Direction': 'Direction', 'Speed': 'Speed', 'Speed Units': 'Speed Units', 'Unit 1 Angle': 'Unit 1 Angle', 'Unit 1 Position X': 'Unit 1 Position X', 'Unit 1 Position Y': 'Unit 1 Position Y', 'Unit 1 Position Z': 'Unit 1 Position Z', 'Unit 2 Articulation Angle': 'Unit 2 Articulation Angle', 'Unit 2 Angle': 'Unit 2 Angle', 'Unit 2 Position X': 'Unit 2 Position X', 'Unit 2 Position Y': 'Unit 2 Position Y', 'Unit 2 Position Z': 'Unit 2 Position Z', });
lyr_Clusters_30.set('fieldAliases', {'Step Number': 'Step Number', 'Position X': 'Position X', 'Position Y': 'Position Y', 'Position Z': 'Position Z', 'Distance': 'Distance', 'Max Steering Angle': 'Max Steering Angle', 'Min Steering Angle': 'Min Steering Angle', 'Actual Steering Angle': 'Actual Steering Angle', 'Percentage of Max Steering Angle': 'Percentage of Max Steering Angle', 'Direction': 'Direction', 'Speed': 'Speed', 'Speed Units': 'Speed Units', 'Unit 1 Angle': 'Unit 1 Angle', 'Unit 1 Position X': 'Unit 1 Position X', 'Unit 1 Position Y': 'Unit 1 Position Y', 'Unit 1 Position Z': 'Unit 1 Position Z', 'Unit 2 Articulation Angle': 'Unit 2 Articulation Angle', 'Unit 2 Angle': 'Unit 2 Angle', 'Unit 2 Position X': 'Unit 2 Position X', 'Unit 2 Position Y': 'Unit 2 Position Y', 'Unit 2 Position Z': 'Unit 2 Position Z', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SIZE': 'CLUSTER_SIZE', });
lyr_Pasted_31.set('fieldAliases', {'Step Number': 'Step Number', 'Position X': 'Position X', 'Position Y': 'Position Y', 'Position Z': 'Position Z', 'Distance': 'Distance', 'Max Steering Angle': 'Max Steering Angle', 'Min Steering Angle': 'Min Steering Angle', 'Actual Steering Angle': 'Actual Steering Angle', 'Percentage of Max Steering Angle': 'Percentage of Max Steering Angle', 'Direction': 'Direction', 'Speed': 'Speed', 'Speed Units': 'Speed Units', 'Unit 1 Angle': 'Unit 1 Angle', 'Unit 1 Position X': 'Unit 1 Position X', 'Unit 1 Position Y': 'Unit 1 Position Y', 'Unit 1 Position Z': 'Unit 1 Position Z', 'Unit 2 Articulation Angle': 'Unit 2 Articulation Angle', 'Unit 2 Angle': 'Unit 2 Angle', 'Unit 2 Position X': 'Unit 2 Position X', 'Unit 2 Position Y': 'Unit 2 Position Y', 'Unit 2 Position Z': 'Unit 2 Position Z', 'CLUSTER_ID': 'CLUSTER_ID', 'CLUSTER_SIZE': 'CLUSTER_SIZE', });
lyr_R1STLEGERBRIDGESONROUTE_32.set('fieldAliases', {'road_id': 'road_id', 'start_m': 'start_m', 'end_m': 'end_m', 'rail_to_ra': 'rail_to_ra', 'bridge_no': 'bridge_no', 'bridge_nam': 'bridge_nam', 'local_desc': 'local_desc', 'bridge_typ': 'bridge_typ', 'culvert_sw': 'culvert_sw', 'age': 'age', 'id': 'id', 'is_convert': 'is_convert', });
lyr_R1STLEGER_33.set('fieldAliases', {'start': 'start', 'end': 'end', 'cost': 'cost', });
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_rail': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_name': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_type': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_converted': 'CheckBox', });
lyr_116AllBridges_4.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': '', 'bridge_no': 'TextEdit', 'bridge_nam': '', 'local_desc': 'TextEdit', 'bridge_typ': '', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': '', });
lyr_AnalysisBridges_5.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'TextEdit', 'end_m': 'TextEdit', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'TextEdit', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_116routes_6.set('fieldImages', {'road_id': 'TextEdit', 'carrway_st': '', 'carrway_en': '', 'start_name': 'TextEdit', 'end_name': 'TextEdit', 'length_m': 'Range', 'cway_width': 'TextEdit', 'total_area': 'TextEdit', 'cway_area': 'TextEdit', 'cway_sub_a': '', 'cway_hiera': '', 'pavement_t': '', 'pavement_u': '', 'urban_rura': '', 'owner_type': 'TextEdit', 'id': 'TextEdit', 'is_convert': '', });
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7.set('fieldImages', {'road_id': 'TextEdit', 'carrway_start_m': 'Range', 'carrway_end_m': 'Range', 'start_name': 'TextEdit', 'end_name': 'TextEdit', 'length_m': 'Range', 'cway_width': 'TextEdit', 'total_area': 'TextEdit', 'cway_area': 'TextEdit', 'cway_sub_area': 'TextEdit', 'cway_hierarchy': 'TextEdit', 'pavement_type': 'TextEdit', 'pavement_use': 'TextEdit', 'urban_rural': 'TextEdit', 'owner_type': 'TextEdit', 'id': 'TextEdit', 'is_converted': 'CheckBox', });
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_rail': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_name': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_type': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_converted': 'CheckBox', });
lyr_116AllBridges_12.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': '', 'bridge_no': 'TextEdit', 'bridge_nam': '', 'local_desc': 'TextEdit', 'bridge_typ': '', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': '', });
lyr_AnalysisBridges_13.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'TextEdit', 'end_m': 'TextEdit', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'TextEdit', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_116routes_14.set('fieldImages', {'road_id': 'TextEdit', 'carrway_st': '', 'carrway_en': '', 'start_name': 'TextEdit', 'end_name': 'TextEdit', 'length_m': 'Range', 'cway_width': 'TextEdit', 'total_area': 'TextEdit', 'cway_area': 'TextEdit', 'cway_sub_a': '', 'cway_hiera': '', 'pavement_t': '', 'pavement_u': '', 'urban_rura': '', 'owner_type': 'TextEdit', 'id': 'TextEdit', 'is_convert': '', });
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15.set('fieldImages', {'road_id': 'TextEdit', 'carrway_start_m': 'Range', 'carrway_end_m': 'Range', 'start_name': 'TextEdit', 'end_name': 'TextEdit', 'length_m': 'Range', 'cway_width': 'TextEdit', 'total_area': 'TextEdit', 'cway_area': 'TextEdit', 'cway_sub_area': 'TextEdit', 'cway_hierarchy': 'TextEdit', 'pavement_type': 'TextEdit', 'pavement_use': 'TextEdit', 'urban_rural': 'TextEdit', 'owner_type': 'TextEdit', 'id': 'TextEdit', 'is_converted': 'CheckBox', });
lyr_001111106allroutes_16.set('fieldImages', {'ANGLE': 'TextEdit', 'AREA': 'TextEdit', 'BLOCKNAME': 'TextEdit', 'BULGE': 'TextEdit', 'CENTER': 'TextEdit', 'CENTROID': 'TextEdit', 'CLASSNAME': 'TextEdit', 'COLOR': 'TextEdit', 'DWGNAME': 'TextEdit', 'EANGLE': 'TextEdit', 'EHANDLE': 'TextEdit', 'ELEVATION': 'TextEdit', 'EWIDTH': 'TextEdit', 'HEIGHT': 'TextEdit', 'IMAGENAME': 'TextEdit', 'LABELPT': 'TextEdit', 'LAYER': 'TextEdit', 'LENGTH': 'TextEdit', 'LINETYPE': 'TextEdit', 'LINEWEIGHT': 'TextEdit', 'LOCKSTAT': 'TextEdit', 'PLOTSTYLE': 'TextEdit', 'RADIUS': 'TextEdit', 'ROTATION': 'TextEdit', 'SANGLE': 'TextEdit', 'SHAPENAME': 'TextEdit', 'SIZE': 'TextEdit', 'STRING': 'TextEdit', 'STYLE': 'TextEdit', 'SWIDTH': 'TextEdit', 'TAG': 'TextEdit', 'THICKNESS': 'TextEdit', 'TRUECOLOR': 'TextEdit', 'TYPE': 'TextEdit', 'URL': 'TextEdit', 'X1_Y1_Z1': 'TextEdit', 'X1': 'TextEdit', 'Y1': 'TextEdit', 'Z1': 'TextEdit', 'X2_Y2_Z2': 'TextEdit', 'X2': 'TextEdit', 'Y2': 'TextEdit', 'Z2': 'TextEdit', 'X3_Y3_Z3': 'TextEdit', 'X3': 'TextEdit', 'Y3': 'TextEdit', 'Z3': 'TextEdit', 'X4_Y4_Z4': 'TextEdit', 'X4': 'TextEdit', 'Y4': 'TextEdit', 'Z4': 'TextEdit', 'XSCALE': 'TextEdit', 'YSCALE': 'TextEdit', 'ZSCALE': 'TextEdit', 'FeatId4': 'TextEdit', 'road_id': 'TextEdit', 'carrway_st': 'TextEdit', 'carrway_en': 'TextEdit', 'start_name': 'TextEdit', 'end_name': 'TextEdit', 'length_m': 'TextEdit', 'cway_width': 'TextEdit', 'total_area': 'TextEdit', 'cway_area': 'TextEdit', 'cway_sub_a': 'TextEdit', 'cway_hiera': 'TextEdit', 'pavement_t': 'TextEdit', 'pavement_u': 'TextEdit', 'urban_rura': 'TextEdit', 'owner_type': 'TextEdit', 'id': 'TextEdit', 'is_convert': 'TextEdit', 'FeatId1': 'TextEdit', 'asset_name': 'TextEdit', 'd_assetgro': 'TextEdit', 'd_assettyp': 'TextEdit', 'd_lifecycl': 'TextEdit', 'd_voltage_': 'TextEdit', 'Shape_Leng': 'TextEdit', 'FeatId2': 'TextEdit', 'asset_nam1': 'TextEdit', 'd_assetgr1': 'TextEdit', 'd_assetty1': 'TextEdit', 'd_lifecyc1': 'TextEdit', 'd_voltage1': 'TextEdit', 'FeatId3': 'TextEdit', 'road_id1': 'TextEdit', 'carrway_s1': 'TextEdit', 'carrway_e1': 'TextEdit', 'start_nam1': 'TextEdit', 'end_name1': 'TextEdit', 'length_m1': 'TextEdit', 'cway_widt1': 'TextEdit', 'total_are1': 'TextEdit', 'cway_area1': 'TextEdit', 'cway_sub_1': 'TextEdit', 'cway_hier1': 'TextEdit', 'pavement_1': 'TextEdit', 'pavement_2': 'TextEdit', 'urban_rur1': 'TextEdit', 'owner_typ1': 'TextEdit', 'id1': 'TextEdit', 'is_conver1': 'TextEdit', });
lyr_R4MANGATAIACCESSBRIDGESONROUTE_17.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_R4MANGATAIACCESS_18.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_R3AMATAHUIARUABRIDGESONROUTE_19.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_R3AMATAHUIARUA_20.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_R3MATAHUIARUABRIDGESONROUTE_21.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_R3MATAHUIARUA_22.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_R2GRAYSBRIDGEBRIDGESONROUTE_23.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_R2GRAYSBRIDGE_24.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_R1BSTLEGERSBRIDGESONROUTE_25.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_R1BSTLEGER_26.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_R1ASTLEGERBRIDGESONROUTE_27.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_R1ASTLEGER_28.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_R0GStLegerRouteAltRoute_29.set('fieldImages', {'Step Number': 'Range', 'Position X': 'TextEdit', 'Position Y': 'TextEdit', 'Position Z': 'TextEdit', 'Distance': 'TextEdit', 'Max Steering Angle': 'TextEdit', 'Min Steering Angle': 'TextEdit', 'Actual Steering Angle': 'TextEdit', 'Percentage of Max Steering Angle': 'TextEdit', 'Direction': 'TextEdit', 'Speed': 'TextEdit', 'Speed Units': 'TextEdit', 'Unit 1 Angle': 'TextEdit', 'Unit 1 Position X': 'TextEdit', 'Unit 1 Position Y': 'TextEdit', 'Unit 1 Position Z': 'TextEdit', 'Unit 2 Articulation Angle': 'TextEdit', 'Unit 2 Angle': 'TextEdit', 'Unit 2 Position X': 'TextEdit', 'Unit 2 Position Y': 'TextEdit', 'Unit 2 Position Z': 'TextEdit', });
lyr_Clusters_30.set('fieldImages', {'Step Number': '', 'Position X': '', 'Position Y': '', 'Position Z': '', 'Distance': '', 'Max Steering Angle': '', 'Min Steering Angle': '', 'Actual Steering Angle': '', 'Percentage of Max Steering Angle': '', 'Direction': '', 'Speed': '', 'Speed Units': '', 'Unit 1 Angle': '', 'Unit 1 Position X': '', 'Unit 1 Position Y': '', 'Unit 1 Position Z': '', 'Unit 2 Articulation Angle': '', 'Unit 2 Angle': '', 'Unit 2 Position X': '', 'Unit 2 Position Y': '', 'Unit 2 Position Z': '', 'CLUSTER_ID': '', 'CLUSTER_SIZE': '', });
lyr_Pasted_31.set('fieldImages', {'Step Number': 'Range', 'Position X': 'TextEdit', 'Position Y': 'TextEdit', 'Position Z': 'TextEdit', 'Distance': 'TextEdit', 'Max Steering Angle': 'TextEdit', 'Min Steering Angle': 'TextEdit', 'Actual Steering Angle': 'TextEdit', 'Percentage of Max Steering Angle': 'TextEdit', 'Direction': 'TextEdit', 'Speed': 'TextEdit', 'Speed Units': 'TextEdit', 'Unit 1 Angle': 'TextEdit', 'Unit 1 Position X': 'TextEdit', 'Unit 1 Position Y': 'TextEdit', 'Unit 1 Position Z': 'TextEdit', 'Unit 2 Articulation Angle': 'TextEdit', 'Unit 2 Angle': 'TextEdit', 'Unit 2 Position X': 'TextEdit', 'Unit 2 Position Y': 'TextEdit', 'Unit 2 Position Z': 'TextEdit', 'CLUSTER_ID': '', 'CLUSTER_SIZE': '', });
lyr_R1STLEGERBRIDGESONROUTE_32.set('fieldImages', {'road_id': 'TextEdit', 'start_m': 'Range', 'end_m': 'Range', 'rail_to_ra': 'TextEdit', 'bridge_no': 'TextEdit', 'bridge_nam': 'TextEdit', 'local_desc': 'TextEdit', 'bridge_typ': 'TextEdit', 'culvert_sw': 'TextEdit', 'age': 'Range', 'id': 'TextEdit', 'is_convert': 'Range', });
lyr_R1STLEGER_33.set('fieldImages', {'start': 'TextEdit', 'end': 'TextEdit', 'cost': 'TextEdit', });
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_3.set('fieldLabels', {});
lyr_116AllBridges_4.set('fieldLabels', {});
lyr_AnalysisBridges_5.set('fieldLabels', {});
lyr_116routes_6.set('fieldLabels', {});
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_7.set('fieldLabels', {});
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionBridgeOGRGeoJSON_11.set('fieldLabels', {});
lyr_116AllBridges_12.set('fieldLabels', {});
lyr_AnalysisBridges_13.set('fieldLabels', {});
lyr_116routes_14.set('fieldLabels', {});
lyr_formatgeojsonprojectionnztmforcePointfalsedescriptionCarriageway20SectionOGRGeoJSON_15.set('fieldLabels', {});
lyr_001111106allroutes_16.set('fieldLabels', {});
lyr_R4MANGATAIACCESSBRIDGESONROUTE_17.set('fieldLabels', {});
lyr_R4MANGATAIACCESS_18.set('fieldLabels', {});
lyr_R3AMATAHUIARUABRIDGESONROUTE_19.set('fieldLabels', {});
lyr_R3AMATAHUIARUA_20.set('fieldLabels', {});
lyr_R3MATAHUIARUABRIDGESONROUTE_21.set('fieldLabels', {});
lyr_R3MATAHUIARUA_22.set('fieldLabels', {});
lyr_R2GRAYSBRIDGEBRIDGESONROUTE_23.set('fieldLabels', {});
lyr_R2GRAYSBRIDGE_24.set('fieldLabels', {});
lyr_R1BSTLEGERSBRIDGESONROUTE_25.set('fieldLabels', {});
lyr_R1BSTLEGER_26.set('fieldLabels', {});
lyr_R1ASTLEGERBRIDGESONROUTE_27.set('fieldLabels', {});
lyr_R1ASTLEGER_28.set('fieldLabels', {});
lyr_R0GStLegerRouteAltRoute_29.set('fieldLabels', {});
lyr_Clusters_30.set('fieldLabels', {});
lyr_Pasted_31.set('fieldLabels', {});
lyr_R1STLEGERBRIDGESONROUTE_32.set('fieldLabels', {});
lyr_R1STLEGER_33.set('fieldLabels', {});
lyr_R1STLEGER_33.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});