import { Injectable , EventEmitter} from "@angular/core";

@Injectable()

export class DataService {

    customer = { //user info storage

   firstName: "",
    lastName:"",
    beverage: ""
    }

    //Key '1' is used because we have only one user and adding another person is only possible after :right to be forgoten 

    customerName:string;
    strObj:string;
    toggleList:boolean;
    // objStr:Object;
    checkUserExistence(){ //check if anyuser exist in local storage
     
       return (localStorage.getItem('1') !== null) ? false : true;
    }

    userNameReg(firstName:string,lastname:string){ //setfirstName and lastname in local storage
        this.customerName =   this.customer.lastName=lastname;
        this.customer.firstName=name; 

        localStorage.setItem('1',  this.customerName)
    }

    beverageOrder(bev:string){ //add beverage into customer object to complete the user info and overwrite it with previous item with same key
        this.customer.beverage = bev;
        const str = JSON.stringify(this.customer);
        this.strObj = str;
        localStorage.setItem('1', str)
        //console.log(str)
    }

    getUserName(){ //getting user LastfirstName for display in the dialogue and what not
       const retStr = localStorage.getItem('1');
       this.customer = JSON.parse(retStr);
      // console.log(this.customer.name);
       return this.customer.lastName;
    }

    getUsualBev(){ // returns the saved beverage and toggle is used for extra fanciness
        this.toggleList = true;
        return this.customer.beverage;
        
    }
    removeUser(){ // clears the local storage and refreshed the page for a fresh start Howdy!!!
        localStorage.clear()
        location.reload();
    }

}