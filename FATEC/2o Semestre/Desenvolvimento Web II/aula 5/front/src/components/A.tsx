import { Props } from "../types/propsAB";
import styled from "styled-components";

export default function A(props:Props){
    return <WrapperSld>
        <ButtonSld onClick={ () => props.set("A") }>A</ButtonSld>
    </WrapperSld>;
}


const WrapperSld = styled.div`
    background-color: PaleGreen;
    padding: 10px;
    margin: 4px;
    flex: 1;
`;

const ButtonSld = styled.button`
padding: 3px 15px
`;