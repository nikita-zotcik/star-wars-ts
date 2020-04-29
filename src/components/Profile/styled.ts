import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 80%;
  max-width: 80rem;
  height: 35rem;
  background-color: white;
  margin: 10rem auto;
  display: flex;
  align-items: center;
  box-shadow: 0 0 30px 6px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 15px;
  @media (max-width: 575px) {
    flex-direction: column;
    width: 100%;
    height: fit-content;
    margin: 0;
    margin-top: calc(40px + 2rem + 5%);
  }
  @media (min-width: 576px) and (max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: fit-content;
    margin: 5%;
    margin-top: calc(40px + 2rem + 5%);
  }
  @media (min-width: 769px) and (max-width: 1199px) {
    width: 98%;
    margin: 10rem 5px;
  }
`;

export const ProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 15px;
  min-height: 35rem;
  object-fit: cover;
`;

export const ProfileAvatar = styled.div`
  width: 55%;
  height: 110%;
  @media (max-width: 768px) {
    min-height: 35rem;
    width: 105%;
    padding: 0;
  }
`;

export const ProfileInfo = styled.div`
  width: 45%;
  height: 100%;
  z-index: 1;
  padding: 1rem;
  @media (max-width: 575px) {
    width: 100%;
    padding: 0;
  }
  @media (min-width: 576px) and (max-width: 768px) {
    width: 100%;
    height: 40%;
  }
`;

export const Close = styled.button`
  border: none;
  width: 40px;
  height: 40px;
  cursor: pointer;
  padding: 0;
  border-radius: 50%;
  background-color: inherit;
  position: absolute;
  top: 2rem;
  right: 2rem;
  outline: none;
  transition: all 0.5s ease;
  box-shadow: 0 0 15px 1px rgba(0, 0, 0, 0.2);
  &:hover {
    box-shadow: none;
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const Name = styled.div`
  align-self: center;
  margin: 20px auto;
  width: fit-content;
  font-size: 3rem;
  font-weight: bolder;
  letter-spacing: 0.2rem;
  @media (max-width: 575px) {
    font-size: 2rem;
  }
`;

export const Grid = styled.div`
  padding: 1rem;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
`;

export const Field = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40%;
  padding: 1rem;
  @media (max-width: 575px) {
    width: 50%;
  }
  @media (min-width: 769px) and (max-width: 1199px) {
    padding: 0.5rem;
  }
`;

export const FieldName = styled.span`
  font-size: 1.2rem;
  letter-spacing: 1px;
  font-family: 'Montserrat';
  text-decoration: underline;
  @media (min-width: 575px) and (max-width: 1199px) {
    font-size: 1rem;
  }
`;

export const FieldContent = styled.span`
  font-size: 2rem;
  font-family: 'Montserrat';
  @media (max-width: 575px) {
    font-size: 2 rem;
  }
  @media (min-width: 769px) and (max-width: 1199px) {
    font-size: calc(16px + (26 - 16) * ((100vw - 769px) / (1199px - 769px)));
  }
`;
