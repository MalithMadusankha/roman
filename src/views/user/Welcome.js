import { Link } from "react-router-dom";
import { Row } from "reactstrap";
import videoP from "../../assets/video/bg-video.mp4";
const Welcome = () => {
  return (
    <>
      <div className="mt--5">
        <video
          style={{
            position: "absolute",
            zIndex: "-1",
            left: 0,
            width: "100%",
            height: "100vh",
            objectFit: "cover",
            opacity: 0.8,
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
                  to="auth/login"
                >
                  <i class="bx bx-right-arrow-circle bx-fade-left text-white"></i>{" "}
                  Continue
                </Link>
              </div>
            </div>
          </Row>
        </div>
      </div>
    </>
  );
};

export default Welcome;
