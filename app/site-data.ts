export const siteUrl = "https://aerolang-web.vercel.app";
export const repoUrl = "https://github.com/GitGuru29/AeroLang_Demo.git";
export const websiteRepoUrl = "https://github.com/GitGuru29/AeroLang-web.git";
export const discussionsUrl = "https://github.com/GitGuru29/AeroLang_Demo/discussions";
export const issuesUrl = "https://github.com/GitGuru29/AeroLang_Demo/issues";
export const examplesRepoUrl = "https://github.com/GitGuru29/AeroLang-Examples.git";
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
    title: "30+ UI Components",
    description:
      "A complete Material Design 3 library — TextView, RecyclerView, MotionLayout, CollapsingToolbar, BottomSheet, WebView, Animator, ChipGroup, and 31 more. All available via a single #include <AeroUI.h>.",
  },
  {
    title: "NavController & Deep Links",
    description:
      "Full multi-screen navigation with programmatic NavGraph, NavDestination, NavAction, deep link URI routing, Activity back-stack management, and OnBackPressedDispatcher. Build real multi-screen apps today.",
  },
  {
    title: "JNI-Cached Native Runtime",
    description:
      "Meyer's Singleton caches jclass and jmethodID pointers at startup, eliminating repeated JNI lookup overhead. AeroLang UI calls hit the Android NDK at full native speed — no VM toll booth.",
  },
  {
    title: "Property Animation System",
    description:
      "ObjectAnimator, AnimatorSet, ViewAnimator, and MotionLayout are first-class citizens. Fade, slide, scale, pulse, rotate, shake — all composable with playTogether / playSequentially.",
  },
] as const;

