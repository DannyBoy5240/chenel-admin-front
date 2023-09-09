export type Blog = {
  title: string;
  banner_img: string;
  author: string;
  avatar: string;
  category: string;
  content: string;
  views: number;
  votes: number;
  createdAt: string;
  updatedAt: string;
};

export type UserListItem = {
  name: string;
  email: string;
  status: string;
};