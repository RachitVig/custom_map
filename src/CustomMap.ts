export interface Mappable{
//instructions to every other class like how they can be a argument to addMarker
location:{
    lat:number;
    lng:number
};
markerContent():string;
}
export class CustomMap{
  private  googleMap:google.maps.Map;
    constructor(divId:string){
this.googleMap=new google.maps.Map(document.getElementById(divId) as HTMLElement,{
  zoom:1,
  center:{
    lat:0,
    lng:0
  }  
});
    }
    addMarker(mapabble:Mappable):void{
const marker=new google.maps.Marker({
    map:this.googleMap,
    position:{
        lat:mapabble.location.lat,
        lng:mapabble.location.lng
    }
});
marker.addListener("click",()=>{
    const infoWindow= new google.maps.InfoWindow({
        content:mapabble.markerContent()
    });
    infoWindow.open(this.googleMap,marker)
})
    }
}