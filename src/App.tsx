import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';

import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { PeoplePage } from './Components/FetchingPeople/PeoplePage/PeoplePage';
import { Goods } from './Components/ListOfGoods/Goods';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';

export const App: React.FC = () => (
  <div className="App">
    <Header />

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/people" exact component={PeoplePage} />
      <Route path="/goods" exact component={Goods} />
      <Redirect path="/home" to="/" />
      <NotFoundPage />
    </Switch>
  </div>
);
