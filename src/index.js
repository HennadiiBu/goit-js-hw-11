import { refs } from './partials/refs';
import { fetchPixabay } from './partials/pixabayAPI';
import Notiflix from 'notiflix';

refs.searchForm.addEventListener('submit', onUserSearchSub);
refs.loadMoreBtn.addEventListener('click', onClickLoadMore);

let page = 1;

async function onClickLoadMore() {
  page += 1;

  const { hits } = await fetchPixabay(test, page);

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

async function onUserSearchSub(event) {
  event.preventDefault();
  const test = refs.searchForm.children.searchQuery.value;
  localStorage.setItem('userSearch', test);

  const { searchQuery } = event.currentTarget.elements;

  refs.imageContainer.innerHTML = '';

  const { hits } = await fetchPixabay(searchQuery.value, page);

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
