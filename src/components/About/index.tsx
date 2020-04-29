import React from 'react';
import { Title, AboutContainer, Text, TextWrapper } from './styled';

const About: React.FC = (): JSX.Element => {
  return (
    <>
      <Title>ABOUT</Title>
      <AboutContainer>
        <TextWrapper>
          <Text>
            New Hope There is a civil war. Our servers rebels beat DDOS from a
            secret base, won the first battle with the ominous Heroku server.
            Scout rebels during the battle managed to steal the secret code,
            associated with the main module of the Empire - MacOS Catalina,
            armored space station capable of destroying the entire planet of
            Linux. Princess chased by imperial agents Leia hurries to turn
            around on her stellar computer. These are the names of the heroes
            who defend Linux and all penguins.
          </Text>
        </TextWrapper>
      </AboutContainer>
    </>
  );
};

export default About;
