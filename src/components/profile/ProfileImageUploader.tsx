import React, { useState, useRef } from "react";
import { Button } from "../ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Upload, X, Check } from "lucide-react";
import { useAuth } from "../../contexts/AuthContext";
import { useSettings } from "../../contexts/SettingsContext";

interface ProfileImageUploaderProps {
  size?: "sm" | "md" | "lg";
  showUploadButton?: boolean;
}

const ProfileImageUploader = ({
  size = "md",
  showUploadButton = true,
}: ProfileImageUploaderProps) => {
  const { user, updateProfileImage, loading } = useAuth();
  const { isRTL } = useSettings();
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const sizeClasses = {
    sm: "h-16 w-16",
    md: "h-24 w-24",
    lg: "h-32 w-32",
  };

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleConfirmUpload = async () => {
    if (selectedFile) {
      await updateProfileImage(selectedFile);
      setPreviewUrl(null);
      setSelectedFile(null);
    }
  };

  const handleCancelUpload = () => {
    setPreviewUrl(null);
    setSelectedFile(null);
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <Avatar className={`${sizeClasses[size]} border-2 border-gray-200`}>
          <AvatarImage
            src={previewUrl || user?.profileImage || ""}
            alt={user?.name || "User"}
          />
          <AvatarFallback className="bg-purple-700 text-white text-lg">
            {user?.name?.charAt(0).toUpperCase() || "U"}
          </AvatarFallback>
        </Avatar>

        {showUploadButton && !previewUrl && (
          <Button
            size="icon"
            variant="secondary"
            className="absolute bottom-0 right-0 h-8 w-8 rounded-full shadow-md"
            onClick={handleUploadClick}
          >
            <Upload className="h-4 w-4" />
          </Button>
        )}

        {previewUrl && (
          <div className="absolute -bottom-2 right-0 flex space-x-1 rtl:space-x-reverse">
            <Button
              size="icon"
              variant="destructive"
              className="h-7 w-7 rounded-full shadow-md"
              onClick={handleCancelUpload}
            >
              <X className="h-4 w-4" />
            </Button>
            <Button
              size="icon"
              variant="default"
              className="h-7 w-7 rounded-full shadow-md"
              onClick={handleConfirmUpload}
              disabled={loading}
            >
              <Check className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>

      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      {loading && (
        <p className="text-sm text-gray-500 mt-2">
          {isRTL ? "جاري الرفع..." : "Uploading..."}
        </p>
      )}
    </div>
  );
};

export default ProfileImageUploader;
