// User types
export interface User {
  id: number;
  email: string;
  username: string;
  display_name?: string;
  avatar_url?: string;
  bio?: string;
  created_at: string;
  updated_at: string;
}

// AuthContext types
export interface AuthContextType {
  isAuthenticated: boolean;
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  register: (userData: any) => Promise<void>;
  logout: () => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
}

// UnreadPosts types
export interface UnreadPostsContextType {
  hasUnreadPosts: boolean;
  markCategorySeen: (categorySlug: string) => void;
  unreadCategories: string[];
}

// Toast types
export interface ToastOptions {
  title?: string;
  description?: string;
  action?: React.ReactNode;
  duration?: number;
}

export interface ToasterToast {
  id: string;
  title?: string;
  description?: string;
  action?: React.ReactNode;
  dismiss: () => void;
}

// City types
export interface City {
  id: number;
  name: string;
  slug: string;
  country: string;
  venue: string;
  event_date: string;
  image_url: string;
  description: string;
  attendees_count: number;
  latitude?: number;
  longitude?: number;
}

// Message types
export interface Message {
  id: number;
  content: string;
  user_id: number;
  username: string;
  display_name?: string;
  avatar_url?: string;
  created_at: string;
  category_id: number;
  category_name: string;
  pinned: boolean;
}

// List types
export interface List {
  id: number;
  name: string;
  city_id: number;
  created_at: string;
  updated_at: string;
  items_count: number;
}

export interface ListItem {
  id: number;
  name: string;
  list_id: number;
  created_at: string;
  updated_at: string;
}
