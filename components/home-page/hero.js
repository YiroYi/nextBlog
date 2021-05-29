import Image from 'next/image';

import classes from './hero.module.css';

const Hero = props => {
  return(
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/copy.png"
          alt="Main image"
          width={300}
          height={300}
        />
      </div>
      <h1>I'm Yiro</h1>
      <p>Blog about, life, coding, travels and Kripto</p>
    </section>
  );
}

export default Hero;
