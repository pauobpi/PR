export default class User {

    constructor() {
        this.user = null;
    }

    // 1.1. Getters
    //-------------------------------------------------

        getName(){
            return this.user;
        }

    // 1.2. Methods
    //-------------------------------------------------

        signIn(email, password, username) {
            let validateUser = this._validateUser(email,password);
            if(validateUser == true){
                this.user = [username];
                window.location = '/#/banc';
            }else{
                return validateUser;
            }
        }

        banc(card,month,year){
            let validateBanc = this._validateBanc(card,month,year);
          
            if(validateBanc == true){
                window.location = '/#/app';
            }else{
                return validateBanc;
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

        _validateBanc(card,month,year){
            let arrayListError = [];
            let testingCard = this._testRegex(card,'card');
            
            if(testingCard){
                return true;
            }else{ 
                if(!testingCard){
                    arrayListError.push('card');
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
            } else if(type="card"){
                re = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/;
            }

            return re.test(word);

        }
        
        logOut() {
            window.location = '/#/';
        }
}
