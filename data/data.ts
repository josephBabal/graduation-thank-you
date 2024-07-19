export type DataProps = {
  id: number;
  slug: string;
  name: string;
  content: string;
};

export const data1: DataProps[] = [
  {
    id: 1,
    slug: "louie-shari-emma-48392015",
    name: "Louie, Shari and Emma",
    content: process.env.J_LSE!
  },
  {
    id: 2,
    slug: "betty-steve-alden-27356108",
    name: "Betty, Steve and Alden",
    content: process.env.J_BSA!
  },
  {
    id: 3,
    slug: "lucia-natalie-84972031",
    name: "Aunt Lucia and Natalie",
    content: process.env.J_ALN!
  },
  {
    id: 4,
    slug: "vane-39104826",
    name: "Vane",
    content: process.env.J_VA!
  },
  {
    id: 5,
    slug: "cira-alberto-67582941",
    name: "Cira and Alberto",
    content: "",
  },
  {
    id: 6,
    slug: "don-jeannie-25013649",
    name: "Don and Jeannie",
    content: process.env.J_DJ!
  },
  {
    id: 7,
    slug: "folino-98162547",
    name: "Folino's",
    content: process.env.J_FO!
  },
  {
    id: 8,
    slug: "gerry-lucia-46723018",
    name: "Uncle Gerry and Aunt Lucia",
    content: process.env.J_UGAL!
  },
];

export const data2: DataProps[] = [
  {
    id: 1,
    slug: "louie-shari-emma-48392015",
    name: "Louie, Shari and Emma",
    content: process.env.C_LSE!,
  },
  {
    id: 2,
    slug: "betty-steve-alden-27356108",
    name: "Betty, Steve and Alden",
    content: `

    `,
  },
  {
    id: 3,
    slug: "lucia-natalie-84972031",
    name: "Aunt Lucia and Natalie",
    content: `

    `
  },
  {
    id: 4,
    slug: "vane-39104826",
    name: "Vane",
    content: `

    `,
  },
  {
    id: 5,
    slug: "cira-alberto-67582941",
    name: "Cira and Alberto",
    content: ``,
  },
  {
    id: 6,
    slug: "don-jeannie-25013649",
    name: "Don and Jeannie",
    content: process.env.C_DJ!
},
  {
    id: 7,
    slug: "folino-98162547",
    name: "Folino's",
    content: process.env.C_FO!
  },
  {
    id: 8,
    slug: "gerry-lucia-46723018",
    name: "Uncle Gerry and Aunt Lucia",
    content: process.env.C_UGAL!
  },
];