const semester1Data = {
  semester: 1,
  name: "CPISM (Semester 1)",
  books: {
  "An Essential Guide to Git and GitHub": {
    "Session 1": [
      {
        question: "What is the primary purpose of a Version Control System (VCS)?",
        options: ["To manage hardware resources", "To monitor and manage changes to software code", "To design user interfaces", "To compile source code into executables"],
        answer: "To monitor and manage changes to software code"
      },
      {
        question: "Which type of VCS uses a single server for versioned files and requires a network connection?",
        options: ["Local Version Control Systems (LVCS)", "Centralized Version Control Systems (CVCS)", "Distributed Version Control Systems (DVCS)", "Cloud Version Control Systems (CloudVCS)"],
        answer: "Centralized Version Control Systems (CVCS)"
      },
      {
        question: "What is Git?",
        options: ["A Web-based project management platform", "A distributed Version Control System", "A programming language", "A type of database"],
        answer: "A distributed Version Control System"
      },
      {
        question: "What is GitHub?",
        options: ["A local code editor", "A Web-based platform that hosts Git repositories", "A type of Git command", "An alternative to Git"],
        answer: "A Web-based platform that hosts Git repositories"
      },
      {
        question: "Which of the following is a key feature of Git?",
        options: ["Requires a constant internet connection", "Slower than other VCS", "Lightweight and fast", "Does not support branching"],
        answer: "Lightweight and fast"
      }
    ],
    "Session 2": [
      {
        question: "Which command is used to create a new Git repository?",
        options: ["git start", "git new", "git init", "git create"],
        answer: "git init"
      },
      {
        question: "What does the command git add . do?",
        options: ["Commits all changes with a message", "Stages all changes in the current directory for the next commit", "Deletes all untracked files", "Shows the status of the working directory"],
        answer: "Stages all changes in the current directory for the next commit"
      },
      {
        question: "What is the primary purpose of a commit message?",
        options: ["To change the code syntax", "To summarize changes and provide context for modifications", "To delete previous commits", "To initialize a new branch"],
        answer: "To summarize changes and provide context for modifications"
      },
      {
        question: "Which Git feature allows you to modify the most recent commit?",
        options: ["git revert", "git amend", "git delete", "git modify"],
        answer: "git amend"
      },
      {
        question: "What is the purpose of git branch?",
        options: ["To switch to a different branch", "To create, list, or delete branches", "To merge two branches", "To commit changes to a branch"],
        answer: "To create, list, or delete branches"
      }
    ],
    "Session 3": [
      {
        question: "What is the main purpose of branching in Git?",
        options: ["To delete old code", "To allow for independent development of features or fixes", "To combine all code into one file", "To speed up the main branch"],
        answer: "To allow for independent development of features or fixes"
      },
      {
        question: "Which command is used to integrate changes from one branch into another?",
        options: ["git branch", "git integrate", "git merge", "git combine"],
        answer: "git merge"
      },
      {
        question: "What is a common cause of merge conflicts?",
        options: ["Different commit messages", "Concurrent changes to the same part of a file in different branches", "Using different programming languages", "Having too many branches"],
        answer: "Concurrent changes to the same part of a file in different branches"
      },
      {
        question: "What is the first step in resolving a merge conflict?",
        options: ["Delete the conflicting files", "Identify the conflicted files", "Abort the merge", "Push the changes to the remote repository"],
        answer: "Identify the conflicted files"
      },
      {
        question: "Which strategy helps avoid merge conflicts?",
        options: ["Working on the same feature in multiple branches", "Frequent commits and communication among team members", "Never using branches", "Ignoring changes from other developers"],
        answer: "Frequent commits and communication among team members"
      }
    ],
    "Session 4": [
      {
        question: "What is the primary goal of rebasing?",
        options: ["To create a messier history", "To create a cleaner, linear project history", "To delete old commits", "To slow down the development process"],
        answer: "To create a cleaner, linear project history"
      },
      {
        question: "Which command is used to temporarily save uncommitted changes?",
        options: ["git save", "git temporary", "git stash", "git hold"],
        answer: "git stash"
      },
      {
        question: "What does git reset HEAD <file> do?",
        options: ["Stages the file for commit", "Unstages the file, but keeps changes in the working directory", "Deletes the file", "Commits the file immediately"],
        answer: "Unstages the file, but keeps changes in the working directory"
      },
      {
        question: "What is forking in Git?",
        options: ["Deleting a repository", "Creating a personal copy of someone else's repository", "Merging two repositories into one", "A type of branching strategy"],
        answer: "Creating a personal copy of someone else's repository"
      },
      {
        question: "What is the purpose of a feature branch?",
        options: ["To store documentation", "To develop new features in isolation from the main codebase", "To host the production code", "To delete unused features"],
        answer: "To develop new features in isolation from the main codebase"
      }
    ],
    "Session 5": [
      {
        question: "What is GitHub Copilot?",
        options: ["A version control tool", "An AI-powered code completion assistant", "A project management dashboard", "A security scanning tool"],
        answer: "An AI-powered code completion assistant"
      },
      {
        question: "Which of the following is a Machine Learning library available on GitHub?",
        options: ["React", "TensorFlow", "Django", "Spring Boot"],
        answer: "TensorFlow"
      },
      {
        question: "What is a key advantage of AI-powered code suggestions over traditional methods?",
        options: ["They are based on keyword matching only", "They have limited context understanding", "They use machine learning for contextual understanding", "They are less accurate"],
        answer: "They use machine learning for contextual understanding"
      },
      {
        question: "Which practice is important for managing dependencies in AI projects?",
        options: ["Using virtual environments", "Ignoring dependency versions", "Manually installing all libraries", "Avoiding version control for models"],
        answer: "Using virtual environments"
      },
      {
        question: "What can be automated in workflows leveraging AI models?",
        options: ["Only code deployment", "Model training and evaluation", "Only data collection", "Manual testing processes"],
        answer: "Model training and evaluation"
      }
    ],
    "Session 6": [
      {
        question: "What does CI stand for in software development?",
        options: ["Continuous Inspection", "Continuous Integration", "Code Isolation", "Centralized Implementation"],
        answer: "Continuous Integration"
      },
      {
        question: "Which of the following is a key principle of Continuous Integration?",
        options: ["Infrequent commits", "Manual builds and testing", "Automated builds and testing on every commit", "Long integration cycles"],
        answer: "Automated builds and testing on every commit"
      },
      {
        question: "Which tool is a popular open-source CI server?",
        options: ["Microsoft Word", "Jenkins", "Adobe Photoshop", "Google Sheets"],
        answer: "Jenkins"
      },
      {
        question: "What is the main benefit of Continuous Deployment (CD)?",
        options: ["Slower release cycles", "Manual intervention in every deployment", "Faster time to market", "Increased risk of errors"],
        answer: "Faster time to market"
      },
      {
        question: "What does Infrastructure-as-Code (IaC) enable?",
        options: ["Manual server configuration", "Automating the provisioning and management of infrastructure", "Writing code without testing", "Slower deployment processes"],
        answer: "Automating the provisioning and management of infrastructure"
      }
    ]
  },
  "Bootstrap and jQuery for Responsive Web Pages": {
    "Session 1": [
      {
        question: "What is Bootstrap primarily used for?",
        options: ["Back-end server management", "Creating responsive and mobile-friendly Websites", "Database administration", "Writing complex JavaScript algorithms"],
        answer: "Creating responsive and mobile-friendly Websites"
      },
      {
        question: "Which version of Bootstrap was released in May 2021?",
        options: ["Bootstrap 3", "Bootstrap 4", "Bootstrap 5", "Bootstrap 6"],
        answer: "Bootstrap 5"
      },
      {
        question: "Which of the following is NOT a benefit of using Bootstrap?",
        options: ["Responsive Design", "Pre-styled Components", "Platform-specific Coding", "Cross-browser Compatibility"],
        answer: "Platform-specific Coding"
      },
      {
        question: "How many columns does the Bootstrap grid system use?",
        options: ["10", "12", "16", "24"],
        answer: "12"
      },
      {
        question: "What are the three core components of the Bootstrap grid system?",
        options: ["Headers, Footers, and Sidebars", "Containers, Rows, and Columns", "Divs, Spans, and Sections", "Navbars, Cards, and Modals"],
        answer: "Containers, Rows, and Columns"
      }
    ],
    "Session 2": [
      {
        question: "Which Bootstrap class is used as a base for creating buttons?",
        options: [".button", ".btn", ".btn-primary", ".btn-group"],
        answer: ".btn"
      },
      {
        question: "What does the .lead class in Bootstrap typography do?",
        options: ["Makes text bold", "Adds a leading icon to a paragraph", "Makes a paragraph stand out with increased font size and weight", "Changes the text color"],
        answer: "Makes a paragraph stand out with increased font size and weight"
      },
      {
        question: "Which of the following is a type of Bootstrap navbar variation?",
        options: ["Static Navbar", "Collapsible Navbar", "Floating Navbar", "Both A and B"],
        answer: "Both A and B"
      },
      {
        question: "Which Bootstrap class makes an image responsive?",
        options: [".img-fluid", ".img-responsive", ".responsive-image", ".image-fit"],
        answer: ".img-fluid"
      },
      {
        question: "Which Bootstrap class is used to create a table with alternating row colors?",
        options: [".table-bordered", ".table-striped", ".table-hover", ".table-condensed"],
        answer: ".table-striped"
      }
    ],
    "Session 3": [
      {
        question: "jQuery is a popular, open-source ______ library.",
        options: ["CSS", "Python", "JavaScript", "HTML"],
        answer: "JavaScript"
      },
      {
        question: "Which of the following is a key benefit of jQuery?",
        options: ["Simplified Syntax", "Platform-Specific Functions", "Increased Code Complexity", "Limited Browser Support"],
        answer: "Simplified Syntax"
      },
      {
        question: "What is the correct way to include jQuery via a CDN in your HTML file?",
        options: ['<script src="jquery.js"></script>', '<link href="jquery.cdn" rel="stylesheet">', '<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>', '<style src="jquery.css"></style>'],
        answer: '<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>'
      },
      {
        question: "In jQuery, which symbol is used as a shortcut for the jQuery function?",
        options: ["#", "&", "$", "@"],
        answer: "$"
      },
      {
        question: "Which jQuery method is used to attach a click event handler to an element?",
        options: [".click()", ".onClick()", ".eventClick()", ".handleClick()"],
        answer: ".click()"
      }
    ],
    "Session 4": [
      {
        question: "Which jQuery method is used to create a custom animation?",
        options: [".custom()", ".animation()", ".animate()", ".effect()"],
        answer: ".animate()"
      },
      {
        question: "Which method is used to get or set the inner HTML of an element?",
        options: [".text()", ".html()", ".val()", ".content()"],
        answer: ".html()"
      },
      {
        question: "Which jQuery method is used to insert content at the end of the selected elements?",
        options: [".prepend()", ".after()", ".before()", ".append()"],
        answer: ".append()"
      },
      {
        question: "What is the first step to integrate a jQuery plugin?",
        options: ["Initialize the plugin", "Download or include the plugin file", "Write custom CSS", "Minify the JavaScript"],
        answer: "Download or include the plugin file"
      },
      {
        question: "Which of the following is a jQuery UI component?",
        options: ["Datepicker", "Grid System", "Navbar", "Card"],
        answer: "Datepicker"
      }
    ],
    "Session 5": [
      {
        question: "Which of the following is a core principle of Responsive Design?",
        options: ["Fixed Layouts", "Fluid Grids", "Hidden Content on Small Screens", "Device-Specific Code"],
        answer: "Fluid Grids"
      },
      {
        question: "What do Media Queries in CSS allow you to do?",
        options: ["Add JavaScript functionality", "Apply styles based on device characteristics like screen width", "Create database queries", "Optimize images"],
        answer: "Apply styles based on device characteristics like screen width"
      },
      {
        question: "A fluid layout adjusts proportionally to the size of the ______.",
        options: ["Server", "Viewport", "Image", "Font"],
        answer: "Viewport"
      },
      {
        question: "Which Bootstrap utility class can be used to control the visibility of an element on different screen sizes?",
        options: [".color", ".spacing", ".display", ".visibility"],
        answer: ".display"
      },
      {
        question: "What is the primary purpose of using responsive media in Bootstrap?",
        options: ["To make images and videos load faster", "To ensure media maintains its aspect ratio and fits within containers on all devices", "To automatically add captions to all images", "To convert all images to black and white"],
        answer: "To ensure media maintains its aspect ratio and fits within containers on all devices"
      }
    ],
    "Session 6": [
      {
        question: "Using jQuery with Bootstrap allows developers to:",
        options: ["Write server-side code", "Statically define all content", "Manipulate Bootstrap components dynamically", "Replace Bootstrap's CSS"],
        answer: "Manipulate Bootstrap components dynamically"
      },
      {
        question: "Which technology can jQuery use to submit form data without reloading the page?",
        options: ["CSS Animations", "AJAX", "Media Queries", "Flexbox"],
        answer: "AJAX"
      },
      {
        question: "Which of the following is a jQuery plugin that enhances User Experience (UX)?",
        options: ["A Lightbox plugin", "A Bootstrap container", "A CSS reset file", "An HTML validator"],
        answer: "A Lightbox plugin"
      },
      {
        question: "What is a key best practice for ensuring cross-device compatibility?",
        options: ["Designing for one browser only", "Testing on different devices and browsers", "Using only the latest CSS features", "Hiding content on mobile devices"],
        answer: "Testing on different devices and browsers"
      },
      {
        question: "Which of the following is a technique for performance optimization?",
        options: ["Maximizing CSS and JavaScript files", "Eager loading all images immediately", "Minifying CSS and JavaScript files", "Using uncompressed media assets"],
        answer: "Minifying CSS and JavaScript files"
      }
    ]
  },
  "Effective Productivity with MS Office": {
    "Session 1": [
      {
        question: "What is Windows 11?",
        options: ["A video game", "Microsoft's personal computer Operating System (OS)", "A type of software for editing photos", "An application for creating documents"],
        answer: "Microsoft's personal computer Operating System (OS)"
      },
      {
        question: "Which of the following is an AI-powered personal productivity assistant in Windows 11?",
        options: ["Cortana", "Clippy", "Copilot", "Explorer"],
        answer: "Copilot"
      },
      {
        question: "What is the primary function of File Explorer in Windows 11?",
        options: ["To browse the internet", "To manage files and folders", "To play video games", "To send emails"],
        answer: "To manage files and folders"
      },
      {
        question: "Which built-in security application does Windows 11 provide?",
        options: ["Windows Firewall", "Windows Defender", "Windows Protector", "Windows Security Center"],
        answer: "Windows Defender"
      }
    ],
    "Session 2": [
      {
        question: "Microsoft Office 2021 is sold as a:",
        options: ["Monthly subscription", "One-time purchase", "Free upgrade for all", "Yearly license"],
        answer: "One-time purchase"
      },
      {
        question: "Which of the following is NOT a component of the Ribbon?",
        options: ["Tabs", "Groups", "Commands", "Widgets"],
        answer: "Widgets"
      },
      {
        question: "Which Office 2021 edition includes Publisher and Access?",
        options: ["Office Home & Student 2021", "Office Home & Business 2021", "Office Professional 2021", "Office Standard 2021"],
        answer: "Office Professional 2021"
      },
      {
        question: "The XLOOKUP function is a new feature in which Office 2021 application?",
        options: ["Word", "PowerPoint", "Excel", "Outlook"],
        answer: "Excel"
      }
    ],
    "Session 3": [
      {
        question: "What does the 'Styles' feature in MS Word primarily help with?",
        options: ["Inserting pictures", "Providing a structural flow and ensuring consistency", "Sending emails", "Creating formulas"],
        answer: "Providing a structural flow and ensuring consistency"
      },
      {
        question: "Which type of list uses sequential numeric format?",
        options: ["Bulleted list", "Numbered list", "Checklist", "Drop-down list"],
        answer: "Numbered list"
      },
      {
        question: "What are Word Templates?",
        options: ["Pre-designed documents with pre-defined styles and formats", "A type of font", "Tools for drawing shapes", "Email merge documents"],
        answer: "Pre-designed documents with pre-defined styles and formats"
      },
      {
        question: "What is the purpose of Content Controls in a Word Form?",
        options: ["To change the page color", "To capture user data like names and dates", "To add transitions to the document", "To check grammar"],
        answer: "To capture user data like names and dates"
      }
    ],
    "Session 4": [
      {
        question: "Which group in the Insert tab allows you to add process diagrams and complex visual graphics?",
        options: ["Pictures", "Shapes", "SmartArt", "Icons"],
        answer: "SmartArt"
      },
      {
        question: "What is the primary purpose of the 'Track Changes' feature?",
        options: ["To change the document's theme", "To track who made what changes to a document", "To insert comments", "To mail merge documents"],
        answer: "To track who made what changes to a document"
      },
      {
        question: "Mail Merge is used when:",
        options: ["You want to delete multiple emails.", "The content of an email or letter remains the same, but the receiver's details change.", "You need to format a table.", "You want to insert a picture."],
        answer: "The content of an email or letter remains the same, but the receiver's details change."
      },
      {
        question: "Which AI tool can be integrated into Word to summarize content?",
        options: ["Copilot", "GPT for Excel Word", "Office Assistant", "Smart Lookup"],
        answer: "GPT for Excel Word"
      }
    ],
    "Session 5": [
      {
        question: "What is the default file format for an Excel 2021 workbook?",
        options: [".xls", ".xlsm", ".xlsx", ".csv"],
        answer: ".xlsx"
      },
      {
        question: "Which function is used to add all values of cells in an argument?",
        options: ["AVERAGE", "COUNT", "SUM", "MAX"],
        answer: "SUM"
      },
      {
        question: "What is the purpose of Data Validation in Excel?",
        options: ["To create charts", "To restrict the type of data or values a user enters into a cell", "To sort data alphabetically", "To apply conditional formatting"],
        answer: "To restrict the type of data or values a user enters into a cell"
      },
      {
        question: "Which AI function in Excel is used to submit a query to AI?",
        options: ["ALEXTRACT", "ALFILL", "ALASK", "ALTRANSLATE"],
        answer: "ALASK"
      }
    ],
    "Session 6": [
      {
        question: "Which tool is used to format a large data set based on specific conditions, like highlighting cells with a certain color?",
        options: ["Sorting", "Filtering", "Conditional Formatting", "Data Validation"],
        answer: "Conditional Formatting"
      },
      {
        question: "The Analysis ToolPak is an Excel add-in used for:",
        options: ["Adding animations", "Data analysis for financial, statistical, and engineering data", "Creating pivot tables", "Protecting worksheets"],
        answer: "Data analysis for financial, statistical, and engineering data"
      },
      {
        question: "Which level of protection prevents others from adding, moving, or deleting worksheets?",
        options: ["File level protection", "Workbook level protection", "Worksheet level protection", "Cell level protection"],
        answer: "Workbook level protection"
      },
      {
        question: "What does encrypting an Excel file with a password achieve?",
        options: ["It allows anyone to view but not edit the file.", "It denies access to the file unless the correct password is supplied.", "It automatically creates a backup of the file.", "It compresses the file size."],
        answer: "It denies access to the file unless the correct password is supplied."
      }
    ],
    "Session 7": [
      {
        question: "What is the primary purpose of a PivotTable?",
        options: ["To create complex formulas", "To summarize, analyze, explore, and present summary data from a large dataset", "To draw charts", "To protect data"],
        answer: "To summarize, analyze, explore, and present summary data from a large dataset"
      },
      {
        question: "How can you create a PivotTable quickly in Excel?",
        options: ["By using the 'Recommended PivotTables' option", "By typing data into cells", "By using the 'Format as Table' option", "By inserting a chart first"],
        answer: "By using the 'Recommended PivotTables' option"
      },
      {
        question: "What is a key difference between a standard chart and a PivotChart?",
        options: ["Standard charts are based on a PivotTable's data source.", "PivotCharts are linked directly to worksheet cells.", "Standard charts cannot be formatted.", "PivotCharts are based on their associated PivotTable's data source."],
        answer: "PivotCharts are based on their associated PivotTable's data source."
      },
      {
        question: "What does Power Query in Excel allow you to do?",
        options: ["Run SQL queries", "Import data from various sources and then clean, transform, and reshape it", "Create pivot tables automatically", "Password-protect queries"],
        answer: "Import data from various sources and then clean, transform, and reshape it"
      }
    ],
    "Session 8": [
      {
        question: "What is Microsoft PowerPoint primarily known as?",
        options: ["Spreadsheet software", "Presentation software", "Database software", "Email client"],
        answer: "Presentation software"
      },
      {
        question: "Which PowerPoint feature is a pre-defined combination of colors, fonts, and effects?",
        options: ["Transition", "Animation", "Theme", "Template"],
        answer: "Theme"
      },
      {
        question: "What is a 'Transition' in PowerPoint?",
        options: ["A sound effect", "A special effect applied when moving from one slide to the next", "A type of font", "A way to print slides"],
        answer: "A special effect applied when moving from one slide to the next"
      },
      {
        question: "Which pane in PowerPoint makes it easy to organize slides by allowing you to duplicate, rearrange, and delete them?",
        options: ["Notes Pane", "Slide Navigation Pane", "Task Pane", "Comments Pane"],
        answer: "Slide Navigation Pane"
      }
    ],
    "Session 9": [
      {
        question: "Which tab in PowerPoint is used to insert pictures, shapes, and charts?",
        options: ["Home Tab", "Design Tab", "Insert Tab", "Review Tab"],
        answer: "Insert Tab"
      },
      {
        question: "The 'Morph' transition in PowerPoint allows you to:",
        options: ["Add sound to text", "Animate smooth movement from one slide to the next", "Change the slide size", "Insert 3D models"],
        answer: "Animate smooth movement from one slide to the next"
      },
      {
        question: "How can you integrate Artificial Intelligence (AI) tools into PowerPoint?",
        options: ["By changing the theme", "By adding them as Add-ins", "By using the Format Painter", "By applying transitions"],
        answer: "By adding them as Add-ins"
      },
      {
        question: "The Zoom feature in PowerPoint is used to:",
        options: ["Make the text larger", "Create interactive presentations by linking to specific slides or sections", "Zoom in on a picture", "Print a slide in a larger size"],
        answer: "Create interactive presentations by linking to specific slides or sections"
      }
    ],
    "Session 10": [
      {
        question: "What is the primary purpose of Microsoft OneNote?",
        options: ["To send and receive emails", "To create online notebooks that are available anytime", "To analyze data", "To create presentations"],
        answer: "To create online notebooks that are available anytime"
      },
      {
        question: "What is the function of 'Tags' in OneNote?",
        options: ["To change the page color", "To categorize and prioritize notes", "To insert tables", "To share notebooks"],
        answer: "To categorize and prioritize notes"
      },
      {
        question: "Which operator in OneNote is used for exponential calculations?",
        options: ["+", "-", "*", "^"],
        answer: "^"
      },
      {
        question: "OneNote's organization works from:",
        options: ["Top to bottom", "Right to left", "Left to right", "Center outwards"],
        answer: "Left to right"
      }
    ],
    "Session 11": [
      {
        question: "What is the primary function of Microsoft Outlook?",
        options: ["To create documents", "As an email client application", "To design presentations", "To manage databases"],
        answer: "As an email client application"
      },
      {
        question: "What are 'Categories' in Outlook used for?",
        options: ["To change the font of emails", "To organize emails so they are easier to find", "To schedule meetings", "To delete old emails"],
        answer: "To organize emails so they are easier to find"
      },
      {
        question: "Which feature in Outlook 2021 allows you to draw or write with ink in your email messages?",
        options: ["Instant Search", "Improved Translator", "Freehand Drawing with Ink", "Hex Color Values"],
        answer: "Freehand Drawing with Ink"
      },
      {
        question: "The Calendar functionality in Outlook allows users to:",
        options: ["Play games", "Create appointments and schedule meetings", "Edit photos", "Browse the internet"],
        answer: "Create appointments and schedule meetings"
      }
    ],
    "Session 12": [
      {
        question: "What is Microsoft Skype primarily used for?",
        options: ["Data analysis", "Instant messaging, audio, and video communication", "Creating spreadsheets", "File management"],
        answer: "Instant messaging, audio, and video communication"
      },
      {
        question: "Which feature in Skype allows you to capture special moments and meetings?",
        options: ["Screen sharing", "Call recording", "Smart Messaging", "Phone calls"],
        answer: "Call recording"
      },
      {
        question: "Microsoft Teams is best described as a:",
        options: ["Graphic design tool", "Business messaging and collaboration platform", "Personal diary application", "Antivirus software"],
        answer: "Business messaging and collaboration platform"
      },
      {
        question: "Which of the following is a feature of Microsoft Teams?",
        options: ["Built-in translator", "Video game integration", "Food delivery service", "Currency converter"],
        answer: "Built-in translator"
      }
    ],
    "Session 13": [
      {
        question: "What is Microsoft OneDrive?",
        options: ["A video editing software", "A file hosting and cloud storage service", "A social media platform", "A programming language"],
        answer: "A file hosting and cloud storage service"
      },
      {
        question: "OneDrive can be used as a collaboration tool because it:",
        options: ["Plays music", "Provides a single location for files that multiple users can access and edit", "Sends faxes", "Creates animations"],
        answer: "Provides a single location for files that multiple users can access and edit"
      },
      {
        question: "What does syncing the Online OneDrive with the local OneDrive folder do?",
        options: ["Deletes files from both locations", "Keeps a copy of online files available on your local device", "Changes the file formats", "Shares files publicly on the internet"],
        answer: "Keeps a copy of online files available on your local device"
      },
      {
        question: "How much free storage space does OneDrive provide to valid Microsoft users?",
        options: ["1 GB", "5 GB", "15 GB", "100 GB"],
        answer: "5 GB"
      }
    ]
  },
  "Unlocking SEO Techniques": {
    "Session 1": [
      {
        question: "What is the primary function of a search engine crawler?",
        options: ["To rank web pages based on user preferences", "To display search results to the user", "To browse the web, visiting pages and following links to discover content", "To interpret user queries"],
        answer: "To browse the web, visiting pages and following links to discover content"
      },
      {
        question: "The massive database where a search engine stores information about discovered web pages is called the:",
        options: ["SERP", "Index", "Cache", "Algorithm"],
        answer: "Index"
      },
      {
        question: "Which component of a search engine determines the order in which results appear on the SERP?",
        options: ["Crawler", "Query Processor", "User Interface", "Ranking System"],
        answer: "Ranking System"
      },
      {
        question: "What does SEO stand for?",
        options: ["Search Engine Operation", "Site Enhancement Operation", "Search Engine Optimization", "Systematic Engine Output"],
        answer: "Search Engine Optimization"
      },
      {
        question: "Which of the following is an advanced search technique that uses operators like AND, OR, and NOT?",
        options: ["Phrase Searching", "Wildcard Searches", "Boolean Operators", "File Type Searches"],
        answer: "Boolean Operators"
      },
      {
        question: "Which tool, formerly known as Google Webmaster Tools, provides performance reports and index coverage data?",
        options: ["Google Analytics", "Google Ads", "Google Search Console", "Google My Business"],
        answer: "Google Search Console"
      },
      {
        question: "What is the main purpose of a robots.txt file?",
        options: ["To list all URLs for search engines to index", "To provide metadata about page changes", "To guide search engine crawlers on how to index a site", "To store structured data for rich snippets"],
        answer: "To guide search engine crawlers on how to index a site"
      },
      {
        question: "Technical SEO primarily focuses on optimizing which of the following?",
        options: ["Acquiring high-quality backlinks", "The technical aspects of a website to improve visibility", "Creating engaging social media content", "Writing meta descriptions"],
        answer: "The technical aspects of a website to improve visibility"
      }
    ],
    "Session 2": [
      {
        question: "Which of the following is a core component of On-Page Optimization?",
        options: ["Influencer Outreach", "Meta Tags Optimization", "Forum Participation", "Social Bookmarking"],
        answer: "Meta Tags Optimization"
      },
      {
        question: "What is the primary goal of keyword research?",
        options: ["To increase website loading speed", "To identify relevant search terms used by the target audience", "To design a responsive website layout", "To build high-quality backlinks"],
        answer: "To identify relevant search terms used by the target audience"
      },
      {
        question: "Which file is an XML file that lists all URLs and metadata to help search engines index important pages?",
        options: ["robots.txt", "sitemap.xml", "index.html", "style.css"],
        answer: "sitemap.xml"
      },
      {
        question: "Schema Markup is used primarily to:",
        options: ["Increase page loading speed", "Block search engine crawlers from certain pages", "Provide additional context about page content to search engines", "Check for broken links on a website"],
        answer: "Provide additional context about page content to search engines"
      },
      {
        question: "Off-Page Optimization involves activities that are conducted:",
        options: ["Directly on the website's source code", "Only on the website's blog", "External to the website", "Within the website's navigation structure"],
        answer: "External to the website"
      },
      {
        question: "What does a high Domain Authority (DA) score indicate?",
        options: ["The website has a fast loading time.", "The website has a strong potential to rank in search results.", "The website uses the correct keywords.", "The website has a responsive design."],
        answer: "The website has a strong potential to rank in search results."
      },
      {
        question: "Which strategy is used for earning high-quality backlinks by writing articles for other blogs?",
        options: ["Social Bookmarking", "Directory Submissions", "Guest Blogging", "Forum Posting"],
        answer: "Guest Blogging"
      },
      {
        question: "The 'Spam Score' metric helps SEO professionals to:",
        options: ["Measure website traffic", "Evaluate the quality and trustworthiness of backlink sources", "Calculate the number of keywords on a page", "Analyze user engagement on social media"],
        answer: "Evaluate the quality and trustworthiness of backlink sources"
      }
    ],
    "Session 3": [
      {
        question: "What does Mobile SEO primarily aim to improve?",
        options: ["Desktop search rankings", "Website visibility and ranking on mobile devices", "The number of social media followers", "The length of website content"],
        answer: "Website visibility and ranking on mobile devices"
      },
      {
        question: "Which of the following is a key factor affecting mobile rankings?",
        options: ["Number of pop-up ads", "Page speed optimization", "Complex navigation menus", "Using Flash content"],
        answer: "Page speed optimization"
      },
      {
        question: "A mobile sitemap is a specially formatted file that helps search engines:",
        options: ["Understand the desktop version of the site", "Navigate and index mobile-friendly pages", "Block mobile users from certain pages", "Increase the website's domain authority"],
        answer: "Navigate and index mobile-friendly pages"
      },
      {
        question: "What is a fundamental characteristic of SEO-friendly content?",
        options: ["It is optimized with keywords and matches user search intent.", "It is always over 2000 words long.", "It avoids using headings and subheadings.", "It is written for search engines only, not users."],
        answer: "It is optimized with keywords and matches user search intent."
      },
      {
        question: "Which component is NOT typically part of SEO content?",
        options: ["Title Tags", "Meta Descriptions", "Alt Text for images", "Server IP Address"],
        answer: "Server IP Address"
      },
      {
        question: "Local SEO content is vital for businesses because it helps:",
        options: ["Attract customers from all over the world", "Connect with local customers searching for nearby products/services", "Improve rankings on social media platforms", "Increase the number of blog comments"],
        answer: "Connect with local customers searching for nearby products/services"
      },
      {
        question: "Which social media platform is primarily known as a professional networking site?",
        options: ["Instagram", "TikTok", "LinkedIn", "Snapchat"],
        answer: "LinkedIn"
      }
    ],
    "Session 4": [
      {
        question: "SEO Localization involves optimizing a website to:",
        options: ["Target multiple countries and languages", "Attract local customers in specific geographic areas", "Improve server response time", "Increase the number of PPC campaigns"],
        answer: "Attract local customers in specific geographic areas"
      },
      {
        question: "What is the purpose of hreflang tags in International SEO?",
        options: ["To increase page loading speed for international users", "To tell search engines which language and regional version of a page to show", "To block crawlers from specific countries", "To create local citations for a business"],
        answer: "To tell search engines which language and regional version of a page to show"
      },
      {
        question: "Social Media Optimization (SMO) impacts SEO primarily by:",
        options: ["Directly influencing traditional SEO ranking algorithms", "Increasing brand visibility and engagement, which can lead to indirect SEO benefits", "Replacing the need for keyword research", "Automating the link-building process"],
        answer: "Increasing brand visibility and engagement, which can lead to indirect SEO benefits"
      },
      {
        question: "Which tool is best for analyzing website traffic and user behavior?",
        options: ["Google Keyword Planner", "Ahrefs", "Google Analytics", "Yoast SEO"],
        answer: "Google Analytics"
      },
      {
        question: "Google My Business (GMB) is most important for:",
        options: ["International SEO", "Local SEO", "Technical SEO", "Building backlinks from .edu domains"],
        answer: "Local SEO"
      },
      {
        question: "Why are cultural and language considerations crucial in SEO?",
        options: ["They help reduce website loading time.", "They ensure content resonates authentically with diverse audiences.", "They are required for using Google Search Console.", "They automatically generate high-quality backlinks."],
        answer: "They ensure content resonates authentically with diverse audiences."
      },
      {
        question: "Which category of SEO tools includes platforms like Moz Link Explorer and BuzzSumo?",
        options: ["Keyword Research Tools", "On-Page Optimization Tools", "Link-Building Tools", "Rank Tracking Tools"],
        answer: "Link-Building Tools"
      }
    ]
  },
  isEmpty: false
};

export default semester1Data;
