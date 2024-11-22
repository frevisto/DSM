import styled from "styled-components"

export default function Title({children}:any){
    return <TextSld>{children}</TextSld>
}

const TextSld = styled.div`
    font-weight: bold;
    font-size: 20px;
`;
