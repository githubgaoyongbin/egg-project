module.exports = {
    get token() {
      console.log("token", this.get("token"));
      console.log('cookie', this.get('cookie'))
      return this.get("token");
    },
  };