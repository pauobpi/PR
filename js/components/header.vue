<template>
    <div>
        <header class="header">
            <a href="/#/organize" class="header__logo"></a>
            <ul class="header__submenu">
                <li class="submenu__avatar"><span class="fa fa-user"></span></li>
                <li class="submenu__add btn--red" v-on:click="activeModal"><span class="fa fa-plus"></span>Afegir</li>
                <li class="submenu__search">
                    <span class="fa fa-search"></span>
                    <input class="input" type="text" placeholder="Cercar moviments" v-model="movments">
                    <ul class="submenu__autocomplete" :class="{active:activeList}">
                        <li class="autocomplete__list"><strong>{{ movments }}</strong>Ingrés 1</li>
                        <li class="autocomplete__list">Ingr<strong>{{ movments }}</strong>és 2</li>
                        <li class="autocomplete__list">Ingrés 3<strong>{{ movments }}</strong></li>
                    </ul>
                </li>
            </ul>
        </header>
    </div>
</template>

<script>
    import { app } from '../proxy';
    export default {
        data () {
            return {
                avatar: app.userGetName(),
                movments: '',
                activeList: false
            }
        },
        methods:{
            activeModal(){
                this.$parent.loadModal('spend');
            }
        },
        watch:{
            movments(){
                if(this.movments.length >= 3){
                     this.activeList = true;
                }else{
                    this.activeList = false;
                }
            }
        }

    }
</script>