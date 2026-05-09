# Record Client Walkthrough Video

Record a smooth, professional walkthrough video of a client's prototype website including chatbot demo.

## Prerequisites
- Client site must be built (`clients/{slug}/site/`)
- Site must compile with `npx next build` (zero errors)
- FFmpeg installed at: `C:/Users/Hamza/AppData/Local/Microsoft/WinGet/Packages/Gyan.FFmpeg_Microsoft.Winget.Source_8wekyb3d8bbwe/ffmpeg-8.1-full_build/bin/ffmpeg.exe`
- Puppeteer installed globally: `C:/Users/Hamza/AppData/Roaming/npm/node_modules/puppeteer`

## Steps

### 1. Read Client Info
- Read `clients/REGISTRY.md` to find the client slug
- Read `clients/{slug}/CLIENT.md` to get:
  - All page routes (listed in "What's Built" section)
  - Client name for output filename
  - Whether site has a chatbot
  - Whether site has a qualification gate modal

### 2. Build & Serve
```bash
cd clients/{slug}/site
npx next build        # Production build (faster serving, no compile delays)
npx next start -p 3006  # Start production server
```
Wait for server to respond: `curl http://localhost:3006/`

**IMPORTANT:** Only run ONE server at a time. Running multiple recordings simultaneously causes frame drops and janky scroll.

### 3. Create Recording Script
Create `clients/{slug}/pitch/record-smooth.js` using this exact template. The key parameters that make it smooth:

```
SCROLL_PX = 4        # 4 pixels per frame = butter smooth
FRAME_MS = 16         # ~60fps capture rate
FPS = 24              # 24fps output encoding
Resolution: 1920x1080
```

**CRITICAL RULES:**
- NO pauses between sections. Continuous smooth scroll only.
- Brief 1.5s hold at top of each page (hero view), 0.5s at bottom
- Quick animation warmup pass before recording each page (scroll down fast, scroll back up, then record)
- Chatbot demo at the end: open chat, type 4 messages with 30ms char delay, wait 2.5s for each response

### 4. Recording Script Template

See the working scripts at:
- `clients/gnus-ai/pitch/record-smooth.js` (reference - this is the gold standard)
- `clients/fbn-securities/pitch/record-smooth.js`
- `clients/consortiumz/record-smooth.js`

Key structure:
```javascript
const PAGES = ['/', '/about', '/team', ...];  // All routes from CLIENT.md
const CHAT_MESSAGES = [                        // 4 contextual questions
  'What does {company} do?',
  'Tell me about your team',
  ...
];
```

For sites with qualification gate modals (like ConsortiumZ), add a `dismissGate()` function that clicks confirm/agree/proceed buttons before recording each page.

### 5. Output Location
Save video to: `C:/Users/Hamza/Downloads/{Client-Name}-{Company}/`
Filename: `{Company}-Website-Walkthrough.mp4`

Examples:
- `Downloads/Kenneth-Hurley-GNUS-AI/GNUS-AI-Website-Walkthrough.mp4`
- `Downloads/Daniel-Mattio-FBN-Securities/FBN-Securities-Website-Walkthrough.mp4`
- `Downloads/Brian-Mair-ConsortiumZ/ConsortiumZ-Website-Walkthrough.mp4`

### 6. Run Recording
```bash
cd clients/{slug}/pitch
node record-smooth.js
```

### 7. Verify
- Check output file exists and is > 10MB
- Duration should be 2-5 minutes depending on page count
- Open and spot-check: smooth continuous scroll, no janky frame drops, chatbot visible

### 8. Cleanup
The script auto-deletes the frames directory after encoding. Kill the server when done:
```bash
# Kill server
powershell -Command "Get-Process -Name 'node' -ErrorAction SilentlyContinue | Stop-Process -Force"
```

## What NOT to Do
- DO NOT add section pauses (scroll, stop, hold, scroll). Keep it continuously flowing.
- DO NOT run multiple recordings simultaneously. Record one at a time for smooth results.
- DO NOT use dev server (`next dev`). Always build first, then use `next start`.
- DO NOT skip the chatbot demo.
- DO NOT use headless: false. Use headless: 'shell' for consistent rendering.

## Expected Output
| Pages | Approx Duration | Approx Size |
|-------|----------------|-------------|
| 7-8   | 3-5 minutes    | 15-35 MB    |
| 10+   | 5-7 minutes    | 30-50 MB    |
