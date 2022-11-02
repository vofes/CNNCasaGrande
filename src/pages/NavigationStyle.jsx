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
  justify-content: space-between;
  background-image: url(${background});
  padding-left: 60px;
  padding-right: 60px;
  padding-top: 20px;
  padding-bottom: 20px;
`;

export const LeftPart = styled.div `
  display: flex;
`;

export const RowList = styled.ul `
  display: flex;
  flex-direction: row;
  margin-top: 0;
  margin-bottom: 0;
`;

export const ColumnList = styled.ul `
  display: flex;
  flex-direction: column;
  margin-top: 0;
  margin-bottom: 0;
  padding-inline-start: 0;
  padding-top: 25px;
  background-color: #13192c;
  width: 100%;
`;

export const LinkContainer = styled.div `
  /* width: 100px; */
  white-space: pre-wrap;
  padding-right: 50px;
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
  font-size: 24px;
  font-family: 'Impact';
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
  font-size: 24px;
  font-family: 'Impact';
`;

export const MenuButton = styled.button `
  width: 50px;
  height: 50px;
  background-color: transparent;
  background-repeat: no-repeat;
  border: none;
  cursor: pointer;
  overflow: hidden;
  outline: none;
  
`

export const MenuIcon = styled.img `
  width: 100%;
  height: 100%;
`