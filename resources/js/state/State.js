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
    default: []
});

export const TemplatesState = atom({
    key: "TemplatesState",
    default: []
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


export const  contentFreeState = atom({
    key: "contentFreeState",
    default: true
});