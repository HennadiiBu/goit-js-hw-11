import { refs } from './partials/refs';
import { fetchPixabay } from './partials/pixabayAPI';
import Notiflix from 'notiflix';

refs.searchBtn.addEventListener('submit', onUserSearchSub);

async function onUserSearchSub(event) {
  event.preventDefault();
  const { searchQuery } = event.currentTarget.elements;
  const test = searchQuery.value
console.log(test)
  refs.imageContainer.innerHTML = '';

  const searchResult = await fetchPixabay(test, 1);
  const { hits } = searchResult;
  console.log(hits);
  const marckup = hits.map(
    elem => `
  <div class="photo-card">
    <img class="photo-card__image" src="${elem.webformatURL}" alt="${elem.tags}" width="180px" height="180px" loading="lazy" />
    <div class="info">
        <p class="info-item">
            <b>Likes</b>
            ${elem.likes}
        </p>
        <p class="info-item">
            <b>Views</b>
            ${elem.views}
        </p>
        <p class="info-item">
            <b>Comments</b>
            ${elem.comments}
        </p>
            <p class="info-item">
            <b>Downloads</b>
        ${elem.downloads}
        </p>
    </div>
</div>
  `
  );

  refs.imageContainer.insertAdjacentHTML('beforeend', marckup.join());
}
