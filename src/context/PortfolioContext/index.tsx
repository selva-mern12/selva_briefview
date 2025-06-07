import React from 'react';

interface Project {
    name: string;
    category: string;
    link: string;
    repo: string;
    description: string;
    tech: string;
    features: string[];
    deployment: string;
    status: string;
    login?: boolean
    credentials?: string;
    smImage: string;
    lgImage: string;
}

interface certificate {
    name: string;
    issuedBy: string;
    certificateImage: string;
    techStack: string[];
}

interface PortfolioContextType {
    projects: Project[];
    certificates: certificate[];
}

const PortfolioContext = React.createContext <PortfolioContextType>({
    projects: [
        {
            name: "Quiz Game",
            category: "Game",
            link: "https://quiz-game-smp.vercel.app",
            repo: "https://github.com/selva-mern12/quizGame",
            description: "An interactive quiz application for users to test their knowledge across diverse topics with real-time scoring.",
            tech: "React.js, JavaScript, CSS, MongoDB, Node, Express",
            features: [
                "Multiple choice questions",
                "Real-time scoring system",
                "Dynamic difficulty levels"
            ],
            deployment: "Vercel",
            status: "Active",
            login: true,
            credentials: "Username: selva1201, Password: selva@MERN1201 (or Try your Self)",
            smImage: '/assets/SmImages/quiz.jpg',
            lgImage: '/assets/LgImages/quiz.png',
        },
        {
            name: "covid19Dash",
            category: "Dashboard",
            link: "https://covid19dashsrp.ccbp.tech",
            repo: "https://github.com/selva-mern12/covid19-dashboard",
            description: "A data-driven dashboard providing real-time statistics and visualizations of COVID-19 trends worldwide.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Live COVID-19 data",
                "Interactive charts",
                "Country-wise reports"
            ],
            deployment: "CCBP",
            status: "Active",
            login: false,
            credentials: "",
            smImage: '/assets/SmImages/covid19.jpg',
            lgImage: '/assets/LgImages/covid19.png',
        },
        {
            name: "Job Portal",
            category: "Web App",
            link: "https://job-portal-eta-five.vercel.app",
            repo: "https://github.com/selva-mern12/job_portal",
            description: "A comprehensive job search platform enabling users to browse listings, apply for positions, and manage applications.",
            tech: "React.js, JavaScript, CSS, Sqlite, Node, Express",
            features: [
                "Job listing & search",
                "Add New Job",
                "Apply Job dashboard"
            ],
            deployment: "Vercel",
            status: "Active",
            login: true,
            credentials: "Email: selva.mern12@gmail.com, Password: selva@1201(or Try your Self)",
            smImage: '/assets/SmImages/jobstation.jpg',
            lgImage: '/assets/LgImages/jobstation.png',
        },        
        {
            name: "Elegance",
            category: "E-commerce",
            link: "https://elegance-smp.vercel.app",
            repo: "https://github.com/selva-mern12/ecom-ui",
            description: "Modern e-commerce UI with product browsing, cart, and state persistence using React.js and Fake Store API.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Persistent Cart – Items in the cart stay saved even if you close the browser.",
                "Mini Cart – Click the cart icon to quickly see your items and total price.",
                "Responsive Design – Works smoothly on mobile, tablet, and desktop screens."
            ],
            deployment: "Vercel",
            status: "Active",
            login: false,
            credentials: "",
            smImage: '/assets/SmImages/elegance.jpg',
            lgImage: '/assets/LgImages/elegance.png',
        },
        {
            name: "InvoGen",
            category: "Business Tool",
            link: "https://invogen-smp.vercel.app",
            repo: "https://github.com/selva-mern12/invogen",
            description: "A streamlined invoice generation tool designed for creating professional invoices with customizable options.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Custom invoice templates",
                "PDF export functionality",
                "Client management system"
            ],
            deployment: "Vercel",
            status: "Active",
            login: true,
            credentials: "Username: selva1201, Password: selva@MERN1201 (or Try your Self)",
            smImage: '/assets/SmImages/invogen.jpg',
            lgImage: '/assets/LgImages/invogen.png',
        },
        {
            name: "MeteoSyn",
            category: "Weather App",
            link: "https://meteosyn.netlify.app",
            repo: "https://github.com/selva-mern12/Meteosyn",
            description: "A weather forecasting application delivering real-time updates and detailed meteorological insights.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Real-time weather updates",
                "5-day forecast",
                "Location-based weather info"
            ],
            deployment: "Netlify",
            status: "Active",
            login: false,
            credentials: "",
            smImage: '/assets/SmImages/meteosyn.jpg',
            lgImage: '/assets/LgImages/meteosyn.png',
        },
        {
            name: "NxtTrendz",
            category: "News & Insights",
            link: "https://s4nxttrends.ccbp.tech",
            repo: "https://github.com/selva-mern12/nxt-trendz",
            description: "A trend-tracking platform offering insights into the latest developments in technology and innovation.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "Latest tech trends",
                "Category-based filtering",
                "User subscriptions"
            ],
            deployment: "CCBP",
            status: "Active",
            login: true,
            credentials: "Username: rahul, Password: rahul@2021",
            smImage: '/assets/SmImages/nxttrendz.jpg',
            lgImage: '/assets/LgImages/nxttrendz.png',
        },
        {
            name: "NxtWatch",
            category: "Video Streaming",
            link: "https://nxtwatchsrp.ccbp.tech",
            repo: "https://github.com/selva-mern12/nxt_watch",
            description: "A YouTube clone with authentication and dark mode, offering seamless video streaming and user personalization.",
            tech: "React.js, JavaScript, CSS",
            features: [
                "User authentication",
                "Dark mode support",
                "Video recommendations"
            ],
            deployment: "CCBP",
            status: "Active",
            login: true,
            credentials: "Username: rahul, Password: rahul@2021",
            smImage: '/assets/SmImages/nxtwatch.jpg',
            lgImage: '/assets/LgImages/nxtwatch.png',
        },
        {
            name: "Movies DB",
            category: "Entertainment",
            link: "https://movies--db.vercel.app/",
            repo: "https://github.com/selva-mern12/movies_db",
            description: "A web application that allows users to explore and search for movies, providing detailed information fetched from The Movie Database (TMDb) API.",
            tech: "React.js, JavaScript, CSS",
            features: [
              "Search functionality for movies",
              "Detailed movie information display",
              "Responsive design"
            ],
            deployment: "Vercel",
            status: "Active",
            login: false,
            credentials: "",
            smImage: '/assets/SmImages/moviedb.png',
            lgImage: '/assets/LgImages/moviesdb.png',
          }
    ],
    certificates : [
        {
            name: "Industry Ready Certificate",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/industry-ready-certificate.png",
            techStack: ["HTML", "CSS", "Bootstrap", "Progamming Foundation with Python", "SQLite", "JavaScript", "React.js", "Node.js", "Express.js", "MongoDB", "GitHub"],
        },
        {
            name: "React JS",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/reactjs-certificate.png",
            techStack: ["Introducing JSX","Components and Props","Lists and Keys","Handling Events","Conditional Rendering","Routing using React Router","Authentication & Authorization","React Context","Styled Components","Third-Party Packages"],
        },
        {
            name: "Node JS",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/nodejs-certificate.png",
            techStack: ["Modules in Node.js","HTTP Server","ExpressJS Server Framework","CRUD API's","ExpressJS Middlewares","JSON Web Token","Secure API's"],
        },
        {
            name: "JavaScript Essentials",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/javascript-essentials-certificate.png",
            techStack: ["Factory and Constructor","Prototype and classes","Asynchronous JS","Scope & Hoisting","Array methods"],
        },
        {
            name: "Programming Foundations with Python",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/programming-foundations-with-python-certificate.png",
            techStack: ["Loops & Conditionals","Lists, Tuples & Sets","Dictionaries","Functions & Recursion","OOP Concepts"],
        },
        {
            name: "Developer Foundations",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/developer-foundations-certificate.png",
            techStack: ["Fundamentals of Computer Science","Work with command line","Collaborating with Git"],
        },
        {
            name: "Introduction to Databases",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/introduction-to-databases-certificate.png",
            techStack: ["Querying with SQL","Aggregations and Group By","Modelling Database","Joins","Views and Subqueries"],
        },
        {
            name: "Build Your Own Dynamic Web Application",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/build-your-own-dynamic-web-application-certificate.png",
            techStack: ["Introduction to JS & variables","Arrays and objects","Fetch & Callback","Building Wikipedia Search Application","DOM & Event Fundamentals","JSON & Local Storage","Forms","Conditionals and Loops"],
        },
        {
            name: "Build Your Own Responsive Website",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/build-your-own-responsive-website-certificate.png",
            techStack: ["Bootstrap Grid System","CSS Specificity","CSS Cascading and Inheritance","Bootstrap Flex Utilities"],
        },
        {
            name: "Build Your Own Static Website",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/build-your-own-static-website-certificate.png",
            techStack: ["Basics of HTML5, CSS3","CSS Box Model","Introduction of Bootstrap and Flex Layout","Bootstrap Utility Classes and Components","Website Layout Development"],
        },
        {
            name: "Responsive Web Design using Flexbox",
            issuedBy: "NxtWave",
            certificateImage: "/assets/certificates/responsive-web-design-using-flexbox-certificate.png",
            techStack: ["CSS Flexbox","CSS Media Queries","CSS Box Sizing","Developing Responsive Layouts"],
        },
    ]
});

export default PortfolioContext;


