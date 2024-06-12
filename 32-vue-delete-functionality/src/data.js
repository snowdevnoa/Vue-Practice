const pagesKey = 'pages';

let pagesJson = localStorage.getItem(pagesKey);
let pagesStore = JSON.parse(pagesJson);

/*5. since we have saved data two other times, let's just create a save function. 


Then of course we need to listen to that page deleted event inside of our navbar*/

function save() {
  localStorage.setItem(pagesKey, JSON.stringify(pagesStore));
}

export default {
  /* 4. What we need to do is splice out that item at the given index */
  removePage(index) {
    pagesStore.splice(index, 1);
    save()
  },

  addPage(page) {
    pagesStore.push(page);
    save();
  },
  getAllPages() {
    return pagesStore;
  },

  getSinglePage(index) {
    return pagesStore[index];
  },

  editPage(index, page) {
    pagesStore[index] = page;
    save();
  },
};
