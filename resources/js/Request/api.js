import { getRecoil, setRecoil } from "recoil-nexus"
import { activeCategoryState, activeThemeState, contentFreeState, pagesCatagoriesState, pagesState, searchKeywordState, sectionsCatagoriesState, SectionsState, TemplatesState, ThemesState } from "../state/State"
import { request } from "./"

export const getAndSetThemesDataToState = async () => {
   const receivedData = await request.getAll('api/get-all-theme')
   const templateCatagories = await request.getAll('api/get-all-theme-sections-category')
   const sectionsCatagories = await request.getAll('api/get-all-theme-sections-category')

   setRecoil(ThemesState, receivedData)
   setRecoil(pagesCatagoriesState, templateCatagories)
   setRecoil(sectionsCatagoriesState, sectionsCatagories)

   getAllTemplates()
}

export const getAndSetThemeDataToState = async (id) => {
    let receivedData ;
    let sectionsLength = getRecoil(SectionsState).length
    let templatesLength = getRecoil(TemplatesState).length


    const params = {}
    if(id){
        params['theme_id'] = id
    }

    if(getRecoil(activeCategoryState) === 'templates'){
        receivedData  = await request.get('api/theme-templates?',params)
        setRecoil(TemplatesState, receivedData.data)
    } else if (getRecoil(activeCategoryState) === 'sections') {
        receivedData  = await request.get('api/theme-sections?',params)

        setRecoil(SectionsState, receivedData.data)
    } else if (getRecoil(activeCategoryState) === 'pages') {
        receivedData  = await request.get('api/theme-pages?',params)
        setRecoil(pagesState, receivedData.data)
    }



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

        setRecoil(TemplatesState, receivedData.data)
    } else if (getRecoil(activeCategoryState) === 'sections') {
        receivedData  = await request.get('api/theme-sections?',params)

        setRecoil(SectionsState, receivedData.data)
    }
}


export const fetchMoreData = async (nextPage, setNextPage , setHasMore) => {
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
    if(nextPage){
        params.page = nextPage
    }

    if(getRecoil(activeCategoryState) === 'templates'){
        receivedData  = await request.get('api/theme-templates?',params)

        setRecoil(TemplatesState,(oldState)=>{
            return [
                ...oldState,...receivedData.data
            ]
        } )

    } else if (getRecoil(activeCategoryState) === 'sections') {
        receivedData  = await request.get('api/theme-sections?',params)
        setRecoil(SectionsState,(oldState)=>{
            return [
                ...oldState,...receivedData.data
            ]
        } )
    } else if (getRecoil(activeCategoryState) === 'pages') {
        receivedData  = await request.get('api/theme-sections?',params)
        setRecoil(pagesState,(oldState)=>{
            return [
                ...oldState,...receivedData.data
            ]
        } )
    }
    setNextPage((oldState) => oldState + 1)
    if(receivedData.data.length < 2) setHasMore(false)
  };
