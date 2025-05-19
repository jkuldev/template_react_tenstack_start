"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const tiers = [
  {
    name: "Starter",
    id: "starter",
    price: { monthly: 29, yearly: 290 },
    description: "Perfect for small teams and startups.",
    features: [
      "Up to 10 team members",
      "Basic organization management",
      "Task tracking",
      "Email support",
      "1 department",
      "Basic analytics",
    ],
    cta: "Start with Starter",
    mostPopular: false,
  },
  {
    name: "Professional",
    id: "professional",
    price: { monthly: 79, yearly: 790 },
    description: "Ideal for growing businesses.",
    features: [
      "Up to 50 team members",
      "Advanced organization management",
      "Task tracking & performance monitoring",
      "Invoicing & basic payroll",
      "Email & chat support",
      "Up to 5 departments",
      "Advanced analytics",
      "API access",
    ],
    cta: "Start with Professional",
    mostPopular: true,
  },
  {
    name: "Enterprise",
    id: "enterprise",
    price: { monthly: 199, yearly: 1990 },
    description: "For large organizations with complex needs.",
    features: [
      "Unlimited team members",
      "Complete organization management",
      "Advanced task & performance tracking",
      "Full invoicing & payroll",
      "Priority support with dedicated manager",
      "Unlimited departments & branches",
      "Custom analytics & reporting",
      "Advanced API access & webhooks",
      "SSO & advanced security features",
      "Custom integrations",
    ],
    cta: "Contact Sales",
    mostPopular: false,
  },
];

export function PricingSection() {
  const [billingInterval, setBillingInterval] = useState<"monthly" | "yearly">(
    "monthly"
  );

  return (
    <section id="pricing" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-4 text-xl text-muted-foreground max-w-3xl mx-auto">
            Choose the plan that's right for your business
          </p>

          <div className="flex items-center justify-center mt-8">
            <span
              className={cn(
                "mr-2",
                billingInterval === "monthly"
                  ? "font-medium"
                  : "text-muted-foreground"
              )}
            >
              Monthly
            </span>
            <Switch
              checked={billingInterval === "yearly"}
              onCheckedChange={(checked) =>
                setBillingInterval(checked ? "yearly" : "monthly")
              }
            />
            <span
              className={cn(
                "ml-2",
                billingInterval === "yearly"
                  ? "font-medium"
                  : "text-muted-foreground"
              )}
            >
              Yearly{" "}
              <span className="text-sm text-emerald-600 font-medium">
                Save 20%
              </span>
            </span>
          </div>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={cn(
                "flex flex-col rounded-xl border p-8",
                tier.mostPopular
                  ? "border-primary shadow-md relative bg-background"
                  : "bg-background/50"
              )}
            >
              {tier.mostPopular && (
                <div className="absolute -top-4 left-0 right-0 flex justify-center">
                  <span className="bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              <div>
                <h3 className="text-2xl font-bold">{tier.name}</h3>
                <p className="mt-2 text-muted-foreground">{tier.description}</p>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">
                    $
                    {billingInterval === "monthly"
                      ? tier.price.monthly
                      : tier.price.yearly}
                  </span>
                  <span className="ml-1 text-muted-foreground">
                    /{billingInterval === "monthly" ? "month" : "year"}
                  </span>
                </div>
              </div>
              <ul className="mt-8 space-y-3 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <Check className="h-5 w-5 text-emerald-500 shrink-0 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button
                  className={cn(
                    "w-full",
                    tier.mostPopular ? "" : "bg-primary/90 hover:bg-primary"
                  )}
                >
                  {tier.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
