import React, { useRef, useState } from 'react';

import drawer from '../Assets/img/drawers.jpg';
import avatar from '../Assets/img/avatar-michelle.jpg';
import { ReactComponent as Share } from '../Assets/svg/icon-share.svg';
import { ReactComponent as Facebook } from '../Assets/svg/icon-facebook.svg';
import { ReactComponent as Twitter } from '../Assets/svg/icon-twitter.svg';
import { ReactComponent as Pinterest } from '../Assets/svg/icon-pinterest.svg';

import useOutsideClick from '../hooks/useOnClickOutside';

import styles from '../Assets/article.module.scss';

const Article = () => {
  const [visiblePopup, setVisiblePopup] = useState(false);

  const ref = useOutsideClick(() => setVisiblePopup(false));

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

            {visiblePopup && (
              <div className={styles.popup}>
                <span>SHARE</span>
                <div className={styles.icons}>
                  <Facebook />
                  <Twitter />
                  <Pinterest />
                </div>
              </div>
            )}

            <div
              ref={ref}
              className={visiblePopup ? styles.share_button__light : styles.share_button}
              onClick={() => setVisiblePopup(!visiblePopup)}>
              <Share />
            </div>
          </div>
        </div>
      </article>
    </main>
  );
};

export default Article;
