import {
    branding1,
    branding2,
    branding3,
    branding4,
    branding5,
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
    logo11,
    logo12,
    logo13,
    logo14,
    packaging1,
    packaging2,
    packaging3,
    packaging4,
    packaging5,
    packaging6,
    packaging7,
    packaging8,
    packaging9,
    packaging10,
    packaging11,
    packaging12,
    illustration1,
    illustration2,
    illustration3,
    illustration4,
    illustration5,
    illustration6,
    illustration7,
    uiux1,
    uiux2,
    uiux3,
    uiux4,
    uiux5,
    uiux6,
    uiux7,
    uiux8,
    uiux9,
    uiux10,
    uiux11,
    uiux12,
    uiux13,
    uiux14,
    uiux15,
    uiux16,
} from '../assets'

import {slide1, slide2, slide3} from '../assets'

export const navLinks = [
    {
        id: "about",
        title: "about",
    },
    {
        id: "domains",
        title: "domains",
    },
    {
        id: "softwares",
        title: "softwares",
    },
    {
        id: "projects",
        title: "projects",
    },
    {
        id: "skills",
        title: "skills",
    },
    {
        id: "formation",
        title: "formation",
    },
]
// {
//     id: "testimonials",
//     title : "testimonials",
// },
// {
//     id: "references",
//     title : "references",

import { DiIllustrator, DiPhotoshop } from 'react-icons/di'
import { FaFigma } from 'react-icons/fa'

// export const slidesBranding = [
//     slide1,
//     slide2,
//     slide3,
// ]

export const brandingDesignContent = [
    {
        id: 1,
        title: "Menu for kimy Foods",
        content: " Kimy Foods is a small Cameroonian restaurant offering a variety of dishes, from hamburgers to croquettes and natural drinks. With small colorful details to attract the customer's attention. ",
        icon: DiPhotoshop,
        col1: '#ffc265',
        col2: '#fffff',
        col3: '#181818',
        flex: 'flex-row',
        slides: [
            branding3,
            branding4,
            branding5,
        ],
    },
    {
        id: 2,
        title: "Flyer for les délices de Leida",
        content: "Les délices de Leida is the brand name of a young Cameroonian pastry chef who makes incredible pastries for her customers. The use of color adds a delicate touch to the flyer, revealing the taste and quality of each of her creations.",
        icon: DiPhotoshop,
        col1: '#e08e54',
        col2: '#fff',
        col3: '#f59ca3',
        flex: 'flex-row-reverse', slides: [
            branding1,
            branding2,
            branding1,
        ],
    },
]
export const logoDesignContent = [
    {
        id: 1,
        title: "Pexple Logo concept",
        content: "Pexple is a concept logo created by me for a fictitious brand of protective equipment. The colors accentuate the details of the logo's typography. ",
        icon: DiIllustrator,
        col1: '#ffc265',
        col2: '#fffff',
        col3: '#181818',
        flex: 'flex-row',
        slides: [
            logo5,
            logo6,
            logo7,
            logo8,
        ],
    },
    {
        id: 2,
        title: "Converse Logo concept",
        content: "This is a concept logo I designed, inspired by the well-known Converse logo. I decided to rework this logo by adding a touch of lightness and simplicity, but also a subliminal effect between the \"C\" and the star.",
        icon: DiIllustrator,
        col1: '#231f20',
        col2: '#fff',
        col3: '',
        flex: 'flex-row-reverse',
        slides: [
            logo12,
            logo13,
            logo14,
        ],
    },
    {
        id: 3,
        title: "JHIRE Logo ",
        content: "JHire is a prototype for an online platform where junior developers can offer their services to Cameroonian companies.this logo is a subtle blend of white, black and green, contrasting perfectly to highlight the letters \"J\" and \"H\" in the logo. ",
        icon: DiIllustrator,
        col1: '#3cb070',
        col2: '#fff',
        col3: '#000',
        flex: 'flex-row',
        slides: [
            logo9,
            logo10,
            logo11,

        ],
    },
    {
        id: 4,
        title: "Geneva Hôtel Logo concept",
        content: "This is a concept logo for a fictitious 5-star hotel, with a monogram logo formed by the letters \"G\" and \"H\". The colors gold and green represent the hotel's high standing and luxury.",
        icon: DiIllustrator,
        col1: '#2a704f',
        col2: '#fff',
        col3: '#ffce6d',
        flex: 'flex-row-reverse',
        slides: [
            logo1,
            logo2,
            logo3,
            logo4,
        ],
    },
]

