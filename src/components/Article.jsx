import React from 'react';
import drawer from '../Assets/img/drawers.jpg';
import styles from '../Assets/article.module.scss';

const Article = () => {
  return (
    <main>
      <article>
        <div>
          <img src={drawer} alt="" />
        </div>

        <div>
          <h1>
            Shift the overall look and feel by adding these wonderful touches to furniture in your
            home
          </h1>
          <p>
            Ever been in a room and felt like something was missing? Perhaps it felt slightly bare
            and uninviting. I’ve got some simple tips to help you make any room feel complete.
          </p>

          <h2>Michelle Appleton</h2>
          <p>28 Jun 2020</p>
        </div>
      </article>
    </main>
  );
};

export default Article;
