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
    _id: new ObjectId(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };
}