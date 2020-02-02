import * as React from 'react';
import './styles.css';

import MyConsumables from './classes/MyConsumables';
import Movie, { MovieGenre } from './classes/Movie';
import Show, { ShowGenre } from './classes/Show';
import LocalStorage from './classes/storage/LocalStorage';
import ConsumablesList from './components/ConsumablesList';

export default function App() {
  const storage = new LocalStorage('my-consumables');
  const myConsumables = new MyConsumables(storage);

  const backToTheFuture = new Movie();
  backToTheFuture.title = 'Back to the Future';
  backToTheFuture.genres.push(MovieGenre.Action);
  backToTheFuture.genres.push(MovieGenre.ScienceFiction);
  myConsumables.addConsumable(backToTheFuture);

  const silenceOfTheLambs = new Movie();
  silenceOfTheLambs.title = 'Silence of the Lambs';
  silenceOfTheLambs.genres.push(MovieGenre.Action);
  silenceOfTheLambs.genres.push(MovieGenre.Horror);
  myConsumables.addConsumable(silenceOfTheLambs);

  const hannibal = new Show();
  hannibal.title = 'Hannibal';
  hannibal.genres.push(ShowGenre.Action);
  hannibal.genres.push(ShowGenre.Horror);
  myConsumables.addConsumable(hannibal);

  myConsumables.save();

  const otherCon = new MyConsumables(storage);
  otherCon.load();

  return (
    <div className="App">
      <h1>Consumables</h1>
      <ConsumablesList consumables={otherCon.consumables} />
    </div>
  );
}
