import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const generateRandomData = (count) => {
  const data = [];
  const imageUrls = [
    "/images/movies/movies (1).avif", // Dark gray
    "/images/movies/movies (1).jpeg", // Darker gray
    "/images/movies/movies (1).jpg", // Darker gray
    "/images/movies/movies (2).avif", // Darker gray
    "/images/movies/movies (2).jpg", // Darker gray
    "/images/movies/movies (3).jpg", // Darker gray
    "/images/movies/movies (4).jpg", // Darker gray
    "/images/movies/movies (5).jpg", // Darker gray
    "/images/movies/movies (6).jpg", // Darker gray
  ];

  for (let i = 1; i <= count; i++) {
    const randomId = Math.floor(Math.random() * 1000); // Random ID
    const randomName = `Title of Movie # ${i}`; // Random name
    const randomBlurb = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.`; // Random blurb
    const randomCreator = `Creator ${i}`; // Random creator name
    const randomProgress = Math.floor(Math.random() * 100); // Random progress percentage
    const randomPhotoIndex = Math.floor(Math.random() * imageUrls.length); // Random index for image URL
    const randomPhoto = imageUrls[randomPhotoIndex]; // Random image URL from predefined array

    data.push({
      id: randomId,
      name: randomName,
      blurb: randomBlurb,
      progress: randomProgress,
      creator: {
        name: randomCreator,
        photo: `https://via.placeholder.com/150x150/3D3D3D/FFFFFF`, // Dark gray
      },
      photo: {
        ed: randomPhoto,
      },
      tags: ["Tag 1", "Tag 2"], // Random tags
    });
  }
  return data;
};

export default generateRandomData;


// move page to top on route change
export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};
