import React from "react";
import Slider from "react-slick";
import { SectionTitle } from "./ui/SectionTitle";
import { CertificationCard } from "./ui/CertificationCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const certifications = [
  {
    title: "Data Analytics with Specialisation in Tableau Worshop",
    issuer: "Jobaaj Learnings",
    date: "Jul 2024",
    link: "https://www.jobaajlearnings.com/certificate?file=certificate-117262-37-0.jpeg",
    image: "https://cdn.nishtyainfotech.com/learnings/certificates/certificate-117262-37-0.jpeg",
  },
  {
    title: "Artificial Intelligence",
    issuer: "Great Learning",
    date: "Aug 2024",
    link: "https://olympus.mygreatlearning.com/courses/61717/certificate",
    image: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/5171217/original/Ankit20240811-71-r749p5.jpg",
  },
  {
    title: "Front End Development - CSS",
    issuer: "Great Learning",
    date: "Jul 2024",
    link: "https://olympus.mygreatlearning.com/courses/12800/certificate",
    image: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/5065938/original/Ankit20240724-69-1j3w1y6.jpg",
  },
  {
    title: "Java Programming",
    issuer: "Great Learning",
    date: "Jul 2024",
    link: "https://olympus.mygreatlearning.com/courses/12385/certificate",
    image: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/5171205/original/Ankit20240811-71-1tkyo6d.jpg",
  }, 
  {
    title: "Python",
    issuer: "Great Learning",
    date: "Aug 2024",
    link: "https://olympus.mygreatlearning.com/courses/12682/certificate",
    image: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/5171270/original/Ankit20240811-71-5nvnhv.jpg",
  }, 
  {
    title: "React Js",
    issuer: "Great Learning",
    date: "Aug 2024",
    link: "https://olympus.mygreatlearning.com/courses/52045/certificate",
    image: "https://dtmvamahs40ux.cloudfront.net/ComplementaryCourseCertificate/5171244/original/Ankit20240811-71-1nuzxus.jpg",
  },
  ];

export function Certifications() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
    
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-8">
        <SectionTitle>Certificates</SectionTitle>
        <Slider {...settings} className="max-w-6xl mx-auto">
          {certifications.map((cert) => (
            <div key={cert.title} className="px-4">
              <CertificationCard {...cert} />
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
