"use client"

import React from "react";
import Link from "next/link";
import Image from "next/image"
import { motion } from 'framer-motion';
import {buttonVariants} from "@/components/ui/button"
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

import TeacherDayGallery from "@/components/teacherDayGallery";

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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <h1>Welcome, {displayName}!</h1>
        </motion.div>
        <div className="frame-animation mt-4">
          <Image
            src={imageUrl || '/default-image.jpg'}
            alt={`${displayName}&apos;s Picture`}
            width={300}
            height={200}
          />
        </div>
        <div className="flex flex-col md:flex-row button-container-div p-3 gap-4 md:gap-0">
        {mapUrl && (
        <Link className={cn(buttonVariants({ variant: "destructive" }), "mr-4 md:mr-10")} href={mapUrl} target="_blank">Direction to Venue</Link>
        )}
        {pdfUrl && (
          <Link className={cn(buttonVariants({ variant: "destructive" }), "mr-4 md:mr-10 gap-2")} href={pdfUrl} download={`${displayName}_invitation.pdf`}>
            Download Invitation
          </Link>
        )}
        </div>
        {/* Other details like venue, date, time */}
        <p className="flex flex-col align-items-center justify-content-center">
        In recognition of your exceptional dedication, guidance, and unwavering support, we cordially invite you to the Teacher&apos;s Day Celebration.
        Your remarkable contributions have shaped countless minds and inspired a generation of learners.
        </p>
        <p>Venue: {venue}</p>
        <p>Date: {date}</p>
        <p>Time: {time}</p>
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