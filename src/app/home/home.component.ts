import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  constructor() {
  }

 ngOnInit(): void {
 }

 @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
 
 center: google.maps.LatLngLiteral = {lat: -12.922642783079889, lng: -38.43247758354714};
 zoom = 12;
 markerOptions: google.maps.MarkerOptions = {draggable: false};
 markerPositions: google.maps.LatLngLiteral[] = [
   {lat: -13.01331, lng: -38.48289},
   {lat: -12.97413, lng: -38.51136},
   {lat: -12.94002, lng: -38.48843},
   {lat: -12.91826, lng: -38.49914},
   {lat: -12.95991, lng: -38.46741},
   {lat: -12.93814, lng: -38.36159},
   {lat: -12.92795, lng: -38.43207},
   {lat: -12.89635, lng: -38.40896},
   {lat: -12.87074, lng: -38.43345},
   {lat: -12.84083, lng: -38.46619}
 ];
 nomes: String[] = ["Centro/Brotas","Subúrbio/Ilhas","Cajazeiras","Itapuâ/Ipitanga","Cidade Baixa","Barra/Pituba","Liberdade/São Caetano","Cabula/Trancredo Neves","Pau da Lima","Valéria"];
 

 /*addMarker(event: google.maps.MapMouseEvent) {
   if(event.latLng != null){
     this.markerPositions.push(event.latLng.toJSON());
     console.log(event.latLng.toJSON());
   }
 }*/

 openInfoWindow(marker: MapMarker) {
  if(this.infoWindow != undefined)
  this.infoWindow.open(marker);
}

}
