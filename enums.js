export const RESTAURANTS = [
  {
    name: "Brussels",
    slug: "brussels",
    address: (
      <span>
        Rue du Bailli 46
        <br />
        1050 Ixelles, Bruxelles
      </span>
    ),
    phone: "(+32) 2 537 37 73",
    email: "hello@tigermilkgroup.com",
    menus: [
      { name: "Food", pdf: "Menu_Food_Brussels.pdf" },
      { name: "Sunday brunch (11h30-15h)", pdf: "Menu_Brunch.pdf" },
    ],
    openingHours: {
      monday: { lunch: "11:45-14:00", diner: "18:45-22:00" },
      tuesday: { lunch: "11:45-14:00", diner: "18:45-22:00" },
      wednesday: { lunch: "11:45-14:00", diner: "18:45-22:00" },
      thursday: { lunch: "11:45-14:00", diner: "18:45-22:00" },
      friday: { lunch: "11:45-14:00", diner: "19:00-22:30" },
      saturday: { lunch: "12:00-14:30", diner: "19:00-22:30" },
      sunday: { lunch: "11:30-15:00	", diner: "18:45-22:00" },
    },
  },
  {
    name: "Paris - Canal St Martin",
    slug: "paris-canal-st-martin",
    address: (
      <span>
        37 Quai de Valmy
        <br />
        75010 Paris, France
      </span>
    ),
    email: "hello@tigermilkgroup.com",
    menus: [
      { name: "Food", pdf: "Menu_Food_Paris_Canal_St_Martin.pdf" },
      { name: "Sunday brunch (12h-15h)", pdf: "Menu_Brunch.pdf" },
    ],
    openingHours: {
      monday: { lunch: "12:15-14:15", diner: "19:15-22:30" },
      tuesday: { lunch: "12:15-14:15", diner: "19:15-22:30" },
      wednesday: { lunch: "12:15-14:15", diner: "19:15-22:30" },
      thursday: { lunch: "12:15-14:15", diner: "19:15-22:30" },
      friday: { lunch: "12:15-14:15", diner: "19:15-22:45" },
      saturday: { lunch: "12:30-14:45", diner: "19:15-22:45" },
      sunday: { lunch: "12:00-15:00", diner: "19:15-22:30" },
    },
  },
  {
    name: "Paris - Sentier",
    slug: "paris-sentier",
    address: (
      <span>
        77 rue d'Aboukir
        <br />
        75002 Paris, France
      </span>
    ),
    phone: "(+33) 1 40 15 97 73",
    email: "hello@tigermilkgroup.com",
    menus: [{ name: "Food", pdf: "Menu_Food_Paris_Sentier.pdf" }],
    openingHours: {
      monday: { lunch: "12:15-14:15", diner: "19:00-22:30" },
      tuesday: { lunch: "12:15-14:15", diner: "19:00-22:30" },
      wednesday: { lunch: "12:15-14:15", diner: "19:00-22:30" },
      thursday: { lunch: "12:15-14:15", diner: "19:00-22:30" },
      friday: { lunch: "12:15-14:15", diner: "19:00-22:45" },
      saturday: { lunch: "12:30-14:45", diner: "19:00-22:45" },
      sunday: { lunch: "12:30-14:45	", diner: "19:00-22:30" },
    },
  },
  {
    name: "Paris - South Pigalle",
    slug: "paris-south-pigalle",
    address: (
      <span>
        72 rue Faubourg Montmartre
        <br />
        75009 Paris, France
      </span>
    ),
    phone: "(+33) 1 40 15 97 73",
    email: "hello@tigermilkgroup.com",
    menus: [
      { name: "Food", pdf: "Menu_Food_Paris_South_Pigalle.pdf" },
      { name: "Drinks", pdf: "Menu_Drinks_South_Pigalle.pdf" },
    ],
    openingHours: {
      monday: { lunch: "12:15-14:15", diner: "19:00-22:30" },
      tuesday: { lunch: "12:15-14:15", diner: "19:00-22:30" },
      wednesday: { lunch: "12:15-14:15", diner: "19:00-22:30" },
      thursday: { lunch: "12:15-14:15", diner: "19:00-22:30" },
      friday: { lunch: "12:15-14:15", diner: "19:00-22:45" },
      saturday: { lunch: "12:30-14:45", diner: "19:00-22:45" },
      sunday: { lunch: "12:30-14:45", diner: "19:00-22:30" },
    },
  },
];

export const DAYS = [
  { name: { en: "Monday", fr: "Lundi" }, slug: "monday" },
  { name: { en: "Tuesday", fr: "Mardi" }, slug: "tuesday" },
  { name: { en: "Wednesday", fr: "Mercredi" }, slug: "wednesday" },
  { name: { en: "Thursday", fr: "Jeudi" }, slug: "thursday" },
  { name: { en: "Friday", fr: "Vendredi" }, slug: "friday" },
  { name: { en: "Saturday", fr: "Samedi" }, slug: "saturday" },
  { name: { en: "Sunday", fr: "Dimanche" }, slug: "sunday" },
];

