/**
 * services.ts — what the business does.
 *
 * EDIT HERE. Keep ~1 broad catch-all marked `hubOnly: true` (no per-city combo pages).
 * Flag urgent services `emergency: true`. Slugs are kebab-case join keys — keep them stable.
 */
import type { ImageMetadata } from 'astro';

import moldRemediationImg from '../assets/services/mold-remediation.jpg';
import moldInspectionImg from '../assets/services/mold-inspection-testing.jpg';
import blackMoldImg from '../assets/services/black-mold-removal.jpg';
import atticMoldImg from '../assets/services/attic-mold-removal.jpg';
import crawlSpaceMoldImg from '../assets/services/crawl-space-mold-removal.jpg';
import moldRepairImg from '../assets/services/mold-damage-repair.jpg';

export interface Faq {
  q: string;
  a: string;
}

export interface ServiceSection {
  h: string;
  body: string;
}

export interface Service {
  slug: string;
  name: string; // Full service name, e.g. "Black Mold Removal"
  short: string; // Short label for nav, cards, breadcrumbs
  blurb: string; // One-line summary
  description: string; // Intro paragraph (hub + city combo pages)
  sections: ServiceSection[]; // Deeper authority sections, rendered on the hub page
  points: string[]; // What's included / bullet points
  faqs: Faq[]; // Service-level FAQs (rendered + FAQ schema on the hub)
  image: ImageMetadata;
  imageAlt: string;
  hubOnly?: boolean; // do not generate per-city combo pages
  emergency?: boolean; // flagged as emergency/urgent (affects copy)
}

