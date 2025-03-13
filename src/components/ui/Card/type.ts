import { TagProps } from "@/types";

export interface CardArticleProps {
  id: number;
  title: string;
  introduction: string;
  tag: TagProps[];
  img: string;
  date: string;
  className?: string;
}
