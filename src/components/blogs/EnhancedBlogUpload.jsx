// components/blogs/EnhancedBlogUpload.jsx
"use client";

import React, { useState, lazy, Suspense } from "react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { X } from "lucide-react";
import { format } from "date-fns";
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent } from "../ui/card";

const MinimalTiptapEditor = lazy(() =>
  import("@/components/editor/minimal-tiptap").then((mod) => ({
    default: mod.MinimalTiptapEditor,
  }))
);

const EnhancedBlogUpload = ({ initialData = null, isEditing = false }) => {
  const { toast } = useToast();
  const initialBlogData = {
    title: "",
    title_id: "",
    content: "",
    excerpt: "",
    tags: [],
    categories: [],
    author: "",
    authorImage: null,
    authorImageType: null,
    publishDate: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    isPublished: true,
    seoTitle: "",
    seoDescription: "",
  };

  const [blogData, setBlogData] = useState(initialData || initialBlogData);
  const [isLoading, setIsLoading] = useState(false);

  const generateTitleId = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
    });
  };

  const handleInputChange = (field, value) => {
    setBlogData((prevData) => {
      const newData = { ...prevData, [field]: value };

      if (field === "title") {
        newData.title_id = generateTitleId(value);
        if (!prevData.seoTitle) {
          newData.seoTitle = value;
        }
      }

      return newData;
    });
  };

  const handleTagInput = (e, field) => {
    if (e.key === "Enter" && e.target.value.trim()) {
      e.preventDefault();
      const newValue = e.target.value.trim();

      setBlogData((prevData) => {
        // Check for duplicates
        if (!prevData[field].includes(newValue)) {
          return {
            ...prevData,
            [field]: [...prevData[field], newValue],
          };
        }
        return prevData;
      });

      e.target.value = "";
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith("image/")) {
        toast({
          title: "Error",
          description: "Please select a valid image file",
          variant: "destructive",
        });
        return;
      }

      // Validate file size (2MB limit)
      if (file.size > 2 * 1024 * 1024) {
        toast({
          title: "Error",
          description: "Image size should be less than 2MB",
          variant: "destructive",
        });
        return;
      }

      try {
        const base64 = await convertToBase64(file);
        setBlogData((prev) => ({
          ...prev,
          authorImage: base64,
          authorImageType: file.type,
        }));
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to process image",
          variant: "destructive",
        });
      }
    }
  };

  const removeAuthorImage = () => {
    setBlogData((prev) => ({
      ...prev,
      authorImage: null,
      authorImageType: null,
    }));
  };

  const removeItem = (field, indexToRemove) => {
    setBlogData((prevData) => ({
      ...prevData,
      [field]: prevData[field].filter((_, index) => index !== indexToRemove),
    }));
  };

  const resetForm = () => {
    setBlogData({
      ...initialBlogData,
      publishDate: format(new Date(), "yyyy-MM-dd'T'HH:mm"),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const url = isEditing ? `/api/blogs/${blogData.title_id}` : "/api/blogs";

    const method = isEditing ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(blogData),
      });

      const data = await response.json();

      if (response.ok) {
        toast({
          title: "Success!",
          description: `Blog post ${
            isEditing ? "updated" : "uploaded"
          } successfully.`,
          variant: "success",
        });

        if (!isEditing) {
          resetForm();
        }
      } else {
        toast({
          title: "Error",
          description:
            data.error ||
            `Failed to ${
              isEditing ? "update" : "upload"
            } blog post. Please try again.`,
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error("Error:", error);
      toast({
        title: "Error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#eef9ff] py-8">
      <Card className="max-w-4xl mx-auto bg-neutral-99 rounded-[64px] shadow-lg">
        <CardContent className="p-8">
          <h1 className="text-h5 lg:text-h4 font-[600] text-neutral-800 mb-8 text-center">
            Create Blog Post
          </h1>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Title */}
            <div>
              <Label
                htmlFor="title"
                className="text-bodysmal font-[500] text-neutral-500"
              >
                Title
              </Label>
              <Input
                id="title"
                value={blogData.title}
                onChange={(e) => handleInputChange("title", e.target.value)}
                placeholder="Enter blog title"
                required
                className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg mt-2"
              />
              {blogData.title_id && (
                <div className="mt-2 text-bodyextr text-neutral-400">
                  URL: /blogs/{blogData.title_id}
                </div>
              )}
            </div>

            {/* Content Editor */}
            <div>
              <Label
                htmlFor="content"
                className="text-bodysmal font-[500] text-neutral-500"
              >
                Content
              </Label>
              <Suspense
                fallback={
                  <div className="h-[300px] bg-neutral-200 rounded-lg animate-pulse mt-2" />
                }
              >
                <MinimalTiptapEditor
                  value={blogData.content}
                  immediatelyRender={false}
                  onChange={(content) => handleInputChange("content", content)}
                  className="w-full bg-neutral-200 text-neutral-500 rounded-lg min-h-[300px] mt-2"
                  editorContentClassName="p-6"
                  output="html"
                  placeholder="Type your content here..."
                />
              </Suspense>
            </div>

            {/* Excerpt */}
            <div>
              <Label
                htmlFor="excerpt"
                className="text-bodysmal font-[500] text-neutral-500"
              >
                Excerpt
              </Label>
              <Textarea
                id="excerpt"
                value={blogData.excerpt}
                onChange={(e) => handleInputChange("excerpt", e.target.value)}
                placeholder="Enter a brief excerpt"
                rows={3}
                className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg mt-2"
              />
            </div>

            {/* Tags and Categories */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Tags */}
              <div>
                <Label
                  htmlFor="tags"
                  className="text-bodysmal font-[500] text-neutral-500"
                >
                  Tags
                </Label>
                <Input
                  id="tags"
                  onKeyDown={(e) => handleTagInput(e, "tags")}
                  placeholder="Enter tags and press Enter"
                  className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg mt-2"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {blogData.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-neutral-700 bg-opacity-[.2] text-neutral-600 px-4 py-2 rounded-full text-bodyextr flex items-center"
                    >
                      {tag}
                      <button
                        type="button"
                        onClick={() => removeItem("tags", index)}
                        className="ml-2 focus:outline-none hover:text-primary-dark"
                      >
                        <X size={16} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div>
                <Label
                  htmlFor="categories"
                  className="text-bodysmal font-[500] text-neutral-500"
                >
                  Categories
                </Label>
                <Input
                  id="categories"
                  onKeyDown={(e) => handleTagInput(e, "categories")}
                  placeholder="Enter categories and press Enter"
                  className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg mt-2"
                />
                <div className="flex flex-wrap gap-2 mt-2">
                  {blogData.categories.map((category, index) => (
                    <span
                      key={index}
                      className="bg-neutral-700 bg-opacity-[.2] text-neutral-600 px-4 py-2 rounded-full text-bodyextr flex items-center"
                    >
                      {category}
                      <button
                        type="button"
                        onClick={() => removeItem("categories", index)}
                        className="ml-2 focus:outline-none hover:text-primary-dark"
                      >
                        <X size={16} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Author and Publish Date */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <Label
                  htmlFor="author"
                  className="text-bodysmal font-[500] text-neutral-500"
                >
                  Author
                </Label>
                <Input
                  id="author"
                  value={blogData.author}
                  onChange={(e) => handleInputChange("author", e.target.value)}
                  placeholder="Enter author name"
                  className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg mt-2"
                />
              </div>

              <div>
                <Label
                  htmlFor="publishDate"
                  className="text-bodysmal font-[500] text-neutral-500"
                >
                  Publish Date
                </Label>
                <Input
                  id="publishDate"
                  type="datetime-local"
                  value={blogData.publishDate}
                  onChange={(e) =>
                    handleInputChange("publishDate", e.target.value)
                  }
                  className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg mt-2"
                />
              </div>
            </div>

            {/* Author Image Upload Section */}
            <div>
              <Label
                htmlFor="authorImage"
                className="text-bodysmal font-[500] text-neutral-500"
              >
                Author Image
              </Label>
              <div className="mt-2">
                {blogData.authorImage ? (
                  <div className="flex items-center gap-4">
                    <img
                      src={blogData.authorImage}
                      alt="Author preview"
                      className="w-20 h-20 rounded-full object-cover border-2 border-gray-300"
                    />
                    <div className="flex flex-col gap-2">
                      <p className="text-bodyextr text-neutral-600">
                        Image uploaded successfully
                      </p>
                      <Button
                        type="button"
                        variant="outline"
                        onClick={removeAuthorImage}
                        className="text-red-500 border-red-500 hover:bg-red-50"
                      >
                        Remove Image
                      </Button>
                    </div>
                  </div>
                ) : (
                  <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                    <input
                      type="file"
                      id="authorImage"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                    />
                    <label
                      htmlFor="authorImage"
                      className="cursor-pointer flex flex-col items-center gap-2"
                    >
                      <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                        <svg
                          className="w-6 h-6 text-gray-400"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                          />
                        </svg>
                      </div>
                      <p className="text-bodyextr text-neutral-600">
                        Upload author image
                      </p>
                      <p className="text-small text-neutral-400">
                        PNG, JPG up to 2MB
                      </p>
                    </label>
                  </div>
                )}
              </div>
            </div>

            {/* SEO Fields */}
            <div>
              <Label
                htmlFor="seoTitle"
                className="text-bodysmal font-[500] text-neutral-500"
              >
                SEO Title
              </Label>
              <Input
                id="seoTitle"
                value={blogData.seoTitle}
                onChange={(e) => handleInputChange("seoTitle", e.target.value)}
                placeholder="Enter SEO title"
                className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg mt-2"
              />
            </div>

            <div>
              <Label
                htmlFor="seoDescription"
                className="text-bodysmal font-[500] text-neutral-500"
              >
                SEO Description
              </Label>
              <Textarea
                id="seoDescription"
                value={blogData.seoDescription}
                onChange={(e) =>
                  handleInputChange("seoDescription", e.target.value)
                }
                placeholder="Enter SEO description"
                rows={3}
                className="bg-neutral-200 border-none text-neutral-500 text-bodymed py-6 rounded-lg mt-2"
              />
            </div>

            {/* Debug View */}
            {process.env.NODE_ENV === "development" && (
              <div className="mt-6 p-4 bg-neutral-700 bg-opacity-[.2] rounded-lg">
                <details>
                  <summary className="text-bodyextr text-neutral-600 cursor-pointer">
                    Debug Info
                  </summary>
                  <pre className="mt-2 text-small text-neutral-600 overflow-auto">
                    {JSON.stringify(blogData, null, 2)}
                  </pre>
                </details>
              </div>
            )}

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full bg-primary-dark hover:bg-primary !text-neutral-99 text-bodysmal font-[500] py-6 mb-4"
              disabled={isLoading}
            >
              {isLoading
                ? isEditing
                  ? "Updating..."
                  : "Uploading..."
                : isEditing
                ? "Update Blog Post"
                : "Upload Blog Post"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default EnhancedBlogUpload;
