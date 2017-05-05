<template>
    <ul class="login">
        <li><input type="text" v-model="email" placeholder="Email"></li>
        <li><input type="text"  v-model="password" placeholder="password"></li>
        <li v-on:click="next">Login</li>
    </ul>
</template>

<script>
    import { app } from '../proxy';
    
    export default {
        data () {
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            next () {
                
            }
        }
    }

</script>