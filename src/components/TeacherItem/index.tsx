import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css';
import api from '../../services/api';
export interface Teacher {
  id: number;
  subject: string;
  cost: number;
  name: string;
  avatar: string;
  whatsapp: string;
  bio: string;
}
interface TeacherItemProps {
  classes: Teacher;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ classes }) => {
  function createNewConnection() {
    api.post('connections', {
      user_id: classes.id,
    });
  }
  return (
    <article className="teacher-item">
      <header>
        <img src={classes.avatar} alt={classes.name} />
        <div>
          <strong>{classes.name}</strong>
          <span>{classes.subject}</span>
        </div>
      </header>

      <p>{classes.bio}</p>

      <footer>
        <p>
          Preço/Hora
          <strong>R$ {classes.cost},00</strong>
        </p>
        <a
          target="_black"
          onClick={createNewConnection}
          href={`https://wa.me/+55${classes.whatsapp}`}
        >
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </a>
      </footer>
    </article>
  );
};

export default TeacherItem;
