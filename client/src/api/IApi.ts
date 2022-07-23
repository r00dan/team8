export class IApi {
  private root: string = 'http://localhost:4000/';
  private headers: Headers = new Headers();
  private path!: string;

  constructor(path: string) {
    this.path = path;
    this.headers.append('Content-Type', 'application/json')
  }

  private get Path() {
    return `${this.root}${this.path}`;
  }

  protected async GET<
    Params = string,
    Body = object
  >(params?: Params, body?: Body) {
    const response = await fetch(`${this.Path}${params ? `/${params}` : ''}`, {
      method: 'GET',
      headers: this.headers,
      body: JSON.stringify(body) ?? null,
    });

    return await response.json();
  }

  protected async POST<
    Params = string,
    Body = object
  >(params?: Params, body?: Body) {
    const response = await fetch(`${this.Path}${params ? `/${params}` : ''}`, {
      method: 'GET',
      headers: this.headers,
      body: JSON.stringify(body) ?? null,
    });

    return await response.json();
  }
}