import { IApi } from "./IApi";

class RoomApi extends IApi {
  constructor(path: string) {
    super(path);
  }

  public async getRooms() {
    return await this.GET();
  }
  
}

export const roomApi = new RoomApi('room');