export default {
  name: "books",
  title: "Books",
  type: "document",
  // liveEdit: true,
  fields: [
    {
      name: "image",
      title: "Image",
      type: "array",
      of: [{ type: "image" }],
      options: {
        hotspot: true
      }
      // validation: (Rule) => Rule.required().warning("No book is nameless!")
    },
    {
      name: "manuscript",
      title: "PDF Book",
      type: "file",
      fields: [
        {
          name: "pdfbook",
          type: "string",
          title: "PDF BOOK"
        }
      ]
    },
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required().warning("No book is titless!")
    },
    {
      name: "author",
      title: "Author",
      type: "string",
      validation: (Rule) =>
        Rule.required().warning("No book is authorless, you dum!?")
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 90
      }
    },
    {
      name: "myrating",
      title: "My Rating",
      type: "number",
      layout: "dropdown", // <-- defaults to 'dropdown'
      options: {
        list: [1, 2, 3, 4, 5] // <-- predefined values
      },
      validation: (Rule) =>
        Rule.required().warning("Please select a category dummy!")
    },
    {
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block"
        },
        {
          type: "image",
          fields: [
            {
              type: "text",
              name: "alt",
              title: "Alternative text",
              description: `Some of your visitors cannot see images, 
                be they blind, color-blind, low-sighted; 
                alternative text is of great help for those 
                people that can rely on it to have a good idea of 
                what\'s on your page.`,
              options: {
                isHighlighted: true
              }
            }
          ]
        }
      ]
    },
    {
      title: "Is the book still alive?",
      name: "released",
      type: "boolean"
    },
    {
      name: "genre",
      title: "Genre",
      type: "string",
      layout: "dropdown", // <-- defaults to 'dropdown'
      options: {
        list: [
          { title: "Humour and satire", value: "humour-and-satire" },
          { title: "Adventure", value: "adventure" },
          { title: "Classics", value: "classics" },
          { title: "Horror", value: "horror" },
          { title: "Historical Fiction", value: "historical-fiction" },
          { title: "Fantasy", value: "fantasy" },
          { title: "Crime", value: "crime" },
          { title: "Sexy Stuff", value: "sexy-stuff" },
          { title: "Science Fiction", value: "science-fiction" },
          { title: "Short Fiction", value: "Short Fiction" },
          { title: "Thrillers", value: "thrillers" },
          { title: "Romance", value: "romance" },
          { title: "Mystery", value: "mystery" },
          { title: "Coming-of-age fiction", value: "Coming-of-age fiction" }
        ] // <-- predefined values
      },
      validation: (Rule) =>
        Rule.required().warning("Please select a category dummy!")
    }
  ]
};
