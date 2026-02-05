interface IRoutes {
    HOME: string;
    FAQ: string;
    CONTACT_US: string;
    TOURS: (id: string | number) => string;
    PRIVACE_POLICY:string
    PUBLIC_OFFER:string
    PROFILE:string
}

export const Routes: IRoutes = {
    HOME: '#',
    FAQ: '#faq',
    CONTACT_US: '#contact_us',
    TOURS: (id) => `/tours/${id}/`,
    PRIVACE_POLICY: '/privacy-policy',
    PUBLIC_OFFER: '/public-offer',
    PROFILE: '/profile',
}; 