"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import FooterBaseCard from '@/components/sections/footer/FooterBaseCard';
import HeroSplitKpi from '@/components/sections/hero/HeroSplitKpi';
import MetricCardThree from '@/components/sections/metrics/MetricCardThree';
import MetricSplitMediaAbout from '@/components/sections/about/MetricSplitMediaAbout';
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardSix from '@/components/sections/testimonial/TestimonialCardSix';
import { Award, Building, Car, Key, MapPin, Maximize, Palette, Shield, ShieldCheck, Users } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="expand-hover"
        defaultTextAnimation="reveal-blur"
        borderRadius="soft"
        contentWidth="smallMedium"
        sizing="mediumLargeSizeLargeTitles"
        background="grid"
        cardStyle="gradient-bordered"
        primaryButtonStyle="radial-glow"
        secondaryButtonStyle="layered"
        headingFontWeight="medium"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarLayoutFloatingInline
      navItems={[
        {
          name: "Home",
          id: "hero",
        },
        {
          name: "About",
          id: "about",
        },
        {
          name: "Features",
          id: "features",
        },
        {
          name: "Contact",
          id: "contact",
        },
      ]}
      brandName="Kings Presidency"
      button={{
        text: "Call Now",
        href: "tel:+923000000000",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitKpi
      background={{
        variant: "gradient-bars",
      }}
      title="Luxury Ready-to-Move Apartments in Gulistan-e-Johar"
      description="Experience comfort and security in Karachi's prime residential community. Premium living tailored for families and professionals."
      kpis={[
        {
          value: "100%",
          label: "Security",
        },
        {
          value: "Prime",
          label: "Location",
        },
        {
          value: "Ready",
          label: "Move-in",
        },
      ]}
      enableKpiAnimation={true}
      buttons={[
        {
          text: "Schedule Visit",
          href: "#contact",
        },
        {
          text: "WhatsApp Inquiry",
          href: "https://wa.me/923000000000",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/modern-building-with-many-windows_23-2148252722.jpg?_wi=1"
      mediaAnimation="slide-up"
      avatars={[
        {
          src: "http://img.b2bpic.net/free-photo/expressive-senior-woman-posing_344912-3035.jpg",
          alt: "Happy resident 1",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-hispanic-man-smiling-confident-standing-street_839833-16677.jpg",
          alt: "Happy resident 2",
        },
        {
          src: "http://img.b2bpic.net/free-photo/young-female-with-pinkish-hair-posing_344912-857.jpg",
          alt: "Happy resident 3",
        },
        {
          src: "http://img.b2bpic.net/free-photo/smiley-young-person-ready-give-hug_23-2148576171.jpg",
          alt: "Happy resident 4",
        },
        {
          src: "http://img.b2bpic.net/free-photo/portrait-happy-smiling-man_23-2149022653.jpg",
          alt: "Happy resident 5",
        },
      ]}
      avatarText="Trusted by 100+ families"
      marqueeItems={[
        {
          type: "text-icon",
          text: "24/7 Security",
          icon: ShieldCheck,
        },
        {
          type: "text-icon",
          text: "Prime Location",
          icon: MapPin,
        },
        {
          type: "text-icon",
          text: "Modern Design",
          icon: Palette,
        },
        {
          type: "text-icon",
          text: "Spacious Layouts",
          icon: Maximize,
        },
        {
          type: "text-icon",
          text: "Move-in Ready",
          icon: Key,
        },
      ]}
    />
  </div>

  <div id="about" data-section="about">
      <MetricSplitMediaAbout
      useInvertedBackground={true}
      title="A Trusted Community in Karachi"
      description="Kings Presidency offers a practical luxury residential experience. Located in Gulistan-e-Johar, we focus on providing a secure, comfortable, and family-oriented environment for our residents."
      metrics={[
        {
          value: "24/7",
          title: "Security",
        },
        {
          value: "Modern",
          title: "Design",
        },
        {
          value: "Family",
          title: "Focused",
        },
      ]}
      imageSrc="http://img.b2bpic.net/free-photo/portrait-charming-brunette-flannel-shirt-jeans-wit_613910-16084.jpg?_wi=1"
      mediaAnimation="blur-reveal"
      metricsAnimation="slide-up"
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyFive
      animationType="slide-up"
      textboxLayout="split"
      useInvertedBackground={false}
      features={[
        {
          title: "Security & Surveillance",
          description: "Round-the-clock protection for your peace of mind.",
          icon: Shield,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/main-entrance-modern-residential-building_637285-1913.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/person-using-smartphone-his-automated-home_23-2149036911.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/modern-building-with-many-windows_23-2148252722.jpg?_wi=2",
          imageAlt: "apartment security gate",
        },
        {
          title: "Nearby Conveniences",
          description: "Schools, hospitals, and shopping centers within reach.",
          icon: MapPin,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/water-dwelling_1127-3257.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/abstract-blur-furniture-shop-store-interior_1203-8593.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-charming-brunette-flannel-shirt-jeans-wit_613910-16084.jpg?_wi=2",
          imageAlt: "apartment security gate",
        },
        {
          title: "Spacious Parking",
          description: "Hassle-free parking availability for all residents.",
          icon: Car,
          mediaItems: [
            {
              imageSrc: "http://img.b2bpic.net/free-photo/purple-parking-lot_1127-40.jpg",
            },
            {
              imageSrc: "http://img.b2bpic.net/free-photo/hallway-garage_23-2149397542.jpg",
            },
          ],
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-bedroom-with-pendant-lamp-orchid-home-comfort_169016-70987.jpg?_wi=1",
          imageAlt: "apartment security gate",
        },
      ]}
      title="Why Kings Presidency?"
      description="Comprehensive amenities to ensure a comfortable lifestyle for all residents."
    />
  </div>

  <div id="products" data-section="products">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="uniform-all-items-equal"
      useInvertedBackground={true}
      products={[
        {
          id: "1",
          name: "3 Bedroom Standard",
          price: "Available",
          variant: "Unit A",
          imageSrc: "http://img.b2bpic.net/free-photo/cozy-bedroom-with-pendant-lamp-orchid-home-comfort_169016-70987.jpg?_wi=2",
        },
        {
          id: "2",
          name: "2 Bedroom Corner",
          price: "Available",
          variant: "Unit B",
          imageSrc: "http://img.b2bpic.net/free-photo/girl-sitting-sofa-use-phone_1157-33679.jpg",
        },
        {
          id: "3",
          name: "3 Bedroom Executive",
          price: "Available",
          variant: "Unit C",
          imageSrc: "http://img.b2bpic.net/free-photo/attractive-girl-pink-robe-posing-with-salad-plate-kitchen_627829-11338.jpg",
        },
        {
          id: "4",
          name: "Studio Flat",
          price: "Available",
          variant: "Unit D",
          imageSrc: "http://img.b2bpic.net/free-photo/soft-pastel-hues-room-children_23-2151690383.jpg",
        },
        {
          id: "5",
          name: "Penthouse",
          price: "Inquiry",
          variant: "Unit E",
          imageSrc: "http://img.b2bpic.net/free-photo/young-happy-smiling-caucasian-woman-traveller-fitting-dress-sunglasses-high-floor-bangkok_343596-1429.jpg",
        },
        {
          id: "6",
          name: "2 Bedroom Standard",
          price: "Available",
          variant: "Unit F",
          imageSrc: "http://img.b2bpic.net/free-photo/beautiful-modern-bedroom-white-colors_181624-60241.jpg",
        },
      ]}
      title="Apartment Configurations"
      description="Various layouts to suit your family needs."
    />
  </div>

  <div id="gallery" data-section="gallery">
      <MetricCardThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      metrics={[
        {
          id: "m1",
          icon: Building,
          title: "Apartment Units",
          value: "150+",
        },
        {
          id: "m2",
          icon: Users,
          title: "Families",
          value: "120+",
        },
        {
          id: "m3",
          icon: Award,
          title: "Completed",
          value: "Ready",
        },
      ]}
      title="Building Highlights"
      description="Modern architecture designed for urban living."
    />
  </div>

  <div id="location" data-section="location">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={true}
      names={[
        "School District",
        "Hospital Area",
        "Shopping Mall",
        "Public Transit",
        "Banks",
        "Mosque",
        "Food Street",
      ]}
      title="Prime Gulistan-e-Johar Location"
      description="Centrally located to key landmarks in Karachi."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardSix
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "t1",
          name: "Ahmed Raza",
          handle: "@ahmed",
          testimonial: "Very secure and perfect for families in Johar.",
          imageSrc: "http://img.b2bpic.net/free-photo/person-looking-football-game-sunny-day_23-2149015514.jpg",
        },
        {
          id: "t2",
          name: "Sara Khan",
          handle: "@sara",
          testimonial: "Modern interiors and maintenance is proactive.",
          imageSrc: "http://img.b2bpic.net/free-photo/smiling-young-beautiful-girl-looking-straight-ahead-wearing-white-t-shirt-isolated-pink_141793-86537.jpg",
        },
        {
          id: "t3",
          name: "Farhan Ali",
          handle: "@farhan",
          testimonial: "Peaceful living and great neighbours.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-elegant-bearded-man-dressed-wool-jacket-bow-tie_613910-15696.jpg",
        },
        {
          id: "t4",
          name: "Zoya Ahmed",
          handle: "@zoya",
          testimonial: "Everything nearby, really convenient location.",
          imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-ambulance-car_23-2149478476.jpg",
        },
        {
          id: "t5",
          name: "Bilal Sheikh",
          handle: "@bilal",
          testimonial: "Trustworthy management, smooth process.",
          imageSrc: "http://img.b2bpic.net/free-photo/closeup-young-hispanic-man-casuals-studio_662251-600.jpg",
        },
      ]}
      title="Resident Experiences"
      description="Hear what our residents value most about living here."
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplit
      useInvertedBackground={true}
      background={{
        variant: "plain",
      }}
      tag="Get In Touch"
      title="Book Your Visit Today"
      description="Contact us to view an apartment. We are happy to show you around."
      imageSrc="http://img.b2bpic.net/free-photo/geography-subject-arrangement-with-map_23-2149048969.jpg"
      buttonText="Send Inquiry"
      mediaAnimation="slide-up"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterBaseCard
      logoText="Kings Presidency"
      columns={[
        {
          title: "Company",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Apartments",
              href: "#products",
            },
          ],
        },
        {
          title: "Support",
          items: [
            {
              label: "Contact",
              href: "#contact",
            },
            {
              label: "WhatsApp",
              href: "https://wa.me/923000000000",
            },
          ],
        },
      ]}
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
