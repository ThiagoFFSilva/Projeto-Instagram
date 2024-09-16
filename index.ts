import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";

class Post {
  private _id: string = randomUUID();
  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _description: string;
  private _isLiked: boolean = false;
  private _numberOfLikes: number = 0;
  private _createdAt: Date = new Date();

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    description: string
  ) {
    this._userName = userName;
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._description = description;
  }

  like() {
    this._isLiked = !this._isLiked;

    if (this._isLiked === true) {
      this._numberOfLikes += 1;
    } else {
      this._numberOfLikes -= 1;
    }
  }

  toHTML() {
    const postContainer = document.createElement("div");
    postContainer.className = "post-container";

    const postHeader = `
      <div class="post-header">
        <div class="left">
          <div>
            <img title="Avatar image" src=${this._avatarUrl}>
          </div>

          <span>${this._userName}</span>
        </div>

        <div class="right">
          follow ...
        </div>
      </div>`;

    const postImage = `
      <div class="post-image">
        <img title="Post image" src=${this._imageUrl}>
      </div>
    `;

    postContainer.innerHTML = postHeader;
    postContainer.innerHTML += postImage

    document.body.appendChild(postContainer);
  }
  
}

const posts: Post[] = [];

for (let index = 0; index < 15; index++) {
  const post = new Post(
    faker.person.firstName(),
    faker.image.avatarGitHub(),
    faker.image.urlPicsumPhotos(),
    faker.lorem.paragraph()
  );

  post.toHTML()
  posts.push(post);
}

console.log(posts);
console.log("testando");