<template>
    <h1>Using Leaflet and Open Street Map</h1>
    <div style="height:600px; width:800px">
        <l-map ref="map" :zoom="40" :center="[7.447130, 125.809503]">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base"
                name="OpenStreetMap"></l-tile-layer>
        </l-map>
    </div>
</template>

<script>
import { LMap, LTileLayer } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap, LTileLayer
    },
    data() {
        return {
            zoom: 40
        }
    }
}
</script>