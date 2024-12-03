import React from "react";
import Blogs from "./Blogs";
import Sidebar from "./Sidebar";
import iBlog from "@/model/iBlog";


interface AllNewsProps {
  isWide: boolean;
  leftSidebar: boolean;
  style: string;
  data: iBlog[];
  paging: {
    total: number | string;
    totalPages: number | string;
    currentPage: number
  }
  sidebarData: any
}

const AllNews: React.FC<AllNewsProps> = ({
  isWide,
  leftSidebar,
  style = "4",
  data,
  paging,
  sidebarData
}) => {
  // const data = allNewsData;
  // //@ts-ignore
  // const { posts, isError } = usePostsContext()
  // console.log(posts._paging);

  return (
    <section className="all-news section-padding blog bg-transparent style-3">
      <div className="container">
        <div
          className={`row ${isWide ? "justify-content-center" : leftSidebar ? "gx-5" : "gx-4 gx-lg-5"}`}
        >
          {!isWide && leftSidebar && (
            <Sidebar data={sidebarData} style={style} />
          )}
          <Blogs blogs={data} isWide={isWide} style={style} paging={paging ? paging : { total: 0, totalPages: 0, currentPage: 0 }} />
          {!isWide && !leftSidebar && (
            <Sidebar data={sidebarData} style={style} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AllNews;
