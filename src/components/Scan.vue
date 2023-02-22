<template>
    <QRCodeScanner
    :qrbox="250" 
    :fps="10" 
    style="width: 500px;"
    @result="onScan"
  />
</template>

<script>
import QRCodeScanner from './QRCodeScanner.vue';

export default {
    data() {
        return {
            value: "https://example.com",
            size: 300,
        };
    },
    methods: {
        onScan(decodedText, decodedResult) {
            console.log('scanned succesful')
        },
    },
    components: { QRCodeScanner },
    mounted() {
        this.onScan('test', 'test')
    }
}
</script>