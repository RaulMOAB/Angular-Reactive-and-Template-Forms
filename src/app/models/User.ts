export class User{
     #username!:string
     #password!:string
     #repeat_password!:string
     #email!:string
     #civil_status!:any
     #gender!:any
     #information!:any



    construct(username:string, password:string, repeat_password:string, email:string, civil_status:any, gender:any, information:any){
        this.#username = username;
        this.#password = password;
        this.#repeat_password = repeat_password;
        this.#email = email;
        this.#civil_status = civil_status;
        this.#gender = gender;
        this.#information = information;
    }

    //getters and setters

}