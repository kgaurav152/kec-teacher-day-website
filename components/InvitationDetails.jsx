"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image"
import { motion } from 'framer-motion';
import {buttonVariants} from "@/components/ui/button"
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import TeacherDayGallery from "@/components/teacherDayGallery";
import Styles from '@/components/assets/css/TeacherDayGallery.module.css';

const InvitationDetails = ({ invitee, venue, date, time, timeDifference, ...props }) => {
  
    let { displayName, imageUrl, pdfUrl } = invitee;

    // calculate the day,hour,minutes and seconds for countdown/remaining timer
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const mapUrl = "https://goo.gl/maps/PXCMuZj1XNiieVDV9";
    
    
    const [remainingTime, setRemainingTime] = useState([0, 0, 0, 0]); // [days, hours, minutes, seconds]
    
    useEffect(() => {
    const countDownDate = new Date('2023-09-05T14:00:00').getTime(); // Your target date and time
    const interval = setInterval(() => {
      // Get today's date and time
      const now = new Date().getTime();
      
      // Find the distance between now and the count down date
      const distance = countDownDate - now;
      
      // Calculate days, hours, minutes, and seconds
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);
      
      // Update countdownDetails array
      setRemainingTime([days, hours, minutes, seconds]);
    }, 1000);
    
    return () => {
      clearInterval(interval); // Clean up the interval when the component unmounts
    };
  }, []);
  

    return (
      <React.Fragment>
      <div className="@apply text-[clamp(1rem,0.95rem_+_0.25vw,1.25rem)] leading-[1.6] bg-[1760px_852px bg-cover bg-no-repeat bg-fixed m-0 bg-[url('/dot-stars.svg')] bg-[#19191f] flex flex-col align-items-center" style = {{backgroundPosition: '50% 28'}}>
        <div className="frame-animation mt-4 flex justify-center items-center">
          <div className="relative">
            <div className="absolute top-0 left-0 w-full h-full border-4 border-[#e1aeb5] animate-pulse"></div>
            <Image
              src={imageUrl || '/default-image.jpg'}
              alt={`${displayName}'s Picture`}
              width={300}
              height={200}
            />
          </div>
      </div>
      
      <h2 className={Styles.name_title}>{displayName}</h2>
       
        {/* Other details like venue, date, time */}
        
        <p className="flex flex-col text-xl align-items-center justify-content-center text-center p-8 mt-4 text-cyan-300 drop-shadow-md">
        In recognition of your exceptional dedication, guidance, and unwavering support, we cordially invite you to the Teacher&apos;s Day Celebration.
        Your remarkable contributions have shaped countless minds and inspired a generation of learners.
        </p>
        <p className="text-lg p-4 mt-2"><span className="text-red-500">Venue: </span>{venue}</p>
        <p className="text-lg p-4"><span className="text-red-500">Date: </span>{date}</p>
        <p className="text-lg p-4 mb-2"><span className="text-red-500">Time: </span> {time}</p>
        <div className="flex flex-col justify-center md:flex-row button-container-div p-3 gap-4 mt-2 mb-2 md:gap-0">
        {mapUrl && (
        <Link className={cn(buttonVariants({ variant: "destructive" }), "mr-4 md:mr-10")} href={mapUrl} target="_blank">Direction to Venue</Link>
        )}
        {pdfUrl && (
          <Link className={cn(buttonVariants({ variant: "destructive" }), "mr-4 md:mr-10 gap-2")} href={pdfUrl} download={`${displayName}_invitation.pdf`}>
            Download Invitation
          </Link>
        )}
        </div>
        <div className="bg-gray-200 w-3/4 md:w-1/2 lg:w-1/4 p-4 rounded-lg text-center self-center text-gray-800">
          <div className="grid grid-cols-2">
            <div className="bg-gradient-to-r from-red-500 to-red-700 p-10 text-white aspect-1">
                <p className="text-xl">{remainingTime[0]}</p>
                {" "}Day{remainingTime[0] > 1 ? 's' : ''}
            </div>
            <div className="bg-gradient-to-r from-blue-300 to-blue-500 p-10 text-white aspect-1">
                <p className="text-xl">{remainingTime[1]}</p>
                {" "}Hour{remainingTime[1] > 1 ? 's' : ''}
            </div>
            <div className="bg-purple-600 p-10 text-white aspect-1">
                <p className="text-xl">{remainingTime[2]}</p>
                {" "}Minute{remainingTime[2] > 1 ? 's' : ''}
            </div>
            <div className="bg-blue-900 p-10 text-white aspect-1">
                <p className="text-xl">{remainingTime[3]}</p>
                {" "}Second{remainingTime[3] > 1 ? 's' : ''}
            </div>
          </div>
        </div>
        
    <TeacherDayGallery />
    </div>
    </React.Fragment>
    );
};
  
export default InvitationDetails;