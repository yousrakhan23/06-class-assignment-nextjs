import React from "react";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import CourseCategory from "../components/CoursesCategory";
import OurAchievement from "@/components/OurAchievement";
import Courses from "@/components/Courses";
import OurTeam from "@/components/OurTeam";
import CustomerTestimonial from "@/components/CustomerTestimonials";
import Footer from "@/components/Footer";





const Home = () => {
  return (
    <div >
      <Header />
      <HeroSection />
      <CourseCategory />
      <OurAchievement />
      <Courses />
      <OurTeam />
      <CustomerTestimonial />
      <Footer />

    </div>
  )
}
export default Home;