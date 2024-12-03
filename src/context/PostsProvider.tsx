import WPAPI from "@/utils/WPAPI";
import { createContext, ReactNode, useEffect, useState } from "react";

export const PostsContext = createContext<PostsContextType | null>(null);

interface PostsContextType {
    posts: any[],
    isError: boolean
}

interface IPostsContextProps {
    children: ReactNode;
}

const PostsProvider = ({ children }: IPostsContextProps) => {

    const [posts, setPosts] = useState([])
    const [isError, setIsError] = useState(false)

    const wp = WPAPI;

    const searchPosts = async (searchTerm: string) => {
        const response = await wp.posts().search(searchTerm);
        // setPosts(response);
    };

    const getAllPosts = async () => {
        const response = await wp.posts()
        // console.log(response);

        setPosts(response);
    };

    useEffect(() => {
        getAllPosts()
    }, [])

    return (
        <PostsContext.Provider
            value={{
                posts,
                isError
            }}
        >
            {children}
        </PostsContext.Provider>
    )
};

export default PostsProvider;
