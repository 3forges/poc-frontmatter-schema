import Ajv from "ajv";

console.log(
  `# ----------------------------------------`
);
console.log(`>> VALIDATING AGAINST JSON SCHEMA`);
console.log(
  `# ----------------------------------------`
);

console.info(`Welcome to the frontmatter POC!`);

const iceCreamSchema = {
  type: "object",
  properties: {
    flavour: { type: "string" },
    price: { type: "number" },
    stock: { type: "number" },
  },
  required: ["flavour", "price", "stock"],
};

const iceCreamData = {
  flavour: "Pistachio",
  price: 1.99,
  stock: null,
  customers: [
    {
      name: "Bernard",
      address: "1, Avenue des Champs Élysées, 75008 Paris",
      age: 48,
      first_purchase: false
    },
    {
      name: "Michel",
      address: "2, Avenue des Champs Élysées, 75008 Paris",
      age: 45,
      first_purchase: true
    }
  ]
};

const ajv1 = new Ajv();

const isIcecreamDataValid = ajv1.validate(iceCreamSchema, iceCreamData);
console.log(
  `Is iceCreamData valid against its JSON Schema ? [${isIcecreamDataValid}]`
);

if (isIcecreamDataValid) {
  console.log("The ice cream data is valid! 🍨");
} else {
  console.error("The ice cream data is invalid:", ajv1.errors);
}
