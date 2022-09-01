import { useEffect, useState } from "react";
import Head from "next/head";
import Presentation from "../components/Presentation";
import { getSortedPostsData } from "../lib/posts";

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({}) {
  const [initPresentation, setInitPresentation] = useState(false);
  const [profileImageLoaded, setProfileImageLoaded] = useState(false);
  const handleImageLoaded = () => {
    setProfileImageLoaded(true);
  };

  useEffect(() => {
    const checkIfVisible = () => {
      if (document.hidden) return;
      setInitPresentation(true);
      document.removeEventListener("visibilitychange", checkIfVisible);
    };
    if (document.visibilityState === "visible")
      return setInitPresentation(true);
    document.addEventListener("visibilitychange", checkIfVisible);
  }, []);

  return (
    <div className="content">
      <Head>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, user-scalable=no"
        />
      </Head>
      <Presentation
        init={initPresentation && profileImageLoaded}
        setProfileImageLoaded={handleImageLoaded}
      />
    </div>
  );
}
