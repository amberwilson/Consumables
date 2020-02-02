import * as React from "react";
import "./styles.css";
import MyConsumables from "./classes/MyConsumables";
// import MovieElement from "./components/MovieElement";
import Movie, { MovieGenre } from "./classes/Movie";
import LocalStorage from "./classes/storage/LocalStorage";
import ConsumablesList from "./components/ConsumablesList";

import { identity, loggingIdentity } from "./classes/Generic";

export default function App() {
  const storage = new LocalStorage("my-consumables");
  const myConsumables = new MyConsumables(storage);

  const backToTheFuture = new Movie();
  backToTheFuture.title = "Back to the Future";
  backToTheFuture.genres.push(MovieGenre.Action);
  backToTheFuture.genres.push(MovieGenre.ScienceFiction);
  myConsumables.addConsumable(backToTheFuture);

  const silenceOfTheLambs = new Movie();
  silenceOfTheLambs.title = "Silence of the Lambs 2";
  silenceOfTheLambs.genres.push(MovieGenre.Action);
  silenceOfTheLambs.genres.push(MovieGenre.Horror);
  myConsumables.addConsumable(silenceOfTheLambs);
  console.log("silenceOfTheLambs", JSON.stringify(silenceOfTheLambs));
  myConsumables.save();

  // console.log(identity("Potato"));
  // console.log(loggingIdentity(["Potato"]));
  // let myIdentity1: <U>(arg: U) => U = identity;
  // let myIdentity2: {<T>(arg: T): T} = identity;

  // const storage = new LocalStorage("my-consumables");
  const otherCon = new MyConsumables(storage);
  otherCon.load();
  console.log("loaded consumables", otherCon.consumables);

  return (
    <div className="App">
      <h1>Consumables</h1>
      <ConsumablesList consumables={otherCon.consumables} />
    </div>
  );
}
