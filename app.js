import express from "express";
import client from "prom-client";

const app = express();
const port = 8080;

// Create registry
const register = new client.Registry();

// Collect default system metrics
client.collectDefaultMetrics({ register });

// Custom metric (optional but impressive)
const httpRequestCounter = new client.Counter({
  name: "http_requests_total",
  help: "Total number of HTTP requests",
  labelNames: ["method", "route", "status"],
});

register.registerMetric(httpRequestCounter);

// Middleware to count requests
app.use((req, res, next) => {
  res.on("finish", () => {
    httpRequestCounter.inc({
      method: req.method,
      route: req.route?.path || req.url,
      status: res.statusCode,
    });
  });
  next();
});

// Normal route
app.get("/", (req, res) => {
  res.send("Hello from GitOps Project 🚀");
});

// 🔥 Metrics endpoint (IMPORTANT)
app.get("/metrics", async (req, res) => {
  res.set("Content-Type", register.contentType);
  res.end(await register.metrics());
});

app.listen(port, () => {
  console.log(`App running on port ${port}`);
});