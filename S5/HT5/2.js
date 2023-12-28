"use strict";

/*
Необходимо из объекта post, вывести значения, к которым приписан комментарий, 
в консоль.
*/

const post = {
  author: "John", // вывести этот текст
  postId: 23,
  comments: [
    {
      userId: 10,
      userName: "Alex",
      text: "lorem ipsum",
      rating: {
        likes: 10,
        dislikes: 2, // вывести это число
      },
    },
    {
      userId: 5, // вывести это число
      userName: "Jane",
      text: "lorem ipsum 2", // вывести этот текст
      rating: {
        likes: 3,
        dislikes: 1,
      },
    },
  ],
};

// Вывод значения из объекта post
console.log(post.author);

// Вывод значения из объекта post.comments
post.comments.forEach(comment => {
  console.log(comment.userId); // Вывести userId
  console.log(comment.text); // Вывести текст комментария
  console.log(comment.rating.dislikes); // Вывести dislikes из рейтинга комментария
});

