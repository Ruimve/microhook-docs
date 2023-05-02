import React from 'react';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: <Translate id="theme.pages.LAP">Lightweight and Performant</Translate>,
    Svg: require('@site/static/img/lightweight_and_performant.svg').default,
    description: (
      <Translate id="theme.pages.LAPText">
        Offer high performance and low overhead.
      </Translate>
    ),
  },
  {
    title: <Translate id="theme.pages.ETU">Easy to Use</Translate>,
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: (
      <Translate id="theme.pages.ETUText">
        Provide a simple API that makes it easy to create and use custom hooks in your projects.
      </Translate>
    ),
  },
  {
    title: <Translate id="theme.pages.FAC">Flexible and Composable</Translate>,
    Svg: require('@site/static/img/flexible_and_composable.svg').default,
    description: (
      <Translate id="theme.pages.FACText">
        Allow for easy composition of hooks and can be used in a wide variety of use cases.
      </Translate>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
