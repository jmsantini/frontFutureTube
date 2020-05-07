import React from 'react';
import { StyledHeader, StyledLogo, LogoContainer, SearchContainer, ButtonMenu,  StyledInput } from './styled';
import Button from "@material-ui/core/Button"
import labenutube from '../../resources/logo.png';
export function Header (props) {
    return (
        <StyledHeader>
            <LogoContainer>
                <StyledLogo src={labenutube} onClick={props.onClick}/>
            </LogoContainer>
            <SearchContainer>
                <StyledInput value={props.value} onChange={props.onChange} placeholder="Search"/>
            </SearchContainer>
            <ButtonMenu>
                {props.button1 && <Button onClick={props.onClick1}>{props.button1}</Button>}
                {props.button2 && <Button onClick={props.onClick2}>{props.button2}</Button>}
                {props.button3 && <Button onClick={props.onClick3}>{props.button3}</Button>}
            </ButtonMenu>
        </StyledHeader>
    )
}
export default Header;