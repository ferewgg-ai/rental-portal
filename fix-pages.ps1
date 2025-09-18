# fix-pages.ps1 — ensure every app/**/page.(tsx|jsx|js) exports default
$ErrorActionPreference = "Stop"
$pages = Get-ChildItem -Path ".\app" -Recurse -Include "page.tsx","page.jsx","page.js" -ErrorAction SilentlyContinue
foreach ($f in $pages) {
  $txt = if (Test-Path $f.FullName) { Get-Content -Raw -LiteralPath $f.FullName } else { "" }
  $hasDefault = $txt -match "(?ms)^\s*export\s+default\b" -or $txt -match "(?ms)\bexport\s+\{\s*default\b"
  $isEmptyLike = ($txt -replace "[`r`n\t ]","").Length -eq 0
  if (-not $hasDefault) {
    $ext = [IO.Path]::GetExtension($f.FullName).ToLowerInvariant()
    $stub = switch ($ext) {
      ".tsx" { "export default function Page() { return <main />; }" }
      default { "export default function Page() { return null; }" }
    }
    if ($isEmptyLike) {
      Set-Content -LiteralPath $f.FullName -Value $stub -Encoding UTF8
    } else {
      Add-Content -LiteralPath $f.FullName -Value "`r`n`r`n$stub"
    }
    Write-Host ("✔ Fixed: " + $f.FullName) -ForegroundColor Green
  }
}
