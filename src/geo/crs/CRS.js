/*
 * Predifined coordinate reference systems
 *
 * This class uses the Proj4Leaflet plugin until leaflet gets
 * better support for projections upstream
 *
 * Using EPSG:4326, earth equirectangular, as a placeholder for now.
 * TODO Define CRS for each body
 *
 * http://forum.worldwindcentral.com/showthread.php?24275-CRS-84-vs-EPSG-4326-and-SCALE-HINT
 * Level 0, 0.0703125
 * Level 1, 0.03515625
 * Level 2, 0.017578125
 * Level 3, 0.08789063
 * Level 4, 0.04394531
 * Level 5, 0.02197266
 * Level 6, 0.001098633
 * Level 7, 0.000549316
 * Level 8, 0.000274658
 * Level 9, 0.000137329
 */
L.KSP.CRS = {};
L.KSP.CRS.EPSG4326 = new L.Proj.CRS.TMS(new Proj4js.Proj("EPSG:4326"),
	[-180.0, -90.0, 180, 90], {
		resolutions: [
			0.703125,
			0.3515625,
			0.17578125,
			0.087890625,
			0.0439453125,
			0.02197265625
		]
	}
);

