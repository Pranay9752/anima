import React from "react";
import { Badge } from "../../components/ui/badge";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "../../components/ui/navigation-menu";
import { Separator } from "../../components/ui/separator";
import { AnimatedSection } from "../../components/AnimatedSection";
import { image } from "framer-motion/client";
import {
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  Twitter,
} from "lucide-react";

// Data for navigation menu
const navItems = [
  "About Us",
  "Matches",
  "Programs",
  "Coaches",
  "Amenities",
  "Events",
  "News",
  "Blogs",
];

// Data for key features
const keyFeatures = [
  "First venue in the world",
  "First venue in the world",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First tennis academy in the world to have capabilities to stage WTA & ATP events too",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium; 5 Star Hunter Valley resort and airport all in 500 meters radius",
  "First one stop tennis acaderny inAsia Pacific",
  "First one stop tennis acaderny inAsia Pacific",
];

const programs = [
  {
    name: "Academy",
    slogan: "Live and train with us",
    image: "/academy.png",
  },
  {
    name: "Camps",
    slogan: "Train like a pro with us",
    image: "/camps.png",
  },
  {
    name: "Performance",
    slogan: "Elevate your game with us",
    image: "/performance.png",
  },
];

// Data for professionals
const professionals = [
  {
    name: "Craig Tiley",
    title: "CEO Tennis Australia & Australian Open",
    image: "/team-1.png",
  },
  {
    name: "Stephen Farrow",
    title: "Director - Tournament, Players & International Relations",
    image: "/team-2.png",
  },
  {
    name: "Cameron Pearson",
    title: "Head Major Events - Tennis Australia",
    image: "/team-3.png",
  },
];

// Data for connectivity
const connectivityItems = [
  { name: "Hunter Valley Golf And Country Club", distance: "220m" },
  { name: "Rydges Resort Hunter Valley", distance: "550m" },
  { name: "Cressnock Airport", distance: "1.7km" },
  { name: "Cressnock Cbd", distance: "7km" },
  { name: "Nulkaba Public School", distance: "4.8km" },
  { name: "Cressnock Hospital", distance: "7.3km" },
  { name: "Mcdonalds, Kfc, Oporto", distance: "7km" },
];

// Data for footer links
const footerLinks: String[] = [
  "About Us",
  "Coaches",
  "News",
  "Matches",
  "Events",
  "FAQS",
  "Programs",
  "Amenities",
  "Blogs",
];

