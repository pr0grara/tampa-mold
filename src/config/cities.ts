/**
 * cities.ts — where the business operates.
 *
 * EDIT HERE. Localization is the moat: each city's intro, neighborhoods, landmarks,
 * issues, and faqs should be genuinely specific to that place. `nearby` slugs MUST
 * exist in CITIES (else dropped silently). Array order = display order.
 */
import type { ImageMetadata } from 'astro';
import type { Faq } from './services';

export interface CityIssue {
  title: string;
  body: string;
}

export interface City {
  slug: string;
  name: string;
  state?: string;
  /** Localized intro, ~150–250 words for priority cities. */
  intro: string;
  neighborhoods: string[];
  landmarks: string[];
  issues: CityIssue[];
  /** 3 nearby city slugs (must exist in this list). */
  nearby: string[];
  faqs: Faq[]; // Faq reused from services.ts
  /** Optional per-city hero background; falls back to the site default. */
  heroImage?: ImageMetadata;
  /** Optional per-city service-photo overrides, keyed by service slug. */
  serviceImages?: Partial<Record<string, ImageMetadata>>;
}

export const CITIES: City[] = [
  {
    slug: 'tampa',
    name: 'Tampa',
    state: 'FL',
    intro:
      'Tampa is where we do most of our work, and the housing here is a perfect storm for mold. The bungalows and craftsman homes of Hyde Park, Palma Ceia, and Seminole Heights are nearly a century old, many sitting over crawl spaces that trap our humidity. Newer South Tampa rebuilds and the subdivisions out toward New Tampa run on slabs with tight construction and AC systems that sweat all summer. Across all of it, the climate is the constant: high humidity from spring through fall, daily summer storms, hurricane-season intrusion, and air conditioning running nine or ten months a year. We see mold behind drywall after slow plumbing leaks, on attic sheathing in homes that cannot breathe, around AC handlers and air returns, and in the crawl spaces under the older neighborhoods. We inspect, test, contain, remove, and repair residential mold all over Tampa — Hillsborough River neighborhoods, the historic districts, and the newer suburbs alike. Tell us where you are seeing or smelling it, and we will give you a straight answer, an honest scope, and a crew that knows how mold behaves in a Tampa home.',
    neighborhoods: ['South Tampa', 'Seminole Heights', 'Hyde Park', 'New Tampa', 'Westshore', 'Tampa Heights'],
    landmarks: ['Hillsborough River', 'Bayshore Boulevard', 'Ybor City', 'Tampa Riverwalk'],
    issues: [
      {
        title: 'Historic bungalows over crawl spaces',
        body: 'Seminole Heights, Hyde Park, and Tampa Heights are full of older homes built over crawl spaces, and in our humidity those spaces collect damp air that condenses on the joists and subfloor. The result is mold under the house and a musty smell rising into the living areas — a pattern we see constantly in Tampa’s historic districts.',
      },
      {
        title: 'AC condensation in tight newer homes',
        body: 'Newer South Tampa rebuilds and New Tampa subdivisions are sealed tight and run heavy AC, and an oversized or poorly set system cools fast without pulling out enough humidity. That leaves moisture around air handlers, returns, and ductwork — a quiet, year-round mold source that has nothing to do with a leak.',
      },
      {
        title: 'Storm and hurricane-season intrusion',
        body: 'Tampa’s summer storms and hurricane season drive wind-blown rain into windows, around flashing, and through roof damage. Water that sits even a day in our heat starts mold fast, so post-storm intrusion is one of the most common reasons we get called out.',
      },
    ],
    nearby: ['carrollwood', 'brandon', 'st-petersburg'],
    faqs: [
      {
        q: 'Do you cover all of Tampa?',
        a: 'Yes — South Tampa, Seminole Heights, Hyde Park, Tampa Heights, Westshore, New Tampa, and the surrounding Hillsborough County neighborhoods. If you are not sure you are in our area, call and ask; we very likely cover you.',
      },
      {
        q: 'My older Tampa home smells musty but I don’t see mold — why?',
        a: 'In the historic bungalow districts that smell usually comes from the crawl space, where humid air feeds mold on the framing under the house and rises into the rooms. You will not see it from inside. We inspect the crawl space and trace the moisture so we fix the source, not just the symptom.',
      },
      {
        q: 'Could my mold be coming from the air conditioning?',
        a: 'Often, yes, especially in tighter newer homes. An AC system that does not remove enough humidity leaves moisture around the handler, returns, and ducts that feeds mold without any roof or plumbing leak. We check the AC as a moisture source as part of the inspection.',
      },
    ],
  },
  {
    slug: 'st-petersburg',
    name: 'St. Petersburg',
    state: 'FL',
    intro:
      'St. Petersburg’s charm — the 1920s homes of the Old Northeast, the bungalows of Historic Kenwood, the waterfront neighborhoods along Tampa Bay — is also what makes it mold country. Many of these homes are old enough to sit over crawl spaces or to have had decades of roof and plumbing repairs layered on, and St. Pete’s position on a peninsula between the Gulf and the bay means humidity, salt air, and a high water table are constant. Add the flood-prone low-lying areas near the water and the city’s heavy summer rains, and moisture finds its way into walls, under floors, and into attics. We inspect, test, contain, remove, and repair residential mold across St. Petersburg — from the historic districts to the newer condos and the neighborhoods out toward Gandy and the interstate. We find the water source first, whether it is an old roof, a tired window, a slab that wicks moisture, or a crawl space breathing damp Gulf air, and we fix the cause so the mold does not return. Tell us what you are seeing or smelling and we will give you an honest, clear plan.',
    neighborhoods: ['Old Northeast', 'Historic Kenwood', 'Downtown', 'Gandy', 'Greater Pinellas Point', 'Snell Isle'],
    landmarks: ['Tampa Bay waterfront', 'Vinoy Park', 'Central Avenue', 'Gulfport line'],
    issues: [
      {
        title: 'Century-old homes in the historic districts',
        body: 'The Old Northeast and Kenwood are full of homes from the 1910s and 1920s — beautiful, but old enough for crawl spaces, layered roof repairs, and original window openings that let weather in. Decades of small moisture intrusions add up to hidden mold behind plaster and under floors that a quick look never finds.',
      },
      {
        title: 'Waterfront humidity and high water tables',
        body: 'On a peninsula between the Gulf and the bay, St. Pete homes deal with relentless humidity, salt air, and a high water table that keeps slabs and crawl spaces damp. The neighborhoods nearest the water feel it most, and that constant moisture is a steady fuel source for mold.',
      },
      {
        title: 'Flood-prone low-lying blocks',
        body: 'Low areas near the bay and the city’s flood zones take on water during heavy storms and surge, and anything that stays wet starts mold within a day or two in our heat. Post-flood drying done right is the difference between a clean recovery and a hidden problem in the walls.',
      },
    ],
    nearby: ['clearwater', 'largo', 'tampa'],
    faqs: [
      {
        q: 'Do you serve all of St. Petersburg?',
        a: 'Yes — the Old Northeast, Historic Kenwood, downtown, Snell Isle, Pinellas Point, the Gandy area, and the surrounding neighborhoods. Tell us where you are and we will confirm we cover you, which we very likely do.',
      },
      {
        q: 'My home flooded in a storm — do I automatically have mold?',
        a: 'Not automatically, but the clock starts fast. In St. Pete’s heat and humidity, materials that stay wet beyond a day or two begin to grow mold. The key is thorough drying and checking inside walls and under floors where water hides. We can inspect and confirm whether there is a problem before it spreads.',
      },
      {
        q: 'Is mold worse in the older waterfront homes here?',
        a: 'They are more prone to it — older construction, crawl spaces, layered repairs, and proximity to the water all add moisture exposure. It does not mean your home has a problem, but it does mean a musty smell or past leak is worth inspecting rather than ignoring.',
      },
    ],
  },
  {
    slug: 'clearwater',
    name: 'Clearwater',
    state: 'FL',
    intro:
      'Clearwater sits right on the Gulf in north Pinellas County, and the coastal setting that makes it beautiful also keeps its homes under constant moisture pressure. Salt air, Gulf humidity, and a high water table work on houses here year-round, from the beach properties on the barrier island to the established inland neighborhoods around Countryside and along US-19. Many Clearwater homes are slab-built from the mid-century building boom, with flat or low-slope roofs and AC systems carrying a heavy humidity load, and the older ones have had decades of roof and window repairs. We inspect, test, contain, remove, and repair residential mold throughout the Clearwater area. The patterns we see most are AC-driven condensation in tightly run homes, attic mold where ventilation cannot keep up with the heat and humidity, and intrusion from coastal storms and aging flat roofs. We trace the moisture first — the leak, the condensation, the ventilation gap — and fix the cause so the work lasts. Tell us where you are seeing or smelling mold, and we will give you a straight answer and an honest scope, not a fear-driven one.',
    neighborhoods: ['Countryside', 'Clearwater Beach', 'Sand Key', 'Morningside', 'Skycrest', 'Island Estates'],
    landmarks: ['Clearwater Beach', 'Lake Tarpon', 'US-19 corridor', 'Coachman Park'],
    issues: [
      {
        title: 'Coastal salt air and Gulf humidity',
        body: 'Right on the Gulf, Clearwater homes take constant humidity and salt air that keep surfaces and structures damp, especially on the beach and Sand Key. That relentless moisture load gives mold a steady foothold wherever ventilation or AC cannot keep up.',
      },
      {
        title: 'Flat and low-slope roofs that leak',
        body: 'A lot of Clearwater’s mid-century homes have flat or low-slope roofs that pond water and fail at the seams as they age. A slow roof leak feeds mold in the ceiling and attic long before a stain appears, which is why we trace intrusion back to the roof so often here.',
      },
      {
        title: 'Attic mold from overwhelmed ventilation',
        body: 'Pinellas attics get brutally hot and humid, and when soffit and ridge ventilation cannot move that air, moisture condenses on the roof sheathing and feeds mold across it. We see this throughout Clearwater’s inland neighborhoods, and the fix is as much about airflow as removal.',
      },
    ],
    nearby: ['largo', 'palm-harbor', 'st-petersburg'],
    faqs: [
      {
        q: 'Do you cover Clearwater and the beaches?',
        a: 'Yes — Countryside, Clearwater Beach, Sand Key, Island Estates, and the inland neighborhoods along US-19. Tell us where the property is and we will confirm; we cover the north Pinellas coast and inland communities.',
      },
      {
        q: 'Does living near the Gulf make mold more likely?',
        a: 'It raises the moisture load — coastal humidity and salt air keep homes damper than inland properties — so yes, beach and waterfront homes are more prone to it. Good AC, ventilation, and prompt attention to leaks make the difference. We can inspect and tell you where your home stands.',
      },
      {
        q: 'My flat roof had a leak — should I check for mold even after it’s repaired?',
        a: 'Yes. A flat-roof leak often feeds mold in the attic and ceiling for a while before it shows, and repairing the roof does not remove what already grew. It is worth inspecting the attic and ceiling cavity so anything that started gets cleaned and dried.',
      },
    ],
  },
  {
    slug: 'brandon',
    name: 'Brandon',
    state: 'FL',
    intro:
      'Brandon is the heart of suburban east Hillsborough County, a sprawl of subdivisions from the 1980s boom out through the newer communities around Bloomingdale and Lithia. Most homes here are slab-built with the tight, AC-dependent construction typical of Florida suburbs, and that is exactly where we see mold the most — not from dramatic floods, but from the quiet, everyday moisture that builds up in a sealed Florida house. We inspect, test, contain, remove, and repair residential mold throughout the Brandon area. The common culprits are AC systems that cool without dehumidifying well enough, slow plumbing leaks under sinks and behind walls, water heaters and washing-machine lines that let go, and attics where ventilation cannot keep up with the summer heat. Add the heavy afternoon storms and the occasional hurricane that drives water through a window or roof, and even a newer Brandon home can develop a mold problem behind a wall without anyone noticing until the smell appears. We find the moisture source first and fix the cause. Tell us where you are seeing or smelling it, and we will give you an honest answer and a clear plan.',
    neighborhoods: ['Bloomingdale', 'Lithia', 'Brandon Valrico line', 'Limona', 'Provence', 'FishHawk edge'],
    landmarks: ['Alafia River', 'Westfield Brandon', 'Bloomingdale corridor', 'Lithia Springs'],
    issues: [
      {
        title: 'AC humidity in sealed suburban homes',
        body: 'Brandon’s slab subdivisions are built tight and lean hard on AC, and a system that cools quickly without removing enough humidity leaves moisture around handlers, ducts, and interior walls. It is the most common mold source we find here, and it runs year-round regardless of any leak.',
      },
      {
        title: 'Hidden plumbing and appliance leaks',
        body: 'Slow drips under kitchen and bath sinks, failing water-heater pans, and washing-machine and ice-maker lines let go quietly behind walls and cabinets. In a warm slab home that hidden moisture feeds mold for weeks before you notice — and the inside of the wall is where we usually find it.',
      },
      {
        title: 'Storm intrusion through windows and roofs',
        body: 'Brandon’s heavy summer storms and the occasional hurricane push wind-driven rain past windows and damaged shingles. Water that sits even briefly in our climate starts mold, so post-storm intrusion brings us out to a lot of otherwise newer homes here.',
      },
    ],
    nearby: ['riverview', 'valrico', 'tampa'],
    faqs: [
      {
        q: 'Do you serve Brandon and the surrounding area?',
        a: 'Yes — Brandon, Bloomingdale, Lithia, Limona, and the Valrico and FishHawk edges. Tell us where the home is and we will confirm; we cover east Hillsborough County broadly.',
      },
      {
        q: 'My Brandon home is fairly new — can it still have mold?',
        a: 'Absolutely. Newer Florida homes are sealed tight and depend on AC, and an undersized moisture-removal setup or a small hidden leak can grow mold behind a wall in a newer house just as easily as an old one. Age is not protection here; moisture is the deciding factor.',
      },
      {
        q: 'I found a leak under my sink — should I worry about mold?',
        a: 'If it was dripping for a while, it is worth a look. Cabinets and the wall behind them trap moisture and hide mold from view. We can check the cabinet base, the wall cavity, and the flooring, and tell you whether it is a quick clean-up or something that needs proper removal.',
      },
    ],
  },
  {
    slug: 'riverview',
    name: 'Riverview',
    state: 'FL',
    intro:
      'Riverview is one of the fastest-growing communities in the Tampa Bay area, a wave of new subdivisions spreading south of Brandon along the Alafia River and US-301. Most of the housing stock is recent — slab-built, sealed tight, and entirely dependent on air conditioning — which surprises a lot of homeowners who assume a newer home is safe from mold. It is not. We inspect, test, contain, remove, and repair residential mold throughout Riverview. In new construction the problems we see are AC systems that cool faster than they dehumidify, leaving moisture in tight wall cavities; builder-grade plumbing and appliance connections that fail and leak behind walls; and homes built on land with drainage and water-table issues that put moisture under and around the slab. Layer on the area’s heavy summer rains and storm season, and a three-year-old Riverview home can absolutely grow mold behind a wall or in the attic. We trace the moisture source and fix the cause rather than just cleaning the surface. Tell us where you are seeing or smelling mold, and we will give you a straight answer and an honest scope.',
    neighborhoods: ['Boyette', 'Summerfield', 'Panther Trace', 'Rivercrest', 'South Fork', 'Triple Creek'],
    landmarks: ['Alafia River', 'US-301 corridor', 'Riverview Civic Center', 'Bell Creek'],
    issues: [
      {
        title: 'New construction that traps humidity',
        body: 'Riverview’s newer subdivisions are sealed tight and rely entirely on AC, and when a system cools quickly without removing enough humidity, moisture lingers in wall cavities and around ductwork. Homeowners are often shocked to find mold in a home only a few years old — but tight + humid + under-dehumidified is exactly the recipe.',
      },
      {
        title: 'Builder-grade leaks behind walls',
        body: 'Production homes go up fast, and supply lines, shower pans, and appliance connections sometimes fail early. A slow leak behind a wall or under a tub feeds mold quietly in a warm slab home, and the first sign is usually a smell, not a stain.',
      },
      {
        title: 'Drainage and water-table issues',
        body: 'A lot of Riverview was built on low, flat land near the Alafia, and poor lot drainage or a high water table keeps moisture around the slab and foundation. That dampness works its way into the home and feeds mold along baseboards and lower walls.',
      },
    ],
    nearby: ['brandon', 'valrico', 'tampa'],
    faqs: [
      {
        q: 'Do you cover Riverview’s new subdivisions?',
        a: 'Yes — Boyette, Summerfield, Panther Trace, Rivercrest, South Fork, Triple Creek, and the newer communities along US-301. Tell us your neighborhood and we will confirm; we cover the Riverview and south-Hillsborough growth corridor.',
      },
      {
        q: 'Why would a brand-new Riverview home have mold?',
        a: 'Because new does not mean dry. Tightly sealed homes that depend on AC can hold humidity if the system does not dehumidify well, and builder-grade plumbing occasionally leaks early. Both feed mold in a warm slab house regardless of the home’s age. It is more common in new construction than people expect.',
      },
      {
        q: 'My house is only a few years old and smells musty — is that normal?',
        a: 'A persistent musty smell is never something to just live with, new home or not. It usually means moisture is sitting somewhere — in the AC system, a wall cavity, or around the slab — and feeding mold out of sight. An inspection traces the source so it can be fixed before it spreads.',
      },
    ],
  },
  {
    slug: 'wesley-chapel',
    name: 'Wesley Chapel',
    state: 'FL',
    intro:
      'Wesley Chapel, just north of Tampa in Pasco County, has gone from rural land to one of the region’s biggest master-planned boomtowns in barely two decades. Communities like Seven Oaks, Meadow Pointe, and Epperson are almost entirely new construction — slab homes, sealed tight, fully reliant on air conditioning — and that profile carries the same hidden mold risks we see across the area’s new builds. We inspect, test, contain, remove, and repair residential mold throughout Wesley Chapel. The issues here mirror the rest of the new-construction corridor: AC systems that cool faster than they dehumidify and leave moisture in the walls; early failures in builder-grade plumbing and appliance lines; and homes on land where drainage and a high water table keep the ground damp. Pasco’s heavy summer storms and the reach of hurricane season add intrusion through windows and roofs to the mix. We always start with the moisture — find the leak, the condensation, or the ventilation gap — and fix the cause so the mold does not come back behind fresh paint. Tell us what you are seeing or smelling and we will give you an honest, clear plan.',
    neighborhoods: ['Seven Oaks', 'Meadow Pointe', 'Epperson', 'Wiregrass Ranch', 'New River', 'Quail Hollow'],
    landmarks: ['Cypress Creek', 'The Shops at Wiregrass', 'Epperson Lagoon', 'I-75 corridor'],
    issues: [
      {
        title: 'Master-planned homes that hold humidity',
        body: 'Wesley Chapel’s newer communities are built tight and run on AC, and a system that does not pull out enough humidity leaves moisture in wall cavities and around ducts. That under-the-radar dampness is the leading mold source in these homes — no dramatic leak required.',
      },
      {
        title: 'Early plumbing and appliance failures',
        body: 'Fast-built production homes sometimes see supply lines, shower pans, or appliance connections fail within the first few years. A quiet leak behind a wall feeds mold in a warm slab home, and most owners do not notice until there is a smell.',
      },
      {
        title: 'High water table on former ranch land',
        body: 'Much of Wesley Chapel was low, flat ranch and wetland-adjacent ground, and a high water table or poor lot drainage keeps moisture around the slab. That dampness migrates into the home and feeds mold along lower walls and baseboards.',
      },
    ],
    nearby: ['lutz', 'carrollwood', 'tampa'],
    faqs: [
      {
        q: 'Do you serve Wesley Chapel and the Pasco communities?',
        a: 'Yes — Seven Oaks, Meadow Pointe, Epperson, Wiregrass Ranch, New River, and the surrounding Wesley Chapel area. Tell us your community and we will confirm; we cover the I-75 growth corridor into Pasco.',
      },
      {
        q: 'Our home is new — why does it smell musty when the AC runs?',
        a: 'That is a classic sign the AC is cooling without removing enough humidity, leaving moisture around the handler and ducts that feeds mold. It is common in tight new homes. We check the AC and ductwork as a moisture source and find where it is growing.',
      },
      {
        q: 'Is mold a real risk in a master-planned community this new?',
        a: 'Yes. The very things that define these homes — tight construction, heavy AC reliance, fast builds on damp land — are what create hidden moisture. New communities are not immune; if anything, the mold we find there is more often missed because owners assume a new home is safe.',
      },
    ],
  },
  {
    slug: 'carrollwood',
    name: 'Carrollwood',
    state: 'FL',
    intro:
      'Carrollwood is one of Tampa’s established North Hillsborough suburbs, built largely through the 1970s and 80s around the lakes of Original Carrollwood and the sprawl of Carrollwood Village. The homes here have aged into the window where mold problems surface: roofs, windows, and plumbing that are decades old, mature trees shading and dropping debris on roofs, and AC systems on their second or third replacement. We inspect, test, contain, remove, and repair residential mold throughout the Carrollwood area. The patterns are those of established Florida suburbs — aging roofs and flashing that begin to leak, original or first-replacement plumbing that fails behind walls, attics where the ventilation was never quite enough for our heat, and AC condensation in homes closed up tight against the humidity. Several neighborhoods sit around lakes, where the extra ambient moisture adds to the load. We trace the water source first, whether it is a tired roof, a hidden leak, or an attic that cannot breathe, and we fix the cause so the work holds. Tell us where you are seeing or smelling mold and we will give you a straight, honest answer.',
    neighborhoods: ['Original Carrollwood', 'Carrollwood Village', 'Lake Carroll', 'Northdale', 'Gaither', 'Lake Magdalene edge'],
    landmarks: ['Lake Carroll', 'Lake Magdalene', 'Dale Mabry corridor', 'Carrollwood Village Park'],
    issues: [
      {
        title: 'Aging roofs and plumbing',
        body: 'Carrollwood’s 1970s and 80s homes are at the age where roofs, flashing, and original plumbing start to fail. A tired roof or a leak inside a wall feeds mold well before it is obvious, and we trace a lot of Carrollwood mold back to systems that have simply reached the end of their life.',
      },
      {
        title: 'Lakeside humidity',
        body: 'Neighborhoods around Lake Carroll and Lake Magdalene carry extra ambient moisture, and homes near the water feel the humidity load more. Combined with mature tree cover that keeps roofs damp and shaded, it gives mold more chances to take hold.',
      },
      {
        title: 'Attics that never had enough ventilation',
        body: 'Many older Carrollwood homes were built with marginal attic ventilation for our climate, and as roofs and insulation age the attic stays hot and humid. That moisture condenses on the sheathing and feeds mold, which is why attic remediation here is as much about airflow as cleanup.',
      },
    ],
    nearby: ['lutz', 'tampa', 'wesley-chapel'],
    faqs: [
      {
        q: 'Do you cover Carrollwood and Northdale?',
        a: 'Yes — Original Carrollwood, Carrollwood Village, the Lake Carroll and Lake Magdalene areas, Northdale, and the surrounding North Tampa neighborhoods. Tell us where you are and we will confirm.',
      },
      {
        q: 'My Carrollwood home is from the 80s — what should I watch for?',
        a: 'At that age, keep an eye on the roof and flashing, original or first-replacement plumbing, and the attic. Those are where moisture tends to start in homes this vintage. A musty smell, a ceiling stain, or a roof nearing the end of its life are all good reasons to inspect.',
      },
      {
        q: 'Does being near a lake make mold more likely?',
        a: 'It adds to the humidity load, so homes right around Lake Carroll or Lake Magdalene tend to run a bit damper. It is not a guarantee of trouble, but it is one more reason to stay on top of ventilation, AC, and any leaks before they feed mold.',
      },
    ],
  },
  {
    slug: 'lutz',
    name: 'Lutz',
    state: 'FL',
    intro:
      'Lutz straddles the Hillsborough–Pasco line north of Tampa, a mix of established lake neighborhoods, larger semi-rural lots, and newer subdivisions filling in the open land. It is a greener, lower-density area than the suburbs to the south, dotted with lakes and wetlands, and that abundant water is part of the mold picture here. We inspect, test, contain, remove, and repair residential mold throughout the Lutz area. The homes range widely — older lake houses and ranch homes on big lots, plus newer slab construction — so we see the full spread of problems: aging roofs and plumbing on the older properties, AC condensation and builder-grade leaks in the new ones, and across all of it the extra ambient humidity that comes with so many lakes and low, wet ground. High water tables on the larger lots keep crawl spaces and slabs damp, and the area’s heavy storms drive intrusion like anywhere in Tampa Bay. We start with the moisture source and fix the cause so the mold does not return. Tell us where you are seeing or smelling it, and we will give you an honest answer and a clear, realistic scope.',
    neighborhoods: ['Lake Fern', 'Sunset Lakes', 'Calusa Trace', 'Van Dyke', 'Cheval edge', 'Willow Lake'],
    landmarks: ['Lake Park', 'Dale Mabry Highway', 'Van Dyke Road', 'numerous Lutz lakes'],
    issues: [
      {
        title: 'Lakes, wetlands, and high humidity',
        body: 'Lutz is full of lakes and low, wet ground, and all that water raises the ambient humidity around homes here. The extra moisture load gives mold more opportunity wherever a roof, AC, or ventilation gap lets dampness linger.',
      },
      {
        title: 'High water tables on larger lots',
        body: 'The bigger semi-rural lots in Lutz often sit over high water tables, which keeps slabs damp and any crawl space humid. That ground moisture works its way into homes and feeds mold along lower walls and under floors.',
      },
      {
        title: 'A wide mix of home ages',
        body: 'Lutz blends decades-old lake and ranch homes with brand-new subdivisions, so we see both ends of the moisture spectrum — aging roofs and plumbing on the older places, AC humidity and early builder leaks on the newer ones. The right approach depends on which you have, and we tailor it.',
      },
    ],
    nearby: ['wesley-chapel', 'carrollwood', 'tampa'],
    faqs: [
      {
        q: 'Do you serve Lutz and the Pasco-line communities?',
        a: 'Yes — Lake Fern, Sunset Lakes, Calusa Trace, the Van Dyke corridor, and the surrounding Lutz lake neighborhoods on both the Hillsborough and Pasco sides. Tell us where the property is and we will confirm.',
      },
      {
        q: 'My Lutz home is on a big lot near a lake — does that raise mold risk?',
        a: 'It can. Lakes, wetlands, and high water tables all add ambient and ground moisture, which keeps homes damper and gives mold more chances. Good drainage, ventilation, and AC keep it in check. If you have noticed a musty smell or damp areas, it is worth inspecting.',
      },
      {
        q: 'I have an older home with a crawl space here — what should I check?',
        a: 'Crawl spaces in our humidity, especially on damp Lutz lots, are prime mold territory. Check for a musty smell in the rooms above, damp framing, and a missing or torn vapor barrier on the ground. We can inspect the crawl space and address both the mold and the moisture keeping it there.',
      },
    ],
  },
  {
    slug: 'largo',
    name: 'Largo',
    state: 'FL',
    intro:
      'Largo sits in the middle of the Pinellas peninsula between Clearwater and St. Petersburg, one of the most densely built parts of the Tampa Bay area. Its housing is largely mid-century — slab homes and older bungalows from the postwar boom, many with flat or low-slope roofs and decades of repairs behind them. Wedged between the Gulf and the bay, Largo gets the full coastal humidity and high water table of the peninsula. We inspect, test, contain, remove, and repair residential mold throughout the Largo area. The recurring problems are aging flat roofs that leak slowly into ceilings and attics, older plumbing failing behind walls, and AC systems straining against the humidity in tightly closed homes. The dense, older housing stock means a lot of homes have layered repairs and hidden past leaks that quietly fed mold. We find the moisture source first — the roof, the pipe, the condensation — and correct it so the remediation actually holds. Tell us where you are seeing or smelling mold, and we will give you a straight, honest answer and a scope that fits the real problem, not the worst-case one.',
    neighborhoods: ['East Bay', 'Belleair edge', 'Ridgecrest', 'Largo Central', 'Harbor Bluffs edge', 'Seminole line'],
    landmarks: ['Largo Central Park', 'Pinellas Trail', 'Ulmerton Road', 'Taylor Lake'],
    issues: [
      {
        title: 'Aging flat and low-slope roofs',
        body: 'Largo’s mid-century homes often have flat or low-slope roofs that pond water and fail at the seams over time. A slow roof leak feeds mold in the ceiling and attic long before it stains, and it is one of the most common sources we trace in Largo homes.',
      },
      {
        title: 'Peninsula humidity and high water table',
        body: 'Sitting between the Gulf and the bay, Largo carries the peninsula’s constant humidity and a high water table that keeps slabs and lower walls damp. That steady moisture is a reliable fuel source for mold wherever ventilation or AC falls short.',
      },
      {
        title: 'Older plumbing in dense housing',
        body: 'Much of Largo’s housing is old enough that original or first-replacement plumbing is failing, often behind walls and under slabs. A hidden leak in a warm, humid home feeds mold quietly, and the tight, older housing stock means these problems are common.',
      },
    ],
    nearby: ['clearwater', 'st-petersburg', 'palm-harbor'],
    faqs: [
      {
        q: 'Do you cover Largo and mid-Pinellas?',
        a: 'Yes — Largo Central, East Bay, Ridgecrest, and out toward the Belleair, Seminole, and Clearwater edges. Tell us where the home is and we will confirm; we cover the mid-Pinellas communities broadly.',
      },
      {
        q: 'My ceiling has a stain — is it mold?',
        a: 'A ceiling stain usually means water got in, most often from a roof or an upstairs leak, and where water sits, mold often follows in our climate. We can check the attic and the ceiling cavity above the stain to see whether mold has started and trace the leak feeding it.',
      },
      {
        q: 'Are older Largo homes more prone to mold?',
        a: 'They tend to be — aging flat roofs, older plumbing, and decades of layered repairs all add moisture exposure, and the peninsula humidity adds to it. It does not mean a problem is present, but a musty smell or a past leak in an older Largo home is worth inspecting.',
      },
    ],
  },
  {
    slug: 'palm-harbor',
    name: 'Palm Harbor',
    state: 'FL',
    intro:
      'Palm Harbor sits on the north Pinellas coast above Clearwater, a mix of established neighborhoods, golf and lake communities around Lake Tarpon, and homes close to the Gulf. The coastal and lakeside setting that makes it desirable also keeps the humidity high, and the housing — a blend of 1970s–90s homes and newer builds — covers the full range of mold-related issues we handle. We inspect, test, contain, remove, and repair residential mold throughout the Palm Harbor area. Near the Gulf and around Lake Tarpon, the extra ambient moisture and high water table add to the load on every home. The older neighborhoods bring aging roofs, flashing, and plumbing that begin to leak; the newer ones bring tight, AC-dependent construction where humidity lingers in the walls. Across all of it, attics struggle against north Pinellas heat and storms drive intrusion through windows and roofs. We trace the moisture source first and fix the cause so the mold does not return. Tell us where you are seeing or smelling it, and we will give you a straight answer and an honest scope built around the real problem.',
    neighborhoods: ['Lake Tarpon', 'Ozona', 'Crystal Beach', 'Highland Lakes', 'Ridgemoor', 'Innisbrook edge'],
    landmarks: ['Lake Tarpon', 'Honeymoon Island', 'Pinellas Trail', 'Innisbrook Resort'],
    issues: [
      {
        title: 'Gulf and lakeside humidity',
        body: 'Between the Gulf shoreline and Lake Tarpon, Palm Harbor homes carry a heavy ambient moisture load. Coastal and lakeside properties run damper, and that constant humidity gives mold a steady foothold wherever AC or ventilation cannot keep up.',
      },
      {
        title: 'Aging roofs and plumbing in established homes',
        body: 'Palm Harbor’s 1970s–90s neighborhoods are at the age where roofs, flashing, and plumbing start to fail. A tired roof or a hidden leak feeds mold before it is visible, and we trace a lot of Palm Harbor mold to systems reaching the end of their service life.',
      },
      {
        title: 'High water table near the water',
        body: 'Homes near the Gulf and Lake Tarpon often sit over a high water table that keeps slabs and crawl spaces damp. That ground moisture migrates into the home and feeds mold along lower walls, especially when paired with the area’s humidity.',
      },
    ],
    nearby: ['clearwater', 'largo', 'tampa'],
    faqs: [
      {
        q: 'Do you serve Palm Harbor and the Lake Tarpon area?',
        a: 'Yes — the Lake Tarpon communities, Ozona, Crystal Beach, Highland Lakes, Ridgemoor, and the surrounding north Pinellas neighborhoods. Tell us where the property is and we will confirm.',
      },
      {
        q: 'Does a home near Lake Tarpon or the Gulf need extra attention?',
        a: 'It runs a higher moisture load, so yes, waterfront and lakeside homes are more prone to mold. Staying ahead of roof, AC, and ventilation issues keeps it in check. If you have noticed a musty smell or damp spots, an inspection is the way to know where you stand.',
      },
      {
        q: 'My established Palm Harbor home has an older roof — should I check the attic?',
        a: 'Yes. An aging roof or worn flashing can leak slowly into the attic and feed mold on the sheathing before any stain appears inside. We can inspect the attic, check ventilation, and trace any leak so it gets handled before it spreads.',
      },
    ],
  },
  {
    slug: 'valrico',
    name: 'Valrico',
    state: 'FL',
    intro:
      'Valrico is a suburban community in east Hillsborough County, just past Brandon, blending established neighborhoods like Bloomingdale with newer subdivisions on what used to be farm and ranch land. The homes are predominantly slab-built and AC-dependent, and like the rest of the east-county suburbs, that is where the everyday moisture problems that feed mold tend to hide. We inspect, test, contain, remove, and repair residential mold throughout the Valrico area. The issues we see most are AC systems that cool without dehumidifying enough, leaving moisture in walls and around ducts; slow plumbing and appliance leaks behind walls and under cabinets; and attics where ventilation cannot keep pace with the Florida heat. The newer subdivisions add builder-grade plumbing that occasionally fails early, and the heavy summer storms drive intrusion through windows and roofs across the board. We find the moisture source first and correct it so the mold does not grow back behind fresh drywall. Tell us where you are seeing or smelling it, and we will give you a straight answer and an honest, realistic scope — not a fear-driven one.',
    neighborhoods: ['Bloomingdale', 'River Hills', 'Diamond Hill', 'Twin Lakes', 'Buckhorn', 'Copper Ridge'],
    landmarks: ['Bloomingdale Golfers Club', 'Lithia Springs', 'Alafia River', 'SR-60 corridor'],
    issues: [
      {
        title: 'AC humidity in slab subdivisions',
        body: 'Valrico’s slab homes run tight and lean on AC, and a system that cools faster than it dehumidifies leaves moisture around handlers, ducts, and interior walls. It is the most common mold source in these suburban homes and runs year-round without any leak.',
      },
      {
        title: 'Hidden leaks behind walls and cabinets',
        body: 'Slow drips under sinks, failing water-heater pans, and appliance lines let go quietly behind walls and cabinetry. In a warm slab home that hidden moisture feeds mold for weeks before anyone notices, and the wall cavity is usually where we find it.',
      },
      {
        title: 'Storm intrusion in a mix of home ages',
        body: 'From the established Bloomingdale homes to the newer subdivisions, Valrico’s heavy storms push wind-driven rain past windows and damaged roofs. Water that sits even briefly in our heat starts mold, so post-storm intrusion is a frequent call here.',
      },
    ],
    nearby: ['brandon', 'riverview', 'plant-city'],
    faqs: [
      {
        q: 'Do you cover Valrico and Bloomingdale?',
        a: 'Yes — Bloomingdale, River Hills, Diamond Hill, Buckhorn, Twin Lakes, and the surrounding Valrico neighborhoods. Tell us where the home is and we will confirm; we cover east Hillsborough County broadly.',
      },
      {
        q: 'How do I know if a leak left mold behind the wall?',
        a: 'You often cannot see it — the inside of the wall and the cavity behind a cabinet hide it. Signs are a musty smell, warped baseboards or trim, or discoloration bleeding through paint. We use moisture meters to check the wall and tell you whether it needs proper removal.',
      },
      {
        q: 'Can my AC really cause a mold problem?',
        a: 'Yes, and it is common in Valrico’s tight slab homes. An AC system that cools quickly without removing enough humidity leaves moisture around the air handler, returns, and ducts that feeds mold with no roof or plumbing leak involved. We check the AC as a moisture source during the inspection.',
      },
    ],
  },
  {
    slug: 'plant-city',
    name: 'Plant City',
    state: 'FL',
    intro:
      'Plant City sits at the eastern edge of Hillsborough County, the agricultural heart of the region — strawberry country — where older farm and town homes mix with newer subdivisions spreading out from the historic downtown. The housing is a real blend: century-old homes around the historic district, decades-old farmhouses on rural lots, and modern slab construction in the growing communities. We inspect, test, contain, remove, and repair residential mold throughout the Plant City area. The older homes bring crawl spaces, aging roofs, and original plumbing that begin to fail and feed mold; the rural properties add high water tables and damp ground; and the newer subdivisions carry the same tight, AC-dependent profile that hides moisture in the walls. Plant City’s low-lying areas are prone to flooding in heavy storms, and anything that stays wet in our heat starts mold fast. We trace the moisture source first — a leak, a crawl space, a flood that was not fully dried — and fix the cause so it does not return. Tell us where you are seeing or smelling it, and we will give you an honest answer and a clear plan.',
    neighborhoods: ['Historic Downtown', 'Walden Lake', 'Midway', 'Cork', 'Trapnell', 'Turkey Creek edge'],
    landmarks: ['Historic Downtown Plant City', 'Walden Lake', 'strawberry fields', 'I-4 corridor'],
    issues: [
      {
        title: 'Older homes with crawl spaces',
        body: 'Plant City’s historic district and older farmhouses include many homes over crawl spaces, and in our humidity those spaces collect damp air that feeds mold on the framing and subfloor. The result is a musty smell rising into the home from below — a pattern we see often in the older parts of town.',
      },
      {
        title: 'Rural lots and high water tables',
        body: 'The farm and ranch properties around Plant City often sit on low, damp ground with high water tables that keep crawl spaces and slabs moist. That steady ground moisture is a reliable mold source on rural homes here, especially the older ones.',
      },
      {
        title: 'Flood-prone low areas',
        body: 'Plant City’s low-lying areas take on water in heavy storms, and materials that stay wet in our heat start mold within a day or two. Thorough drying after a flood — including inside walls and under floors — is what prevents a hidden problem down the road.',
      },
    ],
    nearby: ['valrico', 'brandon', 'riverview'],
    faqs: [
      {
        q: 'Do you serve Plant City and the rural east county?',
        a: 'Yes — the historic downtown, Walden Lake, Midway, Cork, Trapnell, and the surrounding farm and rural communities. Tell us where the property is and how the access looks and we will confirm; we cover east Hillsborough County out to the Polk line.',
      },
      {
        q: 'My older Plant City home smells musty under the floors — what is that?',
        a: 'In a home over a crawl space, that smell almost always comes from below, where humid air feeds mold on the framing and subfloor and rises into the rooms. Cleaning upstairs will not touch it. We inspect the crawl space, remove the mold, and address the moisture keeping it damp.',
      },
      {
        q: 'My property flooded — how soon should I have it checked?',
        a: 'Soon. In Plant City’s heat and humidity, materials that stay wet beyond a day or two begin to grow mold, and water hides inside walls and under floors. The faster we inspect and confirm proper drying, the better the chance of a clean recovery without a hidden problem later.',
      },
    ],
  },
];

export const getCity = (slug: string): City | undefined => CITIES.find((c) => c.slug === slug);

export const nearbyCities = (city: City): City[] =>
  city.nearby.map(getCity).filter((c): c is City => Boolean(c));
