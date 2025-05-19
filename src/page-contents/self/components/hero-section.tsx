"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { CalendarDays, ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32 px-4">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className=" relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-4xl text-center"
        >
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-blue-700 to-emerald-600">
            Build a better business with jKulDev
          </h1>
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Empower your organization with jKulDev — the ultimate SaaS platform
            for teams, apps, and growth.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="group">
              Get Started Free
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              <CalendarDays className="h-4 w-4" />
              Book a Demo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-16 relative mx-auto max-w-5xl"
        >
          <div className="relative rounded-xl overflow-hidden shadow-2xl border bg-background/50 backdrop-blur">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/5 to-emerald-500/5 pointer-events-none"></div>
            <img
              src="https://png.pngtree.com/png-vector/20220625/ourmid/pngtree-infographic-dashboard-template-white-modern-png-image_5336906.png"
              alt="HBR Hub Dashboard"
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>
          <div className="absolute -top-6 -left-6 w-64 h-64 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none"></div>
        </motion.div>
      </div>
    </section>
  );
}
