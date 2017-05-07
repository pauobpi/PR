<template>
    <div>
        <modalCo class="modal" :modal="modal" :class="{ active: activeModal }"></modalCo>
        <headerCo></headerCo>
        <menuCo :active="'org'"></menuCo>
        <div class="content categories">
            <div class="content--white">
                <h1 class="h2">Organitzar despeses</h1>
                <p class="spend-list__new-spend btn--blue" v-on:click="loadModal('organize')">Nova categoria</p>
                <ul class="spend-list">
                    <li class="spend-list__li" v-for="li in list" :class="{ active: li.active }" v-on:click="thisList(li.text)">{{ li.text }}</li>
                </ul>
                <ul class="spend">
                    <li class="spend__li">
                        <h3 class="spend__h3">Motocicleta</h3>
                        <p class="spend__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <label class="spend__data">11.03.2017</label>
                        <span class="spend__money">1.450€</span>
                    </li>
                    <li class="spend__li">
                        <h3 class="spend__h3">Cotxe </h3>
                        <p class="spend__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim culpa corrupti </p>
                        <label class="spend__data">03.02.2017</label>
                        <span class="spend__money">6.120€</span>
                    </li>
                    <li class="spend__li">
                        <h3 class="spend__h3">Lavadora</h3>
                        <p class="spend__info">Concepte tal</p>
                        <label class="spend__data">31.12.2016</label>
                        <span class="spend__money">160€</span>
                    </li>
                    <li class="spend__li">
                        <h3 class="spend__h3">Secadora</h3>
                        <p class="spend__info">Concepte tal</p>
                        <label class="spend__data">15.12.2016</label>
                        <span class="spend__money">240€</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>

    import { app } from '../proxy';
    import menuCo from '../components/menu.vue';
    import headerCo from '../components/header.vue';
    import modalCo from '../components/modal.vue';

    export default {
        data () {
            return {
               modal:'',
               activeModal: false,
               list: [
                    { text: 'Casa', active:true },
                    { text: 'Familia', active:false },
                    { text: 'Treball', active:false }
               ]
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
            thisList(list){
                this.list.forEach(function(element) {
                    if(element.text === list){
                        element.active = true;
                    }else{
                        element.active = false;
                    }
                });
            },
            createCategory(newCat){
                this.list.push( { text: newCat, active:false } );
                this.activeModal = false;
            }
        },
        components:{
            menuCo,
            headerCo,
            modalCo
        }
    }

</script>