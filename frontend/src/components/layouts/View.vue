<template>
  <v-app>

    <sidebar-menu/>

    <v-main>
      <div class="pa-6">
        <router-view />
      </div>
    </v-main>
  </v-app>
</template>

<script setup>
  // import DefaultBar from './AppBar.vue'
  import SidebarMenu from './SidebarMenu.vue'

</script>
