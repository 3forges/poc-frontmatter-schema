import toJsonSchema from 'to-json-schema'
console.log(
    `# ----------------------------------------`
  );
  console.log(`>> FOUR: GENERATING JSON SCHEMA FROM JSON`);
  console.log(
    `# ----------------------------------------`
  );

const objToBeConverted = {
    name: 'David',
    rank: 7,
    born: '1990-04-05T15:09:56.704Z',
    luckyNumbers: [7, 77, 5]
};
const obj: any = { some: { thing: true } };


const myPestoPayload: any = {
    model: {
        flavour: "Pistachio", // will have type [string]
        price: 1.99, // will have type [number]
        stock: null, // will have type [number]
        type: "icecream",
        text: "",
        picture: ""
      },
    required: {
        flavour: "Pistachio", // will be required
        price: 1.99, // will be required
        stock: null, // will be required
        type: "icecream"
    }
}

objToBeConverted
const generatedSchemaObj1 = toJsonSchema(myPestoPayload);
const generatedSchemaObj2 = toJsonSchema(obj);
const generatedSchemaObj3 = toJsonSchema(objToBeConverted);

console.log(`Generated Schema for [myPestoPayload] : `, generatedSchemaObj1)
console.log(`Generated Schema for [obj] : `, generatedSchemaObj2)
console.log(`Generated Schema for [objToBeConverted] : `, generatedSchemaObj3)
