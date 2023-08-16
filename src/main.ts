type Difficulty = "easy" | "medium" | "hard";

const data = [
  {
    linha: 0,
    disabled: false,
    difficulty: "easy",
    options: [
      { index: 0, color: "", isSelected: false, difficulty: "easy" },
      { index: 1, color: "", isSelected: false, difficulty: "easy" },
      { index: 2, color: "", isSelected: false, difficulty: "easy" },
      { index: 3, color: "", isSelected: false, difficulty: "easy" },
      { index: 4, color: "", isSelected: false, difficulty: "medium" },
      { index: 5, color: "white", isSelected: false, difficulty: "hard" }
    ],
    ShowResult: [
      { index: 0, color: "", state: "" },
      { index: 1, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 3, color: "", state: "" }
    ]
  },
  {
    linha: 1,
    disabled: true,
    difficulty: "easy",
    options: [
      { index: 0, color: "white", isSelected: false, difficulty: "easy" },
      { index: 1, color: "white", isSelected: false, difficulty: "easy" },
      { index: 2, color: "white", isSelected: false, difficulty: "easy" },
      { index: 3, color: "white", isSelected: false, difficulty: "easy" },
      { index: 4, color: "white", isSelected: false, difficulty: "medium" },
      { index: 5, color: "white", isSelected: false, difficulty: "hard" }
    ],
    ShowResult: [
      { index: 0, color: "", state: "" },
      { index: 1, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 3, color: "", state: "" }
    ]
  },
  {
    linha: 2,
    disabled: true,
    difficulty: "easy",
    options: [
      { index: 0, color: "white", isSelected: false, difficulty: "easy" },
      { index: 1, color: "white", isSelected: false, difficulty: "easy" },
      { index: 2, color: "white", isSelected: false, difficulty: "easy" },
      { index: 3, color: "white", isSelected: false, difficulty: "easy" },
      { index: 4, color: "white", isSelected: false, difficulty: "medium" },
      { index: 5, color: "white", isSelected: false, difficulty: "hard" }
    ],
    ShowResult: [
      { index: 0, color: "", state: "" },
      { index: 1, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 3, color: "", state: "" }
    ]
  },
  {
    linha: 3,
    disabled: true,
    difficulty: "easy",
    options: [
      { index: 0, color: "white", isSelected: false, difficulty: "easy" },
      { index: 1, color: "white", isSelected: false, difficulty: "easy" },
      { index: 2, color: "white", isSelected: false, difficulty: "easy" },
      { index: 3, color: "white", isSelected: false, difficulty: "easy" },
      { index: 4, color: "white", isSelected: false, difficulty: "easy" },
      { index: 5, color: "white", isSelected: false, difficulty: "easy" }
    ],
    ShowResult: [
      { index: 0, color: "", state: "" },
      { index: 1, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 3, color: "", state: "" }
    ]
  },
  {
    linha: 4,
    disabled: true,
    difficulty: "medium",
    options: [
      { index: 0, color: "white", isSelected: false, difficulty: "easy" },
      { index: 1, color: "white", isSelected: false, difficulty: "easy" },
      { index: 2, color: "white", isSelected: false, difficulty: "easy" },
      { index: 3, color: "white", isSelected: false, difficulty: "easy" },
      { index: 4, color: "white", isSelected: false, difficulty: "medium" },
      { index: 5, color: "white", isSelected: false, difficulty: "hard" }
    ],
    ShowResult: [
      { index: 0, color: "", state: "" },
      { index: 1, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 3, color: "", state: "" }
    ]
  },
  {
    linha: 5,
    disabled: true,
    difficulty: "hard",
    options: [
      { index: 0, color: "white", isSelected: false, difficulty: "easy" },
      { index: 1, color: "white", isSelected: false, difficulty: "easy" },
      { index: 2, color: "white", isSelected: false, difficulty: "easy" },
      { index: 3, color: "white", isSelected: false, difficulty: "easy" },
      { index: 4, color: "white", isSelected: false, difficulty: "medium" },
      { index: 5, color: "white", isSelected: false, difficulty: "hard" }
    ],
    ShowResult: [
      { index: 0, color: "", state: "" },
      { index: 1, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 2, color: "", state: "" },
      { index: 3, color: "", state: "" }
    ]
  }
];

function difficultyFilter(obj: typeof data[number], difficulty: Difficulty) {
  const config = [
    { difficulty: "easy", maxIndex: 3 },
    { difficulty: "medium", maxIndex: 4 },
    { difficulty: "hard", maxIndex: 5 }
  ];

  const configByDifficulty = config.find((c) => c.difficulty === difficulty);

  // Valida que a configuração da dificuldade existe
  if (!configByDifficulty) {
    throw new Error("Dificuldade não encontrada");
  }

  // Ignora se a linha não pertence a dificuldade
  if (obj.linha > configByDifficulty.maxIndex) return;

  // Remove as opções que não pertencem a dificuldade
  obj.options = obj.options.splice(0, configByDifficulty.maxIndex + 1);
  obj.ShowResult = obj.ShowResult.splice(0, configByDifficulty.maxIndex + 1);

  return obj;
}

data.forEach((item) => {
  const result = difficultyFilter(item, "medium");

  if (!result) return

  console.log(result)
});
