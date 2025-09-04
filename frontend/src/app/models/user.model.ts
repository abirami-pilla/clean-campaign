export interface User {
  id?: string;
  name: string;
  email: string;
  age: number;
  location: string;
  campaignName: string;
  phoneNumber?: string;
  dateRegistered?: Date;
}