const exampleInstance1:any = {
  "flavour": "Pistachio",
  "price": 1.99,
  "stock": null,
  "ingredients": [
    {
      "name": "Bernard",
      "address": "1, Avenue des Champs Élysées, 75008 Paris",
      "age": 48,
      "first_purchase": false
    },
    {
      "name": "Michel",
      "address": "2, Avenue des Champs Élysées, 75008 Paris",
      "age": 45,
      "first_purchase": true
    }
  ]
}
exampleInstance1.address = ""
export default interface PestoIngredients {
  "name": string;
  "address": string;
  "age": number;
  "first_purchase": boolean;
}
export default interface PestoBigIceCream {
  "flavour": string;
  "price": 1.99;
  "stock": null;
  "ingredients": PestoIngredients[];
}