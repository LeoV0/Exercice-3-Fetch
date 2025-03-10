async function myFunction() {
  const promise = await fetch("https://dummyjson.com/posts");
  const data = await promise.json();
  const productTitleContainer = document.querySelector("#titlesContainer");

  for (let i = 0; i < data.posts.length; i++) {
    const postContainer = document.createElement("div");
    postContainer.classList.add("post-container");

    const productTitle = document.createElement("h2");
    productTitle.innerHTML = data.posts[i].title;
    postContainer.appendChild(productTitle);

    const productText = document.createElement("p");
    productText.innerHTML = data.posts[i].body;
    postContainer.appendChild(productText);

    const dataContainer = document.createElement("div");
    dataContainer.classList.add("data-container");

    const likeNumbers = document.createElement("p");
    likeNumbers.innerHTML = `Likes : ${data.posts[i].reactions.likes}`;
    dataContainer.appendChild(likeNumbers);

    const dislikeNumbers = document.createElement("p");
    dislikeNumbers.innerHTML = `Dislikes : ${data.posts[i].reactions.dislikes}`;
    dataContainer.appendChild(dislikeNumbers);

    const viewNumbers = document.createElement("p");
    viewNumbers.innerHTML = `Views : ${data.posts[i].views}`;
    dataContainer.appendChild(viewNumbers);

    postContainer.appendChild(dataContainer);
    productTitleContainer.appendChild(postContainer);
  }
}

myFunction();
