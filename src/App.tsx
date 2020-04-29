import React, { useCallback } from 'react';
import Main from './components/Main/index';
import Profile from './components/Profile/index';
import { useQuery, gql } from '@apollo/client';

const ALL_PERSONS = gql`
  {
    allPersons {
      id
      name
      birthYear
      eyeColor
      gender
      hairColor
      height
      mass
      skinColor
      homeworld {
        name
      }
    }
  }
`;

const App: React.FC = (): JSX.Element => {
  const { loading, error, data } = useQuery(ALL_PERSONS);
  const [isOpen, setIsOpen] = React.useState(false);
  const [person, setPerson] = React.useState({});

  const handleOpen = useCallback((): void => {
    setIsOpen(!isOpen);
  }, [isOpen]);

  if (loading) {
    return <p>Loading ...</p>;
  }
  if (error) {
    return <p>Error</p>;
  }

  return (
    <>
      {isOpen ? (
        <Profile person={person} isOpen={handleOpen} />
      ) : (
        <Main
          isOpen={handleOpen}
          persons={data.allPersons}
          setPerson={setPerson}
        />
      )}
    </>
  );
};

export default App;
