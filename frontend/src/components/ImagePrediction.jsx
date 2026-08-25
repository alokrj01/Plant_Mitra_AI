import React, { useState, useRef } from "react";
import { Button } from "./ui/button.jsx";
import { Upload, Camera, Loader2 } from "lucide-react";
import SectionHeader from "./ui/SectionHeader.jsx";
import { predictFromImage } from "../features/predictions/api/predictionApi.js";
import { getApiErrorMessage } from "../lib/apiError.js"
import { useToast } from "../hooks/use-toast";
import ImageUploader from "./prediction/ImageUploader.jsx";

const ImagePrediction = ({ onResult, onLoading }) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const fileInputRef = useRef(null);
  const { toast } = useToast();

  const handleImageSelect = (e) => {
    if (!e.target.files || e.target.files.length === 0) { 
      return;
    }

    const file = e.target.files[0];

    const ALLOWED_IMAGE_TYPES = [
      "image/jpeg",
      "image/png",
      "image/webp",
    ];
    
    //Validate file type
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
        toast({
          title: "Invalid File Type",
          description: "Please select a JPEG, PNG, or WebP image.",
          variant: "destructive",
        });

        e.target.value = "";
        return;
      }
      
      //Validate file size
      const MAX_IMAGE_SIZE = 10 * 1024 * 1024;

      if (file.size > MAX_IMAGE_SIZE) {
        toast({
          title: "Image Too Large",
          description: "Please select an image smaller than 10 MB.",
          variant: "destructive",
        });

        e.target.value = "";
        return;
      }
      
      //Valid image
      setSelectedImage(file);

      const reader = new FileReader();

      reader.onload = (e) => {
        setImagePreview(e.target.result);
      };

      reader.readAsDataURL(file);
      
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
      const data = await predictFromImage(selectedImage);

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
        variant: "success"
      });

      handleRemoveImage();

    } catch (error) {
      console.error("IMAGE PREDICTION ERROR:", error);
      // console.error("IMAGE PREDICTION RESPONSE:", error.response?.data);

      toast({
        title: "Prediction Failed",
        description:
          getApiErrorMessage(error),
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
          aria-busy={isSubmitting}
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
