import { IApi } from "./IApi";

class UserApi extends IApi {
  public async getUserRooms(userId: string) {
    return await this.GET(userId);
  }

  public async getUserCompanions(userId: string) {
    return await this.GET(`${userId}/companion`);
  }

  public async createUser() {
    return await this.POST(null, );
  }
  
}

export const userApi = new UserApi('user');