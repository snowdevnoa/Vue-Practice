const pagesKey = 'pages';
let pageJson = localStorage.getItem(pagesKey);
/* 16. Whenever we set pages, originally we did so by calling getAllPages() which is returning the array that is inside of our data aka the pagesStore in data.js
      This array object never changes. The data inside may change but the array object itself never changes go back to Navbar*/
let pagesStore = JSON.parse(pageJson);

export default {
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },
  /* 8. First update the pagesStore array so that at the given index we have that page object.
  Second we need to store this in local storage so it saves between refreshes*/
  editPage(index, page) {
    pagesStore[index] = page;
    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
  },
};

/*9. Now I want to make it so that whenever we save the page it's going to reload everything
that relies on those pages. 
In this case, it may just be only the Navbar because it needs to reload the published pages here to generate those links.

To do that we would use the global event bus. go to Pages-Edit.vue

*/