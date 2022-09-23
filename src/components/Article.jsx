import React, { useState } from 'react';

import drawer from '../Assets/img/drawers.jpg';
import avatar from '../Assets/img/avatar-michelle.jpg';
import { ReactComponent as Share } from '../Assets/svg/icon-share.svg';

import styles from '../Assets/article.module.scss';

const Article = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  return (
    <main>
      <article>
        <div className={styles.image}>
          <img src={drawer} alt="drawer" />
        </div>

        <div className={styles.info}>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to furniture in your
            home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
            and uninviting. I’ve got some simple tips to help you make any room feel complete.
          </p>

          <div className={styles.share}>
            <img src={avatar} alt="avatar" />
            <div className={styles.user}>
              <h2>Michelle Appleton</h2>
              <p>28 Jun 2020</p>
            </div>
            {visiblePopup && <div className={styles.popup}>SHARE</div>}
            <div className={styles.share_button} onClick={() => setVisiblePopup(true)}>
              <Share />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Article;
