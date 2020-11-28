export interface Movie {
    id: number | null;
    approvalRating?: number | null;
    description: string;
    director: string;
    imageurl: string;
    mpaa: string;
    releaseDate: string;
    starRating: number | null;
    title: string;
    category: string;
    tags?: string[];
    ytId?: string;
  }
