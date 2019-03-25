
export class Question {
  public Id: string;
  public Stage: string;
  public Question: string;
  public Answer: string;
  public StartTime: string;
  public EndTime: string;

  constructor(id: string, stage: string, question: string, answer: string, startTime: string, endTime: string) {
      this.Id = id;
      this.Stage = stage;
      this.Question = question;
      this.Answer = answer;
      this.StartTime = startTime;
      this.EndTime = endTime;
  }
}
