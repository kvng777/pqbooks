import React from "react";
import Link from "next/link";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
// import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
import { urlFor } from "../lib/client";
import Image from "next/image";

const Book = ({ book: { slug, image, title, author, released } }) => {
  // console.log("i am in books", book);
  const firstImage = image[0];
  console.log("first image", firstImage);
  return (
    <Link href={`/book/${slug.current}`}>
      <div className={`book ${released ? "" : "notAvailable"}`}>
        <div className="cover">
          {firstImage && <img src={urlFor(firstImage)} alt="book images" />}
        </div>
        <div className="overlay">
          <div className="info-icon">
            <InfoOutlinedIcon />
          </div>
          <div className="info">
            <div className="title">
              <h3>{title}</h3>
            </div>
            <div className="author">
              <h4>{author}</h4>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;