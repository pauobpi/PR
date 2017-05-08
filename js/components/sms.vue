<template>
    <div class="sms" :class="{active: smsActive}">
        <p>{{ sms }}</p>
    </div>
</template>

<script>

    export default {
        data () {
            return {
                smsActive: false
            } 
        },
        props: ['sms'],
        watch:{
            sms(){
                this.smsActive = true;
            }
        }
    }
</script>