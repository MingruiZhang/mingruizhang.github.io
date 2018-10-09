const path = require("path");
const fs = require("fs");

const articlePath = path.join(__dirname, "../articles");

fs.readdir(articlePath, (err, filenames) => {
  if (err) throw err;
  const articleArray = [];
  filenames.forEach((filename, index) => {
    if (filename.match(/\.txt/)) {
      const content = fs.readFileSync(path.join(articlePath, filename), "utf8");
      const [time, title] = filename.split(" - ");
      const articleData = {
        id: index.toString(), // TODO: Probably a better way is to Hash the title
        content,
        title: title.replace(/\.[^/.]+$/, ""), // remove .txt extention
        time
      };
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

// filenames.forEach((filename, index) => {
// 	fs.readFile(path.join(articlePath, filename), "utf8", (err, data) => {
// 		if (err) throw err;
// 		const [time, title] = filename.split(" - ");
// 		const articleData = {
// 			id: index, // TODO: Probably a better way is to Hash the title
// 			content: data,
// 			title: title.replace(/\.[^/.]+$/, ""), // remove .txt extention
// 			time
// 		};
// 		fs.writeFile(
// 			path.join(articleJsonPath, `article-${index}.json`),
// 			JSON.stringify(articleData),
// 			"utf8",
// 			() => {
// 				console.log(`[Done] ${filename}`)
// 			}
// 		);
// 	});
// });
