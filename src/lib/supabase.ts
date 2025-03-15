import { createClient } from "@supabase/supabase-js";
import config from "../config";

// Initialize Supabase client using configuration
const supabaseUrl = config.supabase.url;
const supabaseKey = config.supabase.anonKey;

// Use mock mode from configuration
const isMockMode = config.supabase.mockMode;

export const supabase = createClient(supabaseUrl, supabaseKey);

// Mock functions for development without actual Supabase connection
export const uploadProfileImage = async (
  userId: string,
  file: File,
): Promise<string> => {
  if (isMockMode) {
    // Return a mock URL for testing
    return `https://api.dicebear.com/7.x/avataaars/svg?seed=${userId}-${Date.now()}`;
  }

  // Actual implementation for when Supabase is connected
  const fileName = `${userId}-${Date.now()}`;
  const { data, error } = await supabase.storage
    .from("profile-images")
    .upload(`public/${fileName}`, file);

  if (error) {
    throw new Error("Error uploading image: " + error.message);
  }

  // Get public URL
  const {
    data: { publicUrl },
  } = supabase.storage
    .from("profile-images")
    .getPublicUrl(`public/${fileName}`);

  return publicUrl;
};

export const getProfileImageUrl = (imagePath: string | null): string => {
  if (!imagePath) {
    return "";
  }

  if (isMockMode || imagePath.startsWith("http")) {
    return imagePath;
  }

  // Get public URL from Supabase
  const {
    data: { publicUrl },
  } = supabase.storage.from("profile-images").getPublicUrl(imagePath);

  return publicUrl;
};
