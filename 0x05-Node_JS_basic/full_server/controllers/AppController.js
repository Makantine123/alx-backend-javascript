/* App Controller class */

class AppController {
  static getHomepage(request, response) {
    response.status = 200;
    response.semd('Hello Holberton School!');
  }
}

module.exports = AppController;
