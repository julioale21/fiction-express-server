export class Book {
  id: number;
  title: string;
  author: string;
  cover: string;
  summary: string;
  chapters: Chapter[];
}

class Chapter {
  title: string;
  pages: string[];
}
