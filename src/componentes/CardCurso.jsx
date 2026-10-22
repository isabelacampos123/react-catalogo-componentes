function CardCurso ({nome, duracao, modalidade, nivel, vagas}) {
    return (
        <div>
            <h3>{nome}</h3>
            <p>Duração: {duracao}</p>
            <p>Modalidade: {modalidade}</p>
            <p>Nível: {nivel}</p>
            <p>
        {vagas > 0 ? "Vagas disponíveis" : "Vagas indisponíveis"}
      </p>
        </div>
    );
}


export default CardCurso;