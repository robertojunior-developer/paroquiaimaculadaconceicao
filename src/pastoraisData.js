import { FaBible, FaMusic, FaChild, FaUsersCog, FaCross, FaHandHoldingHeart, FaDonate, FaBookReader, FaCamera, FaUserFriends, FaUsers, FaPrayingHands, FaHandsHelping, FaDotCircle } from 'react-icons/fa';
// Imagens das Pastorais (imports estáticos para funcionar com base do Vite)
import ImgLiturgia from '../Images/Pastorais/1-Liturgia.jpg';
import ImgMusica from '../Images/Pastorais/2-Música.jpg';
import ImgCoroinhas from '../Images/Pastorais/3-coroinhas.jpg';
import ImgMesc from '../Images/Pastorais/4-MESC.jpg';
import ImgBatismo from '../Images/Pastorais/5-Batismo.jpg';
import ImgAcolhida from '../Images/Pastorais/6-Acolhida.jpg';
import ImgDizimo from '../Images/Pastorais/7-Dízimo.jpg';
import ImgCatequese from '../Images/Pastorais/8-Catequese.webp';
import ImgPascom from '../Images/Pastorais/9-PASCOM.jpg';
import ImgIdoso from '../Images/Pastorais/10-PastoralDaPessoaIdosa.jpg';
import ImgFamiliar from '../Images/Pastorais/11-PastoralFamiliar.jpg';
import ImgSobriedade from '../Images/Pastorais/12-Sobriedade.jpg';
// Fotos de coordenadores
import CoordLiturgia from '../Images/Coordenadores-Pastorais/1Liturgia.webp';
import PlaceholderCoord from '../Images/Imaculada-Conceicao.webp';

