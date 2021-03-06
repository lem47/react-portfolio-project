import React, { useEffect, useState } from 'react';
import './PeoplePage.scss';
import { getPeople } from '../api/api';
import { PeopleTable } from '../PeopleTable/PeopleTable';
import { Spinner } from '../Spinner/Spinner';

export const PeoplePage: React.FC = () => {
  const [people, setPeople] = useState<Person[] | null>(null);

  useEffect(() => {
    const getPeopleFromServer = async () => {
      const result = await getPeople();

      setPeople(result);
    };

    getPeopleFromServer();
  }, []);

  return (
    <div className="PeoplePage">
      <h1 className="PeoplePage__title">Fetching people from server</h1>

      {people ? (
        <PeopleTable people={people} />
      ) : (
        <Spinner />
      )}
    </div>
  );
};
