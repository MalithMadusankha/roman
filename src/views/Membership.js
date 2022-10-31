// reactstrap components
import {
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Card,
  Input,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Nav,
  CardBody,
} from "reactstrap";
import classnames from "classnames";
// core components
import Header from "components/Headers/Header.js";
import { useState } from "react";
import EditableTable from "components/ui/EditableTable";
import ImageCard from "components/ui/ImageCard";

const Membership = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [members, setMembers] = useState([
    { type: "new", name: "malith", status: "pending" },
    { type: "new", name: "janith", status: "complete" },
    { type: "new", name: "malith", status: "janith" },
  ]);
  const toggle = (tab) => {
    if (activeTab !== tab) {
      setActiveTab(tab);
    }
  };
  return (
    <>
      <Header />
      {/* Page content */}
      <Container className="mt--7" fluid>
        {/* Table */}
        <Row>
          <div className="col">
            <Card className="shadow px-3 pt-4">
              <div>
                <Nav tabs>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "1",
                      })}
                      onClick={() => {
                        toggle("1");
                      }}
                    >
                      Membership Levels
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink
                      className={classnames({
                        active: activeTab === "2",
                      })}
                      onClick={() => {
                        toggle("2");
                      }}
                    >
                      Upgrade User Levels
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <EditableTable />
                      </Col>
                    </Row>
                  </TabPane>
                  <TabPane tabId="2">
                    <Row className="mt-5">
                      <Col sm="12">
                        <div className="d-flex flex-row-reverse">
                          <div className="dropdown mx-2">
                            <select
                              class="btn btn-primary dropdown-toggle btn-sm "
                              aria-label="Default select example"
                            >
                              <option
                                className="dropdown-item text-white"
                                selected
                              >
                                Select Member Level
                              </option>
                              <option
                                className="dropdown-item text-white"
                                value="1"
                              >
                                Level 1
                              </option>
                              <option
                                className="dropdown-item text-white"
                                value="2"
                              >
                                Level 2
                              </option>
                              <option
                                className="dropdown-item text-white"
                                value="3"
                              >
                                Level 3
                              </option>
                            </select>
                          </div>
                          <div className="dropdown mx-2">
                            <select
                              class="btn btn-info dropdown-toggle btn-sm "
                              aria-label="Default select example"
                            >
                              <option
                                className="dropdown-item text-white"
                                selected
                              >
                                Select Member Scince
                              </option>
                              <option
                                className="dropdown-item text-white"
                                value="1"
                              >
                                3 Months
                              </option>
                              <option
                                className="dropdown-item text-white"
                                value="2"
                              >
                                6 Months
                              </option>
                              <option
                                className="dropdown-item text-white"
                                value="3"
                              >
                                9 Months
                              </option>
                            </select>
                          </div>
                        </div>
                        <Row className="mt-5">
                          <ImageCard />
                        </Row>
                        <div className="my-5 mx-3">
                          <nav aria-label="...">
                            <Pagination
                              className="pagination justify-content-end mb-0"
                              listClassName="justify-content-end mb-0"
                            >
                              <PaginationItem className="disabled">
                                <PaginationLink
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                  tabIndex="-1"
                                >
                                  <i className="fas fa-angle-left" />
                                  <span className="sr-only">Previous</span>
                                </PaginationLink>
                              </PaginationItem>
                              <PaginationItem className="active">
                                <PaginationLink
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  1
                                </PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  2 <span className="sr-only">(current)</span>
                                </PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  3
                                </PaginationLink>
                              </PaginationItem>
                              <PaginationItem>
                                <PaginationLink
                                  href="#pablo"
                                  onClick={(e) => e.preventDefault()}
                                >
                                  <i className="fas fa-angle-right" />
                                  <span className="sr-only">Next</span>
                                </PaginationLink>
                              </PaginationItem>
                            </Pagination>
                          </nav>
                        </div>
                      </Col>
                    </Row>
                  </TabPane>
                </TabContent>
              </div>
            </Card>
          </div>
        </Row>
      </Container>
    </>
  );
};

export default Membership;
