export class address {
    public addressId: string;
    public district: string;
    public pinCode: string;
    public state: string;
    public stateCode: string;
    public street: string;
    public createdTimestamp: string;
    public createdUserId: number;
    public modifiedTimestamp: string;
    public modifiedUserId: number;

    constructor(addressId: string,
        district: string,
        pinCode: string,
        state: string,
        stateCode: string,
        street: string,
        createdTimestamp: string,
        createdUserId: number,
        modifiedTimestamp: string,
        modifiedUserId: number) {

        this.addressId = addressId;
        this.district = district;
        this.pinCode = pinCode;
        this.state = state;
        this.stateCode = stateCode;
        this.street = street;
        this.createdTimestamp = createdTimestamp;
        this.createdUserId = createdUserId;
        this.modifiedTimestamp = modifiedTimestamp;
        this.modifiedUserId = modifiedUserId;

    }
}