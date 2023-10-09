export interface PestoIngredients {
  "name": string;
  "address": string;
  "age": number;
  "first_purchase": boolean;
  plan: PRICING_PLAN;
}
enum PRICING_PLAN {
  STANDARD = "STANDARD",
  BRONZE = "BRONZE",
  SILVER = "SILVER",
  GOLD = "GOLD",
}
export interface PestoBigIceCream {
  beautiful: 3.14128;
  great: true;
  awesome: string;
  wonderful: boolean;
  superdooper: "we don't need quotes to declare the interface";
  "flavour": string;
  "price": 1.99;
  "stock": null;
  "ingredients": PestoIngredients[];
}
export interface PestoBiggerIceCream {
  "flavour": string;
  "price": 1.99;
  "stock": null;
  "ingredients": PestoIngredients[];
  "best_sales": { [key: string]: PestoBigIceCream } // will be turned into "additionalProperties" : we want to forbid additional properties
}