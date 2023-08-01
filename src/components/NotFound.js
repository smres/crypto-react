import React from "react";

// Images
import notFound from "../gif/404.jpg";

const NotFound = () => {
  return (
    <div>
      <img style={{ width: "600px" }} src={notFound} alt="404 notFound" />
    </div>
  );
};

export default NotFound;
