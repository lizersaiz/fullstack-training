import { Shape } from "./Shape";

export class Rectangle extends Shape{

    constructor(theX: number, theY: number,
        private _lenght: number,
        private _widht: number){
        super(theX, theY);
    }

    public get lenght(): number {
        return this._lenght;
    }
    public set lenght(value: number) {
        this._lenght = value;
    }         

    public get widht(): number {
        return this._widht;
    }
    public set widht(value: number) {
        this._widht = value;
    }

    getInfo(): string{
        return super.getInfo() + 
                ` Lenght=${this.lenght} Width=${this.widht}`;
    }

    calculateArea(): number {
        return this._lenght * this._lenght;
    }
}