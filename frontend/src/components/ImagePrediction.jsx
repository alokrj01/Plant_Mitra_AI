import React, { useState, useRef } from "react";
import { Button } from "./ui/button.jsx";
import { Upload, Camera, Loader2 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader.jsx";
import { api } from "../api.js";
import { useToast } from "../hooks/use-toast";
import ImageUploader from "./prediction/ImageUploader.jsx";

const ImagePrediction = ({ onResult, onLoading }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  const handleImageSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    if (file) {
      if (file.type.startsWith("image/")) {
        setSelectedImage(file);
        const reader = new FileReader();
        reader.onload = (e) => {
          setImagePreview(e.target.result);
        };
        reader.readAsDataURL(file);
      } else {
        toast({
          title: "Invalid File Type",
          description: "Please select a valid image file.",
          variant: "destructive",
        });
      }
    }
  };

  const handleRemoveImage = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setSelectedImage(null);
    setImagePreview(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!selectedImage) {
      toast({
        title: "No Image Selected",
        description: "Please select a plant leaf image to analyze.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    onLoading(true);

    // Simulate API call
    try {
      const formData = new FormData();
      formData.append("file", selectedImage);

      const { data } = await api.post("/image-prediction", formData, {
        headers: { "Content-Type": undefined },
      });

      console.log("Backend Full Data:", data); //debugging

      const resultForDashboard = {
        ...data,
        type: "image",
        input: {
          fileName: selectedImage.name,
          fileSize: selectedImage.size,
          imagePreview: imagePreview,
        },
      };

      onResult(resultForDashboard);
      toast({
        title: "Analysis Complete",
        description: "Image-based prediction has been generated.",
      });

      handleRemoveImage();

    } catch (error) {
      toast({
        title: "Prediction Failed",
        description: error.response?.data?.message || error.message,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
      onLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto space-y-6 animate-in fade-in duration-500">
      {/* header */}
      <SectionHeader
       icon={Camera}
       title="Upload Leaf Image"
       subtitle="Provide a clear image image for AI analysis"
      />

      <form onSubmit={handleSubmit} className="space-y-5">

      {/* ImageUploader */}
      <ImageUploader
       selectedImage={selectedImage}
       imagePreview={imagePreview}
       onImageSelect={handleImageSelect}
       onRemoveImage={handleRemoveImage}
       fileInputRef={fileInputRef} 
      />

        <Button
          type="submit"
          className="w-full h-12 mt-2 text-sm"
          disabled={!selectedImage || isSubmitting}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Analyzing Image...
            </>
          ) : (
            <>
              <Upload className="mr-2 h-4 w-4" />
              Analyze Image
            </>
          )}
        </Button>
      </form>
    </div>
  );
};

export default ImagePrediction;
