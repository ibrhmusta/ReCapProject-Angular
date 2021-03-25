export interface CarRental {
  rentalId?: number;
  carId: number;
  customerId: number;
  rentDate: Date;
  returnDate?: Date;
}
