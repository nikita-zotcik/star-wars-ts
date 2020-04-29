import React from 'react';
import { Character } from '../../generated/graphql';
import {
  UserCardContainer,
  PreviewAvatarField,
  PreviewInfo,
  Name,
  ShowMoreButton,
} from './styled';

interface PropsUserCard {
  person: Character;
  handleShowMoreButton: (person: Character) => void;
}

const UserCard: React.FC<PropsUserCard> = ({
  person,
  handleShowMoreButton,
}: PropsUserCard): JSX.Element => {
  return (
    <UserCardContainer>
      <PreviewAvatarField src={`./static/media/${person.id}.jpg`} />
      <PreviewInfo>
        <Name>{person.name}</Name>
        <ShowMoreButton onClick={(): void => handleShowMoreButton(person)}>
          Show more
        </ShowMoreButton>
      </PreviewInfo>
    </UserCardContainer>
  );
};

export default UserCard;
