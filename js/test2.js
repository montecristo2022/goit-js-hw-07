// const countries = [
//   {
//     name: 'Ukraine',
//     capital: 'Kyiv',
//     population: '41 342 465',
//     area: '603.628',
//   },
//   {
//     name: 'Spain',
//     capital: 'Madrid',
//     population: '47 450 795',
//     area: '505.990',
//   },
//   {
//     name: 'Philippines',
//     capital: 'Manila',
//     population: '109 035 343',
//     area: '300.000',
//   },
//   {
//     name: 'Angola',
//     capital: 'Luanda',
//     population: '31 127 674',
//     area: '1.246.700',
//   },
//   {
//     name: 'Gibraltar',
//     capital: 'Gibraltar',
//     population: '34 003',
//     area: '6.8',
//   },
// ];
// // const test = [
// //     {
// //         age: 30,
// //     }
// // ]
// const searchInputEl = document.querySelector('.js-search-input');
// const outputError = document.querySelector('.js-output-error');
// const countryCardEl = document.querySelector('.js-country-card');
// const createCountryCard = ({ name, capital, population, area, age } = {}) => {
//     return `<li class="country-card__item"><strong>Страна:</strong> ${name}</li>
//      <li class="country-card__item"><strong>Столица:</strong> ${capital}</li>
//      <li class="country-card__item"><strong>Население:</strong> ${population}</li>
//     //  <li class="country-card__item"><strong>Возраст:</strong> ${age}км<sup>2</sup></li>
//      <li class="country-card__item"><strong>Площадь:</strong> ${area}км<sup>2</sup></li>`;
// };
// const onSearchElInput = event => {
//   const searchQuery = event.target.value.trim();
//   console.log(searchQuery);
//   if (searchQuery === '') {
//     outputError.innerHTML = '';
//     countryCardEl.innerHTML = '';
//     return;
//   }
//   const country = countries.find(el => {
//       return el.name.toLowerCase() === searchQuery.toLowerCase();
//       //если метод find не нашел ничего в массиве, он возвращает undefinded. undefinded = false
//   });
//   if (country === undefined) {
//     outputError.textContent = 'Такой страны нет';
//     countryCardEl.innerHTML = '';
//     return;
//   }
//   countryCardEl.innerHTML = createCountryCard(country);
//   outputError.innerHTML = '';
//   console.log(country);
// };
// searchInputEl.addEventListener('input', _.debounce(onSearchElInput, 300));