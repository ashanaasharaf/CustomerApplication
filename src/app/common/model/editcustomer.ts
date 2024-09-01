export interface editCustomer{
    id:number;
    name:string;
    phone:string;
    email:string;
    website:string;
    username:string;
    company:Company;
    address:Address;
}

export interface Company{
    catchPhrase:string;
    name:string;
    bs:string;
}

export interface Address{
    street:string;
    city:string;
    zipcode:string;
    suite:string;
    geo:Geo;
}

export interface Geo{
    lat:string;
    lng:string;
}

