<template>
    <div>
        <div v-if="modal === 'spend'">
            <div class="modal--content">
                <h3 class="h3 text--center">Nou moviment</h3>
                <p class="label text--center col-12 subtitle">Introdueix un nou moviment</p>
                <div class="plusorminus">
                    <ul>
                        <li class="col-12 text--center">
                            <input id="radio-ingres" type="radio" class="radio" name="minusplus" checked="checked"> 
                            <label for="radio-ingres">
                                <span class="fa fa-plus"></span> Ingrés
                            </label>
                            <input id="radio-despesa" type="radio" class="radio" name="minusplus"> 
                             <label for="radio-despesa">
                                <span class="fa fa-minus"></span> Despesa
                            </label>
                        </li>
                        <li class="col-12 import text--center">
                            <input type="text" class="input" maxlength="6" value="00">
                            <p>,</p>
                            <input type="text" class="input" maxlength="3" value="00">
                        </li>
                      
                        <li>
                            <label class="label">Concepte</label>
                            <input type="text" class="input" >
                        </li>
                         <li>
                            <label class="label">Afegir a categoria (opcional)</label>
                            <select class="select">
                                <option>Cap categioria</option>
                                <option>Casa</option>
                                <option>Familia</option>
                                <option>Feina</option>
                            </select>

                        </li>
                        <li class="col-12 text--center modal-btns">
                            <span class="btn--gray" v-on:click="cancelModal">Cancel·lar</span>
                            <span class="btn--red" v-on:click="link">Crear</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="modal--bg"></div>
        </div>
        <div v-if="modal === 'organize'">
            <div class="modal--content organize-modal">
                <h3 class="h3 text--center">Nova categoria</h3>
                <p class="label text--center col-12 subtitle">Introdueix uns nova categoria</p>
                <div class="plusorminus">
                    <ul>
                        <li>
                            <label class="label">Nom de la categoria</label>
                            <input type="text" class="input" v-model="category">
                        </li>
                        <li class="col-12 text--center modal-btns">
                            <span class="btn--gray" v-on:click="cancelModal">Cancel·lar</span>
                            <span class="btn--red" v-on:click="createCategory">Crear</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="modal--bg"></div>
        </div>
    </div>
</template>

<script> 
    export default {
        data () {
            return {
               category: ''
            } 
        },
        methods:{
            cancelModal(){
                this.$parent.cancelModal();
            },
            create(){
                this.$parent.create('text');
            },
            createCategory(){
                this.$parent.createCategory(this.category);
            }
        },
        props: ['modal']
    }
</script>