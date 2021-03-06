import React from "react";
import App from "./components/tensorflow/App"

// reactstrap components
import {
  Button,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import ExamplesNavbar from "./components/Navbars/ExamplesNavbar.js";
import LandingPageHeader from "./components/Headers/LandingPageHeader.js";
import DefaultFooter from "./components/Footers/DefaultFooter.js";

function LandingPage() {
  const [firstFocus, setFirstFocus] = React.useState(false);
  const [lastFocus, setLastFocus] = React.useState(false);
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("landing-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <div className="wrapper">
        <LandingPageHeader />
        <div className="section section-about-us">
          <Container>
            
              <div
                    className="background-image"
                    style={{
                      backgroundImage:
                        "url(" + require("./assets/img/logotitle.png") + ")"
                    }}
                  ></div>
                  
            <Row>
                            <h2 className="ml-auto mr-auto text-center" md="8">
                Try our image detection app.</h2>
            </Row>
            <Row style={{justifyContent: "center"}}>
              
                <App />
                <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
            </Row>
            <Row>
            <Row><div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("./assets/img/logotitle.png") + ")"
                    }}
                  ></div></Row>
              <Col className="ml-auto mr-auto text-center" md="8">
                <h2 className="title">Who are we?</h2>
                <h5 className="description">
                ObjectivEyes is a smart phone application designed to enable flood victims to
                 catalogue the damaged contents of their home, and offer a meaningful contribution
                  in the post-flood claimancy process.
                </h5>
              </Col>
            </Row>
            <div className="separator separator-primary"></div>
            <div className="section-story-overview">
              <Row>
                <Col md="6">
                  <div
                    className="image-container image-left"
                    style={{
                      backgroundImage:
                        "url(" + require("./assets/img/floodbg4.JPEG") + ")"
                    }}
                  >
                    <p className="blockquote blockquote-info">
                      "What you need after a traumatic event is people you can trust." <br></br>
                      <br></br>
                      <small>-our partner</small>
                    </p>
                  </div>
                  <div
                    className="image-container"
                    style={{
                      backgroundImage:
                        "url(" + require("./assets/img/floodbg3.JPEG") + ")"
                    }}
                  ></div>
                </Col>
                <Col md="5">
                  <div
                    className="image-container image-right"
                    style={{
                      backgroundImage:
                        "url(" + require("./assets/img/floodbg1.JPEG") + ")"
                    }}
                  ></div>
                  <h3>
                    We use machine learning to make cataloguing your possessions
                    smart, fast and easy.
                  </h3>
                  <p>
                  When a flood hits your home, you lose everything you own. 
                  Your walls, your floor, every piece of soft furnishing: it all must 
                  be thrown out. There is an unquantifiable burden on the homeowner to
                   restore their property and possessions. We get that, We want to help.

                  </p>
                  <p>
                  Our app is designed to enable flood victims to catalogue the damaged
                   contents of their home, link them into the recovery services they need, 
                   and offer a meaningful contribution in taking their homes back.
                   It’s as simple as, you take an image or video of your room, drawer, or object,
                    and object detection will pick up everything it can. For anything that’s missed, 
                    you can input this in manually. This list is sent straight to your loss adjuster
                    on day 1, so you know your recovery is underway.


                  </p>
                  <p>
                    We want to get rid of that waiting period post-flood, and let you take your
                    recovery into your own hands. We give you all the tools you need to be independent,
                    when you need it. 
                  </p>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <h2 className="title">Features</h2>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid"
                      src={require("./assets/img/icon3.png")}
                    ></img>
                    <h4 className="title">Smart Cataloguing</h4>
                      <p className="description">
                      Object detection finds your objects for you. It speeds up and assists process so it is less laborious.{" "}
                      
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid"
                      src={require("./assets/img/icon2.png")}
                    ></img>
                    <h4 className="title">Transparency</h4>
                    <p className="description">
                    In-app display of valuations so you know exactly what is contributing to your final reimbursement.{" "}
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid"
                      src={require("./assets/img/icon6.png")}
                    ></img>
                    <h4 className="title">Restoration options</h4>
                    <p className="description">
                    Links you to the tools needed to manage your recovery. For example, soft furnishings restoration for emotionally significant objects such as photos and toys.{" "}
                    </p>
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-team text-center">
          <Container>
            <div className="team">
              <Row>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid"
                      src={require("./assets/img/icon5.png")}
                    ></img>
                    <h4 className="title">Listed output</h4>
                    <p className="description">
                    Objective information is compiled and sent straight to your adjuster so a value can be made with all information present.{" "}
                      
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid"
                      src={require("./assets/img/icon1.png")}
                    ></img>
                    <h4 className="title">Flood advice</h4>
                    <p className="description">
                    Tips for managing humidity and cleaning before company intervention.{" "}
                    </p>
                    
                  </div>
                </Col>
                <Col md="4">
                  <div className="team-player">
                    <img
                      alt="..."
                      className="rounded-circle img-fluid"
                      src={require("./assets/img/icon4.png")}
                    ></img>
                    <h4 className="title">Community help</h4>
                    <p className="description">
                    Request local help in the event you require assistance in taking your images.{" "}
                      {/* <a href="#pablo" onClick={e => e.preventDefault()}>
                        links
                      </a>{" "}
                      for people to be able to follow them outside the site. */}
                    </p>
                    {/* <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="https://google.co.uk"
                      
                    >
                      <i className="fab fa-google-plus"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-youtube"></i>
                    </Button>
                    <Button
                      className="btn-icon btn-round"
                      color="info"
                      href="#pablo"
                      onClick={e => e.preventDefault()}
                    >
                      <i className="fab fa-twitter"></i>
                    </Button> */}
                  </div>
                </Col>
              </Row>
            </div>
          </Container>
        </div>
        <div className="section section-contact-us text-center">
          <Container>
            <h2 className="title">Get in touch.</h2>
            <p className="description">Queries, comments, feedback - your opinions are very important to us.</p>
            <Row>
              <Col className="text-center ml-auto mr-auto" lg="6" md="8">
                <InputGroup
                  className={
                    "input-lg" + (firstFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons users_circle-08"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="First Name..."
                    type="text"
                    onFocus={() => setFirstFocus(true)}
                    onBlur={() => setFirstFocus(false)}
                  ></Input>
                </InputGroup>
                <InputGroup
                  className={
                    "input-lg" + (lastFocus ? " input-group-focus" : "")
                  }
                >
                  <InputGroupAddon addonType="prepend">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_email-85"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                  <Input
                    placeholder="Email..."
                    type="text"
                    onFocus={() => setLastFocus(true)}
                    onBlur={() => setLastFocus(false)}
                  ></Input>
                </InputGroup>
                <div className="textarea-container">
                  <Input
                    cols="80"
                    name="name"
                    placeholder="Type a message..."
                    rows="4"
                    type="textarea"
                  ></Input>
                </div>
                <div className="send-button">
                  <Button
                    block
                    className="btn-round"
                    color="info"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                    size="lg"
                  >
                    Send Message
                  </Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <DefaultFooter />
      </div>
    </>
  );
}

export default LandingPage;
