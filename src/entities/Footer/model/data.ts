import { Routes } from "@shared/consts/routes"

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
            // {
            //     text:"Район Селимие,улица Тархан, Османгази, Бурса / Турция",
            //     icon:"geo",
            //     path:""
            // },
            {
                text:"+996 505 150 470",
                icon:"phone",
                path:"https://wa.me/996505150470"
            },
            {
                text:"aman.sadyk@gmail.com",
                icon:"email",
                path:""
            },
            {
                text:"Индивидуальный предприниматель: Мамбетсадиков Аманбек Болотович",
                icon:"user",
                path:""
            },
        ]
    },
    // {
    //     title:"Регионы",
    //     info:[
    //         {
    //             text:"Стамбул",
    //             path:""
    //         },
    //         {
    //             text:"Греческие острова",
    //             path:""
    //         },
    //         {
    //             text:"Озеро Баликли/Урфа",
    //             path:""
    //         },
    //         {
    //             text:"Бодрум",
    //             path:""
    //         },
    //         {
    //             text:"Фетхийе/Олудениз",
    //             path:""
    //         },
    //     ]
    // },
    {
        title:"Туры",
        info:[
            {
                text:"5 дневный тур",
                path:Routes.TOURS('1')
            },
            {
                text:"10 дневный тур",
                path:Routes.TOURS('2')
            },
            {
                text:"20 дневный тур",
                path:Routes.TOURS('3')
            },
            {
                text:"30 дневный тур",
                path:Routes.TOURS('4')
            },
        ]
    },
]