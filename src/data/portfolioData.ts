import { Project, Service, ExperienceItem, SkillCategory, Testimonial, BlogPost, UserProfile } from '../types';

export const defaultProfile: UserProfile = {
  name: 'Shubham Kumar.',
  title: 'Software Developer & Full-Stack Engineer, based in India.',
  location: 'Guntur, Andhra Pradesh (Present) | Nawada, Bihar (Permanent)',
  presentAddress: "Vignan's Foundation for Science, Technology & Research (VFSTR), Vadlamudi, Guntur, Andhra Pradesh — 522213, India",
  permanentAddress: 'Line Par, Mirzapur, Nawada, Bihar, India',
  tagline: 'MERN Stack Developer, Backend Engineer & Cryptanalysis Researcher.',
  bioIntro: 'Software Developer focused on building efficient, scalable web applications with JavaScript, Node.js, Express.js, and React.js. Specializing in REST API design, CRUD operations, real-time WebSockets, and responsive development.',
  bioExtended: 'I am a Computer Science & Engineering undergraduate at Vignan’s Foundation for Science, Technology and Research (Autonomous University). I possess strong technical capabilities in full-stack MERN architecture, RESTful API engineering, real-time GPS/SOS systems via Socket.IO, and cryptographic algorithms. I have published research at the IEEE ICCBI 2026 conference in Dubai on the cryptanalysis of the Vigenere Cipher.',
  quote: "To apply my skills in JavaScript, Node.js, and Express.js to build efficient, scalable web applications, while continuously learning and contributing to engineering excellence through clean code and problem solving.",
  email: 'shubhamsven@gmail.com',
  phone: '+91-6204157565',
  yearsExperience: 2,
  clientsCount: 8,
  projectsCount: 12,
  githubUrl: 'https://github.com/shubham-sven',
  linkedinUrl: 'https://www.linkedin.com/in/shubham-sven-6810932ba/',
  instagramUrl: 'https://www.instagram.com/_only__sven?igsi=emxjcHF4OW02bncz',
  facebookUrl: 'https://www.facebook.com/share/1ML7N89drB/',
  dribbbleUrl: 'https://github.com/shubham-sven',
  twitterUrl: 'https://www.linkedin.com/in/shubham-sven-6810932ba/',
};

export const servicesData: Service[] = [
  {
    id: 'full-stack-mern',
    title: 'Full-Stack MERN Dev.',
    subtitle: 'React.js, Node.js, Express.js & MongoDB',
    description: 'Developing end-to-end full-stack web applications with reactive user interfaces, clean REST APIs, JWT authentication, and structured MongoDB databases.',
    detailedDescription: 'From responsive client-side SPAs in React.js to robust Node.js/Express.js backend services. Specializing in component state management, CRUD workflows, API route protection, and seamless database integration.',
    projectCount: 6,
    iconName: 'Code2',
    deliverables: ['Full-Stack MERN Web Apps', 'React.js Single Page Apps', 'MongoDB Schema Modeling', 'JWT Auth Pipelines', 'CRUD Dashboards'],
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'JavaScript (ES6+)', 'HTML5/CSS3']
  },
  {
    id: 'backend-rest-apis',
    title: 'Backend & REST APIs.',
    subtitle: 'Scalable Endpoints & CRUD Operations',
    description: 'Designing modular Express.js server architectures, robust RESTful APIs, data validation middlewares, and third-party alert integrations with Twilio and Nodemailer.',
    detailedDescription: 'Writing clean, typed, maintainable backend code. Deep focus on REST API design conventions, error handling middlewares, JWT token verification, and integration with cloud notification channels.',
    projectCount: 8,
    iconName: 'Server',
    deliverables: ['RESTful API Endpoints', 'CRUD Operations', 'JWT Middleware Authorization', 'Twilio SMS Gateway', 'Nodemailer Email Services'],
    technologies: ['Node.js', 'Express.js', 'REST APIs', 'Postman', 'JWT', 'Nodemailer', 'Twilio']
  },
  {
    id: 'realtime-websockets',
    title: 'Real-Time & WebSockets.',
    subtitle: 'Live Tracking, SOS & Event Streaming',
    description: 'Architecting bidirectional real-time communication systems using Socket.IO, live GPS location streams, Google Maps API telemetry, and emergency alert broadcasting.',
    detailedDescription: 'Building mission-critical safety and tracking platforms. Integrating Socket.IO event emitters for live geolocation updates, panic button triggers, and multi-client real-time synchronization.',
    projectCount: 4,
    iconName: 'Zap',
    deliverables: ['Socket.IO Event Pipelines', 'Live GPS Tracking Streams', 'Google Maps API Integration', 'SOS Panic Systems', 'Real-Time Dashboards'],
    technologies: ['Socket.IO', 'Google Maps API', 'WebSockets', 'Node.js', 'Express.js', 'MongoDB']
  },
  {
    id: 'cryptanalysis-algorithms',
    title: 'Cryptanalysis & DSA.',
    subtitle: 'Research, Algorithms & Core CS',
    description: 'Implementing algorithmic solutions in Python and Java, frequency analysis tools, Kasiski examination for polyalphabetic ciphers, and Data Structures & Algorithms.',
    detailedDescription: 'Research background in cybersecurity and algorithmic cryptography published in IEEE ICCBI 2026. Proficient in Object-Oriented Programming (OOP), DBMS, and algorithmic problem solving.',
    projectCount: 5,
    iconName: 'ShieldCheck',
    deliverables: ['Kasiski Cryptanalysis Engines', 'Frequency Analysis Tools', 'OOP Architectures in Java/Python', 'DBMS Normalized Schemas', 'DSA Solutions'],
    technologies: ['Python', 'Java', 'Data Structures & Algorithms', 'OOP', 'DBMS', 'Kasiski Method']
  }
];

