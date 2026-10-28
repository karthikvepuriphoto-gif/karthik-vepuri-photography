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

/** Curated stills. Add a JPEG under public/photos/<slug>/ and an entry here. */
export const galleries: Gallery[] = [
  {
    slug: "indian-weddings",
    title: "Indian Weddings",
    nav: "Indian Weddings",
    intro:
      "Ceremony, color, and the long day around them — from pellikuthuru through the reception.",
    description:
      "Indian wedding photography by Karthik Vepuri: ceremony, mangalasnanam, pellikuthuru, and reception portraits in Lincoln, Nebraska.",
    photos: [
      {
        file: "indian-weddings/manasa-rohan-ceremony-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride and groom seated during an Indian wedding ceremony, with family in bright silk sarees standing close around them.",
      },
      {
        file: "indian-weddings/manasa-rohan-ceremony-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Close view of a bride’s pink and gold saree, jeweled blouse, and a monogram pendant at the back.",
      },
      {
        file: "indian-weddings/manasa-rohan-ceremony-05.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride and groom seated under a flower-covered mandap with family beside them at an Indian wedding.",
      },
      {
        file: "indian-weddings/manasa-rohan-mangalasnanam-02.jpg",
        width: 2000,
        height: 1333,
        alt: "Couple wearing yellow and red floral garlands, seated before red and gold drapery at a mangalasnanam.",
      },
      {
        file: "indian-weddings/manasa-rohan-mangalasnanam-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Family gathered in front of red and yellow drapes during a mangalasnanam celebration.",
      },
      {
        file: "indian-weddings/manasa-rohan-pellikuthuru-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Two women in green and yellow silk sarees pose before a flower-garland backdrop at a pellikuthuru.",
      },
      {
        file: "indian-weddings/manasa-rohan-reception-04.jpg",
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
    intro: "An outdoor wedding day: vows under the gazebo, the party on the lawn, and portraits in the garden.",
    description:
      "American wedding photography by Karthik Vepuri in Lincoln, Nebraska — outdoor ceremony, wedding party, and garden portraits.",
    photos: [
      {
        file: "american-weddings/wedding-scott-jiana-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Bride and groom stand with an officiant under a white garden gazebo during an outdoor ceremony.",
      },
      {
        file: "american-weddings/scott-jiana-05.jpg",
        width: 1333,
        height: 2000,
        alt: "Bride in a lace wedding gown walks a shaded path with attendants in sage dresses.",
      },
      {
        file: "american-weddings/scott-jiana-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Two women in white and sage gowns hold a bouquet in front of a large bison statue.",
      },
      {
        file: "american-weddings/jiana-scott-alt-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Bride in a white lace gown and groom in a pink shirt share a playful lift beside a garden shed.",
      },
      {
        file: "american-weddings/wedding-scott-jiana-02.jpg",
        width: 2000,
        height: 1333,
        alt: "White chairs and a garden aisle lead toward a gazebo set for an outdoor wedding ceremony.",
      },
      {
        file: "american-weddings/wedding-scott-jiana-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Groom and groomsmen in white shirts, floral ties, and jeans stand in a line on a lawn.",
      },
      {
        file: "american-weddings/scott-jiana-partybus.jpg",
        width: 2000,
        height: 1333,
        alt: "Wedding party inside a bus, with the bride’s lace gown and colored light.",
      },
    ],
  },
  {
    slug: "maternity",
    title: "Maternity",
    nav: "Maternity",
    intro: "Winter light, a growing family, and the quiet before a new arrival.",
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
        file: "maternity/maternity-hasitha-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Close portrait of a pregnant belly in a sequined champagne gown, outdoors in the snow.",
      },
      {
        file: "maternity/maternity-hasitha-family-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Family of three sits on a brick ledge in front of a locomotive mural, the mother in a red beanie and color-block sweater.",
      },
      {
        file: "maternity/maternity-hasitha-family-02.jpg",
        width: 1333,
        height: 2000,
        alt: "Pregnant woman in a bright color-block sweater hugs a small child wearing a striped beanie.",
      },
      {
        file: "maternity/maternity-hasitha-with-son-tracks.jpg",
        width: 1333,
        height: 2000,
        alt: "Pregnant woman and her son hold hands on railroad tracks beside a station platform.",
      },
      {
        file: "maternity/maternity-hasitha-family-alley.jpg",
        width: 2000,
        height: 1333,
        alt: "Family of three walks a brick alley, dressed in bright winter knits.",
      },
    ],
  },
  {
    slug: "children-family",
    title: "Children & Family",
    nav: "Children & Family",
    intro: "Birthdays, portraits, and the ordinary closeness of a household.",
    description:
      "Children and family photography by Karthik Vepuri in Lincoln, Nebraska — birthdays, cake smashes, and family portraits.",
    photos: [
      {
        file: "children-family/hasitha-son-artists-entrance.jpg",
        width: 1333,
        height: 2000,
        alt: "Young boy in a cream sweater and striped beanie poses with both hands raised in front of a painted Artist’s Entrance door.",
      },
      {
        file: "children-family/chaithra-1-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Young girl in a floral top and purple skirt, photographed against warm string lights.",
      },
      {
        file: "children-family/siara-cakesmash-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Baby in white sits with a small cake marked with the number 1, against a red backdrop with flowers.",
      },
      {
        file: "children-family/krithika-portrait-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Girl in a bright pink dress twirls on a green lawn under a blue sky.",
      },
      {
        file: "children-family/myra-5-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Girl in a gold dress stands on a glowing sidewalk panel at night.",
      },
      {
        file: "children-family/myra-4-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Young girl in a pastel dress sits on a wooden wagon beside a unicorn balloon.",
      },
      {
        file: "children-family/siara-cakesmash-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Two young children sit close together on a red backdrop scattered with confetti.",
      },
      {
        file: "children-family/deepthi-family-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Extended family portrait outdoors, with people in silk sarees and formal clothes.",
      },
      {
        file: "children-family/deepthi-family-02.jpg",
        width: 2000,
        height: 1333,
        alt: "Extended family lined up on a lawn in colorful sarees and dress clothes.",
      },
      {
        file: "children-family/sridhar-family-01.jpg",
        width: 2000,
        height: 1333,
        alt: "A family walks a garden path beside stone sculptures.",
      },
      {
        file: "children-family/hasitha-fall-portrait-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Boy jumps with his arms out under a red-leafed tree in a yard full of fallen leaves.",
      },
    ],
  },
  {
    slug: "couple-photography",
    title: "Couple Photography",
    nav: "Couple Photography",
    intro: "Portraits of two people at ease — at a celebration, in a garden, at the door of a house.",
    description:
      "Couple photography by Karthik Vepuri: portraits made at weddings, a griha pravesham, and in the garden.",
    photos: [
      {
        file: "couple-photography/couple-jay-sridevi-02.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple in traditional silk stand together on the grass outside a stone house trimmed with marigold garlands.",
      },
      {
        file: "couple-photography/couple-jay-sridevi-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple and a young girl in traditional silk pose on a lawn in front of a house.",
      },
      {
        file: "couple-photography/couple-jay-sridevi-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple in a cream kurta and a peach-and-red silk saree stand on a lawn in front of a house decorated with yellow garlands.",
      },
      {
        file: "couple-photography/couple-scott-jiana-playful.jpg",
        width: 1333,
        height: 2000,
        alt: "Bride in a white lace gown and groom in a pink shirt share a playful pose in a garden.",
      },
      {
        file: "couple-photography/couple-manasa-rohan-reception.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple at a reception, she in a red and gold lehenga and he in a white suit, in front of a white floral wall.",
      },
    ],
  },
  {
    slug: "events",
    title: "Events",
    nav: "Events",
    intro:
      "Half saree, seemantham, mehendi, housewarmings, graduations, and the days a community shows up.",
    description:
      "Event photography by Karthik Vepuri: half saree, seemantham, mehendi, housewarmings, graduations, a color run, and IEEE.",
    photos: [
      {
        file: "events/halfsaree-aishu-02.jpg",
        width: 1333,
        height: 2000,
        alt: "Outdoor half-saree ceremony setup with yellow flower garlands, brass vessels, and palm fans arranged on the grass.",
      },
      {
        file: "events/halfsaree-aishu-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Young woman in a blue and gold half saree sits during the celebration, with family beside her.",
      },
      {
        file: "events/mehendi-apoorva-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Guests in bright traditional clothes gathered on a stage for a mehendi celebration.",
      },
      {
        file: "events/mehendi-apoorva-03.jpg",
        width: 1333,
        height: 2000,
        alt: "Young woman in a purple lehenga sits with family beneath a floral canopy at a mehendi.",
      },
      {
        file: "events/seemantham-sindu-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Woman in a green saree sits for a seemantham, with ceremonial decorations behind her.",
      },
      {
        file: "events/seemantham-sindu-03.jpg",
        width: 2000,
        height: 1333,
        alt: "Family gathered indoors around a seated woman in a green saree for a seemantham ceremony.",
      },
      {
        file: "events/gruhaprevesham-jay-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Couple in traditional silk stand on a lawn before a house marked with yellow garlands for griha pravesham.",
      },
      {
        file: "events/housewarming-yuga-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Women in colorful sarees pose in a line at a housewarming.",
      },
      {
        file: "events/grad-krithik-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Two girls in party dresses stand on a stage with white, gold, and navy balloons at a graduation celebration.",
      },
      {
        file: "events/grad-deepthi-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Tooth-shaped cookies on a green plate, decorated for a dental school graduation.",
      },
      {
        file: "events/anushka-portrait-01.jpg",
        width: 1333,
        height: 2000,
        alt: "Glass vases of floating candles and white flowers, a detail from a graduation celebration.",
      },
      {
        file: "events/colorrun-kahoe-01.jpg",
        width: 2000,
        height: 1333,
        alt: "People gathered across a wide grassy field at a color run.",
      },
      {
        file: "events/ieee-2025-01.jpg",
        width: 2000,
        height: 1333,
        alt: "Drum kit on a stage with colored light, photographed at an IEEE symposium.",
      },
    ],
  },
];

export const heroFile = "maternity/maternity-hasitha-03.jpg";

export const featuredIds = [
  "indian-weddings/manasa-rohan-ceremony-01.jpg",
  "maternity/maternity-hasitha-02.jpg",
  "children-family/hasitha-son-artists-entrance.jpg",
  "american-weddings/wedding-scott-jiana-03.jpg",
  "couple-photography/couple-jay-sridevi-02.jpg",
  "events/halfsaree-aishu-02.jpg",
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
