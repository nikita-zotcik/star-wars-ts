import styled from 'styled-components';

export const UserCardContainer = styled.div`
  width: 20rem;
  height: 25rem;
  border-radius: 10px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.2);
  margin: 1.5rem;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
  &:hover {
    box-shadow: 0 0 25px 10px rgba(0, 0, 0, 0.2);
  }
  @media (max-width: 400px) {
    margin: 1rem auto;
    min-width: 20rem;
  }
`;

export const PreviewAvatarField = styled.img`
  width: 100%;
  height: 70%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

export const PreviewInfo = styled.div`
  height: 30%;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const Name = styled.div`
  font-size: 1.5rem;
  font-family: 'Montserrat';
  font-weight: bold;
  letter-spacing: 2px;
`;

export const ShowMoreButton = styled.button`
  width: 50%;
  height: 40px;
  border-radius: 30px;
  border: none;
  box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.4s ease;
  font-family: 'Montserrat';
  font-weight: bold;
  text-transform: uppercase;
  outline: none;
  &:hover {
    box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.2);
    letter-spacing: 1px;
  }
`;
