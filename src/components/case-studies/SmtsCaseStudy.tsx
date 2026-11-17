import React from 'react';
import { motion } from 'framer-motion';
import { ProjectItem, PROJECTS } from '../../data/content';
import { FadeUp } from '../Shared';
import {
  ArrowLeft,
  ArrowUpRight,
  ArrowRight,
  ShieldAlert,
  Sparkles,
  Layers,
  Compass,
  Monitor,
  CheckCircle2,
  GitBranch
} from 'lucide-react';

interface SmtsCaseStudyProps {
  project: ProjectItem;
  onBack: () => void;
  onSelectProject: (p: ProjectItem) => void;
}

const FRICTION_TO_FIX = [
  {
    area: 'Navigation & Onboarding',
    before: 'Fishbowl Classic buried daily tasks across 7 nested module groups and dense tables.',
    after: 'Separated daily floor ops (Logistics, Purchase, MES) from Admin inside a clean fixed sidebar.'
  },
  {
    area: 'Floor Putaway & Speed',
    before: 'Modal dropdowns clipped mid-scroll and plugin updates required full server restarts.',
    after: 'Downward portal bin pickers, 1-click open rack pills, and fixed top-right primary CTAs.'
  },
  {
    area: 'Traceability & Quality',
    before: 'Lot history lived in disconnected reports with no visual farm-to-retail genealogy.',
    after: 'Embedded bidirectional lot trace linking green bean POs, QA holds, and retail bags.'
  },
  {
    area: 'Pricing & Audit Integrity',
    before: 'Sales views exposed internal margins, and cycle counts revealed expected quantities.',
    after: 'Customer-safe invoice breakdowns, List ≥ Floor validation, and blind cycle counting.'
  }
];

const COMPETITIVE_INSIGHTS = [
  {
    name: 'Fishbowl Classic',
    tag: 'Client Baseline',
    gap: 'Deep QuickBooks & stock engine, but steep onboarding and dated grids.',
    takeaway: 'Keep backend rigor while organizing screens around floor tasks.'
  },
  {
    name: 'Katana & MRPeasy',
    tag: 'Visual MRP',
    gap: 'Clean shop-floor UI, yet traceability sits behind pricey add-on tiers.',
    takeaway: 'Bake lot tracking and expiry visibility into core screens by default.'
  },
  {
    name: 'Odoo & NetSuite',
    tag: 'Enterprise ERP',
    gap: 'Strong QA rules, but heavy 6–8 week setup slows mid-size teams.',
    takeaway: 'Use progressive disclosure: 1-step daily actions with optional depth.'
  },
  {
    name: 'FoodLogiQ & Batch',
    tag: 'Recall Tools',
    gap: 'Strong recall chains, but disconnected from daily ERP stock moves.',
    takeaway: 'Tie lot genealogy directly to Receiving, Roasting & Dispatch scans.'
  }
];

const WORKFLOW_PIPELINE = [
  { step: '01', title: 'Receiving & QA', detail: 'PO scan → Lab check → Lot & SSCC-18' },
  { step: '02', title: 'Putaway & Bins', detail: 'Portal bin picker & rack allocation' },
  { step: '03', title: 'Roasting (MES)', detail: 'Consume raw lots → Output batch lot' },
  { step: '04', title: 'Packaging & FG', detail: 'Case creation → Finished pallet lot' },
  { step: '05', title: 'Dispatch & Trace', detail: 'Verify load → Bidirectional trace' }
];

const IA_GROUPS = [
  {
    group: 'Daily Floor Execution',
    modules: ['Dashboard Overview', 'Logistics & Bins', 'Roasting (MES)', 'Quality Holds'],
    rationale: 'Top-pinned for warehouse staff, roasters, and Q-graders performing time-sensitive scans.'
  },
  {
    group: 'Supply, Audit & Governance',
    modules: ['Purchase & POs', 'Sales & Pricing', 'Universal Trace', 'Master Data & Admin'],
    rationale: 'Structured for buyers, ops leads, and auditors without crowding floor operators.'
  }
];

