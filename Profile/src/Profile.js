import React from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Form,
  Tab,
  ListGroup,
  Table,
} from "react-bootstrap";
import "./Profile.css";
import { useState } from "react";

const userData = {
  firstName: "Sri Harsha",
  lastName: "Dhanenkula",
  email: "sriharshadhanenkula@gmail.com",
  phone: "5188949800",
  address: "1234 Main St",
  city: "San Jose",
  state: "CA",
  zip: "95112",
  password: "password",
  rewardPoints: 100,
};

function Profile() {
  const [PersonalEditButton, setPersonalEditButton] = useState(false);
  const [AddressEditButton, setAddressEditButton] = useState(false);

  const onClickPersonalDetailsButton = () => {
    setPersonalEditButton(!PersonalEditButton);
  };

  const onClickSavePersonalDetails = () => {
    setPersonalEditButton(!PersonalEditButton);
  };

  const onClickAddressDetailsButton = () => {
    setAddressEditButton(!AddressEditButton);
  };

  const onClickSaveAddressDetails = () => {
    setAddressEditButton(!AddressEditButton);
  };

  const onClickSavePaymentDetails = () => {
    console.log("Payment Details Saved");
  };

  return (
    <Container>
      <Row className="cover-image"></Row>
      <div className="profile-container">
        <div className="profile-card"></div>
        <Col className=" mx-5">
          <h1>Hello! Sri Harsha</h1>
          <p>Update your details</p>
        </Col>
      </div>

      <Tab.Container id="list-group-tabs-example" defaultActiveKey="#link1">
        <Row className="my-4 mx-3">
          <Col sm={3}>
            <ListGroup>
              <ListGroup.Item action href="#link1">
                Personal details
              </ListGroup.Item>
              <ListGroup.Item action href="#link2">
                Address
              </ListGroup.Item>
              <ListGroup.Item action href="#link3">
                Change Password
              </ListGroup.Item>
              <ListGroup.Item action href="#link4">
                Reward Points
              </ListGroup.Item>
              <ListGroup.Item action href="#link5">
                Order History
              </ListGroup.Item>
              <ListGroup.Item action href="#link6">
                Payment Methods
              </ListGroup.Item>
              <ListGroup.Item action href="#link7">
                Need Help?
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col sm={8}>
            <Tab.Content>
              <Tab.Pane eventKey="#link1">
                <h3>Personal Details</h3>
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label-headings">
                      First Name:
                    </Form.Label>
                    {PersonalEditButton ? (
                      <Form.Control
                        type="text"
                        placeholder="Enter First Name"
                        value={userData.firstName}
                      />
                    ) : (
                      <p className="label-text">{userData.firstName}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label-headings">
                      Last Name:
                    </Form.Label>
                    {PersonalEditButton ? (
                      <Form.Control
                        type="text"
                        placeholder="Enter Last Name"
                        value={userData.lastName}
                      />
                    ) : (
                      <p className="label-text">{userData.lastName}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label-headings">Email:</Form.Label>
                    {PersonalEditButton ? (
                      <Form.Control
                        type="email"
                        placeholder="Enter Email"
                        value={userData.email}
                      />
                    ) : (
                      <p className="label-text">{userData.email}</p>
                    )}
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label-headings">Phone:</Form.Label>
                    {PersonalEditButton ? (
                      <Form.Control
                        type="text"
                        placeholder="Enter Phone"
                        value={userData.phone}
                      />
                    ) : (
                      <p className="label-text">{userData.phone}</p>
                    )}
                  </Form.Group>
                </Form>
                {PersonalEditButton ? (
                  <Button
                    variant="outline-dark"
                    onClick={onClickSavePersonalDetails}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="outline-dark"
                    onClick={onClickPersonalDetailsButton}
                  >
                    Edit
                  </Button>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="#link2">
                {AddressEditButton ? (
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label-headings">
                        Address
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Address"
                        value={userData.address}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label-headings">City</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter City"
                        value={userData.city}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label-headings">State</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter State"
                        value={userData.state}
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label-headings">Zip</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Zip"
                        value={userData.zip}
                      />
                    </Form.Group>
                  </Form>
                ) : (
                  <>
                    <p className="label-headings">Address</p>
                    <p className="label-headings">
                      Street:{" "}
                      <span className="label-text">{userData.address}</span>
                    </p>
                    <p className="label-headings">
                      City: <span className="label-text">{userData.city}</span>
                    </p>
                    <p className="label-headings">
                      State:{" "}
                      <span className="label-text">{userData.state}</span>
                    </p>
                    <p className="label-headings">
                      Zip: <span className="label-text">{userData.zip}</span>
                    </p>
                  </>
                )}
                {AddressEditButton ? (
                  <Button
                    variant="outline-dark"
                    onClick={onClickSaveAddressDetails}
                  >
                    Save
                  </Button>
                ) : (
                  <Button
                    variant="outline-dark"
                    onClick={onClickAddressDetailsButton}
                  >
                    Edit
                  </Button>
                )}
              </Tab.Pane>
              <Tab.Pane eventKey="#link3">
                <Form>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label-headings">
                      New Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                  <Form.Group controlId="formBasicEmail">
                    <Form.Label className="label-headings">
                      Confirm Password
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Enter Password"
                    />
                  </Form.Group>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="#link4">
                <p className="label-headings">Reward Points</p>
                <p className="label-headings">
                  Points:{" "}
                  <span className="label-text">{userData.rewardPoints}</span>
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link5">
                <p className="label-headings">Order History</p>
                <p className="label-headings">
                  <Table striped bordered hover>
                    <thead>
                      <tr>
                        <th>Order ID</th>
                        <th>Order Date</th>
                        <th>Order Status</th>
                        <th>Order Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>13/12/2022</td>
                        <td>Delivered</td>
                        <td>$120</td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>15/12/2022</td>
                        <td>Delivered</td>
                        <td>$140</td>
                      </tr>
                      <tr>
                        <td>3</td>
                        <td>20/12/2022</td>
                        <td>Delivered</td>
                        <td>$160</td>
                      </tr>
                    </tbody>
                  </Table>
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link6">
                <p className="label-headings">Payment Methods</p>
                <p className="label-headings">
                  <Form>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label-headings">
                        Card Number
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Card Number"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label-headings">
                        Expiry Date
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Expiry Date"
                      />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label-headings">CVV</Form.Label>
                      <Form.Control type="text" placeholder="Enter CVV" />
                    </Form.Group>
                    <Form.Group controlId="formBasicEmail">
                      <Form.Label className="label-headings">
                        Card Holder Name
                      </Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Enter Card Holder Name"
                      />
                    </Form.Group>
                    <Button
                      variant="outline-dark"
                      onClick={onClickSavePaymentDetails}
                    >
                      Save
                    </Button>
                  </Form>
                </p>
              </Tab.Pane>
              <Tab.Pane eventKey="#link7">
                <p className="label-headings">Need Help</p>
                <p className="label-headings">
                  Contact: <span className="label-text">nosh@gmail.com</span>
                </p>
              </Tab.Pane>
            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
    </Container>
  );
}

export default Profile;
