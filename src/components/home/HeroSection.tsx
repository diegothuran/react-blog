import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, ArrowRight } from "lucide-react";

interface HeroSectionProps {
  article?: {
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
}

const HeroSection = ({
  article = {
    title: "Historic Downtown Revitalization Project Breaks Ground",
    excerpt:
      "The long-awaited downtown revitalization project officially began today with a groundbreaking ceremony attended by local officials and community members. The $5 million project aims to transform Main Street into a vibrant cultural and commercial hub while preserving its historic charm...",
    imageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80",
    author: {
      name: "Michael Anderson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
    },
    date: "October 16, 2023",
    category: "Town Development",
  },
}: HeroSectionProps) => {
  return (
    <div className="w-full h-[500px] relative bg-background">
      <div className="absolute inset-0">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-full object-cover brightness-50"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
        <div className="container mx-auto h-full flex items-end pb-16">
          <div className="max-w-3xl text-white space-y-4">
            <Badge variant="secondary" className="mb-4 text-sm font-medium">
              {article.category}
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              {article.title}
            </h1>

            <p className="text-lg text-gray-200 line-clamp-3">
              {article.excerpt}
            </p>

            <div className="flex items-center justify-between pt-4">
              <div className="flex items-center space-x-4">
                <img
                  src={article.author.avatar}
                  alt={article.author.name}
                  className="w-10 h-10 rounded-full"
                />
                <div>
                  <p className="font-medium">{article.author.name}</p>
                  <div className="flex items-center text-sm text-gray-300">
                    <CalendarDays className="mr-2 h-4 w-4" />
                    {article.date}
                  </div>
                </div>
              </div>

              <Button variant="secondary" className="flex items-center gap-2">
                Read More
                <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
