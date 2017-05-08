<template>
    <div class="login--page login--group">
        <div class="login--cont col-6">
            <h3 class="h3">Registre d'usuari</h3>
            <p class="label subtitle">Enregistra't a la nostra aplicació</p>

            <ul class="login">
                <li>
                    <label class="label">Nom </label><p class="login__errors" :class="{ active: smsErrorUsername }"> · Cal un nom d'usuari</p>
                    <input class="input" type="text" v-model="username" placeholder="Nom complet">
                    
                </li>
                <li>
                    <label class="label">Email </label><p class="login__errors" :class="{ active: smsErrorEmail }"> · El mail ha de ser vàlid</p>
                    <input class="input" type="text" v-model="email" placeholder="elseuemail@exemple.com">
                    
                </li>
                <li>
                    <label class="label">Password </label><p class="login__errors" :class="{ active: smsErrorPass }"> ·Mínim 8 caràcters. Un d'ells, un nombre </p>
                    <input class="input" type="text" v-model="password" placeholder="Clau de pas">
                   
                </li>
                <li class="text--center" v-on:click="signIn">
                    <span class="btn--red">Registrar-se</span>
                </li>
            </ul>
        </div>
        <div class="col-6 image--login">
            
        </div>
    </div>
</template>

<script>

    import { app } from '../proxy';

    export default {
        data () {
            return {
                username: '',
                email: '',
                password: '',
                smsErrorPass: false,
                smsErrorEmail: false,
                smsErrorUsername: false
            }
        },
        methods: {
            signIn () {
                if(this.username != '' && this.email != '' && this.password != ''){
                    let errors = app.signIn(this.email,this.password);
                    this._catchErrors(errors);
                }else{
                    if(this.username == ''){
                        this.smsErrorUsername = true;
                    }
                    if(this.email == ''){
                        this.smsErrorEmail = true;
                    }
                    if(this.password == ''){
                        this.smsErrorPass = true;
                    }
                }
            },
            _catchErrors(errors){
                 if(errors){
                    this.smsErrorEmail = false;
                    this.smsErrorPass  = false;
                    this.smsErrorUsername = false;

                    errors.forEach((element)=>{
                        if(element == 'email'){
                            this.smsErrorEmail = true;
                        }
                        if(element == 'pass'){
                            this.smsErrorPass = true;
                        }
                    });

                    if(this.username == ''){
                        this.smsErrorUsername = true;
                    }
                }
            }
        }
    }

</script>