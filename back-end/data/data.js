export const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: 'John Doe',
        email: 'john@doe.com',
      },
      {
        name: 'Jane Doe',
        email: 'jane@doe.com',
      },
    ],
    _id: '617a077e18c25468bc7c4dd4',
    chatName: 'John Doe',
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Guest User',
        email: 'guest@example.com',
      },
      {
        name: 'Jane',
        email: 'jane@doe.com',
      },
    ],
    _id: '617a077e18c25468b27c4dd4',
    chatName: 'Guest User',
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Anthony',
        email: 'anthony@doe.com',
      },
      {
        name: 'Jane',
        email: 'jane@doe.com',
      },
    ],
    _id: '617a077e18c2d468bc7c4dd4',
    chatName: 'Anthony',
  },
  {
    isGroupChat: true,
    users: [
      {
        name: 'John Doe',
        email: 'john@doe.com',
      },
      {
        name: 'Jane',
        email: 'jane@doe.com',
      },
      {
        name: 'Guest User',
        email: 'guest@example.com',
      },
    ],
    _id: '617a518c4081150716472c78',
    chatName: 'Gals',
    groupAdmin: {
      name: 'Guest User',
      email: 'guest@example.com',
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: 'Jane Doe',
        email: 'jane@doe.com',
      },
      {
        name: 'Jane',
        email: 'jane@doe.com',
      },
    ],
    _id: '617a077e18c25468bc7cfdd4',
    chatName: 'Jane Doe',
  },
  {
    isGroupChat: true,
    users: [
      {
        name: 'John Doe',
        email: 'john@@doe.com',
      },
      {
        name: 'Jane',
        email: 'jane@doe.com',
      },
      {
        name: 'Guest User',
        email: 'guest@example.com',
      },
    ],
    _id: '617a518c4081150016472c78',
    chatName: 'Barbie Pink',
    groupAdmin: {
      name: 'Guest User',
      email: 'guest@example.com',
    },
  },
];

export const findOne = (id, index) => {
  if (chats[index]._id === id) {
    return chats[index];
  }
};
