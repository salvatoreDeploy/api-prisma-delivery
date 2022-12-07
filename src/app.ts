import { app } from "./server";

const PORT_DEV = process.env.PORT_DEV;

app.listen(PORT_DEV, () =>
  console.log("Server is running: Porta =>", PORT_DEV)
);
