const routes = [
    {
        path: ["/", "/home"],
        exact: true,
        component: "Home",
    },
];

const externalRedirects = [
    {
        path: "/request-whitelist",
        link: "https://forms.gle/LPKxt7EkEi9HPBft7"
    },
    {
        path: "/feedback",
        link: "https://forms.gle/9ByyzhxNUpXSji3eA"
    }
];

export {
    routes,
    externalRedirects
};
