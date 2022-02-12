export const getComments = async () => {
  return [
    {
      id: "1",
      body: "This website is really very helpful!",
      username: "Ligma Bolson",
      userId: "1",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "2",
      body: "This group is surely going to score A for their CSAD Project",
      username: "Mark Zuckerberg",
      userId: "2",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "3",
      body: "Exactly man, really helpful website",
      username: "Nick Ger",
      userId: "2",
      parentId: "1",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "4",
      body: "I wish i joined this group",
      username: "Hrifans",
      userId: "2",
      parentId: "2",
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "5",
      body: "Please meet me in my office guys. Great work",
      username: "Elon Musk",
      userId: "5",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
    {
      id: "6",
      body: "We are willing to give yall a conditional offer to our University. Please reply to our email:)",
      username: "Harvard University",
      userId: "6",
      parentId: null,
      createdAt: "2021-08-16T23:00:33.010+02:00",
    },
  ];
};

export const createComment = async (text, parentId = null) => {
  return {
    id: Math.random().toString(36).substr(2, 9),
    body: text,
    parentId,
    userId: "1",
    username: "Anonymous",
    createdAt: new Date().toISOString(),
  };
};

export const updateComment = async (text) => {
  return { text };
};

export const deleteComment = async () => {
  return {};
};
