import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';

import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { ProjectsPage } from './Components/Header/ProjectsPage/ProjectsPage';
import { Contacts } from './Components/Header/Contacts/Contacts';
import { PeoplePage } from './Components/FetchingPeople/PeoplePage/PeoplePage';
import { Goods } from './Components/ListOfGoods/Goods';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';

export const App: React.FC = () => (
  <div className="App">
    <Header />

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/projects" exact component={ProjectsPage} />
      <Route path="/people" exact component={PeoplePage} />
      <Route path="/goods" exact component={Goods} />
      <Route path="/contacts" exact component={Contacts} />
      <Redirect path="/home" to="/" />
      <NotFoundPage />
    </Switch>
  </div>
);
