import styles from '../styles/Services.module.css';

const Services = () => {
  const services = [
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 512 512">
          <path fill="#23A6F0" fill-rule="evenodd" d="M331.52 117.547c0 41.386-33.707 74.88-74.88 74.88c-41.387 0-74.88-33.494-74.88-74.88c0-41.387 33.493-74.88 74.88-74.88s74.88 33.493 74.88 74.88m-96.853 125.748L64 157.867v215.04l170.667 85.428zm42.666 215.681l171.947-86.069v-215.04l-171.947 86.069z" clip-rule="evenodd" />
        </svg>
      ),
      title: 'Easy Wins',
      description: 'Get your best looking smile now!',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 32 32">
          <path fill="#23A6F0" d="M19 10h7v2h-7zm0 5h7v2h-7zm0 5h7v2h-7zM6 10h7v2H6zm0 5h7v2H6zm0 5h7v2H6z" />
          <path fill="#23A6F0" d="M28 5H4a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h24a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2M4 7h11v18H4Zm13 18V7h11v18Z" />
        </svg>
      ),
      title: 'Concrete',
      description: 'Defalcate is most focused in helping you discover your most beautiful smile',
    },
    {
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="75px" height="75px" viewBox="0 0 24 24">
          <path fill="#23A6F0" d="M13.75 9a.75.75 0 0 1 .75-.75H18a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-1.5 0v-1.69l-4.72 4.72a.75.75 0 0 1-1.06 0L9 13.06l-2.47 2.47a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0L12 13.94l4.19-4.19H14.5a.75.75 0 0 1-.75-.75" />
        </svg>
      ),
      title: 'Hack Growth',
      description: 'Overcame any hurdle or any other problem.',
    },
  ];

  return (
    <div className={styles.bestServices}>
      <h2>Featured Products</h2>
      <h1>THE BEST SERVICES</h1>
      <p>Problems trying to resolve the conflict between</p>
      <div className={styles.servicesGrid}>
        {services.map((service, index) => (
          <div key={index} className={styles.serviceCard}>
            <div className={styles.serviceIcon}>{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;