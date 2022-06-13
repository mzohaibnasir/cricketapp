import React from "react";
import axios from "axios";

import { Card, Col, Container, Row } from "react-bootstrap";
import { Search } from "./Search";

const playerSearchAPIURL =
  "https://api.cricapi.com/v1/players?apikey=7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f&offset=0&search=babar";

export const PlayerSearch = (props) => {
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

  const [playerSearchApi, setPlayerSearchApi] = React.useState("");

  React.useEffect(() => {
    axios.get(playerSearchAPIURL).then((response) => {
      setPlayerSearchApi(response.data);
    });
  }, []);

  if (!playerSearchApi) {
    return null;
  } else {
    console.log(playerSearchApi);
    // console.log(playerSearchAPIURL);
  }

  return (
    <>
      <form>
        <div className="container">
          <label htmlFor="search" className="form-label">
            Search Player
          </label>
          <input type="text" className="form-control" id="search" />
        </div>
      </form>
      <Container>
        <Card style={myStyle}>
          <Row>
            <Col style={colStyle}>
              <Card.Body>
                <h3>{playerSearchApi.data[0].name}</h3>
                <p style={textStyle}>{playerSearchApi.data[0].country}</p>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};
