import { refs, searchQuery } from './partials/refs';
import { fetchPixabay } from './partials/pixabayAPI';
import Notiflix from 'notiflix';

refs.searchForm.addEventListener('submit', onUserSearchSub);

async function onUserSearchSub(event) {
  event.preventDefault();
  const { searchQuery } = event.currentTarget.elements;

  refs.imageContainer.innerHTML = '';

  const { hits } = await fetchPixabay(searchQuery.value, 1);

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
  </div>`
  );

  refs.imageContainer.insertAdjacentHTML('beforeend', marckup.join());
}
