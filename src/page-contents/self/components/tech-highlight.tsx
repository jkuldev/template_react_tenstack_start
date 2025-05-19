"use client";

import { motion } from "framer-motion";
import { LineChart, ShieldCheck, Lock, Layers, Code } from "lucide-react";
import { cn } from "@/lib/utils";

const techFeatures = [
  {
    icon: LineChart,
    title: "Real-time Tracking & Analytics",
    description:
      "Monitor user behavior and business metrics in real-time with our advanced analytics engine.",
    details:
      "Our real-time tracking system captures user interactions, system events, and business metrics as they happen. The analytics engine processes this data instantly, allowing you to see trends, anomalies, and opportunities the moment they emerge. With customizable dashboards and alerts, you'll never miss critical insights that could impact your business.",
  },
  {
    icon: ShieldCheck,
    title: "Role-based Permissions",
    description:
      "Implement granular access control with customizable role-based permissions.",
    details:
      "Our sophisticated role-based access control system allows you to define exactly what each user can see and do within your organization. Create custom roles with precise permission sets, implement hierarchical access structures, and enforce the principle of least privilege. With inheritance capabilities and permission templates, you can quickly set up complex access structures that grow with your organization.",
  },
  {
    icon: Lock,
    title: "Secure User Authentication",
    description:
      "Enterprise-grade security with multi-factor authentication and SSO options.",
    details:
      "Protect your organization with military-grade authentication protocols. Our system supports multiple authentication factors including SMS, authenticator apps, biometrics, and hardware keys. Implement single sign-on (SSO) with support for SAML, OAuth, and OpenID Connect to integrate with your existing identity providers. Advanced session management features let you control concurrent logins, enforce IP restrictions, and set up automatic timeouts.",
  },
  {
    icon: Layers,
    title: "Modular Design Architecture",
    description:
      "Flexible, modular design for organizations, branches, and applications.",
    details:
      "Our platform is built on a modular architecture that adapts to your organizational structure. Each module—from user management to analytics—can be configured independently to match your specific needs. This modular approach allows you to start with essential components and add functionality as your organization grows. The system maintains relationships between modules, ensuring data flows seamlessly throughout your organization.",
  },
  {
    icon: Code,
    title: "Developer-friendly Integrations",
    description:
      "Comprehensive API support and webhooks for seamless third-party integrations.",
    details:
      "Connect HBR Hub to your existing tools and systems with our developer-friendly integration capabilities. Our RESTful API provides access to all platform features with comprehensive documentation and client libraries for popular programming languages. Webhooks allow real-time data synchronization with external systems, while our integration marketplace offers pre-built connectors for common business tools. Custom integration options are available for specialized needs.",
  },
];

export function TechHighlights() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Built with Modern Technology
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            HBR Hub leverages cutting-edge technology to provide a secure,
            scalable, and developer-friendly platform
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {techFeatures.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col items-center text-center p-6 rounded-xl",
                "bg-background/80 backdrop-blur-sm border shadow-sm"
              )}
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
              <div className="mt-4 pt-4 border-t  text-sm text-left">
                {feature.details}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
