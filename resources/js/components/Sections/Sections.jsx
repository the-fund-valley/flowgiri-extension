import React, { useState } from "react";
import ContentCard from "../ContentCard.jsx";
import { useRecoilValue } from "recoil";
import { SectionsState, sectionsCatagoriesState } from "../../state/State";
import SkeletonCard from "../Skeleton/card.jsx";
import Sidebar from "../Sidebar.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../Request/api.js";

function Sections() {
  const sections = useRecoilValue(SectionsState);
  const sectionsCatagories = useRecoilValue(sectionsCatagoriesState);
  const [nextPage, setNextPage] = useState(2)
  const [hasMore, setHasMore] = useState(true)

  return (
    <>
      <Sidebar catagories={sectionsCatagories} />
      <div>
        {sections.length > 0 && (
          <>
            <InfiniteScroll
              dataLength={sections.length}
              next={()=>fetchMoreData(nextPage,setNextPage, setHasMore)}
              hasMore={hasMore}
              loader={sections.length > 5 && <h2>loading...</h2>}
              endMessage={""}
              scrollableTarget="scrollableDiv"
            >
              <div
                id="scrollableDiv"
                className={
                  "content-card-container grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto "
                }
              >
                {sections.map((item, i) => {
                  return <ContentCard item={item} key={i} />;
                })}
              </div>
            </InfiniteScroll>
          </>
        )}
        {!sections.length && (
          <div className="grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto content-card-container">
            {[1, 2, 3, 4, 5, 6].map(() => {
              return <SkeletonCard />;
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Sections;
