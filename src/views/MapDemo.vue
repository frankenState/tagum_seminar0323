<template>
    <h1>Using Leaflet and Open Street Map</h1>
    <button @click="newMarker">New Marker</button>
    <div class="w-100" style="height: 700px">
        <l-map @ready="onReady" 
            @mouseover="mouseOver"
        :use-global-leaflet="false" ref="map" :zoom="40" :center="center">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
            </l-tile-layer>
            <l-circle-marker :lat-lng="[7.447146, 125.803964]" :radius="10" />

            <template v-for="user in users">
                <l-marker :lat-lng="user.location" draggable="true">
                    <l-popup>{{ user.name }}</l-popup>
                </l-marker>
            </template>

            <template v-for="marker in customMarkers">
                <l-marker :lat-lng="marker.location" :draggable="marker.draggable">
                </l-marker>
            </template>
            <l-control class="leaflet-control leaflet-demo-control" position="bottomleft">Hello, Map!</l-control>

            <l-polygon :lat-lngs="[
                [7.441692, 125.824993],
                [7.441191, 125.828126],
                [7.439265, 125.827622],
                [7.439776, 125.825010],
            ]" color="#fc3030" :fill="true" :fillOpacity="0.5" fillColor="#fc3030">
                <l-popup> Hi! I'm a polygon, nice to meet you! </l-popup>
            </l-polygon>
        </l-map>
    </div>
    <div class="d-flex justify-center py-2">
        <v-btn @click="moveTo([7.440649, 125.826024])" class="mx-1">Tagum</v-btn>
        <v-btn @click="moveTo([7.283371, 125.672142])" class="mx-1">Panabo</v-btn>
        <v-btn @click="moveTo([7.056108, 125.577467])" class="mx-1">Davao</v-btn>
    </div>
</template>

<script>
/*
 Tagum = 7.440649, 125.826024
 Panabo = 7.283371, 125.672142
 Davao = 7.056108, 125.577467
*/
import { latLng } from "leaflet";
import { LMap, LTileLayer, LCircleMarker, LMarker, LControl, LPolygon, LPopup } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap, LTileLayer, LCircleMarker, LControl, LMarker, LPolygon, LPopup
    },
    data() {
        return {
            center: [7.447146, 125.803964],
            zoom: 40,
            marker: latLng(7.447146, 125.803964),
            map: null,
            users: [
                {
                    id: 1,
                    name: 'John Wick',
                    location: [7.451016, 125.813052],
                },
                {
                    id: 2,
                    name: 'James Gosling',
                    location: [7.450053, 125.811763],
                },
                {
                    id: 3,
                    name: 'Jane Doe',
                    location: [7.449283, 125.807603],
                },
            ],
            customMarkers: []
        }
    },
    mounted() {
        this.map = this.$refs.map;
    },
    methods: {
        onReady(event) {
            console.log("Event=> ", event);
        },
        newMarker() {
            this.customMarkers.push({
                location: [7.447146, 125.803964],
                draggable: true
            });
        },
        moveTo(coordinate){
            //this.map.setCenter(coordinate);
            this.center = coordinate;
            this.customMarkers.push({
                location: coordinate,
                draggable: true
            });
        },
        mouseOver(event){
            console.log("event=> ", event);
        }
    }
}
</script>