export const packagingDesignContent = [
    {
        id: 1,
        title: "Supafee Packaging",
        content: "Supafee is a concept packaging created by me for a fictitious coffee brand. The use of the color brown not only reveals the golden floral details, but also the white typography and logo. ",
        icon: DiPhotoshop,
        col1: '#6d4a2c',
        col2: '#fffff',
        col3: '#dda943',
        flex: 'flex-row',
        slides: [
            packaging7,
            packaging8,
            packaging9,

        ],
    },
    {
        id: 2,
        title: "Krack Packaging",
        content: "This is a concept packaging made for a fictitious potato chip brand. The packaging is made for a packet of the brand's chips. It allows the customer to visualize what the finished product would look like. ",
        icon: DiIllustrator,
        col1: '#cd3f22',
        col2: '#fff',
        col3: '#fdcd0d',
        flex: 'flex-row-reverse',
        slides: [
            packaging1,
            packaging2,
            packaging3,
            packaging4,
        ],
    },
    {
        id: 3,
        title: "Yggy-Flake Packaging",
        content: "Yggy-Flake, if it existed, would be a multivitamin cereal brand. This concept packaging is made for a 500g cereal box with attractive colors.",
        icon: DiPhotoshop,
        col1: '#ecb01a',
        col2: '#db0c14',
        col3: '#51b032',
        flex: 'flex-row',
        slides: [
            packaging10,
            packaging11,
            packaging12,
        ],
    },
    {
        id: 4,
        title: "Supacream Packaging",
        content: "Once again, a packaging concept for a milk brand. The creation of the packaging design included the creation of the brand's logo.",
        icon: DiPhotoshop,
        col1: '#4385f5',
        col2: '#fff',
        col3: '',
        flex: 'flex-row-reverse',
        slides: [
            packaging5,
            packaging6,
            packaging5,
        ],
    },
]

export const UiUxDesignContent = [
    {
        id: 1,
        title: "Tchitcha ",
        content: "Which is a marketplace for students, pupils or parents looking for teachers for rehearsal classes. This is the interface of the platform, which was designed by me as part of a future project.",
        icon: FaFigma,
        col1: '#EB5E28',
        col2: '#fffff',
        col3: '#181818',
        link: 'https://www.figma.com/file/dvcdspkMynw9d3OmGqRGUn/Tchitcha?type=design&node-id=0%3A1&mode=design&t=2YKCCvwZLrAaAnbW-1',
        flex: 'flex-row',
        slides: [
            uiux1,
            uiux2,
            uiux3,
            uiux4,
        ],
    },
    {
        id: 2,
        title: "Porfolio Interface",
        content: "Here we have the prototype interface for a ui/ux designer's portfolio. The interface includes About me, Contact, Projects and many other sections.",
        icon: FaFigma,
        col1: '#256634',
        col2: '#fff',
        col3: '#425346',
        link: 'https://www.figma.com/file/KB5O51BLCGgzrjHs9TuDcu/1-work?type=design&node-id=66%3A638&mode=design&t=qC5leU8KB2JNE443-1',
        flex: 'flex-row-reverse',
        slides: [
            uiux5,
            uiux6,
            uiux7,
            uiux8,
        ],
    },
    {
        id: 3,
        title: "Otakuiz",
        content: "This is a prototype interface for a mobile quiz application. Here we have a number of interfaces, from the homepage to the menu and the login interface.",
        icon: FaFigma,
        col1: '#A7001E',
        col2: '#fff',
        col3: '#111',
        flex: 'flex-row',
        link: 'https://www.figma.com/file/QY7WYiAGuDTrAEss0Asrca/Otakuizz?type=design&node-id=0%3A1&mode=design&t=yykQI41AKo8uCTS1-1',
        slides: [
            uiux13,
            uiux14,
            uiux15,
            uiux16,
        ],
    },
    {
        id: 4,
        title: "Yggdrasilcare  website",
        content: "This is a landing page for a hospital website offering various services. We have about, service, testimonials and many other sections.",
        icon: FaFigma,
        col1: '#219EBC',
        col2: '#fff',
        col3: '#023047',
        link: 'https://www.figma.com/file/KB5O51BLCGgzrjHs9TuDcu/1-work?type=design&node-id=66%3A638&mode=design&t=qC5leU8KB2JNE443-1',
        flex: 'flex-row-reverse',
        slides: [
            uiux9,
            uiux10,
            uiux11,
            uiux12,
        ],
    },
]

