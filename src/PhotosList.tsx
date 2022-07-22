import React, { useEffect, useState } from "react";

// {
//   "albumId": 1,
//   "id": 1,
//   "title": "accusamus beatae ad facilis cum similique qui sunt",
//   "url": "https://via.placeholder.com/600/92c952",
//   "thumbnailUrl": "https://via.placeholder.com/150/92c952"
// },

type PhotoElement = {
  albumId: string;
  id: string;
  title: string;
  url: string;
  thumbnailUrl: string;
};

function PhotosList() {
  const [list, setList] = useState<PhotoElement[]>();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/photos")
      .then((data) => data.json())
      .then((data) => setList(data.slice(0, 100)));
  }, []);

  const PhotoElement = ({ thumbnailUrl, title }: PhotoElement) => (
    <div className="photo-element">
      <img src={thumbnailUrl} alt="image1" />
      <div>{title}</div>
    </div>
  );

  return <div className="photo-layout">{list && list.map(PhotoElement)}</div>;
}

export default PhotosList;
