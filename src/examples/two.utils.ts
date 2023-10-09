import Ajv from "ajv";
import Fjs from "fluent-json-schema";

export default class Utils {
    static readonly ajvGrunt: Ajv = new Ajv();
    public static validate(jsondata: any, jsonschema: any): boolean {
        console.log(
            `# ----------------------------------------`
        );
        console.log(` jsondata :`, jsondata)
        console.log(` jsonschema :`, jsonschema)
        console.log(
            `# ----------------------------------------`
        );
        const isIcecreamDataValid = Utils.ajvGrunt.validate(jsondata, jsonschema);
        return isIcecreamDataValid;
    }
    public static generateSchema(jsondata: any): any {
        console.log(
            `# ----------------------------------------`
          );
        console.log(`>> GENERATING JSON SCHEMA`);
        console.log(
            `# ----------------------------------------`
        );
        console.log(` jsondata :`, jsondata)
        console.log(
            `# ----------------------------------------`
        );
        
        
        const iceCreamSchema = Fjs.object()
          .prop("flavour", Fjs.string().required())
          .prop("price", Fjs.number().required())
          .prop("stock", Fjs.number().required())
          // This method call returns the generated schema as an object.
          .valueOf();
        console.info(iceCreamSchema)
        return iceCreamSchema
    }
}

/**
 * This is the payload I will use for
 * creating a [PestoContentType]
 */
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
myPestoPayload.address = 'deux.'