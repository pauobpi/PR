import User from './User';

export default class App {

    constructor(){
        this.user = new User(); 
    }

    // 1.1 User
    //-------------------------------------------------
    signIn(email,password,username){
        return this.user.signIn(email,password,username);
    } 

    userLogOut(){
        this.user.logOut();  
    }

    getUsername(){
        this.user.getName();  
    }

}  