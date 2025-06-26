import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; // Corrected import path for 'v'
export default defineSchema({

    feedback: defineTable({
    name: v.string(),
    message: v.string(),
    rating: v.number(), 
    createdAt: v.number(),
  }),

  contactMessages: defineTable({
    name: v.string(),
    email: v.string(),
    message: v.string(),
    createdAt: v.number(),
  }),

});