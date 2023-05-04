import axios from 'axios';
import Notiflix from 'notiflix';

// const searchParams = new URLSearchParams({
//   key: '35917773-69c30edf6ec6a269aa0ed0b0d',
//   q: refs.searchInput.value,
//   image_type: 'photo',
//   orientation: 'horizontal',
//   safesearch: true,
//   per_page: 40,
// });


async function fetchPixabay(searchQuery, pageNum = 1) {
  try {
    const responce = await fetch(
      `https://pixabay.com/api/?key=35917773-69c30edf6ec6a269aa0ed0b0d&q=${searchQuery}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${pageNum}`
    );
    return await responce.json();
  } catch (e) {
    console.log(e);
  }
}

export { fetchPixabay };
