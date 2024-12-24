import React from "react";
import ArticleCard from "@/components/articles/ArticleCard";

interface ArticleGridProps {
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
}

const defaultArticles = [
  {
    title: "Local Festival Brings Community Together",
    excerpt:
      "Annual summer festival draws record crowds with live music, local food vendors, and family activities...",
    imageUrl:
      "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?auto=format&fit=crop&q=80",
    author: {
      name: "Jane Smith",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jane",
    },
    date: "October 15, 2023",
    category: "Community Events",
  },
  {
    title: "New Local Business Opens Downtown",
    excerpt:
      "Grand opening celebration planned for innovative coffee shop featuring local artisans and live music...",
    imageUrl:
      "https://images.unsplash.com/photo-1442975631115-c4f7b05b8a2c?auto=format&fit=crop&q=80",
    author: {
      name: "John Doe",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=john",
    },
    date: "October 14, 2023",
    category: "Local Business",
  },
  {
    title: "Town Council Approves Park Renovation",
    excerpt:
      "Major upgrades coming to Central Park including new playground equipment and walking trails...",
    imageUrl:
      "https://images.unsplash.com/photo-1492093502190-25c0c7b3094c?auto=format&fit=crop&q=80",
    author: {
      name: "Sarah Wilson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
    },
    date: "October 13, 2023",
    category: "Town News",
  },
  {
    title: "Local Sports Team Wins Championship",
    excerpt:
      "High school basketball team brings home state title for the first time in 20 years...",
    imageUrl:
      "https://images.unsplash.com/photo-1518650310565-c782d1f3f717?auto=format&fit=crop&q=80",
    author: {
      name: "Mike Johnson",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=mike",
    },
    date: "October 12, 2023",
    category: "Sports",
  },
];

const ArticleGrid = ({ articles = defaultArticles }: ArticleGridProps) => {
  return (
    <div className="bg-background w-full p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {articles.map((article, index) => (
          <ArticleCard
            key={index}
            title={article.title}
            excerpt={article.excerpt}
            imageUrl={article.imageUrl}
            author={article.author}
            date={article.date}
            category={article.category}
          />
        ))}
      </div>
    </div>
  );
};

export default ArticleGrid;
