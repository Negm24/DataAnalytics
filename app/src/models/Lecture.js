// src/models/Lecture.js
export default class Lecture {
  constructor(id, title, description, categories) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.categories = categories;
  }

  getCategoryContent(category) {
    if (this.categories[category]) {
      return this.categories[category];
    }
    return "404";
  }
}
