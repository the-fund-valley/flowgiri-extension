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
    default: false
});


export const  activeButtonState = atom({
    key: "activeButtonState",
    default: {
        id:'templates',
        name:'Templates',
        left:'4px'
    }
});



export const  themesCatagoriesState = atom({
    key: "themesCatagories",
    default: []
});


export const  sectionsCatagoriesState = atom({
    key: "sectionsCatagories",
    default: []
});

export const  activeSectionCatagoriesState = atom({
    key: "activeSectionCatagoriesState",
    default: {}
});
export const  activePagesCatagoriesState = atom({
    key: "activePagesCatagoriesState",
    default: {}
});


export const  pagesCatagoriesState = atom({
    key: "pagesCatagoriesState",
    default: {}
});

export const  noTemplateState = atom({
    key: "noTemplateState",
    default: false
});
export const  noSectionState = atom({
    key: "noTemplateState",
    default: false
});
export const  noPageState = atom({
    key: "noPageState",
    default: false
});

