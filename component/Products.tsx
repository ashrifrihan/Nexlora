"use client";

import { useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";

interface ProductItem {
  id: string;
  name: string;
  headline: string;
  category: string;
  status: string;
  statusType: "active" | "live";
  description: string;
  highlights: string[];
  image: string;
  link: string;
  linkText: string;
  isFlagship?: boolean;
}

const products: ProductItem[] = [
  {
    id: "bookingpartner",
    name: "BookingPartner.lk",
    headline: "Transportation Booking & Partner Management Platform",
    category: "Flagship Mobility SaaS • Sri Lanka",
    status: "Active Development • Private MVP",
    statusType: "active",
    description:
      "A Nexzoa product — a bus booking and transportation management platform connecting passengers, bus operators, and booking partners across Sri Lanka. Engineered with real-time seat reservation engines, operator fleet dispatching, automated ticketing workflows, and Claude-powered passenger assistance.",
    highlights: [
      "Real-time interactive seat reservation & inventory locking",
      "Fleet operator dispatch dashboard with live route schedules",
      "Partner commission management & sub-agent ticket issuance",
      "Intelligent assistance utilizing Anthropic Claude for passenger queries",
    ],
    image: "/projects/transitflow.png",
    link: "https://bookingpartner.lk",
    linkText: "Visit BookingPartner.lk",
    isFlagship: true,
  },
  {
    id: "quicksticker",
    name: "QuickSticker AI Studio",
    headline: "AI Sticker Generator & Background Removal Suite",
    category: "Creative AI SaaS",
    status: "Live Product",
    statusType: "live",
    description:
      "An AI-powered creator platform converting photos and natural text prompts into production-ready chat stickers. Features automated neural cutouts, custom typographic overlays, and instant multi-platform export.",
    highlights: [
      "Automated edge-detection and AI background removal",
      "35+ curated sticker typographic styles & strokes",
      "Direct client-side WebP export optimized for messaging apps",
    ],
    image: "/projects/quickSticker/QuickSticker.jpg",
    link: "https://github.com/ashrifrihan/QuickSticker",
    linkText: "View Project & Code",
  },
  {
    id: "quickcompress",
    name: "QuickCompress Optimizer",
    headline: "Client-Side Batch Image & Format Optimizer",
    category: "Developer Utility",
    status: "Live Utility",
    statusType: "live",
    description:
      "A high-speed browser-based media compression engine that processes bulk image batches in client memory. Eliminates server upload latency while ensuring complete local client privacy with zero cloud retention.",
    highlights: [
      "Lossless & lossy compression up to 90% size reduction",
      "Client-side processing with zero server telemetry or uploads",
      "Batch WebP, AVIF, PNG, and JPEG instant conversion",
    ],
    image: "/projects/QuickCompress/quick.jpg",
    link: "https://github.com/ashrifrihan/QuickCompress",
    linkText: "View Project & Code",
  },
];

export default function Products() {
  return (
    <section
      id="products"
      className="relative z-10 w-full bg-black py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Ambient Glow */}
      <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-emerald-500/[0.03] via-blue-500/[0.02] to-transparent blur-[120px] -z-10" />

      {/* Section Header */}
      <div className="mb-14 sm:mb-20 text-center max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/[0.08] mb-5"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400" />
          <span
            className="font-mono text-[10.5px] font-bold tracking-widest text-white/70 uppercase"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            Proprietary SaaS &bull; Nexzoa Products
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.12] mb-5"
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          Software Products Built by Nexzoa
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="text-sm sm:text-base md:text-lg text-white/60 leading-relaxed font-light"
          style={{ fontFamily: '"Satoshi", sans-serif' }}
        >
          Alongside custom software engineering solutions, Nexzoa builds and scales proprietary AI-powered SaaS platforms and digital products engineered for real operational impact.
        </motion.p>
      </div>

      {/* Flagship Product Showcase: BookingPartner.lk */}
      {products
        .filter((p) => p.isFlagship)
        .map((product) => (
          <FlagshipProductCard key={product.id} product={product} />
        ))}

      {/* Secondary Products Grid */}
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {products
          .filter((p) => !p.isFlagship)
          .map((product, idx) => (
            <ProductGridCard key={product.id} product={product} index={idx} />
          ))}
      </div>
    </section>
  );
}

