import { FaBible, FaMusic, FaChild, FaUsersCog, FaCross, FaHandHoldingHeart, FaDonate, FaBookReader, FaCamera, FaUserFriends, FaUsers, FaPrayingHands, FaHandsHelping, FaDotCircle } from 'react-icons/fa';

export const pastoraisData = [
  {
    id: 'liturgia',
    nome: 'Pastoral da Liturgia',
    descricao: 'A Pastoral Litúrgica é o serviço de organizar e animar a vida litúrgica da comunidade, para que todos possam participar de forma ativa, consciente e frutuosa das celebrações. Cuidamos para que cada rito, leitura e canto ajude a assembleia a fazer uma profunda experiência de fé e encontro com Deus.',
    imagem: '/Images/Pastorais/1-Liturgia.jpg',
    icon: FaBible,
    coordenador: {
      nome: 'Maria Silva',
      foto: '/Images/Coordenadores-Pastorais/1Liturgia.webp',
      telefone: '5511912345678'
    }
  },
  {
    id: 'musica',
    nome: 'Pastoral da Música',
    descricao: 'Com a missão de animar as celebrações através do canto, a Pastoral da Música utiliza o dom musical para louvar a Deus e ajudar a comunidade a rezar. Se você tem talento para cantar ou tocar, junte-se a nós!',
    imagem: '/Images/Pastorais/2-Música.jpg',
    icon: FaMusic,
    coordenador: {
      nome: 'João Santos',
      foto: '/Images/Coordenadores/joao-santos.jpg',
      telefone: '5511987654321'
    }
  },
  {
    id: 'cerimoniarios',
    nome: 'Cerimoniários e Coroinhas',
    descricao: 'Servindo no altar com dedicação e zelo, os coroinhas e cerimoniários auxiliam o sacerdote durante as celebrações litúrgicas, garantindo a solenidade e a beleza dos ritos sagrados. É um serviço de grande honra e responsabilidade.',
    imagem: '/Images/Pastorais/3-coroinhas.jpg',
    icon: FaChild,
    coordenador: {
      nome: 'Pedro Costa',
      foto: '/Images/Coordenadores/pedro-costa.jpg',
      telefone: '5511912345679'
    }
  },
  {
    id: 'mesc',
    nome: 'Ministros Extraordinários da Sagrada Comunhão (MESC)',
    descricao: 'Os MESCs são leigos que, por um chamado especial, auxiliam na distribuição da Eucaristia durante as Missas e a levam aos enfermos e idosos que não podem vir à igreja, sendo um elo de comunhão entre Cristo e a comunidade.',
    imagem: '/Images/Pastorais/4-MESC.jpg',
    icon: FaDotCircle,
    coordenador: {
      nome: 'Ana Pereira',
      foto: '/Images/Coordenadores/ana-pereira.jpg',
      telefone: '5511987654322'
    }
  },
  {
    id: 'batismo',
    nome: 'Pastoral do Batismo',
    descricao: 'Preparamos pais e padrinhos para o primeiro sacramento da vida cristã. Nossa missão é acolher as famílias e instruí-las sobre a importância do Batismo, a porta de entrada para a Igreja.',
    imagem: '/Images/Pastorais/5-Batismo.jpg',
    icon: FaCross,
    coordenador: {
      nome: 'Carlos Lima',
      foto: '/Images/Coordenadores/carlos-lima.jpg',
      telefone: '5511912345680'
    }
  },
  {
    id: 'acolhida',
    nome: 'Pastoral da Acolhida',
    descricao: 'Somos o primeiro sorriso que você encontra ao chegar na casa do Pai. A Pastoral da Acolhida tem a missão de receber a todos com alegria e carinho, fazendo com que cada pessoa se sinta bem-vinda e parte da nossa família.',
    imagem: '/Images/Pastorais/6-Acolhida.jpg',
    icon: FaHandHoldingHeart,
    coordenador: {
      nome: 'Sofia Fernandes',
      foto: '/Images/Coordenadores/sofia-fernandes.jpg',
      telefone: '5511987654323'
    }
  },
  {
    id: 'dizimo',
    nome: 'Pastoral do Dízimo',
    descricao: 'O dízimo é um ato de fé, partilha e gratidão. Nossa pastoral conscientiza a comunidade sobre a importância da contribuição para a manutenção da paróquia e a realização das obras de evangelização e caridade.',
    imagem: '/Images/Pastorais/7-Dízimo.jpg',
    icon: FaDonate,
    coordenador: {
      nome: 'Lucas Martins',
      foto: '/Images/Coordenadores/lucas-martins.jpg',
      telefone: '5511912345681'
    }
  },
  {
    id: 'catequese',
    nome: 'Pastoral da Catequese',
    descricao: 'A Catequese é o coração da formação cristã. Preparamos crianças, jovens e adultos para os sacramentos da Eucaristia e da Crisma, ensinando os fundamentos da nossa fé e o amor a Jesus Cristo.',
    imagem: '/Images/Pastorais/8-Catequese.webp',
    icon: FaBookReader,
    coordenador: {
      nome: 'Isabela Rocha',
      foto: '/Images/Coordenadores/isabela-rocha.jpg',
      telefone: '5511987654324'
    }
  },
  {
    id: 'pascom',
    nome: 'Comunicação (PASCOM)',
    descricao: 'Somos a voz e a imagem da paróquia. A PASCOM utiliza os meios de comunicação para evangelizar, informar e conectar a comunidade, divulgando nossas celebrações, eventos e a Palavra de Deus.',
    imagem: '/Images/Pastorais/9-PASCOM.jpg',
    icon: FaCamera,
    coordenador: {
      nome: 'Rafael Almeida',
      foto: '/Images/Coordenadores/rafael-almeida.jpg',
      telefone: '5511912345682'
    }
  },
  {
    id: 'idoso',
    nome: 'Pastoral da Pessoa Idosa',
    descricao: 'Com um olhar de carinho e respeito, a Pastoral do Idoso promove a valorização e a integração da pessoa idosa na comunidade, oferecendo apoio espiritual, visitas e momentos de convivência.',
    imagem: '/Images/Pastorais/10-PastoralDaPessoaIdosa.jpg',
    icon: FaUserFriends,
    coordenador: {
      nome: 'Teresa Mendes',
      foto: '/Images/Coordenadores/teresa-mendes.jpg',
      telefone: '5511987654325'
    }
  },
  {
    id: 'familiar',
    nome: 'Pastoral Familiar',
    descricao: 'A Pastoral Familiar atua no apoio e na evangelização das famílias, base da sociedade e da Igreja. Promovemos encontros, formações e acompanhamento para fortalecer os laços matrimoniais e familiares à luz do Evangelho.',
    imagem: '/Images/Pastorais/11-PastoralFamiliar.jpg',
    icon: FaUsers,
    coordenador: {
      nome: 'Antônio Barros',
      foto: '/Images/Coordenadores/antonio-barros.jpg',
      telefone: '5511912345683'
    }
  },
  {
    id: 'sobriedade',
    nome: 'Pastoral da Sobriedade',
    descricao: 'A Pastoral da Sobriedade oferece apoio e esperança para aqueles que lutam contra a dependência química e outras formas de vício, através da oração, da partilha e de um programa de vida baseado nos 12 passos da fé cristã.',
    imagem: '/Images/Pastorais/12-Sobriedade.jpg',
    icon: FaPrayingHands,
    coordenador: {
      nome: 'Cláudia Ribeiro',
      foto: '/Images/Coordenadores/claudia-ribeiro.jpg',
      telefone: '5511987654326'
    }
  }
];
