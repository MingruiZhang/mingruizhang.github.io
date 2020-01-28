const path = require("path");
const fs = require("fs");

const articlePath = path.join(__dirname, "../articles");

fs.readdir(articlePath, (err, filenames) => {
  if (err) throw err;
  const articleArray = [];
  filenames.forEach((filename, index) => {
    if (filename.match(/\.txt/)) {
      const content = fs.readFileSync(path.join(articlePath, filename), "utf8");
      const [time, title] = filename.split(" - ").length > 1 ? filename.split(" - ") : ['', filename];
      const articleData = {
        id: index.toString(), // TODO: A better way is to Hash the title
        content,
        title: title.replace(/\.[^/.]+$/, ""), // remove .txt extension
        time
      };
      // TODO: Figure out how to order properly
      articleArray.unshift(articleData); // We want newer articles at the front.
    }
  });
  fs.writeFile(
    path.join(articlePath, `articleData.js`),
    `export default ${JSON.stringify(articleArray)}`,
    "utf8",
    () => {
      console.log(`[Done] Generated articleData.js`);
    }
  );
});
