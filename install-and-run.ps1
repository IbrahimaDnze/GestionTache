# Script pour installer les dépendances et démarrer l'application
Write-Host "Installation des dépendances..." -ForegroundColor Cyan
npm install --legacy-peer-deps

# Vérification de l'installation des dépendances critiques
$missingDeps = @()

if (-not (Test-Path "./node_modules/uuid")) {
    $missingDeps += "uuid"
}

if (-not (Test-Path "./node_modules/@headlessui/react")) {
    $missingDeps += "@headlessui/react"
}

# Installation des dépendances manquantes
if ($missingDeps.Count -gt 0) {
    Write-Host "Installation des dépendances manquantes: $($missingDeps -join ', ')" -ForegroundColor Yellow
    npm install $missingDeps --legacy-peer-deps
}

# Démarrer l'application
Write-Host "Démarrage de l'application..." -ForegroundColor Green
npm run dev
