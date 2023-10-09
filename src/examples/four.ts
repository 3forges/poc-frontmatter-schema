import toJsonSchema from 'to-json-schema'
console.log(
    `# ----------------------------------------`
  );
  console.log(`>> FOUR: GENERATING JSON SCHEMA FROM JSON`);
  console.log(
    `# ----------------------------------------`
  );
const obj: any = { some: { object: true } };


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


const generatedSchemaObj1 = toJsonSchema(myPestoPayload);
const generatedSchemaObj2 = toJsonSchema(obj);

console.log(`Generated Schema for [myPestoPayload] : `, generatedSchemaObj1)
console.log(`Generated Schema for [obj] : `, generatedSchemaObj2)