interface ModuleScreen {
  id: string;
  step: string;
  tag: string;
  title: string;
  src: string;
  goal: string;
  specs: string[];
  swatches: { hex: string; label: string }[];
  whyLayout: string;
  frictionSolved: string;
  guardrail: string;
}

const MODULE_SCREENS: ModuleScreen[] = [
  {
    id: 'dashboard',
    step: '01',
    tag: 'Executive & Floor Overview',
    title: 'Operational Command Dashboard',
    src: '/assets/aistudio/image_cd91e08b.png',
    goal:
      'Surface urgent stock shortages, QA holds, and daily shift actions within 3 seconds without sub-report digging.',
    specs: ['Alt+S Global Scan', '4 Top-Strip KPIs', '1-Click Shift Actions'],
    swatches: [
      { hex: '#0F172A', label: 'Sidebar' },
      { hex: '#00619A', label: 'Primary CTA' },
      { hex: '#F59E0B', label: 'QA Hold' }
    ],
    whyLayout:
      'Placed Low Stock and Quality Hold banners directly at eye-level above the 4 operational KPIs and Quick Actions.',
    frictionSolved:
      'Replaced multi-screen morning checks with 1-click triggers (Receive Inbound PO, Execute Roast Run, Mock Recall Sim).',
    guardrail:
      'Persistent amber quarantine alerts prevent operators from accidentally roasting or staging unapproved lots.'
  },
  {
    id: 'logistics',
    step: '02',
    tag: 'Warehouse Floor & Bins',
    title: 'Logistics & Serialized Lot Browser',
    src: '/assets/aistudio/image_753c0fb3.png',
    goal:
      'Consolidate 6 fragmented warehouse queues into one unified workspace with error-free bin selection.',
    specs: ['Monospace Bin Codes', 'SSCC-18 Pallets', 'Inline Putaway'],
    swatches: [
      { hex: '#0F172A', label: 'Nav Rail' },
      { hex: '#00619A', label: 'Active Tab' },
      { hex: '#10B981', label: 'Available' }
    ],
    whyLayout:
      'Grouped Stock Browser, Receiving, Putaway, Transfers, Shipping, and Cycle Counts under a single tabbed workspace.',
    frictionSolved:
      'Fixed clipped modal dropdowns using downward portal pickers, monospace bin IDs (WH1-ZA-A01-R01-B01), and inline actions.',
    guardrail:
      'Visually and functionally separates QUARANTINE stock from AVAILABLE lots so unverified green beans stay locked.'
  },
  {
    id: 'master-data',
    step: '03',
    tag: 'Data Hygiene & Standards',
    title: 'Unified Master Data Architecture',
    src: '/assets/aistudio/image_7f761159.png',
    goal:
      'Unify Parts, Products, Bins, Suppliers, and UOM setup under one predictable form and ledger pattern.',
    specs: ['Unified Form Grid', 'Mandatory QA Flags', 'Tabular Costing'],
    swatches: [
      { hex: '#0F172A', label: 'Nav Rail' },
      { hex: '#00619A', label: 'Action Blue' },
      { hex: '#64748B', label: 'Meta Slate' }
    ],
    whyLayout:
      'Aligned Basic Info, SKU attributes, and Inventory Config into a single structured screen instead of scattered dialogs.',
    frictionSolved:
      'Combined currency-aware Standard Cost columns with consistent inline View, Edit, and Delete row actions.',
    guardrail:
      'SKU-level MANDATORY QA badges enforce automatic inspection holds whenever matching raw lots arrive at receiving.'
  },
  {
    id: 'purchasing',
    step: '04',
    tag: 'Spend & Authorization',
    title: 'Purchasing & Approval Controls',
    src: '/assets/aistudio/image_12696541.png',
    goal:
      'Pair committed spend visibility with rapid 1-click purchase order approvals above authorization limits.',
    specs: ['>$5k Spend Gate', 'Inline Approve CTA', 'PO Ledger'],
    swatches: [
      { hex: '#00619A', label: 'Approve CTA' },
      { hex: '#F59E0B', label: 'Pending Lock' },
      { hex: '#10B981', label: 'Authorized' }
    ],
    whyLayout:
      'Anchored Active Committed Spend beside Pending Authorizations above the purchase order ledger for instant context.',
    frictionSolved:
      'Eliminated multi-modal approval detours by placing a direct Approve CTA right inside >$5,000 Pending Approval rows.',
    guardrail:
      'Automatic $5,000 threshold flags high-value spend and blocks unapproved vendor POs from advancing to receiving.'
  },
  {
    id: 'traceability',
    step: '05',
    tag: 'FSMA 204 & Recall',
    title: 'Universal Lot Trace & Recall Explorer',
    src: '/assets/aistudio/image_9ea39a70.png',
    goal:
      'Replace dense recall spreadsheets with an instant vertical custody timeline from origin farm to retail bag.',
    specs: ['Bidirectional Trace', '10-Stage Custody', 'Non-Blocking Alerts'],
    swatches: [
      { hex: '#00619A', label: 'Trace Search' },
      { hex: '#10B981', label: 'Verified Node' },
      { hex: '#0F172A', label: 'Audit Chrome' }
    ],
    whyLayout:
      'Used a chronological node timeline inside Universal Trace so auditors scan origin, PO, roast batch, and dispatch fast.',
    frictionSolved:
      'Single universal lookup (Lot#, PO#, Work Order) renders both backward supplier origin and forward customer shipments together.',
    guardrail:
      'Replaces jarring browser alerts during Mock Recall simulations with persistent inline verification banners and timestamps.'
  }
];

