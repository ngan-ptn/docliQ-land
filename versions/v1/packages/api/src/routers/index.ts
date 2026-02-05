import { db } from "@v1/db";
import {
  users,
  doctors,
  appointments,
  specialties,
  timeSlots,
  familyMembers,
  notifications,
  newsArticles,
  myDoctorEntries,
} from "@v1/db/schema";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { publicProcedure, router } from "../index";

export const appRouter = router({
  healthCheck: publicProcedure.query(() => {
    return "OK";
  }),

  // Users
  getUser: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await db.select().from(users).where(eq(users.id, input.id));
      return result[0] ?? null;
    }),

  // Doctors
  getDoctors: publicProcedure.query(async () => {
    return db.select().from(doctors);
  }),

  getDoctor: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const result = await db.select().from(doctors).where(eq(doctors.id, input.id));
      return result[0] ?? null;
    }),

  // Specialties
  getSpecialties: publicProcedure.query(async () => {
    return db.select().from(specialties);
  }),

  // Time Slots
  getTimeSlots: publicProcedure
    .input(z.object({ doctorId: z.string() }))
    .query(async ({ input }) => {
      return db.select().from(timeSlots).where(eq(timeSlots.doctorId, input.doctorId));
    }),

  // Appointments
  getAppointments: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return db.select().from(appointments).where(eq(appointments.forUserId, input.userId));
    }),

  // Family Members
  getFamilyMembers: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return db.select().from(familyMembers).where(eq(familyMembers.userId, input.userId));
    }),

  // My Doctors
  getMyDoctors: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return db.select().from(myDoctorEntries).where(eq(myDoctorEntries.userId, input.userId));
    }),

  // Notifications
  getNotifications: publicProcedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      return db.select().from(notifications).where(eq(notifications.userId, input.userId));
    }),

  // News Articles
  getNewsArticles: publicProcedure.query(async () => {
    return db.select().from(newsArticles);
  }),
});

export type AppRouter = typeof appRouter;
