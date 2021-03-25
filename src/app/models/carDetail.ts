export interface CarDetail{
    carID:number;
    brandID:number;
    colorID:number;
    brandName:string;
    colorName:string;
    brandModel:string;
    modelYear:number;
    dailyPrice:number;
    description:string;
    imagePath:string[];
    isRentable:boolean;
}