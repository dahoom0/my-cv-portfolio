# Deploy Your CV Portfolio to Vercel

## Step 1: Prepare Your Code for GitHub

### Option A: If you DON'T have Git installed yet

1. **Download and Install Git**
   - Go to [git-scm.com](https://git-scm.com/)
   - Download and install Git for your operating system
   - Verify installation by opening terminal/command prompt and typing:
     ```bash
     git --version
     ```

2. **Create a GitHub Account** (if you don't have one)
   - Go to [github.com](https://github.com)
   - Click "Sign up"
   - Follow the registration process

### Option B: If you ALREADY have Git installed

Continue to Step 2!

---

## Step 2: Initialize Git Repository

Open your terminal/command prompt in your project folder and run these commands:

```bash
# Initialize git repository
git init

# Add all files to git
git add .

# Create your first commit
git commit -m "Initial commit: My CV Portfolio"
```

---

## Step 3: Create a New GitHub Repository

1. Go to [github.com](https://github.com) and log in
2. Click the **"+"** icon in the top-right corner
3. Select **"New repository"**
4. Fill in the details:
   - **Repository name**: `my-cv-portfolio` (or any name you prefer)
   - **Description**: "My professional CV portfolio website"
   - **Visibility**: Choose **Public** (recommended) or **Private**
   - **DO NOT** check "Initialize this repository with a README"
5. Click **"Create repository"**

---

## Step 4: Push Your Code to GitHub

After creating the repository, GitHub will show you commands. Copy and run these in your terminal:

```bash
# Add GitHub repository as remote
git remote add origin https://github.com/YOUR-USERNAME/my-cv-portfolio.git

# Push your code to GitHub
git branch -M main
git push -u origin main
```

**Replace `YOUR-USERNAME`** with your actual GitHub username!

**Note:** You might be asked to log in to GitHub. Follow the authentication steps.

---

## Step 5: Deploy to Vercel

### Create a Vercel Account

1. Go to [vercel.com](https://vercel.com)
2. Click **"Sign Up"**
3. Choose **"Continue with GitHub"** (recommended - makes deployment easier!)
4. Authorize Vercel to access your GitHub account

### Deploy Your Project

1. After logging in to Vercel, click **"Add New Project"** or **"Import Project"**
2. You'll see a list of your GitHub repositories
3. Find **"my-cv-portfolio"** (or whatever name you used)
4. Click **"Import"**

### Configure Your Project

1. **Project Name**: Keep the default or change it (this will be part of your URL)
2. **Framework Preset**: Vercel should auto-detect it as **Vite** or **React**
3. **Root Directory**: Leave as `./`
4. **Build Settings**: Usually auto-configured, but verify:
   - Build Command: `npm run build` or `vite build`
   - Output Directory: `dist`
   - Install Command: `npm install`

5. Click **"Deploy"**

---

## Step 6: Wait for Deployment

- Vercel will now build and deploy your portfolio
- This usually takes **1-3 minutes**
- You'll see a progress screen with build logs

---

## Step 7: Access Your Live Portfolio! 🎉

Once deployment is complete:

1. Vercel will show you a **success screen**
2. Your portfolio will be live at: `https://your-project-name.vercel.app`
3. Click **"Visit"** to see your live CV portfolio!

---

## Your Portfolio URLs

After deployment, you'll get:
- **Production URL**: `https://your-project-name.vercel.app`
- **Custom Domain** (optional): You can add your own domain in Vercel settings

---

## Making Updates Later

Whenever you want to update your CV portfolio:

```bash
# Make your changes to the code

# Add changes to git
git add .

# Commit changes
git commit -m "Updated my experience section"

# Push to GitHub
git push
```

**That's it!** Vercel will automatically detect the changes and redeploy your site! ✨

---

## Common Issues & Solutions

### Issue 1: "Permission denied" when pushing to GitHub
**Solution**: Set up SSH keys or use GitHub Personal Access Token
- Follow GitHub's guide: [Creating a personal access token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

### Issue 2: Build fails on Vercel
**Solution**: Check the build logs in Vercel dashboard
- Make sure all dependencies are listed in `package.json`
- Verify the build command is correct

### Issue 3: Images not showing on Vercel
**Solution**: Your images use the `figma:asset` scheme which should work automatically with Figma Make deployments

### Issue 4: "Repository not found"
**Solution**: 
- Make sure you pushed to GitHub successfully
- Check that Vercel has permission to access your GitHub repositories
- Re-authorize Vercel in GitHub settings if needed

---

## Need Help?

- **Vercel Documentation**: [vercel.com/docs](https://vercel.com/docs)
- **GitHub Documentation**: [docs.github.com](https://docs.github.com)
- **Vercel Support**: [vercel.com/support](https://vercel.com/support)

---

## Quick Command Reference

```bash
# Check git status
git status

# See your commit history
git log

# View remote repositories
git remote -v

# Pull latest changes (if working with others)
git pull

# Create a new branch
git checkout -b new-feature

# Switch branches
git checkout main
```

---

**Congratulations! Your CV portfolio is now live and accessible to the world! 🚀**

Share your link: `https://your-project-name.vercel.app`
