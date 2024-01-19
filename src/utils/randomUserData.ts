// To parse this data:
//
//   import { Convert, RandomUserData } from "./file";
//
//   const randomUserData = Convert.toRandomUserData(json);

export type RandomUserData = {
  results: Result[]
  info: Info
}

export type Info = {
  seed: string
  results: number
  page: number
  version: string
}

export type Result = {
  gender: Gender
  name: Name
  location: Location
  email: string
  login: Login
  dob: Dob
  registered: Dob
  phone: string
  cell: string
  id: Id
  picture: Picture
  nat: string
}

export type Dob = {
  date: Date
  age: number
}

export type Gender = 'male' | 'female'

export type Id = {
  name: string
  value: null | string
}

export type Location = {
  street: Street
  city: string
  state: string
  country: string
  postcode: Postcode
  coordinates: Coordinates
  timezone: Timezone
}

export type Coordinates = {
  latitude: string
  longitude: string
}

export type Postcode = number | string

export type Street = {
  number: number
  name: string
}

export type Timezone = {
  offset: string
  description: string
}

export type Login = {
  uuid: string
  username: string
  password: string
  salt: string
  md5: string
  sha1: string
  sha256: string
}

export type Name = {
  title: Title
  first: string
  last: string
}

export type Title = 'Monsieur' | 'Mr' | 'Mrs' | 'Miss' | 'Ms' | 'Madame'

export type Picture = {
  large: string
  medium: string
  thumbnail: string
}

// Converts JSON strings to/from your types
export class Convert {
  public static toRandomUserData(json: string): RandomUserData {
    return JSON.parse(json)
  }

  public static randomUserDataToJson(value: RandomUserData): string {
    return JSON.stringify(value)
  }
}