export const projectsData: Project[] = [
  {
    id: 'women-safety-app',
    number: '01',
    title: 'Women Safety App.',
    subtitle: 'Live Tracking, SOS Alerting & Emergency Telemetry Platform',
    category: 'web',
    categoryLabel: 'Full-Stack MERN & Real-Time',
    description: 'A full-stack MERN safety platform with real-time GPS tracking, 1-tap SOS alerts, emergency contact management, and Google Maps live telemetry via Socket.IO.',
    longDescription: 'Engineered a mission-critical safety platform connecting users with emergency contacts and first responders. Features real-time GPS position broadcasting via Socket.IO, instant SMS/Email notifications through Twilio and Nodemailer, AI-powered voice sentiment analysis for panic detection, and a portable QR-based safety card for instant police and medical info sharing.',
    tags: ['MERN Stack', 'Socket.IO', 'Google Maps API', 'Twilio SMS', 'AI Voice Sentiment', 'JWT Auth'],
    techStack: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Socket.IO', 'Twilio', 'Nodemailer', 'Tailwind CSS'],
    year: '2026',
    client: 'Safety & Social Impact Tech',
    role: 'Lead Full-Stack MERN Developer',
    featured: true,
    accentColor: '#F7B52B',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://github.com/shubham-sven/Women-Safety-Live-Tracking-SOS-System-',
    githubUrl: 'https://github.com/shubham-sven/Women-Safety-Live-Tracking-SOS-System-',
    stats: [
      { label: 'SOS Alert Latency', value: '< 450ms' },
      { label: 'Telemetry Protocol', value: 'Socket.IO' },
      { label: 'Dispatch Channels', value: 'SMS, Email & Maps' }
    ],
    caseStudy: {
      overview: 'Built a full-stack MERN safety platform designed to provide instant assistance to individuals in danger through automated coordinate broadcasting, live maps tracking, and voice sentiment panic detection.',
      problem: 'Traditional emergency reporting requires manual dialing and typing in high-stress situations. Victims need an instantaneous 1-tap SOS trigger that broadcasts dynamic GPS coordinates to both emergency contacts and medical/police services.',
      solution: 'Architected a low-latency event-driven backend using Node.js, Express, and Socket.IO for continuous GPS tracking on Google Maps, backed by Twilio SMS and Nodemailer fallback notifications with AI panic sentiment detection.',
      architecture: [
        'Event-driven Socket.IO server broadcasting live GPS telemetry coordinates in real-time',
        'RESTful Express.js backend with JWT authentication and MongoDB contact circle storage',
        'Multi-channel dispatch gateway triggering Twilio SMS and Nodemailer alerts in parallel',
        'AI voice sentiment analysis node detecting distress markers and triggering automated SOS'
      ],
      challenges: [
        'Ensuring zero packet loss for GPS coordinate updates over intermittent mobile network connections',
        'Implementing rapid failover mechanisms between WebSocket live streams and SMS/Email notification fallbacks'
      ],
      results: [
        'Achieved sub-500ms end-to-end SOS trigger and SMS dispatch time',
        'Integrated dynamic QR safety card for rapid first-responder identity and medical access',
        'Successfully deployed full-stack prototype with 100% test coverage on authentication and routing'
      ],
      keyFeatures: [
        'One-Touch Instant SOS Panic Button with multi-channel dispatch',
        'Live Google Maps GPS tracking stream powered by Socket.IO',
        'AI Voice Sentiment Panic Detection with automatic keyword recognition',
        'QR-based Emergency Medical & Police Safety Card generator'
      ]
    },
    interactiveType: 'women-safety'
  },
  {
    id: 'library-management-system',
    number: '02',
    title: 'Library Management System.',
    subtitle: 'Express.js Backend, REST API & Borrowing Lifecycle Engine',
    category: 'web',
    categoryLabel: 'Backend Architecture & Cloud',
    description: 'A full-featured library management platform with Express.js REST APIs, catalog indexing, borrowing/returning workflows, user roles, and live Vercel deployment.',
    longDescription: 'Engineered an Express.js backend architecture with structured REST API endpoints for book catalog management, search filtering by title/author/ISBN, user registration, active loan tracking, and overdue calculations. Live production deployment hosted on Vercel.',
    tags: ['Node.js', 'Express.js', 'REST APIs', 'Vercel Deployment', 'JavaScript (ES6+)', 'CRUD'],
    techStack: ['Node.js', 'Express.js', 'JavaScript (ES6+)', 'REST APIs', 'HTML5', 'CSS3', 'Vercel'],
    year: '2025',
    client: 'Educational & Web Architecture',
    role: 'Backend & REST API Developer',
    featured: true,
    accentColor: '#38BDF8',
    image: 'https://images.unsplash.com/photo-1507842229451-79b1be886a20?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://library-management-system-express.vercel.app',
    githubUrl: 'https://github.com/shubham-sven/Library-Management-System-express-',
    stats: [
      { label: 'Hosting', value: 'Vercel Live' },
      { label: 'Architecture', value: 'Express.js REST' },
      { label: 'API Operations', value: 'Full CRUD' }
    ],
    caseStudy: {
      overview: 'Developed and deployed a production-ready Library Management System utilizing Express.js and modular RESTful routing to manage library inventories, users, and borrowing lifecycles.',
      problem: 'Educational institutions and book clubs require an agile, lightweight system to track book availability, checkout statuses, and user accounts without cumbersome legacy software.',
      solution: 'Created an MVC-structured Express application with modular route handlers (app.js, books.js, users.js), client-side asynchronous fetch requests, and responsive styling.',
      architecture: [
        'Express.js server with modular controllers for book catalog and user transactions',
        'RESTful CRUD endpoints supporting query-parameter filtering, sorting, and pagination',
        'Vercel serverless deployment configuration for high-availability cloud hosting'
      ],
      challenges: [
        'Handling atomic inventory decrements and increments during concurrent book borrow/return requests',
        'Ensuring zero cold-start latency on Vercel deployment'
      ],
      results: [
        'Successfully deployed live to Vercel (library-management-system-express.vercel.app)',
        'Implemented full catalog search with instant client-side rendering and validation'
      ],
      keyFeatures: [
        'Complete Book Catalog CRUD (Add, Edit, Delete, Search)',
        'User Borrowing & Return Lifecycle Tracking with date calculations',
        'Search & Filter by Title, Author, Genre, and Availability',
        'Production Vercel Cloud Deployment'
      ]
    },
    interactiveType: 'library-system'
  },
  {
    id: 'digital-art-marketplace',
    number: '03',
    title: 'Digital Art Marketplace.',
    subtitle: 'Dynamic DOM Gallery, Art Curation & Upload System',
    category: 'web',
    categoryLabel: 'Frontend Architecture & DOM',
    description: 'A responsive 5-page web application (Home, Browse, Artists, Collections, Upload) for discovering, curating, and showcasing high-resolution digital artworks.',
    longDescription: 'Developed an interactive digital art marketplace featuring dynamic client-side DOM rendering, real-time artwork file upload validation via modular upload.js, artist profile showcases, and cross-device responsive UI styling.',
    tags: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'Dynamic DOM', 'File Upload', 'Responsive UI'],
    techStack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'DOM API', 'upload.js', 'Responsive Grid'],
    year: '2025',
    client: 'Creative Media & Web Platform',
    role: 'Frontend & UI Developer',
    featured: true,
    accentColor: '#A855F7',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1561055657-b9e0bf0fa360?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://github.com/shubham-sven/Digital-art-marketplace',
    githubUrl: 'https://github.com/shubham-sven/Digital-art-marketplace',
    stats: [
      { label: 'Page Modules', value: '5 Views' },
      { label: 'DOM Render Speed', value: 'Instant' },
      { label: 'Device Support', value: '100% Fluid' }
    ],
    caseStudy: {
      overview: 'Created an accessible and elegant 5-page web application dedicated to digital artists and art collectors for seamless artwork discovery and portfolio uploads.',
      problem: 'Artists needed a clean, distraction-free gallery platform with dynamic DOM filtering, smooth image previewing, and instantaneous file upload validation without heavy framework overhead.',
      solution: 'Engineered custom modular JavaScript modules including dynamic DOM renderers, client-side file upload validators (upload.js), and a responsive unified CSS stylesheet.',
      architecture: [
        'Modular ES6+ JavaScript architecture with clean separation between UI controllers and state',
        'Dynamic DOM rendering engine updating gallery grids without full page reloads',
        'Client-side file upload module (upload.js) enforcing strict image MIME and size validations'
      ],
      challenges: [
        'Ensuring flawless cross-browser compatibility and responsive layout parity across mobile, tablet, and desktop viewports',
        'Optimizing DOM re-rendering performance when filtering through large collections of art pieces'
      ],
      results: [
        'Delivered 5 complete interconnected pages (Home, Browse, Artists, Collections, Upload)',
        'Achieved zero-dependency fast client-side rendering with instant file previewing'
      ],
      keyFeatures: [
        '5-Page Interconnected Architecture (Home, Browse, Artists, Collections, Upload)',
        'Dynamic DOM Gallery with category and artist filtering',
        'Modular upload.js engine with real-time image validation and preview',
        'Universal responsive stylesheet with fluid grid layouts'
      ]
    },
    interactiveType: 'art-marketplace'
  },
  {
    id: 'project-booking',
    number: '04',
    title: 'Na-Ni Tickets & Booking Engine.',
    subtitle: 'Event Reservation, Seat Allocation & Pass Generation Engine',
    category: 'web',
    categoryLabel: 'Event & Ticket Booking Architecture',
    description: 'An interactive ticket booking and seat reservation web application featuring dynamic slot picking, attendee verification, and instant ticket pass generation.',
    longDescription: 'Engineered a ticket booking platform (PROJECT-BOOKING- / Na-Ni Tickets) enabling users to discover upcoming events, select seats or ticket tiers, input attendee details, and generate digital reservation confirmations with dynamic pricing calculations.',
    tags: ['JavaScript', 'Node.js', 'Booking Engine', 'State Management', 'UI Workflows', 'Dynamic Pricing'],
    techStack: ['JavaScript (ES6+)', 'Node.js', 'HTML5', 'CSS3', 'Dynamic DOM', 'Ticket Generator'],
    year: '2026',
    client: 'Event & Entertainment Tech',
    role: 'Full-Stack & Workflow Developer',
    featured: false,
    accentColor: '#EC4899',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://github.com/shubham-sven/PROJECT-BOOKING-',
    githubUrl: 'https://github.com/shubham-sven/PROJECT-BOOKING-',
    stats: [
      { label: 'Booking Flow', value: '3-Step Wizard' },
      { label: 'Ticket Generation', value: 'Instant Pass' },
      { label: 'Validation', value: 'Strict Real-Time' }
    ],
    caseStudy: {
      overview: 'Engineered an intuitive event ticket reservation application designed for seamless browsing, seat slot selection, attendee registration, and digital ticket issuance.',
      problem: 'Event attendees require a transparent, frictionless checkout process that calculates tax, discounts, and tiered seating in real-time without cumbersome page reloads.',
      solution: 'Built a multi-step booking wizard with dynamic ticket calculation, slot locking, and automated digital pass generation with unique verification tokens.',
      architecture: [
        'Modular booking state machine managing event dates, seat tiers, and attendee info',
        'Dynamic pricing engine computing taxes, quantities, and subtotal totals on the fly',
        'Client-side ticket pass generator creating printable reservation receipts'
      ],
      challenges: [
        'Handling dynamic form validations for multi-ticket attendee groups',
        'Preventing accidental step skipping or invalid seat selections'
      ],
      results: [
        'Created a responsive, cross-platform ticket purchasing interface',
        'Streamlined the booking workflow to under 60 seconds from selection to confirmation'
      ],
      keyFeatures: [
        'Interactive Event Date & Seat Tier Selector',
        'Dynamic Price Breakdown with live tax and discount computation',
        'Attendee Registration Form with input sanitization',
        'Instant Digital Ticket Confirmation Pass generator'
      ]
    },
    interactiveType: 'event-booking'
  },
  {
    id: 'books-inventory-manager',
    number: '05',
    title: 'Book Inventory & Reading Tracker.',
    subtitle: 'Node.js REST API & Reading List Persistence Engine',
    category: 'web',
    categoryLabel: 'Node.js & Data Management',
    description: 'A dynamic book inventory manager and reading tracker with Node.js server, JSON database persistence, status toggling, and search filters.',
    longDescription: 'Created a full-stack book directory application (books-that-manages-a-list-of-book) with a Node.js/Express backend (server.js) utilizing books.json for persistent CRUD operations. Supports genre classification, read/reading/to-read statuses, star ratings, and author queries.',
    tags: ['Node.js', 'Express', 'JSON DB', 'REST API', 'JavaScript', 'CRUD'],
    techStack: ['Node.js', 'Express.js', 'JavaScript (ES6+)', 'books.json', 'HTML5', 'CSS3'],
    year: '2025',
    client: 'Personal Productivity & Catalog Tools',
    role: 'Backend & Data Developer',
    featured: false,
    accentColor: '#6366F1',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://github.com/shubham-sven/books-that-manages-a-list-of-book',
    githubUrl: 'https://github.com/shubham-sven/books-that-manages-a-list-of-book',
    stats: [
      { label: 'Storage Engine', value: 'books.json' },
      { label: 'CRUD Status', value: 'REST Active' },
      { label: 'Filter Speed', value: '< 15ms' }
    ],
    caseStudy: {
      overview: 'Built a lightweight, persistent reading list and book inventory system powered by a Node.js REST API with file-backed JSON storage.',
      problem: 'Book lovers and students need a zero-configuration personal library catalog to keep track of their reading progress and personal ratings.',
      solution: 'Architected an Express server handling REST endpoints for GET /books, POST /books, PUT /books/:id, and DELETE /books/:id with atomic filesystem sync.',
      architecture: [
        'Node.js HTTP/Express server serving REST endpoints for inventory manipulation',
        'Asynchronous JSON file reader/writer ensuring persistent state across server restarts',
        'Interactive front-end with live status badges and star rating controls'
      ],
      challenges: [
        'Handling asynchronous file I/O safely to prevent race conditions during rapid book additions',
        'Providing responsive client-side UI filtering without refetching the entire dataset'
      ],
      results: [
        'Delivered an intuitive personal book tracker with full CRUD capability',
        'Implemented status categorization: Want to Read, Currently Reading, Completed'
      ],
      keyFeatures: [
        'CRUD Book Cataloging with title, author, genre, and page count',
        'Reading Progress State Switcher (To Read, In Progress, Finished)',
        'Star Rating & Review Notes system',
        'Persistent file-based JSON storage synchronization'
      ]
    },
    interactiveType: 'reading-tracker'
  },
  {
    id: 'atm-simulator',
    number: '06',
    title: 'MSD ATM Simulator & Banking Ledger.',
    subtitle: 'Interactive ATM Interface, Currency Denomination & PIN Security',
    category: 'experiments',
    categoryLabel: 'Banking Simulation & State Logic',
    description: 'An interactive ATM simulator with PIN authentication, cash withdrawal denomination algorithms, balance inquiry, deposit flow, and transaction statement ledgers.',
    longDescription: 'Developed an interactive ATM banking application (atm / MSD Project) recreating realistic automatic teller machine operations: 4-digit PIN verification, account balance tracking, deposit and withdrawal validation, smart currency denomination breakdown (₹500, ₹200, ₹100 notes), and mini-statement receipts.',
    tags: ['JavaScript', 'HTML5', 'CSS3', 'Banking State Machine', 'Algorithms', 'UI Sound FX'],
    techStack: ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'State Machines', 'Mathematical Algorithms'],
    year: '2025',
    client: 'Fintech Simulation & Systems Design',
    role: 'Lead Developer',
    featured: false,
    accentColor: '#10B981',
    image: 'https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://github.com/shubham-sven/atm',
    githubUrl: 'https://github.com/shubham-sven/atm',
    stats: [
      { label: 'Security Model', value: '4-Digit PIN' },
      { label: 'Denomination Engine', value: '₹500 / ₹200 / ₹100' },
      { label: 'Ledger Flow', value: 'Mini-Statement' }
    ],
    caseStudy: {
      overview: 'Created an engaging ATM simulator modeling core banking workflows, input authentication, state-driven screen routing, and currency dispenser mathematics.',
      problem: 'Building interactive banking simulations requires rigorous state machine handling to ensure account balance integrity, withdrawal limits, and clear customer feedback.',
      solution: 'Engineered a finite-state machine handling authentication, menu navigation, cash dispensing algorithms, and real-time transaction history logging.',
      architecture: [
        'State-driven UI controller transitioning between PIN Entry, Main Menu, Withdraw, Deposit, and Statement',
        'Greedy currency denomination algorithm computing the minimum number of ₹500, ₹200, and ₹100 notes',
        'Local transaction ledger recording timestamped debit and credit events'
      ],
      challenges: [
        'Enforcing strict validation on withdrawal multiples and insufficient balance conditions',
        'Crafting an authentic ATM hardware aesthetic with responsive keypad interactions'
      ],
      results: [
        'Built a complete, interactive banking simulation with zero dependencies',
        'Implemented automatic note dispenser calculations for any withdrawal amount'
      ],
      keyFeatures: [
        'PIN Authentication Simulation with attempt lockout logic',
        'Smart Cash Withdrawal with note denomination breakdown (₹500, ₹200, ₹100)',
        'Deposit System with instant balance update',
        'Mini-Statement Generator with transaction timestamps'
      ]
    },
    interactiveType: 'atm-simulator'
  },
  {
    id: 'studio-agency',
    number: '07',
    title: 'Studio Creative Agency Platform.',
    subtitle: 'Modern Agency Showcase, Case Studies & Design Systems',
    category: 'design',
    categoryLabel: 'Creative Agency & UI Architecture',
    description: 'An aesthetic digital agency portfolio website showcasing creative services, interactive case studies, responsive grid layouts, and smooth micro-interactions.',
    longDescription: 'Crafted a modern creative agency platform (studio) featuring an editorial grid layout, brand design case studies, interactive service cards, dynamic project showcases, and a streamlined client inquiry form.',
    tags: ['HTML5', 'CSS3', 'JavaScript', 'Design Systems', 'Responsive UI', 'Agency Showcase'],
    techStack: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'Responsive Layouts', 'CSS Grid', 'Typography'],
    year: '2025',
    client: 'Design & Creative Studio',
    role: 'Creative Developer & UI Designer',
    featured: false,
    accentColor: '#F59E0B',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://github.com/shubham-sven/studio',
    githubUrl: 'https://github.com/shubham-sven/studio',
    stats: [
      { label: 'Design System', value: 'Minimalist & Dark' },
      { label: 'Layout Grid', value: '12-Column Fluid' },
      { label: 'Aesthetics', value: 'Editorial Typography' }
    ],
    caseStudy: {
      overview: 'Designed and implemented an editorial showcase website for a creative design studio, focusing on typography pairing, spacious layouts, and project presentation.',
      problem: 'Creative studios need high-impact visual platforms that let their work speak for itself with minimal distractions and swift page loading.',
      solution: 'Engineered a modern web layout with dark neutral canvas, yellow and amber accent hierarchy, responsive portfolio cards, and interactive service breakdowns.',
      architecture: [
        'Semantic HTML5 structure optimized for readability and accessibility',
        'Custom modular CSS utilizing modern Flexbox and CSS Grid layout algorithms',
        'Smooth scroll behaviors and interactive project filtering controllers'
      ],
      challenges: [
        'Balancing bold display typography with crisp mobile viewport legibility',
        'Ensuring optimal image loading across varied network speeds'
      ],
      results: [
        'Created a high-converting digital agency showcase platform',
        'Achieved 100% responsiveness across mobile, tablet, and desktop screens'
      ],
      keyFeatures: [
        'Editorial Agency Showcase with project spotlights',
        'Interactive Services Grid with expandable capabilities',
        'Fluid Responsive Layout adhering to mathematical grids',
        'Direct Client Inquiry and consultation contact flow'
      ]
    },
    interactiveType: 'studio-agency'
  },
  {
    id: 'vigenere-cryptanalysis',
    number: '08',
    title: 'Vigenere Cryptanalysis Platform.',
    subtitle: 'Kasiski Examination & Letter Frequency Analysis Research',
    category: 'experiments',
    categoryLabel: 'Research Publication & Algorithms',
    description: 'Published research platform (IEEE ICCBI 2026) for automated polyalphabetic ciphertext decryption, key length estimation via Kasiski examination, and statistical letter frequency matching.',
    longDescription: 'Authored and presented at the 5th International Conference on Computer Networks, Big Data and IoT (ICCBI 2026), Manipal Academy of Higher Education, Dubai. Implements statistical algorithms in Python and Java to automatically break Vigenere ciphers using repeated substring interval analysis (Kasiski) and index of coincidence frequency distributions.',
    tags: ['Cryptanalysis', 'Kasiski Examination', 'Frequency Analysis', 'Python', 'Java', 'IEEE Xplore'],
    techStack: ['Python', 'Java', 'Cryptographic Algorithms', 'Kasiski Method', 'Statistical Analysis', 'DSA'],
    year: '2026',
    client: 'IEEE ICCBI 2026 (Dubai, UAE)',
    role: 'Lead Author & Algorithm Researcher',
    featured: true,
    accentColor: '#10B981',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    secondaryImages: [
      'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80'
    ],
    liveUrl: 'https://github.com/shubham-sven',
    githubUrl: 'https://github.com/shubham-sven',
    stats: [
      { label: 'Conference', value: 'IEEE ICCBI 2026' },
      { label: 'Key Estimation', value: 'Kasiski Method' },
      { label: 'Publication', value: 'IEEE Xplore' }
    ],
    caseStudy: {
      overview: 'Research project published at IEEE ICCBI 2026 exploring automated cryptanalysis techniques for polyalphabetic substitution ciphers using mathematical frequency analysis and Kasiski examination.',
      problem: 'Polyalphabetic ciphers resist traditional single-character frequency analysis by employing shifting keystreams, requiring automated substring distance factorizations to deduce key lengths.',
      solution: 'Designed and implemented an algorithmic framework in Python and Java that identifies repeated n-gram patterns, computes greatest common divisors of interval distances to find key length, and applies chi-squared frequency matching to recover plaintext.',
      architecture: [
        'Substring indexer calculating spacing between identical 3-grams, 4-grams, and 5-grams',
        'GCD Factorizer computing the most probable key length candidates',
        'Cosine and Chi-squared English letter frequency correlation engine across split ciphertext streams'
      ],
      challenges: [
        'Handling accidental coincidences in short ciphertexts that produce spurious factor candidates',
        'Optimizing statistical letter frequency matching for varied linguistic corpora'
      ],
      results: [
        'Published in IEEE Xplore Compliant Proceedings (ISBN: 979-8-3315-6380-6)',
        'Presented at 5th International Conference on Computer Networks, Big Data and IoT (Dubai, UAE)',
        'Achieved high accuracy in automated key recovery across diverse ciphertext lengths'
      ],
      keyFeatures: [
        'Automated Kasiski Examination for key length deduction',
        'Statistical English letter frequency distribution visualizer',
        'Polyalphabetic Vigenere encryption & decryption sandbox',
        'Mathematical GCD factor breakdown for repeated string intervals'
      ]
    },
    interactiveType: 'vigenere-crypt'
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp-pub',
    year: 'June 2026',
    period: '2026 (Published)',
    role: 'Lead Author & Cryptanalysis Researcher',
    company: 'IEEE ICCBI 2026 (Dubai, UAE)',
    location: 'Manipal Academy of Higher Education, Dubai, UAE',
    type: 'Research Publication',
    description: 'Authored and published research paper titled "Cryptoanalysis of Vigenere Cipher using Kasiski Examination and Frequency Analysis Techniques" at the 5th International Conference on Computer Networks, Big Data and IoT.',
    achievements: [
      'Published in IEEE Xplore Compliant proceedings (ISBN: 979-8-3315-6380-6)',
      'Engineered automated statistical frequency analysis and Kasiski interval factorization algorithms in Python & Java',
      'Presented findings on polyalphabetic cryptanalysis techniques to international security researchers'
    ],
    technologies: ['Python', 'Java', 'Cryptanalysis', 'Kasiski Examination', 'Frequency Analysis', 'DSA']
  },
  {
    id: 'exp-btech',
    year: '2023 — Expected May 2027',
    period: '2023 — Present (Pursuing)',
    role: 'B.Tech in Computer Science & Engineering',
    company: 'Vignan’s Foundation for Science, Technology and Research',
    location: 'Guntur, Andhra Pradesh (Autonomous University)',
    type: 'Academic & Projects',
    description: 'Pursuing Bachelor of Technology in Computer Science & Engineering with intensive focus on full-stack web development, MERN architecture, REST API design, and Data Structures & Algorithms.',
    achievements: [
      'Architected full-stack Women Safety App with real-time Socket.IO GPS tracking, Twilio SMS alerts, and AI voice sentiment analysis',
      'Developed 5-page Digital Art Marketplace featuring modular dynamic DOM rendering in JavaScript and upload validation',
      'Mastered core Computer Science disciplines: Object-Oriented Programming (OOP), DBMS, Data Structures & Algorithms, and Operating Systems'
    ],
    technologies: ['JavaScript (ES6+)', 'Node.js', 'Express.js', 'React.js', 'MongoDB', 'Python', 'Java', 'DBMS', 'OOP']
  },
  {
    id: 'exp-inter',
    year: '2023',
    period: '2021 — 2023',
    role: 'Class XII (Intermediate) — 64%',
    company: 'Kanhai +2 School, Nawada',
    location: 'Nawada, Bihar State Board',
    type: 'Secondary Education',
    description: 'Completed higher secondary education in Science and Mathematics, laying strong foundations in logic, analytical thinking, and algorithmic computation.',
    achievements: [
      'Secured 64% in Bihar State Examination Board with concentration in Mathematics and Physics',
      'Developed strong algorithmic problem-solving discipline and mathematical foundations'
    ],
    technologies: ['Mathematics', 'Logic & Computation', 'Physics']
  },
  {
    id: 'exp-matric',
    year: '2021',
    period: '2021',
    role: 'Class X (Matriculation) — 54%',
    company: 'B.I.G.B.P. School',
    location: 'Arun Nagar, Pakri Warama, Nawada | CBSE',
    type: 'Foundational Education',
    description: 'Completed foundational schooling under the Central Board of Secondary Education (CBSE).',
    achievements: [
      'Completed CBSE Class X certification',
      'Participated in science and technology exhibitions'
    ],
    technologies: ['CBSE Curriculum', 'Science & Technology']
  }
];

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    icon: 'Terminal',
    skills: [
      { 
        name: 'JavaScript (ES6+)', 
        level: 'Mastery', 
        tag: 'Core',
        description: 'Writing modern asynchronous JavaScript, Promises, async/await, DOM APIs, event loop concurrency, and modular ES6+ clean code.',
        years: '3+ Years',
        keyCapabilities: ['ES6+ Modules & Async/Await', 'DOM Manipulation & Dynamic Rendering', 'Event-Driven Concurrency', 'Object & Array Destructuring'],
        relatedProjectIds: ['women-safety-app', 'digital-art-marketplace', 'mern-api-engine']
      },
      { 
        name: 'Python', 
        level: 'Advanced', 
        tag: 'Algorithms',
        description: 'Developing cryptanalysis tools, string manipulation algorithms, Kasiski substring spacing factorizers, and DSA problem solving.',
        years: '3+ Years',
        keyCapabilities: ['Cryptographic Algorithms', 'Statistical Data Processing', 'Kasiski Substring Factorization', 'DSA Problem Solving'],
        relatedProjectIds: ['vigenere-cryptanalysis']
      },
      { 
        name: 'Java', 
        level: 'Advanced', 
        tag: 'OOP',
        description: 'Implementing robust Object-Oriented Programming (OOP) architectures, inheritance hierarchies, polymorphism, and core Data Structures.',
        years: '2+ Years',
        keyCapabilities: ['Object-Oriented Programming (OOP)', 'Collections Framework & Generics', 'Exception Handling & Clean Code', 'Data Structures Implementation'],
        relatedProjectIds: ['vigenere-cryptanalysis']
      },
      { 
        name: 'HTML5 & CSS3', 
        level: 'Mastery', 
        tag: 'Frontend',
        description: 'Crafting responsive, semantic, cross-device web interfaces with Flexbox, CSS Grid, media queries, and accessible UI markup.',
        years: '3+ Years',
        keyCapabilities: ['Semantic HTML5 Markup', 'Flexbox & CSS Grid Systems', 'Responsive Media Queries', 'Cross-Device Styling'],
        relatedProjectIds: ['digital-art-marketplace', 'women-safety-app']
      }
    ]
  },
  {
    title: 'Backend & APIs',
    icon: 'Server',
    skills: [
      { 
        name: 'Node.js', 
        level: 'Mastery', 
        tag: 'Backend',
        description: 'Building asynchronous, event-driven server applications, REST API gateways, npm package management, and WebSocket streaming.',
        years: '2+ Years',
        keyCapabilities: ['Asynchronous Event Loop', 'File System & Stream Handling', 'HTTP Server Architecture', 'NPM Package Ecosystem'],
        relatedProjectIds: ['women-safety-app', 'mern-api-engine']
      },
      { 
        name: 'Express.js', 
        level: 'Mastery', 
        tag: 'REST APIs',
        description: 'Architecting RESTful API endpoints, custom middleware pipelines, route parameter handling, CORS, and centralized error handlers.',
        years: '2+ Years',
        keyCapabilities: ['RESTful Routing & Controllers', 'Custom Middleware Pipelines', 'CRUD Operations Handling', 'CORS & Request Sanitization'],
        relatedProjectIds: ['women-safety-app', 'mern-api-engine']
      },
      { 
        name: 'MongoDB', 
        level: 'Advanced', 
        tag: 'Database',
        description: 'Designing NoSQL document schemas, Mongoose models, indexing for high performance, and executing comprehensive CRUD queries.',
        years: '2+ Years',
        keyCapabilities: ['Mongoose Schema Modeling', 'Document CRUD Queries', 'Indexing & Aggregations', 'Database Connection Resilience'],
        relatedProjectIds: ['women-safety-app', 'mern-api-engine']
      },
      { 
        name: 'JWT Authentication', 
        level: 'Advanced', 
        tag: 'Security',
        description: 'Securing web applications using JSON Web Tokens (JWT), authorization headers, password hashing with bcrypt, and protected routes.',
        years: '2+ Years',
        keyCapabilities: ['Stateless Token Authentication', 'Bearer Token Verification', 'Protected Middleware Routes', 'Secure Password Hashing'],
        relatedProjectIds: ['women-safety-app', 'mern-api-engine']
      },
      { 
        name: 'Socket.IO / WebSockets', 
        level: 'Advanced', 
        tag: 'Real-Time',
        description: 'Enabling bidirectional, event-driven real-time communication for live GPS tracking, panic alerts, and instant notifications.',
        years: '2+ Years',
        keyCapabilities: ['Bidirectional Event Emitters', 'Live GPS Coordinate Telemetry', 'Room & Channel Broadcasting', 'Connection Reconnection Handling'],
        relatedProjectIds: ['women-safety-app']
      },
      { 
        name: 'Twilio & Nodemailer', 
        level: 'Advanced', 
        tag: 'Alerts',
        description: 'Integrating automated SMS dispatch gateways and transactional email services for mission-critical emergency alerts.',
        years: '2+ Years',
        keyCapabilities: ['Automated SMS Alert Dispatch', 'Transactional Email Pipelines', 'Emergency Contact Circle Sync', 'API Error Handling'],
        relatedProjectIds: ['women-safety-app']
      }
    ]
  },
  {
    title: 'Frontend & UI',
    icon: 'Layers',
    skills: [
      { 
        name: 'React.js', 
        level: 'Mastery', 
        tag: 'Frontend',
        description: 'Building modern Single Page Applications (SPAs) with functional components, React Hooks (useState, useEffect, useMemo), and dynamic rendering.',
        years: '2+ Years',
        keyCapabilities: ['React Hooks & State Management', 'Functional Component Architecture', 'Dynamic Props & Event Handling', 'Virtual DOM Optimization'],
        relatedProjectIds: ['women-safety-app', 'mern-api-engine']
      },
      { 
        name: 'Dynamic DOM Rendering', 
        level: 'Mastery', 
        tag: 'DOM',
        description: 'Manipulating DOM nodes dynamically with JavaScript (ES6+), event listeners, upload.js validation pipelines, and instant UI updates.',
        years: '3+ Years',
        keyCapabilities: ['Dynamic Element Creation', 'Event Delegation & Bubbling', 'Client-Side Input Validation', 'Zero-Framework UI Manipulation'],
        relatedProjectIds: ['digital-art-marketplace']
      },
      { 
        name: 'Responsive Web Design', 
        level: 'Mastery', 
        tag: 'UI/UX',
        description: 'Ensuring 100% fluid responsiveness across mobile phones, tablets, laptops, and ultra-wide screens using mobile-first principles.',
        years: '3+ Years',
        keyCapabilities: ['Mobile-First CSS Architecture', 'Fluid Grid Layouts', 'Touch & Click Interactivity', 'Cross-Browser Testing'],
        relatedProjectIds: ['digital-art-marketplace', 'women-safety-app']
      },
      { 
        name: 'Tailwind CSS', 
        level: 'Mastery', 
        tag: 'CSS',
        description: 'Styling modern web apps with Tailwind utility classes, custom theme tokens, dark/light modes, and responsive breakpoints.',
        years: '2+ Years',
        keyCapabilities: ['Utility-First Class Styling', 'Custom CSS Variables & Themes', 'Responsive Design Breakpoints', 'Dark & Light Mode Integration'],
        relatedProjectIds: ['women-safety-app', 'digital-art-marketplace']
      }
    ]
  },
  {
    title: 'Tools & Core CS Concepts',
    icon: 'Cpu',
    skills: [
      { 
        name: 'Object-Oriented Programming (OOP)', 
        level: 'Mastery', 
        tag: 'Core CS',
        description: 'Deep understanding of encapsulation, abstraction, inheritance, and polymorphism to structure modular, maintainable software.',
        years: '3+ Years',
        keyCapabilities: ['Encapsulation & Abstraction', 'Inheritance & Polymorphism', 'Clean Code Principles (SOLID)', 'Modular Class Architecture'],
        relatedProjectIds: ['vigenere-cryptanalysis', 'mern-api-engine']
      },
      { 
        name: 'DBMS (Database Systems)', 
        level: 'Advanced', 
        tag: 'Core CS',
        description: 'Relational and NoSQL database fundamentals, schema normalization, ACID properties, indexing, and query execution.',
        years: '2+ Years',
        keyCapabilities: ['Schema Normalization', 'ACID Properties & Transactions', 'Query Optimization & Indexing', 'Relational & Document Models'],
        relatedProjectIds: ['mern-api-engine', 'women-safety-app']
      },
      { 
        name: 'Data Structures & Algorithms (DSA)', 
        level: 'Advanced', 
        tag: 'Core CS',
        description: 'Problem solving with arrays, strings, linked lists, trees, graphs, sorting, binary search, and asymptotic time/space complexity.',
        years: '3+ Years',
        keyCapabilities: ['Array & String Algorithms', 'Searching & Sorting Techniques', 'Time & Space Complexity (Big-O)', 'Algorithmic Optimization'],
        relatedProjectIds: ['vigenere-cryptanalysis']
      },
      { 
        name: 'Git & GitHub', 
        level: 'Mastery', 
        tag: 'Tools',
        description: 'Version control workflows, commit discipline, branch management, pull requests, and repository maintenance.',
        years: '3+ Years',
        keyCapabilities: ['Branching & Merging', 'Git Commit Best Practices', 'GitHub Repository Workflows', 'Open Source Collaboration'],
        relatedProjectIds: ['women-safety-app', 'digital-art-marketplace', 'vigenere-cryptanalysis']
      },
      { 
        name: 'Kasiski Cryptanalysis', 
        level: 'Advanced', 
        tag: 'Research',
        description: 'Polyalphabetic substitution cipher analysis, substring distance factorizations, greatest common divisor calculations, and frequency matching.',
        years: '2+ Years',
        keyCapabilities: ['Repeated Substring Indexing', 'GCD Distance Factorization', 'English Letter Frequency Matching', 'Ciphertext Decryption'],
        relatedProjectIds: ['vigenere-cryptanalysis']
      }
    ]
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: 'test-1',
    quote: 'Shubham demonstrates exceptional problem-solving and rapid learning capabilities. His implementation of real-time Socket.IO telemetry and Twilio SMS alerting in the Women Safety App was remarkably robust and well-structured.',
    name: 'Dr. K. Srinivas',
    role: 'Professor & Project Mentor',
    company: 'Vignan University',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-2',
    quote: 'Shubham’s research paper on Vigenere Cipher cryptanalysis at IEEE ICCBI 2026 demonstrated deep mathematical rigor, clean algorithmic implementations in Python/Java, and clear technical communication.',
    name: 'Conference Review Committee',
    role: 'Technical Program Committee',
    company: 'IEEE ICCBI 2026 (Dubai, UAE)',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    rating: 5
  },
  {
    id: 'test-3',
    quote: 'Working with Shubham on web development projects is seamless. He writes clean, modular JavaScript, adheres to clean code practices, and takes great care with responsive cross-device DOM layouts.',
    name: 'Peer Engineering Review',
    role: 'Full-Stack Collaborator',
    company: 'Developer Circle',
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    rating: 5
  }
];

