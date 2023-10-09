import * as tsj from 'ts-json-schema-generator'
import * as fs from 'fs';
// my-constructor-parser.ts
import { SubNodeParser } from "ts-json-schema-generator";
// use typescript exported by TJS to avoid version conflict
/////////import ts from "ts-json-schema-generator";
import { createProgram, createParser, SchemaGenerator, createFormatter } from "ts-json-schema-generator";



console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);


console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`>> FIVE: GENERATING JSON SCHEMA FROM JSON FILES`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);


/** @type {import('ts-json-schema-generator/dist/src/Config').Config} */
const config = {
    path: "./.tests_assets/bigIceCreamData.ts",
    tsconfig: "./.tests_assets/tsconfig.json",
    type: "PestoBigIceCream", // Or <type-name> if you want to generate schema for that one type only
};

const output_path = "./.tests_assets/bigIceCreamData.Schema.json";
// tsj.DEFAULT_CONFIG
const schema = tsj.createGenerator(config).createSchema(config.type);
const schemaString = JSON.stringify(schema, null, 2);
console.log(`# ----------------------------------------`);
console.log(`    >> FIVE: `);
console.log(` - schema : `, schema)
console.log(` - schemaString : `, schemaString)
console.log(`# ----------------------------------------`);

try {
    fs.writeFileSync(output_path, schemaString);
    console.log(` SCHEMA GENERATED: ${output_path}`)
} catch (error) {
    console.log(error)
}

const config2 = {
    path: "./.tests_assets/bigIceCreamData.ts",
    tsconfig: "./.tests_assets/tsconfig.json",
    type: "PestoBiggerIceCream", // Or <type-name> if you want to generate schema for that one type only
};
const schema2 = tsj.createGenerator(config2).createSchema(config2.type);
const schemaString2 = JSON.stringify(schema2, null, 2);
console.log(`# ----------------------------------------`);
console.log(`    >> FIVE: `);
console.log(` - schema2 : `, schema2)
console.log(` - schemaString2 : `, schemaString2)
console.log(`# ----------------------------------------`);
const output_path2 = "./.tests_assets/biggerIceCream.Schema.json";
try {
    fs.writeFileSync(output_path2, schemaString2);
    console.log(` SCHEMA GENERATED: ${output_path2}`)
} catch (error) {
    console.log(error)
}




console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ------- CUSTOM PARSER `);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);
console.log(`# ----------------------------------------`);

class PestoType implements tsj.BaseType {
    getId(): string {
        return "pesto";
    }
    getName(): string {
        return "pesto";
    }

}

class PestoConstructorParser implements SubNodeParser {
    supportsNode(node: tsj.ts.Node): boolean {
        console.log(` [PestoConstructorParser#supportsNode] node.getChildren().length`, node.getChildren().length )
        // return node.kind === tsj.ts.SyntaxKind.ConstructorType;
        return true;
    }

    createType(node: tsj.ts.Node, context: tsj.Context, reference?: tsj.ReferenceType | undefined): tsj.BaseType {
        // console.log(` [PestoConstructorParser#supportsNode] node`, node )
        console.log(` [PestoConstructorParser#supportsNode] context.getArguments()`, context.getArguments() )
        console.log(` [PestoConstructorParser#supportsNode] reference?.getName()`, reference?.getName() )
        console.log(` >>>>>>>> [PestoConstructorParser#supportsNode] node.getSourceFile() :`, node.getSourceFile() )
        console.log(` >>>>>>>> [PestoConstructorParser#supportsNode] node.getChildAt(0) :`, node.getChildAt(0) )
        console.log(` >>>>>>>> [PestoConstructorParser#supportsNode] node.getChildCount() :`, node.getChildCount() )
        console.log(` >>>>>>>> [PestoConstructorParser#supportsNode] node.getChildren().length :`, node.getChildren().length )
        console.log(` >>>>>>>> [PestoConstructorParser#supportsNode] node.getText() :`, node.getText() )
        
        let toReturn: tsj.BaseType;
        // throw new Error("DEBUG POINT");
        if (node.getText() == "null") {
            toReturn = new PestoType();
        } else {
            toReturn = new tsj.StringType();
        }
        // return new StringType(); // Treat constructors as strings in this example
        return toReturn;
    }

}

const configZ: any = {
    path: "./.tests_assets/bigIceCreamData.ts",
    tsconfig: "./.tests_assets/tsconfig.json",
    type: "PestoBigIceCream", // Or <type-name> if you want to generate schema for that one type only
};

const program = createProgram(configZ);

// We configure the parser an add our custom parser to it.
const parser = createParser(program, configZ, (prs) => {
    prs.addNodeParser(new PestoConstructorParser()); // Unfortunately, it seems my custom parser is not used...
});

const formatter = createFormatter(configZ);
const generator = new SchemaGenerator(program, parser, formatter, configZ);
const schemaZ = generator.createSchema(configZ.type);
const output_pathZ = `./.tests_assets/bigIceCreamData.PestoFormatter.Schema.json`
const schemaStringZ = JSON.stringify(schemaZ, null, 2);
try {
    fs.writeFileSync(output_pathZ, schemaStringZ);
    console.log(` SCHEMA GENERATED: ${output_pathZ}`)
} catch (error) {
    console.error(error)
}