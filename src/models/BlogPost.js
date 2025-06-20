// models/BlogPost.js
import { ObjectId } from 'mongodb';

export const BlogPostSchema = {
  title: { type: String, required: true },
  title_id: { type: String, required: true },
  content: { type: String, required: true },
  excerpt: { type: String },
  tags: { type: Array, default: [] },
  categories: { type: Array, default: [] },
  author: { type: String, required: true },
  publishDate: { type: Date, default: Date.now },
  isPublished: { type: Boolean, default: false },
  seoTitle: { type: String },
  seoDescription: { type: String },
  authorImage: {
    type: String,
    required: false,
    default: null
  },
  authorImageType: {
    type: String,
    required: false, 
    default: null
  }
};

export function createBlogPost(data) {
  // Generate title_id if not provided
  if (!data.title_id) {
    data.title_id = data.title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)+/g, '');
  }

  return {
    ...data,
    authorImage: data.authorImage || null,
    authorImageType: data.authorImageType || null,
    _id: new ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}