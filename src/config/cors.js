function parseOrigins(origins) {
  if (!origins) return [];
  return origins.split(",").map((origin) => origin.trim());
}

const corsOptions = {
  origin: parseOrigins(process.env.CORS_ORIGINS),
};

export default corsOptions;
