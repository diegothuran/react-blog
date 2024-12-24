import React from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CalendarDays } from "lucide-react";

interface ArticleCardProps {
  title?: string;
  excerpt?: string;
  imageUrl?: string;
  author?: {
    name: string;
    avatar: string;
  };
  date?: string;
  category?: string;
}

const ArticleCard = ({
  title = "Local Festival Brings Community Together",
  excerpt = "Annual summer festival draws record crowds with live music, local food vendors, and family activities...",
  imageUrl = "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
  author = {
    name: "Jane Smith",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
  },
  date = "October 15, 2023",
  category = "Community Events",
}: ArticleCardProps) => {
  return (
    <Card className="w-full max-w-[320px] h-[400px] overflow-hidden hover:shadow-lg transition-shadow duration-300 bg-white">
      <CardHeader className="p-0">
        <div className="relative h-48 w-full overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
          <div className="absolute top-4 right-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm">
              {category}
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-4">
        <h3 className="text-xl font-semibold line-clamp-2 mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-3">{excerpt}</p>
      </CardContent>

      <CardFooter className="p-4 pt-0 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Avatar className="h-8 w-8">
            <AvatarImage src={author.avatar} alt={author.name} />
            <AvatarFallback>
              {author.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </AvatarFallback>
          </Avatar>
          <span className="text-sm text-muted-foreground">{author.name}</span>
        </div>
        <div className="flex items-center text-sm text-muted-foreground">
          <CalendarDays className="h-4 w-4 mr-1" />
          {date}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ArticleCard;
