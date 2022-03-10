export interface IStore {
  pickup_status: string;
  pickup_cover_image: string;
  name: string;
  id: string;
  delivery_status: string;
  opening_time: string;
  background_color: string;
  logo_image: string;
  country_iso_code: string;
  store_tags: IStoreTag[];
  payment_methods: string[];
}

export interface IStoreTag {
  name_ar: string;
  id: string;
  name_en: string;
}

export enum OrderingPortalStatus {
  publish = "publish",
  unpublish = "unpublish",
}
export interface IStoreData {
  store_id: string;
  web_portal_status: OrderingPortalStatus;
}

export enum LoadingStatus {
  success = "success",
  failed = "failed",
  loading = "loading",
}

export interface ILoadingState {
  loadingStatus: LoadingStatus | undefined;
}

export interface IGenericAction {
  requested: string;
  fulfilled: string;
  rejected: string;
}

