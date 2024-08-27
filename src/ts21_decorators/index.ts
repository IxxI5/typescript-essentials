// index.ts
// npm install reflect-metadata
// Decorators

// Importing necessary TypeScript metadata libraries
import "reflect-metadata";

// Class Decorator
function LogClass(constructor: Function) {
  console.log(`Class Decorator: ${constructor.name} is being created`);
}

// Method Decorator
function LogMethod(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  const originalMethod = descriptor.value;

  descriptor.value = function (...args: any[]) {
    console.log(
      `Method Decorator: ${propertyKey} method is being called with arguments: ${JSON.stringify(
        args
      )}`
    );
    return originalMethod.apply(this, args);
  };
}

// Property Decorator
function LogProperty(target: any, propertyKey: string) {
  let value = target[propertyKey];

  const getter = () => {
    console.log(
      `Property Decorator: Getting value of ${propertyKey}: ${value}`
    );
    return value;
  };

  const setter = (newValue: any) => {
    console.log(
      `Property Decorator: Setting value of ${propertyKey} to ${newValue}`
    );
    value = newValue;
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
    enumerable: true,
    configurable: true,
  });
}

// Parameter Decorator
function LogParameter(
  target: any,
  propertyKey: string,
  parameterIndex: number
) {
  const existingRequiredParameters: number[] =
    Reflect.getOwnMetadata("log_parameters", target, propertyKey) || [];

  existingRequiredParameters.push(parameterIndex);
  Reflect.defineMetadata(
    "log_parameters",
    existingRequiredParameters,
    target,
    propertyKey
  );
}

// Applying all the decorators to a class and its members
@LogClass
class Person {
  @LogProperty
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  @LogMethod
  greet(@LogParameter message: string): string {
    return `Hello, ${this.name}! ${message}`;
  }
}

// Instantiating the class
const person = new Person("Alice");
console.log(person.greet("Welcome to TypeScript Decorators!"));

/** Output:
 *  Class Decorator: Person is being created
    Property Decorator: Setting value of name to Alice
    Method Decorator: greet method is being called with arguments: ["Welcome to TypeScript Decorators!"]
    Property Decorator: Getting value of name: Alice
    Hello, Alice! Welcome to TypeScript Decorators!
 */

/*
Explanation:

1. **Class Decorator (`LogClass`)**:
   - A class decorator is a function that gets called with the class constructor as its argument. In this example, `LogClass` logs a message when the class `Person` is created. It simply logs the name of the class being instantiated.

2. **Method Decorator (`LogMethod`)**:
   - A method decorator is applied to a method definition within a class. It receives three arguments: the target (the class prototype for instance methods), the property key (method name), and the property descriptor. The example `LogMethod` decorator wraps the original method, logging its name and arguments before invoking the original method.

3. **Property Decorator (`LogProperty`)**:
   - A property decorator is applied to a class property. It receives the target (the class prototype for instance properties) and the property key (the property name) as arguments. In this example, `LogProperty` wraps the property with getter and setter methods to log every access and modification of the property.

4. **Parameter Decorator (`LogParameter`)**:
   - A parameter decorator is applied to a specific parameter in a method. It receives the target (either the class prototype or the class constructor for static methods), the property key (method name), and the parameter index as arguments. The `LogParameter` decorator in this example is used to log metadata about the parameter at runtime. This decorator doesn't directly affect the function's behavior but can be used in combination with reflection or metadata.

By running the above TypeScript code, you'll see logs corresponding to the class instantiation, property access/modifications, method invocations, and parameter logging as described in the decorators.
*/
