import React, { useEffect, useState } from "react";
import Blogs from "./Blogs";
import Sidebar from "@components/Blog/AllNews/Sidebar";
import iBlog from "@/model/iBlog";
import { useRouter } from "next/router";
import WPAPI from "@/utils/WPAPI";

interface AllNewsProps {
  isWide: boolean;
  leftSidebar: boolean;
  style: string;
  // data: iBlog[];
  // paging: {
  //   total: number | string;
  //   totalPages: number | string;
  //   currentPage: number
  // }
  sidebarData: any;
}

const AllNews: React.FC<AllNewsProps> = ({
  isWide,
  leftSidebar,
  style = "4",
  // data,
  // paging,
  sidebarData,
}) => {
  const router = useRouter();
  const [searchResulf, setSearchResulf] = useState<iBlog[]>([]);
  const [paging, setPaging] = useState({
    total: 0,
    totalPages: 0,
    currentPage: 0,
  });
  const [isSearching, setIsSearching] = useState(false);

  const handleSearchPost = async () => {
    const wp = WPAPI
    try {
      const searchData =
        router.query?.search ?
          await wp.posts().search(router.query.search).param('lang', router.locale).embed().page(router.query.page || 1).perPage(30).get()
          :
          await wp.posts().param('lang', router.locale).embed().page(router.query.page || 1).perPage(30).get()


      const paging = {
        total: searchData?._paging?.total || 0,
        totalPages: searchData?._paging?.totalPages || 0,
        currentPage: Number(router.query?.page) || 1,
      };

      setPaging(paging);
      setSearchResulf(searchData);

    } catch (error) {
      console.error("There was an error fetching data from WPAPI:", error);

      return [];
    }
    finally {
      setIsSearching(false)
    }
  };

  useEffect(() => {
    setIsSearching(true)
    handleSearchPost();
  }, [router.query.search, router.locale]);

  return (
    <section className="all-news section-padding blog bg-transparent style-3">
      <div className="container">
        <div
          className={`row ${isWide ? "justify-content-center" : leftSidebar ? "gx-5" : "gx-4 gx-lg-5"}`}
        >
          {!isWide && leftSidebar && (
            <Sidebar data={sidebarData} style={style} />
          )}
          <Blogs
            blogs={searchResulf}
            isWide={isWide}
            style={style}
            paging={
              paging
            }
            isSearching={isSearching}
          />
          {!isWide && !leftSidebar && (
            <Sidebar data={sidebarData} style={style} />
          )}
        </div>
      </div>
    </section>
  );
};

export default AllNews;
