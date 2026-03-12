export const siteUrl = "https://aerolang-web.vercel.app";
export const repoUrl = "https://github.com/GitGuru29/AeroLang_Demo.git";
export const websiteRepoUrl = "https://github.com/GitGuru29/AeroLang-web.git";
export const discussionsUrl = "https://github.com/GitGuru29/AeroLang_Demo/discussions";
export const issuesUrl = "https://github.com/GitGuru29/AeroLang_Demo/issues";
export const examplesRepoUrl = "https://github.com/GitGuru29/AeroLang_Demo/tree/main/examples";
export const authorUrl = "https://silunadangalla.vercel.app/#/";

export const primaryNav = [
  { label: "Home", href: "/", external: false },
  { label: "Docs", href: "/docs", external: false },
  { label: "Examples", href: "/examples", external: false },
  { label: "Playground", href: "/playground", external: false },
  { label: "Roadmap", href: "/roadmap", external: false },
  { label: "Community", href: "/community", external: false },
  { label: "GitHub", href: repoUrl, external: true },
] as const;

export const homepageFeatureCards = [
  {
    title: "Native Android Focus",
    description:
      "AeroLang targets Android-native workflows for builders who want explicit control over runtime and deployment behavior.",
  },
  {
    title: "Kotlin-inspired Syntax",
    description:
      "The language surface is designed to stay readable while still mapping into low-level Android-oriented execution paths.",
  },
  {
    title: "Compiler-backed Direction",
    description:
      "The roadmap is centered around a real compiler toolchain, not just a concept site or syntax mockup.",
  },
  {
    title: "Ecosystem Buildout",
    description:
      "Docs, examples, editor workflows, and planned package tooling are presented as one coherent product surface.",
  },
] as const;

export const docsSections = [
  {
    title: "Why AeroLang?",
    eyebrow: "Overview",
    body: [
      "Traditional Android development typically runs through JVM bytecode and the Dalvik or ART runtime, which adds VM-level memory overhead and JNI bridge costs for native boundaries.",
      "AeroLang is positioned as a Kotlin-inspired language that aims to compile into native C++ output for Android-oriented development. The website should present that as the core direction of the project rather than as a finished benchmark claim.",
    ],
    bullets: [
      "Direct native code generation is the core compiler goal.",
      "JNI caching and startup optimization are part of the runtime story.",
      "The runtime surface is designed to stay smaller than a VM-heavy stack.",
    ],
  },
  {
    title: "Syntax Overview",
    eyebrow: "Language",
    body: [
      "AeroLang uses a modern syntax focused on clarity and safety. Mutable state uses var, immutable state uses val, and the current docs surface highlights common types like Int, String, Boolean, Double, List<T>, and Map<K, V>.",
    ],
    bullets: [
      "Variables: var and val",
      "Types: Int, String, Boolean, Double, List<T>, Map<K, V>",
      "Control flow: if, while, and for",
      "Structure: activities, classes, and function blocks",
    ],
  },
  {
    title: "Modules & Functions",
    eyebrow: "Structure",
    body: [
      "Activities are the main application entry points and typically define UI and lifecycle logic in fun onCreate(). Classes hold properties and methods, while the standard library exposes common collection primitives such as ArrayList, HashMap, and HashSet.",
    ],
    bullets: [
      "Activities define launch and lifecycle logic.",
      "Classes group app logic into reusable units.",
      "Collections provide a practical standard-library baseline.",
    ],
  },
  {
    title: "Android APIs",
    eyebrow: "Platform",
    body: [
      "AeroLang is presented as an Android-native language with wrappers for direct device integration. Current documentation copy emphasizes UI components, sensors, and hardware-facing APIs rather than generic cross-platform abstractions.",
    ],
    bullets: [
      "UI system with RecyclerView, ViewPager, SwipeRefreshLayout, and TabLayout",
      "Sensors through SensorManager and LocationManager",
      "Hardware access through Camera, VideoView, and MediaPlayer",
    ],
  },
] as const;