export const docsSections = [
  {
    title: "Why AeroLang?",
    eyebrow: "Overview",
    body: [
      "Traditional Android development runs through JVM bytecode and the Dalvik or ART runtime, adding VM-level memory overhead, JNI bridge costs, and Garbage Collection pauses. Every UI update and method dispatch passes through a layer the developer cannot control.",
      "AeroLang is a Kotlin-inspired language that compiles directly to C++ for Android NDK deployment. The Meyer's Singleton JNI caching mechanism caches jclass and jmethodID lookups at startup, so repeated UI calls reach native speed without going through the JNI bridge each time.",
    ],
    bullets: [
      "Compiles to C++ — no JVM, no Dalvik, no ART overhead.",
      "JNICache: jclass + jmethodID cached at startup via Meyer's Singleton.",
      "Zero Garbage Collection pauses — memory is managed at the C++ layer.",
    ],
  },
  {
    title: "Syntax Overview",
    eyebrow: "Language",
    body: [
      "AeroLang uses a modern, Kotlin-inspired syntax. Mutable state uses var, immutable bindings use val. Activities are the primary application unit and define UI and lifecycle logic in fun onCreate(). Lambda callbacks use the (args) => { body } form and are supported everywhere events fire.",
    ],
    bullets: [
      "Variables: var (mutable) and val (immutable)",
      "Types: Int, String, Boolean, Float, Double, List<T>, Map<K,V>, Set<T>",
      "Control flow: if / else, while, for-in loops",
      "Structures: activity, class, fun — plus import for standard modules",
    ],
  },
  {
    title: "UI Framework — 30+ Components",
    eyebrow: "UI System",
    body: [
      "AeroLang ships a complete, production-ready UI framework as of v2.0. All 30+ components are available in a single import via #include <AeroUI.h>. The library covers basic views, input controls, layout containers, navigation widgets, Material Design 3 components, and a full property animation engine.",
    ],
    bullets: [
      "Basic: TextView, EditText, Button, ImageView, CheckBox, Switch, SeekBar, ProgressBar",
      "Layout: LinearLayout, ScrollView, RecyclerView, ConstraintLayout, CardView, DrawerLayout, HorizontalScrollView",
      "Navigation: ViewPager, TabLayout, Toolbar, BottomNavigationView, NavigationView",
      "Material Design 3: Chip/ChipGroup, TextInputLayout, BottomSheetDialog, CollapsingToolbarLayout, RatingBar, NumberPicker, WebView, FloatingActionButton, Snackbar",
      "Animation: ObjectAnimator, AnimatorSet, ViewAnimator, MotionLayout",
      "Feedback: Toast, AlertDialog, Snackbar",
    ],
  },
  {
    title: "Navigation API",
    eyebrow: "Multi-Screen",
    body: [
      "AeroLang includes a full Navigation component: NavController, NavGraph, NavDestination, NavAction, and NavDeepLink. You build a navigation graph programmatically, attach it to a NavController, and navigate by destination ID or deep link URI. The OnBackPressedDispatcher lets you intercept the back button to guard unsaved changes.",
    ],
    bullets: [
      "NavController.navigate(destinationId, args) — pass typed key-value arguments between screens",
      "Deep link routing: NavDeepLink.fromUri(\"aero://app/profile\")",
      "Activity result contracts: TakePhoto(), RequestPermission(), RequestMultiplePermissions()",
      "OnBackPressedCallback — intercept back navigation to guard unsaved changes",
    ],
  },
  {
    title: "Gesture System",
    eyebrow: "Gestures",
    body: [
      "The CustomGestureListener builder chain lets you attach gesture handlers to any view with fluent syntax. Supported gestures include tap, long press, swipe (all four directions), pinch-to-zoom, rotation, double-tap, and velocity-threshold swipes. All gestures compose without boilerplate.",
    ],
    bullets: [
      "onSwipe(direction) — tap, long press, and directional swipes (UP/DOWN/LEFT/RIGHT)",
      "onPinch(scale, distance) — pinch-to-zoom with scale factor",
      "onRotate(angle) — two-finger rotation delta in degrees",
      "onDoubleTap(x, y) — double-tap at coordinate",
      "onSwipeWithVelocity(direction, velocity) — velocity-aware swipe for Tinder-style UX",
    ],
  },
  {
    title: "Collections Library",
    eyebrow: "Standard Library",
    body: [
      "AeroLang ships a full collections standard library (~1,650 lines). List<T>, ArrayList<T>, Map<K,V>, HashMap<K,V>, Set<T>, and HashSet<T> all come with full iterators, size(), add(), remove(), get(), contains(), and operator support.",
    ],
    bullets: [
      "List<T> + ArrayList<T> — dynamic ordered collections with full iterator API",
      "Map<K,V> + HashMap<K,V> — key-value stores with get(), put(), containsKey()",
      "Set<T> + HashSet<T> — unique-element collections with union and intersection operators",
    ],
  },
  {
    title: "Android APIs",
    eyebrow: "Platform",
    body: [
      "AeroLang is Android-first. The standard library includes native wrappers for sensors, location, multimedia, and cryptography — all routing through the Android NDK without JVM overhead.",
    ],
    bullets: [
      "Hardware Sensors: SensorManager, Accelerometer, Gyroscope, AmbientTemperature, Proximity, MagneticField",
      "Location: LocationManager with GPS and Network provider",
      "Multimedia: Camera2 wrapper, VideoView, MediaPlayer, MediaRecorder",
      "Crypto & Encoding: Crypto.md5(), Crypto.sha256(), Base64, URL encoding",
    ],
  },
] as const;

