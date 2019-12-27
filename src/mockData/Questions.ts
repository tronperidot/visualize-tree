export interface Answer {
  label: string;
  nextQuestionId: number | null;
  resultCinemaId: number | null;
}

export interface Question {
  id: number;
  label: string;
  toriFaceId: number | null;
  answerList: Answer[];
}

export const Questions: Question[] = [
  {
    "id": 1,
    "label": "空想癖がある",
    "toriFaceId": 1,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 2,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 17,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 2,
    "label": "いつも憂鬱だ",
    "toriFaceId": 8,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 3,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 7,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 3,
    "label": "自分は生まれる世界を間違えたと思う",
    "toriFaceId": 2,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 4,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 8,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 4,
    "label": "この世はろくでもない場所だと思う",
    "toriFaceId": 9,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 5,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 27
      }
    ]
  },
  {
    "id": 5,
    "label": "いつまでも子供でいたい",
    "toriFaceId": 4,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 6,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 2
      }
    ]
  },
  {
    "id": 6,
    "label": "子供は無垢な存在だ",
    "toriFaceId": 9,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 1
      },
      {
        "label": "No",
        "nextQuestionId": 9,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 7,
    "label": "異世界に行きたい",
    "toriFaceId": 4,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 13,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 18,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 8,
    "label": "怖いものが好き",
    "toriFaceId": 12,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 33
      },
      {
        "label": "No",
        "nextQuestionId": 10,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 9,
    "label": "海と森ならどっち？",
    "toriFaceId": 20,
    "answerList": [
      {
        "label": "海",
        "nextQuestionId": null,
        "resultCinemaId": 3
      },
      {
        "label": "森",
        "nextQuestionId": null,
        "resultCinemaId": 4
      }
    ]
  },
  {
    "id": 10,
    "label": "静けさが欲しい",
    "toriFaceId": 7,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 11,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 14,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 11,
    "label": "静かだと心が",
    "toriFaceId": 3,
    "answerList": [
      {
        "label": "騒ぐ",
        "nextQuestionId": 12,
        "resultCinemaId": null
      },
      {
        "label": "休まる",
        "nextQuestionId": null,
        "resultCinemaId": 8
      }
    ]
  },
  {
    "id": 12,
    "label": "長い映画が観たい？",
    "toriFaceId": 17,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 6
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 7
      }
    ]
  },
  {
    "id": 13,
    "label": "仲間と一緒がいい？一人がいい？",
    "toriFaceId": 17,
    "answerList": [
      {
        "label": "仲間と一緒",
        "nextQuestionId": 14,
        "resultCinemaId": null
      },
      {
        "label": "一人",
        "nextQuestionId": 16,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 14,
    "label": "神話っぽいものが好き",
    "toriFaceId": 10,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 15,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 28
      }
    ]
  },
  {
    "id": 15,
    "label": "どちらに憧れる？",
    "toriFaceId": 4,
    "answerList": [
      {
        "label": "遠い未来",
        "nextQuestionId": null,
        "resultCinemaId": 25
      },
      {
        "label": "遠い過去",
        "nextQuestionId": null,
        "resultCinemaId": 13
      }
    ]
  },
  {
    "id": 16,
    "label": "自分を変えたい",
    "toriFaceId": 9,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 12
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 31
      }
    ]
  },
  {
    "id": 17,
    "label": "最近いやなことがあった",
    "toriFaceId": 12,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 29,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 18,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 18,
    "label": "旅行したい",
    "toriFaceId": 4,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 19,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 21,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 19,
    "label": "時間旅行or空間移動",
    "toriFaceId": 14,
    "answerList": [
      {
        "label": "時間",
        "nextQuestionId": 20,
        "resultCinemaId": null
      },
      {
        "label": "空間",
        "nextQuestionId": null,
        "resultCinemaId": 17
      }
    ]
  },
  {
    "id": 20,
    "label": "1920年代 東と西どっちに行きたい？",
    "toriFaceId": 20,
    "answerList": [
      {
        "label": "東",
        "nextQuestionId": null,
        "resultCinemaId": 16
      },
      {
        "label": "西",
        "nextQuestionId": null,
        "resultCinemaId": 34
      }
    ]
  },
  {
    "id": 21,
    "label": "元気になったら現実に戻りたい",
    "toriFaceId": 13,
    "answerList": [
      {
        "label": "戻りたい",
        "nextQuestionId": null,
        "resultCinemaId": 11
      },
      {
        "label": "戻りたくない",
        "nextQuestionId": 22,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 22,
    "label": "自分が主人公になりたい",
    "toriFaceId": 9,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 23,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 26,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 23,
    "label": "私は女王だ",
    "toriFaceId": 12,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 24,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 25,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 24,
    "label": "お菓子が食べたい",
    "toriFaceId": 8,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 19
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 20
      }
    ]
  },
  {
    "id": 25,
    "label": "でも権力の座を狙っている",
    "toriFaceId": 5,
    "answerList": [
      {
        "label": "実はそう",
        "nextQuestionId": null,
        "resultCinemaId": 26
      },
      {
        "label": "興味ない",
        "nextQuestionId": null,
        "resultCinemaId": 35
      }
    ]
  },
  {
    "id": 26,
    "label": "主人公になりたくないのになってしまう",
    "toriFaceId": 1,
    "answerList": [
      {
        "label": "なってしまう",
        "nextQuestionId": 27,
        "resultCinemaId": null
      },
      {
        "label": "ならない",
        "nextQuestionId": 28,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 27,
    "label": "恋がしたい",
    "toriFaceId": 2,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 21
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 36
      }
    ]
  },
  {
    "id": 28,
    "label": "美にからめ取られたい",
    "toriFaceId": 4,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 5
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 32
      }
    ]
  },
  {
    "id": 29,
    "label": "ストレスを発散する方法は",
    "toriFaceId": 5,
    "answerList": [
      {
        "label": "嫌いな人に復讐",
        "nextQuestionId": null,
        "resultCinemaId": 14
      },
      {
        "label": "好きなことに没頭",
        "nextQuestionId": 30,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 30,
    "label": "楽しいものor綺麗なもの",
    "toriFaceId": 3,
    "answerList": [
      {
        "label": "楽しいもの",
        "nextQuestionId": 31,
        "resultCinemaId": null
      },
      {
        "label": "綺麗なもの",
        "nextQuestionId": 36,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 31,
    "label": "仲間と一緒がいい？一人がいい？",
    "toriFaceId": 4,
    "answerList": [
      {
        "label": "仲間と一緒",
        "nextQuestionId": 32,
        "resultCinemaId": null
      },
      {
        "label": "一人",
        "nextQuestionId": 35,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 32,
    "label": "自分の背後で音楽が鳴っている",
    "toriFaceId": 10,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 33,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": 34,
        "resultCinemaId": null
      }
    ]
  },
  {
    "id": 33,
    "label": "かつての栄光を取り戻したい",
    "toriFaceId": 15,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 24
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 18
      }
    ]
  },
  {
    "id": 34,
    "label": "パーティーに行く準備はできている",
    "toriFaceId": 20,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": null,
        "resultCinemaId": 15
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 29
      }
    ]
  },
  {
    "id": 35,
    "label": "実は寂しいのも嫌いじゃない",
    "toriFaceId": 9,
    "answerList": [
      {
        "label": "嫌いじゃない",
        "nextQuestionId": null,
        "resultCinemaId": 9
      },
      {
        "label": "嫌い",
        "nextQuestionId": null,
        "resultCinemaId": 30
      }
    ]
  },
  {
    "id": 36,
    "label": "言葉には力がある",
    "toriFaceId": 8,
    "answerList": [
      {
        "label": "Yes",
        "nextQuestionId": 37,
        "resultCinemaId": null
      },
      {
        "label": "No",
        "nextQuestionId": null,
        "resultCinemaId": 10
      }
    ]
  },
  {
    "id": 37,
    "label": "小説家と詩人 なるならどっち？",
    "toriFaceId": 20,
    "answerList": [
      {
        "label": "小説家",
        "nextQuestionId": null,
        "resultCinemaId": 22
      },
      {
        "label": "詩人",
        "nextQuestionId": null,
        "resultCinemaId": 23
      }
    ]
  }
]