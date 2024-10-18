import React from "react";
import { Button } from "reactstrap";
import Aux from "../../hoc/Auxilliary/Auxilliary";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

const ScrolltoTop = ({ postJobPages, location }) => {
  const navigate = useNavigate();
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    const mybutton = document.getElementById("back-to-top");
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <Aux>
      {postJobPages.indexOf(location) > 0 && <button className="btn btn-primary projectb-scrolltop-postjob" type="button"
        onClick={() => navigate("/postjob")}
      >
        Post Job{" "}<FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button>}
      <Button id="back-to-top" className="p-0" onClick={scrollTop}>
        <i className="mdi mdi-arrow-up"></i>
      </Button>
    </Aux>

  );
};

export default ScrolltoTop;