export const examples = [
  {
    slug: "hello-world",
    tag: "starter",
    title: "Hello World",
    summary: "A simple starter app demonstrating activity structure and basic variable usage.",
    code: `activity MainActivity {
    var greeting: String = "Hello from AeroLang!"

    fun onCreate() {
        showToast(greeting)
    }
}`,
    explanation:
      "This app defines a MainActivity, initializes a string, and displays it as an Android Toast when the activity is created.",
    status: "available",
  },
  {
    slug: "instagram-style-feed",
    tag: "ui",
    title: "Instagram-style Feed",
    summary: "A complex UI layout using tabs and a refreshable feed.",
    code: `activity SocialApp {
    var tabLayout: TabLayout
    var swipeRefresh: SwipeRefreshLayout

    fun onCreate() {
        tabLayout = TabLayout()
        tabLayout.addTab("Feed")
        tabLayout.addTab("Profile")

        swipeRefresh = SwipeRefreshLayout()
        swipeRefresh.setOnRefreshListener(() => {
            refreshContent()
        })
    }
}`,
    explanation:
      "This example uses SwipeRefreshLayout and TabLayout to sketch a modern social-style interface with refreshable content regions.",
    status: "available",
  },
  {
    slug: "networking-api",
    tag: "planned",
    title: "Networking & APIs",
    summary: "The planned native HTTP client direction for future AeroLang releases.",
    code: `// Planned for a future release
val client = HttpClient()
client.get("https://api.github.com/repos/AeroLang", (response) => {
    Log.i("API", "Success!")
})`,
    explanation:
      "This is a roadmap example rather than a shipping feature. It signals the intended HTTP and API workflow without claiming that the networking engine is complete today.",
    status: "planned",
  },
] as const;

export const installPrerequisites = [
  "Linux is the recommended primary development environment.",
  "macOS is supported for Intel and Apple Silicon workflows.",
  "Windows support is experimental and is best approached via WSL2.",
  "Core dependencies include cmake, g++, Android SDK, and Android NDK.",
] as const;

export const installSteps = [
  "Install the AeroLang VS Code extension from the marketplace or a provided .vsix build.",
  "Configure Android SDK Path and Android NDK Path inside VS Code settings.",
  "Create a new project through the command palette using AeroLang: Create New Project.",
  "Build and run with F5 or the Build Android APK command.",
] as const;

export const supportMatrix = [
  { platform: "Linux", support: "Full", notes: "Primary development environment." },
  { platform: "macOS", support: "Full", notes: "Tested on Intel and Apple Silicon." },
  { platform: "Windows", support: "Experimental", notes: "Recommended through WSL2 or MSYS2." },
] as const;

export const releaseHighlights = [
  "Core compiler with C++ transpilation as the current project direction",
  "UI framework surface with 17 implemented components called out in the project report",
  "JNI caching work focused on faster native Android interop",
  "VS Code integration as the main workflow entry point",
] as const;

export const roadmapItems = [
  {
    version: "v0.1.0-alpha",
    title: "Current release baseline",
    status: "current",
    body: "Initial public milestone focused on the core compiler direction, editor workflow, and Android-facing language identity.",
  },
  {
    version: "v0.1.5",
    title: "Activity navigation and multi-screen support",
    status: "planned",
    body: "Expands the application model beyond a single entry screen and tightens the app structure story.",
  },
  {
    version: "v0.2.0",
    title: "Native networking engine",
    status: "planned",
    body: "Introduces HTTP and WebSocket workflows for APIs and backend-connected apps.",
  },
  {
    version: "v0.2.5",
    title: "Local persistence",
    status: "planned",
    body: "Targets Room and SQLite wrappers for real device-side storage workflows.",
  },
  {
    version: "v1.0.0",
    title: "Stable release and package manager",
    status: "planned",
    body: "Defines the long-term language baseline with a stronger ecosystem and package workflow.",
  },
] as const;

export const communityLinks = [
  { label: "AeroLang Core", href: repoUrl, description: "Primary GitHub repository for the language project." },
  { label: "AeroLang Web", href: websiteRepoUrl, description: "Website codebase and content updates." },
  { label: "Examples", href: examplesRepoUrl, description: "Example code and project scaffolding." },
  { label: "Discussions", href: discussionsUrl, description: "Longer-form conversations and design discussion." },
  { label: "Issues", href: issuesUrl, description: "Bug reports and feature requests." },
] as const;