export const examples = [
  {
    slug: "hello-world",
    tag: "starter",
    title: "Hello World",
    summary: "The simplest AeroLang activity. Initializes variables and fires a Toast on launch.",
    code: `activity MainActivity {
    var count: Int = 0
    var userName: String = "AeroLang User"

    fun onCreate() {
        count = 10
        showToast("Hello from AeroLang!")
    }
}`,
    explanation:
      "Defines a MainActivity with a var counter and a String, then shows a native Android Toast when the activity is created. This is the entry point for any AeroLang project.",
    status: "available",
  },
  {
    slug: "counter-app",
    tag: "ui",
    title: "Counter App",
    summary: "A stateful counter with Increment, Decrement, and Reset buttons wired to a TextView display.",
    code: `activity CounterApp {
    var counterText: TextView
    var count: Int

    fun onCreate() {
        count = 0
        var layout = LinearLayout(Orientation::VERTICAL)
        layout.setPadding(40, 40, 40, 40)

        counterText = TextView("Count: 0")
        counterText.setTextSize(32.0)
        layout.addView(counterText)

        var incrementBtn = Button("+ Increment")
        incrementBtn.setOnClickListener(() => { increment() })
        layout.addView(incrementBtn)

        var resetBtn = Button("Reset")
        resetBtn.setOnClickListener(() => { reset() })
        layout.addView(resetBtn)

        setContentView(layout)
    }

    fun increment() { count = count + 1; updateDisplay() }
    fun reset()     { count = 0;         updateDisplay() }

    fun updateDisplay() {
        counterText.setText("Count: " + count)
    }
}`,
    explanation:
      "Demonstrates LinearLayout composition, Button click listeners with lambdas, and live TextView updates. All 30+ UI components follow this same event-driven pattern.",
    status: "available",
  },
  {
    slug: "todo-list-app",
    tag: "collections",
    title: "Todo List — Collections API",
    summary: "Uses List<T> and ArrayList<T> to manage tasks with add, complete, and stats operations.",
    code: `activity TodoListApp {
    var tasks: List<String>
    var completedCount: Int

    fun onCreate() {
        tasks = ArrayList<String>()
        completedCount = 0

        tasks.add("Buy groceries")
        tasks.add("Write code")
        tasks.add("Work out")

        showToast("Created todo list with " + tasks.size() + " tasks")
    }

    fun addTask(task: String) {
        tasks.add(task)
    }

    fun completeTask(index: Int) {
        if (index >= 0 && index < tasks.size()) {
            val task = tasks.get(index)
            tasks.removeAt(index)
            completedCount = completedCount + 1
            showToast("Completed: " + task)
        }
    }

    fun getStats(): String {
        return "Total: " + tasks.size() + ", Completed: " + completedCount
    }
}`,
    explanation:
      "Shows the full Collections Library in action: ArrayList<T> with add(), size(), get(), and removeAt(). The same pattern works for HashMap<K,V> and HashSet<T>.",
    status: "available",
  },
  {
    slug: "social-media-app",
    tag: "ui",
    title: "Instagram-style Social App",
    summary: "ViewPager + TabLayout + SwipeRefreshLayout — Feed, Explore, and Profile pages with pull-to-refresh.",
    code: `activity SocialMediaApp {
    var viewPager: ViewPager
    var tabLayout: TabLayout
    var swipeRefresh: SwipeRefreshLayout

    fun onCreate() {
        var mainLayout = LinearLayout(Orientation::VERTICAL)

        tabLayout = TabLayout()
        tabLayout.addTab("Feed")
        tabLayout.addTab("Explore")
        tabLayout.addTab("Profile")
        tabLayout.setOnTabSelectedListener((position) => {
            showToast("Switched to tab: " + position)
        })
        mainLayout.addView(tabLayout)

        viewPager = ViewPager()
        viewPager.addPage(createFeedPage())
        viewPager.addPage(createExplorePage())
        viewPager.addPage(createProfilePage())
        tabLayout.setupWithViewPager(viewPager)

        viewPager.setOnPageChangeListener((position) => {
            showToast("Viewing: " + getPageName(position))
        })

        mainLayout.addView(viewPager)
        setContentView(mainLayout)
    }

    fun createFeedPage(): LinearLayout {
        swipeRefresh = SwipeRefreshLayout()
        swipeRefresh.setOnRefreshListener(() => {
            showToast("Refreshing...")
            swipeRefresh.setRefreshing(false)
        })
        swipeRefresh.setColorSchemeColors(0xFF4285F4, 0xFF34A853, 0xFFFBBC05)
        return swipeRefresh
    }
}`,
    explanation:
      "Uses ViewPager + TabLayout for swipeable multi-tab navigation, SwipeRefreshLayout for pull-to-refresh, and color scheme APIs — all part of the 30+ component AeroUI library.",
    status: "available",
  },
  {
    slug: "photo-editor-app",
    tag: "gestures",
    title: "Photo Editor — Gesture Controls",
    summary: "CustomGestureListener with pinch-to-zoom, rotation, swipe filters, and double-tap to fit.",
    code: `activity PhotoEditorApp {
    var gestureListener: CustomGestureListener
    var imageView: ImageView
    var zoomLevel: Float
    var rotationAngle: Float

    fun onCreate() {
        zoomLevel = 1.0
        rotationAngle = 0.0

        imageView = ImageView()
        imageView.setImageResource(R.drawable.sample_photo)
        setupGestures()
        setContentView(imageView)
    }

    fun setupGestures() {
        gestureListener = CustomGestureListener()

        // Pinch to zoom
        gestureListener.onPinch((scale, distance) => {
            zoomLevel = zoomLevel * scale
            showToast("Zoom: " + zoomLevel + "x")
        })

        // Two-finger rotate
        gestureListener.onRotate((angle) => {
            rotationAngle = rotationAngle + angle
            showToast("Rotation: " + rotationAngle + "°")
        })

        // Swipe to apply filter
        gestureListener.setMinSwipeDistance(200.0)
                      .onSwipe((direction) => {
                          applyFilter(direction)
                      })

        // Double-tap to reset
        gestureListener.onDoubleTap((x, y) => {
            zoomLevel = 1.0
            rotationAngle = 0.0
        })
    }

    fun applyFilter(direction: SwipeDirection) {
        if (direction == SwipeDirection::RIGHT) showToast("🎨 Filter: Warm")
        if (direction == SwipeDirection::LEFT)  showToast("🎨 Filter: Cool")
        if (direction == SwipeDirection::UP)    showToast("🎨 Filter: Bright")
        if (direction == SwipeDirection::DOWN)  showToast("🎨 Filter: Dark")
    }
}`,
    explanation:
      "Demonstrates the full CustomGestureListener builder API: pinch-to-zoom, two-finger rotation, directional swipe with minimum distance threshold, and double-tap reset.",
    status: "available",
  },
  {
    slug: "card-swipe-app",
    tag: "gestures",
    title: "Tinder-style Card Swipe",
    summary: "Velocity-aware swipe detection with like/dislike/super-like, long-press info, and diagonal gesture support.",
    code: `activity CardSwipeApp {
    var gestureListener: CustomGestureListener
    var likeCount: Int = 0
    var dislikeCount: Int = 0

    fun onCreate() {
        gestureListener = CustomGestureListener()

        // Configure sensitivity
        gestureListener.setMinSwipeDistance(150.0)
                      .setMaxSwipeDuration(600.0)
                      .setVelocityThreshold(200.0)
                      .setAngleThreshold(30.0)

        // Velocity-aware swipe
        gestureListener.onSwipeWithVelocity((direction, velocity) => {
            if (direction == SwipeDirection::RIGHT) {
                likeCount = likeCount + 1
                if (velocity > 500.0) showToast("💚 FAST LIKE! (" + velocity + " px/s)")
                else                  showToast("❤️ Liked!")
            } else if (direction == SwipeDirection::LEFT) {
                dislikeCount = dislikeCount + 1
                showToast("👎 Disliked")
            } else if (direction == SwipeDirection::UP) {
                showToast("⭐ SUPER LIKE! +3 points")
            }
        })

        // Double-tap = Super like
        gestureListener.onDoubleTap((x, y) => {
            likeCount = likeCount + 3
            showToast("⭐ SUPER LIKE!")
        })

        // Long press = Show info dialog
        gestureListener.onLongPress((x, y, duration) => {
            AlertDialog::Builder()
                .setTitle("Card Info")
                .setMessage("Likes: " + likeCount + " | Dislikes: " + dislikeCount)
                .setPositiveButton("OK", () => {})
                .show()
        })
    }
}`,
    explanation:
      "Shows velocity-aware swipe detection, configurable thresholds (distance, duration, velocity, angle), double-tap super-like, and AlertDialog from the long-press handler.",
    status: "available",
  },
  {
    slug: "multi-screen-nav",
    tag: "navigation",
    title: "Multi-Screen Navigation Demo",
    summary: "NavController + NavGraph + deep links — HomeActivity to ProfileActivity to SettingsActivity with full back-stack guard.",
    code: `import Navigation
import Camera
import Permissions

activity HomeActivity {
    var navController: NavController

    fun onCreate() {
        var graph = NavGraph()
        graph.setStartDestination(R.id.home)

        var profile = NavDestination(R.id.profile, "ProfileActivity", isFragment: false)
        profile.addDeepLink(NavDeepLink.fromUri("aero://app/profile"))

        var toProfile = NavAction(destinationId: R.id.profile,
                                  enterAnim: R.anim.slide_in_right,
                                  exitAnim: R.anim.slide_out_left)
        home.addAction(R.id.action_home_to_profile, toProfile)

        graph.addDestination(profile)
        navController = getNavController(R.id.nav_host_container)
        navController.setGraph(graph)

        navController.addOnDestinationChangedListener { nc, dest, args =>
            tvStatus.setText("Now on: " + (dest?.label ?? "Unknown"))
        }
    }

    fun navigateToProfile() {
        navController.navigate(R.id.profile, [("userId", "42"), ("userName", "AeroUser")])
    }

    // Deep link from notification or external URL
    fun onNewIntent(intent: Intent) {
        navController.handleDeepLink(intent)
    }
}`,
    explanation:
      "Demonstrates the full Navigation API: programmatic NavGraph construction, NavDestination with deep link URIs, enter/exit animations, argument passing, and destination change callbacks.",
    status: "available",
  },
  {
    slug: "material-ui-demo",
    tag: "material",
    title: "Material UI Demo — v2.0 Components",
    summary: "All 10 new Material Design 3 components: Chip, TextInputLayout, BottomSheet, CollapsingToolbar, RatingBar, NumberPicker, WebView, MotionLayout, and Animator.",
    code: `import AeroUI
import AnimationKit
import WebKit

activity MaterialUIDemo {
    var ratingBar: RatingBar
    var chipGroup: ChipGroup
    var bottomSheet: BottomSheetDialog
    var motionRoot: MotionLayout

    fun onCreate() {
        setContentView(buildLayout())
        setupAnimations()
    }

    fun buildLayout(): LinearLayout {
        var root = LinearLayout()
        root.setOrientation("vertical")

        // Chip filter group
        chipGroup = ChipGroup()
        for chip in ["Design", "Code", "Art", "Music"] {
            var c = Chip()
            c.setText(chip)
            c.setCheckable(true)
            chipGroup.addChip(c)
        }
        root.addView(chipGroup)

        // Rating bar
        ratingBar = RatingBar()
        ratingBar.setNumStars(5)
        ratingBar.setStepSize(0.5)
        ratingBar.setOnRatingBarChangeListener { rating =>
            if (rating < 1.0) nameInput.setError("Rate at least 1 star")
            else              nameInput.clearError()
        }
        root.addView(ratingBar)

        // FAB triggers BottomSheetDialog
        var fab = FloatingActionButton()
        fab.setOnClickListener { showBottomSheet() }
        root.addView(fab)
        return root
    }

    fun setupAnimations() {
        var fadeSet = AnimatorSet()
        var a1 = ViewAnimator.fadeIn(chipGroup, 400)
        var a2 = ViewAnimator.slideInUp(ratingBar, 100.0, 400)
        a2.setStartDelay(150)
        fadeSet.playTogether([a1, a2])
        fadeSet.start()
    }

    fun showBottomSheet() {
        bottomSheet = BottomSheetDialog()
        bottomSheet.setState(BottomSheetDialog.State.HALF_EXPANDED)
        bottomSheet.show()
    }
}`,
    explanation:
      "Demonstrates the 10 new Material Design 3 components added in v2.0: ChipGroup, RatingBar, FloatingActionButton, BottomSheetDialog, plus the AnimatorSet animation composition system.",
    status: "available",
  },
] as const;

