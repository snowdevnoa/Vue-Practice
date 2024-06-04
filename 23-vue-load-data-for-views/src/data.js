/* 2. This is going to signify our data store


    before we do this, take the content from pages.json and load it into local storage
    in our browser

    key: pages
    value: [
  {
    "link": { "text": "Home", "url": "index.html" },
    "pageTitle": "Home Page",
    "content": "This is home content",
    "published": true
  },
  {
    "link": { "text": "About", "url": "about.html" },
    "pageTitle": "About Page",
    "content": "This is about content",
    "published": true
  },
  {
    "link": { "text": "Contact", "url": "contact.html" },
    "pageTitle": "Contact Page",
    "content": "This is contact content",
    "published": false
  }
]


Store the key as a local variable to access the local storage
*/

const pagesKey = 'pages';
let pageJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pageJson);

/*3. I don't want to make this array directly available to whatever is going to be consuming
this data store so provide some methods to wrap around it*/

export default {
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index]; // Ideally we would have some kind of validation but for now keep things simple
  },
};
