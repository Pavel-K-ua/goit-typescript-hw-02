/*
  Використовуйте generics та інтерфейси, щоб виправити помилку в наступних класах:
*/
interface PropsType {
  title: string;
}

class Component<T> {
  constructor(public props: T) {}
}

class Page extends Component<PropsType> {
  pageInfo(): void {
    console.log(this.props.title);
  }
}

export {};
