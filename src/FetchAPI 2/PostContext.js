import { createContext, useEffect, useState } from "react";

export const PostContext = createContext();

export function PostProvider({ children }) {
  const [post, setPost] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    async function FetchPost() {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");

        const posts = await res.json();

        setPost(posts);
      } catch (error) {
        setError("Post Not Found");
      }
    }

    FetchPost();
  }, []);

  return <PostContext.Provider value={{post, error}}>{children}</PostContext.Provider>;
}
