import webpack from "webpack";
import WebpackDevServer from "webpack-dev-server";
import { createConfig } from "./config";

const PORT = 8888;
const compilerConfig = createConfig();
const compiler = webpack(compilerConfig);

const devServerOptions = {
  // open: true,
  hot: true,
};

const server = new WebpackDevServer(compiler, devServerOptions);

server.listen(PORT, "127.0.0.1", () => {
  console.log(`Starting server on http://localhost:${PORT}`);
});
