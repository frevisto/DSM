export default function Form(props:Props){
    return <>
        <div>
            <label>Nome</label>
            <input value={props.nome} onChange={(e)=>props.setNome(e.target.value)} />
        </div>
        <div>
            <label>Idade</label>
            <input value={props.idade} onChange={(e)=>props.setIdade(e.target.value)} />
        </div>
    </>;
}

interface Props {
    nome: string;
    idade: string;
    setNome: Function;
    setIdade: Function;
}