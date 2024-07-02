import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking </span> app
          </h1>
          <p>
            I'm baby biodiesel hot chicken dreamcatcher selvage sus vinyl,
            austin small batch jean shorts waistcoat readymade kombucha
            farm-to-table keffiyeh. Vegan activated charcoal gorpcore fanny pack
            subway tile. Gastropub farm-to-table same cloud bread iceland hella
            organic drinking vinegar meggings flannel kinfolk fashion axe
            listicle. Big mood shabby chic cred street art jianbing same
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login/Demo user
          </Link>
        </div>
        <img src={main} alt="Job Hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
