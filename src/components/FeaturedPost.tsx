import styles from '../styles/FeaturedPost.module.css';

const FeaturedPosts = () => {
  const posts = [
    {
      id: 1,
      image: '/1c5391d2189bc18c1b18efcbdf935a7b58775de7.jpg',
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
      isNew: true,
    },
    {
      id: 2,
      image: '/f9f3a7c3d345cb2add9d6095dc3dd76a31853c57.jpg',
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
      isNew: true,
    },
    {
      id: 3,
      image: '/3016ca710ac5895ef5c1226ea345dafd1986d3f7.jpg',
      title: "Loudest à la Madison #1 (L'Integral)",
      description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
      date: '22 April 2021',
      comments: 10,
      isNew: true,
    },
  ];

  return (
    <div className={styles.featuredPosts}>
      <h2>Practice Advice</h2>
      <h1>Featured Posts</h1>

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.postCard}>
            {post.isNew && <span className={styles.newLabel}>NEW</span>}

            <img src={post.image} alt={post.title} className={styles.postImage} />

            <div className={styles.postContent}>
              <span className={styles.source}>Google</span>
              <span className={styles.trending}>Trending</span>
              {post.isNew && <span className={styles.new}>New</span>}

              <h3>{post.title}</h3>
              <p>{post.description}</p>

              <div className={styles.postMeta}>
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24">
                    <rect width="24" height="24" fill="none" />
                    <g fill="none" stroke="#23A6F0" strokeWidth="2">
                      <circle cx="12" cy="12" r="7" />
                      <path strokeLinecap="round" d="M5.965 3.136a4 4 0 0 0-2.829 2.829m14.899-2.829a4 4 0 0 1 2.829 2.829M12 8v3.75c0 .138.112.25.25.25H15" />
                    </g>
                  </svg>{' '}
                  {post.date}
                </span>

                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 16">
                    <rect width="16" height="16" fill="none" />
                    <g fill="#23856D">
                      <path d="M15 13v1H1.5l-.5-.5V0h1v13z" />
                      <path d="M13 3.207L7.854 8.354h-.708L5.5 6.707l-3.646 3.647l-.708-.708l4-4h.708L7.5 7.293l5.146-5.147h.707l2 2l-.707.708z" />
                    </g>
                  </svg>{' '}
                  {post.comments} comments
                </span>
              </div>

              <a href="#" className={styles.learnMore}>
                Learn More{' '}
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="20" viewBox="0 0 12 24">
                    <rect width="12" height="24" fill="none" />
                    <path
                      fill="#23A6F0"
                      fillRule="evenodd"
                      d="M10.157 12.711L4.5 18.368l-1.414-1.414l4.95-4.95l-4.95-4.95L4.5 5.64l5.657 5.657a1 1 0 0 1 0 1.414"
                    />
                  </svg>
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