export const Homepage = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full  relative">
        {/* Hero Section */}
        <div className="relative w-[100vw] h-[776px]">
          <img
            className="w-[100vw] h-full  object-cover"
            alt="Ezgif"
            src="/ezgif-1.svg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[rgba(0,47,80,1)] to-[rgba(0,58,93,0.16)]">
            {/* Navigation */}
            <div className="flex justify-between items-center px-16 py-10">
              <img
                className="w-[60px] h-[38px] object-cover"
                alt="SSA Logo"
                src="/ssa-logo03-1.svg"
              />

              <NavigationMenu>
                <NavigationMenuList className="flex gap-7">
                  {navItems.map((item, index) => (
                    <NavigationMenuItem key={index}>
                      <NavigationMenuLink className="font-normal text-white text-[13px]">
                        {item}
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>

              <Button
                variant="outline"
                className="rounded-[50px] border-[0.5px] border-white bg-transparent text-white text-xs h-[37px]"
              >
                Contact Us
              </Button>
            </div>

            {/* Hero Content */}
            <div className="flex flex-col items-center mt-24">
              <h1 className="[font-family:'Matter-Bold',Helvetica] text-center text-white text-[18px] font-bold tracking-[7.20px]">
                SSA HUNTER VALLEY
              </h1>

              <div className="mt-10 text-center">
                <h2 className="[font-family:'Matter-Light',Helvetica] text-white text-[50px] font-light leading-normal">
                  Grow Your Game with the <br />
                  <span className="[font-family:'Matter-Bold',Helvetica] font-bold">
                    Professionals
                  </span>
                </h2>
                <Separator className="w-[387px] h-0.5 mx-auto mt-8 bg-white" />
              </div>

              <div className="mt-10 w-[638px] h-[35px] bg-gradient-to-r from-[rgba(78,169,223,0)] via-[rgba(0,58,93,1)] to-[rgba(78,169,223,0)]">
                <div className="text-white text-lg tracking-[5.13px] text-center py-1">
                  ADOPT&nbsp;&nbsp;&nbsp;&nbsp; NURTURE&nbsp;&nbsp;&nbsp;&nbsp;
                  DELIVER
                </div>
                <div className="flex justify-center gap-40 relative">
                  <div className="w-2 h-2 bg-white rounded absolute left-[602px] -top-3"></div>
                  <div className="w-2 h-2 bg-white rounded absolute left-[769px] -top-3"></div>
                </div>
              </div>

              <Button
                variant="outline"
                className="mt-12 rounded-[50px] border-[0.5px] border-white bg-transparent text-white text-[13px] h-[45px] w-[140px]"
              >
                Register Now
              </Button>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
              <img className="w-[11px] h-9" alt="Arrow" src="/arrow-1.svg" />
            </div>
          </div>
        </div>

        {/* About Us Section */}
        <AnimatedSection className="relative px-16 py-24 max-w-[1400px] mx-auto">
          <div className="text-center max-w-[801px] mx-auto">
            <p className="text-2xl text-black [font-family:'Matter-Regular',Helvetica] mb-16">
              To be the first venue in the world to have{" "}
              <span className="[font-family:'Matter-Bold',Helvetica] font-bold text-[#002f50]">
                60 multi surface courts
              </span>{" "}
              <br />
              at one location and establish first one stop tennis academy <br />
              in the Asia Pacific producing grand slam champions.
            </p>
          </div>

          <div className="grid grid-cols-[30%,70%] gap-16 my-16 mx-auto">
            <div className="relative">
              <img
                className=" object-cover rounded-lg absolute z-10"
                alt="About Us"
                src="/about-us-1.png"
              />
            </div>
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-[#4da8df] rounded-[5px] mr-4 mt-2"></div>
              <h2 className="[font-family:'Matter-SemiBold',Helvetica]  font-semibold text-[#003a5d] text-4xl text-left">
                About Us
              </h2>
              <p className="[font-family:'Matter-Light',Helvetica] font-light text-black text-base mt-6 max-w-[509px]">
                To be the first venue in the world to have 60 multi surface
                courts at one location and establish first one stop tennis
                academy in the Asia Pacific producing grand slam champions.
              </p>
              <div className="flex items-center mt-6">
                <span className="[font-family:'Matter-Regular',Helvetica] text-[#003a5d] text-[15px]">
                  Read More
                </span>
                <img
                  className="w-7 h-[7px] ml-2"
                  alt="Arrow"
                  src="/arrow-2.svg"
                />
              </div>
              <img
                className=" object-cover rounded-lg absolute z-10 right-10 "
                alt="About Us"
                src="/about-us-2.png"
              />
            </div>
          </div>
        </AnimatedSection>

        {/* Testimonial Section */}
        <AnimatedSection className="relative h-[650px] bg-gradient-to-br from-[rgba(0,58,93,1)] to-[rgba(23,57,49,1)] ">
          <img
            className="w-full h-full object-cover absolute z-3 opacity-15 "
            alt="Background"
            src="/about-us.svg"
          />
          <div className="absolute inset-0 flex items-center justify-center mt-52">
            <div className="max-w-[801px] text-center">
              <p className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-white text-[35px]">
                &apos;&apos; We have created an environment ideal for building
                craft. Our goal is to be recognized as the best tennis
                performance centre in the world. &quot;
              </p>
              <Separator className="w-[804px] h-px bg-white mt-10" />
              <div className="mt-8 text-left">
                <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium text-white text-xl">
                  John Doe
                </h3>
                <p className="[font-family:'Matter-Regular',Helvetica] text-white text-base mt-2">
                  Chairman
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>
        <div className="relative">
          {/* Key Features Section */}
          <AnimatedSection className="relative px-16 py-24 max-w-[1400px] mx-auto">
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 bg-[#4da8df] rounded-[5px] mr-4 mt-2"></div>
              <div>
                <h2 className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-[#003a5d] text-4xl">
                  Key Features
                </h2>
                <p className="[font-family:'Matter-Light',Helvetica] font-light text-black text-base mt-6 max-w-[585px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-x-16 gap-y-8 mt-16">
              {keyFeatures.map((feature, index) => (
                <div key={index} className="flex justify-start items-start">
                  <img
                    className="w-[21px] h-[11px] mt-3 mr-4"
                    alt="Arrow"
                    src="/arrow-13.svg"
                  />
                  <p className="[font-family:'Matter-Light',Helvetica] font-light text-black text-base max-w-[447px]">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>

          {/* Glimpse of Excellence Section */}
          <AnimatedSection className="relative px-16 py-24 max-w-[1400px] mx-auto">
            <div className="flex items-start">
              <div className="w-2.5 h-2.5 bg-[#4da8df] rounded-[5px] mr-4 mt-2"></div>
              <div>
                <h2 className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-[#003a5d] text-4xl">
                  A Glimpse of Excellence
                </h2>
                <p className="[font-family:'Matter-Light',Helvetica] font-light text-black text-base mt-6 max-w-[585px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s.
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-16 gap-x-16">
              <img
                src="/glimpse-1.png"
                className="w-1/3  object-cover rounded-xl"
                alt="Excellence Image 1"
              />
              <img
                src="/glimpse-2.png"
                className="w-2/3  object-cover "
                alt="Excellence Image 2"
              />
            </div>

            <div className="flex justify-end mt-4">
              <div className="flex items-center">
                <span className="[font-family:'Matter-Regular',Helvetica] text-[#003a5d] text-[15px]">
                  View All
                </span>
                <img
                  className="w-7 h-[7px] ml-2"
                  alt="Arrow"
                  src="/arrow-2.svg"
                />
              </div>
            </div>
          </AnimatedSection>

          <img src="/keyfeaturesvg.svg" className="absolute inset-0" />
        </div>

        {/* Programs Section */}
        <AnimatedSection className="relative px-4 sm:px-8 md:px-12 lg:px-16 py-16 sm:py-20 md:py-24 max-w-[1400px] mx-auto">
          <div className="flex items-start">
            <div className="w-2.5 h-2.5 bg-[#4da8df] rounded-[5px] mr-4 mt-2"></div>
            <div className="w-full">
              <h2 className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-[#003a5d] text-4xl">
                Programs
              </h2>
              <div className="flex justify-between items-end w-full">
                <p className="[font-family:'Matter-Light',Helvetica] font-light text-black text-base mt-6 max-w-[509px]">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s, when an unknown printer took a galley of type
                  and scrambled it to make a type specimen book.
                </p>
                <div className="flex justify-end mt-8">
                  <div className="flex items-center">
                    <span className="[font-family:'Matter-Regular',Helvetica] text-[#003a5d] text-[15px]">
                      Read More
                    </span>
                    <img
                      className="w-7 h-[7px] ml-2"
                      alt="Arrow"
                      src="/arrow-2.svg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className=" grid  grid-cols-3 gap-10  mt-16">
            {programs.map((program, index) => (
              <Card
                key={index}
                className=" w-full h-fit rounded-[10px] overflow-hidden relative"
              >
                <img
                  src={program.image}
                  className="w-full h-full object-cover"
                  alt={`${program.name} Program`}
                />
                <div className="absolute inset-0 bg-[#00000054]"></div>
                <CardContent className="absolute bottom-0 left-0 right-0 text-center p-6">
                  <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium text-white text-[28px]">
                    {program.name}
                  </h3>
                  <p className="[font-family:'Matter-Light',Helvetica] font-light text-white text-base mt-2">
                    {program.slogan}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </AnimatedSection>
        <div className="mt-16 text-center mb-32">
          <h2 className="[font-family:'Matter-Bold',Helvetica] font-bold text-[50px] tracking-[3.25px]">
            <span className="text-[#003a5d] tracking-[1.62px]">
              adopt&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span className="[-webkit-text-stroke:1px_#4da8df] text-transparent tracking-[1.62px]">
              nurture
            </span>
            <span className="text-[#003a5d] tracking-[1.62px]">
              &nbsp;&nbsp;&nbsp;&nbsp; deliver&nbsp;&nbsp;&nbsp;&nbsp;{" "}
            </span>
            <span className="[-webkit-text-stroke:1px_#4da8df] text-transparent tracking-[1.62px]">
              adopt{" "}
            </span>
            <span className="text-[#003a5d] tracking-[1.62px]">
              &nbsp;&nbsp;&nbsp;&nbsp;nurture&nbsp;&nbsp;&nbsp;&nbsp; deliver
            </span>
          </h2>
          <div className="flex justify-center gap-40 relative">
            <div className="w-2 h-2 bg-[#003a5d] rounded absolute left-[214px] top-[26px]"></div>
            <div className="w-2 h-2 bg-[#003a5d] rounded absolute left-[546px] top-[26px]"></div>
            <div className="w-2 h-2 bg-[#003a5d] rounded absolute left-[845px] top-[26px]"></div>
            <div className="w-2 h-2 bg-[#003a5d] rounded absolute left-[1110px] top-[26px]"></div>
          </div>
        </div>

        {/* Signature Slam Academy Section */}
        <AnimatedSection className="grid grid-cols-2 ">
          <div className=" bg-gradient-to-br from-[rgba(0,58,93,1)] to-[rgba(23,57,49,1)] p-16">
            <p className="[font-family:'Matter-Light',Helvetica] font-light text-white text-[25px]">
              Launching
            </p>
            <h2 className="[font-family:'Matter-Regular',Helvetica] font-normal text-white text-[40px] mt-4">
              Signature Slam Academy
              <br />
              hunter Valley
            </h2>

            <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium text-white text-[25px] mt-16">
              SSA Connectivity
            </h3>

            <div className="mt-8 space-y-6">
              {connectivityItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <img
                    className="w-5 h-5"
                    alt="Icon"
                    src={
                      index === 3
                        ? "/ion-golf-outline-4.svg"
                        : "/ion-golf-outline.svg"
                    }
                  />
                  <div className="flex items-center ml-6">
                    <p className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-white text-base">
                      {item.name}
                    </p>
                    <div className="flex-1 mx-2">
                      <img
                        className="h-px w-full"
                        alt="Line"
                        src="/line-11.svg"
                      />
                    </div>
                    <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-white text-base">
                      {item.distance}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <img
            src="/acadamyImage.png"
            className="object-cover w-full h-full"
            alt="Academy Image"
          />
        </AnimatedSection>

        {/* Meet our professionals Section */}
        <AnimatedSection className="relative px-16 py-24 max-w-[1400px] mx-auto">
          <div className="flex items-start">
            <div className="w-2.5 h-2.5 bg-[#4da8df] rounded-[5px] mr-4 mt-2"></div>
            <div>
              <h2 className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-[#003a5d] text-4xl">
                Meet our professionals
              </h2>
              <p className="[font-family:'Matter-Light',Helvetica] font-light text-black text-base mt-6 max-w-[418px]">
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s,
              </p>
            </div>

            <div className="ml-auto flex items-center">
              <span className="[font-family:'Matter-Regular',Helvetica] text-[#003a5d] text-[15px]">
                View All
              </span>
              <img
                className="w-7 h-[7px] ml-2"
                alt="Arrow"
                src="/arrow-2.svg"
              />
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10  mt-16">
            {professionals.map((professional, index) => (
              <div key={index} className="">
                <img
                  className="w-full aspect-square object-cover rounded-lg"
                  alt={professional.name}
                  src={professional.image}
                />
                <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium text-[#003a5d] text-[25px] text-center mt-6">
                  {professional.name}
                </h3>
                <p className="[font-family:'Matter-LightItalic',Helvetica] font-light italic text-black text-base text-center mt-2">
                  {professional.title}
                </p>
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Facilities Section */}
        <AnimatedSection className="relative px-16 py-24 ">
          <div className="absolute h-[40%]  inset-x-0 inset-y-[30%]  w-full bg-gradient-to-br from-[rgba(0,47,80,1)] to-[rgba(23,57,49,1)]" />
          <div className="relative z-10">
            <div className="flex items-start max-w-[1400px] mx-auto">
              <div className="w-2.5 h-2.5 bg-[#4da8df] rounded-[5px] mr-4 mt-2"></div>
              <div>
                <h2 className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-[#003a5d] text-4xl">
                  Facilities
                </h2>
                <p className="[font-family:'Matter-Light',Helvetica] font-light text-black text-base mt-6 max-w-[334px] ">
                  Lorem Ipsum has been the industry's standard dummy text ever
                  since the 1500s,
                </p>
              </div>
            </div>

            <div className="flex justify-start items-center mt-16 gap-10 w-full max-w-[1400px] mx-auto">
              <div>
                <img
                  className=" object-cover"
                  alt="Facility 1"
                  src="/tennis.png"
                />
                <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium  text-white  text-[28px] mt-6">
                  Tennis
                </h3>
                <div className="flex mt-3 space-x-2">
                  <Badge className="bg-white text-[#173931] rounded-[50px] px-4 py-1">
                    <span className="[font-family:'Matter-Light',Helvetica] font-light text-[13px]">
                      Gym
                    </span>
                  </Badge>
                  <Badge className="bg-white text-[#173931] rounded-[50px] px-4 py-1">
                    <span className="[font-family:'Matter-Light',Helvetica] font-light text-[13px]">
                      4 Hard Courts
                    </span>
                  </Badge>
                </div>
                <p className="[font-family:'Matter-Light',Helvetica] font-light  text-white  text-base mt-6">
                  Lorem Ipsum has been the industry's standard <br />
                  dummy text ever since the 1500s,
                </p>
              </div>
              <div>
                <img
                  className=" object-cover"
                  alt="Facility 1"
                  src="/accomadition.png"
                />
                <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium  text-white  text-[28px] mt-6">
                  Accommodation
                </h3>
                <div className="flex mt-3 space-x-2">
                  <Badge className="bg-white text-[#173931] rounded-[50px] px-4 py-1">
                    <span className="[font-family:'Matter-Light',Helvetica] font-light text-[13px]">
                      5 Star Hotel
                    </span>
                  </Badge>
                </div>
                <p className="[font-family:'Matter-Light',Helvetica] font-light  text-white  text-base mt-6">
                  Lorem Ipsum has been the industry's standard <br />
                  dummy text ever since the 1500s,
                </p>
              </div>
            </div>
            <div className="flex justify-end items-center mt-16 gap-10 w-full z-10 max-w-[1400px] mx-auto">
              <div>
                <img
                  className=" object-cover"
                  alt="Facility 1"
                  src="/fitness.png"
                />
                <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium  text-[28px] mt-6">
                  Fitness
                </h3>
                <div className="flex mt-3 space-x-2">
                  <Badge className="bg-[#173931] text-white rounded-[50px] px-4 py-1">
                    <span className="[font-family:'Matter-Light',Helvetica] font-light text-[13px]">
                      Gym
                    </span>
                  </Badge>
                  <Badge className="bg-[#173931] text-white  rounded-[50px] px-4 py-1">
                    <span className="[font-family:'Matter-Light',Helvetica] font-light text-[13px]">
                      Fitness Room
                    </span>
                  </Badge>
                </div>
                <p className="[font-family:'Matter-Light',Helvetica] font-light  text-base mt-6">
                  Lorem Ipsum has been the industry's standard <br />
                  dummy text ever since the 1500s,
                </p>
              </div>
              <div>
                <img
                  className=" object-cover"
                  alt="Facility 1"
                  src="/recovery.png"
                />
                <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium  text-[28px] mt-6">
                  Recovery
                </h3>
                <div className="flex mt-3 space-x-2">
                  <Badge className="text-white bg-[#173931] rounded-[50px] px-4 py-1">
                    <span className="[font-family:'Matter-Light',Helvetica] font-light text-[13px]">
                      SPA
                    </span>
                  </Badge>
                  <Badge className="text-white bg-[#173931] rounded-[50px] px-4 py-1">
                    <span className="[font-family:'Matter-Light',Helvetica] font-light text-[13px]">
                      Pool
                    </span>
                  </Badge>
                  <Badge className="text-white bg-[#173931] rounded-[50px] px-4 py-1">
                    <span className="[font-family:'Matter-Light',Helvetica] font-light text-[13px]">
                      Massage
                    </span>
                  </Badge>
                </div>
                <p className="[font-family:'Matter-Light',Helvetica] font-light  text-base mt-6">
                  Lorem Ipsum has been the industry's standard <br />
                  dummy text ever since the 1500s,
                </p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Our Coaches & Events Section */}
        <AnimatedSection className="flex">
          <div
            style={{ backgroundImage: "URL(./coachesbg.png)" }}
            className="w-1/2 bg-[#002f50] p-16 text-white"
          >
            <div className="flex items-center mb-6">
              <h2 className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-white text-4xl">
                Our Coaches
              </h2>
              <div className="w-2.5 h-2.5 bg-white rounded-[5px] ml-4"></div>
            </div>
            <p className="[font-family:'Matter-Light',Helvetica] font-light text-white text-base max-w-[334px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
            <div className="flex items-center mt-8">
              <span className="[font-family:'Matter-Regular',Helvetica] text-white text-[15px]">
                Read More
              </span>
              <img className="w-7 h-[7px] ml-2" alt="Arrow" />
            </div>
          </div>

          <div className="w-1/2 bg-[#91c8ec] p-16 relative">
            <div className="flex items-center mb-6">
              <h2 className="[font-family:'Matter-SemiBold',Helvetica] font-semibold text-[#003a5d] text-4xl">
                Events
              </h2>
              <div className="w-2.5 h-2.5 bg-[#4da8df] rounded-[5px] ml-4"></div>
            </div>
            <p className="[font-family:'Matter-Light',Helvetica] font-light text-black text-black text-base max-w-[334px]">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s,
            </p>
            <div className="flex items-center mt-8">
              <span className="[font-family:'Matter-Regular',Helvetica] text-[#002f50] text-[15px]">
                Read More
              </span>
              <img
                className="w-7 h-[7px] ml-2"
                alt="Arrow"
                src="/arrow-2.svg"
              />
            </div>
            <img
              src="/events2.png"
              className="w-[259px] h-[261px] absolute bottom-0 top- [21px] right-0 object-cover"
              alt="Event Image"
            />
          </div>
        </AnimatedSection>

        {/* Footer */}
        <footer className="pt-16 ">
          <div className="grid grid-cols-[30%,70%] gap-8 px-16 mx-auto max-w-[1400px]">
            <div className="flex justify-center items-center">
              <img
                className="w-[150px] h-[107px] object-cover"
                alt="SSA Logo"
                src="/SSA-logo.png"
              />
            </div>

            <div className="w-full">
              <div className=" grid grid-cols-5 space-10 gap-10">
                {footerLinks.map((section, index) => (
                  <div key={index} className="">
                    <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-black text-lg hover:text-gray-600 cursor-pointer">
                      {section}
                    </p>
                  </div>
                ))}
              </div>

              <Separator className="my-8" />
              <div className="flex justify-between items-start w-full">
                <div className="space-y-4">
                  <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium text-[#002f50] text-xl mb-6">
                    Signature Slam Academy
                  </h3>
                  <div className="flex items-center">
                    <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-black text-base">
                      30 Wills Hill Road, Lovedale, Nsw
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2" />
                    <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-black text-base">
                      + 91 5642589752
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-2" />
                    <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-black text-base">
                      info@ssagroup.com
                    </p>
                  </div>
                </div>
                <div className="space-y-4">
                  <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium text-[#002f50] text-xl mb-6">
                    Connect with us
                  </h3>

                  <div className="flex space-x-4">
                    <Facebook />
                    <Twitter />
                    <Instagram />
                    <Linkedin />
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="space-y-4">
              {footerLinks.slice(2, 4).map((section, index) => (
                <div key={index} className="space-y-4">
                  <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-black text-base">
                    {section.title}
                  </p>
                  {section.links.map((link, linkIndex) => (
                    <p
                      key={linkIndex}
                      className="[font-family:'Matter-Regular',Helvetica] font-normal text-black text-base"
                    >
                      {link}
                    </p>
                  ))}
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="[font-family:'Matter-Medium',Helvetica] font-medium text-[#002f50] text-xl mb-6">
                Connect with us
              </h3>

              <div className="flex space-x-4">
                <img className="w-6 h-6" alt="Facebook" />
                <img className="w-6 h-6" alt="Twitter" />
                <img className="w-6 h-6" alt="Instagram" />
                <img className="w-6 h-6" alt="LinkedIn" />
              </div>

              <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-black text-base mt-4">
                {footerLinks[4].title}
              </p>
            </div> */}
          </div>

          <div className="bg-[#002f50] mt-16 py-2.5 px-16 flex justify-between items-center">
            <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-white text-[13px]">
              Terms And&nbsp;&nbsp;Condition
            </p>
            <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-white text-[13px]">
              © 2023 all rights reserved www.signatureslamacademy.com
            </p>
            <p className="[font-family:'Matter-Regular',Helvetica] font-normal text-white text-[13px]">
              Privacy Policy
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};
