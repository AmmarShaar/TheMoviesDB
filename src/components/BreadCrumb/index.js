import { Link } from "react-router-dom";

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

export default BreadCrumb;
