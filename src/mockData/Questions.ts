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
        "nextQuestionId": 3,
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
]