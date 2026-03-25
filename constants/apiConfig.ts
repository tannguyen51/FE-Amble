import { Platform } from "react-native";

function ensureApiPath(url: string) {
  const trimmed = url.trim().replace(/\/+$/, "");
  return trimmed.endsWith("/api") ? trimmed : `${trimmed}/api`;
}

function getFallbackBaseUrl() {
  if (Platform.OS === "android") {
    return "http://10.0.2.2:5000/api";
  }
  return "http://localhost:5000/api";
}

const envApiUrl = process.env.EXPO_PUBLIC_API_URL;

export const API_BASE_URL = envApiUrl
  ? ensureApiPath(envApiUrl)
  : getFallbackBaseUrl();
