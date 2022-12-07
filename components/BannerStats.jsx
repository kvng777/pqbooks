import React from "react";

const BannerStats = (props) => {
  const { books } = props;
  return (
    <div className="BannerStats">
      <p>Stats:</p>
      <div>I have {books?.length} books</div>
    </div>
  );
};

export default BannerStats;
