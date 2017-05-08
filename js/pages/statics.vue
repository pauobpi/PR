<template>
    <div>
        <smsCo :sms="sms"></smsCo>
        <modalCo class="modal" :modal="modal" :class="{ active: activeModal }"></modalCo>
        <headerCo></headerCo>
        <menuCo :active="'finan'"></menuCo>
        <div class="content">
            <div class="content--white">
                <h1 class="h2">Informació financera</h1>
                <ul class="info-finan">
                    <li v-for="li in list" :class="{ active: li.active }" class="col-3">
                        <span :class="li.color"></span>
                        <select class="select">
                            <option>Casa</option>
                            <option>Familia</option>
                            <option>Treball</option>
                        </select>
                    </li>
                    <span class="pluser" @click="activeSelects" :class="{ desactive: desactivePlus }"><i class="fa fa-plus"></i></span>
                </ul>
                <div class="grafic">
                    <img :src="image" alt="">
                </div>
            </div>
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
               activeModal: false,
               list: [
                    { color: 'opt--red',active: true},
                    { color: 'opt--blue',active: false},
                    { color: 'opt--yellow',active: false}
               ],
               desactivePlus: false,
               count: 0,
               image: 'img/art1.png'
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
            activeSelects(){
                let i = 0;
                this.list.forEach((el)=> {
                    if(el.active === false && i == 0){
                        el.active = true;
                        i = 1;
                        this.count++;
                        this.image = 'img/art'+(this.count+1)+'.png';
                    }
                });

                if(this.count === 2){
                    this.desactivePlus = true;
                }else{
                    this.desactivePlus = false;
                }
                i= 0;
            },
            createMovment(moovement){
                this.activeModal = false;
                this.sms = "El moviment "+moovement+", s'ha creat correctament";
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