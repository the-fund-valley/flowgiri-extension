import React, { useState } from "react";
import ContentCard from "../ContentCard.jsx";
import { useRecoilState, useRecoilValue } from "recoil";
import { SectionsState, sectionsCatagoriesState, activeSectionCatagoriesState, noSectionState } from "../../state/State";
import SkeletonCard from "../Skeleton/card.jsx";
import Sidebar from "../Sidebar.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { fetchMoreData } from "../../Request/api.js";
import EmptyElements from "../EmptyElements.jsx";

function Sections() {
  const sections = useRecoilValue(SectionsState);
  const sectionsCatagories = useRecoilValue(sectionsCatagoriesState);
  const [nextPage, setNextPage] = useState(2)
  const [hasMore, setHasMore] = useState(true)
  const [activeSectionCategory, setActiveSectionCategory] = useRecoilState(activeSectionCatagoriesState)
  const [noSections, setNoSections] = useRecoilState(noSectionState);

  return (
    <>
      <Sidebar catagories={sectionsCatagories} activeCategory={activeSectionCategory}  setter={setActiveSectionCategory}/>
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
                  "content-card-container grid  gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh]  pr-[7px] overflow-auto "
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
          <>
            {noSections ? (
              <EmptyElements />
            ) : (
              <div
                className={
                  "content-card-container grid  pr-[7px] gap-[18px] px-[0px] pb-8 flex grid-cols-1 md:grid-cols-2 max-h-[80vh] overflow-auto "
                }
              >
                {[1, 2, 3, 4, 5, 6].map(() => {
                  return <SkeletonCard />;
                })}
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default Sections;
