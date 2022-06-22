import React from 'react';
import {
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import './App.scss';

import { Header } from './Components/Header/Header';
import { HomePage } from './Components/HomePage/HomePage';
import { About } from './Components/Header/About/About';
import { ProjectsPage } from './Components/Header/ProjectsPage/ProjectsPage';
import { PeoplePage } from './Components/Header/ProjectsPage/FetchingPeople/PeoplePage/PeoplePage';
import { Goods } from './Components/Header/ProjectsPage/ListOfGoods/Goods';
import { MatrixClock } from './Components/Header/ProjectsPage/MatrixClock/MatrixClock';
import { Contacts } from './Components/Header/Contacts/Contacts';
import { NotFoundPage } from './Components/NotFoundPage/NotFoundPage';

export const App: React.FC = () => (
  <div className="App">
    <Header />

    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about" exact component={About} />
      <Route path="/projects" exact component={ProjectsPage} />
      <Route path="/people" exact component={PeoplePage} />
      <Route path="/goods" exact component={Goods} />
      <Route path="/clock" exact component={MatrixClock} />
      <Route path="/contacts" exact component={Contacts} />
      <Redirect path="/home" to="/" />
      <NotFoundPage />
    </Switch>
  </div>
);
