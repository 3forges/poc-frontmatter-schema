import toJsonSchema from "to-json-schema";
import * as fs from 'fs';

console.log(`# ----------------------------------------`);
console.log(`>> FOUR: GENERATING JSON SCHEMA FROM JSON`);
console.log(`# ----------------------------------------`);

const objToBeConverted = {
  name: "David",
  rank: 7,
  born: "1990-04-05T15:09:56.704Z",
  luckyNumbers: [7, 77, 5],
};
const objToBeConverted2 = {
    name: "David",
    rank: 7,
    born: "1990-04-05T15:09:56.704Z",
    luckyNumbers: ["7", "77", "5"],
  };
  
const obj: any = { some: { thing: true } };

const myPestoPayload: any = {
  model: {
    flavour: "Pistachio", // will have type [string]
    price: 1.99, // will have type [number]
    stock: null, // will have type [number]
    type: "icecream",
    text: "",
    picture: "",
  },
  required: {
    flavour: "Pistachio", // will be required
    price: 1.99, // will be required
    stock: null, // will be required
    type: "icecream",
  },
};

const bigIceCreamData = {
  flavour: "Pistachio",
  price: 1.99,
  stock: null,
  ingredients: [
    {
      name: "Bernard",
      address: "1, Avenue des Champs Élysées, 75008 Paris",
      age: 48,
      first_purchase: false,
    },
    {
      name: "Michel",
      address: "2, Avenue des Champs Élysées, 75008 Paris",
      age: 45,
      first_purchase: true,
    },
  ],
};

const generatedSchemaObj1 = toJsonSchema(myPestoPayload);
const generatedSchemaObj2 = toJsonSchema(obj);
const generatedSchemaObj3 = toJsonSchema(objToBeConverted);
const generatedSchemaObj4 = toJsonSchema(objToBeConverted2);
const generatedSchemaObj5 = toJsonSchema(bigIceCreamData);

console.log(`Generated Schema for [myPestoPayload] : `, generatedSchemaObj1);
console.log(`Generated Schema for [obj] : `, generatedSchemaObj2);
console.log(`Generated Schema for [objToBeConverted] : `, generatedSchemaObj3);
console.log(`Generated Schema for [objToBeConverted2] : `, generatedSchemaObj4);
console.log(`Generated Schema for [bigIceCreamData] : `, generatedSchemaObj5);

// const home_folder = fs.readFileSync('foo.txt','utf8');
const home_folder = `./.tests_assets`

/**
 * --- 
 * Writes all the JSON data above used for
 * tests, into JSON files inside the
 *  './.tests_assets'
 */

fs.writeFileSync(`${home_folder}/obj.json`, JSON.stringify(obj, null, 2));
fs.writeFileSync(`${home_folder}/objToBeConverted.json`, JSON.stringify(objToBeConverted, null, 2));
fs.writeFileSync(`${home_folder}/objToBeConverted2.json`, JSON.stringify(objToBeConverted2, null, 2));
fs.writeFileSync(`${home_folder}/myPestoPayload.json`, JSON.stringify(myPestoPayload, null, 2));
fs.writeFileSync(`${home_folder}/bigIceCreamData.json`, JSON.stringify(bigIceCreamData, null, 2));
