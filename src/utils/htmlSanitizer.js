// utils/htmlSanitizer.js
import DOMPurify from 'isomorphic-dompurify';

export function sanitizeRichTextContent(content) {
  return DOMPurify.sanitize(content, {
    ALLOWED_TAGS: [
      'p', 'br', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
      'strong', 'em', 'u', 'strike', 'a', 'ul', 'ol', 'li',
      'code', 'pre', 'img', 'blockquote', 'div', 'span'
    ],
    ALLOWED_ATTR: ['href', 'src', 'alt', 'class', 'style'],
  });
}