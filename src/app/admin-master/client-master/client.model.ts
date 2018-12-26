import { address } from '../client-address-master/address.model';


export class Client {
    public contactPersonName: string;
    public contactPersonNumber: string;
    public description: string;
    public GSTIN: string;
    public id: string;
    public createdTimestamp: string; F
    public createdUserId: number;
    public modifiedTimestamp: string;
    public modifiedUserId: number;
    public addressId: address;

    constructor(contactPersonName: string, contactPersonNumber: string, description: string, GSTIN: string,
        id: string, createdTimestamp: string, createdUserId: number, modifiedTimestamp: string,
        modifiedUserId: number, addressId: address) {
        this.contactPersonName = contactPersonName;
        this.contactPersonNumber = contactPersonNumber;
        this.description = description;
        this.GSTIN = GSTIN;
        this.id = id;
        this.createdTimestamp = createdTimestamp;
        this.createdUserId = createdUserId;
        this.modifiedTimestamp = modifiedTimestamp;
        this.modifiedUserId = modifiedUserId;
        this.addressId = addressId;
    }

    
}