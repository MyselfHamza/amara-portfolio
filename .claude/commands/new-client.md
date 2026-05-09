## New Client Setup

When the user provides a new client (name, LinkedIn, website), execute this workflow:

### Step 0: Register in Registry
1. Open `clients/REGISTRY.md`
2. Add a new row to the **All Clients** table with status "New"
3. Update the **Active Client** line to this new client
4. This ensures any future session knows about this client

### Step 1: Create Client Folder
Create `clients/{client-slug}/` with subfolders: `site/`, `content/`, `pitch/`
Create `clients/{client-slug}/CLIENT.md` with profile template (copy structure from an existing CLIENT.md).

### Step 2: Add Name Aliases
Add the client's name variations to the **Name Lookup** table in REGISTRY.md so future sessions can match natural language to the slug.

### Step 3: Set Up GSD Milestone
- Update `.planning/ROADMAP.md` — add a new milestone section (v2.0, v3.0, etc.) with the standard 5 phases
- Update `.planning/STATE.md` — set the new milestone as active, phase 1, 0% progress
- Update `.planning/PROJECT.md` — add the new client to the Active section

### Step 4: Initial Research (Quick)
Do a quick pass to populate CLIENT.md basics:
- WebFetch their website homepage — note platform, design style, content
- WebSearch their name + company — get basic profile info
- Fill in CLIENT.md sections: Client, Business, Current Website

**Full deep research happens in Phase 1 via `/research-client`.** This step just gets enough info to confirm the client is worth pursuing.

Use this command with: `/new-client {name} | {linkedin_url} | {website_url}`
