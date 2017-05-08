<template>
    <div>
        <modalCo class="modal" :modal="modal" :class="{ active: activeModal }"></modalCo>
        <headerCo></headerCo>
        <smsCo :sms="sms"></smsCo>
        <menuCo :active="'app'"></menuCo>
        <div class="content">
            <div class="content--white"></div>
        </div>
    </div>
</template>

<script>

    import { app } from '../proxy';
    import menuCo from '../components/menu.vue';
    import headerCo from '../components/header.vue';
    import modalCo from '../components/modal.vue';
    import smsCo from '../components/sms.vue';

    export default {
        data () {
            return {
               modal:'',
               activeModal: false
            }
        },
        methods:{
            loadModal(type){
                this.activeModal = true;
                this.modal = type;
            },
            cancelModal(){
                this.activeModal = false;
            },
            createMovement(){
                this.activeModal = false;
            }
        },
        components:{
            menuCo,
            headerCo,
            modalCo,
            smsCo
        }
    }

</script>