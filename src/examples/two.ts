
import S from "fluent-json-schema";
console.log(
    `# ----------------------------------------`
  );
console.log(`>> GENERATING JSON SCHEMA`);
console.log(
    `# ----------------------------------------`
);

const iceCreamSchema = S.object()
  .prop("flavour", S.string().required())
  .prop("price", S.number().required())
  .prop("stock", S.number().required())
  // This method call returns the generated schema as an object.
  .valueOf();
console.info(iceCreamSchema)