export interface PestoIngredients {
  "name": string
  "address": string
  "age": number
  "first_purchase": boolean
  plan: PRICING_PLAN
}
enum PRICING_PLAN {
  STANDARD = "STANDARD",
  BRONZE = "BRONZE",
  SILVER = "SILVER",
  GOLD = "GOLD",
}
export interface PestoBigIceCream {
  beautiful: 3.14128
  great: true
  awesome: string
  wonderful: boolean
  superdooper: "we don't need quotes to declare the interface"
  "flavour": string
  "price": 1.99
  "stock": null
  "ingredients": PestoIngredients[]
}
export interface PestoBiggerIceCream {
  "flavour": string
  "price": 1.99
  "stock": null
  "ingredients": PestoIngredients[]
  "best_sales": { [key: string]: PestoBigIceCream } // will be turned into "additionalProperties" : we want to forbid additional propertie
}

/**
 * -----------------------------
 * Now real-world pesto examples
 * -----------------------------
 */

/**
 * Exemple 1: définition du type de contenu "Chaussure"
 */
export enum Monnaie {
  EUR = "EUR",
  USD = "USD",
  AUD = "AUD",
  CRO = "CRO",
}
export interface PestoPicture {
  uri: string;
}
enum PestoTaillePantalon {
  "t38" = "t38",
  "t39" = "t39",
  "t40" = "t40",
  "t41" = "t41",
  "t42" = "t42",
  "t43" = "t43",
  "t44" = "t44",
  "t45" = "t45",
  "t46" = "t46",
  "t47" = "t47",
  "t48" = "t48",
  "t49" = "t49",
  "t50" = "t50",
}
enum PestoTaille {
  "XXS" = "XXS",
  "XS" = "XS",
  "S" = "S",
  "M" = "M",
  "L" = "L",
  "XL" = "XL",
  "XXL" = "XXL",
  "XXXL" = "XXXL",
}
enum PestoPointure {
  "p21" = "21",
  "p22" = "21",
  "p23" = "21",
  "p24" = "21",
  "p25" = "21",
  "p26" = "21",
  "p27" = "21",
  "p28" = "21",
  "p29" = "21",
  "p30" = "31",
  "p31" = "21",
  "p32" = "32",
  "p33" = "33",
  "p34" = "34",
  "p35" = "35",
  "p36" = "36",
  "p37" = "37",
  "p38" = "38",
  "p39" = "39",
  "p40" = "40",
  "p41" = "41",
  "p42" = "42",
  "p43" = "43",
  "p44" = "44",
  "p45" = "45",
  "p46" = "46",
  "p47" = "47",
  "p48" = "48",
  "p49" = "49",
  "p50" = "50",
  "p51" = "51",
  
}
export interface PestoChaussure {
  prix: number
  pointure: PestoPointure;
  titre: string
  marque: string
  monnaie: Monnaie
  description: string
  categories: string[]
  pictures: PestoPicture[]
}


/**
 * Exemple 2: définition du type de contenu "Pantalon"
 */

export interface PestoPantalon {
  denommination: string
  taille: PestoTaillePantalon
  prix: number
  marque: string
  monnaie: Monnaie
  description: string
  categories: string[]
  pictures: PestoPicture[]
}

/**
 * Exemple 3: des T-shirts :
 * 
 */
export interface PestoTshirt {
  denommination: string
  taille: PestoTaille
  prix: number
  marque: string
  monnaie: Monnaie
  description: string
  categories: string[]
  pictures: PestoPicture[]
}

