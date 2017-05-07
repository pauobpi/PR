<template>
    <div class="login--page">
        <div class="col-6">
            dafds
        </div>
        <div class="login--cont col-6">
            <div class="login">
                <h3 class="h3">Compte bancàri</h3>
                <p class="label subtitle">Et donem la possibilitat d'enllaçar el teu compte bancàri</p>
                <ul>
                    <li>
                        <label class="label">Nom titular</label><p class="login__errors" :class="{ active: smsErrorNom }"> · Hi ha d'haver-hi un nom</p>
                        <input class="input" type="text" v-model="nom" placeholder="Nom tarjeta">
                        
                    </li>
                    <li>
                        <label class="label">Numero targeta</label><p  class="login__errors" :class="{ active: smsErrorTarjeta }"> · La targeta ha de ser vàlida</p>
                        <input class="input" type="text" v-model="tarjeta" placeholder="Numero tarjeta">
                
                    </li>
                    <li><h3 class="h4">Data caducitat</h3></li>
                    <li class="col-6">
                        
                        <div class="col-6">
                            <label class="label">Mes</label><p class="login__errors" :class="{ active: smsErrorMes }"> · Mes de caducitat</p>
                            <select class="select" v-model="mes">
                                <option selected="selected">01</option>
                                <option >02</option>
                                <option >03</option>
                                <option >04</option>
                                <option >05</option>
                                <option >06</option>
                                <option >07</option>
                                <option >08</option>
                                <option >09</option>
                                <option >10</option>
                                <option >11</option>
                                <option >12</option>
                            </select>
                        </div>
                        
                        <div class="col-6">
                            
                            <label class="label">any</label><p class="login__errors" :class="{ active: smsErrorAny }"> · Any de caducitat</p>
                            <select class="select" v-model="any">
                                <option selected="selected" >2017</option>
                                <option >2018</option>
                                <option>2019</option>
                                <option>2020</option>
                                <option>2021</option>
                                <option>2022</option>
                                <option>2023</option>
                                <option>2024</option>
                                <option>2025</option>
                            </select>

                        </div>
                    </li>
                    <li class="col-2">
                        <label class="label">Cvv</label> <p class="login__errors" :class="{ active: smsErrorCvv }"> · Cvv</p>
                        <input class="input" type="text" v-model="ccv" placeholder="Cvv" maxlength="3">
                        
                    </li>

                    <li class="col-12 text--center">
                        <span class="btn--gray" v-on:click="salt">Saltar aquest pas</span>
                        <span class="btn--red" v-on:click="link">Enllaçar</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
    import { app } from '../proxy';
    
    export default {
        data () {
            return {
                nom: '',
                tarjeta: '',
                mes: '01',
                any: '2017',
                ccv: '',
                smsErrorNom: '',
                smsErrorTarjeta: '',
                smsErrorMes: '',
                smsErrorAny: '',
                smsErrorCvv: ''
            }
        },
        methods: {
            link() {
                if(this.nom != '' && this.tarjeta != '' && this.mes != '' && this.any != '' && this.ccv != ''){
                    let errors = app.bancValidation(this.tarjeta,this.mes,this.any);
                    this._catchErrors(errors);
                }else{
                    if(this.nom == ''){
                        this.smsErrorNom = true;
                    }
                    if(this.tarjeta == ''){
                        this.smsErrorTarjeta = true;
                    }
                    if(this.mes == ''){
                        this.smsErrorMes = true;
                    }
                    if(this.any == ''){
                        this.smsErrorAny = true;
                    }
                    if(this.ccv == ''){
                        this.smsErrorCvv = true;
                    }
                }
            },
            salt(){
                 window.location = '/#/app';
            },
            _catchErrors(errors){
                 if(errors){
                    this.smsErrorNom = false; 
                    this.smsErrorTarjeta = false;
                    this.smsErrorMes = false;
                    this.smsErrorAny = false;
                    this.smsErrorCvv = false;

                    errors.forEach((element)=>{
                        if(element == 'card'){
                            this.smsErrorTarjeta = true;
                        }
                    });

                    if(this.nom == ''){
                        this.smsErrorNom = true;
                    }
                }
            }
        }
    }

</script>