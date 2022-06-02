import styled from 'styled-components';
import { PrimaryButton } from '../../atoms/forms/Button/Button.styles';
import { PrimaryTextbox } from '../../atoms/forms/Textbox/Textbox.styles';

export const HomeWrapper = styled.div`
    display:'flex';
`;

export const ButtonWrapper=styled(PrimaryButton)`
    background-color: black;
`;
export const TextboxWrapper=styled(PrimaryTextbox)`
    background-color: black;
`;


