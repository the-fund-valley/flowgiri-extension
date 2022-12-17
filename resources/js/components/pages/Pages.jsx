import React, { useState } from "react";
import ContentCard from "../ContentCard.jsx";
import { useRecoilState, useRecoilValue } from "recoil";

import { activePagesCatagoriesState, noPageState, pagesCatagoriesState, pagesState } from "../../state/State";
import SkeletonCard from "../Skeleton/card.jsx";
import Sidebar from "../Sidebar.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../Request/api.js";
import EmptyElements from "../EmptyElements.jsx";

function Pages() {
  const pages = useRecoilValue(pagesState);
  const pagesCatagories = useRecoilValue(pagesCatagoriesState);
  const [nextPage, setNextPage] = useState(2);
  const [hasMore, setHasMore] = useState(true);
  const [activeSectionCategory,setActivePagesCategory] = useRecoilState(activePagesCatagoriesState)
  const [noPages, setNoPages] = useRecoilState(noPageState);
  return (
    <>
      <Sidebar catagories={pagesCatagories}  activeCategory={activeSectionCategory} setter = {setActivePagesCategory} />
      <div>

          {pages.length > 0 && (
            <>
              <InfiniteScroll
                dataLength={pages.length}
                next={() => fetchMoreData(nextPage, setNextPage, setHasMore)}
                hasMore={hasMore}
                loader={pages.length > 5 && <h2>loading...</h2>}
                endMessage={""}
                scrollableTarget="scrollableDiv"
              >
                <div
                  id="scrollableDiv"
                  className={
                    "content-card-container grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto "
                  }
                >
                  {pages.map((item, i) => {
                    return <ContentCard item={item} i={i} />;
                  })}
                </div>
              </InfiniteScroll>
            </>
          )}
          {!pages.length &&  (
          <>
            {noPages ? (
              <EmptyElements />
            ) : (
              <div
                className={
                  "content-card-container grid  pr-[7px] gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh]  pr-[7px] overflow-auto "
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

export default Pages;
