import { useState } from "react";

const Formulario = () => {
    let [materiaA, setMateriaA] = useState(0);
    let [materiaB, setMateriaB] = useState(0);
    let [materiaC, setMateriaC] = useState(0);
    let [nome, setNome] = useState ('');

    const alteraNome = (evento) => {
        setNome(evento.target.value)
    }


    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p> Olá {nome} foi aprovado</p>
            )
        } else {
            return (
                <p>Olá {nome} foi Reprovado</p>
            )
        }
    };
    


    return (
        <form>
            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number"  placeholder="Nota materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))} />
            <input type="number"  placeholder="Nota materia B"onChange={evento => setMateriaB(parseInt(evento.target.value))} />
            <input type="number"  placeholder="Nota materia C"onChange={evento => setMateriaC(parseInt(evento.target.value))} />
           {renderizaResultado()}
           
        </form>
    )
}

export default Formulario