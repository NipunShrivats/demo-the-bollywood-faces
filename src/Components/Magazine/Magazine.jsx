import React from "react";
import "./MagazineStyle.css";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import img1 from "../../assets/MagzineRelease/1.png";
import img2 from "../../assets/MagzineRelease/2.png";
import img3 from "../../assets/MagzineRelease/3.png";
import img4 from "../../assets/MagzineRelease/4.png";
import img5 from "../../assets/MagzineRelease/5.png";
import img6 from "../../assets/MagzineRelease/6.png";
import img7 from "../../assets/MagzineRelease/7.png";
import img8 from "../../assets/MagzineRelease/8.png";
import img9 from "../../assets/MagzineRelease/9.png";
import img10 from "../../assets/MagzineRelease/10.png";
import img11 from "../../assets/MagzineRelease/11.png";
import img12 from "../../assets/MagzineRelease/12.png";

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Magazine() {
  return (
    <ImageList
      className="magazine stiff-block"
      key="magazine"
      id="magazine"
      // sx={{ width: 500, height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem
          key={item.img}
          cols={item.cols || 1}
          rows={item.rows || 1}
        >
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

const itemData = [
  {
    img: img1,
    title: "image1",
    rows: 2,
    cols: 2,
  },
  {
    img: img3,
    title: "image3",
    rows: 3,
    cols: 2,
  },
  {
    img: img2,
    title: "image2",
  },
  {
    img: img12,
    title: "image12",
  },
  {
    img: img4,
    title: "image4",
    cols: 2,
  },
  {
    img: img5,
    title: "image5",
    cols: 2,
  },
  {
    img: img6,
    title: "image6",
    rows: 2,
    cols: 2,
  },
  {
    img: img7,
    title: "image7",
  },
  {
    img: img8,
    title: "image8",
  },
  {
    img: img9,
    title: "image9",
    rows: 2,
    cols: 2,
  },
  {
    img: img10,
    title: "image10",
  },
  {
    img: img11,
    title: "image11",
  },
];
