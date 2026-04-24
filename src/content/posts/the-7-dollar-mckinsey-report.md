---
title: The $7 McKinsey Report
type: blog-post
status: draft
pillar: practitioner-craft
tags:
- blog
- practitioner-craft
created: '2026-03-26'
updated: '2026-04-24'
author: Dave Logan
series: the-7-dollar-mckinsey-report
series_order: 1
subtitle: How I Used AI to Turn Enterprise Account Planning on Its Head
---

*Post 1 of 8 in "The $7 McKinsey Report: A Vibe Coding Journey"*

---

Strategic account plans are the backbone of enterprise sales. They're also expensive, time-consuming, and usually stale before the ink dries.

A real McKinsey strategy engagement starts in the mid-six figures and runs six to twelve months. Even a scoped project, not a 50-account plan, is six figures minimum. Partner rates run four figures an hour. If you wanted McKinsey to produce strategic plans for 50+ enterprise accounts, you're not looking at a line item; you're looking at a seven-figure budget and a full calendar year.

Short of that, the realistic menu for most sales orgs is a boutique research firm at roughly $5,000-15,000 per deep-dive, a Gartner-style subscription at $2,000-10,000 per report, or a pair of internal analysts for six months.

I'm a Manager of Systems Engineering at VAST Data. I manage a team covering enterprise accounts across the United States. I needed strategic account plans for all of them. I had a budget of zero dollars and a time window of "yesterday."

So I did what any reasonable person would do in 2026: I asked an AI to build me a tool.

## The First Prompt

On February 20, 2026, I opened Claude Code (Anthropic's CLI tool for Claude) and typed something like:

> "I need to build an account planning tool for my SE team. It should research a company, analyze their tech stack, identify stakeholders, map competitors, and produce a strategic account plan. Think McKinsey quality but automated."

Two hours later, I had 5 account plans. They weren't perfect, but they were 80% of the way to consulting quality, and they covered real accounts my team was actively pursuing.

That was two months ago.

![AI/ML Initiatives page from a generated Epic Games account plan, with per-claim citation counts visible in the source column](../../assets/posts/the-7-dollar-mckinsey-report/s1c-ai-ml-initiatives.png)

## Where We Are Today

As of April 22, 2026:

- **Roughly 100 enterprise account plans** generated
- **~$7 per plan** (down from $15+ initially)
- **30-45 minutes** per plan (vs. days/weeks manually)
- **25+ artifact types** per plan (strategic plan, executive brief, battle cards, outreach playbooks, one-pagers, PPTX decks, and more)
- **Hundreds of citations** per plan, tracked and verifiable
- **11 modes** (full, rapid, research, competitive, update, executive, linkedin, outreach, one-pager, data-engine, stakeholders)
- **7 MCP data sources** (Salesforce CRM, SEC EDGAR, Apollo, Companies House, Zefix, YC, web research)
- **A live sales portal** with interactive dashboards for every account
- **A CEO meeting booked** from a generated LinkedIn message (90 minutes from send to confirmed)

![The live sales portal showing the index of 96 generated account plans](../../assets/posts/the-7-dollar-mckinsey-report/s2-portal-dashboard.png)

The entire system was built through "vibe coding." I directed Claude; Claude wrote every line of code, every script, every HTML page. I wrote zero code. Claude wrote 50,000+ lines.

## The Math That Changed My Mind

Here's the cost comparison that convinced me to upgrade my Claude subscription.

A note on the consulting-firm numbers below: they're estimates. Business press outlets like Bloomberg and the Financial Times periodically report McKinsey engagement minimums in the mid-six-figures and partner rates north of $1,000 an hour, but the firms don't publish rate cards. Treat these ranges as directional, not exact.

| Approach | Cost for ~100 Plans | Time |
|----------|---------------------|------|
| McKinsey-style strategy engagement (estimated) | $1M+ (minimum), likely multi-million | 6-12+ months |
| Boutique research firm or Gartner-style deep-dives | $100,000-$500,000 | 3-6 months |
| Internal analyst team (2 FTEs) | $40,000-60,000 | 3-6 months |
| My AI system | ~$700 total | ~2 months, 1.5-2 hrs/day |

The comparison isn't a clean multiple anymore. A real strategy firm won't take this scope of work for a single SE team at any price a single SE team can pay; it lives two or three orders of magnitude above my budget. What used to require a consulting firm now runs on a laptop and a coffee.

And the plans aren't watered-down AI summaries. They include real Salesforce CRM data (contacts, pipeline, win history), SEC filing analysis (executive teams, financial summaries), competitive battle cards with objection handling scripts, persona-specific outreach sequences, and deal risk scorecards with weighted win probabilities.

## What This Series Covers

Over the next 7 posts, I'll walk through the entire journey:

1. **This post** -- the headline and the "why"
2. **The First Prompt and Persistent Memory** -- how CLAUDE.md became the secret weapon
3. **From One Agent to Fourteen** -- the architecture that makes $7 plans possible
4. **MCP Servers and Live Data** -- connecting AI to Salesforce, SEC filings, and more
5. **Markdown to Boardroom** -- automating the last mile (PowerPoint, PDF, Word)
6. **Competitive Intelligence Automation, a Deep Dive** -- building battle cards, objection handling, and positioning at scale
7. **Wins and Lessons** -- what worked, what didn't, and what I'd do differently
8. **Building Your Own** -- a practical guide to getting started

Whether you're a sales leader, an SE, or just someone curious about what "vibe coding" looks like in practice, there's something here for you.

The future of enterprise sales isn't AI replacing people. It's AI making every rep as prepared as if they had a dedicated research team behind them.

For less than the cost of a Big Mac meal.

---

*Dave Logan is Manager of Systems Engineering at VAST Data. Find him at aiwithdave.com.*
