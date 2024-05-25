import { styled } from '@mui/material';
import { Link as LinkComponent } from 'react-router-dom';

export const VisuallyHiddenInput = styled("input")({
    border: 0,
    clip: "rect(0 0 0 0)",
    height: 1,
    margin: -1,
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    whiteSpaceL: "nowrap",
    width: 1,
});
export const Link = styled(LinkComponent)`
text-decoration: none;
color: black;
padding:1rem;
&:hover {
    background-color:#746f92
}`


export const InputBox = styled("input")`
width:70%; 
height:200%;
border:none;
outline: none;
padding: 0 3rem;
border-radius: 5rem;
background-color:rgba(176, 186, 186, 1);
`;
