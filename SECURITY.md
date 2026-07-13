# Security Policy

## Reporting a Vulnerability

Report suspected vulnerabilities privately by emailing dalton@orahood.net.

Do not submit passwords, financial data, protected records, or confidential client data through the public contact form or public GitHub issues.

## Static Site Security Notes

The site is designed to run over HTTPS only. Keep GitHub Pages HTTPS enforcement enabled for `orahoodcbs.com` and `www.orahoodcbs.com`.

This repository includes `_headers` for hosts that honor static header files, such as Netlify or Cloudflare Pages. GitHub Pages does not apply `_headers`; if the site remains on GitHub Pages, use Cloudflare or another edge layer to enforce the headers in that file.

The contact form is delivered through Formspree. Restrict Formspree submissions to the production OCBS domains and keep spam protection enabled.
