import webpack from "webpack";
import { createConfig } from "./config";

const compilerConfig = createConfig();

webpack(compilerConfig, (err, stats) => {
  // Stats Object
  if (err || stats.hasErrors()) {
    throw err;
  }
  console.log(
    stats.toString({
      chunks: false, // Makes the build much quieter
      colors: true, // Shows colors in the console
    })
  );
  // Done processing
});
