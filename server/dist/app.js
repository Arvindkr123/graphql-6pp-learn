import dotenv from "dotenv";
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
dotenv.config({ path: "./.env" });
export const envMode = process.env.NODE_ENV?.trim() || "DEVELOPMENT";
const port = Number(process.env.PORT) || 3000;
// ----------- start run the graphql standalone
const server = new ApolloServer({
    typeDefs: `type Query {hello:String, hello2:String}`,
    resolvers: {
        Query: {
            hello: () => "Hello, world",
            hello2: () => "Hello, world 2",
        },
    },
});
startStandaloneServer(server, {
    listen: { port },
})
    .then(() => {
    console.log(`Server is working on ${port} in ${envMode} mode`);
})
    .catch((err) => {
    console.log(err);
});
// ----------- end run the graphql standalone
// const app = express();
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use(cors({ origin: " * ", credentials: true }));
// app.use(morgan("dev"));
// app.get("/", (req, res) => {
//   res.send("Hello, World!");
// });
// your routes here
// app.get("*", (req, res) => {
//   res.status(404).json({
//     success: false,
//     message: "Page not found",
//   });
// });
// app.use(errorMiddleware);
// app.listen(port, () =>
//   console.log("Server is working on Port:" + port + " in " + envMode + " Mode.")
// );