export const pastoraisData = [
  {
    id: 'liturgia',
    nome: 'Pastoral da Liturgia',
    descricao: 'A Pastoral Litúrgica é o serviço de organizar e animar a vida litúrgica da comunidade, para que todos possam participar de forma ativa, consciente e frutuosa das celebrações. Cuidamos para que cada rito, leitura e canto ajude a assembleia a fazer uma profunda experiência de fé e encontro com Deus.',
    imagem: ImgLiturgia,
    icon: FaBible,
    coordenador: {
      nome: 'Maria Silva',
      foto: CoordLiturgia,
      telefone: '5511912345678'
    }
  },
  {
    id: 'musica',
    nome: 'Pastoral da Música',
    descricao: 'Com a missão de animar as celebrações através do canto, a Pastoral da Música utiliza o dom musical para louvar a Deus e ajudar a comunidade a rezar. Se você tem talento para cantar ou tocar, junte-se a nós!',
    imagem: ImgMusica,
    icon: FaMusic,
    coordenador: {
      nome: 'João Santos',
      foto: PlaceholderCoord,
      telefone: '5511987654321'
    }
  },
  {
    id: 'cerimoniarios',
    nome: 'Cerimoniários e Coroinhas',
    descricao: 'Servindo no altar com dedicação e zelo, os coroinhas e cerimoniários auxiliam o sacerdote durante as celebrações litúrgicas, garantindo a solenidade e a beleza dos ritos sagrados. É um serviço de grande honra e responsabilidade.',
    imagem: ImgCoroinhas,
    icon: FaChild,
    coordenador: {
      nome: 'Pedro Costa',
      foto: PlaceholderCoord,
      telefone: '5511912345679'
    }
  },
  {
    id: 'mesc',
    nome: 'Ministros Extraordinários da Sagrada Comunhão (MESC)',
    descricao: 'Os MESCs são leigos que, por um chamado especial, auxiliam na distribuição da Eucaristia durante as Missas e a levam aos enfermos e idosos que não podem vir à igreja, sendo um elo de comunhão entre Cristo e a comunidade.',
    imagem: ImgMesc,
    icon: FaDotCircle,
    coordenador: {
      nome: 'Ana Pereira',
      foto: PlaceholderCoord,
      telefone: '5511987654322'
    }
  },
  {
    id: 'batismo',
    nome: 'Pastoral do Batismo',
    descricao: 'Preparamos pais e padrinhos para o primeiro sacramento da vida cristã. Nossa missão é acolher as famílias e instruí-las sobre a importância do Batismo, a porta de entrada para a Igreja.',
    imagem: ImgBatismo,
    icon: FaCross,
    coordenador: {
      nome: 'Carlos Lima',
      foto: PlaceholderCoord,
      telefone: '5511912345680'
    }
  },
  {
    id: 'acolhida',
    nome: 'Pastoral da Acolhida',
    descricao: 'Somos o primeiro sorriso que você encontra ao chegar na casa do Pai. A Pastoral da Acolhida tem a missão de receber a todos com alegria e carinho, fazendo com que cada pessoa se sinta bem-vinda e parte da nossa família.',
    imagem: ImgAcolhida,
    icon: FaHandHoldingHeart,
    coordenador: {
      nome: 'Sofia Fernandes',
      foto: PlaceholderCoord,
      telefone: '5511987654323'
    }
  },
  {
    id: 'dizimo',
    nome: 'Pastoral do Dízimo',
    descricao: 'O dízimo é um ato de fé, partilha e gratidão. Nossa pastoral conscientiza a comunidade sobre a importância da contribuição para a manutenção da paróquia e a realização das obras de evangelização e caridade.',
    imagem: ImgDizimo,
    icon: FaDonate,
    coordenador: {
      nome: 'Lucas Martins',
      foto: PlaceholderCoord,
      telefone: '5511912345681'
    }
  },
  {
    id: 'catequese',
    nome: 'Pastoral da Catequese',
    descricao: 'A Catequese é o coração da formação cristã. Preparamos crianças, jovens e adultos para os sacramentos da Eucaristia e da Crisma, ensinando os fundamentos da nossa fé e o amor a Jesus Cristo.',
    imagem: ImgCatequese,
    icon: FaBookReader,
    coordenador: {
      nome: 'Isabela Rocha',
      foto: PlaceholderCoord,
      telefone: '5511987654324'
    }
  },
  {
    id: 'pascom',
    nome: 'Comunicação (PASCOM)',
    descricao: 'Somos a voz e a imagem da paróquia. A PASCOM utiliza os meios de comunicação para evangelizar, informar e conectar a comunidade, divulgando nossas celebrações, eventos e a Palavra de Deus.',
    imagem: ImgPascom,
    icon: FaCamera,
    coordenador: {
      nome: 'Rafael Almeida',
      foto: PlaceholderCoord,
      telefone: '5511912345682'
    }
  },
  {
    id: 'idoso',
    nome: 'Pastoral da Pessoa Idosa',
    descricao: 'Com um olhar de carinho e respeito, a Pastoral do Idoso promove a valorização e a integração da pessoa idosa na comunidade, oferecendo apoio espiritual, visitas e momentos de convivência.',
    imagem: ImgIdoso,
    icon: FaUserFriends,
    coordenador: {
      nome: 'Teresa Mendes',
      foto: PlaceholderCoord,
      telefone: '5511987654325'
    }
  },
  {
    id: 'familiar',
    nome: 'Pastoral Familiar',
    descricao: 'A Pastoral Familiar atua no apoio e na evangelização das famílias, base da sociedade e da Igreja. Promovemos encontros, formações e acompanhamento para fortalecer os laços matrimoniais e familiares à luz do Evangelho.',
    imagem: ImgFamiliar,
    icon: FaUsers,
    coordenador: {
      nome: 'Antônio Barros',
      foto: PlaceholderCoord,
      telefone: '5511912345683'
    }
  },
  {
    id: 'sobriedade',
    nome: 'Pastoral da Sobriedade',
    descricao: 'A Pastoral da Sobriedade oferece apoio e esperança para aqueles que lutam contra a dependência química e outras formas de vício, através da oração, da partilha e de um programa de vida baseado nos 12 passos da fé cristã.',
    imagem: ImgSobriedade,
    icon: FaPrayingHands,
    coordenador: {
      nome: 'Cláudia Ribeiro',
      foto: PlaceholderCoord,
      telefone: '5511987654326'
    }
  }
];
