export default function Result(props:Props){
    return <>
        <div>Nome: {props.nome}</div>
        <div>Idade: {props.idade}</div>
    </>;
}

interface Props {
    nome: string;
    idade: string;
}