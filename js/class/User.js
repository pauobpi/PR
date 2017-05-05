export default class User {

    constructor() {
        this.user = null;
    }

    // 1.1. Getters
    //-------------------------------------------------

        getName(){
            return this.user
        }

    // 1.2. Methods
    //-------------------------------------------------

        signIn(email, password, username) {
            let validateUser = this._validateUser(email,password);
            if(validateUser == true){
                this.user = [username,email];
                window.location = '/#/banc';
            }else{
                return validateUser;
            }
        }

        _validateUser(email,pass){
            let arrayListError = [];
            let testingEmail = this._testRegex(email,'email'); 
            let testingPass  = this._testRegex(pass,'pass');
            
            if(testingEmail && testingPass){
                return true;
            }else{ 
                if(!testingEmail){
                    arrayListError.push('email');
                }
                if(!testingPass){
                    arrayListError.push('pass');
                }
                return arrayListError;
            }
        }

        _testRegex(word,type){
            let re;

            if(type=="email"){
                 re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            }else if(type=="pass"){
                re = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            }

            return re.test(word);

        }
        
        logOut() {
            window.location = '/#/';
        }
}
