<template>
    <div>
        <smsCo :sms="sms"></smsCo>
        <modalCo class="modal" :modal="modal" :class="{ active: activeModal }"></modalCo>
        <headerCo></headerCo>
        <menuCo :active="'org'"></menuCo>
        <div class="content categories">
            <div class="content--white">
                <h1 class="h2">Organitzar despeses <i class="fa fa-info-circle"><div class="tooltip"><p>Arrossega la despesa a una altre categoria existent  utilitzant  <i class="fa fa-ellipsis-v"></i></p></div></i></h1>
                <p class="spend-list__new-spend " v-on:click="loadModal('organize')"><i class="fa fa-plus"></i>Nova categoria</p>
                <ul class="spend-list">
                    <li class="spend-list__li" v-for="li in list" :class="{ active: li.active }" v-on:click="thisList(li.text)">{{ li.text }}</li>
                </ul>
                <ul id="spender" class="spend">
                    <li class="spend__li ">
                        <span class="spend__handler fa fa-ellipsis-v"></span>
                        <h3 class="spend__h3">Motocicleta</h3>
                        <p class="spend__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <label class="spend__data">11.03.2017</label>
                        <span class="spend__money">1.450€</span>
                    </li>
                    <li class="spend__li">
                        <span class="spend__handler fa fa-ellipsis-v"></span>
                        <h3 class="spend__h3">Cotxe </h3>
                        <p class="spend__info">Creat el: 03.02.2017 </p>
                        <label class="spend__data">03.02.2017</label>
                        <span class="spend__money">6.120€</span>
                    </li>
                    <li class="spend__li">
                        <span class="spend__handler fa fa-ellipsis-v"></span>
                        <h3 class="spend__h3">Lavadora</h3>
                        <p class="spend__info">Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                        <label class="spend__data">31.12.2016</label>
                        <span class="spend__money">160€</span>
                    </li>
                    <li class="spend__li">
                        <span class="spend__handler fa fa-ellipsis-v">

                        </span>
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

    let $ = require('jquery');
	
	require('jquery-ui/ui/widgets/draggable');
	require('jquery-ui/ui/widgets/droppable');
	require('jquery-ui/ui/widgets/sortable');

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
                    { text: 'Casa', active:true },
                    { text: 'Familia', active:false },
                    { text: 'Treball', active:false }
               ],
               sms: null
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
        },
        mounted(){

                $('.categories .spend-list__li').droppable({ 
                    tolerance: "pointer",
                    drop: (event, ui) => {
                        console.log("llego");
                        $(ui.draggable).remove();
                    }
                });
      
                $('.categories .spend__li').draggable({
                    revert: true,
                    revertDuration: 0,
                    zIndex: 100,
                    handle: '.spend__handler',
                    tolerance: "pointer",
                    start:(event, ui) =>{
                        console.log("empiexo")
                        $('#sepender').addClass('ee'); 
                    }
                });  
            
        }
    }

</script>