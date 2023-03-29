<template>
    <div class="w-100" style="height: 700px">
        <l-map @click="updateCurrent" :use-global-leaflet="false" ref="map" :zoom="40" :center="center">
            <l-tile-layer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" layer-type="base" name="OpenStreetMap">
            </l-tile-layer>

            <template v-for="user in users" :key="user.id">
                <l-marker :lat-lng="user.latlng" draggable="false">
                    <l-popup>{{ user.name }}</l-popup>
                </l-marker>
            </template>

        </l-map>
    </div>
    <div class="d-flex justify-center">
        <form @submit.prevent="saveUser" class="d-flex w-50 pa-2 justify-center">
            <v-text-field aria-required="true" v-model="name" class="mx-1 my-0" label="Full Name"></v-text-field>
            <v-text-field aria-required="true" v-model="current[0]" class="mx-1 my-0" label="Latitude"></v-text-field>
            <v-text-field aria-required="true" v-model="current[1]" class="mx-1 my-0" label="Longitude"></v-text-field>
            <v-btn type="submit" class="mt-2 ml-3 px-3 py-2">Save</v-btn>
        </form>

    </div>

    <tempate v-if="users.length > 0">
        <v-table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Location</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id">
                    <td>{{ user.id }}</td>
                    <td>{{ user.name }}</td>
                    <td>
                        <code>
                                    {{ `[${user.latlng[0]}, ${user.latlng[1]}]` }}
                                </code>
                    </td>
                    <td>
                        <v-btn class="mx-1" @click="onEdit(user)">Edit</v-btn>
                        <v-btn class="mx-1" @click="onDelete(user)">Delete</v-btn>
                    </td>
                </tr>
            </tbody>
        </v-table>
    </tempate>
</template>

<script>
/*
 Tagum = 7.440649, 125.826024
 Panabo = 7.283371, 125.672142
 Davao = 7.056108, 125.577467
*/
import * as L from "leaflet";
import { LMap, LTileLayer, LCircleMarker, LMarker, LControl, LPolygon, LPopup, LTooltip } from "@vue-leaflet/vue-leaflet";

export default {
    components: {
        LMap, LTileLayer, LCircleMarker, LControl, LMarker, LPolygon, LPopup, LTooltip
    },
    data() {
        return {
            center: [7.447146, 125.803964],
            current: [0, 0],
            name: '',
            users: [],
            map: null,
            isEditing: false,
            user: {
                id: '',
            }
        }
    },
    mounted() {
        this.map = this.$refs.map;
    },
    methods: {
        updateCurrent(ev) {
            var { lat, lng } = this.map.leafletObject.mouseEventToLatLng(ev);
            this.current = [lat, lng];
        },
        saveUser(ev) {
            ev.preventDefault();
            let saved = false;

            if (!this.isEditing && this.name && (this.current[0] > 0 && this.current[1] > 0)) {
                // valid 
                this.users.push({
                    id: parseInt(Math.random() * 9999),
                    name: this.name,
                    latlng: this.current
                });
                saved = true;
            } else if (this.isEditing && this.name && (this.current[0] > 0 && this.current[1] > 0)) {

                // find 
                let temp = Object.assign([], this.users);
                temp = temp.map((user) => {
                    if (user.id == this.user.id) {
                        return {
                            id: user.id,
                            name: this.name,
                            latlng: this.current
                        }
                    } else return user;
                })
                // update
                this.users = temp;
                this.isEditing = false;
                saved = true;
            }

            if (saved) {
                this.name = '';
                this.current = [0, 0];
            }



        },
        onEdit(user) {
            this.user = user;
            this.name = user.name;
            this.current = user.latlng;
            this.isEditing = true;
        },
        onDelete(user) {
            if (confirm("Are you sure?")) {
                // filter
                let temp = Object.assign([], this.users);
                // update
                this.users = temp.filter((_user) => _user.id != user.id);
            }
        }
    }
}
</script>