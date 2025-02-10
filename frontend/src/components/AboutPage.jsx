function AboutPage() {
    return (
      <div className="about-page">
        <h1>About Us</h1>
        <p>
          Welcome to our blog platform! We are a team of developers passionate about creating
          meaningful and user-friendly applications. Below, you can find our GitHub profiles:
        </p>
  
        <div className="github-profiles">
          <div className="profile">
            <h2>Ali Asghar Faridi</h2>
            <a
              href="https://github.com/Ali5Faridi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/158269574?v=4"
                alt="Ali Aghar Faridi"
                className="github-avatar"
              />
              <p>GitHub Profile</p>
            </a>
          </div>
  
          {/* Add more team members here */}
          <div className="profile">
            <h2>Momad Seyfi</h2>
            <a
              href="https://github.com/Momad-Seyfi"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://avatars.githubusercontent.com/u/163144786?s=96&v=4"
                alt="Momad Seyfi"
                className="github-avatar"
              />
              <p>GitHub Profile</p>
            </a>
          </div>
        </div>
      </div>
    );
  }
  
  export default AboutPage;