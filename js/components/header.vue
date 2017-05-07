<template>
    <div>
        <header class="header">
            <a href="/#/app" class="header__logo"></a>
            <ul class="header__submenu">
                <li class="submenu__avatar"><span class="fa fa-user"></span></li>
                <li class="submenu__add btn--red" v-on:click="activeModal"><span class="fa fa-plus"></span>Afegir</li>
                <li class="submenu__search">
                    <span class="fa fa-search"></span>
                    <input class="input" type="text" placeholder="Cercar moviments">
                    <ul class="submenu__autocomplete">
                        <li class="autocomplete__list">Ingrés 1</li>
                        <li class="autocomplete__list">Ingrés 2</li>
                        <li class="autocomplete__list">Ingrés 3</li>
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
                avatar: app.userGetName()
            }
        },
        methods:{
            activeModal(){
                this.$parent.loadModal('spend');
            }
        }
    }
</script>