#!/bin/bash

# Step 1: 前端打包
echo "Building the frontend..."
npm run build || error_exit "Error: Frontend build failed"

# Step 2: 將原始碼更新至 Github
echo "Updating source code to GitHub..."
git add . || error_exit "Error: Git add failed"
current_date=$(date +"%Y-%m-%d")
git commit -m "$current_date" || error_exit "Error: Git commit failed"
git push origin main || error_exit "Error: Git push failed"

# Step 3: 將打包後的檔案更新至 Github Pages
echo "Updating the frontend to GitHub Pages..."
git checkout gh-pages || error_exit "Error: Git checkout failed"
git pull origin gh-pages || error_exit "Error: Git pull failed"
rm -rf * || error_exit "Error: Git remove failed"
mv ../dist/* ./ || error_exit "Error: Git move failed"
git add . || error_exit "Error: Git add failed"
git commit -m "$current_date" || error_exit "Error: Git commit failed"
git push origin gh-pages || error_exit "Error: Git push failed"

