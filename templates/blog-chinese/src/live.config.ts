import { defineLiveCollections } from '@emdashcms/astro/live';

export default defineLiveCollections({
  collections: {
    posts: {
      type: 'content',
      fields: {
        title: { type: 'string', required: true },
        content: { type: 'portableText' },
        excerpt: { type: 'text' },
        featured_image: { type: 'image' },
        toc: { type: 'boolean', default: true },
      },
    },
    pages: {
      type: 'content',
      fields: {
        title: { type: 'string', required: true },
        content: { type: 'portableText' },
        template: { type: 'string', default: 'default' },
      },
    },
  },
  taxonomies: {
    categories: {
      label: '分类',
      collections: ['posts'],
    },
    tags: {
      label: '标签',
      collections: ['posts'],
    },
  },
});
