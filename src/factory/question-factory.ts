import { Question, Text, TextArea, Check, Radio, Select } from '../question';

export class QuestionFactory {

  private types: any = {
    'check': Check,
    'radio': Radio,
    'select': Select,
    'text': Text,
    'textarea': TextArea,
  };

  public createSimpleQuestion(question: Question<any>): Question<any> {
    return this.types[question.type].fromJson(question);
  }

  public createQuestionList(questionList: Question<any>[]): Question<any>[] {
    return questionList.map((question: Question<any>) => this.createSimpleQuestion(question));
  }
}
