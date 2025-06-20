'use client';

import React, { useState, useEffect } from 'react';
import { Menu, Terminal, X } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Button } from '@/components/ui/button';

const formatCode = (code) => {
  return code
    .split(';')
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(line => {
      if (line.startsWith('import ')) {
        return `${line};`;
      }
      if (line.includes('{') && !line.includes('}')) {
        return `${line};`;
      }
      const indentLevel = (line.match(/{/g) || []).length - (line.match(/}/g) || []).length;
      const indent = '  '.repeat(Math.max(0, indentLevel));
      return `${indent}${line};`;
    })
    .join('\n');
};

const TerminalCodeBlock = ({ code, language = 'bash' }) => {
  const formattedCode = formatCode(code);
  
  return (
    <Card className="my-6 bg-neutral-800 rounded-lg overflow-hidden shadow-lg">
      <div className="bg-neutral-700 px-4 py-2 flex items-center">
        <div className="flex gap-2 mr-4">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
          <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
        </div>
        <div className="flex items-center text-neutral-99 text-bodyextr">
          <Terminal size={14} className="mr-2" />
          <span>terminal</span>
        </div>
      </div>
      
      <CardContent className="p-4 font-mono text-bodyextr">
        <div className="flex items-start">
          <span className="text-primary-light mr-2">$</span>
          <pre className="text-neutral-99 overflow-x-auto whitespace-pre">
            <code>{formattedCode}</code>
          </pre>
        </div>
      </CardContent>
    </Card>
  );
};

const parseBlogContent = (htmlContent) => {
  const parser = new DOMParser();
  const doc = parser.parseFromString(htmlContent, 'text/html');
  const sections = [];
  let currentSection = null;

  const isHeading = (node) => {
    return ['H1', 'H2', 'H3', 'H4', 'H5', 'H6'].includes(node.tagName);
  };

  const isCodeBlock = (node) => {
    return node.tagName === 'CODE' || node.tagName === 'PRE';
  };

  // Add list detection
  const isList = (node) => {
    return ['UL', 'OL'].includes(node.tagName);
  };

  const processNode = (node) => {
    if (isCodeBlock(node)) {
      return {
        type: 'code',
        content: node.textContent,
        language: node.getAttribute('data-language') || 'bash'
      };
    }
    
    // Handle lists specifically
    if (isList(node)) {
      return {
        type: 'list',
        content: node.outerHTML,
        listType: node.tagName.toLowerCase() // 'ul' or 'ol'
      };
    }
    
    return {
      type: 'html',
      content: node.outerHTML
    };
  };

  // Rest of the function remains the same...
  const createSection = (title) => {
    if (currentSection) {
      sections.push(currentSection);
    }
    currentSection = {
      id: title.toLowerCase().replace(/\s+/g, '-'),
      title: title.trim(),
      content: []
    };
  };

  doc.body.childNodes.forEach((node) => {
    if (node.nodeType === Node.ELEMENT_NODE) {
      if (isHeading(node)) {
        createSection(node.textContent);
      } else if (node.tagName === 'P' && node.querySelector('strong')) {
        const strongText = node.querySelector('strong').textContent;
        createSection(strongText);
      } else if (currentSection) {
        currentSection.content.push(processNode(node));
      } else {
        currentSection = {
          id: 'introduction',
          title: 'Introduction',
          content: [processNode(node)]
        };
      }
    }
  });

  if (currentSection) {
    sections.push(currentSection);
  }

  return sections;
};

