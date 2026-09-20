# AMSUA Group — Website Revamp Mockup

Conceptual redesign of [amsua.com](http://www.amsua.com/) for bulk-buyer international trading.

## What AMSUA is today

AMSUA Group is a Hong Kong–headquartered import/export company (est. 1975) serving bulk buyers with 5,000+ ready products, owned warehouses (HK ~135k sq ft, Ajman Free Zone, UK ~40k sq ft), China sourcing desks (Guangzhou, Yiwu), and consolidation services for West African ports.

The live site is a fixed-width table layout (~800px), iframe header, green scrollbars, and dense address blocks — last visibly updated around 2016.

## Industry references used

| Site | Takeaways applied |
| --- | --- |
| [Li & Fung](https://www.lifung.com/) | Brand-forward narrative; supply-chain journey as sequential steps (source → pack → move) |
| [Trafigura](https://www.trafigura.com/) | Confident global network as a primary story; sparse first viewport |
| [Cargill](https://www.cargill.com/) | Mission-led hero with real operational imagery, not decorative abstraction |
| [Alibaba.com](https://www.alibaba.com/) | Clear B2B conversion path (category + destination + inquiry) — adapted without marketplace clutter |

## Design direction

- **Look:** Maritime trade corridor — deep ink navy, harbor teal, brass accents, cool mist grounds (not purple gradients or cream/terracotta editorial)
- **Typography:** Syne (brand/display) + Figtree (body)
- **Hero budget:** Giant **AMSUA** wordmark, one headline, one lede, two CTAs, full-bleed port photography
- **Motion:** Hero zoom, scroll cue, staggered reveals, map route dash + hub pulse

## Run locally

```bash
cd amsua-revamp
python3 -m http.server 5173
```

Open `http://localhost:5173`.
