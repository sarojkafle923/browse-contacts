export interface ContactDetails {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: AddressDetails;
  company: CompanyDetails;
}

interface AddressDetails {
  city: string;
  street: string;
  zipcode: string;
}

interface CompanyDetails {
  bs: string;
  catchPhrase: string;
  name: string;
}
