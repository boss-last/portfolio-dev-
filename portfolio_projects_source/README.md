# 🚀 Portfolio Projects Source — Bamba Amara Christian

This folder contains **5 production-ready boilerplates** showcased on my portfolio.
Each subfolder is a **self-contained project** with a professional README, source
skeleton, configuration files, and is ready to be pushed to its own GitHub repository.

| #  | Project                          | Stack                                  | Repo to create on GitHub                     |
|----|----------------------------------|----------------------------------------|----------------------------------------------|
| 1  | `ecommerce-fullstack`            | React · Node.js · Express · MySQL      | `boss-last/ecommerce-fullstack`              |
| 2  | `project-management-app`         | Angular · Node.js · Express · MariaDB  | `boss-last/project-management-app`           |
| 3  | `laravel-enterprise-portal`      | Laravel · PHP · MySQL · React          | `boss-last/laravel-enterprise-portal`        |
| 4  | `superstore-sales-analysis`      | Python · Pandas · Jupyter              | `boss-last/superstore-sales-analysis`        |
| 5  | `marketing-analysis-dashboard`   | Power BI · Python                      | `boss-last/marketing-analysis-dashboard`     |

---

## 📦 How to push each project to GitHub

For **each** of the 5 folders, repeat the steps below.
Example with `ecommerce-fullstack`:

### 1️⃣ Create the empty repository on GitHub
1. Log in to [github.com](https://github.com) as **`boss-last`**
2. Click **New repository**
3. Name it exactly: `ecommerce-fullstack`
4. **Do NOT** add README, .gitignore or LICENSE (we already have them) → click **Create repository**

### 2️⃣ Initialise & push from your machine
```bash
cd portfolio_projects_source/ecommerce-fullstack

git init
git add .
git commit -m "🎉 Initial commit — full-stack e-commerce boilerplate"
git branch -M main
git remote add origin https://github.com/boss-last/ecommerce-fullstack.git
git push -u origin main
```

### 3️⃣ Repeat for the 4 other projects
```bash
# project-management-app
cd ../project-management-app && git init && git add . && git commit -m "🎉 Initial commit" \
  && git branch -M main && git remote add origin https://github.com/boss-last/project-management-app.git && git push -u origin main

# laravel-enterprise-portal
cd ../laravel-enterprise-portal && git init && git add . && git commit -m "🎉 Initial commit" \
  && git branch -M main && git remote add origin https://github.com/boss-last/laravel-enterprise-portal.git && git push -u origin main

# superstore-sales-analysis
cd ../superstore-sales-analysis && git init && git add . && git commit -m "🎉 Initial commit" \
  && git branch -M main && git remote add origin https://github.com/boss-last/superstore-sales-analysis.git && git push -u origin main

# marketing-analysis-dashboard
cd ../marketing-analysis-dashboard && git init && git add . && git commit -m "🎉 Initial commit" \
  && git branch -M main && git remote add origin https://github.com/boss-last/marketing-analysis-dashboard.git && git push -u origin main
```

> 💡 **Tip:** You can also use the **GitHub CLI** to create + push in one go:
> ```bash
> gh repo create boss-last/ecommerce-fullstack --public --source=. --remote=origin --push
> ```

---

## 🔗 Portfolio links (already configured)

The `constants.ts` file of your portfolio **already points** to the correct URLs:

```ts
github: "https://github.com/boss-last/ecommerce-fullstack"
github: "https://github.com/boss-last/project-management-app"
github: "https://github.com/boss-last/laravel-enterprise-portal"
github: "https://github.com/boss-last/superstore-sales-analysis"
github: "https://github.com/boss-last/marketing-analysis-dashboard"
```

Once you push the 5 repos to GitHub, the portfolio links will work instantly — no
modification needed in `constants.ts`. ✅

---

## 🛠️ What's inside each project

Every project includes:

- ✅ **Professional bilingual README** (FR / EN, badges, ToC, architecture, KPIs, roadmap…)
- ✅ **Working source code skeleton** (entry points, routes, models, controllers, components)
- ✅ **`.env.example`** for safe environment variable handling
- ✅ **`.gitignore`** tailored to each stack
- ✅ **`LICENSE`** (MIT or Proprietary)
- ✅ **Folder structure** following industry best practices

---

## 👨‍💻 Author

**Bamba Amara Christian** — Full-Stack Developer & Data Analyst
[GitHub @boss-last](https://github.com/boss-last)
