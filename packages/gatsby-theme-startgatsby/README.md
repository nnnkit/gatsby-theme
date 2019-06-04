# How to use this theme

## Steps

1. Create a folder

2. `npm init -y`

3. `npm install react react-dom gatsby gatsby-theme-startgatsby`

4. create a file called `gatsby.config.js`

```js
module.exports = {
  __experimentalThemes: [
    {
      resolve: "gatsby-theme-startgatsby",
      options: {
        name: "Nova Blog",
        title: "Easiest way to create a blog!",
        description: "Gatsby blog starter ...",
        social: {
          facebook: "altcampus",
          twitter: "altcampus",
          github: "altcampus",
          email: "sample@example.com"
        }
      }
    }
  ],
  plugins: [
    {
      resolve: "gatsby-plugin-compile-es6-packages",
      options: {
        modules: ["gatsby-theme-startgatsby"]
      }
    }
  ]
};
```
5. add a directory called `posts`

6. `gatsby devlope`
