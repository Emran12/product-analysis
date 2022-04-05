import React from "react";
import contextApi from "./contextApi.PNG";
const Blog = () => {
  return (
    <div className="container mx-auto mt-5">
      <h1 className="text-3xl text-blue-500 font-bold mb-2">
        Context API in react and purpose of context api
      </h1>
      <p className="font-serif text-xl">
        Context api is designed to share props that can be considered “global”
        for a tree of React components, such as the current authenticated user,
        theme, or preferred language. Purpose of context api
        <span className="font-serif text-xl">
          <img src={contextApi} alt="" />
          To access data in many component at different nesting levels
          <br></br>Refactoring is quite easy<br></br> Avoid passing some props
          through many levels to send data.
        </span>
      </p>
      <h1 className="text-3xl text-blue-500 font-bold mb-2 mt-5">
        Semantic Tag
      </h1>
      <p className="font-serif text-xl mb-4">
        Semantic HTML or semantic markup in HTML that introduces meaning to the
        web page rather than just presentation. For example, a p tag indicates
        that the enclosed text is a paragraph. This is both semantic and
        presentational because people know what paragraphs are, and browsers
        know how to display them.<br></br>
        <span className="text-xl text-blue-500 font-bold mb-2">
          Examples of semantic HTML tags:
        </span>
        <br></br>
        del: Deleted text<br></br>
        h1-h6: First-level to Sixth-level headline. <br></br>
        sub: Subscript sup: Superscript <br></br>
        q: Short inline quotation.<br></br>
        pre: Pre-formatted text
      </p>
    </div>
  );
};

export default Blog;

{
  /* <div>
        
        
      </div>

      <div>
        
        <br></br>
          
          del: Deleted text
          <br></br> 
        </p>
      </div> */
}
