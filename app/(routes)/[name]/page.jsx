"use client"

import React from 'react';
import { usePathname } from 'next/navigation';
import InvitationDetails from '@/components/InvitationDetails';
import HeroPage from '@/components/heroPage';

const InvitationPage = () => {
  const pathname = usePathname();

  const parts = pathname.split('/');
  const name = parts[parts.length - 1];

  const invitees = [
    {
        name:'dky',
        displayName: 'Dr. Dharmveer Kumar Yadav',
        addDetail:'Department of Computer Science & Engineering',
        imageUrl: '/dharmveersir.png',
        pdfUrl: '/dharmveersirinvitation.pdf',
    },
    {
        name:'snk',
        displayName: 'Prof. Sneha Kumari',
        addDetail:'Department of Computer Science & Engineering',
        imageUrl: '/snehamaam.png',
        pdfUrl: '/snehamaaminvitation.pdf',
    },
    {
        name:'mta',
        displayName: 'Prof. Md. Talib Ahmad',
        addDetail:'Department of Computer Science & Engineering',
        imageUrl: '/talibsir.png',
        pdfUrl: '/talibsirinvitation.pdf',
    },
    {
        name:'pks',
        displayName: 'Prof. Pradeep Kumar Sharma',
        addDetail:'Department of Computer Science & Engineering',
        imageUrl: '/pradeepsir.png',
        pdfUrl: '/pradeepsirinvitation.pdf',
    },
    {
        name:'sjk',
        displayName: 'Prof. Sujeet Kumar',
        addDetail:'Department of Computer Science & Engineering',
        imageUrl: '/sujeetsir.png',
        pdfUrl: '/sujeetsirinvitation.pdf',
    },
    // {
    //     name:'sbk',
    //     displayName: 'Prof. Subodh Kumar',
    //     addDetail:'Department of Computer Science & Engineering',
    //     imageUrl: '/subodhsir.png',
    //     pdfUrl: '/subodhsirinvitation.pdf',
    // },
    {
        name:'rk',
        displayName: 'Dr. Ranjana Kumari',
        addDetail:'Department of Electrical & Electronics Engineering',
        imageUrl: '/ranjanamaam.png',
        pdfUrl: '/ranjanamaaminvitation.pdf',
    },
    {
        name:'vrk',
        displayName: 'Dr. Ram Kumar',
        addDetail:'Department of Electrical & Electronics Engineering',
        imageUrl: '/ramsir.png',
        pdfUrl: '/ramsirinvitation.pdf',
    },
    {
        name:'rrs',
        displayName: 'Prof. Rajev Ranjan Sinha',
        addDetail:'Department of Electrical & Electronics Engineering',
        imageUrl: '/rajeevsir.png',
        pdfUrl: '/rajeevsirinvitation.pdf',
    },
    {
        name:'aks',
        displayName: 'Prof. Abhijeet Kumar',
        addDetail:'Department of Electrical & Electronics Engineering',
        imageUrl: '/abhijeetsir.png',
        pdfUrl: '/abhijeetsirinvitation.pdf',
    },
    {
        name:'slk',
        displayName: 'Prof. Sunil Kumar',
        addDetail:'Department of Applied Science & Humanities',
        imageUrl: '/sunilsir.png',
        pdfUrl: '/sunilsirinvitation.pdf',
    },
    {
        name:'yk',
        displayName: 'Prof. Yadesh Kumar',
        addDetail:'Department of Mathematics',
        imageUrl: '/yadeshsir.png',
        pdfUrl: '/yadeshsirinvitation.pdf',
    },
    {
        name:'pky',
        displayName: 'Prof. Promod Kumar Yadav',
        addDetail:'Department of Mathematics',
        imageUrl: '/promodsir.png',
        pdfUrl: '/promodsirinvitation.pdf',
    },
    {
        name:'ta',
        displayName: 'Prof. Md. Tarik Anwar',
        addDetail:'Department of Chemistry',
        imageUrl: '/tariksir.png',
        pdfUrl: '/tariksirinvitation.pdf',
    },
    {
        name:'snr',
        displayName: 'Dr. S.N. Roy',
        addDetail:'Department of Physics',
        imageUrl: '/snroysir.png',
        pdfUrl: '/snroysirinvitation.pdf',
    },
    {
        name:'swk',
        displayName: 'Prof. Swati Kumari',
        addDetail:'Department of English',
        imageUrl: '/swatimaam.png',
        pdfUrl: '/swatimaaminvitation.pdf',
    },
    {
        name:'ak',
        displayName: 'Prof. Ajay Kumar',
        addDetail:'Department of Mechanical Engineering',
        imageUrl: '/ajay.png',
        pdfUrl: '/ajaysirinvitation.pdf',
    },
    {
        name:'mk',
        displayName: 'Md. Maksood Alam',
        addDetail:'Department of Electrical & Electronics Engineering',
        imageUrl: '/maksoodji.png',
        pdfUrl: '/maksoodsirinvitation.pdf',
    },
    {
        name:'anj',
        displayName: 'Ms. Anjali Kumari',
        addDetail:'Department of Computer Science & Engineering',
        imageUrl: '/anjalimaam.png',
        pdfUrl: '/anjalimaaminvitation.pdf',
    }

    // Add more invitees and their details above

    // Dr. Dharmveer Kumar Yadav
    // Prof. Sneha Kumari
    // Prof. MD. Talib Ahmad
    // Prof. Pradeep Kumar Sharma
    // Prof. Sujeet Kumar
    // Dr. Ranjana Kumari
    // Dr. Ram Kumar
    // Prof. Rajev Ranjan Sinha
    // Prof. Abhijeet Kumar
    // Prof. Sunil Kumar
    // Prof. Yadesh Kumar
    // Prof. Promod Kumar Yadav
    // Md. Tarik Anwar
    // Dr. S.N. Roy 
    // Prof. Swati Kumari
    // Prof. Ajay Kumar
    // Maksood
    // Anjali
  ];

  const invitee = invitees.find(invitee => invitee.name === name);
  const venue = 'Room No. 205, Academic Building';
  const date = '5th September 2023';
  const time = '13:00 - 15:00';
  const targetDate = new Date('2023-09-05T13:00:00'); // September 5, 2023, 13:00
  const currentTime = new Date();
  const timeDifference = targetDate - currentTime;


//part for extracting all invitee name in an array
//   const invt=[];
// for (let i=0; i<(invitees.length);i++){
//    invt[i]=invitees[i].displayName 
// };
// console.log(invt);

  return (
    <div className="text-[#ffffffe6]">
       {invitee ? (
        <React.Fragment className="bg-[#19191f]">
        <HeroPage/>
        <InvitationDetails
          invitee={invitee}
          venue={venue}
          date={date}
          time={time}
          targetDate={targetDate}
          timeDifference={timeDifference}
        />
        </React.Fragment>
      ) : (
        <p>We&apos;re excited to celebrate with our invited guests. If you have any questions, please feel free to reach out.</p>          
      )}
    </div>
  );
}

export default InvitationPage;
