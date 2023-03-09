//  Work with collection (array of objects)

const friends = [
  { name: "Mango", online: false },
  { name: "Kiwi", online: true },
  { name: "Poly", online: true },
  { name: "Ajax", online: false },
];

console.table(friends);

// for (const friend of friends) {
//   // console.log(friend.name);
//   // console.log(friend.online);

//   friend.newprop = 555;
// }

// console.table(friends);

// Looking friend by name

const findFriendByName = function (allFriends, name) {
  //   console.log(allFriends.includes(name)); /// don't work only for primitives

  for (const friend of friends) {
    //   console.log(friend)
    //     console.log(friend.name);

    if (friend.name === name) {
      return "FINDED!!!";
    }
  }
  return "didn't find (((";
};

// console.log(findFriendByName(friends, "Poly"));
// console.log(findFriendByName(friends, "Chelsy"));

// Get names of all friends

const getAllNames = function (allFriends) {
  const names = [];
  for (const friend of friends) {
    // console.log(friend);
    // console.log(friend.name);

    names.push(friend.name);
  }
  //   console.log(names);

  return names;
};

// console.log(getAllNames(friends));

// Get names only friends, who is online

const getOnlineFriends = function (allFriends) {
  const onlineFriends = [];

  for (const friend of friends) {
    // console.log(friend);
    // console.log(friend.online);
    if (friend.online) {
      onlineFriends.push(friend);
    }
  }
  return onlineFriends;
};

// console.log(getOnlineFriends(friends));

const getOfflineFriends = function (allFriends) {
  const offlineFriends = [];

  for (const friend of friends) {
    // console.log(friend);
    // console.log(friend.online);
    if (!friend.online) {
      offlineFriends.push(friend);
    }
  }

  return offlineFriends;
};

// console.log(getOfflineFriends(friends));

const getFriendsByOnlineStatus = function (allFriends) {
  const friendByStatus = {
    online: [],
    offline: [],
  };

  for (const friend of friends) {
    // console.log(friend);

    if (friend.online) {
      friendByStatus.online.push(friend);
      continue;
    }
    friendByStatus.offline.push(friend);

    //   friend.online
    //     ? friendByStatus.online.push(friend)
    //       : friendByStatus.offline.push(friend);

    //   const key = friend.online ? 'online' : 'offline';
    //   friendByStatus[key].push(friend);
  }

  return friendByStatus;
};

console.log(getFriendsByOnlineStatus(friends));
