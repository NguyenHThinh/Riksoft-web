import { useContext } from "react";
import { PostsContext } from "@/context/PostsProvider";

export default function usePostsContext() {
  return useContext(PostsContext);
}
