import { createClient } from "redis";

let redisClient;

try {
  redisClient = createClient({
    url: process.env.REDIS_URI || "redis://127.0.0.1:6379",
  });

  redisClient.on("error", (err) => console.error("⚠️ Redis Error:", err.message));
  redisClient.on("connect", () => console.log("✅ Redis Connected"));

  await redisClient.connect();
} catch (error) {
  console.error("⚠️ Redis not running, caching disabled.");
}

export default redisClient;
