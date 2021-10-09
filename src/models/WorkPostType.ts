export interface WorkPostType {
  id: string;
  name: string;
  postedOn: string;
  category: string;
  workImage: string;
  description: {
    description: string;
  };
  markdownText: {
    markdownText: string;
  };
}
