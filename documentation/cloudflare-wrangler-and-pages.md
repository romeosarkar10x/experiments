# Cloudflare Wrangler & Pages Deployment Guide

This guide walks through the process of setting up Cloudflare Wrangler and deploying a site to Cloudflare Pages.

## Prerequisites

- A Cloudflare account
- Node.js and npm
- A project with static files to deploy

## Step 1: Generate a Cloudflare API Token

1. Log in to Cloudflare dashboard at [https://dash.cloudflare.com/](https://dash.cloudflare.com/)
2. Navigate to **My Profile** > **API Tokens**
3. Click on **Create Token**
4. Select **Create Custom Token**
5. Name the token (e.g., "Wrangler Pages Deployment")
6. Under **Permissions**, configure the following:
    - Account Resources:
        - `Cloudflare Pages`: `Edit`
    - User Resources:
        - `Memberships`: `Read`
7. Under **Account Selection**, choose the specific account(s) token would affect to (or "All accounts")
8. (Optional) Under **Client IP Address Filtering**, add specific IP addresses that are allowed to use this token for enhanced security
9. Set an expiration date if desired
10. Click **Continue to summary** and then **Create Token**
11. **IMPORTANT**: Copy and save the token securely. It will only be shown once.

## Step 2: Install Cloudflare Wrangler

Install Wrangler globally using npm:

```bash
npm install -g wrangler
```

To verify the installation:

```bash
wrangler --version
```

## Step 3: Configure Cloudflare API Token

Set your Cloudflare API token as an environment variable:

### For Linux:

```bash
export CLOUDFLARE_API_TOKEN=api-token-here
```

### For Windows (Command Prompt):

```cmd
set CLOUDFLARE_API_TOKEN=api-token-here
```

### For Windows (PowerShell):

```powershell
$env:CLOUDFLARE_API_TOKEN="api-token-here"
```

## Step 4: Create a New Cloudflare Pages Project

Run the following command to create a new Pages project:

```bash
npx wrangler pages project create <project-name>
```

Replace `<project-name>` with the desired project name.

This will set up a new project in the Cloudflare account, which we can later deploy to.

## Step 5: Deploy the Site to Cloudflare Pages

To deploy the static site to Cloudflare Pages:

```bash
npx wrangler pages deploy <directory-name>
```

Replace `<directory-name>` with the path to the directory containing the static build files (e.g., `dist`, `build`, `public`, etc.)

For example, if the build directory is named `dist`:

```bash
npx wrangler pages deploy dist
```

After deployment completes, Wrangler will provide the URLs where we can access the deployed site.

## Additional Commands and Options

### Preview with Custom Branch Name

```bash
npx wrangler pages deploy <directory-name> --branch=preview
```

### Production Deployment

```bash
npx wrangler pages deploy <directory-name> --branch=main
```

### Specify Project Name

```bash
npx wrangler pages deploy <directory-name> --project-name=<project-name>
```

### For More Information

For more advanced configuration and options, refer to the [Cloudflare Wrangler documentation](https://developers.cloudflare.com/workers/wrangler/).