export const SERVICES: Service[] = [
  {
    slug: 'mold-remediation',
    name: 'Mold Remediation',
    short: 'Mold Remediation',
    blurb:
      'Inspection, testing, containment, removal, and repair — one local crew for the whole mold problem across the Tampa Bay area.',
    description:
      'We are a full-service mold remediation company covering the Tampa Bay metro, from the bungalows of South Tampa and the historic blocks of St. Petersburg out to the newer subdivisions in Riverview, Wesley Chapel, and Lutz. If it has to do with mold, we handle it: inspection and air testing, containment so spores do not spread, safe removal of mold from drywall, framing, attics, and crawl spaces, drying the source of moisture, and repairing what had to come out. In a climate like ours — months of humidity, afternoon storms, hurricane season, and air conditioning running nine months a year — mold is not a rare event. It grows behind walls after a slow plumbing leak, in attics that do not breathe, around AC handlers that sweat, and anywhere a roof or window lets water in. You call, tell us where you are seeing or smelling it, and we give you a straight answer and a real plan. No scare tactics, no "tear out the whole house" upsells — just an honest crew that knows how mold behaves in Florida homes.',
    sections: [
      {
        h: 'One crew for the whole problem',
        body: 'A lot of homeowners get bounced between an inspector who only tests, a remediator who only demos, and a contractor who only rebuilds. We do the full job: find the moisture source, contain the area, remove the mold, treat what stays, and repair the drywall, trim, or insulation we took out. That continuity matters — the people who open the wall are the people who see why it grew and make sure it does not come back the moment the work is "done."',
      },
      {
        h: 'Built for the Florida climate',
        body: 'Mold work in Tampa Bay is not the same as up north. Our humidity sits high for half the year, homes run AC almost year-round, and slab construction, flat roofs, stucco, and block walls all hold and move moisture in their own ways. We know the patterns: condensation off undersized or oversized AC systems, attics with poor ventilation baking spores into the sheathing, post-storm intrusion that sat a day too long. We chase the moisture, not just the stain.',
      },
      {
        h: 'Straight answers, honest scope',
        body: 'Mold is easy to oversell because it scares people and most of it hides behind a surface. We do not work that way. We show you what we find, explain what actually needs to come out versus what can be cleaned and treated in place, and put the scope in writing before we start. If it is a small, contained spot, we tell you that — not every spot of mold is a whole-house emergency, and you deserve to know the difference.',
      },
    ],
    points: [
      'Inspection, testing, containment, removal, and repair — one crew',
      'Residential mold across the Tampa Bay metro',
      'We find and fix the moisture source, not just the stain',
      'Honest scope in writing before any demo',
      'Containment and HEPA filtration so spores do not spread',
      'We show you what we find before recommending work',
    ],
    faqs: [
      {
        q: 'Do you handle the whole job or just testing?',
        a: 'The whole job. We inspect and test, contain the area, remove the mold, dry and correct the moisture source, and repair the drywall, trim, or insulation that came out. One call covers it, and the crew that opens the wall is the crew that makes sure it does not grow back.',
      },
      {
        q: 'Is a little mold really a problem in a humid place like Tampa?',
        a: 'Some surface mildew on a bathroom ceiling is common here and often just needs cleaning and better ventilation. The problem is mold that keeps coming back or spreads behind a surface — that means there is a moisture source feeding it. We help you tell the difference instead of treating every spot like a disaster.',
      },
      {
        q: 'Will the mold just come back after you remove it?',
        a: 'Not if the moisture source is fixed, which is why we start there. Mold needs water to grow; remove the leak, condensation, or ventilation problem feeding it and the area stays dry and clean. Removing mold without correcting the moisture is why some "remediation" fails — we do both.',
      },
    ],
    image: moldRemediationImg,
    imageAlt: 'Mold remediation crew working in a home in the Tampa Bay area',
    hubOnly: true,
  },
  {
    slug: 'mold-inspection-testing',
    name: 'Mold Inspection & Testing',
    short: 'Inspection & Testing',
    blurb:
      'Smell it but can’t see it? We find the moisture, locate hidden mold, and test the air so you know what you’re dealing with.',
    description:
      'A mold inspection tells you what is actually going on before you spend a dollar tearing anything out. We inspect and test homes across the Tampa Bay area for owners who smell a musty odor, see spotting on walls or ceilings, have had a leak or storm intrusion, or are buying a home and want to know what they are getting. A real inspection is detective work: we walk the home, read moisture meters and a thermal camera to find damp spots behind surfaces, trace the water source, and where it matters we take air and surface samples and send them to an independent lab. You get a clear picture — where the mold is, how much, what is feeding it, and whether it needs full remediation or just cleaning and a moisture fix. In a market where a lot of "free inspections" are really sales calls for the most expensive scope, our job is to tell you the truth, even when the truth is that you do not need much.',
    sections: [
      {
        h: 'Finding what you can’t see',
        body: 'Most problem mold is not the spot on the ceiling — it is behind the drywall, under the AC handler, in the attic, or beneath flooring where water traveled. We use moisture meters and thermal imaging to find the damp areas that feed it, then trace the source: a roof leak, a window that lets water in during a blowing rain, a supply or drain line, or condensation off the air conditioning. Finding the moisture is what makes the rest of the job actually work.',
      },
      {
        h: 'Testing that means something',
        body: 'When testing is warranted, we take air samples inside, a comparison sample outside, and surface samples where needed, and send them to an independent lab — not one with a stake in selling you remediation. The results tell us the types and concentrations of mold present and whether indoor levels are elevated above the outdoor baseline. That is the difference between guessing and knowing, and it is especially useful for real-estate deals, insurance, or confirming a job was done right.',
      },
    ],
    points: [
      'Full visual inspection plus moisture meters and thermal imaging',
      'We trace the actual water source feeding the mold',
      'Air and surface samples sent to an independent lab',
      'Clear report: where it is, how much, and what it needs',
      'Pre-purchase and post-remediation clearance testing available',
      'Honest call — we tell you if you don’t need remediation',
    ],
    faqs: [
      {
        q: 'I smell something musty but don’t see any mold — what now?',
        a: 'A musty odor with no visible mold almost always means it is growing somewhere out of sight — behind a wall, under flooring, in the AC system, or in the attic. That is exactly what an inspection is for. We use moisture meters and thermal imaging to find the damp area and trace the source so we are not guessing.',
      },
      {
        q: 'Do I really need air testing, or can you just look?',
        a: 'Not every situation needs lab testing. A clear, visible problem with an obvious source can sometimes go straight to remediation. Testing earns its keep when the mold is hidden, when you want proof for a sale or insurance, or as a clearance check after the work — to confirm indoor levels are back to normal. We will tell you honestly whether it is worth it for your situation.',
      },
      {
        q: 'Should I get an inspection before buying a Tampa-area home?',
        a: 'If the home has any history of leaks, a musty smell, an older roof, or sits in a flood-prone area, yes. Florida homes hide moisture problems well, and a standard home inspection does not test for mold in any depth. A dedicated inspection tells you the real condition before it becomes your problem.',
      },
    ],
    image: moldInspectionImg,
    imageAlt: 'Technician using a moisture meter during a mold inspection in a Tampa Bay home',
  },
  {
    slug: 'black-mold-removal',
    name: 'Black Mold Removal',
    short: 'Black Mold',
    blurb:
      'Dark, spreading mold on walls or behind surfaces? We contain it, remove it safely, and fix what’s feeding it.',
    description:
      'When people say "black mold" they usually mean the dark, slimy growth that shows up where a surface has stayed wet — and whatever the exact species, it needs to be handled carefully so spores do not spread through the home while it is being removed. We remove black and toxic-looking mold from homes across the Tampa Bay area. The work is methodical: we seal off the area with containment barriers and negative air pressure, run HEPA filtration, remove the materials that cannot be saved, HEPA-vacuum and treat the framing and surfaces that stay, and correct the moisture that let it grow in the first place. Doing this right is mostly about containment and the moisture fix — ripping out drywall without sealing the area just spreads spores into rooms that were fine. We take it seriously, we protect the rest of your house while we work, and we give you a clear, honest scope rather than a fear-driven one.',
    sections: [
      {
        h: 'Why containment is the whole game',
        body: 'The biggest risk in removing heavy mold is not the mold sitting on the wall — it is the spores that get stirred into the air the moment you disturb it. We seal the work area with plastic barriers, put it under negative air pressure so air flows in rather than out, and run HEPA scrubbers the entire time. That is what keeps a contained problem in one room from becoming a whole-house problem during the removal.',
      },
      {
        h: 'Remove what must go, save what can stay',
        body: 'Porous materials that are saturated and colonized — drywall, soaked insulation, some flooring — generally have to be removed; mold roots into them and cannot be fully cleaned. Solid framing, studs, and structural wood can usually be cleaned, HEPA-vacuumed, and treated in place. We make that call honestly so you are not paying to demo your house when the framing is fine, and we always finish by fixing the water source so it does not return.',
      },
    ],
    points: [
      'Containment barriers and negative air pressure before any demo',
      'HEPA filtration running throughout the work',
      'Saturated, colonized materials removed; sound framing cleaned and treated',
      'Surfaces HEPA-vacuumed and treated, not just painted over',
      'Moisture source corrected so it does not grow back',
      'Honest scope — no fear-driven whole-house tear-outs',
    ],
    faqs: [
      {
        q: 'Is black mold dangerous — do I need to leave my house?',
        a: 'Most households do not need to move out for a typical contained job, but sensitive individuals or large infestations can be a different story. The real point is to stop disturbing it and to contain the area properly during removal so spores do not spread. We will give you a straight read on your situation rather than a scare.',
      },
      {
        q: 'Can’t I just spray it with bleach?',
        a: 'On a hard, non-porous surface, cleaning can help — but on drywall or wood, bleach mostly lightens the stain on the surface while the mold roots stay in the material and the moisture keeps feeding it. That is why it comes back. Proper removal addresses the material and the water source, not just the color.',
      },
      {
        q: 'How do you keep it from spreading to the rest of the house?',
        a: 'Containment. Before any material is disturbed we seal the work area with barriers, put it under negative air pressure so air is pulled in and filtered rather than pushed out, and run HEPA air scrubbers throughout. That is the core of doing the job safely and is what separates real remediation from a quick rip-out.',
      },
    ],
    image: blackMoldImg,
    imageAlt: 'Contained black mold removal on a wall in a Tampa Bay area home',
  },
  {
    slug: 'attic-mold-removal',
    name: 'Attic Mold Removal',
    short: 'Attic Mold',
    blurb:
      'Mold on the attic sheathing usually means a ventilation or roof-leak problem. We remove it and fix the cause.',
    description:
      'Attic mold is one of the most common problems we find on Tampa Bay homes, and it almost always comes down to one of two things: a roof or flashing leak, or an attic that cannot breathe. In our climate, a poorly ventilated attic turns into a hot, humid box where moisture condenses on the underside of the roof sheathing and feeds mold across the plywood. We remove attic mold and, just as important, fix why it grew. We treat or remove affected sheathing and materials, HEPA-vacuum and apply an appropriate treatment, clear out contaminated insulation where needed, and then address the ventilation — soffit and ridge venting, blocked baffles, bath fans dumping humid air into the attic, or a roof leak that needs sealing. Cleaning attic mold without fixing the airflow or the leak is a guarantee it comes back, so we treat the cause as part of the job, not as an afterthought.',
    sections: [
      {
        h: 'Why Tampa attics grow mold',
        body: 'A Florida attic can sit above 100 degrees with high humidity, and if the air does not move, that moisture condenses on the cooler roof sheathing overnight and feeds mold across the plywood. Common culprits are blocked or missing soffit vents, an inadequate ridge or gable exhaust, bathroom and dryer fans venting into the attic instead of outside, and roof or flashing leaks. We diagnose which it is, because that is what determines whether the fix actually lasts.',
      },
      {
        h: 'Treat the wood, fix the air',
        body: 'On roof sheathing and framing, mold can usually be remediated in place — HEPA-vacuumed, treated, and sometimes encapsulated — rather than torn out, which keeps the job affordable. Contaminated insulation often comes out and gets replaced. Then we correct the ventilation or leak so the attic stays dry. Done together, that is what keeps the sheathing clean for good instead of for a season.',
      },
    ],
    points: [
      'Roof sheathing and framing treated in place where possible',
      'Contaminated insulation removed and replaced as needed',
      'HEPA vacuuming and appropriate treatment of affected wood',
      'Ventilation diagnosed — soffit, ridge, baffles, and bath fans',
      'Roof and flashing leaks identified as the moisture source',
      'We fix the cause so the attic stays dry',
    ],
    faqs: [
      {
        q: 'How did mold get in my attic if there’s no leak?',
        a: 'Very often it is not a leak at all — it is ventilation. A Tampa attic that cannot breathe traps heat and humidity, and that moisture condenses on the roof sheathing and feeds mold. Bath or dryer fans venting into the attic make it worse. We check for both a leak and a ventilation problem, because the fix depends on which it is.',
      },
      {
        q: 'Does attic sheathing with mold have to be replaced?',
        a: 'Usually not. Mold on plywood roof sheathing can typically be cleaned, HEPA-vacuumed, treated, and sometimes encapsulated in place, which is far less costly than re-sheathing the roof. Replacement is only for wood that is actually rotted and structurally compromised. We make that call honestly.',
      },
      {
        q: 'Will it come back if you just clean it?',
        a: 'It will if the attic still cannot breathe or the leak is still there. That is why we treat the ventilation or roof issue as part of the job. Clean the wood and fix the moisture and airflow, and the attic stays dry and clean.',
      },
    ],
    image: atticMoldImg,
    imageAlt: 'Mold on attic roof sheathing being treated in a Tampa Bay home',
  },
  {
    slug: 'crawl-space-mold-removal',
    name: 'Crawl Space Mold Removal',
    short: 'Crawl Space Mold',
    blurb:
      'Musty smell coming up through the floors? Crawl space mold thrives in Florida humidity — we remove it and keep it dry.',
    description:
      'Plenty of older Tampa Bay homes — the bungalows, the raised cottages, the historic blocks of St. Petersburg and Tampa Heights — sit over a crawl space rather than a slab, and in our humidity those crawl spaces are prime territory for mold. Warm, damp air collects under the house, condenses on the cooler framing and subfloor, and feeds mold that you smell as a musty odor rising through the floors. We remove crawl space mold and address what keeps it wet. We treat and clean the joists, subfloor, and framing, remove contaminated insulation and debris, and tackle the moisture: standing water or poor drainage, a missing or torn vapor barrier on the ground, foundation venting issues, and humidity that needs to be controlled. Where it makes sense we talk through vapor barriers and encapsulation, because the most reliable way to keep a Florida crawl space mold-free is to keep the ground moisture and humid air out of it in the first place.',
    sections: [
      {
        h: 'Why crawl spaces stay wet here',
        body: 'A vented crawl space in a humid climate pulls in warm, moist outdoor air that condenses on the cooler wood underneath the house — so the very vents meant to dry it can keep it damp. Add bare soil giving off ground moisture, poor exterior drainage, or a plumbing leak, and you have a continuous water supply for mold on the joists and subfloor. The musty smell in the rooms above is usually the first sign.',
      },
      {
        h: 'Clean it, then keep it dry',
        body: 'We clean and treat the framing and subfloor, HEPA-vacuum, and remove insulation and debris that are contaminated. Then we deal with the moisture: a proper ground vapor barrier, fixing drainage that sends water under the house, and where it fits the home, encapsulation and humidity control to seal the crawl space off from ground moisture and humid air. A dry crawl space simply does not grow mold — that is the goal.',
      },
    ],
    points: [
      'Joists, subfloor, and framing cleaned and treated',
      'Contaminated insulation and debris removed',
      'Ground vapor barrier installed or repaired',
      'Drainage and standing-water issues addressed',
      'Encapsulation and humidity control where it fits the home',
      'We stop the musty odor at its source under the house',
    ],
    faqs: [
      {
        q: 'Why does my house smell musty even though I keep it clean?',
        a: 'In a home over a crawl space, a musty smell in the living areas very often comes from below. Humid air and mold under the house rise through the floor and registers. Cleaning upstairs will not touch it — the fix is removing the mold in the crawl space and keeping that space dry.',
      },
      {
        q: 'Do I need crawl space encapsulation?',
        a: 'Not always, but in Florida it is often the most reliable long-term fix. A vapor barrier and sealing the space off from outdoor humidity keeps the ground moisture and humid air that feed mold out for good. For a chronically damp crawl space we will walk you through whether encapsulation makes sense for your home and budget.',
      },
      {
        q: 'Can mold under the house affect the air we breathe upstairs?',
        a: 'Yes. Air moves upward from the crawl space into the living space — the "stack effect" — carrying odors and spores with it. That is why a crawl space problem shows up as a smell and sometimes symptoms in the rooms above, and why it is worth addressing even though it is out of sight.',
      },
    ],
    image: crawlSpaceMoldImg,
    imageAlt: 'Crawl space mold remediation under a home in the Tampa Bay area',
  },
  {
    slug: 'mold-damage-repair',
    name: 'Mold Damage Repair',
    short: 'Damage Repair',
    blurb:
      'After the mold is gone, we put the home back — drywall, trim, paint, and insulation — so you’re not left with a hole.',
    description:
      'Removing mold often means taking out the drywall, trim, flooring, or insulation it grew into — and you do not want to be left staring at open studs and a containment sheet. We repair and rebuild what the remediation removed, across the Tampa Bay area, so the job ends with your home looking like a home again. We hang and finish new drywall, replace baseboards and trim, prime and paint to match, re-insulate, and put back flooring or fixtures that came out, all after the area is confirmed clean and dry. Because we handle both the remediation and the repair, there is no gap where one contractor blames another — the crew that removed the mold is the crew that closes it back up, and we do not rebuild over a surface until the moisture problem behind it is actually fixed. It is the difference between a problem that is truly finished and one that is just hidden behind fresh paint.',
    sections: [
      {
        h: 'One crew from tear-out to finish',
        body: 'The frustrating version of mold work is when the remediation company demos and leaves, and you are left hiring a separate handyman to close the walls. We do both. After the area passes a dryness and cleanliness check, we hang drywall, finish and texture to match, reinstall trim and baseboards, paint, and re-insulate. No handoff, no finger-pointing, no half-finished room sitting open for weeks.',
      },
      {
        h: 'We never rebuild over a wet problem',
        body: 'The cardinal rule of mold repair is simple: do not close a wall until the moisture source is fixed and the cavity is dry. We confirm the leak, condensation, or ventilation issue is corrected and the area reads dry before any new material goes up. Rebuilding over lingering moisture is exactly how mold quietly returns behind brand-new drywall — so we make sure the problem is actually solved first.',
      },
    ],
    points: [
      'Drywall hung, finished, and textured to match',
      'Trim, baseboards, and fixtures reinstalled',
      'Primed and painted so the repair disappears',
      'Insulation and flooring replaced as needed',
      'One crew handles both removal and rebuild — no handoffs',
      'Nothing closed up until the area is dry and the source is fixed',
    ],
    faqs: [
      {
        q: 'Do you repair the walls after removing the mold, or just demo?',
        a: 'We do both. After the area is confirmed clean and dry, we rebuild what came out — drywall, trim, paint, insulation, and flooring — so you are not left with an open wall and a second contractor to find. One crew takes it from tear-out to finished room.',
      },
      {
        q: 'How do I know the mold won’t come back behind the new drywall?',
        a: 'Because we do not close a wall until the moisture source is fixed and the cavity reads dry. The leak, condensation, or ventilation problem that caused the mold is corrected first. Rebuilding over a lingering moisture problem is the one thing that brings mold back — so we make sure that is handled before anything goes back up.',
      },
    ],
    image: moldRepairImg,
    imageAlt: 'Drywall and trim repair after mold remediation in a Tampa Bay home',
  },
];

export const getService = (slug: string): Service | undefined =>
  SERVICES.find((s) => s.slug === slug);

export const MATRIX_SERVICES: Service[] = SERVICES.filter((s) => !s.hubOnly);
