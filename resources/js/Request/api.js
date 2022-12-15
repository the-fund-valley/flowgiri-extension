import { getRecoil, setRecoil } from "recoil-nexus";
import {
  activeCategoryState,
  activePagesCatagoriesState,
  activeSectionCatagoriesState,
  activeThemeState,
  contentFreeState,
  noPageState,
  noSectionState,
  noTemplateState,
  pagesCatagoriesState,
  pagesState,
  searchKeywordState,
  sectionsCatagoriesState,
  SectionsState,
  TemplatesState,
  ThemesState,
} from "../state/State";
import { request } from "./";

export const getAndSetThemesDataToState = async () => {

  if(getRecoil(ThemesState).length > 0 && getRecoil(pagesCatagoriesState).length > 0 && getRecoil(sectionsCatagoriesState).length > 0){
    return
  }

  const receivedData = await request.getAll("api/get-all-theme");
  const templateCatagories = await request.getAll(
    "api/get-all-theme-templates-category"
  );
  const sectionsCatagories = await request.getAll(
    "api/get-all-theme-sections-category"
  );

  setRecoil(ThemesState, receivedData);
  setRecoil(pagesCatagoriesState, templateCatagories);
  setRecoil(sectionsCatagoriesState, sectionsCatagories);

  getAllTemplates();
};



export const getAndSetThemeDataToState = async () => {

  let receivedData;

  if (getRecoil(activeCategoryState) === "templates") {

    if(getRecoil(TemplatesState).length > 0) return


    receivedData = await request.get("api/theme-templates?");
    if (!receivedData.data.length) {
      setRecoil(noTemplateState, true);
    } else {
      setRecoil(noTemplateState, false);
    }

    setRecoil(TemplatesState, receivedData.data);
  } else if (getRecoil(activeCategoryState) === "sections") {

    if(getRecoil(SectionsState).length > 0) return


    receivedData = await request.get("api/theme-sections?");

    if (!receivedData.data.length) {
      setRecoil(noSectionState, true);
    } else {
      setRecoil(noSectionState, false);
    }

    setRecoil(SectionsState, receivedData.data);
  } else if (getRecoil(activeCategoryState) === "pages") {

    if(getRecoil(pagesState).length > 0) return

    receivedData = await request.get("api/theme-templates?");

    if (!receivedData.data.length) {
      setRecoil(noPageState, true);
    } else {
      setRecoil(noPageState, false);
    }

    setRecoil(pagesState, receivedData.data);
  }
};

export const getAndSetThemeCategoryDataToState = async (id) => {

  let receivedData;

  const params = {};

  if (getRecoil(activeCategoryState) === "templates") {
    setRecoil(TemplatesState, []);
    if (id) {
      params["theme_id"] = id;
    }

    receivedData = await request.get("api/theme-templates?", params);

    if (!receivedData.data.length) {
      setRecoil(noTemplateState, true);
    } else {
      setRecoil(noTemplateState, false);
    }

    setRecoil(TemplatesState, receivedData.data);
  } else if (getRecoil(activeCategoryState) === "sections") {
    setRecoil(SectionsState, []);
    if (id) {
      params["category_id"] = id;
    }


    receivedData = await request.get("api/theme-sections?", params);

    if (!receivedData.data.length) {
      setRecoil(noSectionState, true);
    } else {
      setRecoil(noSectionState, false);
    }

    setRecoil(SectionsState, receivedData.data);
  } else if (getRecoil(activeCategoryState) === "pages") {
    setRecoil(pagesState, []);
    if (id) {
      params["category_id"] = id;
    }

    receivedData = await request.get("api/theme-templates?", params);

    if (!receivedData.data.length) {
      setRecoil(noPageState, true);
    } else {
      setRecoil(noPageState, false);
    }

    setRecoil(pagesState, receivedData.data);
  }
};
export const getAllTemplates = async () => {
  const receivedData = await request.getAll("api/theme-templates");
  setRecoil(TemplatesState, receivedData.data);
};

