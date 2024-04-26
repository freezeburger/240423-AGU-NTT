/**
 * A Company user - not an application user.
 *
 *
 */
export interface User {
  id: string
  name: string
  username: string
  email: string
  address: DeliveryAddress
  phone: string
  website: string
  company: Company
}

/**
 * A physical address to convey parcel
 */
export interface DeliveryAddress {
  street: string
  suite: string
  city: string
  zipcode: string
  geo: Geo
}

export interface Geo {
  lat: string
  lng: string
}

export interface Company {
  name: string
  catchPhrase: string
  bs: string
}
