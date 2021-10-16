import { Link } from "react-router-dom";
import PropTypes from "prop-types";
//Styles
import { Wrapper, Content } from "./BreadCrumb.style";

const BreadCrumb = ({ MovieTitle }) => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <span>Home</span>
        </Link>
        <span>|</span>
        <span>{MovieTitle}</span>
      </Content>
    </Wrapper>
  );
};

BreadCrumb.propTypes = {
  MovieTitle: PropTypes.string,
};

export default BreadCrumb;
