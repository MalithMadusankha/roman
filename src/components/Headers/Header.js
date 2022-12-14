// reactstrap components
import { Container, Row } from "reactstrap";

const Header = () => {
  return (
    <>
      <div className="header bg-gradient-danger pb-7 pt-5 pt-md-8">
        <Container fluid>
          <div className="header-body">
            {/* Card stats */}
            <Row></Row>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Header;
