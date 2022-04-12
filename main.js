let filterBtn = document.querySelectorAll(".filter-buttons .buttons");
let filterItem = document.querySelectorAll(".products .box-container .box");

filterBtn.forEach((button) => {
  button.onclick = () => {
    filterBtn.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    let dataFilter = button.getAttribute("data-filter");

    filterItem.forEach((item) => {
      item.classList.remove("active");
      item.classList.add("hide");

      if (item.getAttribute("data-item") == dataFilter || dataFilter == "all") {
        item.classList.remove("hide");
        item.classList.add("active");
      }
    });
  };
});

let blogPosts = [
  {
    title: "How to choose the best jewlery for the ocassion",
    photo: "./img/blog1.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, recusandae reprehenderit deserunt voluptatum laborum eveniet quas assumenda eius laudantium atque aspernatur debitis odio molestiae a cum possimus quis voluptates consequatur!",
    id: 1,
  },
  {
    title: "How to choose the best jewlery for the ocassion",
    photo: "./img/blog2.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, recusandae reprehenderit deserunt voluptatum laborum eveniet quas assumenda eius laudantium atque aspernatur debitis odio molestiae a cum possimus quis voluptates consequatur!",
    id: 2,
  },
  {
    title: "How to choose the best jewlery for the ocassion",
    photo: "./img/blog3.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, recusandae reprehenderit deserunt voluptatum laborum eveniet quas assumenda eius laudantium atque aspernatur debitis odio molestiae a cum possimus quis voluptates consequatur!",
    id: 3,
  },
  {
    title: "How to choose the best jewlery for the ocassion",
    photo: "./img/blog4.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, recusandae reprehenderit deserunt voluptatum laborum eveniet quas assumenda eius laudantium atque aspernatur debitis odio molestiae a cum possimus quis voluptates consequatur!",
    id: 4,
  },
  {
    title: "How to choose the best jewlery for the ocassion",
    photo: "./img/blog5.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, recusandae reprehenderit deserunt voluptatum laborum eveniet quas assumenda eius laudantium atque aspernatur debitis odio molestiae a cum possimus quis voluptates consequatur!",
    id: 5,
  },
  {
    title: "How to choose the best jewlery for the ocassion",
    photo: "./img/blog6.png",
    body: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, recusandae reprehenderit deserunt voluptatum laborum eveniet quas assumenda eius laudantium atque aspernatur debitis odio molestiae a cum possimus quis voluptates consequatur!",
    id: 6,
  },
];
let blogsContainer = document.querySelector(".blogs-container");

blogPosts.forEach((blog) => {
  blog.classList = ".blog";
  let title = (document.createElement("h3").textContent = `${blog.title}`);

  blogsContainer.appendChild(blog);
});
