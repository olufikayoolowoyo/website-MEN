const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

/**
 * Getting and reading User Data
 */
class UserService {
  /**
   * Constructor
   * @param {*} datafile Path to a JSON file that contains the feedback data
   */
  constructor(datafile) {
    this.datafile = datafile;
  }

  /**
   * Get all Users
   */
  async getList() {
    const data = await this.getData();
    return data;
  }

  /**
   * Add a new User item
   */
  async addEntry(name, email, title, message) {
    const data = (await this.getData()) || [];
    data.unshift({ name, email, title, message });
    return writeFile(this.datafile, JSON.stringify(data));
  }

  /**
   * Fetches feedback data from the JSON file provided to the constructor
   */
  async getData() {
    const data = await readFile(this.datafile, 'utf8');
    if (!data) return [];
    return JSON.parse(data);
  }
}

module.exports = UserService;
