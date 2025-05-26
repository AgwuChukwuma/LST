import styles from '../styles/About.module.css';
import { FaStar } from 'react-icons/fa';

const About = () => {
  const testimonial = {
    profileImage: 'public/51b41f20db95c385c8df9dbc1cafee5ea93687e3.png',
    rating: 5,
    review: 'Iate helps you see how many more days you need to work to reach your financial goal.',
    author: 'Regina Miles',
    role: 'Designer',
  };

  const galleryImages = [
    'public/00879f3ee04a28c786575d51ff2f5509decb573e.jpg',
    'public/fe81f5a662540563739b657086248ad0a382191d.jpg',
    'public/78ddce2cecd29b2f7fd0c822f75470879b361df4.jpg',
    'public/5aad40cccc61574568d928d6a3147584c8aeee3f.jpg',
    'public/8cfa532a7a9b5738525b19f05184c6b37f1fff13.jpg',
    'public/29c0fceb11870fcea081912ee81e40aa61518ea2.jpg',
    'public/780f07e11d7abbd5dfd2c9fe2a7b49e26a96ccdd.jpg',
    'public/9cf26ace499c6af2de3f0d3ed8c1a042e945720a.jpg',
    'public/5249b308b86b7010cacb5bed89efef6c365df384.jpg',
  ];

  return (
    <div className={styles.about}>
      <div className={styles.testimonials}>
        <div className={styles.testimonialContent}>
          <h1>What they say about us</h1>
          <div className={styles.profile}>
            <img src={testimonial.profileImage} alt="Profile" className={styles.profileImage} />
          </div>
          <div className={styles.rating}>
            {[...Array(testimonial.rating)].map((_, index) => (
              <FaStar key={index} size={20} color="#FFD700" />
            ))}
          </div>
          <p className={styles.review}>{testimonial.review}</p>
          <p className={styles.author}>{testimonial.author}</p>
          <p className={styles.role}>{testimonial.role}</p>
        </div>
        <div className={styles.imageGallery}>
          {galleryImages.map((image, index) => (
            <img key={index} src={image} alt={`Gallery ${index + 1}`} className={styles.galleryImage} />
          ))}
        </div>
      </div>

      <div className={styles.problemsSection}>
        <div className={styles.problemsContent}>
          <h2>Designing Better Experience</h2>
          <h1>Problems trying to resolve the conflict between</h1>
          <p>Problems trying to resolve the conflict between the two major realms of Classical physics:</p>
          <span className={styles.price}>$16.48</span>
        </div>
        <div className={styles.imageContainer}>
          <img src="public/dax.jpg" alt="Kitchen Utensils" className={styles.utensilsImage} />
        </div>
        <button className={styles.ctaButton}>ADD YOUR CALL TO ACTION</button>
      </div>
    </div>
  );
};

export default About;