interface App {
  provide<T>(key: InjectionKey<T> | symbol | string, value: T): this;
}
