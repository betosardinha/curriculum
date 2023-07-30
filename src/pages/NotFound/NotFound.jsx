import React from 'react';
import { useNavigate } from 'react-router-dom';

import Button from 'components/Button';

import NotFoundImage from 'assets/images/not-found.jpg';

import styles from './NotFound.module.scss';

function NotFound() {
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Ops! Página não encontrada</h1>

        <p className={styles.paragraph}>
          Tem certeza de que era isso que você estava procurando?
        </p>
        <p className={styles.paragraph}>
          Aguarde alguns instantes e recarregue a página, ou volte para a página inicial.
        </p>

        {/* eslint-disable-next-line jsx-a11y/no-static-element-interactions */}
        <div
          className={styles.buttoncontainer}
          onClick={() => navigate('/')}
          onKeyDown={() => navigate('/')}
        >
          <Button>
            Voltar
          </Button>
        </div>

        <img
          className={styles.image404}
          src={NotFoundImage}
          alt="Personagem apontando para uma tea com o erro 404"
        />
      </div>

      <div className={styles.space} />
    </>
  );
}

export default NotFound;
