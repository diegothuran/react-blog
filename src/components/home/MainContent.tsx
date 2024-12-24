import React from "react";
import ArticleGrid from "@/components/home/ArticleGrid";
import SidebarWidget from "@/components/sidebar/SidebarWidget";

interface MainContentProps {
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

const MainContent = ({
  articles,
  upcomingEvents,
  weatherForecast,
}: MainContentProps) => {
  return (
    <div className="w-full min-h-[800px] bg-background px-4 py-8 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main content area with article grid */}
        <div className="lg:col-span-8">
          <ArticleGrid articles={articles} />
        </div>

        {/* Sidebar area */}
        <div className="lg:col-span-4">
          <SidebarWidget
            upcomingEvents={upcomingEvents}
            weatherForecast={weatherForecast}
          />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