const RenderIndividualBlog = ({ blogData }) => {
  const [activeSection, setActiveSection] = useState('');
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(parseBlogContent(blogData.content));
  }, [blogData.content]);

  useEffect(() => {
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      const sectionElements = document.querySelectorAll('section');
      sectionElements.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = (content) => {
    if (content.type === 'code') {
      return <TerminalCodeBlock code={content.content} language={content.language} />;
    }
    
    if (content.type === 'list') {
      return (
        <div 
          dangerouslySetInnerHTML={{ __html: content.content }} 
          className="prose-content prose-lists"
        />
      );
    }
    
    return (
      <div 
        dangerouslySetInnerHTML={{ __html: content.content }} 
        className="prose-content"
      />
    );
  };

  const customStyles = `
  .prose-content p {
    margin-bottom: 1.5rem;
    line-height: 1.7;
  }
  
  .prose-content p:last-child {
    margin-bottom: 0;
  }
  
  .prose-content strong {
    font-weight: 600;
    color: #1f2937;
  }
  
  .prose-content p strong:first-child {
    display: inline-block;
    margin-top: 1rem;
  }
  
  /* Add comprehensive list styles */
  .prose-content ul, .prose-content ol {
    margin-bottom: 1.5rem;
    line-height: 1.7;
    padding-left: 1.5rem;
  }
  
  .prose-content ul {
    list-style-type: disc;
  }
  
  .prose-content ol {
    list-style-type: decimal;
  }
  
  .prose-content ul ul {
    list-style-type: circle;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .prose-content ol ol {
    list-style-type: lower-alpha;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  
  .prose-content ul ul ul {
    list-style-type: square;
  }
  
  .prose-content li {
    margin-bottom: 0.5rem;
    padding-left: 0.25rem;
  }
  
  .prose-content li:last-child {
    margin-bottom: 0;
  }
  
  /* Nested list spacing */
  .prose-content li > ul,
  .prose-content li > ol {
    margin-top: 0.5rem;
    margin-bottom: 0;
  }
  
  /* List item content */
  .prose-content li p {
    margin-bottom: 0.5rem;
  }
  
  .prose-content li p:last-child {
    margin-bottom: 0;
  }

  /* Ensure proper spacing for other elements */
  .prose-content h1, .prose-content h2, .prose-content h3,
  .prose-content h4, .prose-content h5, .prose-content h6 {
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-weight: 600;
  }
  
  .prose-content blockquote {
    margin: 1.5rem 0;
    padding-left: 1rem;
    border-left: 4px solid #e5e7eb;
    font-style: italic;
  }
  
  .prose-content table {
    width: 100%;
    margin: 1.5rem 0;
    border-collapse: collapse;
  }
  
  .prose-content th,
  .prose-content td {
    padding: 0.75rem;
    border: 1px solid #e5e7eb;
    text-align: left;
  }
  
  .prose-content th {
    background-color: #f9fafb;
    font-weight: 600;
  }
`;

  return (
    <div className="min-h-screen bg-[#eef9ff]">
      <style jsx>{customStyles}</style>
      
      {/* Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary-light z-50" 
        style={{ width: `${scrollProgress}%` }}
      />
      
      {/* Mobile Menu Button */}
      <Button
        variant="ghost"
        className="fixed top-4 right-4 lg:hidden z-50 text-neutral-800"
        onClick={() => setIsMenuOpen(true)}
      >
        <Menu size={24} />
      </Button>
      
      <div className="max-w-7xl mx-auto pt-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          {/* Navigation Sidebar */}
          <aside className={`
            lg:block lg:w-64 flex-none
            ${isMenuOpen ? 'fixed inset-0 z-40' : 'hidden'}
          `}>
            <div className="lg:sticky lg:top-32 lg:h-[calc(100vh-1.5rem)]">
              <Card className="bg-neutral-99 shadow-lg rounded-[32px] p-8">
                <CardContent className="p-0">
                  {isMenuOpen && (
                    <Button
                      variant="ghost"
                      className="lg:hidden absolute top-4 right-4 text-neutral-800"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <X size={24} />
                    </Button>
                  )}
                  
                  <ScrollArea className="h-[calc(100vh-8rem)] lg:h-[calc(100vh-10rem)]">
                    <nav className="space-y-4">
                      {sections.map((section) => (
                        <a
                          key={section.id}
                          href={`#${section.id}`}
                          onClick={() => setIsMenuOpen(false)}
                          className={`
                            block text-bodymed font-[500] transition-colors
                            ${activeSection === section.id 
                              ? 'text-primary-dark' 
                              : 'text-neutral-500 hover:text-primary-dark'}
                          `}
                        >
                          {section.title}
                        </a>
                      ))}
                    </nav>
                  </ScrollArea>
                </CardContent>
              </Card>
            </div>
          </aside>
          
          {/* Main Content */}
          <main className="flex-1">
            <Card className="m-4 lg:m-0 bg-neutral-99 rounded-[32px] shadow-sm">
              <CardContent className="p-8">

                {/* Author Info Section - Add this */}
                <div className="flex items-center space-x-4 mb-8 pb-6 border-b border-gray-200">
                  {blogData.authorImage ? (
                    <img 
                      src={blogData.authorImage} 
                      alt={blogData.author}
                      className="w-16 h-16 rounded-full object-cover border-2 border-gray-300"
                    />
                  ) : (
                    <div className="w-16 h-16 rounded-full bg-primary-dark text-white flex items-center justify-center font-semibold text-lg">
                      {blogData.author ? blogData.author.split(' ').map(n => n[0]).join('').toUpperCase() : 'A'}
                    </div>
                  )}
                  <div>
                    <h3 className="text-bodybold font-[600] text-neutral-800">{blogData.author}</h3>
                    <p className="text-bodysmal text-neutral-500">
                      Published on {new Date(blogData.publishDate).toLocaleDateString('en-US', {
                        month: 'long',
                        day: 'numeric', 
                        year: 'numeric'
                      })}
                    </p>
                  </div>
                </div>

                <div className="prose max-w-none">
                  {sections.map((section) => (
                    <section key={section.id} id={section.id} className="mb-16">
                      <h2 className="text-h5 lg:text-h4 font-[600] text-neutral-800 mb-8">
                        {section.title}
                      </h2>
                      <div className="space-y-8">
                        {section.content.map((content, index) => (
                          <div 
                            key={index}
                            className="text-bodymed text-neutral-600 leading-relaxed"
                          >
                            {renderContent(content)}
                          </div>
                        ))}
                      </div>
                    </section>
                  ))}
                </div>
              </CardContent>
            </Card>
          </main>
        </div>
      </div>
    </div>
  );
};

export default RenderIndividualBlog;