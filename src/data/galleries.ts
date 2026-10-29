export type Photo = {
  file: string;
  width: number;
  height: number;
  alt: string;
};

export type Gallery = {
  slug: string;
  title: string;
  nav: string;
  intro: string;
  description: string;
  photos: Photo[];
};

/** Curated stills. Add a JPEG under public/photos/<folder>/ and an entry here. */
export const galleries: Gallery[] = [
  {
    slug: "indian-weddings",
    title: "Indian Weddings",
    nav: "Indian Weddings",
    intro:
      "Ceremony, color, and the long day around them — from pellikuthuru through the reception.",
    description:
      "Indian wedding photography by Karthik Vepuri: ceremony, temple portraits, and reception dances.",
    photos: [
      {
        file: "indian-weddings/indian-09.jpg",
        width: 2000,
        height: 1335,
        alt: "Family gathered close around a bride in gold as jewelry is adjusted during an Indian wedding.",
      },
      {
        file: "indian-weddings/indian-11.jpg",
        width: 1333,
        height: 2000,
        alt: "Groom in a blush sherwani and turban stands before a carved stone temple.",
      },
      {
        file: "indian-weddings/indian-07.jpg",
        width: 1331,
        height: 2000,
        alt: "Bride in a pink and gold lehenga holds a small ceremonial lamp, smiling at the camera.",
      },
      {
        file: "indian-weddings/indian-01.jpg",
        width: 2000,
        height: 2000,
        alt: "Bride in a green and cream silk saree, photographed against a wall of red flowers.",
      },
      {
        file: "indian-weddings/indian-12.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride in a purple and gold lehenga looks aside, with a temple tower behind her.",
      },
      {
        file: "indian-weddings/indian-02.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple embracing at the base of a tall stone capitol tower under a pink dusk sky.",
      },
      {
        file: "indian-weddings/indian-13.jpg",
        width: 2000,
        height: 1333,
        alt: "Couple dancing on a reception stage, he in white and gold and she in a red saree.",
      },
      {
        file: "indian-weddings/indian-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride in red and gold looks down while women in white and gold stand close around her.",
      },
      {
        file: "indian-weddings/indian-05.jpg",
        width: 2000,
        height: 1333,
        alt: "Groom in a cream and gold outfit is showered with flowers during a wedding ritual.",
      },
      {
        file: "indian-weddings/indian-08.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride looks up through a crowd, a sweep of yellow fabric in the foreground.",
      },
      {
        file: "indian-weddings/indian-10.jpg",
        width: 2000,
        height: 1334,
        alt: "Couple outdoors, she resting her head on his shoulder, both in cream and red wedding clothes.",
      },
      {
        file: "indian-weddings/v1-manasa-rohan-ceremony-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride and groom seated during an Indian wedding ceremony, with family in bright silk sarees standing close around them.",
      },
      {
        file: "indian-weddings/v1-manasa-rohan-ceremony-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Close view of a bride’s pink and gold saree, jeweled blouse, and a monogram pendant at the back.",
      },
      {
        file: "indian-weddings/v1-manasa-rohan-mangalasnanam-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Family gathered in front of red and yellow drapes during a mangalasnanam celebration.",
      },
      {
        file: "indian-weddings/v1-manasa-rohan-pellikuthuru-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Two women in green and yellow silk sarees pose before a flower-garland backdrop at a pellikuthuru.",
      },
      {
        file: "indian-weddings/v1-manasa-rohan-reception-04.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple at a wedding reception, she in a red and gold lehenga and he in a white suit, against a wall of white flowers.",
      },
    ],
  },
  {
    slug: "american-weddings",
    title: "American Weddings",
    nav: "American Weddings",
    intro:
      "Outdoor ceremonies, a windmill, a sunset walk, and the wedding party.",
    description:
      "American wedding photography by Karthik Vepuri: outdoor ceremonies, portraits, and receptions.",
    photos: [
      {
        file: "american-weddings/american-05.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride and groom walk hand in hand into a sunset, silhouetted on a country road.",
      },
      {
        file: "american-weddings/american-04.jpg",
        width: 1333,
        height: 2000,
        alt: "Bride and groom kiss beneath a windmill, her gown spilling across the grass.",
      },
      {
        file: "american-weddings/american-09.jpg",
        width: 1333,
        height: 2000,
        alt: "Bride and groom kiss under a white garden arch, he in a pink shirt and suspenders.",
      },
      {
        file: "american-weddings/american-07.jpg",
        width: 1333,
        height: 2000,
        alt: "Groom dips his bride beside a sunlit barn, her turquoise dress caught in the light.",
      },
      {
        file: "american-weddings/american-06.jpg",
        width: 2000,
        height: 1333,
        alt: "Wedding party in mint dresses and white shirts poses in front of a red barn and sunflowers.",
      },
      {
        file: "american-weddings/american-16.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride and groom stand with their wedding party during an outdoor ceremony.",
      },
      {
        file: "american-weddings/american-13.jpg",
        width: 2000,
        height: 1333,
        alt: "Bridesmaids in turquoise dresses line up with sunflowers at an outdoor reception.",
      },
      {
        file: "american-weddings/american-11.jpg",
        width: 1333,
        height: 2000,
        alt: "Young girl in white holds sunflowers and a chalkboard sign, with bridesmaids in turquoise behind her.",
      },
      {
        file: "american-weddings/american-02.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride seen from behind stands with groomsmen in white shirts and green vests.",
      },
      {
        file: "american-weddings/american-01.jpg",
        width: 1999,
        height: 1125,
        alt: "Man in a dark shirt gestures on a dance floor washed in magenta light.",
      },
      {
        file: "american-weddings/american-15.jpg",
        width: 2000,
        height: 1333,
        alt: "Black-and-white portrait of a couple in profile, he in a dark hat, with guests soft behind them.",
      },
      {
        file: "american-weddings/v1-wedding-scott-jiana-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride and groom stand with an officiant under a white garden gazebo during an outdoor ceremony.",
      },
      {
        file: "american-weddings/v1-scott-jiana-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Two women in white and sage gowns hold a bouquet in front of a large bison statue.",
      },
      {
        file: "american-weddings/v1-wedding-scott-jiana-02.jpg",
        width: 2000,
        height: 1333,
        alt: "White chairs and a garden aisle lead toward a gazebo set for an outdoor wedding ceremony.",
      },
      {
        file: "american-weddings/v1-wedding-scott-jiana-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Groom and groomsmen in white shirts, floral ties, and jeans stand in a line on a lawn.",
      },
    ],
  },
  {
    slug: "maternity",
    title: "Maternity",
    nav: "Maternity",
    intro:
      "Winter light, a growing family, and the quiet before a new arrival.",
    description:
      "Maternity photography by Karthik Vepuri: snow portraits and family sessions in Lincoln, Nebraska.",
    photos: [
      {
        file: "maternity/maternity-hasitha-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Pregnant woman in a flowing champagne gown stands in a snowy evergreen path at golden hour, hands resting on her belly.",
      },
      {
        file: "maternity/maternity-hasitha-02.jpg",
        width: 1333,
        height: 2000,
        alt: "Pregnant woman in a champagne gown stands among snowy evergreens, one hand on her belly.",
      },
      {
        file: "maternity/maternity-hasitha-with-son-tracks.jpg",
        width: 1333,
        height: 2000,
        alt: "Pregnant woman and her son hold hands on railroad tracks beside a station platform.",
      },
      {
        file: "maternity/maternity-roses-proposal.jpg",
        width: 1333,
        height: 2000,
        alt: "Man kneels with a bouquet of roses before a woman in a purple dress.",
      },
      {
        file: "maternity/maternity-heart-hands-purple.jpg",
        width: 2000,
        height: 1333,
        alt: "Expecting mother's hands form a heart over her belly in a purple dress.",
      },
      {
        file: "maternity/maternity-baby-shoes-sneakers.jpg",
        width: 2000,
        height: 1333,
        alt: "Tiny baby shoes set between the parents' sneakers in warm golden light.",
      },
      {
        file: "maternity/maternity-purple-dress-porch.jpg",
        width: 1333,
        height: 2000,
        alt: "Smiling expecting mother in a purple dress on a white porch, one hand on her belly.",
      },
      {
        file: "maternity/maternity-sunflower-belly-lace.jpg",
        width: 1333,
        height: 2000,
        alt: "A sunflower held against a pregnant belly in a magenta lace dress.",
      },
      {
        file: "maternity/maternity-magenta-dress-road.jpg",
        width: 2000,
        height: 1333,
        alt: "Expecting mother in a long magenta dress stands on an open road.",
      },
      {
        file: "maternity/maternity-silhouette-bw.jpg",
        width: 2000,
        height: 1333,
        alt: "Black-and-white silhouette of an expecting mother in profile, hands cradling her belly.",
      },
      {
        file: "maternity/maternity-about-to-pop-blue-lace.jpg",
        width: 1200,
        height: 1800,
        alt: "Smiling mother-to-be in a blue lace dress points to \"About to POP!\" written across her belly.",
      },
      {
        file: "maternity/maternity-pink-polka-dot-train.jpg",
        width: 1333,
        height: 2000,
        alt: "Expecting mother in a pink polka-dot dress smiles beside a vintage train car.",
      },
      {
        file: "maternity/maternity-red-gown-fence.jpg",
        width: 1333,
        height: 2000,
        alt: "Pregnant woman in a flowing red gown leans on a wooden fence in a sunlit park.",
      },
      {
        file: "maternity/maternity-couple-red-gown-sunset.jpg",
        width: 1333,
        height: 2000,
        alt: "Husband holds his wife's belly as she stands in a red gown at sunset.",
      },
      {
        file: "maternity/maternity-blue-saree-columns.jpg",
        width: 1600,
        height: 2000,
        alt: "Expecting mother in a royal blue silk saree reclines before stone columns under a dramatic sky.",
      },
      {
        file: "maternity/maternity-blue-saree-golden-field.jpg",
        width: 1333,
        height: 2000,
        alt: "Mother-to-be in a blue silk saree and gold jewelry gazes down at her belly in a golden field.",
      },
      {
        file: "maternity/maternity-mom-son-tree-street.jpg",
        width: 1334,
        height: 2000,
        alt: "Expecting mother in a pink dress hugs her young son on a tree-lined street.",
      },
      {
        file: "maternity/maternity-pink-floral-fairy-lights.jpg",
        width: 1333,
        height: 2000,
        alt: "Expecting mother in a pink floral dress stands under strings of fairy lights beside green hedges.",
      },
    ],
  },
  {
    slug: "children-family",
    title: "Children & Family",
    nav: "Children & Family",
    intro:
      "Birthdays, portraits, and the ordinary closeness of a household.",
    description:
      "Children and family photography by Karthik Vepuri: birthdays, holidays, and family portraits.",
    photos: [
      {
        file: "children-family/kids-aaru-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Young girl in a dark dress smiles in front of a Christmas tree and warm holiday lights.",
      },
      {
        file: "children-family/kids-holiday-01.jpg",
        width: 2000,
        height: 2000,
        alt: "Toddler in a sweater vest rides a yellow toy through soap bubbles on a green lawn.",
      },
      {
        file: "children-family/kids-aaru-02.jpg",
        width: 1333,
        height: 2000,
        alt: "Girl in a red cape stands with her hands near her face against a wash of golden lights.",
      },
      {
        file: "children-family/v1-hasitha-son-artists-entrance.jpg",
        width: 1333,
        height: 2000,
        alt: "Young boy in a cream sweater and striped beanie poses with both hands raised in front of a painted Artist’s Entrance door.",
      },
      {
        file: "children-family/kids-krishna-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Baby dressed as Krishna, in yellow with a peacock feather, holds a silver flute.",
      },
      {
        file: "children-family/kids-aaru-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Girl in a white dress stands among trees and warm string lights.",
      },
      {
        file: "children-family/kids-birthday-01.jpg",
        width: 1999,
        height: 1999,
        alt: "Close portrait of a baby with dark hair, looking straight at the camera.",
      },
      {
        file: "children-family/kids-family-bridge.jpg",
        width: 2000,
        height: 1333,
        alt: "Parents and a small child in a green dress walk hand in hand across a wooden bridge.",
      },
      {
        file: "children-family/kids-bridge-01.jpg",
        width: 2000,
        height: 1125,
        alt: "Little girl in a green dress leans on a wooden bridge railing.",
      },
      {
        file: "children-family/kids-holiday-02.jpg",
        width: 2000,
        height: 2000,
        alt: "Toddler in a party hat and sweater vest sits beside blue balloons, frosting on his face.",
      },
      {
        file: "children-family/kids-jn-01.jpg",
        width: 2000,
        height: 2000,
        alt: "Young girl in a red dress and silver headpiece looks at the camera.",
      },
      {
        file: "children-family/kids-nivaan-01.jpg",
        width: 1999,
        height: 1999,
        alt: "Toddler in a bow tie lies in the grass and looks up.",
      },
      {
        file: "children-family/kids-portrait-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Child in a red sweater with a black dog silhouette stands outdoors in autumn light.",
      },
      {
        file: "children-family/kids-toddler-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Baby in pink with a flower in her hair lies on a pale blanket.",
      },
      {
        file: "children-family/v1-chaithra-1-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Young girl in a floral top and purple skirt, photographed against warm string lights.",
      },
      {
        file: "children-family/v1-krithika-portrait-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Girl in a bright pink dress twirls on a green lawn under a blue sky.",
      },
      {
        file: "children-family/v1-myra-4-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Young girl in a pastel dress sits on a wooden wagon beside a unicorn balloon.",
      },
      {
        file: "children-family/v1-siara-cakesmash-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Baby in white sits with a small cake marked with the number 1, against a red backdrop with flowers.",
      },
    ],
  },
  {
    slug: "couple-photography",
    title: "Couple Photography",
    nav: "Couple Photography",
    intro:
      "Portraits of two people at ease — at a celebration, in a garden, at the door of a house.",
    description:
      "Couple photography by Karthik Vepuri: portraits, proposals, and quiet moments together.",
    photos: [
      {
        file: "couple-photography/couple-19.jpg",
        width: 2000,
        height: 1333,
        alt: "Couple laughing outdoors, she in teal on his back as he points ahead.",
      },
      {
        file: "couple-photography/couple-12.jpg",
        width: 1333,
        height: 2000,
        alt: "Black-and-white silhouette of a couple face to face, foreheads nearly touching.",
      },
      {
        file: "couple-photography/couple-snow-embrace.jpg",
        width: 1851,
        height: 1234,
        alt: "Couple embracing beside a snowy pine, he in a navy jacket and she in a black coat.",
      },
      {
        file: "couple-photography/couple-engagement-mug.jpg",
        width: 2000,
        height: 2000,
        alt: "Woman holds out a mug that asks whether the ring makes her look engaged.",
      },
      {
        file: "couple-photography/couple-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple standing together in front of a tall stone capitol tower.",
      },
      {
        file: "couple-photography/couple-11.jpg",
        width: 1333,
        height: 2000,
        alt: "Close portrait of a couple about to kiss, she in an orange saree.",
      },
      {
        file: "couple-photography/couple-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Close portrait of a couple outdoors, she in purple and he in a pink check shirt.",
      },
      {
        file: "couple-photography/couple-02.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple outdoors in soft light, both looking toward the camera.",
      },
      {
        file: "couple-photography/couple-04.jpg",
        width: 1999,
        height: 1333,
        alt: "Black-and-white portrait of a couple in a close embrace.",
      },
      {
        file: "couple-photography/couple-08.jpg",
        width: 2000,
        height: 1333,
        alt: "Woman in traditional gold jewelry and a veil looks through a painted doorway.",
      },
      {
        file: "couple-photography/couple-10.jpg",
        width: 2000,
        height: 1333,
        alt: "Couple in profile, foreheads nearly touching, she in a red saree.",
      },
      {
        file: "couple-photography/couple-14.jpg",
        width: 2000,
        height: 1125,
        alt: "Couple embracing on a wide paved path lined with trees.",
      },
      {
        file: "couple-photography/couple-15.jpg",
        width: 2000,
        height: 1125,
        alt: "Couple in pink and red stand close on a tree-lined path.",
      },
      {
        file: "couple-photography/couple-16.jpg",
        width: 2000,
        height: 1333,
        alt: "Couple standing in the middle of a quiet road, she in a magenta dress.",
      },
      {
        file: "couple-photography/couple-17.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple embracing on a tree-lined road, she in magenta and he in a pink shirt.",
      },
      {
        file: "couple-photography/couple-18.jpg",
        width: 2000,
        height: 1333,
        alt: "Couple seen from behind, looking at each other, she in a purple saree.",
      },
    ],
  },
  {
    slug: "events",
    title: "Events",
    nav: "Events",
    intro:
      "Dance, half saree, seemantham, mehendi, housewarmings, and the days a community shows up.",
    description:
      "Event photography by Karthik Vepuri: dance, half saree, seemantham, mehendi, housewarmings, graduations, and IEEE.",
    photos: [
      {
        file: "events/events-04-solo-dancer.jpg",
        width: 2000,
        height: 1333,
        alt: "Classical dancer in orange and blue holds a pose against a black background.",
      },
      {
        file: "events/events-03-dancers.jpg",
        width: 2000,
        height: 1333,
        alt: "Two classical dancers in red and cream perform side by side on a dark stage.",
      },
      {
        file: "events/v1-halfsaree-aishu-02.jpg",
        width: 1333,
        height: 2000,
        alt: "Outdoor half-saree ceremony setup with yellow flower garlands, brass vessels, and palm fans arranged on the grass.",
      },
      {
        file: "events/events-01-dance-feet.jpg",
        width: 2000,
        height: 1333,
        alt: "Close view of a dancer’s belled ankles and a teal and gold costume on stage.",
      },
      {
        file: "events/events-02-dance-pose.jpg",
        width: 2000,
        height: 1333,
        alt: "Dancer’s feet and belled anklets strike a pose on a wooden stage.",
      },
      {
        file: "events/events-06-ceremony-ganesha.jpg",
        width: 2000,
        height: 1333,
        alt: "Two young women in sarees exchange a gift in front of a Ganesha backdrop.",
      },
      {
        file: "events/events-05-jewelry.jpg",
        width: 2000,
        height: 1333,
        alt: "Close view of gold earrings and a necklace against a deep red garment.",
      },
      {
        file: "events/events-07-portrait.jpg",
        width: 2000,
        height: 1333,
        alt: "Young woman in a green and red silk saree smiles during a celebration.",
      },
      {
        file: "events/events-11-portrait-tikka.jpg",
        width: 2000,
        height: 1333,
        alt: "Close portrait of a woman with a gold tikka, earrings, and a bright smile.",
      },
      {
        file: "events/events-10-child-event.jpg",
        width: 2000,
        height: 1333,
        alt: "Young girl in a cream dress looks back through a soft, crowded foreground.",
      },
      {
        file: "events/events-12-couple-sindu.jpg",
        width: 2000,
        height: 1333,
        alt: "Couple posed at a celebration, she in a yellow and blue saree and he in an orange vest.",
      },
      {
        file: "events/v1-mehendi-apoorva-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Guests in bright traditional clothes gathered on a stage for a mehendi celebration.",
      },
      {
        file: "events/v1-seemantham-sindu-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Woman in a green saree sits for a seemantham, with ceremonial decorations behind her.",
      },
      {
        file: "events/v1-gruhaprevesham-jay-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple in traditional silk stand on a lawn before a house marked with yellow garlands for griha pravesham.",
      },
      {
        file: "events/v1-housewarming-yuga-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Women in colorful sarees pose in a line at a housewarming.",
      },
      {
        file: "events/v1-grad-deepthi-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Tooth-shaped cookies on a green plate, decorated for a dental school graduation.",
      },
      {
        file: "events/v1-ieee-2025-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Drum kit on a stage with colored light, photographed at an IEEE symposium.",
      },
      {
        file: "events/v1-grad-candles-centerpiece.jpg",
        width: 1333,
        height: 2000,
        alt: "Glass vases of floating candles and white flowers, a detail from a graduation celebration.",
      },
    ],
  },
  {
    slug: "portraits-headshots",
    title: "Portraits",
    nav: "Portraits",
    intro:
      "Headshots and portraits, from a quiet close-up to a pair standing together.",
    description:
      "Portrait and headshot photography by Karthik Vepuri.",
    photos: [
      {
        file: "portraits-headshots/portrait-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Portrait of a young woman in a navy Nebraska shirt, smiling at the camera.",
      },
      {
        file: "portraits-headshots/portrait-06.jpg",
        width: 1333,
        height: 2000,
        alt: "Portrait of a woman in an olive polka-dot shirt, photographed indoors.",
      },
      {
        file: "portraits-headshots/portrait-09.jpg",
        width: 1999,
        height: 1333,
        alt: "Portrait of a couple, he in a check shirt and she in a purple saree.",
      },
      {
        file: "portraits-headshots/portrait-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Environmental headshot of a man in a dark suit, with a street soft behind him.",
      },
      {
        file: "portraits-headshots/portrait-04.jpg",
        width: 2000,
        height: 1333,
        alt: "Headshot of a smiling woman in a bright blue jacket.",
      },
      {
        file: "portraits-headshots/portrait-08.jpg",
        width: 1333,
        height: 2000,
        alt: "Studio-style headshot of a man with glasses and a striped shirt.",
      },
    ],
  },
  {
    slug: "landscapes",
    title: "Landscapes",
    nav: "Landscapes",
    intro:
      "Coastlines at sundown, mountain meadows, and skies full of stars.",
    description:
      "Landscape photography by Karthik Vepuri: sunsets, mountains, and night skies.",
    photos: [
      {
        file: "landscapes/landscape-tidepool-sunset.jpg",
        width: 2000,
        height: 1333,
        alt: "Sun setting over the ocean, reflected in a rocky tide pool under streaked clouds.",
      },
      {
        file: "landscapes/landscape-sea-stacks-dusk.jpg",
        width: 2000,
        height: 1333,
        alt: "Sea stacks silhouetted against a violet dusk sky over a misty, long-exposure shoreline.",
      },
      {
        file: "landscapes/landscape-golden-sunset-rocks.jpg",
        width: 2000,
        height: 1333,
        alt: "Blazing orange sunset over the sea with dark tide-pool rocks in the foreground.",
      },
      {
        file: "landscapes/landscape-pier-twilight.jpg",
        width: 2000,
        height: 1333,
        alt: "A lit wooden pier stretches over the beach under a purple twilight sky.",
      },
      {
        file: "landscapes/landscape-mountain-meadow-gate.jpg",
        width: 2000,
        height: 1333,
        alt: "Stone gateway in a green meadow below rugged mountains and a deep blue sky.",
      },
      {
        file: "landscapes/landscape-green-valley-clouds.jpg",
        width: 2000,
        height: 1125,
        alt: "Green alpine valley with pine trees under bright white clouds.",
      },
      {
        file: "landscapes/landscape-night-sky-meadow.jpg",
        width: 1593,
        height: 2000,
        alt: "Star-filled night sky over a glowing grass ridge at the last light of dusk.",
      },
      {
        file: "landscapes/landscape-milky-way-pillars.jpg",
        width: 1333,
        height: 2000,
        alt: "The Milky Way rising behind tall stone pillars at night.",
      },
      {
        file: "landscapes/landscape-terrace-tree-monochrome.jpg",
        width: 2000,
        height: 1333,
        alt: "Black-and-white view of an old tree over a terrace and distant hills.",
      },
    ],
  },
  {
    slug: "street-photography",
    title: "Street Photography",
    nav: "Street",
    intro:
      "Unposed portraits of strangers met along the way, in colour and black and white.",
    description:
      "Street photography by Karthik Vepuri: candid portraits in colour and black and white.",
    photos: [
      {
        file: "street-photography/street-marigold-garland-seller.jpg",
        width: 2000,
        height: 1333,
        alt: "An elderly man in a checked scarf stands between hanging strings of bright yellow and orange marigold garlands at a market.",
      },
      {
        file: "street-photography/street-market-woman-smile.jpg",
        width: 2000,
        height: 1333,
        alt: "A smiling woman in a green sari with a red bindi looks into the camera at a busy vegetable market.",
      },
      {
        file: "street-photography/street-bearded-man-closeup-bw.jpg",
        width: 2000,
        height: 2000,
        alt: "Black-and-white close-up of a weathered man with a long white beard and a wide-brimmed hat, staring into the lens.",
      },
      {
        file: "street-photography/street-boy-green-beans.jpg",
        width: 2000,
        height: 2000,
        alt: "A grinning boy in a grey T-shirt holds up a bunch of long green beans in a crowded market.",
      },
      {
        file: "street-photography/street-bearded-man-tree-glow.jpg",
        width: 1333,
        height: 2000,
        alt: "The bearded man framed by glowing, tangled tree branches at golden hour.",
      },
      {
        file: "street-photography/street-vendor-blue-shutters.jpg",
        width: 2000,
        height: 2000,
        alt: "A woman in a blue sari sorts vegetables at her stall in front of bright blue folding metal shutters.",
      },
      {
        file: "street-photography/street-car-window-bw.jpg",
        width: 2000,
        height: 1333,
        alt: "Black-and-white frame of the bearded man seen through an open car window and door frame.",
      },
      {
        file: "street-photography/street-fruit-vendor.jpg",
        width: 2000,
        height: 1333,
        alt: "A bearded fruit seller in a khaki shirt and white cap stands behind piles of dark grapes and red apples.",
      },
    ],
  },
];

export const heroFile = "maternity/maternity-hasitha-03.jpg";

export const featuredIds = [
  "indian-weddings/indian-09.jpg",
  "maternity/maternity-hasitha-02.jpg",
  "children-family/kids-krishna-01.jpg",
  "american-weddings/american-05.jpg",
  "events/events-04-solo-dancer.jpg",
  "couple-photography/couple-19.jpg",
];

export function findPhoto(file: string): { photo: Photo; gallery: Gallery } {
  for (const gallery of galleries) {
    const photo = gallery.photos.find((item) => item.file === file);
    if (photo) return { photo, gallery };
  }
  throw new Error(`Missing photograph: ${file}`);
}

export function photoSources(photo: Photo, base: string) {
  const full = `${base}photos/${photo.file}`;
  const w800 = `${base}photos/w800/${photo.file}`;
  const parts = [`${w800} 800w`];
  if (photo.width > 1400) {
    parts.push(`${base}photos/w1400/${photo.file} 1400w`);
  }
  parts.push(`${full} ${photo.width}w`);
  return {
    full,
    src: photo.width > 1400 ? `${base}photos/w1400/${photo.file}` : w800,
    srcset: parts.join(", "),
  };
}
