const semester2Data = {
  semester: 2,
  name: "DISM (Semester 2)",
  booksBySession: {
    "Architecting Web Applications using PHP": {
      "Session 1": [
        {
          question: "What does PHP stand for?",
          options: ["Personal Home Page", "Preprocessor Hypertext", "Hypertext Preprocessor", "Private Home Portal"],
          answer: "Hypertext Preprocessor"
        },
        {
          question: "Which of the following is a major feature introduced in PHP 8.0?",
          options: ["Traits", "Just In Time (JIT) Compiler", "Namespaces", "Magic Constants"],
          answer: "Just In Time (JIT) Compiler"
        },
        {
          question: "In the code <?php echo \"Hello Students!\"; ?>, where is the code executed?",
          options: ["Client-side browser", "Server-side", "Database server", "User's local machine"],
          answer: "Server-side"
        },
        {
          question: "Which PHP 8.0 feature allows you to write htmlspecialchars($string, double_encode: false);?",
          options: ["Constructor Property Promotion", "Named Arguments", "Match Expression", "Union Types"],
          answer: "Named Arguments"
        },
        {
          question: "The match expression in PHP 8.0 is best described as a more concise and robust alternative to:",
          options: ["The if...else statement", "The for loop", "The switch statement", "The while loop"],
          answer: "The switch statement"
        }
      ],
      "Session 2": [
        {
          question: "Which of the following is NOT a typical component of a PHP development environment?",
          options: ["A Web Server (e.g., Apache)", "A PHP Interpreter", "A C++ Compiler", "A Database (e.g., MySQL)"],
          answer: "A C++ Compiler"
        },
        {
          question: "Which all-in-one package is available for installing PHP, Apache, and MySQL on Windows?",
          options: ["LAMP", "MAMP", "XAMPP", "WAMP"],
          answer: "WAMP"
        },
        {
          question: "What is the correct way to embed PHP code within an HTML file?",
          options: ["<script language=\"php\"> ... </script>", "<?php ... ?>", "<% ... %>", "<? ... ?>"],
          answer: "<?php ... ?>"
        },
        {
          question: "To run a PHP script named test.php from the command prompt, which command should you use?",
          options: ["run test.php", "execute test.php", "php test.php", "start test.php"],
          answer: "php test.php"
        },
        {
          question: "Which of the following is a valid single-line comment in PHP?",
          options: ["// This is a comment", "<!-- This is a comment -->", "** This is a comment **", "' This is a comment"],
          answer: "// This is a comment"
        }
      ],
      "Session 3": [
        {
          question: "Which data type is used to represent a whole number?",
          options: ["Float", "String", "Integer", "Boolean"],
          answer: "Integer"
        },
        {
          question: "What will echo gettype(5.6); output?",
          options: ["integer", "string", "double", "float"],
          answer: "double"
        },
        {
          question: "Which function is used to return the length of a string?",
          options: ["strlen()", "str_word_count()", "strrev()", "strpos()"],
          answer: "strlen()"
        },
        {
          question: "The pi() function in PHP is used to:",
          options: ["Calculate the power of a number.", "Return the value of Pi.", "Print a value to the screen.", "Generate a random number."],
          answer: "Return the value of Pi."
        },
        {
          question: "How do you define a case-insensitive constant named SITE_NAME with the value \"MySite\"?",
          options: ["constant(\"SITE_NAME\", \"MySite\", true);", "define(\"SITE_NAME\", \"MySite\", false);", "define(\"SITE_NAME\", \"MySite\", true);", "const SITE_NAME = \"MySite\" case_insensitive;"],
          answer: "define(\"SITE_NAME\", \"MySite\", true);"
        }
      ],
      "Session 4": [
        {
          question: "All variable names in PHP must start with which character?",
          options: ["@", "#", "$", "&"],
          answer: "$"
        },
        {
          question: "What is the scope of a variable declared inside a function?",
          options: ["Global", "Static", "Local", "Superglobal"],
          answer: "Local"
        },
        {
          question: "Which operator is used to compare both value and data type?",
          options: ["==", "=", "!=", "==="],
          answer: "==="
        },
        {
          question: "What is the output of echo 10 % 3;?",
          options: ["3", "1", "0", "3.33"],
          answer: "1"
        },
        {
          question: "The ?. operator introduced in PHP 8.0 is known as the:",
          options: ["Ternary Operator", "Nullsafe Operator", "Spaceship Operator", "Concatenation Operator"],
          answer: "Nullsafe Operator"
        }
      ],
      "Session 5": [
        {
          question: "Which loop statement will execute the code block at least once?",
          options: ["for loop", "while loop", "do...while loop", "foreach loop"],
          answer: "do...while loop"
        },
        {
          question: "The break statement is used to:",
          options: ["Skip the current iteration of a loop.", "Exit the entire script.", "Jump out of a loop or switch statement.", "Pause the execution of a loop."],
          answer: "Jump out of a loop or switch statement."
        },
        {
          question: "What type of array uses named keys instead of numeric indexes?",
          options: ["Indexed Array", "Multidimensional Array", "Associative Array", "Sequential Array"],
          answer: "Associative Array"
        },
        {
          question: "Which function is used to sort an associative array in ascending order according to the value?",
          options: ["sort()", "rsort()", "asort()", "ksort()"],
          answer: "asort()"
        },
        {
          question: "In a switch statement, which keyword is used to specify the default code block to run?",
          options: ["else", "default", "case", "break"],
          answer: "default"
        }
      ],
      "Session 6": [
        {
          question: "In an HTML form, which method sends form data as part of the URL?",
          options: ["POST", "SEND", "GET", "REQUEST"],
          answer: "GET"
        },
        {
          question: "Which PHP superglobal variable can collect data sent with both the GET and POST methods?",
          options: ["$_GET", "$_POST", "$_REQUEST", "$_SERVER"],
          answer: "$_REQUEST"
        },
        {
          question: "The PHP function htmlspecialchars() is primarily used for:",
          options: ["Connecting to a database.", "Validating email addresses.", "Preventing Cross-Site Scripting (XSS) attacks by converting special characters to HTML entities.", "Sending emails."],
          answer: "Preventing Cross-Site Scripting (XSS) attacks by converting special characters to HTML entities."
        },
        {
          question: "To check if a form field named \"email\" is empty, which code should you use?",
          options: ["if ($email == \"\")", "if (empty($_POST[\"email\"]))", "if (isset($email))", "if ($_POST[\"email\"] != null)"],
          answer: "if (empty($_POST[\"email\"]))"
        },
        {
          question: "The preg_match() function is used to:",
          options: ["Perform a pattern match using regular expressions.", "Print a string to the browser.", "Merge two arrays.", "Get the length of a string."],
          answer: "Perform a pattern match using regular expressions."
        }
      ],
      "Session 7": [
        {
          question: "What is the primary purpose of a function in PHP?",
          options: ["To connect to a database", "To create an object", "To reuse code", "To define a constant"],
          answer: "To reuse code"
        },
        {
          question: "Which function is used to display structured information (type and value) about one or more variables?",
          options: ["echo()", "print()", "gettype()", "var_dump()"],
          answer: "var_dump()"
        },
        {
          question: "In the function definition function myFunction($param1, $param2 = 10), what is $param2?",
          options: ["A required parameter", "A default parameter", "A referenced parameter", "A static parameter"],
          answer: "A default parameter"
        },
        {
          question: "To force a function to return a value of a specific type, you use:",
          options: ["Default Arguments", "Return Type Declarations", "Static Variables", "Pass by Reference"],
          answer: "Return Type Declarations"
        },
        {
          question: "Which new feature in PHP 8.0 allows you to pass arguments to a function based on parameter names instead of positions?",
          options: ["Union Types", "Named Arguments", "Attributes", "Match Expressions"],
          answer: "Named Arguments"
        }
      ],
      "Session 8": [
        {
          question: "In PHP, which function is used to set a cookie?",
          options: ["set_cookie()", "create_cookie()", "setcookie()", "makecookie()"],
          answer: "setcookie()"
        },
        {
          question: "Where are cookies stored?",
          options: ["On the Web server", "In the PHP script", "On the client's computer", "In the database"],
          answer: "On the client's computer"
        },
        {
          question: "What is the main difference between cookies and sessions?",
          options: ["Cookies are more secure than sessions.", "Sessions are stored on the client-side, while cookies are stored on the server-side.", "Cookies are stored on the client-side, while sessions are stored on the server-side.", "Sessions can only store strings, while cookies can store arrays."],
          answer: "Cookies are stored on the client-side, while sessions are stored on the server-side."
        },
        {
          question: "Which function is used to start a new session or resume an existing one?",
          options: ["session_begin()", "start_session()", "session_start()", "session_create()"],
          answer: "session_start()"
        },
        {
          question: "To destroy all data registered to a session, you should use:",
          options: ["session_unset() only", "session_destroy() only", "Both session_unset() and session_destroy()", "unset($_SESSION)"],
          answer: "Both session_unset() and session_destroy()"
        }
      ]
    },
    "Build and Manage Websites using CMS": {
      "Session 1": [
        {
          question: "What is the primary purpose of a Content Management System (CMS)?",
          options: ["To write custom code for websites", "To create, manage, and modify digital content without extensive technical knowledge", "To replace web developers entirely", "To only manage e-commerce transactions"],
          answer: "To create, manage, and modify digital content without extensive technical knowledge"
        },
        {
          question: "Which of the following is NOT listed as a popular CMS platform?",
          options: ["WordPress", "Joomla", "Drupal", "Magento"],
          answer: "Magento"
        },
        {
          question: "Which basic component of a CMS includes features like Rich Text Editors and Media Management?",
          options: ["User Management", "Content Creation", "Content Management", "Analytics and Reporting"],
          answer: "Content Creation"
        },
        {
          question: "In a CMS, what is the primary function of \"Content Scheduling\"?",
          options: ["To categorize blog posts", "To control when content is published or unpublished", "To archive old content", "To track user engagement"],
          answer: "To control when content is published or unpublished"
        },
        {
          question: "Which user role in a CMS typically has full control over all functions?",
          options: ["Editor", "Subscriber", "Admin", "Author"],
          answer: "Admin"
        },
        {
          question: "WordPress initially started as a:",
          options: ["Social media platform", "Simple blogging platform", "E-commerce platform", "Forum software"],
          answer: "Simple blogging platform"
        }
      ],
      "Session 2": [
        {
          question: "Which of the following is NOT a core component required for a WordPress environment setup?",
          options: ["PHP 8.3", "MySQL 8.4.x", "A Web Server (Apache/Nginx)", "Python 3.11"],
          answer: "Python 3.11"
        },
        {
          question: "What is the primary tool used for creating a database for WordPress via a graphical interface?",
          options: ["WordPress Installer", "phpMyAdmin", "XAMPP Control Panel", "Command Prompt"],
          answer: "phpMyAdmin"
        },
        {
          question: "During the WordPress installation, which step comes immediately after \"Database Configuration\"?",
          options: ["Select Language", "Run the Installation", "Website Configuration", "Login"],
          answer: "Run the Installation"
        },
        {
          question: "The initial configuration of a WordPress site includes setting up all of the following EXCEPT:",
          options: ["Site Title and Tagline", "Timezone and Date Format", "Admin User Account", "Payment Gateway"],
          answer: "Payment Gateway"
        }
      ],
      "Session 3": [
        {
          question: "What is the primary role of a WordPress theme?",
          options: ["To add e-commerce functionality", "To determine the website's appearance, layout, and user experience", "To manage user roles and permissions", "To optimize the website for search engines"],
          answer: "To determine the website's appearance, layout, and user experience"
        },
        {
          question: "Which default WordPress theme is noted for fully embracing the block-based Full Site Editing (FSE) feature?",
          options: ["Twenty Twenty", "Twenty Twenty-One", "Twenty Twenty-Two", "Twenty Seventeen"],
          answer: "Twenty Twenty-Two"
        },
        {
          question: "Where can you find and install thousands of free and reviewed themes directly within WordPress?",
          options: ["The WordPress Theme Marketplace", "The WordPress Theme Repository", "A third-party developer's website", "The Custom CSS Editor"],
          answer: "The WordPress Theme Repository"
        },
        {
          question: "Which tool allows for real-time preview of theme modifications like header/footer customization and color schemes?",
          options: ["The Block Editor", "The WordPress Customizer", "phpMyAdmin", "The Plugin Repository"],
          answer: "The WordPress Customizer"
        }
      ],
      "Session 4": [
        {
          question: "What is the main function of a WordPress plugin?",
          options: ["To change the website's theme", "To add specific features or functions without custom coding", "To manage the website's database", "To replace the core WordPress software"],
          answer: "To add specific features or functions without custom coding"
        },
        {
          question: "Which type of plugin would you use to protect your website from hackers?",
          options: ["SEO Plugin", "Security Plugin", "E-Commerce Plugin", "Backup Plugin"],
          answer: "Security Plugin"
        },
        {
          question: "Where are widgets typically placed in a WordPress site?",
          options: ["In the website's database", "In the theme's functions.php file", "In widget-ready areas like sidebars, footers, and headers", "Only on the homepage"],
          answer: "In widget-ready areas like sidebars, footers, and headers"
        },
        {
          question: "What is the first step in adding a widget?",
          options: ["Drag and Drop the widget", "Adjust the widget settings", "Access the Widgets Screen", "Save Changes"],
          answer: "Access the Widgets Screen"
        }
      ],
      "Session 5": [
        {
          question: "What is the key difference between a WordPress Post and a Page?",
          options: ["Posts are static, Pages are dynamic.", "Posts are for dynamic content like blogs, Pages are for static content like \"About Us\".", "Pages can have categories, Posts cannot.", "Posts are hierarchical, Pages are not."],
          answer: "Posts are for dynamic content like blogs, Pages are for static content like \"About Us\"."
        },
        {
          question: "Which feature of the Block Editor allows you to save time by creating reusable content blocks?",
          options: ["Block Variety", "Reusable Blocks", "Customization Options", "Visual Editing"],
          answer: "Reusable Blocks"
        },
        {
          question: "What is one method for embedding a YouTube video into a WordPress post or page?",
          options: ["Using the Media Library", "Using the YouTube block in the Block Editor", "Copying and pasting the video file", "Using a dedicated FTP client"],
          answer: "Using the YouTube block in the Block Editor"
        },
        {
          question: "Which of these is a popular Contact Form plugin for WordPress?",
          options: ["WooCommerce", "Contact Form 7", "Yoast SEO", "Wordfence"],
          answer: "Contact Form 7"
        }
      ],
      "Session 6": [
        {
          question: "What does SEO stand for?",
          options: ["Secure Engine Optimization", "Search Engine Optimization", "System Engine Operation", "Site Enhancement Operation"],
          answer: "Search Engine Optimization"
        },
        {
          question: "What is the primary benefit of caching for a WordPress website?",
          options: ["Increases security", "Improves performance and reduces load times", "Adds new design features", "Manages user accounts"],
          answer: "Improves performance and reduces load times"
        },
        {
          question: "Which of the following is a popular caching plugin?",
          options: ["Yoast SEO", "WP Super Cache", "Contact Form 7", "Gravity Forms"],
          answer: "WP Super Cache"
        },
        {
          question: "What does \"mobile responsiveness\" mean for a website?",
          options: ["It has a dedicated mobile app.", "It adapts its layout and content to fit different screen sizes and devices.", "It loads faster on mobile data.", "It only uses mobile-friendly colors."],
          answer: "It adapts its layout and content to fit different screen sizes and devices."
        }
      ],
      "Session 7": [
        {
          question: "What is the primary purpose of integrating Google Analytics with a WordPress site?",
          options: ["To automatically fix website errors", "To track and report website traffic and user behavior", "To replace the WordPress dashboard", "To manage website backups"],
          answer: "To track and report website traffic and user behavior"
        },
        {
          question: "Which of these is a speed testing tool mentioned for performance optimization?",
          options: ["Google Analytics", "phpMyAdmin", "GTmetrix", "WordPress Customizer"],
          answer: "GTmetrix"
        },
        {
          question: "Which practice is recommended for optimizing images to improve website speed?",
          options: ["Using the highest resolution possible", "Avoiding the use of images", "Compressing images and leveraging modern formats", "Storing all images in a separate database"],
          answer: "Compressing images and leveraging modern formats"
        },
        {
          question: "Which of the following is a common security threat to WordPress websites?",
          options: ["CSS Injection", "SQL Injection", "PHP Beautification", "HTML Validation"],
          answer: "SQL Injection"
        }
      ],
      "Session 8": [
        {
          question: "What is one benefit of using AI tools in WordPress?",
          options: ["To replace the entire website theme", "To automate tasks and enhance content creation", "To physically host the website server", "To manually write all code"],
          answer: "To automate tasks and enhance content creation"
        },
        {
          question: "What is a \"Custom Post Type\" in WordPress?",
          options: ["A special type of postal service for websites", "A default post category like \"Blog\"", "A way to create content types beyond default posts and pages (e.g., Products, Portfolios)", "A method for sending email newsletters"],
          answer: "A way to create content types beyond default posts and pages (e.g., Products, Portfolios)"
        },
        {
          question: "Why is it essential to perform regular backups of a WordPress website?",
          options: ["To increase its Google search ranking", "To restore the website in case of an error or cyberattack", "To make the website load faster", "To change the website's theme automatically"],
          answer: "To restore the website in case of an error or cyberattack"
        },
        {
          question: "Which of these is a popular WordPress debugging tool?",
          options: ["Yoast SEO", "Query Monitor", "WP Super Cache", "Gravity Forms"],
          answer: "Query Monitor"
        }
      ]
    },
    "Crafting Efficient Code with JavaScript": {
      "Session 1": [
        {
          question: "What is the primary purpose of Object-Oriented Programming (OOP) in JavaScript?",
          options: ["To only manage asynchronous operations", "To handle complexity by modeling real-world entities as objects", "To replace all functional programming patterns", "To make websites more visually appealing"],
          answer: "To handle complexity by modeling real-world entities as objects"
        },
        {
          question: "Which keyword is used to enable a child class to inherit from a parent class?",
          options: ["this", "extends", "super", "static"],
          answer: "extends"
        },
        {
          question: "What is the main benefit of using private fields in a JavaScript class?",
          options: ["To make the code run faster", "To secure class properties through encapsulation", "To allow global access to properties", "To automatically document the code"],
          answer: "To secure class properties through encapsulation"
        },
        {
          question: "What is the primary advantage of using JavaScript modules?",
          options: ["They make JavaScript run on servers", "They divide functionality into self-contained files for better organization", "They automatically minify the code", "They convert JavaScript into Python"],
          answer: "They divide functionality into self-contained files for better organization"
        },
        {
          question: "How do dynamic imports improve application performance?",
          options: ["By loading all modules at startup", "By loading modules only when required, improving initial load times", "By deleting unused modules", "By converting modules into images"],
          answer: "By loading modules only when required, improving initial load times"
        },
        {
          question: "Which technique is NOT suggested for avoiding circular dependencies?",
          options: ["Refactoring Modules", "Using Dependency Injection", "Increasing Code Coupling", "Lazy Loading"],
          answer: "Increasing Code Coupling"
        }
      ],
      "Session 2": [
        {
          question: "In JavaScript, what are Regular Expressions primarily used for?",
          options: ["Performing mathematical calculations", "Handling string manipulation, validation, and pattern matching", "Creating graphical user interfaces", "Managing database connections"],
          answer: "Handling string manipulation, validation, and pattern matching"
        },
        {
          question: "What does object destructuring allow you to do?",
          options: ["Compress object size", "Quickly extract values from objects based on key names", "Convert objects into arrays", "Encrypt object properties"],
          answer: "Quickly extract values from objects based on key names"
        },
        {
          question: "What is the key difference between the Nullish Coalescing Operator (??) and the Logical OR (||)?",
          options: ["?? considers empty strings, || does not.", "?? assigns default values for null or undefined, while || also considers other falsy values like 0 or ''.", "They are identical and can be used interchangeably.", "|| is used for numbers, ?? for strings."],
          answer: "?? assigns default values for null or undefined, while || also considers other falsy values like 0 or ''."
        },
        {
          question: "What does the Optional Chaining operator (?.) do?",
          options: ["It makes a property mandatory.", "It prevents errors by returning undefined if a part of a nested property chain is missing.", "It chains multiple functions together.", "It converts optional properties to required ones."],
          answer: "It prevents errors by returning undefined if a part of a nested property chain is missing."
        },
        {
          question: "Which of the following is an explicit representation of the intentional absence of a value?",
          options: ["undefined", "null", "0", "''"],
          answer: "null"
        },
        {
          question: "Which array method, combined with optional chaining, is mentioned for efficient work with nested API data?",
          options: [".reduce() and .sort()", ".map() and .filter()", ".push() and .pop()", ".slice() and .splice()"],
          answer: ".map() and .filter()"
        }
      ],
      "Session 3": [
        {
          question: "Which component of the JavaScript event loop is responsible for executing synchronous code?",
          options: ["Web APIs", "Task Queue", "Call Stack", "Microtask Queue"],
          answer: "Call Stack"
        },
        {
          question: "What is the correct order of task priority in the event loop?",
          options: ["Macrotasks run before Microtasks.", "Microtasks run before Macrotasks.", "They have the same priority.", "It depends on the browser."],
          answer: "Microtasks run before Macrotasks."
        },
        {
          question: "Which API is specifically mentioned for lazy loading images by monitoring element visibility?",
          options: ["Fetch API", "Geolocation API", "Intersection Observer API", "Web Storage API"],
          answer: "Intersection Observer API"
        },
        {
          question: "What is the primary purpose of Web Workers?",
          options: ["To style web pages", "To execute heavy computations in background threads, preserving UI responsiveness", "To manage user authentication", "To create interactive animations"],
          answer: "To execute heavy computations in background threads, preserving UI responsiveness"
        },
        {
          question: "Which technique is used to reduce render-blocking JavaScript?",
          options: ["Code Splitting", "Inlining all CSS", "Using more synchronous code", "Avoiding all JavaScript"],
          answer: "Code Splitting"
        }
      ],
      "Session 4": [
        {
          question: "What is the main goal of transpiling JavaScript with Babel?",
          options: ["To minify code for production", "To convert modern JavaScript (ES6+) into backward-compatible versions (like ES5)", "To add comments to the code", "To convert JavaScript into machine code"],
          answer: "To convert modern JavaScript (ES6+) into backward-compatible versions (like ES5)"
        },
        {
          question: "What do polyfills provide?",
          options: ["A new JavaScript syntax", "Cross-browser support for modern JavaScript features", "Automatic code formatting", "A replacement for HTML"],
          answer: "Cross-browser support for modern JavaScript features"
        },
        {
          question: "Which tool is mentioned for JavaScript minification?",
          options: ["Babel", "Webpack", "Terser", "Lighthouse"],
          answer: "Terser"
        },
        {
          question: "What is the primary benefit of \"Tree Shaking\"?",
          options: ["It plants digital trees.", "It removes unused code from the final bundle.", "It adds more features to the code.", "It converts code into a tree structure."],
          answer: "It removes unused code from the final bundle."
        },
        {
          question: "How does lazy loading with Webpack primarily work?",
          options: ["By loading all modules during the initial page load", "By using dynamic imports to load JavaScript modules on demand", "By caching all modules in the browser", "By preventing any modules from loading"],
          answer: "By using dynamic imports to load JavaScript modules on demand"
        }
      ],
      "Session 5": [
        {
          question: "Which Chrome DevTools tab is used to analyze HTTP requests and responses?",
          options: ["Elements Tab", "Console Tab", "Network Tab", "Application Tab"],
          answer: "Network Tab"
        },
        {
          question: "What is the primary purpose of taking a Heap Snapshot?",
          options: ["To analyze network speed", "To identify memory leaks and objects not released from memory", "To measure CPU temperature", "To check CSS styles"],
          answer: "To identify memory leaks and objects not released from memory"
        },
        {
          question: "Which tool analyzes page speed, accessibility, and SEO, providing a detailed report with recommendations?",
          options: ["Webpack", "Babel", "Lighthouse", "Terser"],
          answer: "Lighthouse"
        },
        {
          question: "What is a common challenge when debugging asynchronous code?",
          options: ["Tracking the execution flow of callbacks and promises", "The lack of console.log statements", "Synchronous code being too fast", "Overuse of comments"],
          answer: "Tracking the execution flow of callbacks and promises"
        }
      ],
      "Session 6": [
        {
          question: "Which Vue.js feature uses a virtual DOM for efficient updates?",
          options: ["Reactive Data Binding", "Component-Based Architecture", "Directives", "All of the above"],
          answer: "All of the above"
        },
        {
          question: "What is a key characteristic of Svelte's approach?",
          options: ["It uses a heavy runtime library.", "It is a compiler that pre-compiles components into optimized JavaScript.", "It requires a virtual DOM for all operations.", "It only works for backend development."],
          answer: "It is a compiler that pre-compiles components into optimized JavaScript."
        },
        {
          question: "Which tool in the Vue.js ecosystem is used for state management?",
          options: ["Vue Router", "Vuex", "Vue CLI", "Vite"],
          answer: "Vuex"
        },
        {
          question: "What is the main advantage of Server-Side Rendering (SSR)?",
          options: ["It makes websites slower.", "It delivers pre-rendered content for faster loading and better SEO.", "It only works for static sites.", "It removes all JavaScript from the client."],
          answer: "It delivers pre-rendered content for faster loading and better SEO."
        }
      ],
      "Session 7": [
        {
          question: "Which JavaScript library is mentioned for developing and executing Machine Learning models in the browser?",
          options: ["React.js", "TensorFlow.js", "jQuery", "Lodash"],
          answer: "TensorFlow.js"
        },
        {
          question: "What is the first step in building a simple text-based chatbot?",
          options: ["Intent Recognition", "Data Collection", "Response Generation", "Text Preprocessing"],
          answer: "Data Collection"
        },
        {
          question: "Which technique is used in NLP to break text into words or symbols?",
          options: ["Lemmatization", "Tokenization", "Part-of-Speech Tagging", "Stop-Word Removal"],
          answer: "Tokenization"
        },
        {
          question: "What is a common challenge when working with AI models, as mentioned in the debugging section?",
          options: ["Overfitting and Underfitting", "Too many comments", "Lack of colors", "Slow internet connection"],
          answer: "Overfitting and Underfitting"
        }
      ],
      "Session 8": [
        {
          question: "What is the primary benefit of dynamic imports?",
          options: ["They make code harder to read.", "They load modules only when needed, improving initial load time.", "They delete old modules automatically.", "They convert all code to TypeScript."],
          answer: "They load modules only when needed, improving initial load time."
        },
        {
          question: "Which emerging Web API allows web apps to read and write files to the user's device securely?",
          options: ["WebXR API", "File System Access API", "WebSockets API", "Geolocation API"],
          answer: "File System Access API"
        },
        {
          question: "What does WebXR enable?",
          options: ["Voice-controlled applications", "Virtual and Augmented Reality experiences in the browser", "Offline-only applications", "Automatic code generation"],
          answer: "Virtual and Augmented Reality experiences in the browser"
        },
        {
          question: "What is the concept of \"Micro Frontends\"?",
          options: ["Using very small fonts in the design", "An architectural approach that splits a large app into smaller, independently developed frontend modules", "A new JavaScript data type", "A tool for minifying HTML"],
          answer: "An architectural approach that splits a large app into smaller, independently developed frontend modules"
        }
      ]
    },
    "Data Processing with XML and JSON": {
      "Session 1": [
        {
          question: "What does XML stand for?",
          options: ["Extensible Modern Language", "Extra Markup Language", "Extensible Markup Language", "Example Markup Language"],
          answer: "Extensible Markup Language"
        },
        {
          question: "Which of the following is NOT a key way data is symbolized in XML?",
          options: ["Elements", "Text Content", "Attributes", "Functions"],
          answer: "Functions"
        },
        {
          question: "What is one of the key features of XML?",
          options: ["It combines data and presentation.", "It is not extensible.", "It supports Unicode.", "It is difficult to parse."],
          answer: "It supports Unicode."
        },
        {
          question: "Which technology is used for transforming XML documents into other formats?",
          options: ["XPath", "XSLT", "SOAP", "RDF"],
          answer: "XSLT"
        },
        {
          question: "What is the purpose of XML validation?",
          options: ["To make the XML file smaller", "To ensure the document conforms to a schema or DTD", "To convert XML to JSON", "To encrypt the XML data"],
          answer: "To ensure the document conforms to a schema or DTD"
        },
        {
          question: "What are the two main types of DTD?",
          options: ["Internal and External", "Simple and Complex", "Strict and Transitional", "Local and Global"],
          answer: "Internal and External"
        }
      ],
      "Session 2": [
        {
          question: "What is the primary function of an XML parser?",
          options: ["To display XML in a browser", "To read, examine, and understand XML documents", "To convert XML to HTML", "To validate XML against a JSON schema"],
          answer: "To read, examine, and understand XML documents"
        },
        {
          question: "How is an XML document represented in memory by the XML DOM?",
          options: ["As a linear list", "As a table", "As a tree-like structure", "As a graph"],
          answer: "As a tree-like structure"
        },
        {
          question: "Which of the following is a type of XML database?",
          options: ["Relational Database", "Native XML Database", "Graph Database", "Key-Value Store"],
          answer: "Native XML Database"
        },
        {
          question: "What is the primary purpose of using namespaces in XML?",
          options: ["To make the document run faster", "To prevent naming conflicts and uniquely identify elements", "To reduce the file size", "To add comments to the document"],
          answer: "To prevent naming conflicts and uniquely identify elements"
        }
      ],
      "Session 3": [
        {
          question: "What is XPath primarily used for?",
          options: ["Styling XML documents", "Navigating and selecting elements from an XML document", "Validating XML against a DTD", "Transforming XML into XHTML"],
          answer: "Navigating and selecting elements from an XML document"
        },
        {
          question: "Which of the following is NOT a primary node type in XPath?",
          options: ["Element Nodes", "Attribute Nodes", "Function Nodes", "Comment Nodes"],
          answer: "Function Nodes"
        },
        {
          question: "An XPath expression that starts with a forward slash (/) is known as what?",
          options: ["A Relative Path", "An Absolute Path", "A Wildcard Path", "A Node Path"],
          answer: "An Absolute Path"
        },
        {
          question: "Which XPath expression is an example of a relative path?",
          options: ["/bookstore/book", "//book", "bookstore/book[@category='fiction']", "/"],
          answer: "bookstore/book[@category='fiction']"
        },
        {
          question: "What type of operators does XPath provide for manipulating data?",
          options: ["Only Arithmetic Operators", "Comparison, Logical, and String Operators", "Only Logical Operators", "Only String Operators"],
          answer: "Comparison, Logical, and String Operators"
        }
      ],
      "Session 4": [
        {
          question: "What is the primary purpose of XSLT?",
          options: ["To query XML databases", "To define the structure of an XML document", "To transform XML documents into other formats", "To encrypt XML data"],
          answer: "To transform XML documents into other formats"
        },
        {
          question: "Which XSLT element is used to define a template rule?",
          options: ["<xsl:stylesheet>", "<xsl:template>", "<xsl:value-of>", "<xsl:for-each>"],
          answer: "<xsl:template>"
        },
        {
          question: "What language is used within XSLT to navigate through elements and attributes in an XML document?",
          options: ["XQuery", "XLink", "XPath", "XPointer"],
          answer: "XPath"
        },
        {
          question: "Which characteristic is a key feature of XSLT?",
          options: ["It is a procedural programming language.", "It is template-based.", "It cannot use conditional processing.", "It only outputs other XML documents."],
          answer: "It is template-based."
        }
      ],
      "Session 5": [
        {
          question: "What does JSON stand for?",
          options: ["JavaScript Object Notation", "Java Standard Object Notation", "JavaScript Online Notation", "Java Simple Object Notation"],
          answer: "JavaScript Object Notation"
        },
        {
          question: "Which of the following is a data type supported by JSON?",
          options: ["Function", "Date", "Undefined", "Array"],
          answer: "Array"
        },
        {
          question: "How is a JSON object enclosed?",
          options: ["Square Brackets []", "Parentheses ()", "Curly Braces {}", "Angle Brackets <>"],
          answer: "Curly Braces {}"
        },
        {
          question: "What is a key difference between JSON and XML?",
          options: ["JSON is document-oriented, XML is data-oriented.", "JSON is more verbose than XML.", "JSON is data-oriented, XML is document-oriented.", "JSON has native support for comments."],
          answer: "JSON is data-oriented, XML is document-oriented."
        },
        {
          question: "How are multiple values stored in a specific sequence in JSON?",
          options: ["In an Object", "In an Array", "In a String", "In a Number"],
          answer: "In an Array"
        }
      ],
      "Session 6": [
        {
          question: "Which of the following is NOT a valid JSON data type?",
          options: ["String", "Number", "Boolean", "Function"],
          answer: "Function"
        },
        {
          question: "What is the purpose of a JSON Schema?",
          options: ["To execute JSON code", "To annotate and validate the structure and content of JSON data", "To minify JSON files", "To convert JSON to XML"],
          answer: "To annotate and validate the structure and content of JSON data"
        },
        {
          question: "What does metadata in a JSON document typically provide?",
          options: ["The main data content", "Supplementary information about the data, like authorship or timestamps", "The execution logic", "Comments for the parser"],
          answer: "Supplementary information about the data, like authorship or timestamps"
        },
        {
          question: "How are comments natively supported in JSON?",
          options: ["They are enclosed in /* */.", "They are enclosed in //.", "They are enclosed in <!-- -->.", "They are not natively supported."],
          answer: "They are not natively supported."
        }
      ],
      "Session 7": [
        {
          question: "JSON is widely supported in many programming languages. Which of these is a reason for its popularity?",
          options: ["It is a complex and verbose format.", "It is language-independent and human-readable.", "It can only be used with JavaScript.", "It requires special software to parse."],
          answer: "It is language-independent and human-readable."
        },
        {
          question: "In the context of Web APIs, what does RESTful commonly use as its data format?",
          options: ["XML only", "CSV", "JSON and XML", "YAML"],
          answer: "JSON and XML"
        },
        {
          question: "Which of these is a security consideration when using JSON?",
          options: ["JSON Injection", "Tree Shaking", "Code Splitting", "Lazy Loading"],
          answer: "JSON Injection"
        },
        {
          question: "What is a key portability consideration for JSON data?",
          options: ["Data Schema Evolution", "The color scheme of the data", "The font used to display the data", "The programming language used to create it"],
          answer: "Data Schema Evolution"
        }
      ],
      "Session 8": [
        {
          question: "What does CORS stand for?",
          options: ["Cross-Origin Resource Sharing", "Cross-Origin Request Security", "Centralized Origin Resource System", "Cross-Platform Origin Resource Sharing"],
          answer: "Cross-Origin Resource Sharing"
        },
        {
          question: "What is the primary purpose of CORS?",
          options: ["To block all requests between different origins", "To allow Web browsers to securely access resources from different origins", "To make websites load faster", "To replace HTTP with a new protocol"],
          answer: "To allow Web browsers to securely access resources from different origins"
        },
        {
          question: "Which header does a server use to tell the browser that it allows requests from a specific origin?",
          options: ["Content-Type", "Origin", "Access-Control-Allow-Origin", "X-Requested-With"],
          answer: "Access-Control-Allow-Origin"
        },
        {
          question: "Which of the following is a type of CORS request?",
          options: ["Complex Request", "Preflight Request", "Synchronous Request", "Local Request"],
          answer: "Preflight Request"
        }
      ]
    },
    "Fundamentals of Millennial Entrepreneurship": {
      "Session 1": [
        {
          question: "What is an entrepreneur?",
          options: ["A person who only invests money in businesses", "A person who creates, establishes, and operates a business venture, bearing most of the risks", "An employee who manages a company's department", "A person who only comes up with ideas but does not execute them"],
          answer: "A person who creates, establishes, and operates a business venture, bearing most of the risks"
        },
        {
          question: "From which language does the word 'entrepreneur' originate?",
          options: ["Latin", "German", "French", "English"],
          answer: "French"
        },
        {
          question: "Which of the following is a type of entrepreneurship based on ownership?",
          options: ["Technical", "Small-scale", "Innovative", "Partnership"],
          answer: "Partnership"
        },
        {
          question: "What is a key disadvantage of a partnership?",
          options: ["There is more capital available.", "Decision-making has to be a joint process.", "Business activities can be split and assigned.", "It is easier to manage."],
          answer: "Decision-making has to be a joint process."
        },
        {
          question: "Which personal trait describes an entrepreneur who \"discovers or creates new products or new ideas\"?",
          options: ["Imitative", "Hustler", "Innovative", "Buyer"],
          answer: "Innovative"
        },
        {
          question: "Which of the following is a characteristic of a successful entrepreneur?",
          options: ["Risk Aversion", "Perseverance", "Resistance to Change", "Dependency on others"],
          answer: "Perseverance"
        },
        {
          question: "What is the first step in the process of entrepreneurship?",
          options: ["Financing the business venture", "Generating a core idea", "Drafting a business plan", "Managing the business"],
          answer: "Generating a core idea"
        },
        {
          question: "Which of the following is a MYTH about entrepreneurship?",
          options: ["Entrepreneurs are self-made.", "Entrepreneurs earn lots of money right from the start.", "Delegation is crucial for success.", "Knowing when to quit is important."],
          answer: "Entrepreneurs earn lots of money right from the start."
        },
        {
          question: "Who is considered a Millennial or Gen Y?",
          options: ["Someone born on or after 1981", "Someone born before 1980", "Someone born after 2000", "Someone born between 1965 and 1979"],
          answer: "Someone born on or after 1981"
        }
      ],
      "Session 2": [
        {
          question: "What is a team?",
          options: ["A group of people working independently on different goals", "A single person managing a project", "A group of people working together for a common goal", "A company's board of directors"],
          answer: "A group of people working together for a common goal"
        },
        {
          question: "Who introduced the \"Two-Pizza Team\" norm?",
          options: ["Bruce Tuckman", "Peter Drucker", "Jeff Bezos", "Genn M. Parker"],
          answer: "Jeff Bezos"
        },
        {
          question: "According to Genn M. Parker, which type of team player is focused on the TASK?",
          options: ["Collaborator", "Contributor", "Communicator", "Challenger"],
          answer: "Contributor"
        },
        {
          question: "What is the first stage in Bruce Tuckman's stages of team development?",
          options: ["Storming", "Norming", "Forming", "Performing"],
          answer: "Forming"
        },
        {
          question: "During which stage of team development does the team start solving problems?",
          options: ["Forming", "Storming", "Norming", "Performing"],
          answer: "Performing"
        },
        {
          question: "Which of the following is a key factor in successful collaboration?",
          options: ["Isolation", "Trust", "Ambiguity", "Individualism"],
          answer: "Trust"
        },
        {
          question: "Which generation is known as the \"Collaboration Generation\"?",
          options: ["Generation X", "Baby Boomers", "Millennials", "Generation Z"],
          answer: "Millennials"
        }
      ],
      "Session 3": [
        {
          question: "What is Digital Transformation?",
          options: ["The process of hiring digital marketers", "The process of using digital technology to upgrade and improve all areas of the business", "The process of converting digital files to paper", "The process of selling products online only"],
          answer: "The process of using digital technology to upgrade and improve all areas of the business"
        },
        {
          question: "Which of the following is a BENEFIT of digital transformation?",
          options: ["Resistance to change", "Lack of appropriate skill-set", "Gain competitive advantage", "Risk of malware and security threats"],
          answer: "Gain competitive advantage"
        },
        {
          question: "Which of the following is NOT one of the four key areas of digital transformation?",
          options: ["Technology and Data", "Business Model", "Business Process", "Competitor Analysis"],
          answer: "Competitor Analysis"
        },
        {
          question: "According to Brian Solis, what is the final stage of digital transformation?",
          options: ["Status Quo", "Strategic", "Converged", "Innovative and Adaptive"],
          answer: "Innovative and Adaptive"
        },
        {
          question: "Which driver of digital transformation refers to \"increasingly tech-savvy customers requiring highly personalized experiences\"?",
          options: ["Social Media", "Rising Customer Expectations", "Big Data and AI", "Cloud Infrastructure"],
          answer: "Rising Customer Expectations"
        },
        {
          question: "A network of connected objects that draws data in real-time using embedded sensors is known as:",
          options: ["Artificial Intelligence (AI)", "Internet of Things (IoT)", "Cloud Technology", "Digital Twin"],
          answer: "Internet of Things (IoT)"
        },
        {
          question: "Which technology uses computer software to create a simulated or artificial environment?",
          options: ["Augmented Reality", "3D Printing", "Virtual Reality", "Robotics"],
          answer: "Virtual Reality"
        }
      ],
      "Session 4": [
        {
          question: "What was the first true social media website, launched in 1997?",
          options: ["Facebook", "Six Degrees", "LinkedIn", "MySpace"],
          answer: "Six Degrees"
        },
        {
          question: "Which social media platform is specifically targeted at professionals?",
          options: ["Instagram", "LinkedIn", "TikTok", "Snapchat"],
          answer: "LinkedIn"
        },
        {
          question: "Which of the following is a CHALLENGE of using social media for business?",
          options: ["Extensive user visibility", "Building brand awareness", "Increased security risks", "Platform to showcase capabilities"],
          answer: "Increased security risks"
        },
        {
          question: "What is the first step in \"Building Social Media for Your Business\"?",
          options: ["Set up the Profile page", "Secure the account", "Select suitable social media", "Follow best practices"],
          answer: "Select suitable social media"
        },
        {
          question: "Which type of social media contains content that disappears after 24 hours?",
          options: ["Social Networks", "Media Sharing Networks", "Discussion Forums", "Ephemeral Content"],
          answer: "Ephemeral Content"
        },
        {
          question: "Which type of social media allows users to rate and share their product or service experience?",
          options: ["Business Platforms", "Consumer Review Networks", "Publishing and Blogging Networks", "Interest-Based Platforms"],
          answer: "Consumer Review Networks"
        },
        {
          question: "What is the term for obtaining new business and allowing customers to share their experiences through a large group of people on the internet?",
          options: ["Social Media Marketing", "Crowdsourcing", "Social Media Recruiting", "Social Media Analytics"],
          answer: "Crowdsourcing"
        }
      ],
      "Session 5": [
        {
          question: "What is freelancing?",
          options: ["Full-time employment with a single company", "Contract-based self-employment for short and long-term projects", "Unpaid internship work", "Managing a large team of employees"],
          answer: "Contract-based self-employment for short and long-term projects"
        },
        {
          question: "Which pricing strategy involves charging a one-time fixed fee agreed upon with the client?",
          options: ["Hourly Rate", "Monthly", "Fixed", "Value-based"],
          answer: "Fixed"
        },
        {
          question: "What is a key difference between a freelancer and an entrepreneur?",
          options: ["A freelancer employs numerous people.", "An entrepreneur typically works solo.", "A freelancer gets paid for work done and often runs a one-person business.", "An entrepreneur does not take financial risks."],
          answer: "A freelancer gets paid for work done and often runs a one-person business."
        },
        {
          question: "Which of the following is an ADVANTAGE of freelancing?",
          options: ["Unstable income", "Absence of employee benefits", "Flexible work timings", "Difficulty finding steady work"],
          answer: "Flexible work timings"
        },
        {
          question: "What is a prerequisite to starting freelancing?",
          options: ["Having a large office space", "Employing a team of assistants", "Required educational qualification and skill set", "Guarantee of a fixed monthly income"],
          answer: "Required educational qualification and skill set"
        },
        {
          question: "What is one of the first steps to start freelancing?",
          options: ["Hire a marketing manager", "Define goals and work requirements", "Buy a competitor's business", "Stop all current work immediately"],
          answer: "Define goals and work requirements"
        },
        {
          question: "How can a freelancer promote their business?",
          options: ["By working in isolation", "By avoiding social media", "By asking for business referrals", "By not having a portfolio"],
          answer: "By asking for business referrals"
        },
        {
          question: "What mindset should a successful freelancer adopt?",
          options: ["An employee mindset", "An entrepreneurial mindset", "A dependent mindset", "A rigid mindset"],
          answer: "An entrepreneurial mindset"
        }
      ]
    },
    "Laravel Framework for Web Applications": {
      "Session 1": [
        {
          question: "Which of the following is NOT a core component for setting up a Laravel development environment as listed?",
          options: ["PHP", "Composer", "Node.js", "Vagrant"],
          answer: "Node.js"
        },
        {
          question: "What is the primary purpose of Composer in a Laravel project?",
          options: ["To manage virtual machines", "To act as a dependency management tool for PHP", "To provide a command-line interface for Git", "To create a local server"],
          answer: "To act as a dependency management tool for PHP"
        },
        {
          question: "Which software is described as a \"free and open-source hypervisor\" that allows running guest VMs like Homestead?",
          options: ["Vagrant", "VirtualBox", "Git Bash", "Composer"],
          answer: "VirtualBox"
        },
        {
          question: "What is the correct command to start the Homestead virtual machine?",
          options: ["vagrant init", "vagrant up", "homestead run", "composer start"],
          answer: "vagrant up"
        },
        {
          question: "Which command is used to verify the installed version of Composer?",
          options: ["composer --version", "composer -V", "composer check", "Both a and b"],
          answer: "Both a and b"
        }
      ],
      "Session 2": [
        {
          question: "Laravel is an open-source PHP framework that uses which design pattern?",
          options: ["Model-View-Template (MVT)", "Model-View-Controller (MVC)", "Factory", "Singleton"],
          answer: "Model-View-Controller (MVC)"
        },
        {
          question: "What is the main purpose of a framework like Laravel?",
          options: ["To develop, test, and deploy applications rapidly and efficiently.", "To replace the need for a database.", "To write low-level PHP code.", "To design user interfaces."],
          answer: "To develop, test, and deploy applications rapidly and efficiently."
        },
        {
          question: "Which Laravel feature is an automation tool used to create models, views, and controllers?",
          options: ["Helper Functions", "Eloquent ORM", "Artisan Commands", "Blade Templating"],
          answer: "Artisan Commands"
        },
        {
          question: "The principle of \"Convention over Configuration\" in Laravel helps in:",
          options: ["Writing more configuration files", "Predicting dependencies and automating configuration tasks", "Making the application slower", "Removing the need for a database"],
          answer: "Predicting dependencies and automating configuration tasks"
        },
        {
          question: "Which directory in a Laravel project structure is primarily responsible for storing application logic and classes?",
          options: ["vendor", "public", "config", "app"],
          answer: "app"
        }
      ],
      "Session 3": [
        {
          question: "In Laravel, where are the route definitions typically stored?",
          options: ["app/Http/Controllers directory", "routes/web.php file", "config/app.php file", "resources/views directory"],
          answer: "routes/web.php file"
        },
        {
          question: "What is the correct syntax to define a route that responds to a GET request for the URL '/test'?",
          options: ["Route::post('/test', function() { ... });", "Get::route('/test', function() { ... });", "Route::get('test', function() { ... });", "Route::get('/test', function() { ... });"],
          answer: "Route::get('/test', function() { ... });"
        },
        {
          question: "Where are view files located in a Laravel application?",
          options: ["storage/views", "app/Views", "resources/views", "public/views"],
          answer: "resources/views"
        },
        {
          question: "Blade is Laravel's:",
          options: ["Object-Relational Mapper", "Package Manager", "Lightweight Templating Engine", "Command-Line Tool"],
          answer: "Lightweight Templating Engine"
        },
        {
          question: "To make a view inherit from a master layout template, which Blade directive is used?",
          options: ["@include", "@yield", "@extends", "@section"],
          answer: "@extends"
        }
      ],
      "Session 4": [
        {
          question: "Which command is used to create a new Laravel application named 'hrm'?",
          options: ["php artisan new hrm", "composer create-project hrm", "laravel new hrm", "vagrant init hrm"],
          answer: "laravel new hrm"
        },
        {
          question: "What is the purpose of database migrations in Laravel?",
          options: ["To seed the database with fake data.", "To act as a version control system for your database schema.", "To create database backups.", "To manage user authentication."],
          answer: "To act as a version control system for your database schema."
        },
        {
          question: "Which Artisan command is used to create a new migration file?",
          options: ["php artisan make:model Migration", "php artisan migrate:create", "php artisan make:migration", "php artisan schema:create"],
          answer: "php artisan make:migration"
        },
        {
          question: "The Form builder class, used for creating HTML forms, is provided by which package?",
          options: ["Laravel UI", "LaravelCollective/Html", "Laravel Forms", "Symfony Form"],
          answer: "LaravelCollective/Html"
        },
        {
          question: "Which method is used inside a Blade layout template to display the content of a section?",
          options: ["@show", "@display", "@yield", "@render"],
          answer: "@yield"
        }
      ],
      "Session 5": [
        {
          question: "Eloquent ORM is the ____________ layer in the MVC pattern.",
          options: ["View", "Controller", "Model", "Middleware"],
          answer: "Model"
        },
        {
          question: "Which Artisan command is used to create an Eloquent Model named 'Employee'?",
          options: ["php artisan model:make Employee", "php artisan make:model Employee", "php artisan create:model Employee", "php artisan generate:model Employee"],
          answer: "php artisan make:model Employee"
        },
        {
          question: "To allow mass assignment for the 'name' and 'salary' fields in an Eloquent model, you would use:",
          options: ["$guarded = ['name', 'salary'];", "$fillable = ['name', 'salary'];", "$massAssign = ['name', 'salary'];", "$attributes = ['name', 'salary'];"],
          answer: "$fillable = ['name', 'salary'];"
        },
        {
          question: "Which Eloquent method is used to retrieve a record by its primary key?",
          options: ["get()", "all()", "find()", "first()"],
          answer: "find()"
        },
        {
          question: "What is the difference between a hard delete and a soft delete?",
          options: ["A hard delete removes records from the UI, a soft delete removes them from the database.", "A hard delete removes records permanently from the database, a soft delete only marks them as deleted.", "There is no difference.", "A soft delete is faster than a hard delete."],
          answer: "A hard delete removes records permanently from the database, a soft delete only marks them as deleted."
        }
      ],
      "Session 6": [
        {
          question: "What is the main advantage of using a Controller over defining all logic in route files?",
          options: ["It makes the application slower.", "It helps in organizing the application and separating concerns.", "It is required for using Eloquent ORM.", "It automatically creates views."],
          answer: "It helps in organizing the application and separating concerns."
        },
        {
          question: "Which Artisan command creates a resource controller with pre-defined methods for CRUD operations?",
          options: ["php artisan controller:make EmployeeController", "php artisan make:controller EmployeeController --resource", "php artisan generate:resource EmployeeController", "php artisan create:resource-controller EmployeeController"],
          answer: "php artisan make:controller EmployeeController --resource"
        },
        {
          question: "Which HTTP method is typically associated with the store() function in a Resource Controller?",
          options: ["GET", "PUT", "POST", "DELETE"],
          answer: "POST"
        },
        {
          question: "In Laravel, where is the configuration for sessions stored?",
          options: [".env file", "config/session.php", "app/Session.php", "storage/framework/sessions"],
          answer: "config/session.php"
        },
        {
          question: "Which Artisan command scaffolds all the routes and views needed for user authentication?",
          options: ["php artisan auth:scaffold", "php artisan make:auth", "php artisan ui:auth", "php artisan install:auth"],
          answer: "php artisan make:auth"
        }
      ]
    },
    "Practical MySQL": {
      "Session 1": [
        {
          question: "Which of the following is a key difference between DBMS and RDBMS?",
          options: ["DBMS supports distributed databases, while RDBMS does not.", "DBMS allows normalization, while RDBMS does not.", "Data is stored in a hierarchical form in DBMS and in table format in RDBMS.", "RDBMS has no security for data, unlike DBMS."],
          answer: "Data is stored in a hierarchical form in DBMS and in table format in RDBMS."
        },
        {
          question: "What is the primary purpose of Normalization in a database?",
          options: ["To increase data redundancy", "To organize data to reduce redundancy and avoid anomalies", "To make the database slower", "To remove all primary keys"],
          answer: "To organize data to reduce redundancy and avoid anomalies"
        },
        {
          question: "Which of these is NOT a common RDBMS terminology?",
          options: ["Table", "Redundancy", "Primary Key", "Loop"],
          answer: "Loop"
        },
        {
          question: "MySQL is commonly used by which of the following?",
          options: ["Operating Systems", "Web Applications and Content Management Systems (like WordPress)", "Graphic Design Software", "Antivirus Programs"],
          answer: "Web Applications and Content Management Systems (like WordPress)"
        },
        {
          question: "Which tool can be used to obtain server status in MySQL?",
          options: ["mysqladmin", "workbench", "phpMyAdmin", "mysqldump"],
          answer: "mysqladmin"
        }
      ],
      "Session 2": [
        {
          question: "Which SQL command category is used to define or modify database structures like tables?",
          options: ["Data Manipulation Language (DML)", "Data Control Language (DCL)", "Data Definition Language (DDL)", "Transaction Control Language (TCL)"],
          answer: "Data Definition Language (DDL)"
        },
        {
          question: "Which DDL command is used to remove a database or table?",
          options: ["DELETE", "TRUNCATE", "DROP", "ALTER"],
          answer: "DROP"
        },
        {
          question: "The MERGE command includes which of the following scenarios?",
          options: ["Matched, Not Matched, Not Matched by Source", "Joined, Filtered, Sorted", "Selected, Inserted, Updated", "Created, Altered, Dropped"],
          answer: "Matched, Not Matched, Not Matched by Source"
        },
        {
          question: "Which MySQL data type is used to store geometrical and geographical values?",
          options: ["String Data Type", "Spatial Data Type", "JSON Type", "Temporal Data Type"],
          answer: "Spatial Data Type"
        },
        {
          question: "What is the purpose of the TRUNCATE TABLE statement?",
          options: ["To delete the table structure", "To remove all records from a table", "To add a new column to a table", "To rename a table"],
          answer: "To remove all records from a table"
        }
      ],
      "Session 3": [
        {
          question: "Which clause is used to filter records in a SELECT statement?",
          options: ["GROUP BY", "ORDER BY", "WHERE", "HAVING"],
          answer: "WHERE"
        },
        {
          question: "What does the DISTINCT clause do?",
          options: ["Sorts the results", "Fetches unique values from a table", "Groups the results", "Joins two tables"],
          answer: "Fetches unique values from a table"
        },
        {
          question: "Which keyword is used to retrieve records that match a pattern, such as names starting with 'A'?",
          options: ["IN", "BETWEEN", "LIKE", "EXISTS"],
          answer: "LIKE"
        },
        {
          question: "What is the correct syntax to insert data into a table?",
          options: ["INSERT DATA INTO table_name VALUES (...);", "ADD RECORD table_name (...);", "INSERT INTO table_name VALUES (...);", "INPUT INTO table_name (...);"],
          answer: "INSERT INTO table_name VALUES (...);"
        },
        {
          question: "How can you delete all records from a table named employees?",
          options: ["DELETE * FROM employees;", "DROP TABLE employees;", "TRUNCATE TABLE employees;", "Both a and c"],
          answer: "Both a and c"
        }
      ],
      "Session 4": [
        {
          question: "What is the primary purpose of a JOIN in MySQL?",
          options: ["To create a new table", "To combine and retrieve data from more than one table", "To delete data from multiple tables", "To update all records in a table"],
          answer: "To combine and retrieve data from more than one table"
        },
        {
          question: "Which type of JOIN returns all rows from the left table and the matched rows from the right table?",
          options: ["INNER JOIN", "RIGHT JOIN", "LEFT JOIN", "CROSS JOIN"],
          answer: "LEFT JOIN"
        },
        {
          question: "A SELF JOIN is:",
          options: ["A join between two different databases", "A join of a table with itself", "A join that uses the SELF keyword", "A join that always returns an empty set"],
          answer: "A join of a table with itself"
        },
        {
          question: "Which SET operator combines the results of two SELECT statements and removes duplicates?",
          options: ["UNION ALL", "INTERSECT", "UNION", "MINUS"],
          answer: "UNION"
        },
        {
          question: "What is a key difference between UNION and UNION ALL?",
          options: ["UNION sorts the results, UNION ALL does not.", "UNION removes duplicates, UNION ALL includes them.", "UNION only works with two tables, UNION ALL works with many.", "UNION is a DDL command, UNION ALL is a DML command."],
          answer: "UNION removes duplicates, UNION ALL includes them."
        }
      ],
      "Session 5": [
        {
          question: "What is a subquery?",
          options: ["A query that runs after the main query", "A query that is nested inside another query", "A query that creates a sub-table", "A query used only with the UPDATE command"],
          answer: "A query that is nested inside another query"
        },
        {
          question: "Which keyword is used in a subquery to check for the existence of rows?",
          options: ["IN", "LIKE", "EXISTS", "BETWEEN"],
          answer: "EXISTS"
        },
        {
          question: "A subquery that returns no record or a single record to the outer query is known as a:",
          options: ["Multiple Row Subquery", "Correlated Subquery", "Single Row Subquery", "Nested Subquery"],
          answer: "Single Row Subquery"
        },
        {
          question: "In a correlated subquery:",
          options: ["The inner query runs independently of the outer query.", "The inner query references the outer query's table.", "The outer query must be executed first.", "It always returns multiple rows."],
          answer: "The inner query references the outer query's table."
        },
        {
          question: "Which clause in a subquery is useful for calculating aggregate values like SUM() or AVG()?",
          options: ["WHERE clause", "HAVING clause", "FROM clause", "GROUP BY clause"],
          answer: "FROM clause"
        }
      ],
      "Session 6": [
        {
          question: "Which of the following is a MySQL mathematical function?",
          options: ["CONCAT()", "NOW()", "SQRT()", "IFNULL()"],
          answer: "SQRT()"
        },
        {
          question: "What is the purpose of the IFNULL() function?",
          options: ["To check if a value is a number", "To replace NULL values with a specified value", "To convert a string to uppercase", "To calculate the average of a set of values"],
          answer: "To replace NULL values with a specified value"
        },
        {
          question: "Which function returns the current date and time?",
          options: ["CURDATE()", "CURTIME()", "NOW()", "DATE_ADD()"],
          answer: "NOW()"
        },
        {
          question: "Stored routines in MySQL can be:",
          options: ["Only Procedures", "Only Functions", "Either Procedures or Functions", "Only Triggers"],
          answer: "Either Procedures or Functions"
        },
        {
          question: "What is the correct syntax to drop a function named getSalary?",
          options: ["DELETE FUNCTION getSalary;", "DROP FUNCTION getSalary;", "REMOVE FUNCTION getSalary;", "ALTER FUNCTION getSalary;"],
          answer: "DROP FUNCTION getSalary;"
        }
      ],
      "Session 7": [
        {
          question: "Which clause is used to filter groups in a GROUP BY clause?",
          options: ["WHERE", "HAVING", "ORDER BY", "LIMIT"],
          answer: "HAVING"
        },
        {
          question: "The ROLLUP modifier is used with which clause to provide summary rows?",
          options: ["ORDER BY", "WHERE", "GROUP BY", "HAVING"],
          answer: "GROUP BY"
        },
        {
          question: "What is the primary purpose of an index in MySQL?",
          options: ["To create a backup of the table", "To enforce referential integrity", "To speed up data retrieval", "To store historical data"],
          answer: "To speed up data retrieval"
        },
        {
          question: "When is it generally NOT advisable to use an index?",
          options: ["When the table is large", "When the column has many unique values", "When the table is small", "When the column is frequently used in WHERE clauses"],
          answer: "When the table is small"
        },
        {
          question: "Which statement is used to create an index?",
          options: ["CREATE INDEX", "ADD INDEX", "MAKE INDEX", "NEW INDEX"],
          answer: "CREATE INDEX"
        }
      ],
      "Session 8": [
        {
          question: "What does the 'A' in ACID properties of a transaction stand for?",
          options: ["Availability", "Atomicity", "Accuracy", "Association"],
          answer: "Atomicity"
        },
        {
          question: "Which command is used to make the changes of a transaction permanent?",
          options: ["ROLLBACK", "COMMIT", "SAVEPOINT", "BEGIN"],
          answer: "COMMIT"
        },
        {
          question: "What is the purpose of the mysqldump utility?",
          options: ["To start the MySQL server", "To create a backup of a MySQL database", "To create a new user", "To optimize query performance"],
          answer: "To create a backup of a MySQL database"
        },
        {
          question: "In replication, the server that sends the data is called the:",
          options: ["Replica", "Slave", "Source (Master)", "Listener"],
          answer: "Source (Master)"
        },
        {
          question: "Which property of a transaction ensures that it is executed without interfering with other transactions?",
          options: ["Atomicity", "Consistency", "Isolation", "Durability"],
          answer: "Isolation"
        }
      ],
      "Session 9": [
        {
          question: "What is MySQL Replication?",
          options: ["The process of backing up data to a tape drive", "The process of copying data from a source server to one or more replica servers", "The process of partitioning a large table", "The process of creating database indexes"],
          answer: "The process of copying data from a source server to one or more replica servers"
        },
        {
          question: "Which type of replication logs the entire SQL statements that modify data?",
          options: ["Row-Based Replication (RBR)", "Statement-Based Replication (SBR)", "Mixed Format Replication", "Group Replication"],
          answer: "Statement-Based Replication (SBR)"
        },
        {
          question: "A key advantage of Row-Based Replication (RBR) is:",
          options: ["It generates less data in the binary log.", "It is less sensitive to non-deterministic queries.", "It is easier to audit.", "It uses less network traffic."],
          answer: "It is less sensitive to non-deterministic queries."
        },
        {
          question: "Scalability in MySQL refers to:",
          options: ["The ability to recover from hardware failure", "The capability to extend the database and load across several servers", "The process of compressing data", "The method for securing user passwords"],
          answer: "The capability to extend the database and load across several servers"
        },
        {
          question: "What is a 'replication heartbeat'?",
          options: ["A signal to check if the replica server is still functional", "A method to speed up replication", "A type of replication error", "A backup of the replication configuration"],
          answer: "A signal to check if the replica server is still functional"
        }
      ],
      "Session 10": [
        {
          question: "What is partitioning in MySQL?",
          options: ["The process of dividing a table's rows into separate tables in different locations", "The process of creating database backups", "The process of joining multiple tables", "The process of creating user accounts"],
          answer: "The process of dividing a table's rows into separate tables in different locations"
        },
        {
          question: "Which partitioning type splits a table based on column values falling within a specified range?",
          options: ["List Partitioning", "Hash Partitioning", "Range Partitioning", "Key Partitioning"],
          answer: "Range Partitioning"
        },
        {
          question: "What is 'partition pruning'?",
          options: ["Adding new partitions to a table", "The technique of not scanning partitions that do not contain matching values", "Merging two partitions into one", "Deleting old partitions"],
          answer: "The technique of not scanning partitions that do not contain matching values"
        },
        {
          question: "Which MySQL lock allows multiple sessions to read data but prevents them from writing?",
          options: ["Write Lock (Exclusive Lock)", "Read Lock (Shared Lock)", "Update Lock", "Intent Lock"],
          answer: "Read Lock (Shared Lock)"
        },
        {
          question: "A major restriction on partitioning is that a partitioned table cannot contain:",
          options: ["A primary key", "Any indexes", "A foreign key", "VARCHAR columns"],
          answer: "A foreign key"
        }
      ],
      "Session 11": [
        {
          question: "The EXPLAIN statement is used to:",
          options: ["Delete a table", "Show how MySQL executes a SQL statement", "Create a new database", "Grant permissions to a user"],
          answer: "Show how MySQL executes a SQL statement"
        },
        {
          question: "Which of the following is a benefit of query optimization?",
          options: ["Increases hardware costs", "Makes queries run slower", "Reduces the time and computing power needed", "Increases data redundancy"],
          answer: "Reduces the time and computing power needed"
        },
        {
          question: "What does the LIMIT clause do?",
          options: ["Sorts the result set", "Specifies the number of rows to return", "Groups the result set", "Filters rows before grouping"],
          answer: "Specifies the number of rows to return"
        },
        {
          question: "Query Cache is a technique that stores the text and result of which statement?",
          options: ["INSERT", "UPDATE", "SELECT", "DELETE"],
          answer: "SELECT"
        },
        {
          question: "\"Chopping\" a query refers to:",
          options: ["Deleting the query", "Breaking a large, complex query into smaller parts", "Encrypting the query", "Changing the query's syntax"],
          answer: "Breaking a large, complex query into smaller parts"
        }
      ],
      "Session 12": [
        {
          question: "Which of the following is a PRIMARY storage type?",
          options: ["Magnetic Disk", "Main Memory (RAM)", "Optical Disk (CD/DVD)", "Tape Storage"],
          answer: "Main Memory (RAM)"
        },
        {
          question: "What is the primary characteristic of Tertiary Storage?",
          options: ["It is the fastest storage type.", "It is used for temporary data.", "It is external to the computer system and used for archiving.", "It is used only for storing the operating system."],
          answer: "It is external to the computer system and used for archiving."
        },
        {
          question: "In the context of memory management, what is 'paging'?",
          options: ["The process of dividing a large dataset into smaller parts", "The process of joining two tables", "The process of creating a database backup", "The process of indexing a table"],
          answer: "The process of dividing a large dataset into smaller parts"
        },
        {
          question: "Which MySQL storage engine is ACID-compliant and supports transactions?",
          options: ["MyISAM", "CSV", "InnoDB", "Archive"],
          answer: "InnoDB"
        },
        {
          question: "The situation where the system spends most of its time servicing page faults is known as:",
          options: ["Paging", "Thrashing", "Caching", "Segmentation"],
          answer: "Thrashing"
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

semester2Data.books = flattenSessions(semester2Data.booksBySession);

export default semester2Data;
