export default class Number {
  static #BASE_URL =
    "https://us-central1-ss-devops.cloudfunctions.net/rand?min=1&max=300";

  static async getNumber() {
    const number = await fetch(this.#BASE_URL)
      .then((res) => res.json().then((data) => data))
      .catch((err) => err);

    return number;
  }
}
