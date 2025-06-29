import { createUploadthing, type FileRouter } from "uploadthing/server";
import { UTApi } from "uploadthing/server";

const f = createUploadthing();
export const utapi = new UTApi();

/**
 * This FileRouter defines all your upload endpoints.
 * You can add more like: `cvUpload`, `avatarUpload`, etc.
 */
export const ourFileRouter = {
  designUpload: f({
    // Accept images & PDFs up to 4MB
    image: { maxFileSize: "4MB", maxFileCount: 1 },
    pdf: { maxFileSize: "4MB", maxFileCount: 1 },
  }).onUploadComplete(async ({ metadata, file }) => {
    // Optional: do something with uploaded file (e.g., log or store in DB)
    console.log("Upload complete", file);
  }),
};

// Export the type for client usage
export type OurFileRouter = typeof ourFileRouter;