export const installPrerequisites = [
  "Linux is the recommended primary development environment.",
  "macOS is supported for both Intel and Apple Silicon workflows.",
  "Windows support is experimental — best approached via WSL2 or MSYS2.",
  "Core build dependencies: cmake, g++, Android SDK, Android NDK.",
  "For VS Code: install the .vsix extension from /vscode-extension in the repo.",
] as const;

export const installSteps = [
  "Install the AeroLang VS Code extension from the marketplace or from the provided .vsix build in /vscode-extension.",
  "Configure Android SDK Path and Android NDK Path inside VS Code settings (search for 'AeroLang').",
  "Create a new project through the command palette: AeroLang: Create New Project.",
  "Press Ctrl+Shift+P → 'AeroLang: Build Android APK' to compile and deploy to your device.",
  "For CLI builds: cmake .. && cmake --build . inside /build, then ./aeroc MyApp.aero -o output.cpp.",
] as const;

export const supportMatrix = [
  { platform: "Linux", support: "Full", notes: "Primary development environment. All features tested." },
  { platform: "macOS", support: "Full", notes: "Tested on Intel and Apple Silicon (M1/M2/M3)." },
  { platform: "Windows", support: "Experimental", notes: "Recommended through WSL2 or MSYS2." },
] as const;

export const releaseHighlights = [
  "30+ UI components — complete Material Design 3 library via #include <AeroUI.h>",
  "Full Navigation API — NavController, NavGraph, NavDestination, deep link URIs, back-stack management",
  "Property animation system — ObjectAnimator, AnimatorSet, ViewAnimator, MotionLayout",
  "CustomGestureListener — pinch-to-zoom, rotation, velocity-aware swipes, double-tap, long-press",
  "JNICache runtime — Meyer's Singleton caches jclass + jmethodID for native-speed UI calls",
  "20+ example apps — from HelloWorld to full Material UI and multi-screen navigation demos",
  "7,850+ lines of production code — Compiler (2000), Collections (1650), UI Framework (4200)",
] as const;

