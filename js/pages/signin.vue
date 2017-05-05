<template>
    <div>
        <ul class="login">
            <li>
                <input type="text" v-model="username" placeholder="Nom complet">
                <p class="login__errors" :class="{ active: smsErrorUsername }">Cal un nom d'usuari</p>
            </li>
            <li>
                <input type="text" v-model="email" placeholder="Email">
                <p  class="login__errors" :class="{ active: smsErrorEmail }">El mail ha de ser vàlid</p>
            </li>
            <li>
                <input type="text" v-model="password" placeholder="password">
                <p  class="login__errors" :class="{ active: smsErrorPass }">La clau d'access ha de contindre minim 8 caràcters un dels quals un nombre </p>
            </li>
            <li v-on:click="signIn">Registrar-se</li> 
        </ul>  
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