import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Lightweight and Performant',
    Svg: require('@site/static/img/lightweight_and_performant.svg').default,
    description: (
      <>
       Offer high performance and low overhead.
      </>
    ),
  },
  {
    title: 'Easy to Use',
    Svg: require('@site/static/img/easy_to_use.svg').default,
    description: (
      <>
        Provide a simple API that makes it easy to create and use custom hooks in your projects.
      </>
    ),
  },
  {
    title: 'Flexible and Composable',
    Svg: require('@site/static/img/flexible_and_composable.svg').default,
    description: (
      <>
        Allow for easy composition of hooks and can be used in a wide variety of use cases.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
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
