import dotenv from "dotenv";
dotenv.config();

import { db } from "./index";
import {
  specialties,
  appointmentTypes,
  insurances,
  addresses,
  gdprConsents,
  availabilityPrefs,
  users,
  familyMembers,
  doctors,
  timeSlots,
  appointments,
  myDoctorEntries,
  newsArticles,
  notifications,
} from "./schema";

// Import fixture data
import specialtyData from "../fixtures/specialty.json";
import appointmentTypeData from "../fixtures/appointment_type.json";
import insuranceData from "../fixtures/insurance.json";
import addressData from "../fixtures/address.json";
import gdprConsentData from "../fixtures/gdpr_consent.json";
import availabilityPrefsData from "../fixtures/availability_prefs.json";
import userData from "../fixtures/user.json";
import familyMemberData from "../fixtures/family_member.json";
import doctorData from "../fixtures/doctor.json";
import timeSlotData from "../fixtures/time_slot.json";
import appointmentData from "../fixtures/appointment.json";
import myDoctorEntryData from "../fixtures/my_doctor_entry.json";
import newsArticleData from "../fixtures/news_article.json";
import notificationData from "../fixtures/notification.json";

async function seed() {
  console.log("🌱 Seeding database...\n");

  // 1. Seed specialties
  console.log("  → Specialties");
  for (const item of specialtyData.items) {
    await db.insert(specialties).values({
      id: item.id,
      labelKey: item.labelKey,
      value: item.value,
      category: item.category,
    });
  }

  // 2. Seed appointment types
  console.log("  → Appointment types");
  for (const item of appointmentTypeData.items) {
    await db.insert(appointmentTypes).values({
      id: item.id,
      value: item.value,
      label: item.label,
      description: item.description,
    });
  }

  // 3. Seed insurances
  console.log("  → Insurances");
  for (const item of insuranceData.items) {
    await db.insert(insurances).values({
      id: item.id,
      type: item.type,
      egkNumber: item.egkNumber,
      provider: item.provider,
      isDefault: item.isDefault,
    });
  }

  // 4. Seed addresses
  console.log("  → Addresses");
  for (const item of addressData.items) {
    await db.insert(addresses).values({
      id: item.id,
      type: item.type,
      label: item.label,
      street: item.street,
      postalCode: item.postalCode,
      city: item.city,
      isDefault: item.isDefault,
    });
  }

  // 5. Seed GDPR consents
  console.log("  → GDPR consents");
  for (const item of gdprConsentData.items) {
    await db.insert(gdprConsents).values({
      id: item.id,
      userId: item.userId,
      dataProcessing: item.dataProcessing,
      marketing: item.marketing,
      analytics: item.analytics,
      thirdPartySharing: item.thirdPartySharing,
      consentDate: item.consentDate,
      policyVersion: item.policyVersion,
      cookiePrefs: item.cookiePrefs,
    });
  }

  // 6. Seed availability preferences
  console.log("  → Availability preferences");
  for (const item of availabilityPrefsData.items) {
    await db.insert(availabilityPrefs).values({
      id: item.id,
      userId: item.userId,
      fullyFlexible: item.fullyFlexible,
      slots: item.slots,
      updatedAt: item.updatedAt,
    });
  }

  // 7. Seed users
  console.log("  → Users");
  for (const item of userData.items) {
    await db.insert(users).values({
      id: item.id,
      fullName: item.fullName,
      email: item.email,
      phoneCountryCode: item.phoneCountryCode,
      phone: item.phone,
      dateOfBirth: item.dateOfBirth,
      gender: item.gender,
      insuranceId: item.insuranceId,
      addressId: item.addressId,
      identityVerified: item.identityVerified,
      phoneVerified: item.phoneVerified,
      authProvider: item.authProvider,
      photoUrl: item.photoUrl,
      gdprConsentId: item.gdprConsentId,
      availabilityPrefsId: item.availabilityPrefsId,
    });
  }

  // 8. Seed family members
  console.log("  → Family members");
  for (const item of familyMemberData.items) {
    await db.insert(familyMembers).values({
      id: item.id,
      userId: item.userId,
      name: item.name,
      dateOfBirth: item.dateOfBirth,
      relationship: item.relationship,
      insuranceId: item.insuranceId,
      verified: item.verified,
      photoUrl: item.photoUrl,
      emergencyContact: item.emergencyContact,
      medicalNotes: item.medicalNotes,
    });
  }

  // 9. Seed doctors
  console.log("  → Doctors");
  for (const item of doctorData.items) {
    await db.insert(doctors).values({
      id: item.id,
      name: item.name,
      specialtyId: item.specialtyId,
      city: item.city,
      address: item.address,
      rating: item.rating,
      reviewCount: item.reviewCount,
      acceptsInsurance: item.acceptsInsurance,
      nextAvailableIso: item.nextAvailableIso,
      languages: item.languages,
      imageUrl: item.imageUrl,
      about: item.about,
    });
  }

  // 10. Seed time slots
  console.log("  → Time slots");
  for (const item of timeSlotData.items) {
    await db.insert(timeSlots).values({
      id: item.id,
      doctorId: item.doctorId,
      dateIso: item.dateIso,
      time: item.time,
      available: item.available,
    });
  }

  // 11. Seed appointments
  console.log("  → Appointments");
  for (const item of appointmentData.items) {
    await db.insert(appointments).values({
      id: item.id,
      doctorId: item.doctorId,
      doctorName: item.doctorName,
      specialtyId: item.specialtyId,
      forUserId: item.forUserId,
      forUserName: item.forUserName,
      forFamilyMemberId: item.forFamilyMemberId,
      dateIso: item.dateIso,
      time: item.time,
      timeSlotId: item.timeSlotId,
      status: item.status,
      appointmentType: item.appointmentType,
      reminderSet: item.reminderSet,
      calendarSynced: item.calendarSynced,
      notes: item.notes,
      feedback: item.feedback,
      cancelReason: item.cancelReason,
      changeHistory: item.changeHistory,
    });
  }

  // 12. Seed my doctor entries
  console.log("  → My doctor entries");
  for (const item of myDoctorEntryData.items) {
    await db.insert(myDoctorEntries).values({
      id: item.id,
      userId: item.userId,
      doctorId: item.doctorId,
      lastBookedAt: item.lastBookedAt,
      addedAt: item.addedAt,
    });
  }

  // 13. Seed news articles
  console.log("  → News articles");
  for (const item of newsArticleData.items) {
    await db.insert(newsArticles).values({
      id: item.id,
      category: item.category,
      title: item.title,
      content: item.content,
      author: item.author,
      readTimeMinutes: item.readTimeMinutes,
      imageUrl: item.imageUrl,
      publishedAt: item.publishedAt,
      keyTakeaway: item.keyTakeaway,
      relatedTopics: item.relatedTopics,
    });
  }

  // 14. Seed notifications
  console.log("  → Notifications");
  for (const item of notificationData.items) {
    await db.insert(notifications).values({
      id: item.id,
      userId: item.userId,
      type: item.type,
      title: item.title,
      message: item.message,
      timestamp: item.timestamp,
      unread: item.unread,
      actionLabel: item.actionLabel,
      actionPath: item.actionPath,
      relatedObject: item.relatedObject,
    });
  }

  console.log("\n✅ Database seeded successfully!");
}

seed().catch((err) => {
  console.error("❌ Seed failed:", err);
  process.exit(1);
});
