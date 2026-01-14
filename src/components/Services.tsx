import { motion } from "framer-motion";
import {
  Code2,
  Palette,
  Smartphone,
  Globe,
  Database,
  Lightbulb,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Building high-performance, scalable web applications using modern technologies and best practices.",
    features: ["Next.js / React", "Laravel / PHP", "Custom Solutions", "API Integration"],
    gradient: "from-[#FF4D00] to-[#FF6B35]",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description:
      "Creating intuitive, user-centered designs that enhance user experience and drive engagement.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description:
      "Developing cross-platform mobile applications with React Native for iOS and Android.",
    features: ["React Native", "Cross-Platform", "Native Features", "App Store Deployment"],
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Backend Services",
    description:
      "Designing and implementing robust backend systems, APIs, and database architectures.",
    features: ["RESTful APIs", "GraphQL", "Database Design", "Cloud Services"],
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: Code2,
    title: "Custom Software",
    description:
      "Building tailored software solutions to solve unique business challenges and automate workflows.",
    features: ["Business Logic", "Integrations", "Automation", "Scalable Architecture"],
    gradient: "from-orange-500 to-yellow-500",
  },
  {
    icon: Lightbulb,
    title: "Consulting",
    description:
      "Providing technical guidance and strategic advice to help businesses make informed technology decisions.",
    features: ["Tech Strategy", "Code Review", "Best Practices", "Team Training"],
    gradient: "from-indigo-500 to-violet-500",
  },
];

export function Services() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {services.map((service, index) => (
        <motion.div
          key={service.title}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="glass-card rounded-2xl p-6 glass-card-hover group relative overflow-hidden"
        >
          {/* Background gradient on hover */}
          <div
            className={cn(
              "absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-br",
              service.gradient
            )}
          />

          {/* Icon */}
          <div
            className={cn(
              "w-12 h-12 rounded-xl bg-gradient-to-br flex items-center justify-center mb-4",
              service.gradient
            )}
          >
            <service.icon className="h-6 w-6 text-white" />
          </div>

          {/* Title */}
          <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-[#FF4D00] transition-colors">
            {service.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-4">
            {service.description}
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-2">
            {service.features.map((feature) => (
              <span
                key={feature}
                className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground"
              >
                {feature}
              </span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
}
