/**
 * Demo user seed data for Guest Login
 * Used only by POST /auth/guest
 *
 * Dates are intentionally clustered so the
 * "Applications Over Time" chart has peaks (not a flat line).
 */

const daysAgo = (n) => {
  const d = new Date();
  d.setDate(d.getDate() - n);
  return d.toISOString().slice(0, 10);
};

const daysFromNow = (n) => {
  const d = new Date();
  d.setDate(d.getDate() + n);
  return d.toISOString().slice(0, 10);
};

const getDemoApplications = (userId) => [
  // Day -45 → 2 apps
  {
    company: "Amazon",
    role: "SDE I",
    status: "Offer",
    salary: "$125k",
    dateApplied: daysAgo(45),
    jobUrl: "https://amazon.jobs",
    notes: "Offer received. Negotiating start date.",
    isRemote: false,
    nextFollowUpDate: daysFromNow(1),
    userId,
    createdAt: new Date(daysAgo(45)),
    updatedAt: new Date(),
  },
  {
    company: "Netflix",
    role: "UI Engineer",
    status: "Rejected",
    salary: "$160k",
    dateApplied: daysAgo(45),
    jobUrl: "https://jobs.netflix.com",
    notes: "Rejected after final round.",
    isRemote: true,
    nextFollowUpDate: null,
    userId,
    createdAt: new Date(daysAgo(45)),
    updatedAt: new Date(),
  },

  // Day -30 → 1 app
  {
    company: "Shopify",
    role: "Frontend Developer",
    status: "Interview",
    salary: "$120k",
    dateApplied: daysAgo(30),
    jobUrl: "https://www.shopify.com/careers",
    notes: "Technical interview scheduled.",
    isRemote: true,
    nextFollowUpDate: daysFromNow(4),
    userId,
    createdAt: new Date(daysAgo(30)),
    updatedAt: new Date(),
  },

  // Day -21 → 2 apps
  {
    company: "Google",
    role: "Frontend Engineer",
    status: "Interview",
    salary: "$140k",
    dateApplied: daysAgo(21),
    jobUrl: "https://careers.google.com",
    notes: "Phone screen done. Onsite next week.",
    isRemote: true,
    nextFollowUpDate: daysFromNow(3),
    userId,
    createdAt: new Date(daysAgo(21)),
    updatedAt: new Date(),
  },
  {
    company: "Microsoft",
    role: "Full Stack Developer",
    status: "Screening",
    salary: "$128k",
    dateApplied: daysAgo(21),
    jobUrl: "https://careers.microsoft.com",
    notes: "HR screening call done.",
    isRemote: false,
    nextFollowUpDate: daysFromNow(6),
    userId,
    createdAt: new Date(daysAgo(21)),
    updatedAt: new Date(),
  },

  // Day -14 → 1 app
  {
    company: "Stripe",
    role: "Full Stack Engineer",
    status: "Screening",
    salary: "$150k",
    dateApplied: daysAgo(14),
    jobUrl: "https://stripe.com/jobs",
    notes: "OA completed. Waiting for recruiter.",
    isRemote: true,
    nextFollowUpDate: daysFromNow(5),
    userId,
    createdAt: new Date(daysAgo(14)),
    updatedAt: new Date(),
  },

  // Day -7 → 2 apps
  {
    company: "Meta",
    role: "React Developer",
    status: "Applied",
    salary: "$130k",
    dateApplied: daysAgo(7),
    jobUrl: "https://metacareers.com",
    notes: "Applied via referral.",
    isRemote: false,
    nextFollowUpDate: daysFromNow(2),
    userId,
    createdAt: new Date(daysAgo(7)),
    updatedAt: new Date(),
  },
  {
    company: "Vercel",
    role: "Software Engineer",
    status: "Applied",
    salary: "$135k",
    dateApplied: daysAgo(7),
    jobUrl: "https://vercel.com/careers",
    notes: "Just applied. Excited about this one.",
    isRemote: true,
    nextFollowUpDate: daysFromNow(7),
    userId,
    createdAt: new Date(daysAgo(7)),
    updatedAt: new Date(),
  },
];

/**
 * Ensures demo user has sample applications.
 * Inserts only if this user has zero applications.
 */
const seedDemoApplications = async (db, userId) => {
  const count = await db.collection("applications").countDocuments({ userId });
  if (count > 0) return;

  await db.collection("applications").insertMany(getDemoApplications(userId));
};

module.exports = { seedDemoApplications };
