const semester1Data = {
  semester: 1,
  name: "CPISM (Semester 1)",
  booksBySession: {
  "An Essential Guide to Git and GitHub": {
    "Session 1": [
      {
        question: "What is the primary purpose of a Version Control System (VCS)?",
        options: ["To manage hardware resources", "To monitor and manage changes to software code", "To design user interfaces", "To compile source code into executables"],
        correctAnswer: 1
      },
      {
        question: "Which type of VCS uses a single server for versioned files and requires a network connection?",
        options: ["Local Version Control Systems (LVCS)", "Centralized Version Control Systems (CVCS)", "Distributed Version Control Systems (DVCS)", "Cloud Version Control Systems (CloudVCS)"],
        correctAnswer: 1
      },
      {
        question: "What is Git?",
        options: ["A Web-based project management platform", "A distributed Version Control System", "A programming language", "A type of database"],
        correctAnswer: 1
      },
      
      {
        question: "What is GitHub?",
        options: ["A local code editor", "A Web-based platform that hosts Git repositories", "A type of Git command", "An alternative to Git"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a key feature of Git?",
        options: ["Requires a constant internet connection", "Slower than other VCS", "Lightweight and fast", "Does not support branching"],
        correctAnswer: 2
      }
    ],
    "Session 2": [
      {
        question: "Which command is used to create a new Git repository?",
        options: ["git start", "git new", "git init", "git create"],
        correctAnswer: 2
      },
      {
        question: "What does the command git add . do?",
        options: ["Commits all changes with a message", "Stages all changes in the current directory for the next commit", "Deletes all untracked files", "Shows the status of the working directory"],
        correctAnswer: 1
      },
      {
        question: "What is the primary purpose of a commit message?",
        options: ["To change the code syntax", "To summarize changes and provide context for modifications", "To delete previous commits", "To initialize a new branch"],
        correctAnswer: 1
      },
      {
        question: "Which Git feature allows you to modify the most recent commit?",
        options: ["git revert", "git amend", "git delete", "git modify"],
        correctAnswer: 1
      },
      {
        question: "What is the purpose of git branch?",
        options: ["To switch to a different branch", "To create, list, or delete branches", "To merge two branches", "To commit changes to a branch"],
        correctAnswer: 1
      }
    ],
    "Session 3": [
      {
        question: "What is the main purpose of branching in Git?",
        options: ["To delete old code", "To allow for independent development of features or fixes", "To combine all code into one file", "To speed up the main branch"],
        correctAnswer: 1
      },
      {
        question: "Which command is used to integrate changes from one branch into another?",
        options: ["git branch", "git integrate", "git merge", "git combine"],
        correctAnswer: 2
      },
      {
        question: "What is a common cause of merge conflicts?",
        options: ["Different commit messages", "Concurrent changes to the same part of a file in different branches", "Using different programming languages", "Having too many branches"],
        correctAnswer: 1
      },
      {
        question: "What is the first step in resolving a merge conflict?",
        options: ["Delete the conflicting files", "Identify the conflicted files", "Abort the merge", "Push the changes to the remote repository"],
        correctAnswer: 1
      },
      {
        question: "Which strategy helps avoid merge conflicts?",
        options: ["Working on the same feature in multiple branches", "Frequent commits and communication among team members", "Never using branches", "Ignoring changes from other developers"],
        correctAnswer: 1
      }
    ],
    "Session 4": [
      {
        question: "What is the primary goal of rebasing?",
        options: ["To create a messier history", "To create a cleaner, linear project history", "To delete old commits", "To slow down the development process"],
        correctAnswer: 1
      },
      {
        question: "Which command is used to temporarily save uncommitted changes?",
        options: ["git save", "git temporary", "git stash", "git hold"],
        correctAnswer: 2
      },
      {
        question: "What does git reset HEAD <file> do?",
        options: ["Stages the file for commit", "Unstages the file, but keeps changes in the working directory", "Deletes the file", "Commits the file immediately"],
        correctAnswer: 1
      },
      {
        question: "What is forking in Git?",
        options: ["Deleting a repository", "Creating a personal copy of someone else's repository", "Merging two repositories into one", "A type of branching strategy"],
        correctAnswer: 1
      },
      {
        question: "What is the purpose of a feature branch?",
        options: ["To store documentation", "To develop new features in isolation from the main codebase", "To host the production code", "To delete unused features"],
        correctAnswer: 1
      }
    ],
    "Session 5": [
      {
        question: "What is GitHub Copilot?",
        options: ["A version control tool", "An AI-powered code completion assistant", "A project management dashboard", "A security scanning tool"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a Machine Learning library available on GitHub?",
        options: ["React", "TensorFlow", "Django", "Spring Boot"],
        correctAnswer: 1
      },
      {
        question: "What is a key advantage of AI-powered code suggestions over traditional methods?",
        options: ["They are based on keyword matching only", "They have limited context understanding", "They use machine learning for contextual understanding", "They are less accurate"],
        correctAnswer: 2
      },
      {
        question: "Which practice is important for managing dependencies in AI projects?",
        options: ["Using virtual environments", "Ignoring dependency versions", "Manually installing all libraries", "Avoiding version control for models"],
        correctAnswer: 0
      },
      {
        question: "What can be automated in workflows leveraging AI models?",
        options: ["Only code deployment", "Model training and evaluation", "Only data collection", "Manual testing processes"],
        correctAnswer: 1
      }
    ],
    "Session 6": [
      {
        question: "What does CI stand for in software development?",
        options: ["Continuous Inspection", "Continuous Integration", "Code Isolation", "Centralized Implementation"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a key principle of Continuous Integration?",
        options: ["Infrequent commits", "Manual builds and testing", "Automated builds and testing on every commit", "Long integration cycles"],
        correctAnswer: 2
      },
      {
        question: "Which tool is a popular open-source CI server?",
        options: ["Microsoft Word", "Jenkins", "Adobe Photoshop", "Google Sheets"],
        correctAnswer: 1
      },
      {
        question: "What is the main benefit of Continuous Deployment (CD)?",
        options: ["Slower release cycles", "Manual intervention in every deployment", "Faster time to market", "Increased risk of errors"],
        correctAnswer: 2
      },
      {
        question: "What does Infrastructure-as-Code (IaC) enable?",
        options: ["Manual server configuration", "Automating the provisioning and management of infrastructure", "Writing code without testing", "Slower deployment processes"],
        correctAnswer: 1
      }
    ]
  },
  "Bootstrap and jQuery for Responsive Web Pages": {
    "Session 1": [
      {
        question: "What is Bootstrap primarily used for?",
        options: ["Back-end server management", "Creating responsive and mobile-friendly Websites", "Database administration", "Writing complex JavaScript algorithms"],
        correctAnswer: 1
      },
      {
        question: "Which version of Bootstrap was released in May 2021?",
        options: ["Bootstrap 3", "Bootstrap 4", "Bootstrap 5", "Bootstrap 6"],
        correctAnswer: 2
      },
      {
        question: "Which of the following is NOT a benefit of using Bootstrap?",
        options: ["Responsive Design", "Pre-styled Components", "Platform-specific Coding", "Cross-browser Compatibility"],
        correctAnswer: 2
      },
      {
        question: "How many columns does the Bootstrap grid system use?",
        options: ["10", "12", "16", "24"],
        correctAnswer: 1
      },
      {
        question: "What are the three core components of the Bootstrap grid system?",
        options: ["Headers, Footers, and Sidebars", "Containers, Rows, and Columns", "Divs, Spans, and Sections", "Navbars, Cards, and Modals"],
        correctAnswer: 1
      }
    ],
    "Session 2": [
      {
        question: "Which Bootstrap class is used as a base for creating buttons?",
        options: [".button", ".btn", ".btn-primary", ".btn-group"],
        correctAnswer: 1
      },
      {
        question: "What does the .lead class in Bootstrap typography do?",
        options: ["Makes text bold", "Adds a leading icon to a paragraph", "Makes a paragraph stand out with increased font size and weight", "Changes the text color"],
        correctAnswer: 2
      },
      {
        question: "Which of the following is a type of Bootstrap navbar variation?",
        options: ["Static Navbar", "Collapsible Navbar", "Floating Navbar", "Both A and B"],
        correctAnswer: 3
      },
      {
        question: "Which Bootstrap class makes an image responsive?",
        options: [".img-fluid", ".img-responsive", ".responsive-image", ".image-fit"],
        correctAnswer: 0
      },
      {
        question: "Which Bootstrap class is used to create a table with alternating row colors?",
        options: [".table-bordered", ".table-striped", ".table-hover", ".table-condensed"],
        correctAnswer: 1
      }
    ],
    "Session 3": [
      {
        question: "jQuery is a popular, open-source ______ library.",
        options: ["CSS", "Python", "JavaScript", "HTML"],
        correctAnswer: 2
      },
      {
        question: "Which of the following is a key benefit of jQuery?",
        options: ["Simplified Syntax", "Platform-Specific Functions", "Increased Code Complexity", "Limited Browser Support"],
        correctAnswer: 0
      },
      {
        question: "What is the correct way to include jQuery via a CDN in your HTML file?",
        options: ['<script src="jquery.js"></script>', '<link href="jquery.cdn" rel="stylesheet">', '<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>', '<style src="jquery.css"></style>'],
        correctAnswer: 2
      },
      {
        question: "In jQuery, which symbol is used as a shortcut for the jQuery function?",
        options: ["#", "&", "$", "@"],
        correctAnswer: 2
      },
      {
        question: "Which jQuery method is used to attach a click event handler to an element?",
        options: [".click()", ".onClick()", ".eventClick()", ".handleClick()"],
        correctAnswer: 0
      }
    ],
    "Session 4": [
      {
        question: "Which jQuery method is used to create a custom animation?",
        options: [".custom()", ".animation()", ".animate()", ".effect()"],
        correctAnswer: 2
      },
      {
        question: "Which method is used to get or set the inner HTML of an element?",
        options: [".text()", ".html()", ".val()", ".content()"],
        correctAnswer: 1
      },
      {
        question: "Which jQuery method is used to insert content at the end of the selected elements?",
        options: [".prepend()", ".after()", ".before()", ".append()"],
        correctAnswer: 3
      },
      {
        question: "What is the first step to integrate a jQuery plugin?",
        options: ["Initialize the plugin", "Download or include the plugin file", "Write custom CSS", "Minify the JavaScript"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a jQuery UI component?",
        options: ["Datepicker", "Grid System", "Navbar", "Card"],
        correctAnswer: 0
      }
    ],
    "Session 5": [
      {
        question: "Which of the following is a core principle of Responsive Design?",
        options: ["Fixed Layouts", "Fluid Grids", "Hidden Content on Small Screens", "Device-Specific Code"],
        correctAnswer: 1
      },
      {
        question: "What do Media Queries in CSS allow you to do?",
        options: ["Add JavaScript functionality", "Apply styles based on device characteristics like screen width", "Create database queries", "Optimize images"],
        correctAnswer: 1
      },
      {
        question: "A fluid layout adjusts proportionally to the size of the ______.",
        options: ["Server", "Viewport", "Image", "Font"],
        correctAnswer: 1
      },
      {
        question: "Which Bootstrap utility class can be used to control the visibility of an element on different screen sizes?",
        options: [".color", ".spacing", ".display", ".visibility"],
        correctAnswer: 2
      },
      {
        question: "What is the primary purpose of using responsive media in Bootstrap?",
        options: ["To make images and videos load faster", "To ensure media maintains its aspect ratio and fits within containers on all devices", "To automatically add captions to all images", "To convert all images to black and white"],
        correctAnswer: 1
      }
    ],
    "Session 6": [
      {
        question: "Using jQuery with Bootstrap allows developers to:",
        options: ["Write server-side code", "Statically define all content", "Manipulate Bootstrap components dynamically", "Replace Bootstrap's CSS"],
        correctAnswer: 2
      },
      {
        question: "Which technology can jQuery use to submit form data without reloading the page?",
        options: ["CSS Animations", "AJAX", "Media Queries", "Flexbox"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a jQuery plugin that enhances User Experience (UX)?",
        options: ["A Lightbox plugin", "A Bootstrap container", "A CSS reset file", "An HTML validator"],
        correctAnswer: 0
      },
      {
        question: "What is a key best practice for ensuring cross-device compatibility?",
        options: ["Designing for one browser only", "Testing on different devices and browsers", "Using only the latest CSS features", "Hiding content on mobile devices"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a technique for performance optimization?",
        options: ["Maximizing CSS and JavaScript files", "Eager loading all images immediately", "Minifying CSS and JavaScript files", "Using uncompressed media assets"],
        correctAnswer: 2
      }
    ]
  },
  "Effective Productivity with MS Office": {
    "Session 1": [
      {
        question: "What is Windows 11?",
        options: ["A video game", "Microsoft's personal computer Operating System (OS)", "A type of software for editing photos", "An application for creating documents"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is an AI-powered personal productivity assistant in Windows 11?",
        options: ["Cortana", "Clippy", "Copilot", "Explorer"],
        correctAnswer: 2
      },
      {
        question: "What is the primary function of File Explorer in Windows 11?",
        options: ["To browse the internet", "To manage files and folders", "To play video games", "To send emails"],
        correctAnswer: 1
      },
      {
        question: "Which built-in security application does Windows 11 provide?",
        options: ["Windows Firewall", "Windows Defender", "Windows Protector", "Windows Security Center"],
        correctAnswer: 1
      }
    ],
    "Session 2": [
      {
        question: "Microsoft Office 2021 is sold as a:",
        options: ["Monthly subscription", "One-time purchase", "Free upgrade for all", "Yearly license"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is NOT a component of the Ribbon?",
        options: ["Tabs", "Groups", "Commands", "Widgets"],
        correctAnswer: 3
      },
      {
        question: "Which Office 2021 edition includes Publisher and Access?",
        options: ["Office Home & Student 2021", "Office Home & Business 2021", "Office Professional 2021", "Office Standard 2021"],
        correctAnswer: 2
      },
      {
        question: "The XLOOKUP function is a new feature in which Office 2021 application?",
        options: ["Word", "PowerPoint", "Excel", "Outlook"],
        correctAnswer: 2
      }
    ],
    "Session 3": [
      {
        question: "What does the 'Styles' feature in MS Word primarily help with?",
        options: ["Inserting pictures", "Providing a structural flow and ensuring consistency", "Sending emails", "Creating formulas"],
        correctAnswer: 1
      },
      {
        question: "Which type of list uses sequential numeric format?",
        options: ["Bulleted list", "Numbered list", "Checklist", "Drop-down list"],
        correctAnswer: 1
      },
      {
        question: "What are Word Templates?",
        options: ["Pre-designed documents with pre-defined styles and formats", "A type of font", "Tools for drawing shapes", "Email merge documents"],
        correctAnswer: 0
      },
      {
        question: "What is the purpose of Content Controls in a Word Form?",
        options: ["To change the page color", "To capture user data like names and dates", "To add transitions to the document", "To check grammar"],
        correctAnswer: 1
      }
    ],
    "Session 4": [
      {
        question: "Which group in the Insert tab allows you to add process diagrams and complex visual graphics?",
        options: ["Pictures", "Shapes", "SmartArt", "Icons"],
        correctAnswer: 2
      },
      {
        question: "What is the primary purpose of the 'Track Changes' feature?",
        options: ["To change the document's theme", "To track who made what changes to a document", "To insert comments", "To mail merge documents"],
        correctAnswer: 1
      },
      {
        question: "Mail Merge is used when:",
        options: ["You want to delete multiple emails.", "The content of an email or letter remains the same, but the receiver's details change.", "You need to format a table.", "You want to insert a picture."],
        correctAnswer: 1
      },
      {
        question: "Which AI tool can be integrated into Word to summarize content?",
        options: ["Copilot", "GPT for Excel Word", "Office Assistant", "Smart Lookup"],
        correctAnswer: 1
      }
    ],
    "Session 5": [
      {
        question: "What is the default file format for an Excel 2021 workbook?",
        options: [".xls", ".xlsm", ".xlsx", ".csv"],
        correctAnswer: 2
      },
      {
        question: "Which function is used to add all values of cells in an argument?",
        options: ["AVERAGE", "COUNT", "SUM", "MAX"],
        correctAnswer: 2
      },
      {
        question: "What is the purpose of Data Validation in Excel?",
        options: ["To create charts", "To restrict the type of data or values a user enters into a cell", "To sort data alphabetically", "To apply conditional formatting"],
        correctAnswer: 1
      },
      {
        question: "Which AI function in Excel is used to submit a query to AI?",
        options: ["ALEXTRACT", "ALFILL", "ALASK", "ALTRANSLATE"],
        correctAnswer: 2
      }
    ],
    "Session 6": [
      {
        question: "Which tool is used to format a large data set based on specific conditions, like highlighting cells with a certain color?",
        options: ["Sorting", "Filtering", "Conditional Formatting", "Data Validation"],
        correctAnswer: 2
      },
      {
        question: "The Analysis ToolPak is an Excel add-in used for:",
        options: ["Adding animations", "Data analysis for financial, statistical, and engineering data", "Creating pivot tables", "Protecting worksheets"],
        correctAnswer: 1
      },
      {
        question: "Which level of protection prevents others from adding, moving, or deleting worksheets?",
        options: ["File level protection", "Workbook level protection", "Worksheet level protection", "Cell level protection"],
        correctAnswer: 1
      },
      {
        question: "What does encrypting an Excel file with a password achieve?",
        options: ["It allows anyone to view but not edit the file.", "It denies access to the file unless the correct password is supplied.", "It automatically creates a backup of the file.", "It compresses the file size."],
        correctAnswer: 1
      }
    ],
    "Session 7": [
      {
        question: "What is the primary purpose of a PivotTable?",
        options: ["To create complex formulas", "To summarize, analyze, explore, and present summary data from a large dataset", "To draw charts", "To protect data"],
        correctAnswer: 1
      },
      {
        question: "How can you create a PivotTable quickly in Excel?",
        options: ["By using the 'Recommended PivotTables' option", "By typing data into cells", "By using the 'Format as Table' option", "By inserting a chart first"],
        correctAnswer: 0
      },
      {
        question: "What is a key difference between a standard chart and a PivotChart?",
        options: ["Standard charts are based on a PivotTable's data source.", "PivotCharts are linked directly to worksheet cells.", "Standard charts cannot be formatted.", "PivotCharts are based on their associated PivotTable's data source."],
        correctAnswer: 3
      },
      {
        question: "What does Power Query in Excel allow you to do?",
        options: ["Run SQL queries", "Import data from various sources and then clean, transform, and reshape it", "Create pivot tables automatically", "Password-protect queries"],
        correctAnswer: 1
      }
    ],
    "Session 8": [
      {
        question: "What is Microsoft PowerPoint primarily known as?",
        options: ["Spreadsheet software", "Presentation software", "Database software", "Email client"],
        correctAnswer: 1
      },
      {
        question: "Which PowerPoint feature is a pre-defined combination of colors, fonts, and effects?",
        options: ["Transition", "Animation", "Theme", "Template"],
        correctAnswer: 2
      },
      {
        question: "What is a 'Transition' in PowerPoint?",
        options: ["A sound effect", "A special effect applied when moving from one slide to the next", "A type of font", "A way to print slides"],
        correctAnswer: 1
      },
      {
        question: "Which pane in PowerPoint makes it easy to organize slides by allowing you to duplicate, rearrange, and delete them?",
        options: ["Notes Pane", "Slide Navigation Pane", "Task Pane", "Comments Pane"],
        correctAnswer: 1
      }
    ],
    "Session 9": [
      {
        question: "Which tab in PowerPoint is used to insert pictures, shapes, and charts?",
        options: ["Home Tab", "Design Tab", "Insert Tab", "Review Tab"],
        correctAnswer: 2
      },
      {
        question: "The 'Morph' transition in PowerPoint allows you to:",
        options: ["Add sound to text", "Animate smooth movement from one slide to the next", "Change the slide size", "Insert 3D models"],
        correctAnswer: 1
      },
      {
        question: "How can you integrate Artificial Intelligence (AI) tools into PowerPoint?",
        options: ["By changing the theme", "By adding them as Add-ins", "By using the Format Painter", "By applying transitions"],
        correctAnswer: 1
      },
      {
        question: "The Zoom feature in PowerPoint is used to:",
        options: ["Make the text larger", "Create interactive presentations by linking to specific slides or sections", "Zoom in on a picture", "Print a slide in a larger size"],
        correctAnswer: 1
      }
    ],
    "Session 10": [
      {
        question: "What is the primary purpose of Microsoft OneNote?",
        options: ["To send and receive emails", "To create online notebooks that are available anytime", "To analyze data", "To create presentations"],
        correctAnswer: 1
      },
      {
        question: "What is the function of 'Tags' in OneNote?",
        options: ["To change the page color", "To categorize and prioritize notes", "To insert tables", "To share notebooks"],
        correctAnswer: 1
      },
      {
        question: "Which operator in OneNote is used for exponential calculations?",
        options: ["+", "-", "*", "^"],
        correctAnswer: 3
      },
      {
        question: "OneNote's organization works from:",
        options: ["Top to bottom", "Right to left", "Left to right", "Center outwards"],
        correctAnswer: 2
      }
    ],
    "Session 11": [
      {
        question: "What is the primary function of Microsoft Outlook?",
        options: ["To create documents", "As an email client application", "To design presentations", "To manage databases"],
        correctAnswer: 1
      },
      {
        question: "What are 'Categories' in Outlook used for?",
        options: ["To change the font of emails", "To organize emails so they are easier to find", "To schedule meetings", "To delete old emails"],
        correctAnswer: 1
      },
      {
        question: "Which feature in Outlook 2021 allows you to draw or write with ink in your email messages?",
        options: ["Instant Search", "Improved Translator", "Freehand Drawing with Ink", "Hex Color Values"],
        correctAnswer: 2
      },
      {
        question: "The Calendar functionality in Outlook allows users to:",
        options: ["Play games", "Create appointments and schedule meetings", "Edit photos", "Browse the internet"],
        correctAnswer: 1
      }
    ],
    "Session 12": [
      {
        question: "What is Microsoft Skype primarily used for?",
        options: ["Data analysis", "Instant messaging, audio, and video communication", "Creating spreadsheets", "File management"],
        correctAnswer: 1
      },
      {
        question: "Which feature in Skype allows you to capture special moments and meetings?",
        options: ["Screen sharing", "Call recording", "Smart Messaging", "Phone calls"],
        correctAnswer: 1
      },
      {
        question: "Microsoft Teams is best described as a:",
        options: ["Graphic design tool", "Business messaging and collaboration platform", "Personal diary application", "Antivirus software"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a feature of Microsoft Teams?",
        options: ["Built-in translator", "Video game integration", "Food delivery service", "Currency converter"],
        correctAnswer: 0
      }
    ],
    "Session 13": [
      {
        question: "What is Microsoft OneDrive?",
        options: ["A video editing software", "A file hosting and cloud storage service", "A social media platform", "A programming language"],
        correctAnswer: 1
      },
      {
        question: "OneDrive can be used as a collaboration tool because it:",
        options: ["Plays music", "Provides a single location for files that multiple users can access and edit", "Sends faxes", "Creates animations"],
        correctAnswer: 1
      },
      {
        question: "What does syncing the Online OneDrive with the local OneDrive folder do?",
        options: ["Deletes files from both locations", "Keeps a copy of online files available on your local device", "Changes the file formats", "Shares files publicly on the internet"],
        correctAnswer: 1
      },
      {
        question: "How much free storage space does OneDrive provide to valid Microsoft users?",
        options: ["1 GB", "5 GB", "15 GB", "100 GB"],
        correctAnswer: 1
      }
    ]
  },
  "Unlocking SEO Techniques": {
    "Session 1": [
      {
        question: "What is the primary function of a search engine crawler?",
        options: ["To rank web pages based on user preferences", "To display search results to the user", "To browse the web, visiting pages and following links to discover content", "To interpret user queries"],
        correctAnswer: 2
      },
      {
        question: "The massive database where a search engine stores information about discovered web pages is called the:",
        options: ["SERP", "Index", "Cache", "Algorithm"],
        correctAnswer: 1
      },
      {
        question: "Which component of a search engine determines the order in which results appear on the SERP?",
        options: ["Crawler", "Query Processor", "User Interface", "Ranking System"],
        correctAnswer: 3
      },
      {
        question: "What does SEO stand for?",
        options: ["Search Engine Operation", "Site Enhancement Operation", "Search Engine Optimization", "Systematic Engine Output"],
        correctAnswer: 2
      },
      {
        question: "Which of the following is an advanced search technique that uses operators like AND, OR, and NOT?",
        options: ["Phrase Searching", "Wildcard Searches", "Boolean Operators", "File Type Searches"],
        correctAnswer: 2
      },
      {
        question: "Which tool, formerly known as Google Webmaster Tools, provides performance reports and index coverage data?",
        options: ["Google Analytics", "Google Ads", "Google Search Console", "Google My Business"],
        correctAnswer: 2
      },
      {
        question: "What is the main purpose of a robots.txt file?",
        options: ["To list all URLs for search engines to index", "To provide metadata about page changes", "To guide search engine crawlers on how to index a site", "To store structured data for rich snippets"],
        correctAnswer: 2
      },
      {
        question: "Technical SEO primarily focuses on optimizing which of the following?",
        options: ["Acquiring high-quality backlinks", "The technical aspects of a website to improve visibility", "Creating engaging social media content", "Writing meta descriptions"],
        correctAnswer: 1
      }
    ],
    "Session 2": [
      {
        question: "Which of the following is a core component of On-Page Optimization?",
        options: ["Influencer Outreach", "Meta Tags Optimization", "Forum Participation", "Social Bookmarking"],
        correctAnswer: 1
      },
      {
        question: "What is the primary goal of keyword research?",
        options: ["To increase website loading speed", "To identify relevant search terms used by the target audience", "To design a responsive website layout", "To build high-quality backlinks"],
        correctAnswer: 1
      },
      {
        question: "Which file is an XML file that lists all URLs and metadata to help search engines index important pages?",
        options: ["robots.txt", "sitemap.xml", "index.html", "style.css"],
        correctAnswer: 1
      },
      {
        question: "Schema Markup is used primarily to:",
        options: ["Increase page loading speed", "Block search engine crawlers from certain pages", "Provide additional context about page content to search engines", "Check for broken links on a website"],
        correctAnswer: 2
      },
      {
        question: "Off-Page Optimization involves activities that are conducted:",
        options: ["Directly on the website's source code", "Only on the website's blog", "External to the website", "Within the website's navigation structure"],
        correctAnswer: 2
      },
      {
        question: "What does a high Domain Authority (DA) score indicate?",
        options: ["The website has a fast loading time.", "The website has a strong potential to rank in search results.", "The website uses the correct keywords.", "The website has a responsive design."],
        correctAnswer: 1
      },
      {
        question: "Which strategy is used for earning high-quality backlinks by writing articles for other blogs?",
        options: ["Social Bookmarking", "Directory Submissions", "Guest Blogging", "Forum Posting"],
        correctAnswer: 2
      },
      {
        question: "The 'Spam Score' metric helps SEO professionals to:",
        options: ["Measure website traffic", "Evaluate the quality and trustworthiness of backlink sources", "Calculate the number of keywords on a page", "Analyze user engagement on social media"],
        correctAnswer: 1
      }
    ],
    "Session 3": [
      {
        question: "What does Mobile SEO primarily aim to improve?",
        options: ["Desktop search rankings", "Website visibility and ranking on mobile devices", "The number of social media followers", "The length of website content"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a key factor affecting mobile rankings?",
        options: ["Number of pop-up ads", "Page speed optimization", "Complex navigation menus", "Using Flash content"],
        correctAnswer: 1
      },
      {
        question: "A mobile sitemap is a specially formatted file that helps search engines:",
        options: ["Understand the desktop version of the site", "Navigate and index mobile-friendly pages", "Block mobile users from certain pages", "Increase the website's domain authority"],
        correctAnswer: 1
      },
      {
        question: "What is a fundamental characteristic of SEO-friendly content?",
        options: ["It is optimized with keywords and matches user search intent.", "It is always over 2000 words long.", "It avoids using headings and subheadings.", "It is written for search engines only, not users."],
        correctAnswer: 0
      },
      {
        question: "Which component is NOT typically part of SEO content?",
        options: ["Title Tags", "Meta Descriptions", "Alt Text for images", "Server IP Address"],
        correctAnswer: 3
      },
      {
        question: "Local SEO content is vital for businesses because it helps:",
        options: ["Attract customers from all over the world", "Connect with local customers searching for nearby products/services", "Improve rankings on social media platforms", "Increase the number of blog comments"],
        correctAnswer: 1
      },
      {
        question: "Which social media platform is primarily known as a professional networking site?",
        options: ["Instagram", "TikTok", "LinkedIn", "Snapchat"],
        correctAnswer: 2
      }
    ],
    "Session 4": [
      {
        question: "SEO Localization involves optimizing a website to:",
        options: ["Target multiple countries and languages", "Attract local customers in specific geographic areas", "Improve server response time", "Increase the number of PPC campaigns"],
        correctAnswer: 1
      },
      {
        question: "What is the purpose of hreflang tags in International SEO?",
        options: ["To increase page loading speed for international users", "To tell search engines which language and regional version of a page to show", "To block crawlers from specific countries", "To create local citations for a business"],
        correctAnswer: 1
      },
      {
        question: "Social Media Optimization (SMO) impacts SEO primarily by:",
        options: ["Directly influencing traditional SEO ranking algorithms", "Increasing brand visibility and engagement, which can lead to indirect SEO benefits", "Replacing the need for keyword research", "Automating the link-building process"],
        correctAnswer: 1
      },
      {
        question: "Which tool is best for analyzing website traffic and user behavior?",
        options: ["Google Keyword Planner", "Ahrefs", "Google Analytics", "Yoast SEO"],
        correctAnswer: 2
      },
      {
        question: "Google My Business (GMB) is most important for:",
        options: ["International SEO", "Local SEO", "Technical SEO", "Building backlinks from .edu domains"],
        correctAnswer: 1
      },
      {
        question: "Why are cultural and language considerations crucial in SEO?",
        options: ["They help reduce website loading time.", "They ensure content resonates authentically with diverse audiences.", "They are required for using Google Search Console.", "They automatically generate high-quality backlinks."],
        correctAnswer: 1
      },
      {
        question: "Which category of SEO tools includes platforms like Moz Link Explorer and BuzzSumo?",
        options: ["Keyword Research Tools", "On-Page Optimization Tools", "Link-Building Tools", "Rank Tracking Tools"],
        correctAnswer: 2
      }
    ]
  },
  "Frontend Technologies for Beginners": {
    "Session 1": [
      {
        question: "What was the year HTML was introduced?",
        options: ["1997", "1990", "2000", "1985"],
        correctAnswer: 1
      },
      {
        question: "Which organization recommended HTML5 as a standard in 1997?",
        options: ["WHATWG", "IEEE", "W3C", "ISO"],
        correctAnswer: 2
      },
      {
        question: "Which of the following is defined as the largest Wide Area Network (WAN)?",
        options: ["LAN", "The Web", "The Internet", "MAN"],
        correctAnswer: 2
      },
      {
        question: "What is the primary protocol used by a web browser to retrieve a web page from a server?",
        options: ["FTP", "TCP/IP", "HTTP", "SMTP"],
        correctAnswer: 2
      },
      {
        question: "What is a key characteristic of a Static Web Page?",
        options: ["Content is always up-to-date.", "It allows user interaction.", "Contents remain unchanged.", "It generates content on-demand."],
        correctAnswer: 2
      },
      {
        question: "Which technology is a scripting language used for creating dynamic Web pages?",
        options: ["CSS", "HTML", "JavaScript", "XHTML"],
        correctAnswer: 2
      },
      {
        question: "According to the basic rules for HTML5, the introduction of new features should be based on:",
        options: ["PHP and SQL", "HTML, CSS, DOM, and JavaScript", "Flash and Silverlight", "XHTML and XML"],
        correctAnswer: 1
      },
      {
        question: "Which HTML5 element is used for drawing graphics?",
        options: ["<draw>", "<graphic>", "<svg>", "<canvas>"],
        correctAnswer: 3
      },
      {
        question: "What is the primary purpose of CSS?",
        options: ["To add interactivity to web pages", "To structure the content of a web page", "To separate content from its formatting", "To connect to a database"],
        correctAnswer: 2
      },
      {
        question: "Which of the following is a benefit of using CSS?",
        options: ["More HTML code", "Code Re-usability", "Device Dependence", "Complex syntax"],
        correctAnswer: 1
      },
      {
        question: "Which of these is a functionality of JavaScript?",
        options: ["Specifying the character encoding for a page", "Creating a 2D drawable surface without plug-ins", "Defining the association with an external stylesheet", "Declaring the version of HTML"],
        correctAnswer: 1
      },
      {
        question: "jQuery is best described as:",
        options: ["A programming language", "A CSS framework", "A JavaScript library", "A server-side technology"],
        correctAnswer: 2
      },
      {
        question: "What is the correct syntax for the HTML5 DOCTYPE declaration?",
        options: ["<!DOCTYPE HTML5>", '<!DOCTYPE html PUBLIC "-//W3C//DTD HTML5//EN">', "<!DOCTYPE html>", "</DOCTYPE html5>"],
        correctAnswer: 2
      },
      {
        question: "In HTML5, which attribute is no longer necessary in the <link> tag when linking a stylesheet?",
        options: ["rel", "href", "type", "src"],
        correctAnswer: 2
      },
      {
        question: "Which data type specifies the spacing among HTML elements?",
        options: ["Colors", "Content Types", "URIs", "Lengths"],
        correctAnswer: 3
      },
      {
        question: "Which global attribute in HTML5 specifies whether an element can be dragged?",
        options: ["dir", "dropzone", "draggable", "contextmenu"],
        correctAnswer: 2
      },
      {
        question: "Which entity would you use to display the copyright symbol (©) on a web page?",
        options: ["&copy;", "&copyright;", "&c;", "&rights;"],
        correctAnswer: 0
      },
      {
        question: "What is a key characteristic of a standalone tag?",
        options: ["It contains a start tag, content, and an end tag.", "It consists of a start tag and attributes, followed by /> without any content.", "It is the largest container element.", "It always contains sub-elements."],
        correctAnswer: 1
      },
      {
        question: "A major benefit of using HTML5 for mobile development is:",
        options: ["Increased dependency on third-party plug-ins.", "Higher development costs for different platforms.", "Compatibility with most operating system platforms.", "The necessity for in-depth native programming knowledge."],
        correctAnswer: 2
      },
      {
        question: "Which of the following is a new semantic element introduced in HTML5?",
        options: ["<div>", "<span>", "<header>", "<table>"],
        correctAnswer: 2
      }
    ],
    "Session 2": [
      {
        question: "What is the top-level heading element in HTML?",
        options: ["<h2>", "<h4>", "<h1>", "<h6>"],
        correctAnswer: 2
      },
      {
        question: "Which tag is used to display text in bold?",
        options: ["<i>", "<strong>", "<b>", "Both b and c"],
        correctAnswer: 3
      },
      {
        question: "The <pre> tag is used for:",
        options: ["Predefined text", "Preformatted text", "Preferred text", "Preliminary text"],
        correctAnswer: 1
      },
      {
        question: "Which attribute is used to specify the URL in a hyperlink?",
        options: ["src", "link", "href", "url"],
        correctAnswer: 2
      },
      {
        question: 'What does the target="_blank" attribute do?',
        options: ["Opens the link in the same tab", "Opens the link in the parent frame", "Opens the link in a new, blank window or tab", "Opens the link in the full body of the window"],
        correctAnswer: 2
      },
      {
        question: "Which HTML5 tag is used to define independent, self-contained content?",
        options: ["<section>", "<article>", "<aside>", "<nav>"],
        correctAnswer: 1
      },
      {
        question: "The <nav> element is intended for:",
        options: ["Main content of the page", "Navigation links", "Sidebar content", "Footer information"],
        correctAnswer: 1
      },
      {
        question: "Which new HTML5 input type is used for entering an email address?",
        options: ["text", "email", "mail", "url"],
        correctAnswer: 1
      },
      {
        question: "The required attribute in a form input field:",
        options: ["Provides a default value", "Specifies a hint for the user", "Validates that the field is not empty", "Hides the field from the user"],
        correctAnswer: 2
      },
      {
        question: "A hidden field in a form is defined using:",
        options: ['<input type="password">', '<input type="hidden">', "<hidden>", '<input type="secure">'],
        correctAnswer: 1
      },
      {
        question: "Which attribute is used to merge table cells across multiple columns?",
        options: ["rowspan", "colspan", "cellspan", "merge"],
        correctAnswer: 1
      },
      {
        question: "The <caption> tag is used to:",
        options: ["Add a title to a table", "Add a header to a table column", "Add a footer to a table", "Define a table cell"],
        correctAnswer: 0
      },
      {
        question: "Which tag is used to embed audio in an HTML5 page?",
        options: ["<music>", "<mp3>", "<audio>", "<sound>"],
        correctAnswer: 2
      },
      {
        question: "The controls attribute in the <video> tag:",
        options: ["Automatically plays the video", "Loops the video", "Displays video playback controls", "Mutes the video"],
        correctAnswer: 2
      },
      {
        question: "The <track> element is used to specify:",
        options: ["The source file for the video", "Text tracks for video/audio (like subtitles)", "The playback speed", "The video dimensions"],
        correctAnswer: 1
      },
      {
        question: "The <canvas> element in HTML5 is used for:",
        options: ["Playing videos", "Drawing graphics via JavaScript", "Creating form inputs", "Displaying 3D models"],
        correctAnswer: 1
      },
      {
        question: "The Geolocation API is used to:",
        options: ["Get the user's geographical location", "Locate the nearest server", "Find the IP address of a website", "Track user clicks"],
        correctAnswer: 0
      },
      {
        question: "For a drag-and-drop operation, which attribute must be set to true on a draggable element?",
        options: ["draggable", "dragable", "dropzone", "ondrag"],
        correctAnswer: 0
      },
      {
        question: "The dataTransfer object is used in drag-and-drop to:",
        options: ["Store the data being dragged", "Change the cursor style", "Animate the element", "Validate the drop target"],
        correctAnswer: 0
      },
      {
        question: "The Application Cache (AppCache) is used to:",
        options: ["Run Web applications offline", "Increase server security", "Compress images", "Manage user sessions"],
        correctAnswer: 0
      }
    ],
    "Session 3": [
      {
        question: "CSS stands for:",
        options: ["Creative Style Sheets", "Cascading Style Sheets", "Computer Style Sheets", "Colorful Style Sheets"],
        correctAnswer: 1
      },
      {
        question: "Which of the following is a relative length unit in CSS?",
        options: ["px", "em", "cm", "in"],
        correctAnswer: 1
      },
      {
        question: "Where is an internal/embedded style sheet placed in an HTML document?",
        options: ["In the <body> section", "In the <head> section", "In a separate .css file", "In the <footer> section"],
        correctAnswer: 1
      },
      {
        question: "Which selector has the highest specificity?",
        options: ["Type Selector (e.g., p)", "Class Selector (e.g., .intro)", "ID Selector (e.g., #header)", "Universal Selector (e.g., *)"],
        correctAnswer: 2
      },
      {
        question: "The a:hover pseudo-class applies a style when:",
        options: ["The link has been visited", "The user mouses over the link", "The link is active (being clicked)", "The link is the first child"],
        correctAnswer: 1
      },
      {
        question: "Which property is used to change the text color?",
        options: ["text-color", "color", "font-color", "text-style"],
        correctAnswer: 1
      },
      {
        question: "The text-align: justify; property will:",
        options: ["Align text to the left", "Align text to the right", "Center the text", "Stretch the text to fit the container's width"],
        correctAnswer: 3
      },
      {
        question: "The CSS Box Model consists of:",
        options: ["Margin, Border, Padding, Content", "Header, Footer, Content, Border", "Top, Right, Bottom, Left", "Width, Height, Depth, Color"],
        correctAnswer: 0
      },
      {
        question: "Which property is used to create space between the element's content and its border?",
        options: ["margin", "spacing", "padding", "border-space"],
        correctAnswer: 2
      },
      {
        question: "The float property can be set to:",
        options: ["left, right, center", "left, right, none", "top, bottom, middle", "up, down, none"],
        correctAnswer: 1
      },
      {
        question: "Which graphic format uses lossless compression and supports transparency?",
        options: ["JPEG", "GIF", "PNG", "BMP"],
        correctAnswer: 2
      },
      {
        question: "The <img> tag is:",
        options: ["A container element", "An empty element", "A formatting element", "A deprecated element"],
        correctAnswer: 1
      },
      {
        question: "Which CSS property is used to create a transition effect?",
        options: ["transform", "animation", "transition", "change"],
        correctAnswer: 2
      },
      {
        question: "The @keyframes rule is used in:",
        options: ["CSS Transitions", "CSS Animations", "CSS Transformations", "CSS Positioning"],
        correctAnswer: 1
      },
      {
        question: "To make a Web page responsive for mobile devices, a developer can use:",
        options: ["Media Queries", "Cookies", "Web Storage", "Geolocation API"],
        correctAnswer: 0
      },
      {
        question: "Flexbox is primarily used for:",
        options: ["Two-dimensional layouts", "One-dimensional layouts", "Table-based layouts", "Fixed layouts"],
        correctAnswer: 1
      },
      {
        question: "Which property is used to align flex items along the main axis?",
        options: ["align-items", "justify-content", "flex-align", "content-justify"],
        correctAnswer: 1
      },
      {
        question: "CSS Grid Layout is used for:",
        options: ["One-dimensional layouts", "Two-dimensional layouts", "Linear layouts", "Inline layouts"],
        correctAnswer: 1
      },
      {
        question: "The grid-template-columns property defines:",
        options: ["The number of rows", "The size of the columns", "The gap between rows", "The alignment of the grid"],
        correctAnswer: 1
      },
      {
        question: "In a grid container, the grid-gap property sets the gap between:",
        options: ["Rows only", "Columns only", "Both rows and columns", "The grid and its container"],
        correctAnswer: 2
      },
      {
        question: "The CSS subgrid value allows:",
        options: ["A child grid to align with its parent grid", "Creating a grid within a flexbox", "Making a grid responsive", "Hiding grid items"],
        correctAnswer: 0
      },
      {
        question: "The accent-color property is used to style:",
        options: ["The background of a page", "Form elements like checkboxes and radio buttons", "The text color of headings", "The border of images"],
        correctAnswer: 1
      },
      {
        question: "The :has() pseudo-class allows selection of a parent based on its:",
        options: ["Siblings", "Children", "Ancestors", "Descendants"],
        correctAnswer: 1
      },
      {
        question: "Viewport units (vw, vh) are relative to:",
        options: ["The parent element's size", "The root element's font size", "The size of the browser viewport", "The screen's pixel density"],
        correctAnswer: 2
      },
      {
        question: "CSS Nesting allows you to:",
        options: ["Nest media queries inside selectors", "Nest selectors inside other selectors", "Nest HTML elements inside CSS", "Nest JavaScript inside CSS"],
        correctAnswer: 1
      },
      {
        question: "A responsive Web design aims to:",
        options: ["Make Websites look the same on all devices", "Provide an optimal viewing experience across a wide range of devices", "Load faster on mobile networks", "Use only HTML5 and no CSS"],
        correctAnswer: 1
      },
      {
        question: "Which CSS technique is crucial for creating responsive layouts?",
        options: ["Media Queries", "CSS Animations", "Text Shadows", "Font Faces"],
        correctAnswer: 0
      },
      {
        question: 'The "mobile-first" design approach means:',
        options: ["Designing for desktop first and then adapting for mobile", "Designing for mobile devices first and then scaling up for larger screens", "Designing only for mobile phones", "Using mobile-specific HTML tags"],
        correctAnswer: 1
      }
    ],
    "Session 4": [
      {
        question: "JavaScript is a ______ language.",
        options: ["Compiled", "Scripting", "Markup", "Styling"],
        correctAnswer: 1
      },
      {
        question: "Which keyword is used to declare a variable in JavaScript?",
        options: ["var", "variable", "int", "declare"],
        correctAnswer: 0
      },
      {
        question: 'What will document.write("Hello"); do?',
        options: ['Display an alert box with "Hello"', 'Write "Hello" to the HTML document', 'Print "Hello" to the console', 'Store "Hello" in a variable'],
        correctAnswer: 1
      },
      {
        question: "Which method is used to call a function when an event occurs on an element?",
        options: ["addEventListener()", "callFunction()", "triggerEvent()", "eventCall()"],
        correctAnswer: 0
      },
      {
        question: "The === operator in JavaScript checks for:",
        options: ["Value equality only", "Type equality only", "Both value and type equality", "Neither value nor type equality"],
        correctAnswer: 2
      },
      {
        question: "A function in JavaScript is defined using the keyword:",
        options: ["function", "def", "method", "func"],
        correctAnswer: 0
      },
      {
        question: "What does the return statement do in a function?",
        options: ["Stops the function's execution", "Returns a value from the function", "Both a and b", "Prints the value to the console"],
        correctAnswer: 2
      },
      {
        question: "The Document Object Model (DOM) represents an HTML document as a:",
        options: ["Linear list", "Tree structure", "Grid layout", "Stack of elements"],
        correctAnswer: 1
      },
      {
        question: "JSON stands for:",
        options: ["JavaScript Object Notation", "JavaScript Online Network", "Java Standard Object Naming", "JavaScript Oriented Notation"],
        correctAnswer: 0
      },
      {
        question: "A JavaScript Promise represents the eventual completion or failure of a(n):",
        options: ["Synchronous operation", "Asynchronous operation", "Conditional operation", "Logical operation"],
        correctAnswer: 1
      },
      {
        question: "What does the top-level await feature allow?",
        options: ["Using await outside of an async function in modules", "Using await in loops", "Making all functions asynchronous by default", "Waiting for the entire page to load"],
        correctAnswer: 0
      },
      {
        question: "How is a private class field defined in JavaScript?",
        options: ["By using the private keyword", "By prefixing the field name with a #", "By placing it inside a private block", "By using the _ (underscore) convention"],
        correctAnswer: 1
      },
      {
        question: "The Object.hasOwn() method is a modern replacement for:",
        options: ["Object.hasProperty()", "Object.has()", "Object.hasOwnProperty()", "Object.contain()"],
        correctAnswer: 2
      },
      {
        question: "Which method is used to draw a line on a canvas?",
        options: ["drawLine()", "lineTo()", "createLine()", "addLine()"],
        correctAnswer: 1
      },
      {
        question: "Which Web Storage type persists data even after the browser is closed?",
        options: ["Session Storage", "Local Storage", "Cookie Storage", "Cache Storage"],
        correctAnswer: 1
      },
      {
        question: "The sessionStorage object stores data for:",
        options: ["One session (until the browser tab is closed)", "Forever", "24 hours", "Until the user logs out"],
        correctAnswer: 0
      },
      {
        question: "IndexedDB is a:",
        options: ["Server-side relational database", "Client-side NoSQL database", "Cloud storage API", "Cookie management system"],
        correctAnswer: 1
      },
      {
        question: "Which method is used to get the user's current position?",
        options: ["getLocation()", "getCurrentPosition()", "findPosition()", "locateUser()"],
        correctAnswer: 1
      }
    ],
    "Session 5": [
      {
        question: "Which of the following is a key feature of jQuery?",
        options: ["Event Handling", "DOM Manipulation", "Animations", "All of the above"],
        correctAnswer: 3
      },
      {
        question: "The jQuery hover() event is a combination of which two events?",
        options: ["click and dblclick", "mouseenter and mouseleave", "focus and blur", "keydown and keyup"],
        correctAnswer: 1
      },
      {
        question: "Which tool is commonly used by developers to test mobile views?",
        options: ["Browser Developer Tools (e.g., Chrome DevTools)", "Microsoft Word", "Adobe Photoshop", "Windows File Explorer"],
        correctAnswer: 0
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

semester1Data.books = flattenSessions(semester1Data.booksBySession);

export default semester1Data;
