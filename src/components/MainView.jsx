import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardHeader,
  CardTitle,
  CardText,
  Progress
} from "reactstrap";
import { SocialIcon } from "react-social-icons";
import me from "../me.jpg";

const MainView = () => {
  const pickColor = () => {
    let colors = ["success", "info", "warning", "danger", "info"],
      index = Math.floor(Math.random() * Math.floor(colors.length - 1));
    return colors[index];
  };

  return (
    <div>
      <Container>
        <Row>
          <Col xs="5">
            <Row style={{ marginRight: "0.5em", marginLeft: "0.25em" }}>
              <Card style={{ marginTop: "2em" }}>
                <CardImg
                  style={{
                    width: "70%",
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "2em"
                  }}
                  top
                  width="50%"
                  src={me}
                />
                <CardBody>
                  <CardTitle>
                    <strong>Who am I?</strong>
                  </CardTitle>
                  <CardText>
                    Software Engineer who loves <i>innovation</i>,{" "}
                    <i>Javascript</i>, <i>Python</i>, and <i>music</i>
                  </CardText>
                  <CardText>
                    <SocialIcon
                      style={{ width: "2em" }}
                      url="https://www.linkedin.com/in/pmkorianski/"
                    />
                    <SocialIcon
                      style={{ width: "2em", marginLeft: "0.5em" }}
                      url="https://twitter.com/patkorianski"
                    />
                    <SocialIcon
                      style={{ width: "2em", marginLeft: "0.5em" }}
                      url="https://github.com/pkorianski"
                    />
                  </CardText>
                </CardBody>
              </Card>
            </Row>
            <Row style={{ marginRight: "0.5em", marginLeft: "0.25em" }}>
              <Card style={{ marginTop: "2em", width: "100%" }}>
                <CardHeader>Top Skills (10 yr scale)</CardHeader>
                <CardBody>
                  <CardTitle>
                    <strong>Software Engineer, SessionM</strong>
                  </CardTitle>
                  <div className="progress-bars">
                    <div className="skill-bar">
                      <div className="text-left">Javascript</div>
                      <Progress
                        color={pickColor()}
                        value={String((2 / 10) * 100)}
                      >
                        2yrs
                      </Progress>
                    </div>
                    <div className="skill-bar">
                      <div className="text-left">React</div>
                      <Progress
                        color={pickColor()}
                        value={String((2 / 10) * 100)}
                      >
                        2yrs
                      </Progress>
                    </div>
                  </div>
                </CardBody>
              </Card>
            </Row>
          </Col>
          <Col xs="7">
            <Row style={{ marginRight: "0.25em" }}>
              <Card style={{ marginTop: "2em", width: "100%" }}>
                <CardHeader>Education</CardHeader>
                <CardBody>
                  <CardTitle>
                    <strong>University of Connecticut</strong>
                  </CardTitle>
                  <CardText>
                    <i>2014-2017</i>
                  </CardText>
                  <CardText>Computer Science / Engineering Mgmt</CardText>
                  <CardTitle>
                    <strong>Nashua Community College</strong>
                  </CardTitle>
                  <CardText>
                    <i>2012-2014</i>
                  </CardText>
                  <CardText>Liberal Arts (Business)</CardText>
                </CardBody>
              </Card>
            </Row>
            <Row style={{ marginRight: "0.25em" }}>
              <Card style={{ marginTop: "2em", width: "100%" }}>
                <CardHeader>Experience</CardHeader>
                <CardBody>
                  <CardTitle>
                    <strong>Software Engineer, SessionM</strong>
                  </CardTitle>
                  <CardText>
                    <i>2019-Present</i>
                  </CardText>
                  <CardText>
                    <ul>
                      <li>
                        Architected & engineered new integrations which includes
                        social listening, Alexa skills, and an incoming Loyalty
                        wallet (Facebook)
                      </li>
                      <li>
                        Developed data simulation scripts in Python to use for
                        demoing purposes which resulted in helping build our new
                        Reporting tool
                      </li>
                      <li>
                        Utilized React, Sass, and HTML to further develop new UI
                        solutions into the SessionM platform
                      </li>
                      <li>
                        Learned and used Ruby, Ruby-on-Rails, AWS, Grafana,
                        RabbitMQ, C# and SQL to fix bugs and enhance SessionM’s
                        architecture
                      </li>
                    </ul>
                  </CardText>
                  <CardTitle>
                    <strong>Software Engineer, SessionM</strong>
                  </CardTitle>
                  <CardText>
                    <i>2019-Present</i>
                  </CardText>
                  <CardText>
                    <ul>
                      <li>
                        Architected & engineered new integrations which includes
                        social listening, Alexa skills, and an incoming Loyalty
                        wallet (Facebook)
                      </li>
                      <li>
                        Developed data simulation scripts in Python to use for
                        demoing purposes which resulted in helping build our new
                        Reporting tool
                      </li>
                      <li>
                        Utilized React, Sass, and HTML to further develop new UI
                        solutions into the SessionM platform
                      </li>
                      <li>
                        Learned and used Ruby, Ruby-on-Rails, AWS, Grafana,
                        RabbitMQ, C# and SQL to fix bugs and enhance SessionM’s
                        architecture
                      </li>
                    </ul>
                  </CardText>
                </CardBody>
              </Card>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MainView;
