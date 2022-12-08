import {atom} from 'recoil'

export const activeCatagoryState = atom({
    key: "activeCatagory",
    default: ''
});

export const ThemesState = atom({
    key: "ThemesState",
    default: []
});

export const SectionsState = atom({
    key: "SectionsState",
    default: []
});

export const TemplatesState = atom({
    key: "TemplatesState",
    default: []
});


export const  ThemesCatagoryState = atom({
    key: "ThemesCatagoryState",
    default: [
        'Navigation', 'header', 'Sign in/ Sign up', 'Features', 'Blog Posts', 'Portfolio', 'Testimonials',
        'Navigation', 'header', 'Sign in/ Sign up', 'Features', 'Blog Posts', 'Portfolio'
    ]
});