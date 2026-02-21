export const DEFAULT_API_BASE = "http://localhost:5600/api/0";

// Look for a URL passed as a command-line argument
const args = process.argv.slice(2);
const urlArg = args.find((arg) => arg.startsWith('http://') || arg.startsWith('https://'));

// Fall back to environment variable or default
export const AW_API_BASE = urlArg || process.env.AW_API_BASE || DEFAULT_API_BASE;
