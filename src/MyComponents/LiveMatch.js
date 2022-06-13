import React from "react";
import axios from "axios";

import { Card, Col, Container, Row } from "react-bootstrap";

const liveAPIURL =
  "https://api.cricapi.com/v1/currentMatches?apikey=7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f&offset=0";

export const LiveMatch = () => {
  let myStyle = {
    // width: "30%",
    // borderRadius: "25px",
    border: "0px solid",
    // margin: "5vh",
    // height: "7vh",
    // padding: "3vh",
    // fontWeight: "bold",
    // backgroundColor: "rgba(255,0,255)",
  };

  let colStyle = {
    // width: "30%",
    borderRadius: "25px",
    border: "2px solid",
    margin: "5vh",
    // height: "7vh",
    padding: "3vh",
    // fontWeight: "bold",
    backgroundColor: "1F4690",
  };

  const [liveApi, setLiveApi] = React.useState("");

  React.useEffect(() => {
    axios.get(liveAPIURL).then((response) => {
      setLiveApi(response.data);
    });
  }, []);

  if (!liveApi) {
    return null;
  } else {
    console.log(liveApi);
  }

  return (
    <>
      <Container>
        <Card style={myStyle}>
          <Row>
            <Col style={colStyle}>
              <Card.Body>
                <h2>{liveApi.data[0].date}</h2>
                <p>{liveApi.data[0].name}</p>

                <h5>{liveApi.data[0]["score"][0]["inning"].slice(0, -1)}</h5>
                <p>
                  {liveApi.data[0]["score"][0]["r"]}/
                  {liveApi.data[0]["score"][0]["w"]} -{" "}
                  {liveApi.data[0]["score"][0]["o"]} overs
                </p>
                <h5>{liveApi.data[0]["score"][1]["inning"].slice(0, -1)}</h5>

                <p>
                  {liveApi.data[0]["score"][1]["r"]}/
                  {liveApi.data[0]["score"][1]["w"]} -{" "}
                  {liveApi.data[0]["score"][1]["o"]} overs
                </p>
                <h3>
                  {" "}
                  <h4>{liveApi.data[0]["status"]}</h4>
                </h3>
              </Card.Body>
            </Col>
            <Col style={colStyle}>
              <Card.Body>
                <h2>{liveApi.data[1].date}</h2>
                <p>{liveApi.data[1].name}</p>
                <small>{liveApi.data[1].venue}</small>
                <h5>{liveApi.data[1]["score"][0]["inning"].slice(0, -1)}</h5>
                <p>
                  {liveApi.data[1]["score"][0]["r"]}/
                  {liveApi.data[1]["score"][0]["w"]} -{" "}
                  {liveApi.data[1]["score"][0]["o"]} overs
                </p>
                <h5>{liveApi.data[1]["score"][1]["inning"].slice(0, -1)}</h5>

                <p>
                  {liveApi.data[1]["score"][1]["r"]}/
                  {liveApi.data[1]["score"][1]["w"]} -{" "}
                  {liveApi.data[1]["score"][1]["o"]} overs
                </p>
                <h3>
                  {" "}
                  <h4>{liveApi.data[1]["status"]}</h4>
                </h3>
              </Card.Body>
            </Col>
          </Row>

          {/* -
           */}

          <Row>
            <Col style={colStyle}>
              <Card.Body>
                <h2>{liveApi.data[2].date}</h2>
                <p>{liveApi.data[2].name}</p>
                <small>{liveApi.data[2].venue}</small>
                <h5>{liveApi.data[2]["score"][0]["inning"].slice(0, -1)}</h5>
                <p>
                  {liveApi.data[2]["score"][0]["r"]}/
                  {liveApi.data[2]["score"][0]["w"]} -{" "}
                  {liveApi.data[2]["score"][0]["o"]} overs
                </p>
                <h5>{liveApi.data[2]["score"][1]["inning"].slice(0, -1)}</h5>

                <p>
                  {liveApi.data[2]["score"][1]["r"]}/
                  {liveApi.data[2]["score"][1]["w"]} -{" "}
                  {liveApi.data[2]["score"][1]["o"]} overs
                </p>
                <h3>
                  {" "}
                  <h4>{liveApi.data[2]["status"]}</h4>
                </h3>
              </Card.Body>
            </Col>
            <Col style={colStyle}>
              <Card.Body>
                <h2>{liveApi.data[4].date}</h2>
                <p>{liveApi.data[4].name}</p>
                <small>{liveApi.data[4].venue}</small>
                <h5>{liveApi.data[4]["score"][0]["inning"].slice(0, -1)}</h5>
                <p>
                  {liveApi.data[4]["score"][0]["r"]}/
                  {liveApi.data[4]["score"][0]["w"]} -{" "}
                  {liveApi.data[4]["score"][0]["o"]} overs
                </p>
                <h5>{liveApi.data[4]["score"][1]["inning"].slice(0, -1)}</h5>

                <p>
                  {liveApi.data[4]["score"][1]["r"]}/
                  {liveApi.data[4]["score"][1]["w"]} -{" "}
                  {liveApi.data[4]["score"][1]["o"]} overs
                </p>
                <h3>
                  {" "}
                  <h4>{liveApi.data[4]["status"]}</h4>
                </h3>
              </Card.Body>
            </Col>
          </Row>

          {/* -
           */}

          <Row>
            <Col style={colStyle}>
              <Card.Body>
                <h2>{liveApi.data[5].date}</h2>
                <p>{liveApi.data[5].name}</p>
                <small>{liveApi.data[5].venue}</small>
                <h5>{liveApi.data[5]["score"][0]["inning"].slice(0, -1)}</h5>
                <p>
                  {liveApi.data[5]["score"][0]["r"]}/
                  {liveApi.data[5]["score"][0]["w"]} -{" "}
                  {liveApi.data[5]["score"][0]["o"]} overs
                </p>
                <h5>{liveApi.data[5]["score"][1]["inning"].slice(0, -1)}</h5>

                <p>
                  {liveApi.data[5]["score"][1]["r"]}/
                  {liveApi.data[5]["score"][1]["w"]} -{" "}
                  {liveApi.data[5]["score"][1]["o"]} overs
                </p>
                <h3>
                  {" "}
                  <h4>{liveApi.data[5]["status"]}</h4>
                </h3>
              </Card.Body>
            </Col>
            <Col style={colStyle}>
              <Card.Body>
                <h2>{liveApi.data[6].date}</h2>
                <p>{liveApi.data[6].name}</p>
                <small>{liveApi.data[6].venue}</small>
                <h5>{liveApi.data[6]["score"][0]["inning"].slice(0, -1)}</h5>
                <p>
                  {liveApi.data[6]["score"][0]["r"]}/
                  {liveApi.data[6]["score"][0]["w"]} -{" "}
                  {liveApi.data[6]["score"][0]["o"]} overs
                </p>
                <h5>{liveApi.data[6]["score"][1]["inning"].slice(0, -1)}</h5>

                <p>
                  {liveApi.data[6]["score"][1]["r"]}/
                  {liveApi.data[6]["score"][1]["w"]} -{" "}
                  {liveApi.data[6]["score"][1]["o"]} overs
                </p>
                <h3>
                  {" "}
                  <h4>{liveApi.data[6]["status"]}</h4>
                </h3>
              </Card.Body>
            </Col>
          </Row>

          {/* ---
           */}

          <Row>
            <Col style={colStyle}>
              <Card.Body>
                <h2>{liveApi.data[7].date}</h2>
                <p>{liveApi.data[7].name}</p>
                <small>{liveApi.data[7].venue}</small>
                <h5>{liveApi.data[7]["score"][0]["inning"].slice(0, -1)}</h5>
                <p>
                  {liveApi.data[7]["score"][0]["r"]}/
                  {liveApi.data[7]["score"][0]["w"]} -{" "}
                  {liveApi.data[7]["score"][0]["o"]} overs
                </p>
                <h5>{liveApi.data[7]["score"][1]["inning"].slice(0, -1)}</h5>

                <p>
                  {liveApi.data[7]["score"][1]["r"]}/
                  {liveApi.data[7]["score"][1]["w"]} -{" "}
                  {liveApi.data[7]["score"][1]["o"]} overs
                </p>
                <h3>
                  {" "}
                  <h4>{liveApi.data[7]["status"]}</h4>
                </h3>
              </Card.Body>
            </Col>
            <Col style={colStyle}>
              <Card.Body>
                <h2>{liveApi.data[8].date}</h2>
                <p>{liveApi.data[8].name}</p>
                <small>{liveApi.data[8].venue}</small>
                <h5>{liveApi.data[8]["score"][0]["inning"].slice(0, -1)}</h5>
                <p>
                  {liveApi.data[8]["score"][0]["r"]}/
                  {liveApi.data[8]["score"][0]["w"]} -{" "}
                  {liveApi.data[8]["score"][0]["o"]} overs
                </p>
                <h5>{liveApi.data[8]["score"][1]["inning"].slice(0, -1)}</h5>

                <p>
                  {liveApi.data[8]["score"][1]["r"]}/
                  {liveApi.data[8]["score"][1]["w"]} -{" "}
                  {liveApi.data[8]["score"][1]["o"]} overs
                </p>
                <h3>
                  {" "}
                  <h4>{liveApi.data[8]["status"]}</h4>
                </h3>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};
