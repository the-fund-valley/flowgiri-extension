import React, { useEffect, useState } from "react";
import ContentCard from "../ContentCard.jsx";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  activeThemeState,
  noTemplateState,
  TemplatesState,
  ThemesState,
} from "../../state/State";
import SkeletonCard from "../Skeleton/card.jsx";
import Sidebar from "../Sidebar.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../Request/api.js";
import EmptyElements from "../EmptyElements.jsx";

function Templates() {
  const templates = useRecoilValue(TemplatesState);
  const themes = useRecoilValue(ThemesState);
  const [nextPage, setNextPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [activeTheme, setActiveTheme] = useRecoilState(activeThemeState);
  const [noTemplates, setNoTemplates] = useRecoilState(noTemplateState);

  return (
    <>
      <Sidebar
        catagories={themes}
        setter={setActiveTheme}
        activeCategory={activeTheme}
      />
      <div>
        {templates.length > 0 && (
          <>
            {}
            <InfiniteScroll
              dataLength={templates.length}
              next={() => fetchMoreData(nextPage, setNextPage, setHasMore)}
              hasMore={hasMore}
              loader={templates.length > 5 && <h2>loading...</h2>}
              endMessage={""}
              scrollableTarget="scrollableDiv"
            >
              <div
                id="scrollableDiv"
                className={
                  "content-card-container grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto pr-[7px]"
                }
              >
                {templates.map((item, i) => {
                  return <ContentCard item={item} i={i} />;
                })}
              </div>
            </InfiniteScroll>
          </>
        )}
        {!templates.length && (
          <>
            {noTemplates ? (
              <EmptyElements />
            ) : (
              <div
                className={
                  "content-card-container grid  pr-[7px]  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto "
                }
              >
                 {[1, 2, 3, 4, 5, 6].map((_,i) => {
                  return <SkeletonCard  i={i}/>;
                })}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Templates;
