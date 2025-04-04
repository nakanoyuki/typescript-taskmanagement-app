class ProjectInput {
  templeteElement: HTMLTemplateElement;
  hostElement: HTMLDivElement;
  element: HTMLFormElement;

  // テンプレートや表示する要素取得
  constructor() {
    this.templeteElement = document.getElementById(
      "project-input"
    )! as HTMLTemplateElement;
    this.hostElement = document.getElementById("app")! as HTMLDivElement;

    // 画面の表示で使うimportされたNode
    const importNode = document.importNode(this.templeteElement.content, true);
    this.element = importNode.firstElementChild as HTMLFormElement;
    this.attach();
  }

  private attach() {
    this.hostElement.insertAdjacentElement("afterbegin", this.element);
  }
}

const pjtInput = new ProjectInput();
