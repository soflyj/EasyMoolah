export class PersonalDetails {
    push(persondetails: PersonalDetails): any {
        throw new Error("Method not implemented.");
    }
    public id: number;
    public firstname: string;
    public lastname: string;
    public email: string;
    public mobilenumber: string;
    public landlinenumber: string;    

    constructor(id: number, firstname: string, lastname: string, email: string, 
        mobilenumber: string, landlinenumber: string) {
        this.id = id;
        this.firstname = firstname;
        this.lastname = lastname;
        this.email = email;
        this.mobilenumber = mobilenumber;
        this.landlinenumber = landlinenumber;
    }
}
