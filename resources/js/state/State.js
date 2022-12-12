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


export const  ThemesState = atom({
    key: "ThemesState",
    default: []
});


export const  activeThemeState = atom({
    key: "activeThemeState",
    default: {}
});

export const  activeCategoryState = atom({
    key: "activeCategoryState",
    default: 'templates'
});


export const  searchKeywordState = atom({
    key: "searchKeywordState",
    default: ''
});