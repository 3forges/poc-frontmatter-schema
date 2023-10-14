import {
    quicktype,
    InputData,
    jsonInputForTargetLanguage,
    JSONSchemaInput,
    FetchingJSONSchemaStore
} from "quicktype-core";

async function quicktypeJSON(targetLanguage: string, typeName: string, jsonString: any) {
    const jsonInput = jsonInputForTargetLanguage(targetLanguage);

    // We could add multiple samples for the same desired
    // type, or many sources for other types. Here we're
    // just making one type from one piece of sample JSON.
    await jsonInput.addSource({
        name: typeName,
        samples: [jsonString]
    });

    const inputData = new InputData();
    inputData.addInput(jsonInput);

    return await quicktype({
        inputData,
        lang: targetLanguage,
        outputFilename: `./src/examples/.quicktype.generated/quicktype.generated.ts`,
        inferEnums: false // that's how to force gnerate Arrayof string instead of an enum
    });
}

async function quicktypeJSONSchema(targetLanguage: string, typeName: string, jsonSchemaString: any) {
    const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore());

    // We could add multiple schemas for multiple types,
    // but here we're just making one type from JSON schema.
    await schemaInput.addSource({ name: typeName, schema: jsonSchemaString });

    const inputData = new InputData();
    inputData.addInput(schemaInput);

    return await quicktype({
        inputData,
        lang: targetLanguage
    });
}

async function runExample() {
    quicktypeJSONSchema.toString();
    const exampleJsonString = `
    {
        "name": "twain",
        "firstname": "twain",
        "age": 45,
        "voyages": [
            {
                "pays": "Égypte",
                "annee": "2014",
                "saison": "hiver",
                "dureeEnJours": 24
            },
            {
                "pays": "Égypte",
                "annee": "2014",
                "saison": "hiver",
                "dureeEnJours": 24
            }      
        ]
        
    }
    `
    const exampleJsonSchemaString = `
    {
        "$schema": "http://json-schema.org/draft-07/schema#",
        "$ref": "#/definitions/PestoBigIceCream",
        "definitions": {
          "PestoBigIceCream": {
            "type": "object",
            "properties": {
              "beautiful": {
                "type": "number",
                "const": 3.14128
              },
              "great": {
                "type": "boolean",
                "const": true
              },
              "awesome": {
                "type": "string"
              },
              "wonderful": {
                "type": "boolean"
              },
              "superdooper": {
                "type": "string",
                "const": "we don't need quotes to declare the interface"
              },
              "flavour": {
                "type": "string"
              },
              "price": {
                "type": "number",
                "const": 1.99
              },
              "stock": {
                "type": "null"
              },
              "ingredients": {
                "type": "array",
                "items": {
                  "$ref": "#/definitions/PestoIngredients"
                }
              }
            },
            "required": [
              "beautiful",
              "great",
              "awesome",
              "wonderful",
              "superdooper",
              "flavour",
              "price",
              "stock",
              "ingredients"
            ],
            "additionalProperties": false
          },
          "PestoIngredients": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string"
              },
              "address": {
                "type": "string"
              },
              "age": {
                "type": "number"
              },
              "first_purchase": {
                "type": "boolean"
              },
              "plan": {
                "type": "string",
                "enum": [
                  "STANDARD",
                  "BRONZE",
                  "SILVER",
                  "GOLD"
                ]
              }
            },
            "required": [
              "name",
              "address",
              "age",
              "first_purchase",
              "plan"
            ],
            "additionalProperties": false
          }
        }
      }
    `
    exampleJsonSchemaString + ``
    const { lines: tsPerson } = await quicktypeJSON("typescript", "Person", exampleJsonString);
    console.log(tsPerson.join("\n"));

    // const { lines: tsPerson2fromSchema } = await quicktypeJSONSchema("typescript", "PestoBigIceCream", exampleJsonSchemaString);
    // console.log(tsPerson2fromSchema.join("\n"));
    

    /*
    const { lines: swiftPerson } = await quicktypeJSON("swift", "Person", exampleJsonString);
    console.log(swiftPerson.join("\n"));

    const { lines: pythonPerson } = await quicktypeJSONSchema("python", "Person", exampleJsonString);
    console.log(pythonPerson.join("\n"));
    */
}

runExample();