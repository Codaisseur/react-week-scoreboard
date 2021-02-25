// src/components/Scoreboard.js
import { useState } from "react";
import AddPlayerForm from "./AddPlayerForm";
import Player from "./Player";

function compare_score(player_a, player_b) {
  return player_b.score - player_a.score;
}

function compare_name(player_a, player_b) {
  return player_a.name.localeCompare(player_b.name);
}

export default function Scoreboard() {
  const [sort_by, set_sort_by] = useState("score"); // either "score" or "name"

  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 42 },
  ]);

  const players_sorted = [...players].sort(
    sort_by === "name" ? compare_name : compare_score
  );

  const change_sorting = event => {
    console.log("new sort order:", event.target.value);
    set_sort_by(event.target.value);
  };

  // Defining the callback function:
  const incrementScore = (/* possibly some params here */) => {
    // something smart here
  };

  return (
    <div className="Scoreboard">
      <p>
        Sort order:{" "}
        <select onChange={change_sorting} value={sort_by}>
          <option value="score">Sort by score</option>
          <option value="name">Sort by name</option>
        </select>
      </p>
      <p>Player's scores:</p>
      <ul>
        {players_sorted.map(player => (
          <Player
            key={player.id}
            id={player.id}
            name={player.name}
            score={player.score}
            incrementScore={incrementScore}
          />
        ))}
      </ul>
      <AddPlayerForm />
    </div>
  );
}
