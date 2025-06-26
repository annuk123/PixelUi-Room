import { mutation } from "./_generated/server";
import { v } from "convex/values";

export const submitContactMessage = mutation({
  args: {
    name: v.string(),
    email: v.string(),
    delivery: v.optional(v.string()),
    designType: v.optional(v.string()),
    domain: v.optional(v.string()),
    budget: v.optional(v.string()),
    projectDetails: v.optional(v.string()),
    file: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    console.log("🔥 Contact form submitted:", args);

    await ctx.db.insert("contactMessages", {
      name: args.name,
      email: args.email,
      delivery: args.delivery || "",
      designType: args.designType || "",
      domain: args.domain || "",
      budget: args.budget || "",
      projectDetails: args.projectDetails || "",
      file: args.file || "",
      createdAt: Date.now(),
    });
  },
});

