import express from "express";
import chatRoutes from "./routes/chat.router.js";
import genImgRoutesv from "./routes/genImg.router.js";

// ROUTES

// APP EXPRESS
const app = express();

// MIDDLEWARES
app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", true);
  return next();
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || "Something went wrong";
  return res.status(status).json({
    success: false,
    status,
    message,
  });
});
// URLS API PREFIX
app.use("/api/chat", chatRoutes);
app.use("/api/genImg", genImgRoutesv);

export default app;
