import React from "react";

import { client } from "../lib/client";
import { Book } from "../components";

const Home = ({ books }) => {
  console.log("books check", books);
  return (
    <>
      <div className="inner-container">
        <div className="book-listing">
          {books?.map((book) => (
            <Book key={book._id} book={book} />
          ))}
          {/* {books?.map(
            (book) =>
              (book.released || book.released === undefined) && (
                <Book key={book._id} book={book} />
              )
          )} */}
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async () => {
  const query = '*[_type == "books"]';

  const books = await client.fetch(query);

  return {
    props: { books }
  };
};

export default Home;
