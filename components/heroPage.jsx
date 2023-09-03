"use client"

import React from 'react';

import styles from '@/components/assets/css/heroStyle.module.css'

const HeroPage = () => { 

    return (

        <div
        className={styles.bgMain}
        style={{
          background: 'url("/spikes.svg")',
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundColor: "#19191f"
        }}
      >
        {/* ======= Hero Section ======= */}
        <section id="hero" className={styles.hero}>
          <div className={styles.container} data-aos="zoom-out" data-aos-delay={100}>
            <h6 style={{ paddingTop: 250 }} />
            <div className={styles.logoimg}>
              {" "}
              <img id="mainLogo" className={styles.mainLogo} src="celebrating_our_educators_logo.png" alt="" />
            </div>
            <h2 className='mt-4'>
              {" "}
              <b>
                {" "}
                <span style={{ color: "#66DFFE" }}>Mentor</span> |{" "}
                <span style={{ color: "#BF7EFB" }}>Inspire</span> |{" "}
                <span style={{ color: "#FAD17F" }}>Enlighten</span>
              </b>
            </h2>
            <h4
              className="add"
              style={{
                color: "#F0F817",
                marginTop: 40,
                marginBottom: 30,
                fontWeight: 500,
                fontFamily: '"Montserrat", sans-serif',
                fontSize: 18
              }}
            >
              Katihar Engineering College, Katihar | Sept 05, 2023
            </h4>
          </div>
        </section>
      </div>
      
    );
};
  
export default HeroPage;