export const getAllSections = async () => {
  const receivedData = await request.getAll("api/theme-sections");
  setRecoil(SectionsState, receivedData.data);
};

export const getSearchData = async () => {
  let receivedData;
  let activeSectionCategory = getRecoil(activeSectionCatagoriesState);
  let activePageCategory = getRecoil(activePagesCatagoriesState);
  let free = getRecoil(contentFreeState);
  let searchText = getRecoil(searchKeywordState);
  let params = {};

  if (free) {
    params.is_pro = !free;
  }
  if (searchText.length) {
    params.str = searchText;
  }

  if (getRecoil(activeCategoryState) === "templates") {
    setRecoil(TemplatesState, []);

    let id = getRecoil(activeThemeState)?.id;

    if (id) {
      params["theme_id"] = id;
    }
    receivedData = await request.get("api/theme-templates?", params);

    if (!receivedData.data.length) {
      setRecoil(noTemplateState, true);
    } else {
      setRecoil(noTemplateState, false);
    }

    setRecoil(TemplatesState, receivedData.data);
  } else if (getRecoil(activeCategoryState) === "sections") {
    setRecoil(SectionsState, []);

    if (activeSectionCategory.id) {
      params["category_id"] = activeSectionCategory.id;
    }

    receivedData = await request.get("api/theme-sections?", params);
    if (!receivedData.data.length) {
      setRecoil(noSectionState, true);
    } else {
      setRecoil(noSectionState, false);
    }
    setRecoil(SectionsState, receivedData.data);
  } else if (getRecoil(activeCategoryState) === "pages") {
    setRecoil(pagesState, []);
    if (activePageCategory.id) {
      params["category_id"] = activePageCategory.id;
    }

    receivedData = await request.get("api/theme-templates?", params);
    setRecoil(pagesState, receivedData.data);
  }
};

export const fetchMoreData = async (nextPage, setNextPage, setHasMore) => {
  let receivedData;

  let free = getRecoil(contentFreeState);
  let searchText = getRecoil(searchKeywordState);
  let activeSectionCategory = getRecoil(activeSectionCatagoriesState);
  let activePageCategory = getRecoil(activePagesCatagoriesState);
  let id = getRecoil(activeThemeState)?.id;
  let params = {};

  if (free) {
    params.is_pro = free;
  }
  if (searchText.length) {
    params.str = searchText;
  }
  if (nextPage) {
    params.page = nextPage;
  }

  if (getRecoil(activeCategoryState) === "templates") {
    if (id) {
      params["theme_id"] = id;
    }
    receivedData = await request.get("api/theme-templates?", params);

    if (!receivedData.data.length) {
      setRecoil(noTemplateState, true);
    } else {
      setRecoil(noTemplateState, false);
    }

    setRecoil(TemplatesState, (oldState) => {
      return [...oldState, ...receivedData.data];
    });
  } else if (getRecoil(activeCategoryState) === "sections") {


    if (activeSectionCategory.id) {
      params["category_id"] = activeSectionCategory.id;
    }

    receivedData = await request.get("api/theme-sections?", params);

    if (!receivedData.data.length) {
        setRecoil(noSectionState, true);
      } else {
        setRecoil(noSectionState, false);
      }
    setRecoil(SectionsState, (oldState) => {
      return [...oldState, ...receivedData.data];
    });
  } else if (getRecoil(activeCategoryState) === "pages") {
    if (activePageCategory.id) {
      params["category_id"] = activePageCategory.id;
    }

    receivedData = await request.get("api/theme-templates?", params);

    if (!receivedData.data.length) {
      setRecoil(noPageState, true);
    } else {
      setRecoil(noPageState, false);
    }

    setRecoil(pagesState, (oldState) => {
      return [...oldState, ...receivedData.data];
    });
  }
  setNextPage((oldState) => oldState + 1);
  if (receivedData.data.length < 2) setHasMore(false);
};
