import React, { useEffect } from 'react';
import Script from 'next/script';
import $ from 'jquery';


import Styles from '@/components/assets/css/TeacherDayGallery.module.css';

<Script
  src="https://code.jquery.com/jquery-3.6.0.min.js"
  strategy="beforeInteractive"
/>

const TeacherDayGallery = () => {

useEffect(() => {

    if (typeof window !== "undefined") {
    const platforms = document.querySelector('#p1 #s1');
    const rollingAnimation = platforms.animate(
        [
        { transform: 'translateX(0)' },
        { transform: `translateX(${-200 * 6.2}px)` }
        ],
        { iterations: Infinity, duration: 17 * 1000 }
    );

    
    const platforms1 = document.querySelector('#p2 #s2');

    const rollingAnimation1 = platforms1.animate([
        { transform: 'translateX(-2500px)' },
        { transform: `translateX(${200 * 1}px)` }
    ],
    { iterations: Infinity, duration: 40 * 1000 });

    const rollCarousel = () => {
        rollingAnimation.play();
    };

    const pauseCarousel = () => {
        rollingAnimation.pause();
    };

        
    function rollCarousel1() {
        rollingAnimation1.play();
    }

    function pauseCarousel1() {
        rollingAnimation1.pause();
    }


    platforms.addEventListener('mouseover', pauseCarousel);
    platforms.addEventListener('mouseout', rollCarousel);

    platforms1.addEventListener('mouseover', pauseCarousel1);
    platforms1.addEventListener('mouseout', rollCarousel1);

    if (window.matchMedia('(max-width: 800px)').matches) {
        transform: `translateX(${-150 * 13}px)`
    }

    $('a.taphover').on("touchstart", function (e) {
        "use strict"; //satisfy the code inspectors
        var link = $(this); //preselect the link
        if (link.hasClass('hover')) {
            return true;
        } else {
            link.addClass("hover");
            $('a.taphover').not(this).removeClass("hover");
            e.preventDefault();
            return false; //extra, and to make sure the function has consistent return points
        }
        });

    }
    }, []);
    

  return (
    <React.Fragment>
    <section id="about"  className="pt-4">
      <div className={Styles.head_title} data-aos="fade-up">
          <h3 className={Styles.copy_write_con}>
            <span>Last Year's Teacher's Day Highlights</span>
          </h3>
      </div>

      <br />

      <div id="p1" className={Styles.platforms}>
        <div id="s1" className={Styles.slideTrack}>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg1.jpg" alt="Image 1" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg2.jpg" alt="Image 2" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg3.jpg" alt="Image 3" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg4.jpg" alt="Image 4" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg5.jpg" alt="Image 5" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg6.jpg" alt="Image 6" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg7.jpg" alt="Image 7" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg8.jpg" alt="Image 8" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg9.jpg" alt="Image 9" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg10.jpg" alt="Image 10" />
          </a>
        </div>
      </div>

      <br />

      
      <div id="p2" className={Styles.platforms}>
        <div id="s2" className={Styles.slideTrack}>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg11.jpg" alt="Image 11" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg12.jpg" alt="Image 12" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg13.jpg" alt="Image 13" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg14.jpg" alt="Image 14" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg15.jpg" alt="Image 15" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg16.jpg" alt="Image 16" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg17.jpg" alt="Image 17" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg18.jpg" alt="Image 18" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg19.jpg" alt="Image 19" />
          </a>
          <a className={Styles.taphover} id={Styles.top}>
            <img loading="lazy" src="/gimg20.jpg" alt="Image 20" />
          </a>
        </div>
      </div>

    </section>

    <section className={Styles.copy_write_con}>

    <div className={Styles.head_title}>
    Made with 💙 by C.S.E 2K21 using nextJs
    </div>
    <br />
    <div className={Styles.coc}>  <a href="https://github.com/kgaurav152/" target="_blank"> Visit Repository </a> | <a href="https://linktr.ee/kgaurav152" target="_blank">About Dev</a>  </div>
    <br />
    <div className={Styles.coc}>Copyright © C.S.E 2K21, 2023</div>

    </section>

</React.Fragment>

  );
};

export default TeacherDayGallery;
