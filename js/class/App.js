import User from './User';

export default class App {

    constructor(){
        this.user = new User(); 
    }

    // 1.1 Login
    //-------------------------------------------------
    signIn(email,password,username){
        return this.user.signIn(email,password,username);
    } 

    userLogOut(){
        this.user.logOut();  
    }

    userGetName(){
         return this.user.getName();  
    }

    // 1.2 Banc
    //-------------------------------------------------
    bancValidation(card,month,year){
        return this.user.banc(card,month,year);  
    }

}  