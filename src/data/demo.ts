// Demo dataset so the v2 UI shell is explorable before the DB is wired.
// Replace with Prisma/Supabase queries route by route.

export type DemoSchool = {
  id: string;
  name: string;
  email: string;
  students: number;
  plan: string;
  status: "active" | "blocked" | "expired";
  revenue: number;
};

export const kpis = [
  { label: "Schools", value: "128", delta: "+12 this term", spark: [4, 6, 5, 8, 7, 10, 12] },
  { label: "Students", value: "24,806", delta: "+8.2% MoM", spark: [8, 7, 9, 11, 10, 13, 15] },
  { label: "Revenue", value: "₦4.2M", delta: "+14.6% MoM", spark: [3, 5, 4, 7, 9, 8, 12] },
  { label: "Active plans", value: "96", delta: "75% of schools", spark: [6, 6, 8, 7, 9, 10, 11] },
];

export const demoSchools: DemoSchool[] = [
  { id: "sch_01", name: "Brookfield Academy", email: "admin@brookfield.edu", students: 1240, plan: "Premium", status: "active", revenue: 486000 },
  { id: "sch_02", name: "Sunrise International", email: "info@sunrise.edu", students: 986, plan: "Standard", status: "active", revenue: 312500 },
  { id: "sch_03", name: "Heritage College", email: "office@heritage.edu", students: 1745, plan: "Premium", status: "expired", revenue: 598000 },
  { id: "sch_04", name: "Lakeside Montessori", email: "hello@lakeside.edu", students: 420, plan: "Basic", status: "active", revenue: 124000 },
  { id: "sch_05", name: "Crown Heights School", email: "admin@crownheights.edu", students: 2310, plan: "Enterprise", status: "blocked", revenue: 812300 },
  { id: "sch_06", name: "Palm Grove Academy", email: "contact@palmgrove.edu", students: 655, plan: "Standard", status: "active", revenue: 201750 },
];

export const activity = [
  { who: "Brookfield Academy", what: "renewed Premium plan", when: "2m ago" },
  { who: "Crown Heights School", what: "was blocked by admin", when: "18m ago" },
  { who: "Sunrise International", what: "added 42 students", when: "1h ago" },
  { who: "Heritage College", what: "subscription expired", when: "3h ago" },
  { who: "Palm Grove Academy", what: "completed onboarding", when: "6h ago" },
];
