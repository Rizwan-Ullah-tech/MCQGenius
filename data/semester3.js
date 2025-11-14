const semester3Data = {
  semester: 3,
  name: "HDSE I (Semester 3)",
  booksBySession: {
    "Building Angular Applications with TypeScript": {
      "Session 1": [
        {
          question: "TypeScript is best described as:",
          options: ["A subset of JavaScript", "A server-side framework", "A superset of JavaScript", "A database management system"],
          correctAnswer: 2
        },
        {
          question: "What is the file extension for TypeScript files?",
          options: [".js", ".html", ".ts", ".css"],
          correctAnswer: 2
        },
        {
          question: "Which keyword in TypeScript is used to declare a block-scoped variable that cannot be reassigned?",
          options: ["var", "let", "const", "static"],
          correctAnswer: 2
        },
        {
          question: "Which loop in TypeScript is used to iterate over the property values of an iterable object like an array?",
          options: ["for loop", "for...in loop", "for...of loop", "while loop"],
          correctAnswer: 2
        },
        {
          question: "What feature in ES6/TypeScript allows for multi-line strings and variable substitution using back-ticks?",
          options: ["Destructuring", "Template Strings", "Fat Arrow Functions", "Modules"],
          correctAnswer: 1
        },
        {
          question: "The Map object in TypeScript is used to:",
          options: ["Store only keys, not key-value pairs.", "Map keys to values without the disadvantages of using Objects.", "Create a new array by applying a function to each element.", "Define a new class structure."],
          correctAnswer: 1
        }
      ],
      "Session 2": [
        {
          question: "Angular is primarily used for building:",
          options: ["Desktop applications only", "Single-page applications (SPAs)", "Server-side APIs", "Relational databases"],
          correctAnswer: 1
        },
        {
          question: "Which of the following is a key feature of Angular?",
          options: ["Single-threaded execution", "Two-way data binding", "No support for TypeScript", "Built-in SQL database"],
          correctAnswer: 1
        },
        {
          question: "Which Angular CLI command is used to create a new project?",
          options: ["ng generate", "ng serve", "ng new <project-name>", "ng build"],
          correctAnswer: 2
        },
        {
          question: "A major disadvantage of Angular is:",
          options: ["Excellent SEO support out-of-the-box", "Poor compatibility with legacy browsers", "Inability to build mobile apps", "Lack of cross-platform support"],
          correctAnswer: 1
        }
      ],
      "Session 3": [
        {
          question: "What are the main parts of an Angular component?",
          options: ["Model, View, Controller", "HTML template, Class, Metadata", "Service, Module, Directive", "Pipe, Guard, Interface"],
          correctAnswer: 1
        },
        {
          question: "Which property is used in the @Component decorator to link an external HTML file?",
          options: ["styles", "template", "templateUrl", "selector"],
          correctAnswer: 2
        },
        {
          question: "What is the default View Encapsulation type in Angular?",
          options: ["ViewEncapsulation.None", "ViewEncapsulation.Emulated", "ViewEncapsulation.ShadowDOM", "ViewEncapsulation.Native"],
          correctAnswer: 1
        },
        {
          question: "Which directive is used to insert content at runtime inside a component?",
          options: ["<ng-container>", "<ng-template>", "<ng-content>", "<ng-view>"],
          correctAnswer: 2
        },
        {
          question: "Which lifecycle hook is called once, after the component is initialized?",
          options: ["ngOnChanges", "ngOnInit", "ngAfterViewInit", "ngOnDestroy"],
          correctAnswer: 1
        }
      ],
      "Session 4": [
        {
          question: "How is data passed from a parent component to a child component?",
          options: ["Using @Output decorator", "Using @ViewChild decorator", "Using @Input decorator", "Using @ContentChild decorator"],
          correctAnswer: 2
        },
        {
          question: "Which TypeScript feature is used to define the structure of an object without providing an implementation?",
          options: ["Class", "Decorator", "Interface", "Module"],
          correctAnswer: 2
        },
        {
          question: "What does a Promise in JavaScript/TypeScript represent?",
          options: ["A placeholder for a future value", "A synchronous operation", "A type of loop", "A CSS styling technique"],
          correctAnswer: 0
        },
        {
          question: "Which type of data binding flows from the view template to the component class?",
          options: ["Property Binding", "String Interpolation", "Event Binding", "Two-way Data Binding"],
          correctAnswer: 2
        },
        {
          question: "Two-way data binding in Angular is a combination of:",
          options: ["Property Binding and String Interpolation", "Event Binding and String Interpolation", "Property Binding and Event Binding", "Attribute Binding and Class Binding"],
          correctAnswer: 2
        }
      ],
      "Session 5": [
        {
          question: "Which directive is used to add or remove an element from the DOM based on a condition?",
          options: ["*ngFor", "*ngIf", "ngStyle", "ngClass"],
          correctAnswer: 1
        },
        {
          question: "What is the purpose of the *ngFor directive?",
          options: ["To apply conditional styling", "To loop over an iterable and add elements to the DOM", "To handle form validation", "To create a service"],
          correctAnswer: 1
        },
        {
          question: "Which directive is an attribute directive used to add CSS classes dynamically?",
          options: ["*ngIf", "*ngFor", "ngClass", "ngSwitch"],
          correctAnswer: 2
        },
        {
          question: "Which decorator is used to listen to DOM events on the host element?",
          options: ["@HostBinding", "@ViewChild", "@HostListener", "@Input"],
          correctAnswer: 2
        },
        {
          question: "What is the purpose of the <ng-container> element?",
          options: ["To apply styles to a group of elements", "To create a structural directive", "To group elements without adding an extra element to the DOM", "To define a template for a component"],
          correctAnswer: 2
        }
      ],
      "Session 6": [
        {
          question: "What is the primary purpose of Dependency Injection (DI) in Angular?",
          options: ["To make code more flexible, testable, and mutable", "To improve SEO", "To handle CSS animations", "To create direct DOM manipulations"],
          correctAnswer: 0
        },
        {
          question: "Which HTTP verb is used to request data from a server?",
          options: ["POST", "PUT", "GET", "DELETE"],
          correctAnswer: 2
        },
        {
          question: "What is the role of an Injector in Angular?",
          options: ["To validate forms", "To create service instances and inject them into classes", "To compile TypeScript code", "To manage routing"],
          correctAnswer: 1
        },
        {
          question: "Which level of provider makes a service instance available to all components in a module?",
          options: ["@Injectable", "@Component", "@NgModel", "@NgModule"],
          correctAnswer: 3
        },
        {
          question: "How does a Promise differ from an Observable?",
          options: ["A Promise can handle multiple values over time, while an Observable cannot.", "An Observable can handle multiple values over time, while a Promise provides a single value.", "They are identical and can be used interchangeably.", "A Promise is used for CSS, while an Observable is for HTTP requests."],
          correctAnswer: 1
        }
      ],
      "Session 7": [
        {
          question: "What is the main purpose of an Angular Pipe?",
          options: ["To make HTTP requests", "To transform data before displaying it in the view", "To create new components", "To handle dependency injection"],
          correctAnswer: 1
        },
        {
          question: "Which built-in pipe is used to format a date?",
          options: ["uppercase", "currency", "date", "json"],
          correctAnswer: 2
        },
        {
          question: "Which form type in Angular uses two-way data binding and is created using directives in the template?",
          options: ["Reactive Forms", "Template-Driven Forms", "Model-Driven Forms", "Dynamic Forms"],
          correctAnswer: 1
        },
        {
          question: "In Reactive Forms, which method is used to set values for all form controls in a FormGroup?",
          options: ["patchValue()", "setValue()", "get()", "valueChanges()"],
          correctAnswer: 1
        },
        {
          question: "Which CSS class is applied by Angular when a form control's value is invalid?",
          options: ["ng-valid", "ng-invalid", "ng-pristine", "ng-dirty"],
          correctAnswer: 1
        }
      ],
      "Session 8": [
        {
          question: "What is the directive used in Angular to define where the routed views should be displayed?",
          options: ["<router-link>", "<a href>", "<router-outlet>", "<ng-route>"],
          correctAnswer: 2
        },
        {
          question: "What are Route Parameters used for?",
          options: ["To pass optional parameters like page numbers", "As dynamic, essential parts of the route definition", "To style the navigation bar", "To create service workers"],
          correctAnswer: 1
        },
        {
          question: "Which Route Guard is used to control whether a user can navigate away from the current route?",
          options: ["CanActivate", "CanDeactivate", "CanLoad", "Resolve"],
          correctAnswer: 1
        },
        {
          question: "What is the primary purpose of Authentication?",
          options: ["To grant permissions for specific actions", "To identify and verify a user", "To transform data", "To optimize performance"],
          correctAnswer: 1
        },
        {
          question: "Which technology is commonly used for secure authentication in modern web apps?",
          options: ["SOAP", "REST", "JSON Web Token (JWT)", "GraphQL"],
          correctAnswer: 2
        }
      ],
      "Session 9": [
        {
          question: "What is Angular Material?",
          options: ["A state management library", "A UI component library following Google's Material Design", "A testing framework", "A backend-as-a-service"],
          correctAnswer: 1
        },
        {
          question: "Which module must be imported to use Angular Material's button component?",
          options: ["MatCardModule", "MatButtonModule", "MatInputModule", "MatToolbarModule"],
          correctAnswer: 1
        },
        {
          question: "Which Angular Material component is used to wrap form controls like inputs and selects for consistent styling?",
          options: ["MatFormField", "MatContainer", "MatGrid", "MatWrapper"],
          correctAnswer: 0
        },
        {
          question: "In Angular Animations, which function defines the start and end states of an animation?",
          options: ["trigger", "state", "transition", "animate"],
          correctAnswer: 1
        },
        {
          question: "What is used to specify multiple intermediate styles during an animation transition?",
          options: ["group", "sequence", "keyframes", "query"],
          correctAnswer: 2
        }
      ]
    },
    "Developing Applications with C#": {
      "Session 1": [
        {
          question: "What is the .NET Framework?",
          options: ["An operating system", "A programming language", "A platform created by Microsoft for building applications", "A database management system"],
          correctAnswer: 2
        },
        {
          question: "Which of these is a core component of the .NET Framework that manages the execution of applications?",
          options: ["Framework Class Library (FCL)", "Common Language Runtime (CLR)", "Common Type System (CTS)", "Dynamic Language Runtime (DLR)"],
          correctAnswer: 1
        },
        {
          question: "What is the role of the Common Intermediate Language (CIL)?",
          options: ["To provide a set of base classes for I/O and string manipulation", "To act as the output code when a .NET language is compiled", "To enable interoperability of dynamic languages like Python", "To define the rules for cross-language integration"],
          correctAnswer: 1
        },
        {
          question: "Which of the following is a feature of .NET 7.0?",
          options: ["It is the last version of the .NET Framework.", "It only runs on Windows.", "It integrates tools like ASP.NET Core and Entity Framework Core.", "It does not support C# 10.0."],
          correctAnswer: 2
        },
        {
          question: "C# is an object-oriented language derived from which languages?",
          options: ["Java and Python", "C and C++", "Visual Basic and Java", "Ruby and Python"],
          correctAnswer: 1
        }
      ],
      "Session 2": [
        {
          question: "Which of the following is a valid variable name in C#?",
          options: ["4myClass", "static", "Employee_Name", "Student&Faculty"],
          correctAnswer: 2
        },
        {
          question: "What is the default value of an int variable when it is declared but not initialized?",
          options: ["null", "0", "1", "-1"],
          correctAnswer: 1
        },
        {
          question: "Which data type should you use for a variable that needs to store a single Unicode character?",
          options: ["string", "char", "byte", "bool"],
          correctAnswer: 1
        },
        {
          question: "What is the purpose of the const keyword?",
          options: ["To declare a variable that can be changed later.", "To declare a variable with a fixed, unchangeable value.", "To create a variable that is only accessible within a method.", "To make a variable accessible from other classes."],
          correctAnswer: 1
        },
        {
          question: "Which escape sequence is used to insert a new line in a string?",
          options: ["\\t", "\\n", "\\a", "\\\\"],
          correctAnswer: 1
        },
        {
          question: "The Console.ReadLine() method is used to:",
          options: ["Write a line of text to the console.", "Read a single character from the console.", "Read a line of text from the console.", "Clear the console screen."],
          correctAnswer: 2
        },
        {
          question: "Which operator has the highest precedence in C#?",
          options: ["* (Multiplication)", "++ (Increment)", "() (Parentheses)", "= (Assignment)"],
          correctAnswer: 2
        },
        {
          question: "What is the main purpose of top-level statements (introduced in C# 9.0)?",
          options: ["To force every program to have a Main method.", "To make programs simpler by omitting the Main method boilerplate.", "To allow multiple entry points in a program.", "To improve the performance of console applications."],
          correctAnswer: 1
        }
      ],
      "Session 3": [
        {
          question: "Which loop construct is guaranteed to execute at least once?",
          options: ["for loop", "while loop", "do-while loop", "foreach loop"],
          correctAnswer: 2
        },
        {
          question: "The break statement is used to:",
          options: ["Skip the current iteration of a loop and continue with the next.", "Exit the entire loop or switch statement.", "Transfer control to a labeled statement.", "Return a value from a method."],
          correctAnswer: 1
        },
        {
          question: "In C#, array indices start at:",
          options: ["0", "1", "-1", "It can be specified by the programmer."],
          correctAnswer: 0
        },
        {
          question: "What is a key characteristic of a jagged array?",
          options: ["It must be single-dimensional.", "It can have rows of different lengths.", "It can only store value types.", "It is always rectangular."],
          correctAnswer: 1
        },
        {
          question: "Which method of the Array class is used to sort the elements in a one-dimensional array?",
          options: ["Clear()", "CopyTo()", "Sort()", "Reverse()"],
          correctAnswer: 2
        }
      ],
      "Session 4": [
        {
          question: "What is a constructor?",
          options: ["A special method that has the same name as the class and is used to initialize objects.", "A method that is used to destroy objects and free memory.", "A method that is always declared as static.", "A method that can only be called from a static context."],
          correctAnswer: 0
        },
        {
          question: "Which keyword is used to create an instance of a class?",
          options: ["this", "new", "instance", "create"],
          correctAnswer: 1
        },
        {
          question: "A static method can be called:",
          options: ["Only using an object of the class.", "Without creating an instance of the class.", "Only from within another static method.", "Only from the Main method."],
          correctAnswer: 1
        },
        {
          question: "What is method overloading?",
          options: ["Redefining a method in a derived class.", "Creating multiple methods with the same name but different signatures.", "Making a method run faster.", "Using the override keyword in a method definition."],
          correctAnswer: 1
        },
        {
          question: "Which access modifier allows a member to be accessible only within its own class?",
          options: ["public", "private", "protected", "internal"],
          correctAnswer: 1
        }
      ],
      "Session 5": [
        {
          question: "What is the primary purpose of inheritance?",
          options: ["To hide the implementation details of a class.", "To create a new class from an existing class, promoting code reusability.", "To make all class members public.", "To execute a block of code repeatedly."],
          correctAnswer: 1
        },
        {
          question: "Which keyword is used to prevent a class from being inherited?",
          options: ["abstract", "sealed", "static", "private"],
          correctAnswer: 1
        },
        {
          question: "To override a method in a derived class, what keyword must be used in the base class method?",
          options: ["override", "virtual", "new", "abstract"],
          correctAnswer: 1
        },
        {
          question: "Polymorphism allows you to:",
          options: ["Create multiple classes with the same name.", "Invoke derived class methods through a base class reference.", "Inherit from multiple base classes.", "Make all methods in a class static."],
          correctAnswer: 1
        },
        {
          question: "The base keyword is used to:",
          options: ["Call the constructor of the base class.", "Create a new instance of the base class.", "Hide a member of the base class.", "Make a class abstract."],
          correctAnswer: 0
        }
      ],
      "Session 6": [
        {
          question: "An abstract class:",
          options: ["Cannot have any abstract methods.", "Can be instantiated directly.", "Can contain both implemented and abstract methods.", "Can only contain static members."],
          correctAnswer: 2
        },
        {
          question: "What is the main purpose of an interface?",
          options: ["To provide a complete implementation for a set of methods.", "To group related functionalities that must be implemented by a class.", "To create a sealed class.", "To allow multiple inheritances of implementation."],
          correctAnswer: 1
        },
        {
          question: "A class can implement:",
          options: ["Only one interface.", "Only one abstract class.", "Multiple interfaces.", "Both multiple abstract classes and multiple interfaces."],
          correctAnswer: 2
        },
        {
          question: "Which of the following is a key difference between an abstract class and an interface?",
          options: ["An abstract class can have constructors; an interface cannot.", "An interface can have method implementations; an abstract class cannot.", "An abstract class supports multiple inheritance; an interface does not.", "An interface can be sealed; an abstract class cannot."],
          correctAnswer: 0
        },
        {
          question: "The is operator is used to:",
          options: ["Check the compatibility of types.", "Create a new object.", "Cast an object to a different type.", "Define a static member."],
          correctAnswer: 0
        }
      ],
      "Session 7": [
        {
          question: "What is the primary purpose of a property in C#?",
          options: ["To replace all methods in a class.", "To provide a secure way to access and modify private fields.", "To create a new data type.", "To execute a block of code asynchronously."],
          correctAnswer: 1
        },
        {
          question: "An auto-implemented property:",
          options: ["Must explicitly define a private backing field.", "Is declared without get and set accessors.", "Is created by the compiler, which generates the backing field and accessors.", "Can only be used in abstract classes."],
          correctAnswer: 2
        },
        {
          question: "What is a key feature of a record type?",
          options: ["It is mutable by default.", "It provides built-in functionality for value-based equality.", "It cannot be used in inheritance hierarchies.", "It is primarily used for defining static classes."],
          correctAnswer: 1
        },
        {
          question: "An indexer allows an object to be:",
          options: ["Treated as an array, using an index to access its elements.", "Converted into a primitive data type.", "Made immutable.", "Inherited from multiple base classes."],
          correctAnswer: 0
        },
        {
          question: "The init only setter is used to:",
          options: ["Make a property writable only in the constructor.", "Create a property that can only be read.", "Make a property that can be set multiple times after object creation.", "Define a static property."],
          correctAnswer: 0
        }
      ],
      "Session 8": [
        {
          question: "What is the primary purpose of a namespace?",
          options: ["To execute code at runtime.", "To organize classes and prevent name conflicts.", "To improve the performance of an application.", "To handle exceptions automatically."],
          correctAnswer: 1
        },
        {
          question: "Which keyword is used to import a namespace?",
          options: ["import", "include", "using", "namespace"],
          correctAnswer: 2
        },
        {
          question: "In a try-catch block, the finally block is used to:",
          options: ["Handle a specific type of exception.", "Enclose code that might throw an exception.", "Execute code regardless of whether an exception occurs.", "Define a new exception class."],
          correctAnswer: 2
        },
        {
          question: "Which exception is thrown when dividing an integer by zero?",
          options: ["System.NullReferenceException", "System.IndexOutOfRangeException", "System.DivideByZeroException", "System.ArgumentException"],
          correctAnswer: 2
        },
        {
          question: "The throw keyword is used to:",
          options: ["Handle an exception.", "Create a new exception class.", "Programmatically raise an exception.", "Ignore an exception."],
          correctAnswer: 2
        }
      ],
      "Session 9": [
        {
          question: "A delegate in C# is best described as:",
          options: ["A type that represents references to methods.", "A base class for all value types.", "A method that can be called asynchronously.", "A collection of key-value pairs."],
          correctAnswer: 0
        },
        {
          question: "What is a multicast delegate?",
          options: ["A delegate that can only reference one method.", "A delegate that can reference and invoke multiple methods.", "A delegate that is used only for static methods.", "A delegate that cannot return a value."],
          correctAnswer: 1
        },
        {
          question: "How is an event different from a delegate?",
          options: ["An event is a delegate instance that can only be invoked from within the class it is declared in.", "A delegate is a special type of event.", "An event cannot have multiple subscribers; a delegate can.", "There is no difference; they are the same."],
          correctAnswer: 0
        },
        {
          question: "Which collection class stores elements as key-value pairs and organizes them based on the hash code of the key?",
          options: ["ArrayList", "Stack", "Hashtable", "SortedList"],
          correctAnswer: 2
        },
        {
          question: "The System.Collections.Generic namespace is used for:",
          options: ["Creating type-safe collections.", "Handling exceptions.", "Defining graphical user interfaces.", "Working with databases."],
          correctAnswer: 0
        }
      ],
      "Session 10": [
        {
          question: "What is the main benefit of using generics?",
          options: ["They make code run slower but more secure.", "They allow for code reusability with different data types while ensuring type safety.", "They force all data to be of the object type.", "They are only useful for collection classes."],
          correctAnswer: 1
        },
        {
          question: "A constraint on a generic type parameter is applied using which keyword?",
          options: ["constraint", "where", "limit", "for"],
          correctAnswer: 1
        },
        {
          question: "What does the yield keyword do in an iterator?",
          options: ["It stops the execution of the program.", "It returns a value and maintains the state of the iterator for the next call.", "It creates a new thread.", "It is used to define a static method."],
          correctAnswer: 1
        },
        {
          question: "A generic method is defined by:",
          options: ["Using the generic keyword.", "Including a type parameter list in its declaration.", "Inheriting from a generic class.", "Being declared inside a generic class."],
          correctAnswer: 1
        },
        {
          question: "The IEnumerator interface is used for:",
          options: ["Handling exceptions.", "Defining a generic class.", "Iterating over a collection.", "Creating a delegate."],
          correctAnswer: 2
        }
      ],
      "Session 11": [
        {
          question: "In a C# GUI application, what is a Form?",
          options: ["A database table.", "A top-level window that serves as the primary container for controls.", "A method that handles user input.", "A type of event."],
          correctAnswer: 1
        },
        {
          question: "Which class is primarily used to execute SQL commands against a database in C#?",
          options: ["SqlConnection", "SqlDataReader", "SqlCommand", "DataSet"],
          correctAnswer: 2
        },
        {
          question: "What is the purpose of using parameters with SqlCommand?",
          options: ["To make the code run faster.", "To prevent SQL injection attacks and make queries more secure.", "To allow the command to execute multiple SQL statements at once.", "To automatically open and close the database connection."],
          correctAnswer: 1
        }
      ],
      "Session 12": [
        {
          question: "A lambda expression is essentially:",
          options: ["A named method.", "An anonymous function.", "A static class.", "A type of exception."],
          correctAnswer: 1
        },
        {
          question: "What is the primary purpose of the partial keyword?",
          options: ["To make a class abstract.", "To split the definition of a class, struct, or interface across multiple files.", "To prevent a class from being inherited.", "To create a sealed method."],
          correctAnswer: 1
        },
        {
          question: "A nullable type is declared by:",
          options: ["Using the null keyword.", "Adding a ? after the value type.", "Using the object data type.", "Declaring the variable as static."],
          correctAnswer: 1
        },
        {
          question: "The Task class in the Task Parallel Library (TPL) is used for:",
          options: ["Handling database connections.", "Creating GUI controls.", "Representing an asynchronous operation.", "Defining extension methods."],
          correctAnswer: 2
        },
        {
          question: "The lock keyword is used in multithreading to:",
          options: ["Create a new thread.", "Synchronize access to a block of code, allowing only one thread at a time.", "Terminate a running thread.", "Improve the performance of a single-threaded application."],
          correctAnswer: 1
        }
      ]
    },
    "Material UI": {
      "Session 1": [
        {
          question: "What does UI stand for?",
          options: ["User Integration", "User Interface", "Unified Interaction", "Universal Interface"],
          correctAnswer: 1
        },
        {
          question: "A UI Designer is responsible for:",
          options: ["Writing backend code for an application.", "Managing the database of a website.", "Designing the point of interaction between a user and a digital product.", "Conducting market research for a new product."],
          correctAnswer: 2
        },
        {
          question: "Which of the following is NOT listed as a principle of UI Design?",
          options: ["Visual Hierarchy", "Information Flow", "Server Configuration", "Consistency"],
          correctAnswer: 2
        },
        {
          question: "Material Design is a design language created by:",
          options: ["Apple", "Microsoft", "Google", "Facebook"],
          correctAnswer: 2
        },
        {
          question: "Material UI is best described as:",
          options: ["A programming language.", "An implementation of Google's Material Design specification.", "A type of database management system.", "A server-side framework."],
          correctAnswer: 1
        },
        {
          question: "Which of the following is a fundamental UI design element?",
          options: ["Cloud Storage", "Input Controls", "API Endpoints", "Binary Code"],
          correctAnswer: 1
        }
      ],
      "Session 2": [
        {
          question: "What is a Design Token?",
          options: ["A physical key used for security.", "A piece of data used to store style values for consistency between design and code.", "A type of cryptocurrency.", "A user authentication method."],
          correctAnswer: 1
        },
        {
          question: "Figma is primarily a tool used for:",
          options: ["Database management.", "UI and UX design and collaboration.", "Writing and compiling code.", "Server-side scripting."],
          correctAnswer: 1
        },
        {
          question: "Which input control allows a user to select only one option from a set?",
          options: ["Checkbox", "Text Field", "Radio Button", "List Box"],
          correctAnswer: 2
        },
        {
          question: "A Breadcrumb in UI is used for:",
          options: ["Playing audio files.", "Allowing users to keep track of their location within a program or website.", "Encrypting user data.", "Creating animation effects."],
          correctAnswer: 1
        },
        {
          question: "Which informational component is a small window that gives information and requires user action to proceed?",
          options: ["Tooltip", "Progress Bar", "Message Box", "Icon"],
          correctAnswer: 2
        },
        {
          question: "The primary difference between UX and UI design is that:",
          options: ["UX is about beauty, UI is about usability.", "UX is specific to digital interfaces, UI is broad.", "UX is about usability, UI is about beauty.", "UX is looks-driven, UI is data-driven."],
          correctAnswer: 2
        },
        {
          question: "What is the systematic investigation of users and their requirements called?",
          options: ["UI Design", "UX Research", "Market Analysis", "A/B Testing"],
          correctAnswer: 1
        },
        {
          question: "An Accordion is a type of:",
          options: ["Input Control", "Navigational Component", "Informational Component", "Container"],
          correctAnswer: 3
        }
      ],
      "Session 3": [
        {
          question: "The Typography System in Material Design includes predefined:",
          options: ["Color palettes only.", "Text styles with specific roles.", "Shadow effects.", "Audio feedback sounds."],
          correctAnswer: 1
        },
        {
          question: "In the Material Design Color System, which is NOT a category of key colors?",
          options: ["Primary Key Colors", "Secondary Key Colors", "Neutral Key Colors", "Transparent Key Colors"],
          correctAnswer: 3
        },
        {
          question: "What is the foundation for creating a responsive layout in Material Design?",
          options: ["The Shadow System", "The Typography System", "The Responsive Grid System", "The Sound System"],
          correctAnswer: 2
        },
        {
          question: "Why are shadow effects important in design?",
          options: ["They make the application run faster.", "They reduce the file size of the design.", "They make designs look appealing and help create depth.", "They are used to encrypt user interface elements."],
          correctAnswer: 2
        },
        {
          question: "What defines how a component behaves when a user interacts with it?",
          options: ["Its color", "Its size", "Its interaction state", "Its name"],
          correctAnswer: 2
        },
        {
          question: "Which of the following is a component interaction state?",
          options: ["Compiled", "Hovered", "Encrypted", "Archived"],
          correctAnswer: 1
        }
      ]
    },
    "SQL Server - The Definitive Guide": {
      "Session 1": [
        {
          question: "What is the primary purpose of a Database Management System (DBMS)?",
          options: ["To generate complex graphical reports", "To enable users to enter, store, and manage data", "To replace all file-based systems", "To design network infrastructure"],
          correctAnswer: 1
        },
        {
          question: "Which of the following is a key disadvantage of File-based Systems?",
          options: ["High data security", "Data redundancy and inconsistency", "Efficient data isolation", "Unanticipated queries are easy to handle"],
          correctAnswer: 1
        },
        {
          question: "In the Relational Data Model, what is a 'tuple'?",
          options: ["A column in a table", "A relationship between two tables", "A row or record in a relation", "The primary key of a table"],
          correctAnswer: 2
        },
        {
          question: "What uniquely identifies each entity (row) in a table in an RDBMS?",
          options: ["Foreign Key", "Attribute", "Primary Key", "Domain"],
          correctAnswer: 2
        },
        {
          question: "Which of the following is NOT a characteristic of a table in an RDBMS?",
          options: ["The order of rows and columns is immaterial.", "Each row/column intersection represents multiple data values.", "Each column has a distinct name.", "Each table must have a primary key."],
          correctAnswer: 1
        }
      ],
      "Session 2": [
        {
          question: "What does an Entity in an E-R Model represent?",
          options: ["A relationship between two attributes", "A real-world object that exists physically", "A database schema", "A type of SQL query"],
          correctAnswer: 1
        },
        {
          question: "A relationship where an employee works in the accounts department at the regional branch is an example of a:",
          options: ["Binary Relationship", "Self-relationship", "Ternary Relationship", "Weak Relationship"],
          correctAnswer: 2
        },
        {
          question: "The main goal of Normalization is to:",
          options: ["Speed up all query operations", "Reduce data redundancy and anomalies", "Create more tables in the database", "Make the database smaller in physical size"],
          correctAnswer: 1
        },
        {
          question: "Which Normal Form requires that a table must have no partial dependencies?",
          options: ["First Normal Form (1NF)", "Second Normal Form (2NF)", "Third Normal Form (3NF)", "Boyce-Codd Normal Form (BCNF)"],
          correctAnswer: 1
        },
        {
          question: "The relational operator denoted by the Greek letter sigma (σ) is:",
          options: ["PROJECT", "SELECT", "PRODUCT", "UNION"],
          correctAnswer: 1
        }
      ],
      "Session 3": [
        {
          question: "Which tool is the primary GUI-based application for creating and managing databases in SQL Server 2022?",
          options: ["SQLCMD", "SQL Server Configuration Manager", "SQL Server Management Studio (SSMS)", "SQL Server Profiler"],
          correctAnswer: 2
        },
        {
          question: "Which system database is used as a template for all new databases created on an instance?",
          options: ["master", "msdb", "model", "tempdb"],
          correctAnswer: 2
        },
        {
          question: "The core service for storing, processing, and securing data in SQL Server is called:",
          options: ["SQL Server Analysis Services (SSAS)", "SQL Server Reporting Services (SSRS)", "Database Engine", "SQL Server Integration Services (SSIS)"],
          correctAnswer: 2
        },
        {
          question: "The AdventureWorks2022 sample database is primarily an example of what type of database?",
          options: ["Data Warehouse", "OLTP (Online Transaction Processing)", "Hierarchical Database", "Flat-file Database"],
          correctAnswer: 1
        }
      ],
      "Session 4": [
        {
          question: "Which category of Transact-SQL statements is used to control permissions on database objects?",
          options: ["Data Definition Language (DDL)", "Data Manipulation Language (DML)", "Data Control Language (DCL)", "Transaction Control Language (TCL)"],
          correctAnswer: 2
        },
        {
          question: "A varchar data type is used to store:",
          options: ["Fixed-length non-Unicode character data", "Variable-length non-Unicode character data", "Fixed-length Unicode character data", "Variable-length binary data"],
          correctAnswer: 1
        },
        {
          question: "Which predicate is used to specify a range of values to test?",
          options: ["IN", "LIKE", "BETWEEN", "CONTAINS"],
          correctAnswer: 2
        },
        {
          question: "The mathematical foundation where a set is a collection of distinct objects considered as a whole is called:",
          options: ["Predicate Logic", "Set Theory", "Relational Algebra", "Boolean Algebra"],
          correctAnswer: 1
        }
      ],
      "Session 5": [
        {
          question: "Which file extension is typically used for the primary data file in SQL Server?",
          options: [".ndf", ".mdf", ".ldf", ".dbf"],
          correctAnswer: 1
        },
        {
          question: "What is the purpose of a Transaction Log file (.ldf)?",
          options: ["To store the database schema", "To hold temporary objects", "To record all transactions and database modifications", "To act as a backup of the primary data file"],
          correctAnswer: 2
        },
        {
          question: "What is a Database Snapshot?",
          options: ["A scheduled backup of the database", "A read-only, static view of a database at a point in time", "A copy of the database on a different server", "A compressed version of the database"],
          correctAnswer: 1
        },
        {
          question: "Which statement is used to change the structure of an existing database?",
          options: ["CREATE DATABASE", "DROP DATABASE", "ALTER DATABASE", "MODIFY DATABASE"],
          correctAnswer: 2
        }
      ],
      "Session 6": [
        {
          question: "The IDENTITY property is used to:",
          options: ["Create a column that allows NULL values.", "Create a column with a default value.", "Create a column with auto-generated sequential values.", "Create a column that is a foreign key."],
          correctAnswer: 2
        },
        {
          question: "Which constraint ensures that only unique values are entered in a column but allows a single NULL value?",
          options: ["PRIMARY KEY", "FOREIGN KEY", "CHECK", "UNIQUE"],
          correctAnswer: 3
        },
        {
          question: "A FOREIGN KEY constraint is primarily used to:",
          options: ["Uniquely identify each row in a table.", "Limit the values that can be placed in a column.", "Enforce referential integrity between tables.", "Ensure a column does not contain NULL values."],
          correctAnswer: 2
        },
        {
          question: "Which data type would be most suitable for storing XML data?",
          options: ["varchar(max)", "text", "xml", "json"],
          correctAnswer: 2
        }
      ],
      "Session 7": [
        {
          question: "Azure SQL is Microsoft's:",
          options: ["On-premises version of SQL Server", "Cloud-based relational database service", "Open-source database competitor", "ETL tool for data transformation"],
          correctAnswer: 1
        },
        {
          question: "Which Azure SQL service is best for migrating existing applications with minimal changes, offering near 100% compatibility with SQL Server?",
          options: ["Azure SQL Database", "Azure SQL Managed Instance", "SQL Server on Azure Virtual Machines", "Azure SQL Edge"],
          correctAnswer: 1
        },
        {
          question: "A key difference between Azure SQL and on-premises SQL Server is that Azure SQL:",
          options: ["Supports both Windows and SQL Server Authentication.", "Requires manual backup configuration.", "Does not support the USE statement to switch databases.", "Provides more tools for monitoring."],
          correctAnswer: 2
        }
      ],
      "Session 8": [
        {
          question: "Which clause in a SELECT statement is used to filter rows?",
          options: ["GROUP BY", "HAVING", "WHERE", "ORDER BY"],
          correctAnswer: 2
        },
        {
          question: "The DISTINCT keyword is used to:",
          options: ["Sort the results in ascending order.", "Eliminate duplicate rows from the resultset.", "Combine results from multiple tables.", "Rename a column in the output."],
          correctAnswer: 1
        },
        {
          question: "What does the ORDER BY clause do?",
          options: ["Groups rows that have the same values.", "Filters the groups.", "Specifies the sort order of the resultset.", "Joins two tables together."],
          correctAnswer: 2
        },
        {
          question: "In the context of XML in SQL Server, what is a \"typed\" XML instance?",
          options: ["An XML instance stored in a varchar column.", "An XML instance that has an associated XML schema.", "An XML instance that is unvalidated.", "An XML instance used only for output."],
          correctAnswer: 1
        }
      ],
      "Session 9": [
        {
          question: "An INNER JOIN returns:",
          options: ["All rows from the left table and the matched rows from the right table.", "All rows from both tables, with NULLs where no match exists.", "Only the rows where there is a match in both tables.", "Only the rows from the left table that have no match in the right table."],
          correctAnswer: 2
        },
        {
          question: "Which set operator returns all distinct rows from both query statements?",
          options: ["INTERSECT", "EXCEPT", "UNION", "MINUS"],
          correctAnswer: 2
        },
        {
          question: "The HAVING clause is used to:",
          options: ["Filter rows before they are grouped.", "Filter groups after the GROUP BY clause has been applied.", "Sort the final output.", "Select which columns to display."],
          correctAnswer: 1
        },
        {
          question: "The PIVOT operator is used to:",
          options: ["Transform data from a row-based to a column-based orientation.", "Combine multiple rows into a single row.", "Create a hierarchical view of data.", "Sort data in a specific order."],
          correctAnswer: 0
        }
      ],
      "Session 10": [
        {
          question: "What is a View in SQL Server?",
          options: ["A physical table that stores data.", "A virtual table made up of data from one or more tables.", "A stored procedure that returns a resultset.", "A type of index."],
          correctAnswer: 1
        },
        {
          question: "Which type of Stored Procedure is used for database administrative tasks and is prefixed with sp_?",
          options: ["User-defined Stored Procedure", "Extended Stored Procedure", "System Stored Procedure", "Temporary Stored Procedure"],
          correctAnswer: 2
        },
        {
          question: "Dynamic Management Views (DMVs) are used to return:",
          options: ["User-defined application data.", "Server and database state information.", "The results of complex calculations.", "Historical backup information."],
          correctAnswer: 1
        }
      ],
      "Session 11": [
        {
          question: "What is the main purpose of an index?",
          options: ["To enforce data integrity rules.", "To establish relationships between tables.", "To speed up data retrieval from a table.", "To store backup copies of data."],
          correctAnswer: 2
        },
        {
          question: "Which type of index physically sorts and stores the data rows in the table?",
          options: ["Nonclustered Index", "Unique Index", "Clustered Index", "Filtered Index"],
          correctAnswer: 2
        },
        {
          question: "A Columnstore Index is optimized for which type of workload?",
          options: ["OLTP (Online Transaction Processing)", "Data warehousing and read-only queries", "Frequent single-row updates", "Real-time transaction logging"],
          correctAnswer: 1
        }
      ],
      "Session 12": [
        {
          question: "A Trigger is a special type of:",
          options: ["Constraint", "Index", "Stored Procedure", "Function"],
          correctAnswer: 2
        },
        {
          question: "Which type of trigger executes in place of the INSERT, UPDATE, or DELETE operation that fired it?",
          options: ["AFTER Trigger", "BEFORE Trigger", "INSTEAD OF Trigger", "LOGON Trigger"],
          correctAnswer: 2
        },
        {
          question: "The special tables Inserted and Deleted are used within:",
          options: ["Stored Procedures", "User-Defined Functions", "DML Triggers", "DDL Triggers"],
          correctAnswer: 2
        }
      ],
      "Session 13": [
        {
          question: "A collection of one or more Transact-SQL statements sent as one unit to the server is called a:",
          options: ["Script", "Batch", "Stored Procedure", "Transaction"],
          correctAnswer: 1
        },
        {
          question: "Which statement is used to handle errors in Transact-SQL by providing a way to capture and process errors?",
          options: ["IF...ELSE", "WHILE", "TRY...CATCH", "BEGIN...END"],
          correctAnswer: 2
        },
        {
          question: "The OVER clause is used to define a:",
          options: ["Transaction boundary.", "Window or partition within a query resultset.", "Error handling block.", "Temporary table."],
          correctAnswer: 1
        }
      ],
      "Session 14": [
        {
          question: "The ACID property that ensures a transaction is treated as a single, indivisible unit is:",
          options: ["Atomicity", "Consistency", "Isolation", "Durability"],
          correctAnswer: 0
        },
        {
          question: "Which statement marks the beginning of an explicit transaction?",
          options: ["COMMIT TRANSACTION", "BEGIN TRANSACTION", "SAVE TRANSACTION", "ROLLBACK TRANSACTION"],
          correctAnswer: 1
        },
        {
          question: "In a TRY...CATCH block, which function returns the text of the error message?",
          options: ["ERROR_NUMBER()", "ERROR_MESSAGE()", "ERROR_SEVERITY()", "ERROR_STATE()"],
          correctAnswer: 1
        }
      ]
    },
    "Web Programming using ASP.NET CORE and MVC": {
      "Session 1": [
        {
          question: "What was the technology developed by Microsoft to build dynamic Web applications, which was later replaced by ASP.NET?",
          options: ["ASP.NET Core", "Active Server Pages (ASP)", ".NET Framework", "Web Forms"],
          correctAnswer: 1
        },
        {
          question: "Which of the following is a key advantage of ASP.NET Core over traditional ASP.NET?",
          options: ["It only runs on Windows.", "It is cross-platform.", "It uses Web Forms as the primary UI model.", "It relies on the System.Web assembly."],
          correctAnswer: 1
        },
        {
          question: "The ASP.NET Page Lifecycle stage where event handlers are executed is:",
          options: ["Initialization", "Rendering", "Loading", "Unloading"],
          correctAnswer: 2
        },
        {
          question: "Which phase of the ASP.NET Page Lifecycle is specific to a postback request and involves loading the view state?",
          options: ["Initializing", "Loading View State", "Rendering", "Saving State"],
          correctAnswer: 1
        },
        {
          question: "A major improvement offered by ASP.NET Core is:",
          options: ["Tight coupling with Internet Information Services (IIS)", "A closed-source environment", "Support for self-hosting and a modular HTTP request pipeline", "Inability to run on .NET Framework"],
          correctAnswer: 2
        }
      ],
      "Session 2": [
        {
          question: "Which of the following is NOT one of the three programming models offered by ASP.NET for creating Websites?",
          options: ["Web Forms", "Web Pages", "Model-View-Controller (MVC)", "Windows Forms"],
          correctAnswer: 3
        },
        {
          question: "The server-side code for a Web Form in a C# application is typically stored in a file with which extension?",
          options: [".aspx", ".vb", ".cs", ".config"],
          correctAnswer: 2
        },
        {
          question: "Which ASP.NET control is used to ensure that the value of an input control matches a specified pattern?",
          options: ["RequiredFieldValidator", "CompareValidator", "RangeValidator", "RegularExpressionValidator"],
          correctAnswer: 3
        },
        {
          question: "A Web Form that serves as a template for other pages, defining a common layout, is called a:",
          options: ["User Control", "Master Page", "Content Page", "Dialog Box"],
          correctAnswer: 1
        },
        {
          question: "In the sequence of event handling, where is the event handler for a button click executed?",
          options: ["Client-side (Browser)", "Web Server", "Database Server", "DNS Server"],
          correctAnswer: 1
        }
      ],
      "Session 3": [
        {
          question: "Which ADO.NET component provides a high-performance, forward-only stream of data from the data source?",
          options: ["DataAdapter", "DataSet", "DataReader", "Connection"],
          correctAnswer: 2
        },
        {
          question: "Entity Framework (EF) is an example of:",
          options: ["A Web Server", "An Object-Relational Mapping (ORM) tool", "A Programming Language", "A Validation Control"],
          correctAnswer: 1
        },
        {
          question: "Which EF workflow involves creating domain classes first, based on which the database is generated?",
          options: ["Database-first", "Model-first", "Code-first", "Design-first"],
          correctAnswer: 2
        },
        {
          question: "In the code-first approach, which command is used in the Package Manager Console to create a migration?",
          options: ["Update-Database", "Add-Migration", "Scaffold-DbContext", "Enable-Migrations"],
          correctAnswer: 1
        }
      ],
      "Session 4": [
        {
          question: "In ASP.NET Core MVC, which file is used to define the common layout for multiple views?",
          options: ["_ViewImports.cshtml", "_ViewStart.cshtml", "Layout.cshtml", "Index.cshtml"],
          correctAnswer: 2
        },
        {
          question: "Which data annotation attribute is used to specify that a field value must be in a valid email address format?",
          options: ["[Required]", "[Range]", "[Phone]", "[EmailAddress]"],
          correctAnswer: 3
        },
        {
          question: "What is the main purpose of Routing in ASP.NET MVC?",
          options: ["To style the user interface", "To map incoming HTTP requests to executable endpoints (controllers/actions)", "To manage database connections", "To validate user input on the client side"],
          correctAnswer: 1
        },
        {
          question: "A key characteristic of a Single Page Application (SPA) is:",
          options: ["It requires a full page reload for every user interaction.", "Most resources are loaded once, and only data is transmitted as needed.", "It cannot be built using ASP.NET Core.", "It has no need for client-side scripting."],
          correctAnswer: 1
        }
      ],
      "Session 5": [
        {
          question: "Which type of authorization allows developers to show, hide, or modify UI elements based on the current user's identity?",
          options: ["Role-based authorization", "Policy-based authorization", "View-based authorization", "Resource-based authorization"],
          correctAnswer: 2
        },
        {
          question: "An [ActionName(\"NewAction\")] selector is used to:",
          options: ["Restrict an action to POST requests.", "Map an action method to a different name.", "Make a method non-callable as an action.", "Define a custom route template."],
          correctAnswer: 1
        },
        {
          question: "Which filter in ASP.NET MVC is used to handle exceptions that occur during action execution?",
          options: ["Authorization Filter", "Action Filter", "Result Filter", "Exception Filter"],
          correctAnswer: 3
        },
        {
          question: "How does a Partial View differ from a standard View?",
          options: ["A Partial View includes a layout page.", "A Partial View does not include a layout page.", "A Partial View cannot contain HTML.", "A Partial View is only for data models."],
          correctAnswer: 1
        }
      ],
      "Session 6": [
        {
          question: "Which ActionResult is used to return a .pdf file to the browser?",
          options: ["ViewResult", "JsonResult", "FileResult", "ContentResult"],
          correctAnswer: 2
        },
        {
          question: "A key difference between REST and SOAP is that:",
          options: ["SOAP supports multiple data formats, while REST only supports XML.", "REST supports multiple data formats, while SOAP primarily uses XML.", "REST is a protocol, while SOAP is an architectural style.", "SOAP is generally considered faster and easier than REST."],
          correctAnswer: 1
        },
        {
          question: "What is the process of eliminating redundant whitespaces and comments from code to reduce its size called?",
          options: ["Bundling", "Compiling", "Minification", "Obfuscation"],
          correctAnswer: 2
        },
        {
          question: "Which object is a dynamic wrapper around ViewData, allowing data to be passed from a controller to a view without typecasting?",
          options: ["TempData", "Session", "ViewBag", "Model"],
          correctAnswer: 2
        }
      ],
      "Session 7": [
        {
          question: "Razor is a:",
          options: ["Database Management System", "Server-side markup language for embedding code into Web pages", "Client-side JavaScript framework", "Unit testing tool"],
          correctAnswer: 1
        },
        {
          question: "The System.Text.Json namespace includes which class for reading UTF-8 encoded JSON text?",
          options: ["JsonSerializer", "JsonDocument", "Utf8JsonReader", "JsonElement"],
          correctAnswer: 2
        },
        {
          question: "What is the primary role of the Garbage Collector in .NET?",
          options: ["To compile source code", "To manage memory allocation and reclaim unused memory", "To handle HTTP requests", "To validate user input"],
          correctAnswer: 1
        }
      ],
      "Session 8": [
        {
          question: "Which of the following is a feature of .NET Core?",
          options: ["It is Windows-only.", "It includes a Command Line Interface (CLI).", "It cannot be used to build RESTful APIs.", "It does not support C#."],
          correctAnswer: 1
        },
        {
          question: "What is the default, cross-platform web server for ASP.NET Core?",
          options: ["Internet Information Services (IIS)", "Apache", "Nginx", "Kestrel"],
          correctAnswer: 3
        },
        {
          question: "In a RESTful Web API, which HTTP method is typically used to update an existing resource?",
          options: ["GET", "POST", "PUT", "DELETE"],
          correctAnswer: 2
        },
        {
          question: "Compared to REST, a key advantage of GraphQL is:",
          options: ["It uses multiple endpoints for different resources.", "Clients can request exactly the data they need in a single query.", "The server always defines the fixed response structure.", "It requires versioning for every change."],
          correctAnswer: 1
        }
      ],
      "Session 9": [
        {
          question: "Onion Architecture is primarily based on which two design principles?",
          options: ["Singleton and Factory Patterns", "Inversion of Control (IoC) and Dependency Inversion Principle (DIP)", "Model-View-Controller and REST", "Bundling and Minification"],
          correctAnswer: 1
        },
        {
          question: "According to the Dependency Inversion Principle (DIP):",
          options: ["High-level modules should depend on low-level modules.", "Both high-level and low-level modules should depend on abstractions.", "Abstractions should depend on details.", "Concrete classes should never be used."],
          correctAnswer: 1
        },
        {
          question: "In Onion Architecture, which layer is responsible for containing the business logic?",
          options: ["Infrastructure Layer", "Service Layer", "Domain Layer", "UI Layer"],
          correctAnswer: 1
        },
        {
          question: "A key advantage of the Onion Architecture is:",
          options: ["Tight coupling between layers", "Easy maintenance due to logical separation and loose coupling", "Direct database access from the UI layer", "It eliminates the need for interfaces"],
          correctAnswer: 1
        }
      ],
      "Session 10": [
        {
          question: "The Entity Framework Fluent API is primarily used to:",
          options: ["Write client-side JavaScript.", "Customize database mappings and override default conventions.", "Create user interfaces.", "Handle HTTP requests."],
          correctAnswer: 1
        },
        {
          question: "Which method in the Fluent API is used to configure the primary key for an entity?",
          options: ["HasColumnName()", "IsRequired()", "HasKey()", "HasForeignKey()"],
          correctAnswer: 2
        },
        {
          question: "AutoMapper is a library used for:",
          options: ["Automatically generating database schemas.", "Object-to-object mapping.", "Creating RESTful APIs.", "Minifying CSS and JavaScript."],
          correctAnswer: 1
        }
      ],
      "Session 11": [
        {
          question: "JSON Web Token (JWT) is a means of securely transmitting information between parties as a/an:",
          options: ["XML object", "JSON object", "CSV file", "Binary stream"],
          correctAnswer: 1
        },
        {
          question: "Which JWT component contains the user claims or data?",
          options: ["Header", "Payload", "Signature", "Footer"],
          correctAnswer: 1
        },
        {
          question: "A key benefit of token-based authentication is that it is:",
          options: ["Stateful, requiring server-side sessions.", "Stateless and scalable.", "Only usable with SOAP services.", "Dependent on storing session data on the server."],
          correctAnswer: 1
        }
      ],
      "Session 12": [
        {
          question: "The Repository Pattern acts as a mediator between:",
          options: ["The View and the Controller", "The Business Logic Layer and the Data Access Layer", "The Client and the Server", "CSS and HTML"],
          correctAnswer: 1
        },
        {
          question: "The Unit of Work (UoW) pattern:",
          options: ["Is used for styling Web pages.", "Combines multiple CRUD operations into a single transaction.", "Is a client-side validation technique.", "Manages user authentication."],
          correctAnswer: 1
        },
        {
          question: "A primary benefit of using the Unit of Work pattern is:",
          options: ["It increases code redundancy.", "It ensures data integrity by committing all changes together or rolling them back.", "It blocks database tables until all changes are committed.", "It tightly couples the data layer with the business layer."],
          correctAnswer: 1
        }
      ],
      "Session 13": [
        {
          question: "ASP.NET Core Identity is a framework that simplifies the implementation of:",
          options: ["Database migrations", "User authentication and identity management", "Client-side routing", "Bundling and minification"],
          correctAnswer: 1
        },
        {
          question: "For password security, ASP.NET Core Identity uses:",
          options: ["Plain text storage", "Symmetric encryption", "Hashing with a salt", "Base64 encoding"],
          correctAnswer: 2
        },
        {
          question: "Session state in ASP.NET Core is used to:",
          options: ["Permanently store user data in a database.", "Maintain user-specific data across multiple requests within the same session.", "Configure the Kestrel web server.", "Define the application's routing table."],
          correctAnswer: 1
        }
      ],
      "Session 14": [
        {
          question: "Which of the following is a commonly used web server for hosting ASP.NET Core applications on Windows?",
          options: ["Apache", "Nginx", "Internet Information Services (IIS)", "Tomcat"],
          correctAnswer: 2
        },
        {
          question: "To host an ASP.NET Core application on IIS, you must install the:",
          options: [".NET Core SDK", "Visual Studio Code", ".NET Core Hosting Bundle", "SQL Server Express"],
          correctAnswer: 2
        },
        {
          question: "In an ASP.NET Core application, the WebHostBuilder is configured in which file?",
          options: ["Startup.cs", "Web.config", "Program.cs", "AppSettings.json"],
          correctAnswer: 2
        }
      ]
    }
  },
  books: [],
  isEmpty: false
};

function flattenSessions(booksBySession) {
  const booksArray = [];
  let bookId = 1;
  
  for (const [bookTitle, sessions] of Object.entries(booksBySession)) {
    const allMcqs = [];
    
    for (const [sessionName, questions] of Object.entries(sessions)) {
      allMcqs.push(...questions);
    }
    
    booksArray.push({
      id: `book${bookId}`,
      title: bookTitle,
      author: "ACCP",
      mcqs: allMcqs,
      sessions: sessions
    });
    
    bookId++;
  }
  
  return booksArray;
}

semester3Data.books = flattenSessions(semester3Data.booksBySession);

export default semester3Data;
