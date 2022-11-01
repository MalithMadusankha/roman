import { Link } from "react-router-dom";
import { Container, Row } from "reactstrap";
import videoP from "../../assets/video/bg-video.mp4";
const Welcome = () => {
  return (
    <>
      <Container>
        <Row className="justify-content-center">
          <video
            style={{
              position: "absolute",
              zIndex: "-1",
              left: 0,
              width: "100%",
              height: "100vh",
              objectFit: "cover",
              opacity: 0.8,
              margin: 0,
              padding: 0,
            }}
            loop
            autoPlay
            muted
          >
            <source src={videoP} type="video/mp4" />
          </video>
          <div className="text-center" style={{ paddingTop: "25vh" }}>
            <Row className=" ">
              <div className="m-auto p-5">
                <h1 className="text-white" style={{ fontSize: 36 }}>
                  Welcome to RomanzU Admin Protal
                </h1>
                <div className="mt-5">
                  <Link
                    className="h1 placeholder-glow text-white"
                    to="/auth/login"
                  >
                    <i className="bx bx-right-arrow-circle bx-fade-left text-white"></i>{" "}
                    Continue
                  </Link>
                </div>
              </div>
            </Row>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Welcome;