export default function SmtsCaseStudy({
  project,
  onBack,
  onSelectProject
}: SmtsCaseStudyProps): React.JSX.Element {
  const currentIndex = PROJECTS.findIndex((p) => p.id === project.id);
  const nextProject = PROJECTS[(currentIndex + 1) % PROJECTS.length];

  return (
    <article className="min-h-screen bg-bg text-ink pb-24 pt-20 sm:pt-24 selection:bg-lime selection:text-black">
      {/* Top Floating M3 Glass Bar */}
      <div className="sticky top-4 z-40 px-4 sm:px-8 max-w-5xl mx-auto">
        <div className="flex items-center justify-between gap-4 px-4 py-2 rounded-full border border-line bg-surface/85 backdrop-blur-xl m3-elevation-2">
          <button
            onClick={onBack}
            data-testid="casestudy-back-btn"
            className="group inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium text-mut hover:text-ink hover:bg-white/5 transition-all duration-200 cursor-pointer"
          >
            <ArrowLeft size={13} className="transition-transform group-hover:-translate-x-1" />
            <span>All Projects</span>
          </button>

          <span className="text-xs font-medium text-faint hidden md:inline-block">
            SMTS Warehouse · WMS &amp; Traceability UX Case Study
          </span>

          <button
            onClick={onBack}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line text-xs font-medium text-mut hover:text-ink transition-colors cursor-pointer"
          >
            <span>Back</span>
          </button>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-5 sm:px-8 pt-6 space-y-12 sm:space-y-16">
        {/* ─── 1. COMPACT ENTERPRISE UX HERO ────────────────────────────── */}
        <motion.section
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B1324] via-[#0c2544] to-[#005082] text-white p-6 sm:p-9 border border-white/15 shadow-xl"
        >
          <div className="grid lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/15 text-[#bae6fd] text-[11px] font-medium">
                <span>Enterprise WMS &amp; MES · UX Architecture Case Study</span>
              </div>

              <h1 className="text-2xl sm:text-4xl font-bold tracking-tight leading-[1.15] text-white">
                SMTS Warehouse — Turning Complex Floor Logistics into a Traceable Workspace
              </h1>

              <p className="text-xs sm:text-sm text-slate-200/90 leading-relaxed font-light max-w-xl">
                A desktop-first product redesign uniting dock receiving, coffee roasting operations, QA quarantine holds, and FSMA 204 lot traceability across 9 operational modules.
              </p>

              {/* Quick Project Context Strip */}
              <div className="grid grid-cols-3 gap-2.5 pt-1 text-[11px] border-t border-white/15">
                <div className="pt-2">
                  <div className="text-slate-300/70 font-mono text-[10px] uppercase">Role</div>
                  <div className="font-medium text-white">Product Designer</div>
                </div>
                <div className="pt-2">
                  <div className="text-slate-300/70 font-mono text-[10px] uppercase">Users</div>
                  <div className="font-medium text-white">Floor Staff, QA &amp; Ops</div>
                </div>
                <div className="pt-2">
                  <div className="text-slate-300/70 font-mono text-[10px] uppercase">Scope</div>
                  <div className="font-medium text-white">9 WMS/MES Modules</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-2xl overflow-hidden border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.45)] bg-[#eef2f7]">
                <img
                  src="/assets/aistudio/image_e849d11f.png"
                  alt="SMTS Warehouse Desktop Showcase"
                  className="w-full h-auto block"
                />
              </div>
            </div>
          </div>
        </motion.section>

        {/* ─── 2. BASELINE FRICTION → UX DECISIONS ──────────────────────── */}
        <FadeUp y={20}>
          <section className="space-y-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                From Legacy Fishbowl Friction to Focused Workflows
              </h2>
              <p className="text-xs sm:text-sm text-mut font-light max-w-3xl">
                The client previously relied on <strong className="text-ink font-medium">Fishbowl Classic</strong>—powerful under the hood, yet slow on the floor. Every UX decision targeted a concrete operational bottleneck.
              </p>
            </div>

            <div className="rounded-3xl border border-line bg-surface/40 overflow-hidden m3-elevation-1 divide-y divide-line/60">
              <div className="hidden md:grid grid-cols-12 gap-5 px-5 py-3 bg-surface/80 text-[10px] font-mono uppercase tracking-wider text-faint">
                <div className="col-span-3">Workflow Area</div>
                <div className="col-span-4">Legacy Pain Point</div>
                <div className="col-span-5 text-accenttext">SMTS UX Decision</div>
              </div>

              {FRICTION_TO_FIX.map((row) => (
                <div
                  key={row.area}
                  className="grid md:grid-cols-12 gap-2.5 md:gap-5 px-5 py-3.5 items-start hover:bg-surface/60 transition-colors"
                >
                  <div className="md:col-span-3 text-xs sm:text-sm font-semibold text-ink">
                    {row.area}
                  </div>
                  <div className="md:col-span-4 text-xs text-mut font-light leading-relaxed">
                    <span className="md:hidden font-mono text-[10px] uppercase text-faint block mb-0.5">
                      Legacy Friction:
                    </span>
                    {row.before}
                  </div>
                  <div className="md:col-span-5 text-xs text-ink/90 font-light leading-relaxed flex items-start gap-2">
                    <CheckCircle2 size={13} className="text-emerald-400 shrink-0 mt-0.5 hidden md:block" />
                    <div>
                      <span className="md:hidden font-mono text-[10px] uppercase text-accenttext block mb-0.5">
                        UX Decision:
                      </span>
                      {row.after}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* ─── 3. COMPETITIVE BENCHMARKING + IA + PIPELINE ──────────────── */}
        <FadeUp y={20}>
          <section className="space-y-6">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                Research Insights, IA &amp; Floor Pipeline
              </h2>
              <p className="text-xs sm:text-sm text-mut font-light">
                Benchmarked leading WMS, MRP, and recall tools to organize 9 modules cleanly around daily floor muscle memory.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
              {COMPETITIVE_INSIGHTS.map((item) => (
                <div
                  key={item.name}
                  className="p-4 rounded-2xl border border-line bg-surface/40 space-y-2 m3-elevation-1"
                >
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-accenttext">
                      {item.tag}
                    </div>
                    <div className="text-sm font-bold text-ink">{item.name}</div>
                  </div>
                  <p className="text-xs text-mut leading-relaxed font-light">
                    <strong className="text-ink/80 font-medium">Gap: </strong>
                    {item.gap}
                  </p>
                  <p className="text-xs text-ink/90 leading-relaxed font-light pt-2 border-t border-line/50">
                    <strong className="text-accenttext font-medium">Takeaway: </strong>
                    {item.takeaway}
                  </p>
                </div>
              ))}
            </div>

            {/* Two-Tier Information Architecture Card */}
            <div className="grid md:grid-cols-2 gap-4">
              {IA_GROUPS.map((g) => (
                <div
                  key={g.group}
                  className="p-4 sm:p-5 rounded-2xl border border-line bg-surface/50 space-y-2.5"
                >
                  <div className="flex items-center gap-2 text-xs font-semibold text-ink">
                    <GitBranch size={13} className="text-accenttext" />
                    <span>{g.group}</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {g.modules.map((m) => (
                      <span
                        key={m}
                        className="px-2.5 py-0.5 rounded-lg border border-line bg-bg/60 text-[11px] text-ink/90"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                  <p className="text-xs text-mut font-light leading-relaxed">
                    {g.rationale}
                  </p>
                </div>
              ))}
            </div>

            {/* 5-Stage Connected Traceability Pipeline */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {WORKFLOW_PIPELINE.map((w, idx) => (
                <div
                  key={w.step}
                  className="p-3.5 rounded-2xl border border-line bg-surface/50 space-y-1"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-mono font-bold text-accenttext">{w.step}</span>
                    {idx < WORKFLOW_PIPELINE.length - 1 && (
                      <ArrowRight size={12} className="text-faint hidden sm:block" />
                    )}
                  </div>
                  <div className="text-xs sm:text-sm font-semibold text-ink">{w.title}</div>
                  <p className="text-[11px] text-mut font-light leading-snug">{w.detail}</p>
                </div>
              ))}
            </div>
          </section>
        </FadeUp>

        {/* ─── 4. HIGH-CONTRAST MODULE ARCHITECTURE & UX REASONING ──────── */}
        <section className="space-y-6">
          <FadeUp y={20}>
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accenttext font-semibold">
                <Monitor size={13} />
                <span>Screen-by-Screen UX Breakdown</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-ink">
                UX Architecture &amp; Design Reasoning
              </h2>
              <p className="text-xs sm:text-sm text-mut font-light max-w-2xl">
                Each light-mode WMS screen sits inside a deep navy-slate studio frame for crisp edge contrast alongside the exact layout hierarchy, friction solved, and system guardrails.
              </p>
            </div>
          </FadeUp>

          <div className="space-y-6">
            {MODULE_SCREENS.map((screen) => (
              <motion.div
                key={screen.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.16 }}
                transition={{ duration: 0.48, ease: [0.22, 1, 0.36, 1] }}
                className="grid lg:grid-cols-12 gap-0 overflow-hidden rounded-3xl border border-line bg-surface/45 m3-elevation-1"
              >
                {/* Deep Navy-Slate Studio Frame for Crisp Contrast Around Light WMS UI */}
                <div className="lg:col-span-6 bg-gradient-to-br from-[#09101d] via-[#0f1d34] to-[#162d4e] p-4 sm:p-6 flex items-center justify-center border-b lg:border-b-0 lg:border-r border-white/10">
                  <div className="rounded-xl overflow-hidden shadow-[0_22px_50px_-10px_rgba(0,0,0,0.65)] ring-1 ring-white/20 bg-white w-full">
                    <img
                      src={screen.src}
                      alt={screen.title}
                      className="w-full h-auto block"
                    />
                  </div>
                </div>

                {/* Clean Editorial UX Reasoning on Right (No Box-in-Box Clutter) */}
                <div className="lg:col-span-6 p-5 sm:p-7 flex flex-col justify-between gap-4">
                  <div className="space-y-3.5">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2 text-[11px] font-mono uppercase tracking-wider">
                        <span className="text-accenttext font-bold">Module {screen.step}</span>
                        <span className="text-faint">·</span>
                        <span className="text-mut">{screen.tag}</span>
                      </div>
                      <h3 className="text-lg sm:text-xl font-bold text-ink leading-snug">
                        {screen.title}
                      </h3>
                      <p className="text-xs text-mut font-light leading-relaxed">
                        {screen.goal}
                      </p>
                    </div>

                    {/* Spec Badges */}
                    <div className="flex flex-wrap gap-1.5">
                      {screen.specs.map((spec) => (
                        <span
                          key={spec}
                          className="px-2.5 py-0.5 rounded-lg border border-line bg-bg/60 text-[10px] font-mono text-ink/85"
                        >
                          {spec}
                        </span>
                      ))}
                    </div>

                    {/* Left-Accent Structured UX Notes */}
                    <div className="space-y-3 pt-2.5 border-t border-line/60">
                      <div className="pl-3 border-l-2 border-lime space-y-0.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-accenttext font-semibold">
                          Why This Hierarchy
                        </div>
                        <p className="text-xs text-mut font-light leading-relaxed">
                          {screen.whyLayout}
                        </p>
                      </div>

                      <div className="pl-3 border-l-2 border-sky-400 space-y-0.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-sky-400 font-semibold">
                          Friction Solved
                        </div>
                        <p className="text-xs text-mut font-light leading-relaxed">
                          {screen.frictionSolved}
                        </p>
                      </div>

                      <div className="pl-3 border-l-2 border-emerald-400 space-y-0.5">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 font-semibold">
                          System Guardrail
                        </div>
                        <p className="text-xs text-ink/90 font-light leading-relaxed">
                          {screen.guardrail}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Token Swatches Footer */}
                  <div className="pt-2.5 border-t border-line/60 flex flex-wrap items-center gap-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-faint">
                      Tokens:
                    </span>
                    {screen.swatches.map((sw) => (
                      <div
                        key={sw.label}
                        className="inline-flex items-center gap-1.5 text-[11px] text-mut"
                      >
                        <span
                          className="w-3 h-3 rounded-full border border-white/25 shrink-0"
                          style={{ backgroundColor: sw.hex }}
                        />
                        <span className="font-mono text-ink/90">{sw.hex}</span>
                        <span className="text-faint hidden sm:inline">({sw.label})</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* ─── 5. DESIGN SYSTEM TOKENS + OUTCOMES (COMPACT FINALE) ───────── */}
        <FadeUp y={20}>
          <section className="grid md:grid-cols-2 gap-5">
            <div className="p-6 rounded-3xl border border-line bg-surface/50 space-y-3.5 m3-elevation-1">
              <div className="flex items-center gap-2 text-sm font-bold text-ink">
                <Layers size={15} className="text-accenttext" />
                <span>Color Semantics</span>
              </div>
              <div className="grid grid-cols-2 gap-2.5 text-xs">
                {[
                  { name: 'Deep Navy Sidebar', hex: '#0F172A' },
                  { name: 'Operational Blue', hex: '#00619A' },
                  { name: 'Quarantine Amber', hex: '#F59E0B' },
                  { name: 'QA Passed Green', hex: '#10B981' }
                ].map((c) => (
                  <div key={c.name} className="p-2.5 rounded-xl border border-line bg-bg/40 flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-md border border-black/15 shrink-0" style={{ backgroundColor: c.hex }} />
                    <div className="min-w-0">
                      <div className="font-medium text-ink truncate text-[11px]">{c.name}</div>
                      <div className="font-mono text-[10px] text-faint">{c.hex}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-6 rounded-3xl border border-line bg-surface/50 space-y-2.5 m3-elevation-1 flex flex-col justify-center">
              <div className="flex items-center gap-2 text-sm font-bold text-ink">
                <ShieldAlert size={15} className="text-accenttext" />
                <span>Tabular Typography &amp; Error Prevention</span>
              </div>
              <p className="text-xs sm:text-sm text-mut font-light leading-relaxed">
                Paired clean sans-serif hierarchy with <strong className="text-ink font-medium">Monospace Tabular Numerals</strong> across bin coordinates (<code className="text-ink">WH1-ZA-A01</code>), SSCC-18 pallet IDs, and currency columns—making dense tables effortless to scan under shift pressure.
              </p>
            </div>
          </section>
        </FadeUp>

        <FadeUp y={20}>
          <section className="rounded-3xl border border-lime/25 bg-gradient-to-br from-surface/80 via-surface/50 to-lime/[0.04] p-6 sm:p-8 space-y-6 m3-elevation-1">
            <div className="space-y-1">
              <div className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-accenttext font-semibold">
                <Sparkles size={13} />
                <span>Outcomes &amp; Next Steps</span>
              </div>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-ink">
                Key Takeaways &amp; Validation Plan
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 rounded-2xl border border-line bg-bg/50 space-y-1">
                <div className="text-sm font-semibold text-ink">Workflow-First Clarity</div>
                <p className="text-xs text-mut font-light leading-relaxed">
                  Reorganized 9 complex WMS domains into predictable daily views, cutting navigation hunting across roles.
                </p>
              </div>
              <div className="p-4 rounded-2xl border border-line bg-bg/50 space-y-1">
                <div className="text-sm font-semibold text-ink">Built-In Guardrails</div>
                <p className="text-xs text-mut font-light leading-relaxed">
                  Designed out floor slip-ups—clipped bin pickers, exposed invoice margins, and uncounted reconciliations.
                </p>
              </div>
              <div className="p-4 rounded-2xl border border-line bg-bg/50 space-y-1">
                <div className="text-sm font-semibold text-ink">Traceability Readiness</div>
                <p className="text-xs text-mut font-light leading-relaxed">
                  Structured farm-to-retail lot linking directly inside operations for FSMA 204 &amp; mock recalls.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-line/60 space-y-1">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-ink font-semibold">
                <Compass size={13} className="text-accenttext" />
                <span>Next Validation Step (V2)</span>
              </div>
              <p className="text-xs sm:text-sm text-mut font-light leading-relaxed">
                Timed floor usability sessions with RF barcode scanners—benchmarking Direct Pallet Putaway speed, adding a global <code className="text-ink">Cmd+K</code> lot lookup palette, and offline aisle sync.
              </p>
            </div>
          </section>
        </FadeUp>

        {/* ─── NEXT CASE STUDY SWITCHER ─────────────────────────────────── */}
        <FadeUp y={20}>
          <div className="pt-8 border-t border-line space-y-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium uppercase tracking-wider text-faint">
                Next Case Study
              </span>
              <button
                onClick={onBack}
                className="text-xs font-medium text-accenttext hover:underline cursor-pointer"
              >
                Back to All Projects ↑
              </button>
            </div>

            <div
              onClick={() => onSelectProject(nextProject)}
              className="group rounded-3xl border border-line bg-surface/40 p-6 sm:p-7 hover:bg-surface/80 hover:border-lime/40 transition-all duration-300 cursor-pointer flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 m3-elevation-1 hover:m3-elevation-2"
            >
              <div className="space-y-1.5">
                <span className="text-xs font-medium text-accenttext">
                  {nextProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-semibold tracking-tight text-ink group-hover:text-accenttext transition-colors">
                  {nextProject.title}
                </h3>
                <p className="text-xs sm:text-sm text-mut max-w-lg line-clamp-1 font-light">
                  {nextProject.summary}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-line text-xs font-semibold text-ink group-hover:bg-lime group-hover:text-black group-hover:border-lime transition-all duration-300 shrink-0">
                <span>View Project</span>
                <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </div>
          </div>
        </FadeUp>
      </div>
    </article>
  );
}
