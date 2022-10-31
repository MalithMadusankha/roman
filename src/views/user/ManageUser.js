// reactstrap components
import {
  Badge,
  TabContent,
  TabPane,
  NavItem,
  NavLink,
  Card,
  Button,
  Col,
  Pagination,
  PaginationItem,
  PaginationLink,
  Table,
  Container,
  Row,
  Nav,
} from "reactstrap";
import classnames from "classnames";
// core components
import Header from "components/Headers/Header.js";
import { useState } from "react";

const ManageUser = () => {
  const [activeTab, setActiveTab] = useState("1");
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
                      User Requests
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
                      Reported Users
                    </NavLink>
                  </NavItem>
                </Nav>
                <TabContent activeTab={activeTab}>
                  <TabPane tabId="1">
                    <Row>
                      <Col sm="12">
                        <Table
                          className="align-items-center table-flush mt-5"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Type</th>
                              <th scope="col">Name</th>
                              <th scope="col">Status</th>
                              <th scope="col" />
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <th scope="row">New User</th>
                              <td>Janith Madusanka</td>
                              <td>
                                <Badge
                                  color=""
                                  className="badge-dot mr-4 px-2 text-white bg-warning"
                                >
                                  Duplicate Email
                                </Badge>
                              </td>
                              <td>
                                <Button size="sm" color="success" disabled>
                                  Approve
                                </Button>
                              </td>
                              <td>
                                <Button size="sm" color="danger" outline>
                                  Decline
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">New User</th>
                              <td>Ranil Wikramasinghe</td>
                              <td>
                                <Badge
                                  color=""
                                  className="badge-dot mr-4 px-2 text-white bg-info"
                                >
                                  No Duplicate
                                </Badge>
                              </td>
                              <td>
                                <Button size="sm" color="success">
                                  Approve
                                </Button>
                              </td>
                              <td>
                                <Button size="sm" color="danger" outline>
                                  Decline
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">New User</th>
                              <td>Malith Madusanka</td>
                              <td>
                                <Badge
                                  color=""
                                  className="badge-dot mr-4 px-2 text-white bg-info"
                                >
                                  No Duplicate
                                </Badge>
                              </td>
                              <td>
                                <Button size="sm" color="success">
                                  Approve
                                </Button>
                              </td>
                              <td>
                                <Button size="sm" color="danger" outline>
                                  Decline
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <th scope="row">New User</th>
                              <td>Gotabaya Rajapaksha</td>
                              <td>
                                <Badge
                                  color=""
                                  className="badge-dot mr-4 px-2 text-white bg-warning"
                                >
                                  Duplicate Email
                                </Badge>
                              </td>
                              <td>
                                <Button size="sm" color="success" disabled>
                                  Approve
                                </Button>
                              </td>
                              <td>
                                <Button size="sm" color="danger" outline>
                                  Decline
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
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
                  <TabPane tabId="2">
                    <Row>
                      <Col sm="12">
                        <Table
                          className="align-items-center table-flush mt-5"
                          responsive
                        >
                          <thead className="thead-light">
                            <tr>
                              <th scope="col">Name</th>
                              <th scope="col">No Of Reported Times</th>
                              <th scope="col" />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>Janith Madusanka</td>
                              <td>10</td>
                              <td>
                                <Button size="sm" color="danger">
                                  Renove
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>Ranil Wikramasinghe</td>
                              <td>15</td>
                              <td>
                                <Button size="sm" color="danger">
                                  Remove
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>Malith Madusanka</td>
                              <td>5</td>
                              <td>
                                <Button size="sm" color="danger">
                                  Remove
                                </Button>
                              </td>
                            </tr>
                            <tr>
                              <td>Gotabaya Rajapaksha</td>
                              <td>20</td>
                              <td>
                                <Button size="sm" color="danger">
                                  Remove
                                </Button>
                              </td>
                            </tr>
                          </tbody>
                        </Table>
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

export default ManageUser;
