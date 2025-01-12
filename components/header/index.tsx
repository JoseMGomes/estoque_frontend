import React from 'react';
import { Container } from './styles';
import Title from '../title';
import ButtonBackPage from '../buttonBackPage';


interface HeaderProps {
    title: string;
}

const Header: React.FC<HeaderProps> = (
    {title}
) => {
  return (
    <Container>
        <ButtonBackPage/>
        
        <Title title={title}/>
    </Container>
  );
}
export default Header;