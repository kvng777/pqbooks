import React from "react";
import Link from "next/link";

import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import ImageTwoToneIcon from "@mui/icons-material/ImageTwoTone";

// import WarningAmberTwoToneIcon from "@mui/icons-material/WarningAmberTwoTone";
import { urlFor } from "../lib/client";

const Book = ({ book: { slug, image, title, author, released } }) => {
  const firstImage = image ? image[0] : "";
  return (
    <Link href={`/book/${slug?.current}`}>
      <div className={`book ${released ? "" : "notAvailable"}`}>
        <div className={`cover ${firstImage ? "" : "no-image"}`}>
          {firstImage ? (
            <img src={urlFor(firstImage)} alt="book images" />
          ) : (
            <div className="no-image-icon">
              <ImageTwoToneIcon />
              No Image Uploaded
            </div>
          )}
        </div>
        <div className="overlay">
          <div className="info-icon bounce">
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