export const blogPostsData: BlogPost[] = [
  {
    id: 'blog-1',
    date: '2026-06-20',
    formattedDate: 'Jun 20, 2026',
    category: 'Research & Cryptography',
    readTime: '6 min read',
    title: 'Cracking Polyalphabetic Ciphers: Kasiski Examination & Statistical Frequency Analysis',
    excerpt: 'Key takeaways from our IEEE ICCBI 2026 research paper on automating Vigenere cipher recovery through substring distance factorizations.',
    content: [
      'Polyalphabetic ciphers like the Vigenere Cipher were historically considered unbreakable because shifting keys flatten simple single-letter frequency spikes.',
      'By identifying repeated n-grams and computing greatest common divisors of the intervals between them, the Kasiski method accurately deduces the secret key length.',
      'Once the key length is isolated, each slice of the ciphertext becomes a simple Caesar cipher, which can be solved instantly via statistical chi-squared frequency correlation.'
    ]
  },
  {
    id: 'blog-2',
    date: '2026-05-14',
    formattedDate: 'May 14, 2026',
    category: 'Backend & WebSockets',
    readTime: '5 min read',
    title: 'Architecting Low-Latency SOS Telemetry with Socket.IO & Twilio Fallbacks',
    excerpt: 'How we engineered a mission-critical safety platform that broadcasts real-time GPS coordinates while ensuring multi-channel SMS delivery during network drops.',
    content: [
      'In safety-critical applications, every millisecond counts. Relying solely on HTTP polling introduces latency that can be life-threatening in emergency scenarios.',
      'Using Socket.IO event emitters, we maintain open bidirectional channels for continuous GPS streaming directly on Google Maps.',
      'To safeguard against spotty mobile connectivity, our backend implements automated parallel fallback dispatch via Twilio SMS and Nodemailer.'
    ]
  },
  {
    id: 'blog-3',
    date: '2026-04-02',
    formattedDate: 'Apr 02, 2026',
    category: 'Full-Stack & Clean Code',
    readTime: '4 min read',
    title: 'Building Scalable MERN Architectures: REST API Design & CRUD Best Practices',
    excerpt: 'Structuring Express.js controllers, Mongoose schemas, and JWT authentication middleware for long-term maintainability.',
    content: [
      'A well-designed REST API is predictable, idempotent, and self-documenting. Following standard HTTP status codes and structured JSON response formats eliminates ambiguity for frontend developers.',
      'Securing endpoints with stateless JWT bearer tokens and password hashing via bcrypt ensures robust user data protection across all CRUD operations.',
      'Separating concerns across controllers, services, and database models ensures codebases remain modular as feature sets expand.'
    ]
  }
];

export const heroFloatingCards = [
  {
    id: 'safety-card',
    title: 'Women Safety App.',
    subtitle: 'MERN & Real-Time',
    tag: 'Live Tracking & SOS',
    status: 'Socket.IO • Active',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80',
    topOffset: '12%',
    rightOffset: '4%',
    rotate: '1deg',
    parallaxSpeed: 0.8
  },
  {
    id: 'art-card',
    title: 'Digital Art Market.',
    subtitle: 'Dynamic DOM & UI',
    tag: '5-Page Web App',
    status: 'upload.js • Ready',
    image: 'https://images.unsplash.com/photo-1579783900882-c0d3dad7b119?auto=format&fit=crop&w=600&q=80',
    topOffset: '55%',
    rightOffset: '2%',
    rotate: '-2deg',
    parallaxSpeed: 1.2
  },
  {
    id: 'crypto-card',
    title: 'Vigenere Cryptanalysis.',
    subtitle: 'IEEE ICCBI 2026',
    tag: 'Kasiski Engine',
    status: 'Research • Published',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80',
    topOffset: '35%',
    rightOffset: '24%',
    rotate: '2.5deg',
    parallaxSpeed: 0.6
  }
];
