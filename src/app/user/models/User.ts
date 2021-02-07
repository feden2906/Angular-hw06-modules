import {Address} from './Address';
import {Company} from './Company';

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: number;
  website: string;
  company: Company;
}



