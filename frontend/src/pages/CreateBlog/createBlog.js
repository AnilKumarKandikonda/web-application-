import React, { useRef, useState } from "react";
import { Container, Row, Col, Input, Card } from "reactstrap";
import ImgUpload from "../../components/Blog/ImgUpload";
import Aux from '../../hoc/Auxilliary/Auxilliary';

const CreateBlog = () => {
    const [userImage, setUserImage] = useState(null);
    const photoUpload = (e) => {
        e.preventDefault();
        const reader = new FileReader();
        const file = e.target.files[0];
        setUserImage(file);
    };
    return (
        <Aux>
            <Container className="bg-light">
                <div className="p-3 projectb-createblog-maincontainer">
                    <div className="projectb-createblog-header">
                        <button className="btn btn-soft-primary p-1">Preview</button>
                        <button className="btn btn-soft-dark p-1">Publish</button>
                    </div>

                    <Row className="mt-2 ">
                        <Col sm={6}>
                            <Card className="p-3 projectb-general-boxshadow">
                                <div className="projectb-blog-imagecard">
                                    <div>
                                        <ImgUpload onChange={photoUpload} src={""} />
                                    </div>
                                    <div>
                                        notes regarding how to upload the image with dimensions of min 200*200
                                    </div>
                                </div>
                            </Card>
                        </Col>
                        <Col sm={6}>
                            <Card className="p-3 projectb-general-boxshadow">
                                <div className="mb-3">
                                    <label
                                        htmlFor="blognameinput"
                                        className="form-label"
                                    >
                                        Name
                                    </label>
                                    <Input
                                        type="text"
                                        className="form-control projectb-general-inputbox"
                                        id="blognameinput"
                                        placeholder="Enter Your Name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label
                                        htmlFor="blogPositioninput"
                                        className="form-label"
                                    >
                                        Position
                                    </label>
                                    <Input
                                        type="text"
                                        className="form-control projectb-general-inputbox"
                                        id="blogPositioninput"
                                        placeholder="Enter Position"
                                    />
                                </div>
                                <div className="mb-3">
                                    <div className="form-check">
                                        <input
                                            className="form-check-input projectb-blog-checkbox"
                                            type="checkbox"

                                            id="flexCheckboxblogDefault"
                                        />
                                        <label
                                            className="form-check-label"
                                            htmlFor="flexCheckboxblogDefault"
                                            style={{ fontSize: '18px' }}
                                        >
                                            &nbsp; Divider ____
                                        </label>

                                    </div>
                                </div>

                            </Card>
                        </Col>

                    </Row>

                </div>
            </Container>
            <Container className="bg-light mt-2">
                <Card className="p-3 projectb-general-boxshadow projectb-general-boxmedium">
                    <h2>Select Links</h2>
                    <div className="p-2 bg-dark">
                        
                    </div>
                </Card>
            </Container>
        </Aux>

    )
}

export default CreateBlog;