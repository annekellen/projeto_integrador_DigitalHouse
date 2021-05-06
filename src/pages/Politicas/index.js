import './style.css';
import Paragrafo from '../../components/Paragrafo';
const Politicas = () => {
  return (
    <>
      <Paragrafo classe="titulo-center titulo-politica" texto="Política de privacidade" />
      <div className="container-politica">
        <p>
          OVERLOOK, inscrita no CNPJ sob o nº 99.999.99/0000-00, com sede na
          Avenida Francisco Matarazzo, nº 1350, bairro Barra Funda, em São
          Paulo/SP, CEP 05001-100 (“Overlook”, “nós” ou “nossos”).
        </p>
        <p>
          Nós, da Overlook, temos como um de nossos principais valores o
          compromisso de respeitar e preservar a privacidade e proteger os Dados
          Pessoais dos nossos Usuários. Por isso desenvolvemos esta Política de
          Privacidade (“Política”), para que o usuário saiba como nós tratamos
          seus Dados Pessoais. Ao fornecer informações pessoais, navegar no site
          ou utilizar nosso aplicativo, o Usuário estará ciente com as regras de
          utilização, proteção e segurança aqui estabelecidas. É muito
          importante que o usuário leia atentamente esta Política!
        </p>
        <p>
          Se após a leitura desta Política o usuário ainda tiver dúvidas, fique
          à vontade para entrar em contato conosco por meio dos nossos Canais de
          Atendimento disponíveis em nosso site ou por meio de contato direto
          com o nosso Encarregado, conforme disponível nesta Política.{' '}
        </p>
        <Paragrafo classe="titulo-sub" texto="DEFINIÇÕES" />
        <ul>
          <li>
            Anonimização: Utilização de meios técnicos razoáveis e disponíveis
            no momento do Tratamento, por meio dos quais um dado perde a
            possibilidade de associação, direta ou indireta, quanto à
            identificação de um indivíduo.
          </li>
          <li>
            Computação em nuvem: É tecnologia de virtualização de serviços
            construída a partir da interligação de mais de um servidor por meio
            de uma rede de informação comum (p.ex. a Internet), com objetivo de
            reduzir custos e aumentar a disponibilidade dos serviços
            sustentados.
          </li>
          <li>
            Conta de acesso: Conta de identificação do usuário para acesso aos
            serviços e produtos disponibilizados pela Overlook.
          </li>
          <li>
            Cookies: Pequenos arquivos enviados pelo site, salvos no seu
            dispositivo, que armazenam as preferências e poucas outras
            informações, com a finalidade de personalizar sua navegação de
            acordo com o seu perfil.
          </li>
          <li>
            Dados Pessoais ou Dados: Dados relacionados a pessoa física que
            poderá ser identificada ou se tornar identificável.
          </li>
          <li>
            Encarregado (Data Protection Officer -DPO): Pessoa indicada pela
            Overlook para atuar como canal de comunicação entre ela, o usuário e
            a Autoridade Nacional de Proteção de Dados (ANPD).
          </li>
          <li>Plataformas: São o site e o aplicativo da Overlook.</li>
          <li>Política: É esta Política de Privacidade.</li>
          <li>
            Titular dos Dados Pessoais ou Usuário: É a pessoa física a quem se
            referem os Dados Pessoais. No caso, é você.
          </li>
          <li>
            Tratamento: Toda operação realizada com Dados Pessoais, como as que
            se referem a coleta, produção, recepção, classificação, utilização,
            acesso, reprodução, transmissão, distribuição, processamento,
            arquivamento, armazenamento, eliminação, avaliação ou controle da
            informação, modificação, comunicação, transferência, difusão ou
            extração.
          </li>
        </ul>
        <Paragrafo classe="titulo-sub" texto="COLETA DE DADOS PESSOAIS" />

        <p>
          Os tipos de Dados Pessoais e a forma como os coletamos dependem da
          interação do Usuário em nosso site.
        </p>
        <p>
          O Usuário é responsável pela veracidade dos dados pessoais que
          fornecer à Overlook. Qualquer prejuízo decorrente da inclusão de
          informações falsas ou desatualizadas, será de única e exclusiva
          responsabilidade do Usuário.
        </p>
        <Paragrafo
          classe="titulo-sub"
          texto="COMPARTILHAMENTO DE DADOS PESSOAIS"
        />

        <p>
          Overlook poderá compartilhar seus Dados Pessoais para oferecer os
          nossos produtos e melhorar sua experiência conosco.
        </p>

        <p>
          Seus Dados Pessoais podem ser compartilhados com empresas do Overlook
          Group, com nossos fornecedores e parceiros, redes sociais e
          Autoridades Públicas.
        </p>

        <p>
          Estes fornecedores deverão cumprir com os princípios da
          proporcionalidade, necessidade e finalidade, bem como atender aos
          padrões de segurança estabelecidos pela Overlook dentro do estado da
          técnica possível à época, no tocante à proteção de sigilo e
          confidencialidade, com uso de métodos de criptografia, conexão segura
          e demais melhores práticas disponíveis, inclusive anonimização, quando
          aplicável.
        </p>

        <p>
          Para saber mais sobre nossos fornecedores e parceiros, entre em
          contato conosco por meio dos nossos Canais de Atendimento disponíveis
          em nosso site ou por meio de contato direto com o nosso Encarregado,
          conforme disponível nesta Política.
        </p>
      </div>
    </>
  );
};
export default Politicas;