function FlagshipProductCard({ product }: { product: ProductItem }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mp, setMp] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMp({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
      className="w-full"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[28px] sm:rounded-[36px] border border-white/[0.08] bg-[#0a0a0c]/90 backdrop-blur-xl p-6 sm:p-10 md:p-12 shadow-[0_25px_60px_rgba(0,0,0,0.9)] group transition-all duration-500 hover:border-white/[0.18]"
      >
        {/* Glow spotlight overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[36px] transition-opacity duration-500 z-0"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(650px circle at ${mp.x}px ${mp.y}px, rgba(16, 185, 129, 0.08), transparent 75%)`,
          }}
        />

        {/* Ambient top corner flare */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-gradient-to-br from-emerald-500/[0.06] to-transparent blur-[60px] rounded-tr-[36px] pointer-events-none" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column: Product Details */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Category & Status Bar */}
              <div className="flex flex-wrap items-center gap-2.5 mb-4">
                <span
                  className="font-mono text-[10.5px] font-bold text-emerald-400 uppercase tracking-widest"
                  style={{ fontFamily: '"Satoshi", sans-serif' }}
                >
                  {product.category}
                </span>
                <span className="text-white/20">&bull;</span>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/[0.08] border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                  <span className="font-mono text-[9.5px] font-semibold text-emerald-300 uppercase tracking-wider">
                    {product.status}
                  </span>
                </div>
              </div>

              {/* Title & Headline */}
              <h3
                className="text-2xl sm:text-4xl font-black text-white tracking-tight mb-2"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {product.name}
              </h3>
              <p
                className="text-sm sm:text-base font-semibold text-white/80 mb-4"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {product.headline}
              </p>

              {/* Description */}
              <p
                className="text-xs sm:text-sm text-white/60 leading-relaxed font-light mb-6"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                {product.description}
              </p>

              {/* Feature Highlights */}
              <div className="space-y-2.5 mb-8">
                {product.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-white/75 font-light">
                    <svg className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Link Button */}
            <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-white/[0.06]">
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-black font-semibold text-xs sm:text-sm hover:bg-white/90 transition-all shadow-[0_2px_15px_rgba(255,255,255,0.15)] group/btn"
                style={{ fontFamily: '"Satoshi", sans-serif' }}
              >
                <span>{product.linkText}</span>
                <svg className="w-3.5 h-3.5 text-black group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
              <span className="font-mono text-[11px] text-white/40">
                A Nexzoa Technology Platform
              </span>
            </div>
          </div>

          {/* Right Column: Interactive Product Visual */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-[0_15px_40px_rgba(0,0,0,0.8)] bg-white/[0.02] aspect-[16/11]">
              <Image
                src={product.image}
                alt={`${product.name} — ${product.headline}`}
                fill
                className="object-cover object-top group-hover:scale-[1.02] transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/10 text-[10px] font-mono text-white/70">
                <span>Fleet Operations &bull; Real-Time Seating Engine</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProductGridCard({ product, index }: { product: ProductItem; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [mp, setMp] = useState({ x: 0, y: 0 });
  const [hov, setHov] = useState(false);

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const r = ref.current.getBoundingClientRect();
    setMp({ x: e.clientX - r.left, y: e.clientY - r.top });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div
        ref={ref}
        onMouseMove={onMove}
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        className="relative overflow-hidden rounded-[24px] sm:rounded-[28px] border border-white/[0.08] bg-[#0a0a0c]/90 backdrop-blur-xl p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.85)] group transition-all duration-500 hover:border-white/[0.18] flex flex-col justify-between h-full"
      >
        {/* Glow spotlight overlay */}
        <div
          className="pointer-events-none absolute -inset-px rounded-[28px] transition-opacity duration-500 z-0"
          style={{
            opacity: hov ? 1 : 0,
            background: `radial-gradient(450px circle at ${mp.x}px ${mp.y}px, rgba(255, 255, 255, 0.05), transparent 75%)`,
          }}
        />

        <div className="relative z-10">
          {/* Header */}
          <div className="flex items-center justify-between gap-3 mb-3">
            <span
              className="font-mono text-[10px] font-bold text-white/40 uppercase tracking-widest"
              style={{ fontFamily: '"Satoshi", sans-serif' }}
            >
              {product.category}
            </span>
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/[0.08] border border-blue-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
              <span className="font-mono text-[9px] font-semibold text-blue-300 uppercase tracking-wider">
                {product.status}
              </span>
            </div>
          </div>

          <h4
            className="text-xl sm:text-2xl font-bold text-white tracking-tight mb-1"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            {product.name}
          </h4>
          <p
            className="text-xs sm:text-sm font-medium text-white/70 mb-3"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            {product.headline}
          </p>

          <p
            className="text-xs text-white/55 leading-relaxed font-light mb-5"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            {product.description}
          </p>

          {/* Product Image Thumbnail */}
          <div className="relative rounded-xl overflow-hidden border border-white/[0.08] bg-white/[0.02] aspect-[16/10] mb-5">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>

          {/* Highlights */}
          <div className="space-y-1.5 mb-6">
            {product.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-2 text-xs text-white/70 font-light">
                <svg className="w-3.5 h-3.5 text-white/40 shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <span>{h}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Footer Link */}
        <div className="pt-4 border-t border-white/[0.06] flex items-center justify-between">
          <a
            href={product.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-white/80 hover:text-white transition-colors group/link"
            style={{ fontFamily: '"Satoshi", sans-serif' }}
          >
            <span>{product.linkText}</span>
            <svg className="w-3 h-3 text-white/50 group-hover/link:text-white group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="7" y1="17" x2="17" y2="7" />
              <polyline points="7 7 17 7 17 17" />
            </svg>
          </a>
          <span className="font-mono text-[10px] text-white/35">Nexzoa Product</span>
        </div>
      </div>
    </motion.div>
  );
}
