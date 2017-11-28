recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   *
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   *
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */
  listFiles: function listFiles(data, dirName) {
    var filesAll = [];
    var dirNameFound = false;

    function eachItem(dir) {
      for (var k in dir) {

        if (typeof dir[k] == "object") {

          if (typeof dirName != "string") {
            if (dir[k].length == 1 && typeof dir[k][0].dirName == "undefined") {

              filesAll.push(dir[k][0]);
            }

            if (typeof dir[k].files != "undefined") {

              filesAll = filesAll.concat(dir[k].files);
            }
            eachItem(dir[k]);
          } else {
            if (dirNameFound == false) {
              if (typeof dir[k][0] != "undefined") {
                if (dir[k][0].dirName == dirName) {

                  dirNameFound = true;

                  if (typeof dir[k][0].files != "undefined") {


                    filesAll = filesAll.concat(dir[k][0].files);
                  }

                  eachItem(dir[k][0]);
                }
              }
            } else {


              if (typeof dir[k].files != "undefined") {


                filesAll = filesAll.concat(dir[k].files);
              }

              eachItem(dir[k]);
            }
          }

        }
      }
    }

    eachItem(data);

    return filesAll;
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   *
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   *
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    var a = 1,
      f = 0,
      temp;

    while (n > 0) {
      temp = a;
      a = a + f;
      f = temp;
      n--;
    }

    return f;
  },
};
