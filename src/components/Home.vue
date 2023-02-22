<template>
    <v-card>
      <v-layout>
        <v-navigation-drawer
          permanent
        >
          <template v-slot:prepend>
            <v-list-item
              lines="two"
              prepend-avatar="https://randomuser.me/api/portraits/women/81.jpg"
              title="Jane Smith"
              subtitle="Logged in"
            ></v-list-item>
          </template>
  
          <v-divider></v-divider>
          <v-list density="compact" nav>
            <router-link to="/generate">
                <v-list-item prepend-icon="mdi-cog" title="Generate" value="generate"></v-list-item>
            </router-link>
            <router-link to="/qrlist">
            <v-list-item prepend-icon="mdi-file" title="QR List" value="qrlist"></v-list-item>
            </router-link>
            <router-link to="/scan">
            <v-list-item prepend-icon="mdi-camera" title="scan" value="scan"></v-list-item>
            </router-link>
          </v-list>
        </v-navigation-drawer>
        <v-main>
            <router-view />
        </v-main>
      </v-layout>
    </v-card>
  </template>

<script>
export default {
  name: 'Home',
  data(){
    return {
    }
  },
}
</script>