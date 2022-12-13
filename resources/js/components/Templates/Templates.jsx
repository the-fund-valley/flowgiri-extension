import React, { useEffect, useState } from "react";
import ContentCard from "../ContentCard.jsx";
import { useRecoilValue } from "recoil";
import { TemplatesState, ThemesState } from "../../state/State";
import SkeletonCard from "../Skeleton/card.jsx";
import Sidebar from "../Sidebar.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../Request/api.js";

function Templates() {
  const templates = useRecoilValue(TemplatesState);
  const themes = useRecoilValue(ThemesState);
  const [nextPage, setNextPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  return (
    <>
      <Sidebar catagories={themes} />
      <div>
        {templates.length > 0 && (
          <>
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
                  "content-card-container grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto "
                }
              >
                {templates.map((item, i) => {
                  return <ContentCard item={item} key={i} />;
                })}
              </div>
            </InfiniteScroll>
          </>
        )}
        {!templates.length && (
          <>
            {[1, 2, 3, 4, 5, 6].map(() => {
              return <SkeletonCard />;
            })}
          </>
        )}
      </div>
    </>
  );
}

export default Templates;
