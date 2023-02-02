export default class LocalStorageService {
  public static saveLogin(email: string, password: string): void {
    localStorage.setItem('email', btoa(email));
    localStorage.setItem('password', btoa(password));
  }

  public static getLogin() {
    try {
      const email = atob(localStorage.getItem('email') ?? '');
      const password = atob(localStorage.getItem('password') ?? '');
      return {
        email,
        password,
      };
    } catch (error) {
      return {
        email: '',
        password: '',
      };
    }
  }

  public static saveToken(token: string): void {
    localStorage.setItem('token', btoa(token));
  }

  public static getToken(): string {
    try {
      return atob(localStorage.getItem('token') ?? '');
    } catch (error) {
      return '';
    }
  }

  public static removeToken(): void {
    localStorage.removeItem('token');
  }

  public static saveLogged(logged: boolean): void {
    localStorage.setItem('logged', JSON.stringify(logged));
  }

  public static getLogged(): boolean {
    return Boolean(JSON.parse(localStorage.getItem('logged') ?? 'false'));
  }
}