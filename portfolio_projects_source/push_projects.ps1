$projects = @(
    @{ Name = "ecommerce-fullstack"; Url = "https://github.com/boss-last/ecommerce-fullstack.git" },
    @{ Name = "project-management-app"; Url = "https://github.com/boss-last/project-management-app.git" },
    @{ Name = "laravel-enterprise-portal"; Url = "https://github.com/boss-last/laravel-enterprise-portal.git" },
    @{ Name = "superstore-sales-analysis"; Url = "https://github.com/boss-last/superstore-sales-analysis.git" },
    @{ Name = "marketing-analysis-dashboard"; Url = "https://github.com/boss-last/marketing-analysis-dashboard.git" }
)

foreach ($project in $projects) {
    Write-Host "`n================================================="
    Write-Host "🚀 Processing $($project.Name)..."
    Write-Host "================================================="
    Set-Location -Path "c:\Users\MAGIK BC\Downloads\bamba-amara-christian---fullstack-_-data-portfolio\portfolio_projects_source\$($project.Name)"
    
    git init
    git add .
    git commit -m "🎉 Initial commit"
    git branch -M main
    
    git remote remove origin 2>$null
    
    git remote add origin $project.Url
    git push -u origin main
}
