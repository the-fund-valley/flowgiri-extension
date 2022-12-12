import {atom} from 'recoil'



export const pagesState = atom({
    key: "pagesState",
    default: []
});

export const componentsState = atom({
    key: "componentsState",
    default: []
});


export const SectionsState = atom({
    key: "SectionsState",
    default: [1,2,3]
});

export const TemplatesState = atom({
    key: "TemplatesState",
    default: [1,2,3,4,5,6,7,8]
});


export const  ThemesCategoryState = atom({
    key: "ThemesCategoryState",
    default: [
        'Navigation', 'header', 'Sign in/ Sign up', 'Features', 'Blog Posts', 'Portfolio', 'Testimonials',
        'Navasdigation', 'haseader', 'Sisgn in/ Sign up', 'Fedfatures', 'Blogs Posts', 'Porstfolio'
    ]
});

export const  activeCategoryState = atom({
    key: "activeCategoryState",
    default: 'templates'
});


export const  searchKeywordState = atom({
    key: "searchKeywordState",
    default: ''
});