# CLAUDE.MD - SNACKLOADER.COM
> Video Downloader Website | Minimalist Design System

**Version:** 1.0  
**Last Updated:** 2024  
**Project:** SnackLoader - Multi-platform Video Downloader

---

## 📋 MỤC LỤC

1. [Design Philosophy](#design-philosophy)
2. [Design Tokens](#design-tokens)
3. [Component Rules](#component-rules)
4. [Layout System](#layout-system)
5. [Content Guidelines](#content-guidelines)
6. [Interaction Rules](#interaction-rules)
7. [Page Templates](#page-templates)
8. [Technical Requirements](#technical-requirements)
9. [Prompt Template](#prompt-template)

---

## 1. DESIGN PHILOSOPHY

### 1.1 Core Principles

**MUST FOLLOW:**
```
✅ MINIMALIST: Tối giản tuyệt đối - mọi element phải có mục đích rõ ràng
✅ MOBILE-FIRST: Design cho mobile trước, sau đó scale lên desktop
✅ TRUST-FIRST: Xây dựng niềm tin qua thiết kế rõ ràng, trung thực
✅ PERFORMANCE: Tốc độ tải nhanh, không dependencies thừa
✅ ACCESSIBILITY: Ai cũng dùng được, WCAG AA minimum
```

**ABSOLUTELY FORBIDDEN:**
```
❌ Box shadows (hoặc chỉ extremely subtle nếu bắt buộc)
❌ Gradient backgrounds (solid colors only)
❌ Transform animations (translateY, scale, rotate, skew)
❌ Multiple font families (system fonts only)
❌ Decorative elements không mục đích
❌ Auto-playing media
❌ Popup intrusive
❌ Fake urgency tactics
❌ Dark patterns
❌ CDN dependencies
```

### 1.2 Visual Identity

**Personality:**
- Clean (sạch sẽ)
- Honest (trung thực)
- Modern (hiện đại)
- Professional (chuyên nghiệp)
- Approachable (dễ tiếp cận)

**NOT:**
- Flashy (màu mè)
- Aggressive (hung hãn)
- Trendy (theo trend bất chấp)
- Corporate cold (lạnh lùng)
- Childish (trẻ con)

---

## 2. DESIGN TOKENS

### 2.1 Color Palette

  --primary-100: #E6EDF3;
  --primary-300: #B3C7D9;
  --primary-500: #80A1BA;
  --primary-700: #5D829C;
  --primary-900: #3B5F7A;
  --secondary-100: #E9F2F2;
  --secondary-300: #C2DEDD;
  --secondary-500: #91C4C3;
  --secondary-700: #6DA4A3;
  --secondary-900: #4A8483;
  --background-100: #FFFEF7;
  --background-300: #FFF9E6;
  --background-500: #FFF7DD;
  --background-700: #CCE5B9;
  --background-900: #99B38F;
  --text-heading: #2F7041;
  --text-body: #4A925D;
  --text-secondary: #80B886;
  --text-caption: #A3D4AA;
  --text-disabled: #C7E6CC;
  --success: #10B981;
  --error: #DC2626;
  --warning: #F59E0B;

**COLOR USAGE RULES:**

| Element | Color | Notes |
|---------|-------|-------|
| Page background | `--white` | Always white |
| Section alt background | `--gray-100` | Subtle differentiation |
| Body text | `--black` or `--gray-900` | High contrast |
| Headings | `--black` | Maximum impact |
| Secondary text | `--gray-700` | De-emphasized |
| Placeholder | `--gray-500` | Clear but subtle |
| Borders | `--gray-200` | Extremely subtle |
| Dividers | `--gray-200` | 1px only |
| Links | `--black` + underline | Clear affordance |
| Primary CTA | `--accent` bg + `--white` text | High contrast |
| Disabled | `--gray-300` bg + `--gray-500` text | Clear disabled state |

**FORBIDDEN:**
- ❌ Colored backgrounds (ngoài white/gray-100)
- ❌ Gradient fills
- ❌ Brand colors của platforms (YouTube red, TikTok black, etc.)
- ❌ Low contrast combinations
- ❌ More than 3 colors per screen

### 2.2 Typography

**FONT STACK:**
```
Primary: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif
Mono: ui-monospace, 'SF Mono', Consolas, monospace (for URLs only)

Reasoning: 
- Zero network requests
- Native OS rendering
- Perfect Vietnamese support
- Instant display
```

**TYPE SCALE (Mobile First):**

```
Mobile (Base):
--text-xs:    0.75rem    // 12px - Captions, fine print
--text-sm:    0.875rem   // 14px - Small text, labels
--text-base:  1rem       // 16px - Body text (MINIMUM for body)
--text-lg:    1.125rem   // 18px - Emphasized text
--text-xl:    1.25rem    // 20px - h3
--text-2xl:   1.5rem     // 24px - h2
--text-3xl:   2rem       // 32px - h1 mobile
--text-4xl:   2.5rem     // 40px - Hero mobile

Tablet (640px+):
--text-3xl:   2.5rem     // 40px - h1
--text-4xl:   3rem       // 48px - Hero

Desktop (1024px+):
--text-3xl:   3rem       // 48px - h1
--text-4xl:   3.5rem     // 56px - Hero
```

**FONT WEIGHTS:**
```
--font-regular:   400    // Body text
--font-medium:    500    // Emphasized text
--font-semibold:  600    // Subheadings, buttons
--font-bold:      700    // Headings

FORBIDDEN:
❌ font-weight: 100, 200, 300 (too thin)
❌ font-weight: 800, 900 (too heavy)
❌ font-style: italic (except for quotes)
```

**LINE HEIGHTS:**
```
--leading-tight:   1.2    // Headings only
--leading-snug:    1.4    // Large text
--leading-normal:  1.6    // Body text (ALWAYS for body)
--leading-relaxed: 1.8    // Long-form content
```

**TYPOGRAPHY RULES:**

| Element | Size | Weight | Line Height | Notes |
|---------|------|--------|-------------|-------|
| Hero H1 | `--text-4xl` | 700 | 1.2 | Maximum impact |
| Section H2 | `--text-2xl` | 700 | 1.3 | Clear hierarchy |
| Card H3 | `--text-xl` | 600 | 1.4 | Subsection |
| Body P | `--text-base` | 400 | 1.6 | Comfortable reading |
| Small text | `--text-sm` | 400 | 1.5 | Legal, captions |
| Button | `--text-base` | 600 | 1.5 | Readable CTAs |

**FORBIDDEN:**
- ❌ Font size < 14px (except rare cases)
- ❌ Line height < 1.4 for body text
- ❌ ALL CAPS text (except acronyms)
- ❌ Text-transform (except sparingly)
- ❌ Letter-spacing modifications (use defaults)

### 2.3 Spacing Scale

**SPACING SYSTEM (8px base grid):**
```
--space-0:   0           // Reset
--space-1:   0.25rem     // 4px  - Rare, internal spacing
--space-2:   0.5rem      // 8px  - Tight spacing
--space-3:   0.75rem     // 12px - Comfortable
--space-4:   1rem        // 16px - Base unit
--space-5:   1.25rem     // 20px
--space-6:   1.5rem      // 24px - Element gaps
--space-8:   2rem        // 32px - Section internal
--space-10:  2.5rem      // 40px
--space-12:  3rem        // 48px - Section padding (mobile)
--space-16:  4rem        // 64px
--space-20:  5rem        // 80px
--space-24:  6rem        // 96px - Section padding (desktop)
--space-32:  8rem        // 128px - Large sections
```

**SPACING USAGE:**

```
Mobile (Default):
- Section padding:     var(--space-12) 0      // 48px vertical
- Container padding:   0 var(--space-4)       // 16px horizontal
- Element gap:         var(--space-6)         // 24px
- Button padding:      var(--space-3) var(--space-6)  // 12px 24px
- Input padding:       var(--space-3) var(--space-4)  // 12px 16px
- Card padding:        var(--space-6)         // 24px

Desktop (1024px+):
- Section padding:     var(--space-24) 0      // 96px vertical
- Container padding:   0 var(--space-8)       // 32px horizontal
- Element gap:         var(--space-8)         // 32px
- Card padding:        var(--space-8)         // 32px
```

**WHITE SPACE PHILOSOPHY:**
```
"White space is not wasted space"

✅ Generous spacing between sections
✅ Breathing room around all elements
✅ Single column mobile (no cramming)
✅ Max 60-70 characters per line for readability
✅ Vertical rhythm: consistent spacing
```

### 2.4 Borders & Radius

**BORDERS:**
```
--border-width:   1px           // Only thickness allowed
--border-color:   var(--gray-200)
--border-dark:    var(--gray-300)

Usage:
border: 1px solid var(--gray-200);

FORBIDDEN:
❌ border-width > 1px
❌ Dashed/dotted borders (except for emphasis)
❌ Colored borders (except focus/error states)
❌ Double borders
```

**BORDER RADIUS:**
```
--radius-none:  0
--radius-sm:    4px      // Subtle - buttons, inputs
--radius-md:    8px      // Standard - cards
--radius-lg:    12px     // Large elements
--radius-xl:    16px     // Rare, hero elements
--radius-full:  9999px   // Pills, circles

FORBIDDEN:
❌ Border radius > 16px (except pills/circles)
❌ Inconsistent radius values
❌ Border radius on single corners
```

### 2.5 Effects

**SHADOWS (Use sparingly or not at all):**
```
Option 1 - No shadows (Recommended):
NO SHADOWS AT ALL - use borders only

Option 2 - Extremely subtle (if must):
--shadow-subtle: 0 1px 3px rgba(0, 0, 0, 0.05);

Usage (rare):
.card:hover {
  box-shadow: var(--shadow-subtle);
}

FORBIDDEN:
❌ Multiple shadow layers
❌ Large offset shadows
❌ Colored shadows
❌ Drop shadows on text
❌ Heavy shadows
```

**TRANSITIONS:**
```
--transition-fast:    150ms ease
--transition-normal:  200ms ease
--transition-slow:    300ms ease

Usage:
transition: background var(--transition-normal);

Allowed properties ONLY:
✅ opacity
✅ background-color
✅ color
✅ border-color

FORBIDDEN:
❌ transform transitions
❌ multiple property transitions
❌ cubic-bezier (use ease only)
❌ delays
```

**FORBIDDEN EFFECTS:**
- ❌ Transform (translateY, scale, rotate, skew)
- ❌ Filter (blur, brightness, etc.)
- ❌ Backdrop-filter
- ❌ Mix-blend-mode
- ❌ Clip-path
- ❌ 3D transforms
- ❌ Parallax effects
- ❌ Scroll-triggered animations

---

## 3. COMPONENT RULES

### 3.1 Buttons

**PRIMARY BUTTON:**
```
Visual Specs:
- Background: var(--black)
- Text: var(--white)
- Padding: 14px 28px (mobile), 16px 32px (desktop)
- Border: none
- Border radius: var(--radius-sm) // 4px
- Font size: var(--text-base)
- Font weight: var(--font-semibold) // 600
- Min height: 48px (touch-friendly)
- Transition: background var(--transition-normal)

States:
- Hover: background = var(--gray-800)
- Active: background = var(--black)
- Disabled: background = var(--gray-300), color = var(--gray-500)
- Loading: disabled + text "Đang xử lý..."

FORBIDDEN:
❌ Gradient backgrounds
❌ Box shadows
❌ Transform on hover
❌ Icons inside (unless essential)
❌ Multiple CTAs same screen
```

**SECONDARY BUTTON:**
```
Visual Specs:
- Background: transparent
- Text: var(--black)
- Border: 1px solid var(--black)
- All other specs same as primary

States:
- Hover: background = var(--black), color = var(--white)
- Active: background = var(--gray-900), color = var(--white)

Use cases:
- Secondary actions
- "Learn more" links
- Cancel buttons
```

**BUTTON RULES:**
```
✅ Maximum 2 buttons per section
✅ Primary CTA always most prominent
✅ Clear action-oriented labels ("Tải Video", not "Click here")
✅ Touch target minimum 48x48px
✅ Enough spacing between buttons (min 16px)

❌ NO icon-only buttons (except hamburger menu)
❌ NO small buttons (<48px height)
❌ NO ambiguous labels
❌ NO disabled buttons without explanation
```

### 3.2 Form Elements

**INPUT FIELDS:**
```
Visual Specs:
- Width: 100%
- Padding: 14px 16px
- Background: var(--white)
- Border: 1px solid var(--gray-200)
- Border radius: var(--radius-sm)
- Font size: var(--text-base) // 16px minimum (prevent zoom on iOS)
- Min height: 48px

States:
- Default: border-color = var(--gray-200)
- Focus: border-color = var(--black), outline = none
- Error: border-color = var(--error)
- Disabled: background = var(--gray-100), color = var(--gray-500)

Placeholder:
- Color: var(--gray-500)
- Never use placeholder as label

FORBIDDEN:
❌ Background colors in inputs
❌ Icons inside inputs (except essential like search)
❌ Fancy focus effects
❌ Font size < 16px (causes zoom on mobile)
```

**LABELS:**
```
Rules:
✅ Always visible (not placeholder)
✅ Above input (not floating)
✅ Font size: var(--text-sm)
✅ Font weight: var(--font-medium)
✅ Color: var(--gray-900)
✅ Required fields marked with asterisk (*)

❌ NO placeholder-only (must have label)
❌ NO floating labels
❌ NO labels inside inputs
```

**ERROR MESSAGES:**
```
Visual Specs:
- Color: var(--error)
- Font size: var(--text-sm)
- Display below input
- Icon: ⚠ (Unicode warning)

Content:
✅ Helpful, specific ("URL không hợp lệ")
✅ Suggest solution ("Vui lòng nhập URL đầy đủ")
❌ NO blame user ("You entered wrong")
❌ NO technical jargon ("Error 404")
```

### 3.3 Cards

**CARD SPECS:**
```
Visual:
- Background: var(--white)
- Border: 1px solid var(--gray-200)
- Border radius: var(--radius-md) // 8px
- Padding: var(--space-6) mobile, var(--space-8) desktop

States:
- Default: border-color = var(--gray-200)
- Hover: border-color = var(--gray-300) (subtle only)

FORBIDDEN:
❌ Box shadows
❌ Colored backgrounds
❌ Transform on hover
❌ Complex hover effects
❌ Overlapping cards
```

**CARD CONTENT:**
```
Structure (top to bottom):
1. Icon/Image (optional, 48x48px max)
2. Title (h3, var(--text-xl))
3. Description (p, var(--text-base), 1-2 lines max)
4. Action (optional, subtle link)

Rules:
✅ Consistent padding all cards
✅ Single column mobile
✅ Equal height cards in grid
✅ Clear visual hierarchy
❌ NO content overflow
❌ NO truncated text without expansion
```

### 3.4 Navigation

**NAVBAR SPECS:**
```
Mobile:
- Position: fixed top
- Height: auto
- Padding: var(--space-4)
- Background: var(--white)
- Border bottom: 1px solid var(--gray-200)

Layout:
- Logo: left
- Menu toggle: right (☰ hamburger)
- Menu: full-width dropdown

Desktop:
- Same as mobile but
- Menu: horizontal, right side
- No toggle button

States:
- Transparent (top of page): background = transparent, no border
- Scrolled: background = var(--white), border-bottom = 1px solid var(--gray-200)

FORBIDDEN:
❌ Mega menus
❌ Dropdown menus with complex animations
❌ Sticky headers with shadows
❌ Colored backgrounds
```

**NAV LINKS:**
```
Visual:
- Color: var(--black)
- Font weight: var(--font-medium)
- Text decoration: none
- Padding: var(--space-3) var(--space-4)

States:
- Hover: opacity = 0.6
- Active: text-decoration = underline

FORBIDDEN:
❌ Colored active states
❌ Background on hover
❌ Complex hover animations
```

**MOBILE MENU:**
```
Behavior:
- Slide from top (not side)
- Overlay, not push
- Close on link click
- Close button visible (×)

Visual:
- Full width
- White background
- Links stacked vertically
- Generous tap targets (48px height)

FORBIDDEN:
❌ Fancy slide animations
❌ Blur backgrounds
❌ Complex transitions
```

---

## 4. LAYOUT SYSTEM

### 4.1 Grid System

**CONTAINER:**
```
Mobile:
- width: 100%
- max-width: none
- padding: 0 var(--space-4) // 16px

Tablet (640px+):
- padding: 0 var(--space-6) // 24px

Desktop (1024px+):
- max-width: 1200px
- margin: 0 auto
- padding: 0 var(--space-8) // 32px

Large (1400px+):
- max-width: 1280px
```

**GRID:**
```
Mobile (default):
.grid {
  display: grid;
  gap: var(--space-6);
  grid-template-columns: 1fr; // Always single column
}

Tablet (640px+):
.grid-2 {
  grid-template-columns: repeat(2, 1fr);
}

Desktop (1024px+):
.grid-3 {
  grid-template-columns: repeat(3, 1fr);
}

.grid-4 {
  grid-template-columns: repeat(4, 1fr);
}

RULES:
✅ Mobile always 1 column
✅ Consistent gap spacing
✅ Equal-width columns (no complex ratios)
❌ NO complex grid layouts
❌ NO CSS Grid tricks
❌ NO overlapping grid items
```

### 4.2 Breakpoints

**RESPONSIVE BREAKPOINTS:**
```
Mobile:     < 640px (default, no media query)
Tablet:     640px - 1023px
Desktop:    1024px+
Large:      1400px+

Usage:
/* Mobile first - no media query */
.element { ... }

/* Tablet */
@media (min-width: 640px) { ... }

/* Desktop */
@media (min-width: 1024px) { ... }

/* Large */
@media (min-width: 1400px) { ... }

FORBIDDEN:
❌ Desktop-first approach
❌ Max-width media queries
❌ Too many breakpoints
❌ Pixel-perfect breakpoints
```

### 4.3 Section Structure

**SECTION SPECS:**
```
Mobile:
- Padding: var(--space-12) 0 // 48px vertical
- Min-height: none (content-based)

Desktop:
- Padding: var(--space-24) 0 // 96px vertical

Structure:
<section class="section">
  <div class="container">
    <h2>Section Title</h2>
    <div class="grid">
      <!-- Content -->
    </div>
  </div>
</section>

RULES:
✅ Consistent padding all sections
✅ Alternating backgrounds (white/gray-100)
✅ Clear visual separation
❌ NO cramped sections
❌ NO inconsistent spacing
```

**HERO SECTION:**
```
Mobile:
- Min-height: 100vh
- Display: flex, align center
- Padding: var(--space-12) 0

Desktop:
- Min-height: 90vh
- Padding: var(--space-24) 0

Content order (vertical):
1. Heading (h1)
2. Subheading (p)
3. Main input
4. Primary CTA
5. Trust badges

FORBIDDEN:
❌ Background images
❌ Video backgrounds
❌ Parallax effects
❌ Complex layouts
```

---

## 5. CONTENT GUIDELINES

### 5.1 Writing Tone

**VOICE:**
```
✅ Clear (rõ ràng)
✅ Direct (trực tiếp)
✅ Honest (trung thực)
✅ Helpful (hữu ích)
✅ Friendly but professional (thân thiện nhưng chuyên nghiệp)

❌ NO hype ("Amazing!", "Revolutionary!")
❌ NO fake urgency ("Act now!", "Limited time!")
❌ NO technical jargon
❌ NO marketing speak
❌ NO ALL CAPS (except acronyms)
```

### 5.2 Headlines

**HERO HEADLINE:**
```
Format: Clear value proposition
Length: 3-7 words
Style: Statement, not question

Good examples:
✅ "Tải Video Miễn Phí"
✅ "Download Video Chất Lượng Cao"
✅ "Công Cụ Tải Video Đơn Giản"

Bad examples:
❌ "Bạn muốn tải video?" (question)
❌ "Công cụ tải video tốt nhất thế giới" (hype)
❌ "FREE VIDEO DOWNLOADER!!!" (caps, hype)
```

**SECTION HEADLINES:**
```
Format: Clear, descriptive
Length: 2-5 words
Style: Noun phrase

Examples:
✅ "Các nền tảng hỗ trợ"
✅ "Cách sử dụng"
✅ "Câu hỏi thường gặp"

❌ "Check out our amazing platforms"
❌ "How to use our revolutionary tool"
```

### 5.3 Body Copy

**RULES:**
```
✅ Short sentences (max 20 words)
✅ Short paragraphs (max 3-4 sentences)
✅ Active voice ("Tải video", not "Video được tải")
✅ Second person ("Bạn có thể...", not "Người dùng có thể...")
✅ Specific numbers ("2M+ downloads", not "Many downloads")

❌ NO long paragraphs
❌ NO passive voice
❌ NO vague claims
❌ NO third person
```

### 5.4 CTAs (Call to Actions)

**BUTTON TEXT:**
```
Format: Verb + Object
Length: 1-3 words

Good examples:
✅ "Tải Video"
✅ "Bắt đầu"
✅ "Tìm hiểu thêm"

Bad examples:
❌ "Click here"
❌ "Submit"
❌ "Go"
❌ "Tải video ngay bây giờ miễn phí" (too long)
```

### 5.5 Platform Content

**PLATFORM DESCRIPTIONS (1 line each):**
```
YouTube:     "Video và audio chất lượng cao"
TikTok:      "Tải video không watermark"
Facebook:    "Video, reels và stories"
Instagram:   "Posts, reels, IGTV, stories"
Threads:     "Video từ Threads"
Twitter/X:   "Video và GIFs"
Pinterest:   "Video pins"
Reddit:      "Video posts"

RULES:
✅ Single line (max 40 characters)
✅ Focus on key feature
✅ No marketing language
```

### 5.6 Trust Indicators

**FORMAT:**
```
[checkmark icon] [Number/Statement]

Examples:
✅ "✓ 2M+ video đã tải"
✅ "✓ Hoàn toàn miễn phí"
✅ "✓ Không cần đăng ký"
✅ "✓ An toàn và riêng tư"

RULES:
✅ Use real numbers
✅ Be specific
✅ Be honest
❌ NO fake numbers
❌ NO vague claims
❌ NO "As seen on" (unless true)
```

---

## 6. INTERACTION RULES

### 6.1 JavaScript Functions

**ALLOWED INTERACTIONS:**
```
✅ Navbar scroll effect (add/remove class)
✅ Smooth scroll to anchors
✅ Form validation
✅ Show/hide elements (toggle)
✅ Mobile menu toggle
✅ Loading states (text change + disable)
✅ Simple error/success messages

FORBIDDEN:
❌ Complex animations
❌ Parallax scrolling
❌ Auto-play anything
❌ Infinite scroll
❌ Lazy loading with fancy effects
```

**NAVBAR SCROLL:**
```
Behavior:
- When scroll > 50px: add 'scrolled' class
- When scroll < 50px: remove 'scrolled' class

Effect:
- Transparent → White background
- No border → Border bottom

Code approach:
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  navbar.classList.toggle('scrolled', window.scrollY > 50);
});

FORBIDDEN:
❌ Shrink animation
❌ Shadow on scroll
❌ Color changes beyond white/transparent
```

**SMOOTH SCROLL:**
```
Behavior:
- Click anchor link → smooth scroll to section
- Offset: 80px (navbar height)
- Duration: 600ms (fast, not slow)

FORBIDDEN:
❌ Easing functions beyond 'swing'
❌ Scroll animations
❌ Parallax during scroll
```

**FORM VALIDATION:**
```
When to validate:
- On submit (always)
- On blur (optional, for better UX)

What to validate:
- URL format
- Required fields
- Length limits (if any)

How to show errors:
- Below input field
- Red text (var(--error))
- Clear message
- Don't blame user

FORBIDDEN:
❌ Validate on every keystroke
❌ Technical error messages
❌ Multiple error messages at once
❌ Shake animations
```

**LOADING STATES:**
```
Button loading:
1. Disable button
2. Change text to "Đang xử lý..."
3. Add 'loading' class (optional for styling)

When done:
1. Enable button
2. Restore original text
3. Show result (success/error)

FORBIDDEN:
❌ Spinner images
❌ Progress bars (unless necessary)
❌ Animated loaders
```

### 6.2 Accessibility Requirements

**KEYBOARD NAVIGATION:**
```
✅ All interactive elements keyboard accessible
✅ Logical tab order
✅ Visible focus states
✅ Skip to main content link
✅ Escape closes modals/menus

Test:
- Tab through entire page
- Enter/Space activates buttons
- Escape closes overlays
```

**SCREEN READERS:**
```
✅ Semantic HTML (header, nav, main, section, footer)
✅ Alt text for all images
✅ ARIA labels for icons
✅ ARIA live regions for dynamic content
✅ Descriptive link text (not "click here")

FORBIDDEN:
❌ div/span for everything
❌ Missing alt text
❌ Icon-only buttons without labels
❌ Empty links
```

**FOCUS STATES:**
```
Visual:
- Border: 2px solid var(--black)
- Outline: none (use border instead)
- Clear visibility

FORBIDDEN:
❌ outline: none without alternative
❌ Invisible focus states
❌ Focus same as hover
```

---

## 7. PAGE TEMPLATES

### 7.1 Homepage Structure

**REQUIRED SECTIONS (in order):**

1. **Navigation**
   - Fixed top
   - Logo left, menu right
   - Mobile hamburger menu

2. **Hero Section**
   - Full viewport (mobile)
   - H1: Value proposition
   - P: Short explanation
   - Form: Input + CTA button
   - Trust badges (3-4 items)

3. **Platform Grid**
   - H2: "Các nền tảng hỗ trợ"
   - 8 platform cards
   - Grid: 1 col mobile, 2 tablet, 4 desktop
   - Each card: Icon + Title + 1-line description

4. **How It Works**
   - H2: "Cách sử dụng"
   - 3 steps
   - Layout: Vertical mobile, horizontal desktop
   -