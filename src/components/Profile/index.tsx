import React from 'react';
import { Character } from '../../generated/graphql';
import {
  Close,
  ProfileCard,
  ProfileAvatar,
  ProfileInfo,
  Name,
  Grid,
  Field,
  FieldName,
  FieldContent,
  ProfileImage,
} from './styled';

interface Props {
  person: Character;
  isOpen: () => void;
}

const Profile: React.FC<Props> = ({ person, isOpen }: Props): JSX.Element => {
  const arrow: string = require('./arrow.svg') as string;
  // const avatar: string = require(`../../assets/img/characters/${person.id}.jpg`) as string;
  return (
    <>
      <Close onClick={isOpen}>
        <img src={arrow} alt="." />
      </Close>
      <ProfileCard>
        <ProfileAvatar>
          <ProfileImage
            src={
              require(`../../assets/img/characters/${person.id}.jpg`) as string
            }
          />
        </ProfileAvatar>
        <ProfileInfo>
          <Name>{person.name}</Name>
          <Grid>
            <Field>
              <FieldName>Birth Year</FieldName>
              <FieldContent>{person.birthYear}</FieldContent>
            </Field>

            <Field>
              <FieldName>Eye Color</FieldName>
              <FieldContent>{person.eyeColor}</FieldContent>
            </Field>

            <Field>
              <FieldName>Gender</FieldName>
              <FieldContent>{person.gender}</FieldContent>
            </Field>

            <Field>
              <FieldName>Hair Color</FieldName>
              <FieldContent>{person.hairColor}</FieldContent>
            </Field>

            <Field>
              <FieldName>Height</FieldName>
              <FieldContent>{person.height}</FieldContent>
            </Field>

            <Field>
              <FieldName>Homeworld</FieldName>
              <FieldContent>
                {person.homeworld ? person.homeworld.name : ''}
              </FieldContent>
            </Field>

            <Field>
              <FieldName>Mass</FieldName>
              <FieldContent>{person.mass}</FieldContent>
            </Field>

            <Field>
              <FieldName>Skin Color</FieldName>
              <FieldContent>{person.skinColor}</FieldContent>
            </Field>
          </Grid>
        </ProfileInfo>
      </ProfileCard>
    </>
  );
};

export default Profile;
