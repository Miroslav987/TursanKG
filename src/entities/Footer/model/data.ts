
interface Info {
    text:string
    icon?:string
    path:string
}

interface NavItemsType {
    title:string
info:Info[]
}

export const navItems:NavItemsType[] =[
    {
        title:"Контакты",
        info:[
            {
                text:"Район Селимие,улица Тархан, Османгази, Бурса / Турция",
                icon:"geo",
                path:""
            },
            {
                text:"0537 000 00 00",
                icon:"phone",
                path:""
            },
            {
                text:"info@websitedemolari.com",
                icon:"email",
                path:""
            },
        ]
    },
    {
        title:"Регионы",
        info:[
            {
                text:"Стамбул",
                path:""
            },
            {
                text:"Греческие острова",
                path:""
            },
            {
                text:"Озеро Баликли/Урфа",
                path:""
            },
            {
                text:"Бодрум",
                path:""
            },
            {
                text:"Фетхийе/Олудениз",
                path:""
            },
        ]
    },
    {
        title:"Туры",
        info:[
            {
                text:"Экскурсия по Стамбулу",
                path:""
            },
            {
                text:"Поездка на Греческие острова",
                path:""
            },
            {
                text:"Тур по Баликли/Урфа",
                path:""
            },
            {
                text:"Тур в Анталию",
                path:""
            },
        ]
    },
]