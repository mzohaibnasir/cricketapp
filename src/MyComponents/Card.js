import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import playerIcon from "../images/playerIcon.png";
import { Carousel } from "react-bootstrap";

// S O R R Y  F O R  H A R D C O D I N G
const playerAPIURL =
  // "https://api.cricapi.com/v1/players_info?apikey=7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f&id=3e2a519d-8906-4c83-9de4-b584acad2677";
  "https://api.cricapi.com/v1/players?apikey=7d2dc5ae-9763-41fe-8f0d-00217c6a0d8f&offset=0";

export default function PlayerInfo() {
  const [playerApi, setPlayerApi] = React.useState("");

  React.useEffect(() => {
    axios.get(playerAPIURL).then((response) => {
      setPlayerApi(response.data);
    });
  }, []);

  if (!playerApi) {
    return null;
  } else {
    console.log(playerApi);
  }
  return (
    <>
      {/* <div className="w-100">
        <h1 className=" pt-0 m-0 wx-100 bg-primary text-white">
          PLayer details
        </h1>
      </div> */}

      <Carousel
        variant="dark"
        className="d-block w-100 bg-secondary p-5   .text-black-50"
      >
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            {/* <hs>{playerApi.data.bowlingStyle}</hs */}
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
          {/* </Carousel.Caption> */}
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[1].name}</h3>
            <p>{playerApi.data[1].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[2].name}</h3>
            <p>{playerApi.data[2].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[3].name}</h3>
            <p>{playerApi.data[3].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[4].name}</h3>
            <p>{playerApi.data[4].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[13].name}</h3>
            <p>{playerApi.data[13].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[11].name}</h3>
            <p>{playerApi.data[11].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[18].name}</h3>
            <p>{playerApi.data[18].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[21].name}</h3>
            <p>{playerApi.data[21].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[22].name}</h3>
            <p>{playerApi.data[22].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>{" "}
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[17].name}</h3>
            <p>{playerApi.data[17].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div>
            <img className="w-30 h-100" src={playerIcon} />
          </div>
          <div>
            <h3>{playerApi.data[9].name}</h3>
            <p>{playerApi.data[9].country}</p>
            <p>
              What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the
              printing and typesetting industry. Lorem Ipsum has been the
              industry's standard dummy text ever since the 1500s, when an
              unknown printer took a galley of type and scrambled it to make a
              type specimen book. It has survived not only five centuries, but
              also the leap into electronic typesetting, remaining essentially
              unchanged. It was popularised in the 1960s with the release of
              Letraset sheets containing Lorem Ipsum passages, and more recently
              with desktop publishing software like Aldus PageMaker including
              versions of Lorem Ipsum.
            </p>
          </div>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