export const COLORS = [
  { name: "orange", hex: "#F06A37" },
  { name: "jade", hex: "#00B675" },
  { name: "pink", hex: "#FD1BAB" },
];

export const QUESTIONS = [
  {
    title: {
      fr: "Prenez-vous les réservations ?",
      en: "Can we make a reservation?",
    },
    content: {
      fr:
        "Nous ne prenons pas de réservation, nos restaurants vous accueillent tous les jours de la semaine pour le déjeuner et le diner.",
      en:
        "The restaurant doesn’t take reservations. Our team welcomes you every day for lunch and dinner.",
    },
  },
  {
    title: {
      fr: "Êtes-vous Pet friendly ?",
      en: "Are you Pet friendly?",
    },
    content: {
      fr:
        "Si votre chien ne dépasse pas la taille de nos tables, nous les accueillerons avec plaisir 😊.",
      en:
        "If your furry friend isn’t taller than our tables, he will be more than welcome in our restaurants.",
    },
  },
  {
    title: {
      fr: "Peut-on boire un verre uniquement dans vos restaurants ?",
      en: "Can we come only to grab a drink?",
    },
    content: {
      fr:
        "Pour des raisons de légalité et de licence, consommer uniquement de l’alcool n’est pas possible dans nos restaurants. Celle-ci doit être accessoire au repas.",
      en:
        "For legal reasons we don’t own a liquor license therefore we are not allowed to serve only alcohol.",
    },
  },
  {
    title: {
      fr: "Puis-je privatiser pour mon anniversaire ?",
      en: "Can we privatize for a special event?",
    },
    content: {
      fr: (
        <span>
          Nous ne faisons pas de privatisation, mais pour les groupes
          d'anniversaire ou d'évènements spéciaux, écrivez nous à{" "}
          <a href="mailto:hello@tigermilkgroup.com" target="_blank">hello@tigermilkgroup.com</a>{" "}
          et nous ferons notre possible pour vous accueillir en groupe !
        </span>
      ),
      en: (
        <span>
          It is not possible to book the entire place, but if you want to
          celebrate a birthday or special event in our restaurant, feel free to
          contact us at{" "}
          <a href="mailto:hello@tigermilkgroup.com" target="_blank">hello@tigermilkgroup.com</a>{" "}
          and we will do our best to accommodate you.
        </span>
      ),
    },
  },
  {
    title: {
      fr: "À quelle heure faut-il arriver pour ne pas attendre ?",
      en: "When should we best arrive to avoid waiting?",
    },
    content: {
      fr:
        "Petit conseil : arrivez tôt ! Les débuts de service (12h15 & 19h) sont souvent les meilleurs moments pour arriver ! Sinon comptez sur le deuxième service, vers 21h45, pour augmenter vos chances d’avoir de la place.",
      en:
        "Pro tip, come in early ! First services (12.15pm and 7.00pm) are the most suitable times to arrive. Otherwise come in for the second service around 9.45pm to increase your chances of getting a table.",
    },
  },
  {
    title: {
      fr: "Avez-vous des options végétariennes ?",
      en: "Do you offer vegetarian options?",
    },
    content: {
      fr:
        "Bien sûr ! Nous proposons des tacos, du guacamole, des nachos, différentes salades (quinoa, green salade), ainsi que certains desserts.",
      en:
        "Sure thing ! Our tacos, guacamole, nachos and salads (quinoa and green salad) are suitable for a vegetarian diet.",
    },
  },
  {
    title: {
      fr: "À quelle heure ferme la cuisine ?",
      en: "At what time do you stop serving?",
    },
    content: {
      fr:
        "Du lundi au vendredi, nos cuisines ferment à 14h15 et 22h30, et 14h45 et 22h45 le weekend.",
      en:
        "From Monday to Friday our kitchen closes at 2.15pm and 10.30pm. On week-ends we close at 2.45pm and 10.45pm.",
    },
  },
  {
    title: {
      fr: "Faites vous à emporter ?",
      en: "Can we order take-out?",
    },
    content: {
      fr:
        "Nous proposons le take-away uniquement au Tigermilk Bruxelles pour le moment !",
      en:
        "For the moment, we only offer take-away service at the Tigermilk Brussels.",
    },
  },
  {
    title: {
      fr: "Prenez vous les tickets restaurant ?",
      en: "Do you accept luncheon vouchers?",
    },
    content: {
      fr:
        "Oui nous acceptons les tickets restaurants du lundi au vendredi, uniquement au déjeuner.",
      en: "Yes we do, only for lunch from Monday to Friday.",
    },
  },
];
