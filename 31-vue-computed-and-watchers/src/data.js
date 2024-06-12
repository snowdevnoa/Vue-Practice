const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

export default {
  /*16. Create our addPage function to push our page into the pages store and save it to
  the local storage 
  
  go to our Navbar.
  */
  addPage(page) {
    pagesStore.push(page);

    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
  },
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;

    localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
  },
};
