// Local Development Configuration

export const config = {
  apiUrl: "http://localhost:5000/api",
  environment: "development",
  isLocalDev: true,
  supabase: {
    url: "https://your-supabase-url.supabase.co",
    anonKey: "your-supabase-anon-key",
    mockMode: true, // Use mock data instead of actual Supabase calls
  },
  features: {
    enableMockAuth: true, // Use mock authentication for local development
    enableConsoleLogging: true,
    debugMode: true,
  },
};

export default config;
