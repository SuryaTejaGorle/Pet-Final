import React from 'react';
import styles from './StaticPages.module.css';

function About() {
  const teamMembers = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Animal lover with 15 years of experience in animal welfare and rescue operations.'
    },
    {
      name: 'Mike Chen',
      role: 'Head of Operations',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Former veterinarian turned tech entrepreneur, dedicated to improving pet adoption processes.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Community Manager',
      image: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400',
      bio: 'Passionate about connecting pets with families and building strong community relationships.'
    }
  ];

  return (
    <div className={styles.staticPage}>
      <div className="container">
        {/* Hero Section */}
        <section className={styles.hero}>
          <h1>About PetHome</h1>
          <p className={styles.heroSubtitle}>
            Connecting loving families with pets in need since 2020
          </p>
        </section>

        {/* Mission Section */}
        <section className={styles.section}>
          <div className={styles.content}>
            <h2>Our Mission</h2>
            <p>
              At PetHome, we believe every pet deserves a loving home and every family 
              deserves the joy of a furry companion. Our mission is to make pet adoption 
              accessible, transparent, and rewarding for both pets and families by connecting 
              verified shelters with potential adopters through our innovative platform.
            </p>
            <p>
              We're committed to reducing pet homelessness and creating lasting bonds 
              between pets and their new families through careful matching, comprehensive 
              support, and ongoing community engagement.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className={`${styles.section} ${styles.story}`}>
          <div className={styles.storyContent}>
            <div className={styles.storyText}>
              <h2>Our Story</h2>
              <p>
                PetHome was founded in 2020 when our founder, Sarah Johnson, experienced 
                firsthand the challenges of pet adoption. After spending weeks visiting 
                multiple shelters and navigating complex adoption processes, she realized 
                there had to be a better way.
              </p>
              <p>
                What started as a simple idea to create a centralized platform for pet 
                adoption has grown into a nationwide network of over 500 verified shelters 
                and rescue organizations. We've successfully facilitated over 10,000 
                adoptions and continue to grow our impact every day.
              </p>
              <p>
                Today, PetHome stands as the leading pet adoption platform, trusted by 
                families and shelters across the country. Our technology-driven approach 
                combined with genuine care for animal welfare makes us unique in the industry.
              </p>
            </div>
            <div className={styles.storyImage}>
              <img 
                src="https://images.pexels.com/photos/2253275/pexels-photo-2253275.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Pet adoption success story" 
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className={styles.section}>
          <h2 className={styles.centerTitle}>Our Values</h2>
          <div className={styles.valuesGrid}>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🐾</div>
              <h3>Animal Welfare First</h3>
              <p>
                Every decision we make prioritizes the health, safety, and wellbeing 
                of the animals in our network.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🤝</div>
              <h3>Transparency</h3>
              <p>
                We believe in open, honest communication between all parties involved 
                in the adoption process.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>❤️</div>
              <h3>Compassion</h3>
              <p>
                We approach every interaction with empathy, understanding, and genuine 
                care for both pets and people.
              </p>
            </div>
            <div className={styles.valueCard}>
              <div className={styles.valueIcon}>🚀</div>
              <h3>Innovation</h3>
              <p>
                We continuously improve our platform and processes to make adoption 
                easier and more effective.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className={styles.section}>
          <h2 className={styles.centerTitle}>Meet Our Team</h2>
          <p className={styles.teamIntro}>
            Our dedicated team combines passion for animal welfare with expertise 
            in technology and community building.
          </p>
          <div className={styles.teamGrid}>
            {teamMembers.map((member, index) => (
              <div key={index} className={styles.teamCard}>
                <img src={member.image} alt={member.name} />
                <div className={styles.teamInfo}>
                  <h3>{member.name}</h3>
                  <p className={styles.teamRole}>{member.role}</p>
                  <p className={styles.teamBio}>{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Stats Section */}
        <section className={`${styles.section} ${styles.statsSection}`}>
          <h2 className={styles.centerTitle}>Our Impact</h2>
          <div className={styles.statsGrid}>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>10,000+</div>
              <div className={styles.statLabel}>Successful Adoptions</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Partner Shelters</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>25,000+</div>
              <div className={styles.statLabel}>Happy Families</div>
            </div>
            <div className={styles.statItem}>
              <div className={styles.statNumber}>50+</div>
              <div className={styles.statLabel}>States Covered</div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${styles.section} ${styles.cta}`}>
          <h2>Join Our Mission</h2>
          <p>
            Whether you're looking to adopt a pet, work with us as a shelter partner, 
            or support our mission in other ways, we'd love to hear from you.
          </p>
          <div className={styles.ctaButtons}>
            <a href="/browse-pets" className="btn btn-primary">
              Find Your Pet
            </a>
            <a href="/contact" className="btn btn-secondary">
              Get Involved
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}

export default About;