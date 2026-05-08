# AeroLang Web

Marketing, documentation, and playground website for AeroLang.

This repository contains the public-facing AeroLang site built with Next.js, React, TypeScript, and Tailwind CSS. It presents the project direction, documentation, examples, roadmap, and a browser-based playground experience for the AeroLang language concept.

## What This Repo Includes

- Landing page for the AeroLang project
- Documentation pages for language goals, syntax, modules, Android APIs, and setup flow
- Examples gallery with available and planned sample content
- Playground UI for exploring AeroLang syntax in a simulated editor environment
- Roadmap and community pages linking to the broader AeroLang ecosystem

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS

## Project Structure

- `app/` - App Router pages, metadata, and shared site data
- `components/` - UI building blocks used across the site
- `public/` - static assets such as icons and branding

## Main Routes

- `/` - homepage
- `/docs` - documentation and install flow
- `/examples` - example gallery
- `/playground` - browser playground
- `/roadmap` - release and milestone planning
- `/community` - project links and community entry points

## Local Development

### Requirements

- Node.js
- npm

### Install

```bash
npm install
```

### Run The Development Server

```bash
npm run dev
```

The app will be available at `http://localhost:3000`.

### Production Build

```bash
npm run build
npm run start
```

### Lint

```bash
npm run lint
```

## Related Repositories

- AeroLang core/demo repo: <https://github.com/GitGuru29/AeroLang_Demo.git>
- AeroLang examples repo: <https://github.com/GitGuru29/AeroLang-Examples.git>

This repository is the website codebase, not the core language compiler/tooling repository.

## Notes About Scope

- The website presents AeroLang as an Android-native language direction with Kotlin-inspired syntax.
- Some site content is intentionally framed as roadmap or planned functionality rather than current shipping capability.
- The playground is a simulated environment for exploration, not the full compiler workflow.
