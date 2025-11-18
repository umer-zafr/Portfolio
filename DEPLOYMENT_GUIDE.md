# Portfolio Deployment Guide

## Step 1: Initialize Git Repository

```bash
cd c:\Users\umerz\Desktop\myPortfolio
git init
git add .
git commit -m "Initial commit: Portfolio website"
```

## Step 2: Connect to GitHub Repository

Replace `YOUR_USERNAME` and `YOUR_REPO_NAME` with your actual GitHub username and repository name:

```bash
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

## Step 3: Enable GitHub Pages

1. Go to your GitHub repository
2. Click on **Settings**
3. Scroll down to **Pages** (in the left sidebar)
4. Under **Source**, select **main** branch
5. Click **Save**
6. Your site will be published at: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

## Step 4: Wait & Verify

- GitHub Pages typically takes 1-5 minutes to deploy
- Visit your URL to see your live portfolio
- Any future updates: just commit and push changes

## Future Updates

```bash
git add .
git commit -m "Update portfolio content"
git push
```

Your site will automatically update within a few minutes!
