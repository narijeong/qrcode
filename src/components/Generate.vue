<template>
    <v-container class="fill-height pl-20 pr-20">
      <v-responsive class="d-flex align-center text-center fill-height">
        <!-- <v-img
          contain
          height="150"
          src="@/assets/qrcode.png"
        /> -->
        <qrcode-vue :value="value" :size="size" level="H" />
  
        <div class="text-body-2 font-weight-light mb-n1">Generate</div>
  
        <h1 class="text-h4 font-weight-bold">QR CODE</h1>
  
        <div class="py-5" />
        <div class="pl-10 pr-10">
        <v-textarea label="Description" variant="outlined"></v-textarea>
        <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="URL"
            required
            outlined
          ></v-text-field>
          </div>
  
        <v-row class="d-flex align-center justify-center">
          <v-col cols="auto">
            <v-btn
              href="https://next.vuetifyjs.com/components/all/"
              min-width="164"
              rel="noopener noreferrer"
              target="_blank"
              variant="text"
            >
              <v-icon
                icon="mdi-view-dashboard"
                size="large"
                start
              />
  
              Components
            </v-btn>
          </v-col>
          
  
          <v-col cols="auto">
            <v-btn
              color="primary"
              href="https://next.vuetifyjs.com/introduction/why-vuetify/#feature-guides"
              min-width="228"
              rel="noopener noreferrer"
              size="x-large"
              target="_blank"
              variant="flat"
            >
              <v-icon
                icon="mdi-speedometer"
                size="large"
                start
              />
  
              Generate
            </v-btn>
          </v-col>
          <div id="reader" width="600px"></div>

          <v-col cols="auto">
            <v-btn
              href="https://community.vuetifyjs.com/"
              min-width="164"
              rel="noopener noreferrer"
              target="_blank"
              variant="text"
            >
              <v-icon
                icon="mdi-account-group"
                size="large"
                start
              />
  
              Community
            </v-btn>
          </v-col>
        </v-row>
      </v-responsive>
    </v-container>

  </template>
  
  <script>

    //
import QrcodeVue from 'qrcode.vue'

export default {
    data() {
        return {
            value: "https://example.com",
            size: 300,
        };
    },
    methods: {
        onScan(decodedText, decodedResult) {
            // handle the message here :)
        },
    },
    components: { QrcodeVue },
    mounted() {
        this.onScan('test', 'test')
    }
    
}
  </script>
  