export const roadmapItems = [
  {
    version: "v0.2.0-alpha",
    title: "Current release — 65% to production-ready",
    status: "current",
    body: "Complete UI framework (30+ components), full Navigation API, property animation system, gesture system, 20+ example apps, and JNI-cached native runtime. The compiler pipeline (Lexer → Parser → AST → Semantic Analysis → C++ Code Generator) is 100% complete.",
  },
  {
    version: "v0.3.0",
    title: "Data Persistence",
    status: "planned",
    body: "SharedPreferences wrapper, File I/O (read/write), SQLite/Room-style ORM, JSON parser/serializer, and DataStore. Unlocks apps that save state between sessions — targeting ~25% more app types.",
  },
  {
    version: "v0.4.0",
    title: "Native Networking Engine",
    status: "planned",
    body: "HTTP client (GET, POST, PUT, DELETE), WebSocket support, JSON serialization/deserialization, image loading library, and error-handling callbacks. Most real-world apps depend on this — targeting ~30% more app types.",
  },
  {
    version: "v0.5.0",
    title: "Background Services & Notifications",
    status: "planned",
    body: "Started and bound Services, WorkManager-style background tasks, BroadcastReceivers, and NotificationManager. Enables background sync, push notifications, and long-running tasks.",
  },
  {
    version: "v1.0.0",
    title: "Stable release, package manager & ecosystem",
    status: "planned",
    body: "One-command APK build (aero build --release), Gradle plugin, package registry, Material Design component templates, and community library support. Full production-readiness milestone.",
  },
] as const;

export const communityLinks = [
  { label: "AeroLang Core", href: repoUrl, description: "Primary GitHub repository for the language, compiler, and runtime." },
  { label: "AeroLang Web", href: websiteRepoUrl, description: "Website codebase — contributions to docs and examples welcome." },
  { label: "Examples", href: examplesRepoUrl, description: "20+ example apps from HelloWorld to multi-screen Navigation demos." },
  { label: "Discussions", href: discussionsUrl, description: "Design discussions, feature requests, and longer-form community threads." },
  { label: "Issues", href: issuesUrl, description: "Bug reports and tracked feature requests." },
] as const;
