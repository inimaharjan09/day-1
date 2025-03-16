import React from "react";
import { posts } from "./data/data";
import PostCard from "./components/PostCard";

export default function App() {
  // const person = {
  //   address: {
  //     primary: 'new road',
  //     secondary:'indrachowk'
  //   }
  // };
  // const { address: {primary, secondary}}=person;
  
  return(
    <div className="p-5 flex flex-wrap gap-5 justify-center">
      {/* <PostCard /> */}
      {posts.map((post)=> {
        return <PostCard key={post.id} post={post} />
      })}
      
    </div>
  )
}