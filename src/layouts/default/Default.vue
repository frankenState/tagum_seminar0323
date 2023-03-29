<template>
  <v-app>
    <!-- <v-card>
      <v-list>
        <router-link to="/parent/">Home</router-link>
      </v-list>
      <v-list>
        <router-link to="/parent/maps">Maps</router-link>
      </v-list>
      <v-list>
        <router-link to="/parent/dashboard">Dashboard</router-link>
      </v-list>
    </v-card> -->
    <default-view />
  </v-app>
</template>

<script setup>
  import DefaultView from './View.vue'
</script>
