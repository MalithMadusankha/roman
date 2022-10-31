import { useState } from "react";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import { Card, CardHeader, CardBody, Container, Row, Col } from "reactstrap";

// core components
import {
  chartOptions,
  parseOptions,
  chartExample1,
  chartExample2,
  chartExample3,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";

const Index = (props) => {
  const [activeNav, setActiveNav] = useState(1);
  const [chartExample1Data, setChartExample1Data] = useState("data1");
  const [chartExample3Data, setChartExample3Data] = useState("data1");

  if (window.Chart) {
    parseOptions(Chart, chartOptions());
  }

  const toggleNavs = (e, index) => {
    e.preventDefault();
    setActiveNav(index);
    setChartExample1Data("data" + index);
    setChartExample3Data("data" + index);
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="mb-5 mb-xl-0" xl="7">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Total Income</h2>
                  </div>
                  <div className="col text-right">
                    <div className="dropdown">
                      <select
                        class="btn btn-secondary dropdown-toggle btn-sm "
                        aria-label="Default select example"
                      >
                        <option className="dropdown-item " selected>
                          Year
                        </option>
                        <option className="dropdown-item" value="1">
                          2020
                        </option>
                        <option className="dropdown-item" value="2">
                          2021
                        </option>
                        <option className="dropdown-item" value="3">
                          2022
                        </option>
                      </select>
                    </div>
                    {/* <Nav className="justify-content-end" pills>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 1,
                          })}
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 1)}
                        >
                          <span className="d-none d-md-block">Month</span>
                          <span className="d-md-none">M</span>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                          className={classnames("py-2 px-3", {
                            active: activeNav === 2,
                          })}
                          data-toggle="tab"
                          href="#pablo"
                          onClick={(e) => toggleNavs(e, 2)}
                        >
                          <span className="d-none d-md-block">Week</span>
                          <span className="d-md-none">W</span>
                        </NavLink>
                      </NavItem>
                    </Nav> */}
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="5">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col-8">
                    <h6 className="text-uppercase text-muted ls-1 mb-1">
                      Performance
                    </h6>
                    <h2 className="mb-0">Package Incomes</h2>
                  </div>
                  <div className="col text-right">
                    <div className="dropdown">
                      <select
                        class="btn btn-secondary dropdown-toggle btn-sm "
                        aria-label="Default select example"
                      >
                        <option className="dropdown-item " selected>
                          Year
                        </option>
                        <option className="dropdown-item" value="1">
                          2020
                        </option>
                        <option className="dropdown-item" value="2">
                          2021
                        </option>
                        <option className="dropdown-item" value="3">
                          2022
                        </option>
                      </select>
                    </div>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col className="my-5 mb-xl-0">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h6 className="text-uppercase text-light ls-1 mb-1">
                      Overview
                    </h6>
                    <h2 className="text-white mb-0">Grow of Income</h2>
                  </div>
                  <div className="col text-right">
                    <div className="dropdown">
                      <select
                        class="btn btn-secondary dropdown-toggle btn-sm "
                        aria-label="Default select example"
                      >
                        <option className="dropdown-item " selected>
                          Year
                        </option>
                        <option className="dropdown-item" value="1">
                          2020
                        </option>
                        <option className="dropdown-item" value="2">
                          2021
                        </option>
                        <option className="dropdown-item" value="3">
                          2022
                        </option>
                      </select>
                    </div>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample3[chartExample3Data]}
                    options={chartExample3.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card className=" shadow bg-gradient-danger">
              <CardBody className="justify-content-center ">
                <h1 className="text-white text-center">
                  TOTAL ACTIVE USERS 250000
                </h1>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col>
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className=" mb-0">
                      Overall Users According To Membership
                    </h2>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Bar
                    data={chartExample2.data}
                    options={chartExample2.options}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="mb-5 mb-xl-0" xl="6">
            <Card className="bg-gradient-default shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col">
                    <h2 className="text-white mb-0">Reported users in</h2>
                  </div>
                  <div className="col text-right">
                    <div className="dropdown">
                      <select
                        class="btn btn-secondary dropdown-toggle btn-sm "
                        aria-label="Default select example"
                      >
                        <option className="dropdown-item " selected>
                          Year
                        </option>
                        <option className="dropdown-item" value="1">
                          2020
                        </option>
                        <option className="dropdown-item" value="2">
                          2021
                        </option>
                        <option className="dropdown-item" value="3">
                          2022
                        </option>
                      </select>
                    </div>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample1[chartExample1Data]}
                    options={chartExample1.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xl="6">
            <Card className="shadow">
              <CardHeader className="bg-transparent">
                <Row className="align-items-center">
                  <div className="col-9">
                    <h3 className="mb-0">Upgrade Trend Of Membership In</h3>
                  </div>
                  <div className="col text-right">
                    <div className="dropdown">
                      <select
                        class="btn btn-secondary dropdown-toggle btn-sm "
                        aria-label="Default select example"
                      >
                        <option className="dropdown-item " selected>
                          Year
                        </option>
                        <option className="dropdown-item" value="1">
                          2020
                        </option>
                        <option className="dropdown-item" value="2">
                          2021
                        </option>
                        <option className="dropdown-item" value="3">
                          2022
                        </option>
                      </select>
                    </div>
                  </div>
                </Row>
              </CardHeader>
              <CardBody>
                {/* Chart */}
                <div className="chart">
                  <Line
                    data={chartExample3[chartExample3Data]}
                    options={chartExample3.options}
                    getDatasetAtEvent={(e) => console.log(e)}
                  />
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Index;
