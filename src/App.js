import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Footer } from "./MyComponents/Footer";
import { SeriesSearch } from "./MyComponents/SeriesSearch";
import { PlayerSearch } from "./MyComponents/PlayerSearch";
import { LiveMatch } from "./MyComponents/LiveMatch";

import React from "react";
import Header from "./MyComponents/Header";
import Card from "./MyComponents/Card";
import AllPlayers from "./MyComponents/AllPlayers";
import PlayerInfo from "./MyComponents/PlayerInfo";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <>
      <Header title="cricApp" searchBar={false} />

      <PlayerInfo />
      <h2>Live Matches(live match API is used here):</h2>

      <LiveMatch />

      <h2>Series Search:</h2>
      <small>
        Supposed to concatenate search input value with API url--- but didnot
        done
      </small>

      <SeriesSearch />

      <h2>Player Search:</h2>
      <small>
        Supposed to concatenate search input value with API url--- but didnot
        done
      </small>

      <PlayerSearch />

      <Footer />
    </>
  );
}
