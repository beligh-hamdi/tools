import {LinkModel} from "./link.model";

export interface ConfigModel {
   title?: string;
   description?: string;
   logo?: string;
   links?: LinkModel[];
}
