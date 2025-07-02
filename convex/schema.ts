import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values"; 
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

  createdAt: v.number(),

  delivery: v.optional(v.string()),
  designType: v.optional(v.string()),
  domain: v.optional(v.string()),
  budget: v.optional(v.string()),
  projectDetails: v.optional(v.string()),
  file: v.optional(v.string()), 
}).index("by_createdAt", ["createdAt"]),


  newsletter: defineTable({
    email: v.string(),
    subscribedAt: v.number(),
  }).index('email', ['email']),




});