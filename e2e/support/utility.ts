export class Utility {

  public convertStringToCamelCase(text: string): string {
    const textArray: string[] = this.convertStringToStringArray(text);
    return this.convertStringArrayToCamelCase(textArray);
  }

  private convertStringToStringArray(text: string): string[] {
    const regex =
      /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;
    return text.match(regex);
  }

  private convertStringArrayToCamelCase(textArray: string[]): string {
    let result: string = '';
    const count: number = textArray.length;

    for (let i: number = 0; i < count; i++) {
      let text: string = textArray[i].toLowerCase();

      if (i !== 0) {
        text = text.substr(0, 1).toUpperCase() + text.substr(1);
      }

      result += text;
    }

    return result;
  }

}
