interface IRoutes {
    HOME: string;
    FAQ: string;
    CONTACT_US: string;
    TOURS: (id: string | number) => string;
}

export const Routes: IRoutes = {
    HOME: '#',
    FAQ: '#faq',
    CONTACT_US: '#contact_us',
    TOURS: (id) => `/tours/${id}`
}; 