"use client";

import { motion } from "framer-motion";
import {
  Users,
  Building2,
  ClipboardList,
  CreditCard,
  Mail,
  BarChart3,
  LogIn,
  MousePointer,
  Bell,
  LineChart,
  Settings,
  Globe,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const organizationFeatures = [
  {
    icon: Users,
    title: "User & Employee Management",
    description:
      "Manage your entire workforce with powerful user management tools.",
    details:
      "Create comprehensive user profiles with custom fields for skills, certifications, and contact information. Organize employees into teams with clear reporting lines and responsibilities. Automate onboarding and offboarding processes with customizable workflows. Track employee performance, time-off, and training completion. Implement role-based access control to ensure users only see what they need.",
  },
  {
    icon: Building2,
    title: "Department & Branch Setup",
    description:
      "Organize your company structure with customizable departments and branches.",
    details:
      "Build complex organizational hierarchies with departments, sub-departments, and branches. Manage multiple office locations with region-specific settings and policies. Allocate budgets and resources across your organizational structure. Create custom approval workflows based on your hierarchy. Generate visual org charts to understand reporting relationships and team structures at a glance.",
  },
  {
    icon: ClipboardList,
    title: "Task Tracking & Performance",
    description:
      "Monitor tasks and performance metrics across your organization.",
    details:
      "Create, assign, and track tasks with deadlines, priorities, and dependencies. View tasks in multiple formats including Kanban boards, lists, and calendars. Set and track KPIs for individuals, teams, and departments. Implement structured feedback processes and performance reviews. Generate performance reports to identify top performers and areas for improvement.",
  },
  {
    icon: CreditCard,
    title: "Invoicing & Payroll",
    description:
      "Streamline your financial operations with integrated invoicing and payroll.",
    details:
      "Generate and send professional invoices with customizable templates. Process payroll with tax calculations and direct deposit support. Track and approve employee expenses with receipt capture. Manage vendor bills and payments in one place. Generate financial reports for accounting and tax purposes. Integrate with popular accounting software for seamless data flow.",
  },
  {
    icon: Mail,
    title: "Smart Mailing & Communication",
    description: "Enhance internal communication with smart mailing features.",
    details:
      "Send targeted emails to specific departments, teams, or individuals. Create email templates for common communications. Schedule messages to be sent at optimal times. Track email opens, clicks, and responses. Implement approval workflows for important communications. Maintain a searchable archive of all company communications for compliance and reference.",
  },
  {
    icon: BarChart3,
    title: "KPI Dashboard & Reporting",
    description:
      "Track key performance indicators with customizable dashboards and reports.",
    details:
      "Build custom dashboards with drag-and-drop widgets for real-time monitoring. Create and schedule automated reports for stakeholders. Analyze trends and patterns with historical data visualization. Set up alerts for metrics that fall outside expected ranges. Export reports in multiple formats including PDF, Excel, and CSV. Drill down into data for detailed analysis of performance metrics.",
  },
];

const applicationFeatures = [
  {
    icon: LogIn,
    title: "Secure User Login/Logout",
    description: "Implement secure authentication for your applications.",
    details:
      "Protect your applications with multi-factor authentication including SMS, authenticator apps, and biometrics. Implement single sign-on (SSO) across all your applications. Control user sessions with configurable timeouts and security policies. Track login attempts and detect suspicious activities. Enforce password policies and secure credential storage. Implement IP-based restrictions and geolocation verification for enhanced security.",
  },
  {
    icon: MousePointer,
    title: "Behavior Tracking & Heatmaps",
    description:
      "Understand user behavior with detailed tracking and heatmaps.",
    details:
      "Track user journeys through your application to identify common flows and drop-offs. Generate heatmaps showing where users click, scroll, and spend time. Record and replay user sessions to understand behavior and identify usability issues. Segment users based on behavior patterns for targeted improvements. Analyze form completions and abandonment points. Identify the most and least used features in your application.",
  },
  {
    icon: Bell,
    title: "Realtime Push Notifications",
    description: "Engage users with timely and relevant push notifications.",
    details:
      "Send notifications across multiple channels including browser, mobile, email, and in-app. Target messages based on user behavior, preferences, and demographics. Schedule notifications for optimal delivery times. Track notification performance with open and engagement metrics. Allow users to manage their notification preferences. Create notification campaigns with A/B testing to optimize engagement.",
  },
  {
    icon: LineChart,
    title: "Analytics & Performance Tracking",
    description:
      "Gain insights with comprehensive analytics and performance metrics.",
    details:
      "Track user acquisition, retention, and engagement metrics in real-time. Monitor application performance including load times and resource usage. Identify and diagnose errors and performance bottlenecks. Analyze user flows and conversion funnels. Generate cohort analysis to understand user behavior over time. Create custom events and goals to track business-specific metrics and KPIs.",
  },
  {
    icon: Settings,
    title: "SaaS Org Builder with Roles",
    description:
      "Build your SaaS organization with customizable roles and permissions.",
    details:
      "Create a multi-tenant architecture supporting multiple organizations within a single application. Define granular permissions with customizable roles and access levels. Implement hierarchical permission structures with inheritance. Configure organization-specific settings, branding, and policies. Manage user invitations and onboarding workflows. Create templates for quick organization setup with predefined roles and settings.",
  },
  {
    icon: Globe,
    title: "Multi-language & Multi-org Support",
    description:
      "Support global operations with multi-language and multi-organization capabilities.",
    details:
      "Provide a localized experience with support for multiple languages and regions. Manage translations with an intuitive interface for content updates. Support right-to-left (RTL) languages and region-specific formatting for dates, numbers, and currencies. Manage multiple organizations with shared or isolated resources. Ensure compliance with region-specific regulations including GDPR, CCPA, and local data residency requirements.",
  },
];

function FeatureCard({
  feature,
  index,
  category,
}: {
  feature: any;
  index: number;
  category: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="group relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all hover:shadow-md bg-background/50 hover:bg-background/80"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
      <div className="relative z-10">
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
          <feature.icon className="h-6 w-6 text-primary" />
        </div>
        <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
        <p className="text-muted-foreground">{feature.description}</p>

        <div className="mt-4 pt-4 border-t text-sm">{feature.details}</div>

        <div className="mt-4 flex justify-end">
          <Button variant="ghost" size="sm" className="text-xs">
            Learn more <ChevronDown className="ml-1 h-3 w-3" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-background to-transparent pointer-events-none"></div>
      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Powerful Features for Your Business
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            HBR Hub provides comprehensive tools to manage your entire business
            ecosystem
          </p>
        </motion.div>

        <div className="space-y-20">
          {/* Organization Management Features */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <Building2 className="mr-2 h-6 w-6 text-primary" />
              Organization Management
            </motion.h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {organizationFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                  category="organization"
                />
              ))}
            </div>
          </div>

          {/* Application & SaaS Management Features */}
          <div>
            <motion.h3
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-2xl font-bold mb-8 flex items-center"
            >
              <Settings className="mr-2 h-6 w-6 text-primary" />
              Application & SaaS Management
            </motion.h3>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {applicationFeatures.map((feature, index) => (
                <FeatureCard
                  key={feature.title}
                  feature={feature}
                  index={index}
                  category="application"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
