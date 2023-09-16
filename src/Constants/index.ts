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
        title: "Menu pour kimy Foods",
        content: " Kimy Foods est un petit restaurant camerounais proposant des mets variés passants des hamburgers, aux croquettes et boissons naturelles.Ce meunu présente tous les mets disponibles dans une ambiance sobre et élégante. Avec de petits détails colorés pour attirer l'attention du client. ",
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
        title: "Flyer pour les délices de Leida",
        content: " Les délices de Leida est l'enseigne d'une jeune pâtissière camerounaise qui confectionne d'incroyoables pâtisseries pour ses clients. Ainsi l'usage des couleurs apporte une touche de délicatesse au flyer, en révélant ainsi le goût et la qualité de chacune de ses réalisations.",
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
        content: " Pexple est un logo concept crée par moi pour une marque fictive d’équipement de protection.Les couleurs accentuent les détails liés à la typographie du logo. ",
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
        content: " Ceci est un conept logo fait par mes soins et inspiré du très connu logo de la marque Converse.J’ai décidé de retravailler ce logo en y apportant une touche de légèreté et de simplicité mais également un effet subliminal entre le “C” et l’étoile. ",
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
        content: " JHire est un prototype de plateforme en ligne où des développeurs juniors pourront proposé leur service aux entreprise camerounaise.Ce logo est un subtil mélange de blanc, noir et vert qui contrastent parfaitement pour faire resortir les lettres “J” et “H” du logo. ",
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
        content: " Ceci est un concept logo pour un hôtel fictif 5 étoiles.Il s’agit d’un logo de type monogramme formé avec les lettres “G” et “H”. Et l’utilisation des couleurs or et vert pour représenter le haut standing et de luxe de l’hôtel. ",
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
        content: " Supafee est un packaging concept crée par moi pour une marque fictive de café. L’utilisation de la couleur marron permet de révéler les détails floraux dorés mais aussi la couleur blanche de la typographie et le logo. ",
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
        content: "Ceci est un packaging concept fait pour une marque de chips fictive. Ce packaging est fait pour un paquet de chip de la marque. Il permet ainsi au client de visualiser à quoi ressemblerait le produit fini. ",
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
        content: "Yggy-Flake si elle existait serait une marque de céréales multivitaminée . Ce packaging concept est fait pour une boite de céréale de 500g avec des couleurs attractives.",
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
        content: "Une fois de plus il s’agit d’un concept de packaging pour une marque de lait. La création du packaging design est passée par la réalisation du logo de l’enseigne. ",
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
        content: "Qui est une marketplace pour étudiants, élèves ou parents en quête de professeurs pour des cours de répétitions.Il s’agit ici de l’interface de la plateforme, qui a été conçu par moi dans le cadre d’un projet future.",
        icon: FaFigma,
        col1: '#ffc265',
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
        content: "Nous avons là le prototype d’interface pour un portfolio d’ui/ux designer. Cette interface comporte les sections About me, Contact, Projects et bien d’autres.",
        icon: FaFigma,
        col1: '#ffc265',
        col2: '#f1f1f1',
        col3: '#181818',
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
        content: "Il s’agit là d’un prototype d’interface pour une application mobile de quiz. Nous avons là quelques interface allant de la homepage au menu en passant par l’interface de login.",
        icon: FaFigma,
        col1: '#ffc265',
        col2: '#f1f1f1',
        col3: '#181818',
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
        content: "Ici il s’agit d’une landing page pour le site d’un hôpital qui offre diverse service. Nous avons les sections about, service, testimonails et bien d’autres.",
        icon: FaFigma,
        col1: '#ffc265',
        col2: '#f1f1f1',
        col3: '#181818',
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
        content: "Seul dans l’espace avec pour seule compagne la lune au bout de son fils. L’astranaut Soliterrien navigue dans l’espace.Illustration réalisée en vecteur sous Addobe Illustrator. ",
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
        content: "Il s’agit d’un portrait en vecteur représentant une jeune femme noire vêtu d’une couronne lumineuse sur la tête rappelant Marie. ",
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
        content: "Représentation du portrait d’une jeune femme noire sous différente couche de couleur telle une peinture. Il a été réalisé en vecteur grâce au logiciel Adobe Illustrator.",
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
        content: "Aussi vraie que possible, une illustration représentant une Nike airmax. Fait uniquement en vecteur pour un plaisir visuel. ",
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
        title: "créativité",
    },
    {
        id: 2,
        title: "communication",
    },
    {
        id: 3,
        title: "curiosité",
    },
    {
        id: 4,
        title: "travail d'équipe",
    },
    {
        id: 5,
        title: "esprit critique",
    },
    {
        id: 6,
        title: "proactivité",
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
        title: "utilisation des scénarios d'usage",
    },
    {
        id: 2,
        title: "illustrator",
    },
    {
        id: 3,
        title: "connaissance des couleurs",
    },
    {
        id: 4,
        title: "maîtrise de la typographie",
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
        title: "utilisation des personas",
    },
    {
        id: 8,
        title: "maîtrise de l'affordance",
    },
]

export const formations = [
    {
        id: 1,
        title: "Licence Technologique en Génie logiciel",
        date: "2022-2023",
        school: "IUT de Douala",
        desc: "Au cours de cette année j'ai pu avoir une licence en génie logiciel. M'ayant ainsi permit d'avoir des capacités de conceptions d'applications web plus complexes et d'architectures variées. Egalement la maîtrise des languages tels que TypeScript  et des frameworks comme React.",
    },
    {
        id: 2,
        title: "Diplôme Universitaire des Technologie en Génie Informatique",
        date: "2019-2021",
        school: "IUT de Douala",
        desc: "Durant ces deux années j'ai pu acquérir des compétences en analyse et conception des systèmes d'informations,l'apprentissage des methodes et langages tels que MERISE et UML. Je me suis aussi familiarisé avec des outils tels que Bootstrap, TailwindCss et Figma.",
    },
    {
        id: 3,
        title: "Baccalauréat en Maths et science de la vie et de la terre",
        date: "2017-2018",
        school: "Lycéé bilingue de Nyalla",
        desc: "Au terme de mes études secondaires, j’ai eu mon baccalauréat avec une mention passable et j’ai su que je voulais faire du design graphique.",
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