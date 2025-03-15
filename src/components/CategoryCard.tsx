import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  imageSrc: string;
  onClick?: () => void;
}

const CategoryCard = ({
  title = "Service Category",
  description = "A brief description of the services offered in this category.",
  imageSrc = "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&q=80",
  onClick = () => {},
}: CategoryCardProps) => {
  return (
    <Card className="w-full max-w-[320px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-white">
      <div className="relative h-40 w-full overflow-hidden">
        <img
          src={imageSrc}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="line-clamp-3">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter className="flex justify-end">
        <Button
          variant="ghost"
          className="group flex items-center gap-1 text-primary hover:text-primary/80"
          onClick={onClick}
        >
          View Services
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CategoryCard;
