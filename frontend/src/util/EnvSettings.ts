class EnvSettings {


  //import.meta.env.VITE_API_URL
  public getHost(): string {
    return "localhost:8080";
  }
}

export const envSettings = new EnvSettings();



