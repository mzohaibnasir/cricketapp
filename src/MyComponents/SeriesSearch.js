import React from "react";
import axios from "axios";

import { Card, Col, Container, Row } from "react-bootstrap";
import { Search } from "./Search";

const seriesSearchAPIURL =
  "https://api.cricapi.com/v1/series?apikey=7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f&offset=0&search=india";

export const SeriesSearch = (props) => {
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

  let textStyle = {
    // width: "30%",
    // borderRadius: "25px",
    // border: "2px solid",
    // margin: "5vh",
    // height: "7vh",
    // padding: "3vh",
    fontWeight: "bold",
    // backgroundColor: "1F4690",
  };

  const [seriesSearchApi, setSeriesSearchApi] = React.useState("");

  React.useEffect(() => {
    axios.get(seriesSearchAPIURL).then((response) => {
      setSeriesSearchApi(response.data);
    });
  }, []);

  if (!seriesSearchApi) {
    return null;
  } else {
    // console.log(seriesSearchApi);
    console.log(seriesSearchAPIURL);
  }

  return (
    <>
      <form>
        <div className="container">
          <label htmlFor="search" className="form-label">
            Search Series
          </label>
          <input type="text" className="form-control" id="search" />
        </div>
      </form>

      <Container>
        <Card style={myStyle}>
          <Row>
            <Col style={colStyle}>
              <Card.Body>
                <h3>{seriesSearchApi.data[0].name}</h3>
                <p style={textStyle}>
                  Total Matches: {seriesSearchApi.data[0].matches}
                </p>

                <p>ODIs: {seriesSearchApi.data[0]["odi"]}</p>
                <p>T20Is: {seriesSearchApi.data[0]["t20"]}</p>
                <p>Tests: {seriesSearchApi.data[0]["test"]}</p>

                <p style={textStyle}>
                  From: {seriesSearchApi.data[0]["startDate"]}
                </p>
                <p style={textStyle}>
                  To: {seriesSearchApi.data[0]["endDate"]}
                </p>
              </Card.Body>
            </Col>
            <Col style={colStyle}>
              <Card.Body>
                <h3>{seriesSearchApi.data[1].name}</h3>
                <p style={textStyle}>
                  Total Matches: {seriesSearchApi.data[1].matches}
                </p>

                <p>ODIs: {seriesSearchApi.data[1]["odi"]}</p>
                <p>T20Is: {seriesSearchApi.data[1]["t20"]}</p>
                <p>Tests: {seriesSearchApi.data[1]["test"]}</p>

                <p style={textStyle}>
                  From: {seriesSearchApi.data[1]["startDate"]}
                </p>
                <p style={textStyle}>
                  To: {seriesSearchApi.data[1]["endDate"]}
                </p>
              </Card.Body>
            </Col>
          </Row>

          <Row>
            <Col style={colStyle}>
              <Card.Body>
                <h3>{seriesSearchApi.data[2].name}</h3>
                <p style={textStyle}>
                  Total Matches: {seriesSearchApi.data[2].matches}
                </p>

                <p>ODIs: {seriesSearchApi.data[2]["odi"]}</p>
                <p>T20Is: {seriesSearchApi.data[2]["t20"]}</p>
                <p>Tests: {seriesSearchApi.data[2]["test"]}</p>

                <p style={textStyle}>
                  From: {seriesSearchApi.data[2]["startDate"]}
                </p>
                <p style={textStyle}>
                  To: {seriesSearchApi.data[2]["endDate"]}
                </p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};
