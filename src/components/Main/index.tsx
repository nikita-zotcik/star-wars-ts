import React from 'react';
import { MainContainer, Container, Title } from './styled';
import UserCard from '../UserCard/index';
import About from '../About/index';
import { Character } from '../../generated/graphql';

interface Props {
  persons: Character[];
  isOpen: () => void;
  setPerson: (person: Character) => void;
}

const Main: React.FC<Props> = ({
  isOpen,
  persons,
  setPerson,
}: Props): JSX.Element => {
  const handleShowMoreButton = (person: Character): void => {
    isOpen();
    setPerson(person);
  };
  return (
    <MainContainer>
      <Title>Star wars characters</Title>
      <Container>
        {persons.map(
          (person: Character, id: number): JSX.Element => (
            <UserCard
              key={`person-${id}`}
              person={person}
              handleShowMoreButton={handleShowMoreButton}
            />
          )
        )}
      </Container>
      <About />
    </MainContainer>
  );
};

export default Main;
