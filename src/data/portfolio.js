import {
    faServer,
    faLaptopCode,
    faMobileScreen,
    faChartLine,
    faCode,
    faGlobe,
    faDatabase,
    faCloud,
    faHotel,
    faHandPointer,
    faGraduationCap,
    faPlane,
    faBraille,
    faBuildingColumns,
    faAward,
    faSchool,
    faBookOpen,
    faTrophy,
    faUsers,
} from '@fortawesome/free-solid-svg-icons';

export const profile = {
    name: 'Akshitha Sriyanjith',
    firstName: 'Akshitha',
    role: 'Associate Software Engineer',
    location: 'Colombo, Sri Lanka',
    email: 'akshithasriyanjith2000@gmail.com',
    phones: [
        { label: '+94 71 374 0291', href: 'tel:+94713740291' },
        { label: '+94 78 126 2610', href: 'tel:+94781262610' },
    ],
    github: 'https://github.com/akshithasriyanjith',
    linkedin: 'https://linkedin.com/in/akshithasriyanjith',
    photo: '/profile1.jpeg',
};

export const navLinks = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Education', id: 'education' },
    { name: 'Contact', id: 'contact' },
];

export const stats = [
    { value: '2+', label: 'Years of experience' },
    { value: '6+', label: 'Projects shipped' },
    { value: '15+', label: 'Technologies' },
];

export const services = [
    {
        icon: faServer,
        title: 'Backend Engineering',
        text: 'APIs and services with .NET, ASP.NET MVC and Java Spring Boot, backed by SQL Server, MySQL and PostgreSQL.',
    },
    {
        icon: faLaptopCode,
        title: 'Web Applications',
        text: 'Modern, responsive interfaces with Next.js and React, connected to microservice back ends.',
    },
    {
        icon: faMobileScreen,
        title: 'Mobile Apps',
        text: 'Cross-platform apps with Flutter and Dart, using Firebase, MongoDB and REST APIs.',
    },
    {
        icon: faChartLine,
        title: 'Data & Analytics',
        text: 'ETL pipelines, data warehousing and Power BI dashboards. Currently studying for a Master of Data Analytics.',
    },
];

export const experiences = [
    {
        title: 'Associate Software Engineer',
        company: 'Prime Engineering Lanka (Pvt) Ltd',
        period: 'Oct 2024 — Present',
        current: true,
        projects: [
            {
                name: 'Stock Retail Centralized System (Web Application)',
                tech: ['Java Spring Boot', 'Next.js', 'MySQL', 'Microservices'],
            },
            {
                name: 'Emission Testing Software',
                tech: ['.NET (C#)', 'SQL Server', 'Crystal Reports', 'Networking', 'MVC'],
            },
        ],
    },
    {
        title: 'Trainee Software Engineer',
        company: 'Prime Engineering Lanka (Pvt) Ltd',
        period: 'Apr 2024 — Oct 2024',
        current: false,
        projects: [
            {
                name: 'Point of Sale Software',
                tech: ['.NET Core (C#)', 'SQL Server', 'Crystal Reports', 'MVC', 'Azure'],
            },
            {
                name: 'Stock Count Mobile App',
                tech: ['Flutter', 'Dart', 'MS SQL', 'REST API'],
            },
        ],
    },
];

export const projectCategories = ['All', 'Web', 'Mobile', 'AI & Data'];

export const projects = [
    {
        title: 'Hotel Management System',
        description: 'Room booking, cancellation and hotel management with REST API integration.',
        icon: faHotel,
        category: 'Web',
        tech: ['C#', '.NET', 'SQL Server', 'REST API'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'ML Gesture Application',
        description: 'Real-time hand gesture recognition with computer vision and machine learning visualisation.',
        icon: faHandPointer,
        category: 'AI & Data',
        tech: ['Python', 'OpenCV', 'Flask', 'ML'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'Travel Nebula',
        description: 'Travel companion mobile app with ML-powered recommendations and a Firebase back end.',
        icon: faPlane,
        category: 'Mobile',
        tech: ['Flutter', 'Firebase', 'Python', 'ML'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'Japan Lanka Institute System',
        description: 'Institute management with a data warehouse, ETL pipelines and Power BI analytics.',
        icon: faBuildingColumns,
        category: 'AI & Data',
        tech: ['C# .NET', 'SQL / PL-SQL', 'ETL', 'Power BI'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'School Management System',
        description: 'Student and teacher management with a Django back end and REST API.',
        icon: faGraduationCap,
        category: 'Web',
        tech: ['Python', 'Django', 'SQLite', 'REST API'],
        github: 'https://github.com/akshithasriyanjith',
    },
    {
        title: 'Braille System',
        description: 'ASP.NET web application for Braille text conversion and accessibility.',
        icon: faBraille,
        category: 'Web',
        tech: ['ASP.NET', 'C#', 'SOAP', 'HTML/CSS'],
        github: 'https://github.com/akshithasriyanjith',
    },
];

export const skillGroups = [
    {
        title: 'Languages',
        icon: faCode,
        skills: ['C#', 'Java', 'Python', 'JavaScript', 'Dart', 'C'],
    },
    {
        title: 'Frameworks',
        icon: faGlobe,
        skills: ['.NET / ASP.NET MVC', 'Spring Boot', 'Next.js', 'React', 'Django', 'Flutter'],
    },
    {
        title: 'Databases & APIs',
        icon: faDatabase,
        skills: ['SQL Server', 'MySQL', 'PostgreSQL', 'MongoDB', 'REST', 'SOAP'],
    },
    {
        title: 'Cloud & Tools',
        icon: faCloud,
        skills: ['AWS', 'Azure', 'Firebase', 'Power BI', 'Crystal Reports'],
    },
];

export const education = [
    {
        degree: 'Master of Data Analytics, Data Science',
        school: 'University of Kelaniya',
        period: '2026 — Present',
        icon: faGraduationCap,
        badges: ['Currently reading'],
    },
    {
        degree: 'BSc in Computer Science',
        school: 'NSBM Green University',
        period: '2021 — 2025',
        icon: faGraduationCap,
        badges: ['GPA 3.62', 'Second Class Upper'],
        courses: 'Computer Architecture, Cryptography, Advanced Databases, AI, Computer Graphics, Mobile Development, Networks, Systems Analysis & Design',
    },
    {
        degree: 'Diploma in Software Engineering',
        school: 'University of Sabaragamuwa',
        period: '2019 — 2021',
        icon: faAward,
        badges: ['GPA 3.16'],
        courses: 'Software Engineering, Database Management, Systems Analysis & Design, C and C#',
    },
    {
        degree: 'G.C.E. A/L — Physical Science',
        school: 'R/ Balangoda Ananda Maithreya Central College',
        period: '2019',
        icon: faSchool,
        badges: ['Passed'],
    },
];

export const awards = [
    {
        icon: faBookOpen,
        kind: 'Research',
        title: 'Research Publication — ICACT 2025',
        text: 'Paper published at the International Conference on Advanced Computing Technologies, in the track Frontiers in Data Science and AI Innovation.',
    },
    {
        icon: faTrophy,
        kind: 'Award',
        title: 'Most Impact STEM Volunteer',
        text: 'Awarded by the STEMUP Education Foundation, 2025.',
    },
    {
        icon: faUsers,
        kind: 'Leadership',
        title: 'Leadership Roles',
        items: [
            'CodeClub (Codedojo) Community Manager — STEMUP, 2025',
            'Development Team Lead — IEEE NSBM Computer Society, 2024',
            'AWS University Outreach Technical Lead — NSBM, 2023',
        ],
    },
];
