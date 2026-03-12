import { FaHandshake, FaUserFriends, FaUsers, FaRoad, FaPrayingHands, FaFemale } from 'react-icons/fa';
import PlaceholderImg from '../Images/Imaculada-Conceicao.webp';

export const movimentosData = [
  {
    id: 'mac',
    nome: 'MAC',
    descricao: 'Movimento de Acolhida Cristã: serviço de evangelização e acolhida nas necessidades da comunidade.',
    imagem: PlaceholderImg,
    icon: FaHandshake,
  },
  {
    id: 'ecc',
    nome: 'ECC',
    descricao: 'Encontro de Casais com Cristo: caminho de espiritualidade, diálogo e serviço para as famílias.',
    imagem: PlaceholderImg,
    icon: FaUserFriends,
  },
  {
    id: 'ejc',
    nome: 'EJC',
    descricao: 'Encontro de Jovens com Cristo: formação, missão e protagonismo juvenil na Igreja.',
    imagem: PlaceholderImg,
    icon: FaUsers,
  },
  {
    id: 'via-sacra',
    nome: 'Via Sacra',
    descricao: 'Percurso de oração e meditação da Paixão de Cristo vivido pela comunidade.',
    imagem: PlaceholderImg,
    icon: FaRoad,
  },
  {
    id: 'terco-dos-homens',
    nome: 'Terço dos Homens',
    descricao: 'Homens reunidos em fraternidade para rezar o Santo Terço e fortalecer a vida de fé.',
    imagem: PlaceholderImg,
    icon: FaPrayingHands,
  },
  {
    id: 'maes-que-oram',
    nome: 'Mães que Oram pelos Filhos',
    descricao: 'Grupo de oração de mães intercedendo pelos filhos e famílias.',
    imagem: PlaceholderImg,
    icon: FaFemale,
  },
];
