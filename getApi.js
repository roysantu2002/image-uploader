var firebase = require("firebase");

class getApi {
  api = async () => {
    const fs = require("fs");
    const directoryPath = path.join(__dirname, "files");

    fs.readdir(directoryPath, function (err, files) {
      if (err) {
        return console.log("Unable to scan directory: " + err);
      }
    });
    console.log(files);
  };
}
module.exports = getApi;
