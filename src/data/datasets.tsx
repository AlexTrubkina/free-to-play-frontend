import { NavLinkType } from "../types/types";

export const navLinks: NavLinkType = [
    {
        link: "/games",
        page: "Все игры"
    },
    {
        page: "Жанры",
        link: "/games",
        subMenu : [
            {
                page: "Shooter",
                link: "/shooter"
            }, 
            {
                page: "Anime", 
                link: "/anime"
            }, 
            {
                page: "Strategy",
                link: "/strategy"
            }, 
            {
                page: "Fantasy",
                link: "/fantasy"
            }, 
            {
                page: "Fighting",
                link: "/fighting"
            }
        ]
    },
];

export const footerLinks: NavLinkType = [
    {
        link: "/",
        page: "Главная страница"
    },
    {
        link: "/games",
        page: "Все игры"
    },
    {
        page: "Жанры",
        link: "/games",
        subMenu : [
            {
                page: "Shooter",
                link: "/shooter"
            }, 
            {
                page: "Anime", 
                link: "/anime"
            }, 
            {
                page: "Strategy",
                link: "/strategy"
            }, 
            {
                page: "Fantasy",
                link: "/fantasy"
            }, 
            {
                page: "Fighting",
                link: "/fighting"
            }
        ]
    },
]