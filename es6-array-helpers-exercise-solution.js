const posts = [
  {
    title: "Blog Post 1",
    author: "John Doe",
    views: 120,
    langs: ["EN", "NL", "DE", "JA"]
  },
  {
    title: "Blog Post 2",
    author: "Jane Doe",
    views: 40,
    langs: ["EN", "NL", "NL", "ES", "PT"]
  },
  {
    title: "Blog Post 3",
    author: "John Doe",
    views: 90,
    langs: ["EN", "DE", "NO", "DK", "SE"]
  },
  {
    title: "Blog Post 4",
    author: "Jane Doe",
    views: 20,
    langs: ["EN", "NL", "DE", "NO", "SE"]
  },
  {
    title: "Blog Post 5",
    author: "John Doe",
    views: 120,
    langs: ["EN", "NL", "ES", "NO", "IT"]
  },
  {
    title: "Blog Post 6",
    author: "Will Smith",
    views: 100,
    langs: ["EN", "NL", "DE", "NO", "PT"]
  },
  {
    title: "Blog Post 7",
    author: "Jane Doe",
    views: 90,
    langs: ["EN", "NL", "DE", "NO", "SE"]
  },
  {
    title: "Blog Post 8",
    author: "Will Smith",
    views: 20,
    langs: ["EN", "NL", "SE", "NO", "PT"]
  },
  {
    title: "Blog Post 9",
    author: "John Doe",
    views: 130,
    langs: ["EN", "NL", "IT", "PT", "DK"]
  }
];

// Solution 1
const johnsPosts = posts.filter(post => post.author === "John Doe" && post.views > 100);
const languages = johnsPosts.map(post => post.langs);
const flattenedLanguages = languages.reduce((acc, cur) => acc.concat(cur), []);
const usedLanguages = [...new Set(flattenedLanguages)];

console.log(usedLanguages);


// Chained Solution
const translatedLanguages = [
  ...new Set(
    posts
      .filter(post => post.author === "John Doe" && post.views > 100)
      .map(post => post.langs)
      .reduce((acc, cur) => acc.concat(cur), [])
  )
];

console.log(translatedLanguages);