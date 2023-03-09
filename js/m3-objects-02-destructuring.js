// ///////// Destructuring of object
// - Значения по умолчанию
// - Имя переменной, отличие от имени свойства

// const playlist = {
//   name: "My super playlist",
//   rating: 5,
//   tracks: ["track-1", "track-2", "track-3"],
//   trackCount: 3,
// };

// const {
//   name,
//   rating,
//   tracks,
//   trackCount: numberOfTracks = 0,
//   author = "no name",
// } = playlist;

// console.log(rating, name, tracks, trackCount);

/// Глубокая деструктуризация/////

// const profile = {
//   name: "Jacques Gluke",
//   tag: "jgluke",
//   location: "Ocho Rios, Jamaica",
//   avatar: "URL",
//   stats: {
//     followers: 5603,
//     views: 4827,
//     likes: 1308,
//   },
// };

// const {
//   name,
//   tag,
//   //   location,  ХЗ что не так(((
//   avatar,
//   stats: { followers, views, likes }, //best decision!!!!
// } = profile;

// const {followers,views,likes} = stats  // 1 var

// console.log(name, tag, profile.location, avatar, followers, views, likes);

///// Destructuring of arrays///// Object.entries()

const rgb = [255, 100, 80];

const [a, b, c] = rgb;

console.log(a, b, c);

const authors = {
  kiwi: 4,
  poly: 7,
  ajax: 9,
  mango: 6,
};

const entries = Object.entries(authors);

// for (const [name, rating] of entries) {
//   // const [name, rating] = entry; // destructuring lvl 2

//   //// Decision lvl 1
//   // const name = entry[0];
//   // const rating = entry[1];

//   console.log(name, rating); // деструктуризация делается сразу в фор офе... ур 3

/// Операция rest (сбор)
// }

const profile = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "URL",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const { name, tag, ...restProps } = profile;

console.log(name, tag);
console.log(restProps);

// Pattern (прием програмирования) "Object of settings"
// - Destructuring of parameter-object in sign of function
// - rest in time of destructuring in sign

const showProfileInfo = function (userProfile) {
  const {
    name,
    tag,
    location,
    avatar,
    stats: { followers, views, likes },
  } = userProfile; // classic destructuring

  // / Вместо userProfile destructuring
  // {
  //   name,
  //   tag,
  //   location,
  //   avatar,
  //   stats: { followers, views, likes },
  // }

  console.log(name, tag, location, avatar, followers, views, likes);
  // console.log(userProfile);
};

showProfileInfo(profile);

// const fn = function (params) {}; // Если параметров больше 3х, то необходимо делать объект настроек

// fn({ age: 10, friends: 5, isOnline: true, hobbies: [], games: {}, rating: 6 });
