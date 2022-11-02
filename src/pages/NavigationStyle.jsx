import styled from 'styled-components';
import background from '../images/navigationBackground.png';

export const LogoContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NavigationBar = styled.nav `
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 20px;
  justify-content: space-between;
  background-image: url(${background});
`;

export const Menu = styled.div `
  display: flex;
`;

export const RowList = styled.ul `
  display: flex;
  flex-direction: row;
`;

export const LinkContainer = styled.div `
  /* width: 100px; */
  white-space: pre-wrap;
  margin-right: 35px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PhoneContainer = styled.div `
  display: flex;
  flex-direction: row;
  align-items: end;
  height: 100px;
  margin-right: 50px;
`;

export const PhoneRow = styled.div `
  display: flex;
  flex-direction: row;
  color: white;
  align-items: center;
  font-weight: bold;
`;

export const PhoneIcon = styled.img `
  margin-right: 15px;
`;

// Not decorated Anchor
export const NdA = styled.a `
  text-decoration: 0;
  color: white;
`;

// Not styled List Element
export const NsLi = styled.li `
  list-style: none;
  text-align: center;
  font-size: 20px;
  font-weight: bold;
`;