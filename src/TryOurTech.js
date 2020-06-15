import React from "react";

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
                <Row>
                    <Col className="ml-auto mr-auto text-center" md="8">
                        <h2 className="title">ObjectivEyes</h2>
                        <h5 className="description">
                            <div>Please feel free to try out our image detection app.</div>
                            <div>Please load the object detection model first, using the button below. It may take a few seconds to download; but, once it's done, you can upload an image from your device and see how machine learning can help you.
                            </div>
                        </h5>
                        <Row style={{ justifyContent: "center" }}>
                            <App />
                            <script src="https://cdn.jsdelivr.net/npm/@tensorflow/tfjs-backend-webgl"></script>
                        </Row>
                    </Col>
                </Row>
            </div>
            <DefaultFooter />
        </>
    );
}

export default LandingPage;
