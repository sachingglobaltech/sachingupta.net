# sachingupta.net

Final static professional website package for GitHub Pages.

## Included
- Responsive single-page professional website.
- Original uploaded Sachin Gupta professional photo used in the hero and as the small profile/icon image.
- Direct LinkedIn link: https://www.linkedin.com/in/sachinguptaerp/
- ORCID: https://orcid.org/0009-0007-2359-5464
- AI/ML positioning and an AI Opportunities section covering advisory, peer review/judging, research, speaking, enterprise use cases and education/advisory-board opportunities.
- `CNAME` configured for `sachingupta.net`.
- SEO metadata, Open Graph metadata and Person structured data.

## Publish to GitHub Pages
1. Create or use your GitHub repository for the site.
2. Upload the contents of this package to the repository root.
3. In GitHub, go to **Settings → Pages** and choose your publishing source.
4. Set the custom domain to `sachingupta.net` if GitHub has not already detected the included `CNAME` file.
5. Enable HTTPS when GitHub makes the certificate available.

GitHub Pages supports apex custom domains such as `sachingupta.net` and recommends configuring `www` as well when appropriate.

## Custom email: connect@sachingupta.net → saching.globaltech@gmail.com
The website only needs a `mailto:` link; email forwarding is configured at the domain/DNS level, not inside GitHub Pages.

Because the domain is already intended to use Cloudflare DNS, Cloudflare Email Routing is the simplest setup for receiving mail:

1. Sign in to Cloudflare and select `sachingupta.net`.
2. Go to **Compute → Email Service → Email Routing**.
3. Onboard the domain if Email Routing is not already enabled.
4. Add `saching.globaltech@gmail.com` as a destination address and verify it using the email Cloudflare sends.
5. Create a routing rule for `connect` on `sachingupta.net` and select the verified Gmail address as the destination.
6. Send a test message to `connect@sachingupta.net` and confirm it arrives in Gmail.

This provides receiving/forwarding. If you also want to **send** email as `connect@sachingupta.net`, you need a mail/SMTP service and its DNS authentication records; forwarding alone does not create a full mailbox or outbound sending service.

## Notes
- The site does not claim that AI opportunities, judging, speaking or advisory roles have already been awarded. The AI section is intentionally written to make relevant inbound opportunities easy to identify and contact.
- Employer-confidential project details remain high-level.
- Replace or add publication links only when they are verified and public.
