import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { Button } from "react-bootstrap";

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    function handleScroll() {
      if (window.scrollY === 0) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Button
      className={showButton ? "scroll-top" : "d-none"}
      style={{ zIndex: "1000000" }}
      variant="primary"
      onClick={() => scrollToTop()}
    >
      <FontAwesomeIcon icon={faAngleUp} />
    </Button>
  );
}
