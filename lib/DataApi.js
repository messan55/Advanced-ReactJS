class DataApi {
  constructor(rawData) {
    this.rawData = rawData;
  }
  mapTntoObject(arr) {
    return arr.reduce((acc, curr) => {
      acc[curr.id] = curr;
      return acc;
    }, {});
  }
  getArticles() {
    return this.mapTntoObject(this.rawData.articles);
  }
  getAuthors() {
    return this.mapTntoObject(this.rawData.authors);
  }
}

export default DataApi;