import React from "react";
import { Label } from "../ui/label";
import { Image as ImageIcon, X } from "lucide-react";

const ImageUploader = ({
  selectedImage,
  imagePreview,
  onImageSelect,
  onRemoveImage,
  fileInputRef,
}) => {
  return (
    <div>
      <Label
        htmlFor="imageUpload"
        className="font-sans font-medium text-slate-700 dark:text-slate-300"
      >
        Plant Leaf Image
      </Label>

      <div
        className="
          relative
          mt-1
          group
          flex
          flex-col
          items-center
          justify-center

          w-full
          h-64

          border-2
          border-dashed
          border-gray-200
          dark:border-slate-700

          bg-gray-50/50
          dark:bg-slate-800/60

          rounded-xl

          hover:border-green-400
          dark:hover:border-green-500

          hover:bg-green-50/30
          dark:hover:bg-green-900/20

          transition-all
          duration-300
          overflow-hidden
        "
      >
        {imagePreview ? (
          <div className="flex flex-col items-center justify-center w-full h-full p-4">
            <div className="relative rounded-lg shadow-sm border border-gray-100 dark:border-slate-700 overflow-hidden bg-white dark:bg-slate-900">
              <img
                src={imagePreview}
                alt="Selected plant leaf"
                className="h-36 object-contain transition-transform duration-300 group-hover:scale-105"
              />

              <button
                type="button"
                onClick={onRemoveImage}
                className="
                  absolute
                  top-1
                  right-1

                  bg-white/90
                  dark:bg-slate-800/90

                  text-red-500

                  hover:bg-red-50
                  dark:hover:bg-red-950/40

                  p-1.5
                  rounded-full

                  shadow-sm

                  transition-all
                  duration-200
                "
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="mt-3 text-center">
              <p className="font-sans text-sm font-medium text-slate-700 dark:text-slate-200 truncate max-w-[220px]">
                {selectedImage.name}
              </p>

              <p className="font-mono text-xs text-slate-500 dark:text-slate-400 mt-1">
                {(selectedImage.size / 1024).toFixed(1)} KB
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <div
              className="
                bg-white
                dark:bg-slate-900

                p-3

                rounded-full

                shadow-sm

                border
                border-gray-100
                dark:border-slate-700

                mb-3

                group-hover:scale-110

                transition-all
              "
            >
              <ImageIcon className="h-6 w-6 text-slate-400 dark:text-slate-500 group-hover:text-green-500" />
            </div>

            <p className="font-sans mb-1 text-sm text-slate-600 dark:text-slate-300 font-medium">
              <span className="text-green-600 dark:text-green-400 font-semibold group-hover:underline">
                Click to upload
              </span>{" "}
              or drag and drop
            </p>

            <p className="font-mono text-xs text-slate-500 dark:text-slate-400">
              PNG, JPG, JPEG up to 10MB
            </p>
          </div>
        )}

        <input
          ref={fileInputRef}
          id="imageUpload"
          type="file"
          accept="image/*"
          onChange={onImageSelect}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
          aria-label="Upload plant leaf image"
        />
      </div>
    </div>
  );
};

export default ImageUploader;