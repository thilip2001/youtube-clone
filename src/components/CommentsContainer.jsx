import React from "react";

const comments = [
  {
    name: "Thiliban",
    comment: "This is a great video!",
    replies: [
      {
        name: "Amal",
        comment: "Thanks for the recommendation!",
        replies: [],
      },
      {
        name: "Henry",
        comment: "I agree, this video is amazing!",
        replies: [
          {
            name: "Eric",
            comment: "I completely agree with you!",
            replies: [
              {
                name: "Sam",
                comment: "I love the way you replied!",
                replies: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Thiliban",
    comment: "This is a great video!",
    replies: [
      {
        name: "Amal",
        comment: "Thanks for the recommendation!",
        replies: [],
      },
      {
        name: "Henry",
        comment: "I agree, this video is amazing!",
        replies: [
          {
            name: "Eric",
            comment: "I completely agree with you!",
            replies: [
              {
                name: "Sam",
                comment: "I love the way you replied!",
                replies: [
                  {
                    name: "Eric",
                    comment: "I completely agree with you!",
                    replies: [
                      {
                        name: "Sam",
                        comment: "I love the way you replied!",
                        replies: [
                          {
                            name: "Eric",
                            comment: "I completely agree with you!",
                            replies: [
                              {
                                name: "Sam",
                                comment: "I love the way you replied!",
                                replies: [
                                  {
                                    name: "Eric",
                                    comment: "I completely agree with you!",
                                    replies: [
                                      {
                                        name: "Sam",
                                        comment: "I love the way you replied!",
                                        replies: [
                                          {
                                            name: "Eric",
                                            comment:
                                              "I completely agree with you!",
                                            replies: [
                                              {
                                                name: "Sam",
                                                comment:
                                                  "I love the way you replied!",
                                                replies: [
                                                  {
                                                    name: "Eric",
                                                    comment:
                                                      "I completely agree with you!",
                                                    replies: [
                                                      {
                                                        name: "Sam",
                                                        comment:
                                                          "I love the way you replied!",
                                                        replies: [],
                                                      },
                                                    ],
                                                  },
                                                ],
                                              },
                                            ],
                                          },
                                        ],
                                      },
                                    ],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Henry",
    comment: "I agree, this video is amazing!",
    replies: [
      {
        name: "Eric",
        comment: "I completely agree with you!",
        replies: [
          {
            name: "Sam",
            comment: "I love the way you replied!",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    name: "Sam",
    comment: "I love the way you replied!",
    replies: [],
  },
  {
    name: "Sam",
    comment: "I love the way you replied!",
    replies: [],
  },
  {
    name: "Sam",
    comment: "I love the way you replied!",
    replies: [],
  },
];

const Comment = ({ data }) => {
  return (
    <div className="p-5 m-5 shadow-lg bg-gray-100 rounded-xl">
      <h2 className="font-bold">{data.name}</h2>
      <p>{data.comment}</p>
    </div>
  );
};

const CommentList = ({ list }) => {
  return list.map((comment, index) => (
    <div key={index}>
      <Comment data={comment} />
      <div className="pl-5 ml-5 border-l-2">
        {" "}
        {comment.replies.length > 0 && <CommentList list={comment.replies} />}
      </div>
    </div>
  ));
};
const CommentsContainer = () => {
  return (
    <div>
      <h1 className="font-bold text-2xl">Comments: </h1>
      <CommentList list={comments} />
    </div>
  );
};

export default CommentsContainer;
