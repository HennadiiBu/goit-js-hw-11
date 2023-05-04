const refs = {
  searchBtn: document.querySelector('[name=searchBtn]'),
  searchInput: document.querySelector('input'),
  imageContainer: document.querySelector('.gallery'),
  searchForm: document.querySelector('.search-form'),
  loadMoreBtn:document.querySelector('.load-more'),
};

const searchQuery = refs.searchForm.children.searchQuery.value


export { refs, searchQuery };
