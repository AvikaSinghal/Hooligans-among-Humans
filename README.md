# Hooligans Among Humans

A static, no-build publication about psychology, cognitive science, neuroscience, behaviour, and everyday life. It uses plain HTML, CSS, and JavaScript; there is no paid API, framework, plugin, server, or package install.

## Site map

- Home: publication introduction, featured explainers, recent articles, and topic links.
- Blog: searchable psychology articles, category filters, references, and related reads.
- Personal Log: informal journal entries, kept separate from research-led explainers.
- Research: a linked bibliography of studies and reviews cited in articles.
- About: the publication’s purpose and editorial distinction between article types.
- Contact: a message form that opens a prefilled draft in the visitor’s email app. The website does not store or send form entries.

Pages and posts use query-string URLs such as `?page=blog`, `?article=the-gorilla-we-didnt-see`, and `?log=opening-the-notebook`. They work on static hosting and can be copied/shared directly.

## Add or edit writing

All editable publication content lives in `content.js`; layout and behaviour live in `index.html`, `styles.css`, and `script.js`.

Each article entry uses:

- A unique `slug`, matching its shareable `?article=slug` address.
- A category from the six categories at the top of `content.js`.
- `date` as `YYYY-MM-DD`, plus a numeric `readMinutes` estimate.
- `excerpt`, an array of `paragraphs`, IDs in `references`, and optional article slugs in `related`.

Personal Log entries use their own `personalLog` collection and `?log=slug` addresses. They do not need research citations unless you make research claims in them. Replace the opening entry with your own updates before launch. Add bibliographic records to `sources` and cite their IDs from article entries. The current launch articles are short, cited examples to demonstrate the publication format; review and edit them before presenting them as your own editorial work.

Set `author` and `contactEmail` in `content.js` before launch. The contact form deliberately has no backend: it creates a draft email on the reader’s device. If you later want a web-hosted form, choose a provider and disclose its data handling in a privacy note.

## Publish on GitHub Pages

1. Push the files in this folder to a GitHub repository. For a free GitHub account, use a public repository for GitHub Pages hosting.
2. In **Settings → Pages**, choose **Deploy from a branch**, select `main` and `/(root)`, then save.
3. GitHub Pages will display the published `github.io` URL after deployment.

GitHub Pages also supports custom domains. Add the domain under **Settings → Pages → Custom domain**, then add the DNS record your registrar needs. GitHub’s [custom domain guide](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site) has the current steps for `www` subdomains and apex domains.

## Editorial notes

The psychology articles link to the original paper, review, or DOI record on each article page and in the Research library. Research summaries should describe a study’s scope and limits, not turn one result into a universal rule. This publication is for education and general interest, not diagnosis or medical care.
