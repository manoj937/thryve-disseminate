/**
 * Interface for the 'Dashboard' data
 */
export interface DashboardEntity {
  blogId: string;
  moderatorId: string;
  communityId: string;
  title: string;
  tags: string[];
  bookmarks: string[];
  content: string,
  image: string;
  time: string;
  likes: string;
  comments: string;
  views: string;
  readTime: string;
}
