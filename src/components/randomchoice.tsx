import React from "react";
import { baseUrl } from "../config";


function random() {
  const [player, setPlayer] = React.useState<any>(null);
  const [player2, setPlayer2] = React.useState<any>(null);
  const [keepEnabled, setKeepEnabled] = React.useState(true);

  function getRandomPlayerId() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    return randomNumber;
  }

  async function fetchPlayer() {
    const randomNumber = getRandomPlayerId();
    const resp = await fetch(`${baseUrl}/players/${randomNumber}`);
    const playerData = await resp.json();
    setPlayer(playerData);
    setKeepEnabled(true);
  }

  function getRandomPlayerId2() {
    const randomNumber = Math.floor(Math.random() * 5) + 1;
    console.log(randomNumber);
    return randomNumber;
  }

  async function fetchPlayer2() {
    const randomNumber = getRandomPlayerId();
    const resp = await fetch(`${baseUrl}/players/${randomNumber}`);
    const playerData = await resp.json();
    setPlayer2(playerData);
    setKeepEnabled(true);
  }
}
