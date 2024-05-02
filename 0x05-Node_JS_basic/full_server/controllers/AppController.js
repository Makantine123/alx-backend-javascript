/* App Controller class */

class AppController {
  static getHomepage(request, response) {
    response.status = 200;
    response.end('Hello Holberton School!');
  }
}

module.exports = AppController;
