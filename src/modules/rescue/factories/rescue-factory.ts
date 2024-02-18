import { RescueProductController } from "../controller/rescue-controller";
import { rescueModel } from "../models/rescue-model";
import { RescueProductRepo } from "../repo/rescue-repo";
import { RescueProductService } from "../services/rescue-services";

class RescueProductFactory {
  static getInstance() {
    const rescueProductRepo = new RescueProductRepo(rescueModel);
    const rescueProductService = new RescueProductService(rescueProductRepo);
    const rescueProductController = new RescueProductController(
      rescueProductService
    );
    return rescueProductController;
  }
}

export const rescueProductModule = RescueProductFactory.getInstance();
