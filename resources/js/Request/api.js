import { getRecoil, setRecoil } from "recoil-nexus"
import { activeCategoryState, activeThemeState, contentFreeState, pagesState, searchKeywordState, SectionsState, TemplatesState, ThemesState } from "../state/State"
import { request } from "./"

export const getAndSetThemesDataToState = async () => {
   const receivedData = await request.getAll('api/get-all-theme')

   setRecoil(ThemesState, receivedData)

   getAllTemplates()
}

export const getAndSetThemeDataToState = async (id) => {
    let receivedData ;

    if(getRecoil(activeCategoryState) === 'templates'){
        receivedData  = await request.get('api/theme-templates?',{id})
        setRecoil(TemplatesState, receivedData.data)
    } else if (getRecoil(activeCategoryState) === 'sections') {
        receivedData  = await request.get('api/theme-sections?',{id})
        setRecoil(SectionsState, receivedData.data)
    } else if (getRecoil(activeCategoryState) === 'pages') {
        receivedData  = await request.get('api/theme-pages?',{id})
        setRecoil(pagesState, receivedData.data)
    }

    setRecoil(activeThemeState, receivedData)
 }

export const getAllTemplates = async () => {
    const receivedData = await request.getAll('api/theme-templates')
    setRecoil(TemplatesState, receivedData.data)
}

export const getAllSections = async () => {
    const receivedData = await request.getAll('api/theme-sections')
    setRecoil(SectionsState, receivedData.data)
}



export const getSearchData = async () => {
    let receivedData ;
    let id = getRecoil(activeThemeState)?.id
    let free = getRecoil(contentFreeState)
    let searchText = getRecoil(searchKeywordState)
    let params = {}
    if(id){
        params.id = id
    }
    if(free) {
        params.is_pro = free
    }
    if(searchText.length){
        params.str = searchText
    }

    if(getRecoil(activeCategoryState) === 'templates'){
        receivedData  = await request.get('api/theme-templates?',params)
        console.log(receivedData.data)
        setRecoil(TemplatesState, receivedData.data)
    } else if (getRecoil(activeCategoryState) === 'sections') {
        receivedData  = await request.get('api/theme-sections?',params)
        console.log(receivedData.data)
        setRecoil(SectionsState, receivedData.data)
    }
}