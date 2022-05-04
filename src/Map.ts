import ArcGISMap from '@arcgis/core/Map';
import MapView from '@arcgis/core/views/MapView';

let map: ArcGISMap;
let view: MapView;

export function initialize(container: string) {
  map = new ArcGISMap({
    basemap: 'gray-vector',
  });

  view = new MapView({
    container,
    map: map,
    zoom: 10,
    center: [-118, 34],
  });
}

export function zoomTo(coords: number[]) {
  view.goTo({
    center: coords,
    zoom: 12,
  });
}
