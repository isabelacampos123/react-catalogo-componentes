import Cabecalho from './componentes/Cabecalho';
import CardCurso from './componentes/CardCurso';
import Destaque from './componentes/Destaque';

function App() {
  const cursos = [
    {
      nome: "Desenvolvimento de Sistemas",
      duracao: "1200 horas",
      modalidade: "Presencial",
      nivel: "Técnico",
      vagas: true
    },

    {
      nome: "Redes de Computadores",
      duracao: "2000 horas",
      modalidade: "EaD",
      nivel: "Superior",
      vagas: false
    },

    {
      nome: "Manutenção de Computadores",
      duracao: "2300 horas",
      modalidade: "presencial",
      nivel: "Superior",
      vagas: true
    },

    {
      nome: "Programação Web",
      duracao: "250 horas",
      modalidade: "EaD",
      nivel: "Técnico",
      vagas: false
    },
    {
      nome: "Banco de Dados",
      duracao: "120 horas",
      modalidade: "presencial",
      nivel: "Técnico",
      vagas: true
    },

    {
      nome: "Desenvolvimento Mobile",
      duracao: "300 horas",
      modalidade: "EaD",
      nivel: "Técnico",
      vagas: false
    }

  ];

  return (
    <>
      <Cabecalho titulo="Catálogo de Cursos"
        descricao="Conheça algumas formações disponíveis na área de tecnologia."
      />
      <h2>Nossos Cursos</h2>

      <div>
        {cursos.map((curso) => (
          <CardCurso
            nome={curso.nome}
            duracao={curso.duracao}
            modalidade={curso.modalidade}
            nivel={curso.nivel}
            vagas={36}
          />
        ))}
      </div>

      <div>
        <Destaque
          titulo="Aprenda fazendo"
          texto="Desenvolva projetos durante sua formação."
        />

        <Destaque
          titulo="Código real"
          texto="Escreva linhas que resolvem problemas do dia a dia."
        />

        <Destaque
          titulo="Aprenda fazendo"
          texto="Desenvolva projetos durante sua formação."
        />

        <Destaque
          titulo="Aprenda fazendo"
          texto="Desenvolva projetos durante sua formação."
        />
      </div>
    </>
  );
}

export default App;