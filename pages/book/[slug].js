import React, { useState } from "react";

import { client, urlFor } from "../../lib/client";
import Link from "next/link";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PictureAsPdfIcon from "@mui/icons-material/PictureAsPdf";
import Rating from "@mui/material/Rating";
import AccountCircleRoundedIcon from "@mui/icons-material/AccountCircleRounded";

const BookDetails = ({ book, books }) => {
  const { image, author, title, genre, content, myrating, released } = book;

  const [index, setIndex] = useState(0);

  const ref = book.manuscript?.asset._ref;

  const getUrlFromId = (ref) => {
    const [_file, id, extension] = ref.split("-");
    return `https://cdn.sanity.io/files/3ogxnudl/production/${id}.${extension}`;
  };

  return (
    <div className="book-details">
      <div className="controller">
        <Link href="/">
          <ArrowBackIosNewIcon />
          <p>Go Back</p>
        </Link>
        {ref && (
          <div className="book-pdf">
            <a href={`${getUrlFromId(ref)}`} target="_blank" rel="noreferrer">
              <PictureAsPdfIcon />
              Read PDF
            </a>
          </div>
        )}
      </div>

      <div className="book-wrapper">
        <div className="book-image">
          {image ? (
            <img src={urlFor(image && image[index])} alt="book images" />
          ) : null}
          {/* {image && image.map((img, i) => <img src={urlFor(img)} key={i} />)} */}
          {image ? (
            <div className="book-image-carousel">
              {image?.map((item, i) => (
                <img
                  key={i}
                  src={urlFor(item)}
                  className={
                    i === index ? "small-image selected-image" : "small-image"
                  }
                  onMouseEnter={() => setIndex(i)}
                  alt="book carousel images"
                />
              ))}
            </div>
          ) : null}
          <div className="book-stats">
            <div className="genre">Genre: {genre}</div>
            <div className="rate">
              <Rating
                name="half-rating-read"
                defaultValue={myrating}
                precision={0.5}
                readOnly
              />
            </div>
            <div className="availability">
              Availability:
              <label
                className={`inLibrary ${
                  released ? "" : "notAvailable blink-1"
                }`}
              >
                {released ? "In Library" : "Missing"}
              </label>
            </div>
          </div>
        </div>
        <div className="book-desc">
          <div className="book-contents">
            <div className="book-title">
              <h1>{title}</h1>
            </div>
            <div className="book-author">
              <AccountCircleRoundedIcon />
              <h2>{author}</h2>
            </div>
            {content &&
              content.map((item, idx) => (
                <div className="book-overview" key={idx}>
                  {item.children.map((child, idx) => (
                    <p key={idx}>{child.text}</p>
                  ))}
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export const getStaticPaths = async () => {
  const query = `*[_type == "book"] {
    slug {
      current
    }
  }`;

  const books = await client.fetch(query);
  const paths = books.map((book) => ({
    params: {
      slug: book.slug.current
    }
  }));

  return {
    paths,
    fallback: "blocking"
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "books" && slug.current=='${slug}'][0]`;
  const booksQuery = '*[_type == "book"]';
  // const richContent = `*[_type == "books" && slug.current=='${slug}'][0] && `;

  const book = await client.fetch(query);
  const books = await client.fetch(booksQuery);

  return {
    props: { book, books }
  };
};

export default BookDetails;
