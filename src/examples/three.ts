import jsonSchemaGenerator from "json-schema-generator"
const obj: any = { some: { object: true } };

console.log(
    `# ----------------------------------------`
  );
  console.log(`>> THREE: GENERATING JSON SCHEMA FROM JSON`);
  console.log(
    `# ----------------------------------------`
  );
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


const generatedSchemaObj1 = jsonSchemaGenerator(myPestoPayload);
const generatedSchemaObj2 = jsonSchemaGenerator(obj);

console.log(`Generated Schema for [myPestoPayload] : `, generatedSchemaObj1)
console.log(`Generated Schema for [obj] : `, generatedSchemaObj2)
