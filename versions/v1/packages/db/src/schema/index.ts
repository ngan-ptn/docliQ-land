import { sqliteTable, text, integer, real } from "drizzle-orm/sqlite-core";

// Specialty (reference data)
export const specialties = sqliteTable("specialties", {
  id: text("id").primaryKey(),
  labelKey: text("label_key").notNull(),
  value: text("value").notNull(),
  category: text("category").notNull(),
});

// Appointment Type (reference data)
export const appointmentTypes = sqliteTable("appointment_types", {
  id: text("id").primaryKey(),
  value: text("value").notNull(),
  label: text("label").notNull(),
  description: text("description"),
});

// Insurance
export const insurances = sqliteTable("insurances", {
  id: text("id").primaryKey(),
  type: text("type").notNull(), // GKV, PKV
  egkNumber: text("egk_number"),
  provider: text("provider").notNull(),
  isDefault: integer("is_default", { mode: "boolean" }).default(false),
});

// Address
export const addresses = sqliteTable("addresses", {
  id: text("id").primaryKey(),
  type: text("type").notNull(), // residential, work
  label: text("label"),
  street: text("street").notNull(),
  postalCode: text("postal_code").notNull(),
  city: text("city").notNull(),
  isDefault: integer("is_default", { mode: "boolean" }).default(false),
});

// GDPR Consent
export const gdprConsents = sqliteTable("gdpr_consents", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  dataProcessing: integer("data_processing", { mode: "boolean" }).default(false),
  marketing: integer("marketing", { mode: "boolean" }).default(false),
  analytics: integer("analytics", { mode: "boolean" }).default(false),
  thirdPartySharing: integer("third_party_sharing", { mode: "boolean" }).default(false),
  consentDate: text("consent_date"),
  policyVersion: text("policy_version"),
  cookiePrefs: text("cookie_prefs", { mode: "json" }).$type<{
    essential: boolean;
    functional: boolean;
    analytics: boolean;
    marketing: boolean;
  }>(),
});

// Availability Preferences
export const availabilityPrefs = sqliteTable("availability_prefs", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull(),
  fullyFlexible: integer("fully_flexible", { mode: "boolean" }).default(false),
  slots: text("slots", { mode: "json" }).$type<
    Array<{ dayOfWeek: string; timeRange: string }>
  >(),
  updatedAt: text("updated_at"),
});

// User
export const users = sqliteTable("users", {
  id: text("id").primaryKey(),
  fullName: text("full_name").notNull(),
  email: text("email").notNull().unique(),
  phoneCountryCode: text("phone_country_code"),
  phone: text("phone"),
  dateOfBirth: text("date_of_birth"),
  gender: text("gender"),
  insuranceId: text("insurance_id").references(() => insurances.id),
  addressId: text("address_id").references(() => addresses.id),
  identityVerified: integer("identity_verified", { mode: "boolean" }).default(false),
  phoneVerified: integer("phone_verified", { mode: "boolean" }).default(false),
  authProvider: text("auth_provider"),
  photoUrl: text("photo_url"),
  gdprConsentId: text("gdpr_consent_id").references(() => gdprConsents.id),
  availabilityPrefsId: text("availability_prefs_id").references(() => availabilityPrefs.id),
});

// Family Member
export const familyMembers = sqliteTable("family_members", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  name: text("name").notNull(),
  dateOfBirth: text("date_of_birth"),
  relationship: text("relationship"),
  insuranceId: text("insurance_id").references(() => insurances.id),
  verified: integer("verified", { mode: "boolean" }).default(false),
  photoUrl: text("photo_url"),
  emergencyContact: text("emergency_contact", { mode: "json" }).$type<{
    name: string;
    phone: string;
  }>(),
  medicalNotes: text("medical_notes"),
});

// Doctor
export const doctors = sqliteTable("doctors", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  specialtyId: text("specialty_id").references(() => specialties.id),
  city: text("city"),
  address: text("address", { mode: "json" }).$type<{
    street: string;
    postalCode: string;
    city: string;
  }>(),
  rating: real("rating"),
  reviewCount: integer("review_count").default(0),
  acceptsInsurance: text("accepts_insurance", { mode: "json" }).$type<string[]>(),
  nextAvailableIso: text("next_available_iso"),
  languages: text("languages", { mode: "json" }).$type<string[]>(),
  imageUrl: text("image_url"),
  about: text("about"),
});

// Time Slot
export const timeSlots = sqliteTable("time_slots", {
  id: text("id").primaryKey(),
  doctorId: text("doctor_id").notNull().references(() => doctors.id),
  dateIso: text("date_iso").notNull(),
  time: text("time").notNull(),
  available: integer("available", { mode: "boolean" }).default(true),
});

// Appointment
export const appointments = sqliteTable("appointments", {
  id: text("id").primaryKey(),
  doctorId: text("doctor_id").references(() => doctors.id),
  doctorName: text("doctor_name"),
  specialtyId: text("specialty_id").references(() => specialties.id),
  forUserId: text("for_user_id").notNull().references(() => users.id),
  forUserName: text("for_user_name"),
  forFamilyMemberId: text("for_family_member_id").references(() => familyMembers.id),
  dateIso: text("date_iso"),
  time: text("time"),
  timeSlotId: text("time_slot_id").references(() => timeSlots.id),
  status: text("status").notNull(), // confirmed, matching, await_confirm, completed, cancelled
  appointmentType: text("appointment_type").notNull(), // follow_up, acute_urgent, prevention_wellness
  reminderSet: integer("reminder_set", { mode: "boolean" }).default(false),
  calendarSynced: integer("calendar_synced", { mode: "boolean" }).default(false),
  notes: text("notes"),
  feedback: text("feedback", { mode: "json" }).$type<{
    rating: number | null;
    comment: string | null;
  }>(),
  cancelReason: text("cancel_reason"),
  changeHistory: text("change_history", { mode: "json" }).$type<
    Array<{
      changedAt: string;
      field: string;
      from: string;
      to: string;
      reason: string;
    }>
  >(),
});

// My Doctor Entry (user's saved doctors)
export const myDoctorEntries = sqliteTable("my_doctor_entries", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  doctorId: text("doctor_id").notNull().references(() => doctors.id),
  lastBookedAt: text("last_booked_at"),
  addedAt: text("added_at"),
});

// News Article
export const newsArticles = sqliteTable("news_articles", {
  id: text("id").primaryKey(),
  category: text("category"),
  title: text("title").notNull(),
  content: text("content"),
  author: text("author"),
  readTimeMinutes: integer("read_time_minutes"),
  imageUrl: text("image_url"),
  publishedAt: text("published_at"),
  keyTakeaway: text("key_takeaway"),
  relatedTopics: text("related_topics", { mode: "json" }).$type<string[]>(),
});

// Notification
export const notifications = sqliteTable("notifications", {
  id: text("id").primaryKey(),
  userId: text("user_id").notNull().references(() => users.id),
  type: text("type").notNull(), // booking_update, upcoming, content
  title: text("title").notNull(),
  message: text("message"),
  timestamp: text("timestamp"),
  unread: integer("unread", { mode: "boolean" }).default(true),
  actionLabel: text("action_label"),
  actionPath: text("action_path"),
  relatedObject: text("related_object", { mode: "json" }).$type<{
    type: string;
    id: string;
  }>(),
});
