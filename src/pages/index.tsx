import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/home/HeroSection";
import MainContent from "@/components/home/MainContent";

interface HomePageProps {
  featuredArticle?: {
    title: string;
    excerpt: string;
    imageUrl: string;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
    category: string;
  };
  articles?: Array<{
    title: string;
    excerpt: string;
    imageUrl: string;
    author: {
      name: string;
      avatar: string;
    };
    date: string;
    category: string;
  }>;
  upcomingEvents?: Array<{
    title: string;
    date: string;
    location: string;
  }>;
  weatherForecast?: {
    temperature: string;
    condition: string;
    high: string;
    low: string;
  };
}

const HomePage = ({
  featuredArticle,
  articles,
  upcomingEvents,
  weatherForecast,
}: HomePageProps) => {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <HeroSection article={featuredArticle} />
      <MainContent
        articles={articles}
        upcomingEvents={upcomingEvents}
        weatherForecast={weatherForecast}
      />
    </div>
  );
};

export default HomePage;