export const illustrationContent = [
    {
        id: 1,
        title: "SOLITERRIEN",
        content: "Alone in space, his only companion is the moon at the end of his son. The Soliterrian astronaut navigates in space.vector illustration in Addobe Illustrator. ",
        icon: DiIllustrator,
        col1: '#18151e',
        col2: '#73a2d6',
        col3: '#c8c6c7',
        flex: 'flex-row',
        slides: [
            illustration5,
            illustration4,
            illustration5,
        ],
    },
    {
        id: 2,
        title: "Saint Alsine",
        content: "This is a vector portrait of a young black woman wearing a luminous crown on her head, reminiscent of Mary. ",
        icon: DiIllustrator,
        col1: '#83543e',
        col2: '#fff',
        col3: '#4878b1',
        flex: 'flex-row-reverse',
        slides: [
            illustration3,
            illustration2,
            illustration3,
        ],
    },
    {
        id: 3,
        title: "Moni",
        content: "Portrait of a young black woman under different layers of color, like a painting. It was created in vector format using Adobe Illustrator software.",
        icon: DiIllustrator,
        col1: '#c99e67',
        col2: '#538f5c',
        col3: '#243137',
        flex: 'flex-row',
        slides: [
            illustration7,
            illustration6,
            illustration6,
        ],
    },
    {
        id: 4,
        title: "Red-Black Nike",
        content: "As real as it gets, an illustration of a Nike airmax. Made exclusively in vector for visual pleasure.",
        icon: DiIllustrator,
        col1: '#b90123',
        col2: '#dab445',
        col3: '#000',
        flex: 'flex-row-reverse',
        slides: [
            illustration1,
            illustration1,
            illustration1,
        ],
    },
]

export const softSkills = [
    {
        id: 1,
        title: "creativity",
    },
    {
        id: 2,
        title: "communication",
    },
    {
        id: 3,
        title: "curiosity",
    },
    {
        id: 4,
        title: "teamwork",
    },
    {
        id: 5,
        title: "critical mind",
    },
    {
        id: 6,
        title: "proactivity",
    },
    {
        id: 7,
        title: "organisation",
    },
    {
        id: 8,
        title: "deepwork",
    },
]
export const hardSkills = [
    {
        id: 1,
        title: "use of usage scenarios",
    },
    {
        id: 2,
        title: "illustrator",
    },
    {
        id: 3,
        title: "colors knowledge",
    },
    {
        id: 4,
        title: "mastery of typography",
    },
    {
        id: 5,
        title: "figma",
    },
    {
        id: 6,
        title: "photoshop",
    },
    {
        id: 7,
        title: "using personas",
    },
    {
        id: 8,
        title: "affordance mastery",
    },
]

export const formations = [
    {
        id: 1,
        title: "Bachelor's in technology in software engineering",
        date: "2022-2023",
        school: "IUT de Douala",
        desc: "During this year I was able to obtain a degree in software engineering. This enabled me to design more complex web applications with varied architectures. I also mastered languages such as TypeScript and frameworks like React.",
    },
    {
        id: 2,
        title: "Two-year technical degree in  Computer science",
        date: "2019-2021",
        school: "IUT de Douala",
        desc: "During these two years I acquired skills in the analysis and design of information systems, learning methods and languages such as MERISE and UML. I also familiarized myself with tools such as Bootstrap, TailwindCss and Figma.",
    },
    {
        id: 3,
        title: "Bachelor's degree in Maths and Life and Earth Sciences",
        date: "2017-2018",
        school: "High school of Nyalla",
        desc: "When I finished high school, I passed my baccalaureate with honors and knew I wanted to do graphic design.",
    },
]
export const testimonials = [
    {
        id: 1,
        name: 'Leida Djasseu',
        work: 'Les délices de Leida',
        content: "Lorem ipsum dolor sit amet consectetur. A in odio sit convallis diam rhoncus nunc. Fermentum facilisis tortor suscipit viverra neque elit urna egestas sed. Malesuada eget dolor egestas amet. Elementum mus at scelerisque ipsum vel nisl. Malesuada volutpat cursus pharetra felis rhoncus ",
        img: slide1,
    },
    {
        id: 2,
        name: 'Jobi',
        work: 'Jobi Auto',
        content: "Lorem ipsum dolor sit amet consectetur. A in odio sit convallis diam rhoncus nunc. Fermentum facilisis tortor suscipit viverra neque elit urna egestas sed. Malesuada eget dolor egestas amet. Elementum mus at scelerisque ipsum vel nisl. Malesuada volutpat cursus pharetra felis rhoncus ",
        img: slide2,
    },
    {
        id: 3,
        name: 'Jordan Nganda',
        work: 'Bima Meat',
        content: "Lorem ipsum dolor sit amet consectetur. A in odio sit convallis diam rhoncus nunc. Fermentum facilisis tortor suscipit viverra neque elit urna egestas sed. Malesuada eget dolor egestas amet. Elementum mus at scelerisque ipsum vel nisl. Malesuada volutpat cursus pharetra felis rhoncus ",
        img: slide3,
    },
    {
        id: 4,
        name: 'Colins Djoujou',
        work: 'FTS',
        content: "Lorem ipsum dolor sit amet consectetur. A in odio sit convallis diam rhoncus nunc. Fermentum facilisis tortor suscipit viverra neque elit urna egestas sed. Malesuada eget dolor egestas amet. Elementum mus at scelerisque ipsum vel nisl. Malesuada volutpat cursus pharetra felis rhoncus ",
        img: slide2,
    },
]