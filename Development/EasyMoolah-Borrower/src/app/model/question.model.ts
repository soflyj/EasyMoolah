
export class Question {
  public Stage: string;
  public Question: string;
  public Answer: string;
  public StartTime: string;
  public EndTime: string;

  constructor(stage: string, question: string, answer: string, startTime: string, endTime: string) {
      this.Stage = stage;
      this.Question = question;
      this.Answer = answer;
      this.StartTime = startTime;
      this.EndTime = endTime;
  }
}
