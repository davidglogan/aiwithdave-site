---
title: The $7 McKinsey Report
type: blog-post
status: draft
pillar: practitioner-craft
tags:
- blog
- practitioner-craft
created: '2026-03-26'
updated: '2026-04-22'
author: Dave Logan
series: the-7-dollar-mckinsey-report
series_order: 1
subtitle: How I Used AI to Turn Enterprise Account Planning on Its Head
---
# The $7 McKinsey Report
## How I Used AI to Turn Enterprise Account Planning on Its Head

*Post 1 of 8 in "The $7 McKinsey Report: A Vibe Coding Journey"*

---

Strategic account plans are the backbone of enterprise sales. They're also expensive, time-consuming, and usually stale before the ink dries.

At consulting firms, a single account plan costs $2,500-5,000. It takes weeks to produce. It's based on research that's already aging. And if you need plans for 50+ accounts? Do the math: $125,000-$250,000 and months of calendar time.

I'm a Manager of Systems Engineering at VAST Data. I manage a team covering enterprise accounts across the United States. I needed strategic account plans for all of them. I had a budget of zero dollars and a time window of "yesterday."

So I did what any reasonable person would do in 2026: I asked an AI to build me a tool.

## The First Prompt

On February 20, 2026, I opened Claude Code (Anthropic's CLI tool for Claude) and typed something like:

> "I need to build an account planning tool for my SE team. It should research a company, analyze their tech stack, identify stakeholders, map competitors, and produce a strategic account plan. Think McKinsey quality but automated."

Two hours later, I had 5 account plans. They weren't perfect, but they were 80% of the way to consulting quality, and they covered real accounts my team was actively pursuing.

That was 34 days ago.

## Where We Are Today

As of March 26, 2026:

- **53 enterprise account plans** generated
- **~$7 per plan** (down from $15+ initially)
- **30-45 minutes** per plan (vs. days/weeks manually)
- **21 artifact types** per plan (strategic plan, executive brief, battle cards, outreach playbooks, one-pagers, PPTX decks, and more)
- **150-460 citations** per plan, tracked and verifiable
- **11 modes** (full, rapid, research, competitive, update, executive, linkedin, outreach, one-pager, data-engine, stakeholders)
- **7 MCP data sources** (Salesforce CRM, SEC EDGAR, Apollo, Companies House, Zefix, YC, web research)
- **A live SE portal** with interactive dashboards for every account
- **A CEO meeting booked** from a generated LinkedIn message (90 minutes from send to confirmed)

The entire system was built through "vibe coding." I directed Claude; Claude wrote every line of code, every script, every HTML page. I wrote zero code. Claude wrote 50,000+ lines.

## The Math That Changed My Mind

Here's the cost comparison that made me go from the $20/month Claude plan to $200/month:

| Approach | Cost for 53 Plans | Time |
|----------|-------------------|------|
| McKinsey/BCG | $132,500-$265,000 | 6-12 months |
| Internal analyst team (2 FTEs) | $40,000-60,000 | 3-6 months |
| My AI system | ~$400-500 total | 6 weeks, 1.5-2 hrs/day |

The ROI isn't 2x or 5x. It's **265x**.

And the plans aren't watered-down AI summaries. They include real Salesforce CRM data (contacts, pipeline, win history), SEC filing analysis (executive teams, financial summaries), competitive battle cards with objection handling scripts, persona-specific outreach sequences, and deal risk scorecards with weighted win probabilities.

## What This Series Covers

Over the next 7 posts, I'll walk through the entire journey:

1. **This post** -- the headline and the "why"
2. **The First Prompt and Persistent Memory** -- how CLAUDE.md became the secret weapon
3. **From One Agent to Fourteen** -- the architecture that makes $7 plans possible
4. **MCP Servers and Live Data** -- connecting AI to Salesforce, SEC filings, and more
5. **Markdown to Boardroom** -- automating the last mile (PowerPoint, PDF, Word)
6. **The CEPH Takeout** -- a deep dive into competitive intelligence automation
7. **Wins and Lessons** -- what worked, what didn't, and what I'd do differently
8. **Building Your Own** -- a practical guide to getting started

Whether you're a sales leader, an SE, or just someone curious about what "vibe coding" looks like in practice, there's something here for you.

The future of enterprise sales isn't AI replacing people. It's AI making every rep as prepared as if they had a dedicated research team behind them.

For $7 instead of $2,500.

---

*Next post: [The First Prompt and the Power of Persistent Memory](02-first-prompt-and-persistent-memory.md)*

*Dave Logan is Manager of Systems Engineering at VAST Data. Find him at aiwithdave.com.*
