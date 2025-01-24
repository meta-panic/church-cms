import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from "graphql";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type BooleanFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  contains?: InputMaybe<Scalars["Boolean"]["input"]>;
  containsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  endsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
  eq?: InputMaybe<Scalars["Boolean"]["input"]>;
  eqi?: InputMaybe<Scalars["Boolean"]["input"]>;
  gt?: InputMaybe<Scalars["Boolean"]["input"]>;
  gte?: InputMaybe<Scalars["Boolean"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  lt?: InputMaybe<Scalars["Boolean"]["input"]>;
  lte?: InputMaybe<Scalars["Boolean"]["input"]>;
  ne?: InputMaybe<Scalars["Boolean"]["input"]>;
  nei?: InputMaybe<Scalars["Boolean"]["input"]>;
  not?: InputMaybe<BooleanFilterInput>;
  notContains?: InputMaybe<Scalars["Boolean"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Boolean"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Boolean"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ComponentContentBlocksEvent = {
  __typename?: "ComponentContentBlocksEvent";
  Button?: Maybe<ComponentSharedButton>;
  Date: Scalars["DateTime"]["output"];
  Description: Scalars["JSON"]["output"];
  Photo?: Maybe<ComponentSharedMedia>;
  Title: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
};

export type ComponentContentBlocksEventFiltersInput = {
  Button?: InputMaybe<ComponentSharedButtonFiltersInput>;
  Date?: InputMaybe<DateTimeFilterInput>;
  Description?: InputMaybe<JsonFilterInput>;
  Photo?: InputMaybe<ComponentSharedMediaFiltersInput>;
  Title?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContentBlocksEventFiltersInput>>>;
  not?: InputMaybe<ComponentContentBlocksEventFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentBlocksEventFiltersInput>>>;
};

export type ComponentContentBlocksEventInput = {
  Button?: InputMaybe<ComponentSharedButtonInput>;
  Date?: InputMaybe<Scalars["DateTime"]["input"]>;
  Description?: InputMaybe<Scalars["JSON"]["input"]>;
  Photo?: InputMaybe<ComponentSharedMediaInput>;
  Title?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentContentBlocksInfoBlock = {
  __typename?: "ComponentContentBlocksInfoBlock";
  Button?: Maybe<ComponentSharedButton>;
  Title?: Maybe<Scalars["String"]["output"]>;
  Video_link?: Maybe<ComponentSharedEmbeddedVideo>;
  description?: Maybe<Array<Maybe<ComponentSharedRichText>>>;
  id: Scalars["ID"]["output"];
};


export type ComponentContentBlocksInfoBlockDescriptionArgs = {
  filters?: InputMaybe<ComponentSharedRichTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentContentBlocksInfoBlockFiltersInput = {
  Button?: InputMaybe<ComponentSharedButtonFiltersInput>;
  Title?: InputMaybe<StringFilterInput>;
  Video_link?: InputMaybe<ComponentSharedEmbeddedVideoFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentContentBlocksInfoBlockFiltersInput>>>;
  description?: InputMaybe<ComponentSharedRichTextFiltersInput>;
  not?: InputMaybe<ComponentContentBlocksInfoBlockFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentContentBlocksInfoBlockFiltersInput>>>;
};

export type ComponentContentBlocksInfoBlockInput = {
  Button?: InputMaybe<ComponentSharedButtonInput>;
  Title?: InputMaybe<Scalars["String"]["input"]>;
  Video_link?: InputMaybe<ComponentSharedEmbeddedVideoInput>;
  description?: InputMaybe<Array<InputMaybe<ComponentSharedRichTextInput>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentServicesBlockCarouselView = {
  __typename?: "ComponentServicesBlockCarouselView";
  Carousel_service_description: Scalars["String"]["output"];
  Carousel_service_image: UploadFile;
  Carousel_service_name: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
};

export type ComponentServicesBlockCarouselViewFiltersInput = {
  Carousel_service_description?: InputMaybe<StringFilterInput>;
  Carousel_service_name?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentServicesBlockCarouselViewFiltersInput>>>;
  not?: InputMaybe<ComponentServicesBlockCarouselViewFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesBlockCarouselViewFiltersInput>>>;
};

export type ComponentServicesBlockCarouselViewInput = {
  Carousel_service_description?: InputMaybe<Scalars["String"]["input"]>;
  Carousel_service_image?: InputMaybe<Scalars["ID"]["input"]>;
  Carousel_service_name?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentServicesBlockHeader = {
  __typename?: "ComponentServicesBlockHeader";
  How_do_we_do?: Maybe<Array<Maybe<ComponentSharedRichText>>>;
  Title?: Maybe<Scalars["String"]["output"]>;
  What_do_we_do?: Maybe<Array<Maybe<ComponentSharedRichText>>>;
  id: Scalars["ID"]["output"];
};


export type ComponentServicesBlockHeaderHow_Do_We_DoArgs = {
  filters?: InputMaybe<ComponentSharedRichTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


export type ComponentServicesBlockHeaderWhat_Do_We_DoArgs = {
  filters?: InputMaybe<ComponentSharedRichTextFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentServicesBlockHeaderFiltersInput = {
  How_do_we_do?: InputMaybe<ComponentSharedRichTextFiltersInput>;
  Title?: InputMaybe<StringFilterInput>;
  What_do_we_do?: InputMaybe<ComponentSharedRichTextFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentServicesBlockHeaderFiltersInput>>>;
  not?: InputMaybe<ComponentServicesBlockHeaderFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentServicesBlockHeaderFiltersInput>>>;
};

export type ComponentServicesBlockHeaderInput = {
  How_do_we_do?: InputMaybe<Array<InputMaybe<ComponentSharedRichTextInput>>>;
  Title?: InputMaybe<Scalars["String"]["input"]>;
  What_do_we_do?: InputMaybe<Array<InputMaybe<ComponentSharedRichTextInput>>>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentSharedAddress = {
  __typename?: "ComponentSharedAddress";
  building?: Maybe<Scalars["String"]["output"]>;
  city: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  street: Scalars["String"]["output"];
};

export type ComponentSharedAddressInput = {
  building?: InputMaybe<Scalars["String"]["input"]>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  street?: InputMaybe<Scalars["String"]["input"]>;
};

export type ComponentSharedButton = {
  __typename?: "ComponentSharedButton";
  Button_link: Scalars["String"]["output"];
  Button_text: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  isExternal: Scalars["Boolean"]["output"];
};

export type ComponentSharedButtonFiltersInput = {
  Button_link?: InputMaybe<StringFilterInput>;
  Button_text?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<ComponentSharedButtonFiltersInput>>>;
  isExternal?: InputMaybe<BooleanFilterInput>;
  not?: InputMaybe<ComponentSharedButtonFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedButtonFiltersInput>>>;
};

export type ComponentSharedButtonInput = {
  Button_link?: InputMaybe<Scalars["String"]["input"]>;
  Button_text?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
  isExternal?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type ComponentSharedEmbeddedVideo = {
  __typename?: "ComponentSharedEmbeddedVideo";
  id: Scalars["ID"]["output"];
};

export type ComponentSharedEmbeddedVideoFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedEmbeddedVideoFiltersInput>>>;
  not?: InputMaybe<ComponentSharedEmbeddedVideoFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedEmbeddedVideoFiltersInput>>>;
};

export type ComponentSharedEmbeddedVideoInput = {
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentSharedMedia = {
  __typename?: "ComponentSharedMedia";
  file?: Maybe<UploadFile>;
  id: Scalars["ID"]["output"];
};

export type ComponentSharedMediaFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedMediaFiltersInput>>>;
  not?: InputMaybe<ComponentSharedMediaFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedMediaFiltersInput>>>;
};

export type ComponentSharedMediaInput = {
  file?: InputMaybe<Scalars["ID"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentSharedQuote = {
  __typename?: "ComponentSharedQuote";
  body?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  title?: Maybe<Scalars["String"]["output"]>;
};

export type ComponentSharedRichText = {
  __typename?: "ComponentSharedRichText";
  body?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
};

export type ComponentSharedRichTextFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedRichTextFiltersInput>>>;
  body?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedRichTextFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedRichTextFiltersInput>>>;
};

export type ComponentSharedRichTextInput = {
  body?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentSharedSchedule = {
  __typename?: "ComponentSharedSchedule";
  dayAndTime: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
};

export type ComponentSharedScheduleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ComponentSharedScheduleFiltersInput>>>;
  dayAndTime?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ComponentSharedScheduleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ComponentSharedScheduleFiltersInput>>>;
};

export type ComponentSharedScheduleInput = {
  dayAndTime?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ComponentSharedSeo = {
  __typename?: "ComponentSharedSeo";
  id: Scalars["ID"]["output"];
  metaDescription: Scalars["String"]["output"];
  metaTitle: Scalars["String"]["output"];
  shareImage?: Maybe<UploadFile>;
};

export type ComponentSharedSlider = {
  __typename?: "ComponentSharedSlider";
  files: Array<Maybe<UploadFile>>;
  files_connection?: Maybe<UploadFileRelationResponseCollection>;
  id: Scalars["ID"]["output"];
};


export type ComponentSharedSliderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


export type ComponentSharedSliderFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ComponentSharedVkVideo = {
  __typename?: "ComponentSharedVkVideo";
  id: Scalars["ID"]["output"];
  link: Scalars["String"]["output"];
  thumbnail?: Maybe<UploadFile>;
};

export type DateTimeFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  contains?: InputMaybe<Scalars["DateTime"]["input"]>;
  containsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  endsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
  eq?: InputMaybe<Scalars["DateTime"]["input"]>;
  eqi?: InputMaybe<Scalars["DateTime"]["input"]>;
  gt?: InputMaybe<Scalars["DateTime"]["input"]>;
  gte?: InputMaybe<Scalars["DateTime"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  lt?: InputMaybe<Scalars["DateTime"]["input"]>;
  lte?: InputMaybe<Scalars["DateTime"]["input"]>;
  ne?: InputMaybe<Scalars["DateTime"]["input"]>;
  nei?: InputMaybe<Scalars["DateTime"]["input"]>;
  not?: InputMaybe<DateTimeFilterInput>;
  notContains?: InputMaybe<Scalars["DateTime"]["input"]>;
  notContainsi?: InputMaybe<Scalars["DateTime"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["DateTime"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type DeleteMutationResponse = {
  __typename?: "DeleteMutationResponse";
  documentId: Scalars["ID"]["output"];
};

export type FileInfoInput = {
  alternativeText?: InputMaybe<Scalars["String"]["input"]>;
  caption?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
};

export type FloatFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  contains?: InputMaybe<Scalars["Float"]["input"]>;
  containsi?: InputMaybe<Scalars["Float"]["input"]>;
  endsWith?: InputMaybe<Scalars["Float"]["input"]>;
  eq?: InputMaybe<Scalars["Float"]["input"]>;
  eqi?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  ne?: InputMaybe<Scalars["Float"]["input"]>;
  nei?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<FloatFilterInput>;
  notContains?: InputMaybe<Scalars["Float"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Float"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Float"]["input"]>;
};

export type GenericMorph = ComponentContentBlocksEvent | ComponentContentBlocksInfoBlock | ComponentServicesBlockCarouselView | ComponentServicesBlockHeader | ComponentSharedAddress | ComponentSharedButton | ComponentSharedEmbeddedVideo | ComponentSharedMedia | ComponentSharedQuote | ComponentSharedRichText | ComponentSharedSchedule | ComponentSharedSeo | ComponentSharedSlider | ComponentSharedVkVideo | Global | I18NLocale | PageLanding | ReviewWorkflowsWorkflow | ReviewWorkflowsWorkflowStage | Service | UploadFile | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type Global = {
  __typename?: "Global";
  PrimalBuilding: ComponentSharedAddress;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  email: Scalars["String"]["output"];
  ok: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  rutube: Scalars["String"]["output"];
  serviceSchedule: Array<Maybe<ComponentSharedSchedule>>;
  telegram: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  vk: Scalars["String"]["output"];
  youtube: Scalars["String"]["output"];
};


export type GlobalServiceScheduleArgs = {
  filters?: InputMaybe<ComponentSharedScheduleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type GlobalInput = {
  PrimalBuilding?: InputMaybe<ComponentSharedAddressInput>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  ok?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  rutube?: InputMaybe<Scalars["String"]["input"]>;
  serviceSchedule?: InputMaybe<Array<InputMaybe<ComponentSharedScheduleInput>>>;
  telegram?: InputMaybe<Scalars["String"]["input"]>;
  vk?: InputMaybe<Scalars["String"]["input"]>;
  youtube?: InputMaybe<Scalars["String"]["input"]>;
};

export type I18NLocale = {
  __typename?: "I18NLocale";
  code?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type I18NLocaleEntityResponseCollection = {
  __typename?: "I18NLocaleEntityResponseCollection";
  nodes: Array<I18NLocale>;
  pageInfo: Pagination;
};

export type I18NLocaleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  code?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<I18NLocaleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<I18NLocaleFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  contains?: InputMaybe<Scalars["ID"]["input"]>;
  containsi?: InputMaybe<Scalars["ID"]["input"]>;
  endsWith?: InputMaybe<Scalars["ID"]["input"]>;
  eq?: InputMaybe<Scalars["ID"]["input"]>;
  eqi?: InputMaybe<Scalars["ID"]["input"]>;
  gt?: InputMaybe<Scalars["ID"]["input"]>;
  gte?: InputMaybe<Scalars["ID"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  lt?: InputMaybe<Scalars["ID"]["input"]>;
  lte?: InputMaybe<Scalars["ID"]["input"]>;
  ne?: InputMaybe<Scalars["ID"]["input"]>;
  nei?: InputMaybe<Scalars["ID"]["input"]>;
  not?: InputMaybe<IdFilterInput>;
  notContains?: InputMaybe<Scalars["ID"]["input"]>;
  notContainsi?: InputMaybe<Scalars["ID"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["ID"]["input"]>;
};

export type IntFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  contains?: InputMaybe<Scalars["Int"]["input"]>;
  containsi?: InputMaybe<Scalars["Int"]["input"]>;
  endsWith?: InputMaybe<Scalars["Int"]["input"]>;
  eq?: InputMaybe<Scalars["Int"]["input"]>;
  eqi?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  ne?: InputMaybe<Scalars["Int"]["input"]>;
  nei?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<IntFilterInput>;
  notContains?: InputMaybe<Scalars["Int"]["input"]>;
  notContainsi?: InputMaybe<Scalars["Int"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["Int"]["input"]>;
};

export type JsonFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  contains?: InputMaybe<Scalars["JSON"]["input"]>;
  containsi?: InputMaybe<Scalars["JSON"]["input"]>;
  endsWith?: InputMaybe<Scalars["JSON"]["input"]>;
  eq?: InputMaybe<Scalars["JSON"]["input"]>;
  eqi?: InputMaybe<Scalars["JSON"]["input"]>;
  gt?: InputMaybe<Scalars["JSON"]["input"]>;
  gte?: InputMaybe<Scalars["JSON"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  lt?: InputMaybe<Scalars["JSON"]["input"]>;
  lte?: InputMaybe<Scalars["JSON"]["input"]>;
  ne?: InputMaybe<Scalars["JSON"]["input"]>;
  nei?: InputMaybe<Scalars["JSON"]["input"]>;
  not?: InputMaybe<JsonFilterInput>;
  notContains?: InputMaybe<Scalars["JSON"]["input"]>;
  notContainsi?: InputMaybe<Scalars["JSON"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["JSON"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["JSON"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  /** Change user password. Confirm with the current password. */
  changePassword?: Maybe<UsersPermissionsLoginPayload>;
  createPageLanding?: Maybe<PageLanding>;
  createReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  createReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  createService?: Maybe<Service>;
  /** Create a new role */
  createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  deleteGlobal?: Maybe<DeleteMutationResponse>;
  deletePageLanding?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflow?: Maybe<DeleteMutationResponse>;
  deleteReviewWorkflowsWorkflowStage?: Maybe<DeleteMutationResponse>;
  deleteService?: Maybe<DeleteMutationResponse>;
  deleteUploadFile?: Maybe<UploadFile>;
  /** Delete an existing role */
  deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  login: UsersPermissionsLoginPayload;
  /** Register a user */
  register: UsersPermissionsLoginPayload;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  updateGlobal?: Maybe<Global>;
  updatePageLanding?: Maybe<PageLanding>;
  updateReviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  updateReviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  updateService?: Maybe<Service>;
  updateUploadFile: UploadFile;
  /** Update an existing role */
  updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};


export type MutationCreatePageLandingArgs = {
  data: PageLandingInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateServiceArgs = {
  data: ServiceInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeletePageLandingArgs = {
  documentId: Scalars["ID"]["input"];
};


export type MutationDeleteReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"];
};


export type MutationDeleteReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"];
};


export type MutationDeleteServiceArgs = {
  documentId: Scalars["ID"]["input"];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars["ID"]["input"];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars["ID"]["input"];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars["ID"]["input"];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars["String"]["input"];
};


export type MutationForgotPasswordArgs = {
  email: Scalars["String"]["input"];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationResetPasswordArgs = {
  code: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  passwordConfirmation: Scalars["String"]["input"];
};


export type MutationUpdateGlobalArgs = {
  data: GlobalInput;
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdatePageLandingArgs = {
  data: PageLandingInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowArgs = {
  data: ReviewWorkflowsWorkflowInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateReviewWorkflowsWorkflowStageArgs = {
  data: ReviewWorkflowsWorkflowStageInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateServiceArgs = {
  data: ServiceInput;
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type MutationUpdateUploadFileArgs = {
  id: Scalars["ID"]["input"];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars["ID"]["input"];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars["ID"]["input"];
};

export type PageLanding = {
  __typename?: "PageLanding";
  About_us: ComponentContentBlocksInfoBlock;
  Events: Array<Maybe<ComponentContentBlocksEvent>>;
  Hero_header: ComponentContentBlocksInfoBlock;
  How_to_become_a_christian: ComponentContentBlocksInfoBlock;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};


export type PageLandingEventsArgs = {
  filters?: InputMaybe<ComponentContentBlocksEventFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type PageLandingEntityResponseCollection = {
  __typename?: "PageLandingEntityResponseCollection";
  nodes: Array<PageLanding>;
  pageInfo: Pagination;
};

export type PageLandingFiltersInput = {
  About_us?: InputMaybe<ComponentContentBlocksInfoBlockFiltersInput>;
  Events?: InputMaybe<ComponentContentBlocksEventFiltersInput>;
  Hero_header?: InputMaybe<ComponentContentBlocksInfoBlockFiltersInput>;
  How_to_become_a_christian?: InputMaybe<ComponentContentBlocksInfoBlockFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<PageLandingFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<PageLandingFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<PageLandingFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type PageLandingInput = {
  About_us?: InputMaybe<ComponentContentBlocksInfoBlockInput>;
  Events?: InputMaybe<Array<InputMaybe<ComponentContentBlocksEventInput>>>;
  Hero_header?: InputMaybe<ComponentContentBlocksInfoBlockInput>;
  How_to_become_a_christian?: InputMaybe<ComponentContentBlocksInfoBlockInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type Pagination = {
  __typename?: "Pagination";
  page: Scalars["Int"]["output"];
  pageCount: Scalars["Int"]["output"];
  pageSize: Scalars["Int"]["output"];
  total: Scalars["Int"]["output"];
};

export type PaginationArg = {
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
  pageSize?: InputMaybe<Scalars["Int"]["input"]>;
  start?: InputMaybe<Scalars["Int"]["input"]>;
};

export enum PublicationStatus {
  Draft = "DRAFT",
  Published = "PUBLISHED"
}

export type Query = {
  __typename?: "Query";
  global?: Maybe<Global>;
  i18NLocale?: Maybe<I18NLocale>;
  i18NLocales: Array<Maybe<I18NLocale>>;
  i18NLocales_connection?: Maybe<I18NLocaleEntityResponseCollection>;
  me?: Maybe<UsersPermissionsMe>;
  pageLanding?: Maybe<PageLanding>;
  pageLandings: Array<Maybe<PageLanding>>;
  pageLandings_connection?: Maybe<PageLandingEntityResponseCollection>;
  reviewWorkflowsWorkflow?: Maybe<ReviewWorkflowsWorkflow>;
  reviewWorkflowsWorkflowStage?: Maybe<ReviewWorkflowsWorkflowStage>;
  reviewWorkflowsWorkflowStages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  reviewWorkflowsWorkflowStages_connection?: Maybe<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  reviewWorkflowsWorkflows: Array<Maybe<ReviewWorkflowsWorkflow>>;
  reviewWorkflowsWorkflows_connection?: Maybe<ReviewWorkflowsWorkflowEntityResponseCollection>;
  service?: Maybe<Service>;
  services: Array<Maybe<Service>>;
  services_connection?: Maybe<ServiceEntityResponseCollection>;
  uploadFile?: Maybe<UploadFile>;
  uploadFiles: Array<Maybe<UploadFile>>;
  uploadFiles_connection?: Maybe<UploadFileEntityResponseCollection>;
  usersPermissionsRole?: Maybe<UsersPermissionsRole>;
  usersPermissionsRoles: Array<Maybe<UsersPermissionsRole>>;
  usersPermissionsRoles_connection?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  usersPermissionsUser?: Maybe<UsersPermissionsUser>;
  usersPermissionsUsers: Array<Maybe<UsersPermissionsUser>>;
  usersPermissionsUsers_connection?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryGlobalArgs = {
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocaleArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryI18NLocales_ConnectionArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageLandingArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageLandingsArgs = {
  filters?: InputMaybe<PageLandingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryPageLandings_ConnectionArgs = {
  filters?: InputMaybe<PageLandingFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStageArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflowsArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryReviewWorkflowsWorkflows_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServiceArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServicesArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryServices_ConnectionArgs = {
  filters?: InputMaybe<ServiceFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFileArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUploadFiles_ConnectionArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoleArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsRoles_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUserArgs = {
  documentId: Scalars["ID"]["input"];
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};


export type QueryUsersPermissionsUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  status?: InputMaybe<PublicationStatus>;
};

export type ReviewWorkflowsWorkflow = {
  __typename?: "ReviewWorkflowsWorkflow";
  contentTypes: Scalars["JSON"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  stages: Array<Maybe<ReviewWorkflowsWorkflowStage>>;
  stages_connection?: Maybe<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};


export type ReviewWorkflowsWorkflowStagesArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


export type ReviewWorkflowsWorkflowStages_ConnectionArgs = {
  filters?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowEntityResponseCollection";
  nodes: Array<ReviewWorkflowsWorkflow>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  contentTypes?: InputMaybe<JsonFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  stages?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ReviewWorkflowsWorkflowInput = {
  contentTypes?: InputMaybe<Scalars["JSON"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  stages?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type ReviewWorkflowsWorkflowStage = {
  __typename?: "ReviewWorkflowsWorkflowStage";
  color?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  name?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  workflow?: Maybe<ReviewWorkflowsWorkflow>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowStageEntityResponseCollection";
  nodes: Array<ReviewWorkflowsWorkflowStage>;
  pageInfo: Pagination;
};

export type ReviewWorkflowsWorkflowStageFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  color?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ReviewWorkflowsWorkflowStageFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  workflow?: InputMaybe<ReviewWorkflowsWorkflowFiltersInput>;
};

export type ReviewWorkflowsWorkflowStageInput = {
  color?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  workflow?: InputMaybe<Scalars["ID"]["input"]>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollection = {
  __typename?: "ReviewWorkflowsWorkflowStageRelationResponseCollection";
  nodes: Array<ReviewWorkflowsWorkflowStage>;
};

export type Service = {
  __typename?: "Service";
  Header: ComponentServicesBlockHeader;
  Landing_page_carousel_view?: Maybe<ComponentServicesBlockCarouselView>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type ServiceEntityResponseCollection = {
  __typename?: "ServiceEntityResponseCollection";
  nodes: Array<Service>;
  pageInfo: Pagination;
};

export type ServiceFiltersInput = {
  Header?: InputMaybe<ComponentServicesBlockHeaderFiltersInput>;
  Landing_page_carousel_view?: InputMaybe<ComponentServicesBlockCarouselViewFiltersInput>;
  and?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<ServiceFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<ServiceFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type ServiceInput = {
  Header?: InputMaybe<ComponentServicesBlockHeaderInput>;
  Landing_page_carousel_view?: InputMaybe<ComponentServicesBlockCarouselViewInput>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
};

export type StringFilterInput = {
  and?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  between?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  containsi?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  eq?: InputMaybe<Scalars["String"]["input"]>;
  eqi?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  ne?: InputMaybe<Scalars["String"]["input"]>;
  nei?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<StringFilterInput>;
  notContains?: InputMaybe<Scalars["String"]["input"]>;
  notContainsi?: InputMaybe<Scalars["String"]["input"]>;
  notIn?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  notNull?: InputMaybe<Scalars["Boolean"]["input"]>;
  null?: InputMaybe<Scalars["Boolean"]["input"]>;
  or?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
};

export type UploadFile = {
  __typename?: "UploadFile";
  alternativeText?: Maybe<Scalars["String"]["output"]>;
  caption?: Maybe<Scalars["String"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  ext?: Maybe<Scalars["String"]["output"]>;
  formats?: Maybe<Scalars["JSON"]["output"]>;
  hash: Scalars["String"]["output"];
  height?: Maybe<Scalars["Int"]["output"]>;
  mime: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  previewUrl?: Maybe<Scalars["String"]["output"]>;
  provider: Scalars["String"]["output"];
  provider_metadata?: Maybe<Scalars["JSON"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  related?: Maybe<Array<Maybe<GenericMorph>>>;
  size: Scalars["Float"]["output"];
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  url: Scalars["String"]["output"];
  width?: Maybe<Scalars["Int"]["output"]>;
};

export type UploadFileEntityResponseCollection = {
  __typename?: "UploadFileEntityResponseCollection";
  nodes: Array<UploadFile>;
  pageInfo: Pagination;
};

export type UploadFileFiltersInput = {
  alternativeText?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  caption?: InputMaybe<StringFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  ext?: InputMaybe<StringFilterInput>;
  formats?: InputMaybe<JsonFilterInput>;
  hash?: InputMaybe<StringFilterInput>;
  height?: InputMaybe<IntFilterInput>;
  mime?: InputMaybe<StringFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UploadFileFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UploadFileFiltersInput>>>;
  previewUrl?: InputMaybe<StringFilterInput>;
  provider?: InputMaybe<StringFilterInput>;
  provider_metadata?: InputMaybe<JsonFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  size?: InputMaybe<FloatFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  url?: InputMaybe<StringFilterInput>;
  width?: InputMaybe<IntFilterInput>;
};

export type UploadFileRelationResponseCollection = {
  __typename?: "UploadFileRelationResponseCollection";
  nodes: Array<UploadFile>;
};

export type UsersPermissionsCreateRolePayload = {
  __typename?: "UsersPermissionsCreateRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsDeleteRolePayload = {
  __typename?: "UsersPermissionsDeleteRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsLoginInput = {
  identifier: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  provider?: Scalars["String"]["input"];
};

export type UsersPermissionsLoginPayload = {
  __typename?: "UsersPermissionsLoginPayload";
  jwt?: Maybe<Scalars["String"]["output"]>;
  user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  __typename?: "UsersPermissionsMe";
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  role?: Maybe<UsersPermissionsMeRole>;
  username: Scalars["String"]["output"];
};

export type UsersPermissionsMeRole = {
  __typename?: "UsersPermissionsMeRole";
  description?: Maybe<Scalars["String"]["output"]>;
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  type?: Maybe<Scalars["String"]["output"]>;
};

export type UsersPermissionsPasswordPayload = {
  __typename?: "UsersPermissionsPasswordPayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsPermission = {
  __typename?: "UsersPermissionsPermission";
  action: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
};

export type UsersPermissionsPermissionFiltersInput = {
  action?: InputMaybe<StringFilterInput>;
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  __typename?: "UsersPermissionsPermissionRelationResponseCollection";
  nodes: Array<UsersPermissionsPermission>;
};

export type UsersPermissionsRegisterInput = {
  email: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  username: Scalars["String"]["input"];
};

export type UsersPermissionsRole = {
  __typename?: "UsersPermissionsRole";
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  documentId: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  permissions: Array<Maybe<UsersPermissionsPermission>>;
  permissions_connection?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  users: Array<Maybe<UsersPermissionsUser>>;
  users_connection?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


export type UsersPermissionsRolePermissions_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};


export type UsersPermissionsRoleUsers_ConnectionArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  __typename?: "UsersPermissionsRoleEntityResponseCollection";
  nodes: Array<UsersPermissionsRole>;
  pageInfo: Pagination;
};

export type UsersPermissionsRoleFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  description?: InputMaybe<StringFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  name?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  type?: InputMaybe<StringFilterInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  description?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  permissions?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
  users?: InputMaybe<Array<InputMaybe<Scalars["ID"]["input"]>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  __typename?: "UsersPermissionsUpdateRolePayload";
  ok: Scalars["Boolean"]["output"];
};

export type UsersPermissionsUser = {
  __typename?: "UsersPermissionsUser";
  blocked?: Maybe<Scalars["Boolean"]["output"]>;
  confirmed?: Maybe<Scalars["Boolean"]["output"]>;
  createdAt?: Maybe<Scalars["DateTime"]["output"]>;
  documentId: Scalars["ID"]["output"];
  email: Scalars["String"]["output"];
  provider?: Maybe<Scalars["String"]["output"]>;
  publishedAt?: Maybe<Scalars["DateTime"]["output"]>;
  role?: Maybe<UsersPermissionsRole>;
  updatedAt?: Maybe<Scalars["DateTime"]["output"]>;
  username: Scalars["String"]["output"];
};

export type UsersPermissionsUserEntityResponse = {
  __typename?: "UsersPermissionsUserEntityResponse";
  data?: Maybe<UsersPermissionsUser>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  __typename?: "UsersPermissionsUserEntityResponseCollection";
  nodes: Array<UsersPermissionsUser>;
  pageInfo: Pagination;
};

export type UsersPermissionsUserFiltersInput = {
  and?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  blocked?: InputMaybe<BooleanFilterInput>;
  confirmed?: InputMaybe<BooleanFilterInput>;
  createdAt?: InputMaybe<DateTimeFilterInput>;
  documentId?: InputMaybe<IdFilterInput>;
  email?: InputMaybe<StringFilterInput>;
  not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  or?: InputMaybe<Array<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  provider?: InputMaybe<StringFilterInput>;
  publishedAt?: InputMaybe<DateTimeFilterInput>;
  role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  updatedAt?: InputMaybe<DateTimeFilterInput>;
  username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  blocked?: InputMaybe<Scalars["Boolean"]["input"]>;
  confirmed?: InputMaybe<Scalars["Boolean"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  provider?: InputMaybe<Scalars["String"]["input"]>;
  publishedAt?: InputMaybe<Scalars["DateTime"]["input"]>;
  role?: InputMaybe<Scalars["ID"]["input"]>;
  username?: InputMaybe<Scalars["String"]["input"]>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  __typename?: "UsersPermissionsUserRelationResponseCollection";
  nodes: Array<UsersPermissionsUser>;
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping of union types */
export type ResolversUnionTypes<_RefType extends Record<string, unknown>> = {
  GenericMorph: (Omit<ComponentContentBlocksEvent, "Photo"> & { Photo?: Maybe<_RefType["ComponentSharedMedia"]> }) | (ComponentContentBlocksInfoBlock) | (Omit<ComponentServicesBlockCarouselView, "Carousel_service_image"> & { Carousel_service_image: _RefType["UploadFile"] }) | (ComponentServicesBlockHeader) | (ComponentSharedAddress) | (ComponentSharedButton) | (ComponentSharedEmbeddedVideo) | (Omit<ComponentSharedMedia, "file"> & { file?: Maybe<_RefType["UploadFile"]> }) | (ComponentSharedQuote) | (ComponentSharedRichText) | (ComponentSharedSchedule) | (Omit<ComponentSharedSeo, "shareImage"> & { shareImage?: Maybe<_RefType["UploadFile"]> }) | (Omit<ComponentSharedSlider, "files" | "files_connection"> & { files: Array<Maybe<_RefType["UploadFile"]>>, files_connection?: Maybe<_RefType["UploadFileRelationResponseCollection"]> }) | (Omit<ComponentSharedVkVideo, "thumbnail"> & { thumbnail?: Maybe<_RefType["UploadFile"]> }) | (Global) | (I18NLocale) | (Omit<PageLanding, "Events"> & { Events: Array<Maybe<_RefType["ComponentContentBlocksEvent"]>> }) | (ReviewWorkflowsWorkflow) | (ReviewWorkflowsWorkflowStage) | (Omit<Service, "Landing_page_carousel_view"> & { Landing_page_carousel_view?: Maybe<_RefType["ComponentServicesBlockCarouselView"]> }) | (Omit<UploadFile, "related"> & { related?: Maybe<Array<Maybe<_RefType["GenericMorph"]>>> }) | (UsersPermissionsPermission) | (UsersPermissionsRole) | (UsersPermissionsUser);
};


/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Boolean: ResolverTypeWrapper<Scalars["Boolean"]["output"]>;
  BooleanFilterInput: BooleanFilterInput;
  ComponentContentBlocksEvent: ResolverTypeWrapper<Omit<ComponentContentBlocksEvent, "Photo"> & { Photo?: Maybe<ResolversTypes["ComponentSharedMedia"]> }>;
  ComponentContentBlocksEventFiltersInput: ComponentContentBlocksEventFiltersInput;
  ComponentContentBlocksEventInput: ComponentContentBlocksEventInput;
  ComponentContentBlocksInfoBlock: ResolverTypeWrapper<ComponentContentBlocksInfoBlock>;
  ComponentContentBlocksInfoBlockFiltersInput: ComponentContentBlocksInfoBlockFiltersInput;
  ComponentContentBlocksInfoBlockInput: ComponentContentBlocksInfoBlockInput;
  ComponentServicesBlockCarouselView: ResolverTypeWrapper<Omit<ComponentServicesBlockCarouselView, "Carousel_service_image"> & { Carousel_service_image: ResolversTypes["UploadFile"] }>;
  ComponentServicesBlockCarouselViewFiltersInput: ComponentServicesBlockCarouselViewFiltersInput;
  ComponentServicesBlockCarouselViewInput: ComponentServicesBlockCarouselViewInput;
  ComponentServicesBlockHeader: ResolverTypeWrapper<ComponentServicesBlockHeader>;
  ComponentServicesBlockHeaderFiltersInput: ComponentServicesBlockHeaderFiltersInput;
  ComponentServicesBlockHeaderInput: ComponentServicesBlockHeaderInput;
  ComponentSharedAddress: ResolverTypeWrapper<ComponentSharedAddress>;
  ComponentSharedAddressInput: ComponentSharedAddressInput;
  ComponentSharedButton: ResolverTypeWrapper<ComponentSharedButton>;
  ComponentSharedButtonFiltersInput: ComponentSharedButtonFiltersInput;
  ComponentSharedButtonInput: ComponentSharedButtonInput;
  ComponentSharedEmbeddedVideo: ResolverTypeWrapper<ComponentSharedEmbeddedVideo>;
  ComponentSharedEmbeddedVideoFiltersInput: ComponentSharedEmbeddedVideoFiltersInput;
  ComponentSharedEmbeddedVideoInput: ComponentSharedEmbeddedVideoInput;
  ComponentSharedMedia: ResolverTypeWrapper<Omit<ComponentSharedMedia, "file"> & { file?: Maybe<ResolversTypes["UploadFile"]> }>;
  ComponentSharedMediaFiltersInput: ComponentSharedMediaFiltersInput;
  ComponentSharedMediaInput: ComponentSharedMediaInput;
  ComponentSharedQuote: ResolverTypeWrapper<ComponentSharedQuote>;
  ComponentSharedRichText: ResolverTypeWrapper<ComponentSharedRichText>;
  ComponentSharedRichTextFiltersInput: ComponentSharedRichTextFiltersInput;
  ComponentSharedRichTextInput: ComponentSharedRichTextInput;
  ComponentSharedSchedule: ResolverTypeWrapper<ComponentSharedSchedule>;
  ComponentSharedScheduleFiltersInput: ComponentSharedScheduleFiltersInput;
  ComponentSharedScheduleInput: ComponentSharedScheduleInput;
  ComponentSharedSeo: ResolverTypeWrapper<Omit<ComponentSharedSeo, "shareImage"> & { shareImage?: Maybe<ResolversTypes["UploadFile"]> }>;
  ComponentSharedSlider: ResolverTypeWrapper<Omit<ComponentSharedSlider, "files" | "files_connection"> & { files: Array<Maybe<ResolversTypes["UploadFile"]>>, files_connection?: Maybe<ResolversTypes["UploadFileRelationResponseCollection"]> }>;
  ComponentSharedVkVideo: ResolverTypeWrapper<Omit<ComponentSharedVkVideo, "thumbnail"> & { thumbnail?: Maybe<ResolversTypes["UploadFile"]> }>;
  DateTime: ResolverTypeWrapper<Scalars["DateTime"]["output"]>;
  DateTimeFilterInput: DateTimeFilterInput;
  DeleteMutationResponse: ResolverTypeWrapper<DeleteMutationResponse>;
  FileInfoInput: FileInfoInput;
  Float: ResolverTypeWrapper<Scalars["Float"]["output"]>;
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolverTypeWrapper<ResolversUnionTypes<ResolversTypes>["GenericMorph"]>;
  Global: ResolverTypeWrapper<Global>;
  GlobalInput: GlobalInput;
  I18NLocale: ResolverTypeWrapper<I18NLocale>;
  I18NLocaleEntityResponseCollection: ResolverTypeWrapper<I18NLocaleEntityResponseCollection>;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: ResolverTypeWrapper<Scalars["ID"]["output"]>;
  IDFilterInput: IdFilterInput;
  Int: ResolverTypeWrapper<Scalars["Int"]["output"]>;
  IntFilterInput: IntFilterInput;
  JSON: ResolverTypeWrapper<Scalars["JSON"]["output"]>;
  JSONFilterInput: JsonFilterInput;
  Mutation: ResolverTypeWrapper<{}>;
  PageLanding: ResolverTypeWrapper<Omit<PageLanding, "Events"> & { Events: Array<Maybe<ResolversTypes["ComponentContentBlocksEvent"]>> }>;
  PageLandingEntityResponseCollection: ResolverTypeWrapper<Omit<PageLandingEntityResponseCollection, "nodes"> & { nodes: Array<ResolversTypes["PageLanding"]> }>;
  PageLandingFiltersInput: PageLandingFiltersInput;
  PageLandingInput: PageLandingInput;
  Pagination: ResolverTypeWrapper<Pagination>;
  PaginationArg: PaginationArg;
  PublicationStatus: PublicationStatus;
  Query: ResolverTypeWrapper<{}>;
  ReviewWorkflowsWorkflow: ResolverTypeWrapper<ReviewWorkflowsWorkflow>;
  ReviewWorkflowsWorkflowEntityResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowEntityResponseCollection>;
  ReviewWorkflowsWorkflowFiltersInput: ReviewWorkflowsWorkflowFiltersInput;
  ReviewWorkflowsWorkflowInput: ReviewWorkflowsWorkflowInput;
  ReviewWorkflowsWorkflowStage: ResolverTypeWrapper<ReviewWorkflowsWorkflowStage>;
  ReviewWorkflowsWorkflowStageEntityResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowStageEntityResponseCollection>;
  ReviewWorkflowsWorkflowStageFiltersInput: ReviewWorkflowsWorkflowStageFiltersInput;
  ReviewWorkflowsWorkflowStageInput: ReviewWorkflowsWorkflowStageInput;
  ReviewWorkflowsWorkflowStageRelationResponseCollection: ResolverTypeWrapper<ReviewWorkflowsWorkflowStageRelationResponseCollection>;
  Service: ResolverTypeWrapper<Omit<Service, "Landing_page_carousel_view"> & { Landing_page_carousel_view?: Maybe<ResolversTypes["ComponentServicesBlockCarouselView"]> }>;
  ServiceEntityResponseCollection: ResolverTypeWrapper<Omit<ServiceEntityResponseCollection, "nodes"> & { nodes: Array<ResolversTypes["Service"]> }>;
  ServiceFiltersInput: ServiceFiltersInput;
  ServiceInput: ServiceInput;
  String: ResolverTypeWrapper<Scalars["String"]["output"]>;
  StringFilterInput: StringFilterInput;
  UploadFile: ResolverTypeWrapper<Omit<UploadFile, "related"> & { related?: Maybe<Array<Maybe<ResolversTypes["GenericMorph"]>>> }>;
  UploadFileEntityResponseCollection: ResolverTypeWrapper<Omit<UploadFileEntityResponseCollection, "nodes"> & { nodes: Array<ResolversTypes["UploadFile"]> }>;
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileRelationResponseCollection: ResolverTypeWrapper<Omit<UploadFileRelationResponseCollection, "nodes"> & { nodes: Array<ResolversTypes["UploadFile"]> }>;
  UsersPermissionsCreateRolePayload: ResolverTypeWrapper<UsersPermissionsCreateRolePayload>;
  UsersPermissionsDeleteRolePayload: ResolverTypeWrapper<UsersPermissionsDeleteRolePayload>;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: ResolverTypeWrapper<UsersPermissionsLoginPayload>;
  UsersPermissionsMe: ResolverTypeWrapper<UsersPermissionsMe>;
  UsersPermissionsMeRole: ResolverTypeWrapper<UsersPermissionsMeRole>;
  UsersPermissionsPasswordPayload: ResolverTypeWrapper<UsersPermissionsPasswordPayload>;
  UsersPermissionsPermission: ResolverTypeWrapper<UsersPermissionsPermission>;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsPermissionRelationResponseCollection>;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: ResolverTypeWrapper<UsersPermissionsRole>;
  UsersPermissionsRoleEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsRoleEntityResponseCollection>;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: ResolverTypeWrapper<UsersPermissionsUpdateRolePayload>;
  UsersPermissionsUser: ResolverTypeWrapper<UsersPermissionsUser>;
  UsersPermissionsUserEntityResponse: ResolverTypeWrapper<UsersPermissionsUserEntityResponse>;
  UsersPermissionsUserEntityResponseCollection: ResolverTypeWrapper<UsersPermissionsUserEntityResponseCollection>;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: ResolverTypeWrapper<UsersPermissionsUserRelationResponseCollection>;
};

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = {
  Boolean: Scalars["Boolean"]["output"];
  BooleanFilterInput: BooleanFilterInput;
  ComponentContentBlocksEvent: Omit<ComponentContentBlocksEvent, "Photo"> & { Photo?: Maybe<ResolversParentTypes["ComponentSharedMedia"]> };
  ComponentContentBlocksEventFiltersInput: ComponentContentBlocksEventFiltersInput;
  ComponentContentBlocksEventInput: ComponentContentBlocksEventInput;
  ComponentContentBlocksInfoBlock: ComponentContentBlocksInfoBlock;
  ComponentContentBlocksInfoBlockFiltersInput: ComponentContentBlocksInfoBlockFiltersInput;
  ComponentContentBlocksInfoBlockInput: ComponentContentBlocksInfoBlockInput;
  ComponentServicesBlockCarouselView: Omit<ComponentServicesBlockCarouselView, "Carousel_service_image"> & { Carousel_service_image: ResolversParentTypes["UploadFile"] };
  ComponentServicesBlockCarouselViewFiltersInput: ComponentServicesBlockCarouselViewFiltersInput;
  ComponentServicesBlockCarouselViewInput: ComponentServicesBlockCarouselViewInput;
  ComponentServicesBlockHeader: ComponentServicesBlockHeader;
  ComponentServicesBlockHeaderFiltersInput: ComponentServicesBlockHeaderFiltersInput;
  ComponentServicesBlockHeaderInput: ComponentServicesBlockHeaderInput;
  ComponentSharedAddress: ComponentSharedAddress;
  ComponentSharedAddressInput: ComponentSharedAddressInput;
  ComponentSharedButton: ComponentSharedButton;
  ComponentSharedButtonFiltersInput: ComponentSharedButtonFiltersInput;
  ComponentSharedButtonInput: ComponentSharedButtonInput;
  ComponentSharedEmbeddedVideo: ComponentSharedEmbeddedVideo;
  ComponentSharedEmbeddedVideoFiltersInput: ComponentSharedEmbeddedVideoFiltersInput;
  ComponentSharedEmbeddedVideoInput: ComponentSharedEmbeddedVideoInput;
  ComponentSharedMedia: Omit<ComponentSharedMedia, "file"> & { file?: Maybe<ResolversParentTypes["UploadFile"]> };
  ComponentSharedMediaFiltersInput: ComponentSharedMediaFiltersInput;
  ComponentSharedMediaInput: ComponentSharedMediaInput;
  ComponentSharedQuote: ComponentSharedQuote;
  ComponentSharedRichText: ComponentSharedRichText;
  ComponentSharedRichTextFiltersInput: ComponentSharedRichTextFiltersInput;
  ComponentSharedRichTextInput: ComponentSharedRichTextInput;
  ComponentSharedSchedule: ComponentSharedSchedule;
  ComponentSharedScheduleFiltersInput: ComponentSharedScheduleFiltersInput;
  ComponentSharedScheduleInput: ComponentSharedScheduleInput;
  ComponentSharedSeo: Omit<ComponentSharedSeo, "shareImage"> & { shareImage?: Maybe<ResolversParentTypes["UploadFile"]> };
  ComponentSharedSlider: Omit<ComponentSharedSlider, "files" | "files_connection"> & { files: Array<Maybe<ResolversParentTypes["UploadFile"]>>, files_connection?: Maybe<ResolversParentTypes["UploadFileRelationResponseCollection"]> };
  ComponentSharedVkVideo: Omit<ComponentSharedVkVideo, "thumbnail"> & { thumbnail?: Maybe<ResolversParentTypes["UploadFile"]> };
  DateTime: Scalars["DateTime"]["output"];
  DateTimeFilterInput: DateTimeFilterInput;
  DeleteMutationResponse: DeleteMutationResponse;
  FileInfoInput: FileInfoInput;
  Float: Scalars["Float"]["output"];
  FloatFilterInput: FloatFilterInput;
  GenericMorph: ResolversUnionTypes<ResolversParentTypes>["GenericMorph"];
  Global: Global;
  GlobalInput: GlobalInput;
  I18NLocale: I18NLocale;
  I18NLocaleEntityResponseCollection: I18NLocaleEntityResponseCollection;
  I18NLocaleFiltersInput: I18NLocaleFiltersInput;
  ID: Scalars["ID"]["output"];
  IDFilterInput: IdFilterInput;
  Int: Scalars["Int"]["output"];
  IntFilterInput: IntFilterInput;
  JSON: Scalars["JSON"]["output"];
  JSONFilterInput: JsonFilterInput;
  Mutation: {};
  PageLanding: Omit<PageLanding, "Events"> & { Events: Array<Maybe<ResolversParentTypes["ComponentContentBlocksEvent"]>> };
  PageLandingEntityResponseCollection: Omit<PageLandingEntityResponseCollection, "nodes"> & { nodes: Array<ResolversParentTypes["PageLanding"]> };
  PageLandingFiltersInput: PageLandingFiltersInput;
  PageLandingInput: PageLandingInput;
  Pagination: Pagination;
  PaginationArg: PaginationArg;
  Query: {};
  ReviewWorkflowsWorkflow: ReviewWorkflowsWorkflow;
  ReviewWorkflowsWorkflowEntityResponseCollection: ReviewWorkflowsWorkflowEntityResponseCollection;
  ReviewWorkflowsWorkflowFiltersInput: ReviewWorkflowsWorkflowFiltersInput;
  ReviewWorkflowsWorkflowInput: ReviewWorkflowsWorkflowInput;
  ReviewWorkflowsWorkflowStage: ReviewWorkflowsWorkflowStage;
  ReviewWorkflowsWorkflowStageEntityResponseCollection: ReviewWorkflowsWorkflowStageEntityResponseCollection;
  ReviewWorkflowsWorkflowStageFiltersInput: ReviewWorkflowsWorkflowStageFiltersInput;
  ReviewWorkflowsWorkflowStageInput: ReviewWorkflowsWorkflowStageInput;
  ReviewWorkflowsWorkflowStageRelationResponseCollection: ReviewWorkflowsWorkflowStageRelationResponseCollection;
  Service: Omit<Service, "Landing_page_carousel_view"> & { Landing_page_carousel_view?: Maybe<ResolversParentTypes["ComponentServicesBlockCarouselView"]> };
  ServiceEntityResponseCollection: Omit<ServiceEntityResponseCollection, "nodes"> & { nodes: Array<ResolversParentTypes["Service"]> };
  ServiceFiltersInput: ServiceFiltersInput;
  ServiceInput: ServiceInput;
  String: Scalars["String"]["output"];
  StringFilterInput: StringFilterInput;
  UploadFile: Omit<UploadFile, "related"> & { related?: Maybe<Array<Maybe<ResolversParentTypes["GenericMorph"]>>> };
  UploadFileEntityResponseCollection: Omit<UploadFileEntityResponseCollection, "nodes"> & { nodes: Array<ResolversParentTypes["UploadFile"]> };
  UploadFileFiltersInput: UploadFileFiltersInput;
  UploadFileRelationResponseCollection: Omit<UploadFileRelationResponseCollection, "nodes"> & { nodes: Array<ResolversParentTypes["UploadFile"]> };
  UsersPermissionsCreateRolePayload: UsersPermissionsCreateRolePayload;
  UsersPermissionsDeleteRolePayload: UsersPermissionsDeleteRolePayload;
  UsersPermissionsLoginInput: UsersPermissionsLoginInput;
  UsersPermissionsLoginPayload: UsersPermissionsLoginPayload;
  UsersPermissionsMe: UsersPermissionsMe;
  UsersPermissionsMeRole: UsersPermissionsMeRole;
  UsersPermissionsPasswordPayload: UsersPermissionsPasswordPayload;
  UsersPermissionsPermission: UsersPermissionsPermission;
  UsersPermissionsPermissionFiltersInput: UsersPermissionsPermissionFiltersInput;
  UsersPermissionsPermissionRelationResponseCollection: UsersPermissionsPermissionRelationResponseCollection;
  UsersPermissionsRegisterInput: UsersPermissionsRegisterInput;
  UsersPermissionsRole: UsersPermissionsRole;
  UsersPermissionsRoleEntityResponseCollection: UsersPermissionsRoleEntityResponseCollection;
  UsersPermissionsRoleFiltersInput: UsersPermissionsRoleFiltersInput;
  UsersPermissionsRoleInput: UsersPermissionsRoleInput;
  UsersPermissionsUpdateRolePayload: UsersPermissionsUpdateRolePayload;
  UsersPermissionsUser: UsersPermissionsUser;
  UsersPermissionsUserEntityResponse: UsersPermissionsUserEntityResponse;
  UsersPermissionsUserEntityResponseCollection: UsersPermissionsUserEntityResponseCollection;
  UsersPermissionsUserFiltersInput: UsersPermissionsUserFiltersInput;
  UsersPermissionsUserInput: UsersPermissionsUserInput;
  UsersPermissionsUserRelationResponseCollection: UsersPermissionsUserRelationResponseCollection;
};

export type ComponentContentBlocksEventResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentContentBlocksEvent"] = ResolversParentTypes["ComponentContentBlocksEvent"]> = {
  Button?: Resolver<Maybe<ResolversTypes["ComponentSharedButton"]>, ParentType, ContextType>;
  Date?: Resolver<ResolversTypes["DateTime"], ParentType, ContextType>;
  Description?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  Photo?: Resolver<Maybe<ResolversTypes["ComponentSharedMedia"]>, ParentType, ContextType>;
  Title?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentContentBlocksInfoBlockResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentContentBlocksInfoBlock"] = ResolversParentTypes["ComponentContentBlocksInfoBlock"]> = {
  Button?: Resolver<Maybe<ResolversTypes["ComponentSharedButton"]>, ParentType, ContextType>;
  Title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  Video_link?: Resolver<Maybe<ResolversTypes["ComponentSharedEmbeddedVideo"]>, ParentType, ContextType>;
  description?: Resolver<Maybe<Array<Maybe<ResolversTypes["ComponentSharedRichText"]>>>, ParentType, ContextType, RequireFields<ComponentContentBlocksInfoBlockDescriptionArgs, "pagination" | "sort">>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentServicesBlockCarouselViewResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentServicesBlockCarouselView"] = ResolversParentTypes["ComponentServicesBlockCarouselView"]> = {
  Carousel_service_description?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  Carousel_service_image?: Resolver<ResolversTypes["UploadFile"], ParentType, ContextType>;
  Carousel_service_name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentServicesBlockHeaderResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentServicesBlockHeader"] = ResolversParentTypes["ComponentServicesBlockHeader"]> = {
  How_do_we_do?: Resolver<Maybe<Array<Maybe<ResolversTypes["ComponentSharedRichText"]>>>, ParentType, ContextType, RequireFields<ComponentServicesBlockHeaderHow_Do_We_DoArgs, "pagination" | "sort">>;
  Title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  What_do_we_do?: Resolver<Maybe<Array<Maybe<ResolversTypes["ComponentSharedRichText"]>>>, ParentType, ContextType, RequireFields<ComponentServicesBlockHeaderWhat_Do_We_DoArgs, "pagination" | "sort">>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedAddressResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedAddress"] = ResolversParentTypes["ComponentSharedAddress"]> = {
  building?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  city?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  street?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedButtonResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedButton"] = ResolversParentTypes["ComponentSharedButton"]> = {
  Button_link?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  Button_text?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  isExternal?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedEmbeddedVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedEmbeddedVideo"] = ResolversParentTypes["ComponentSharedEmbeddedVideo"]> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedMediaResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedMedia"] = ResolversParentTypes["ComponentSharedMedia"]> = {
  file?: Resolver<Maybe<ResolversTypes["UploadFile"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedQuoteResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedQuote"] = ResolversParentTypes["ComponentSharedQuote"]> = {
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  title?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedRichTextResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedRichText"] = ResolversParentTypes["ComponentSharedRichText"]> = {
  body?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedScheduleResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedSchedule"] = ResolversParentTypes["ComponentSharedSchedule"]> = {
  dayAndTime?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedSeoResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedSeo"] = ResolversParentTypes["ComponentSharedSeo"]> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  metaDescription?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  metaTitle?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  shareImage?: Resolver<Maybe<ResolversTypes["UploadFile"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedSliderResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedSlider"] = ResolversParentTypes["ComponentSharedSlider"]> = {
  files?: Resolver<Array<Maybe<ResolversTypes["UploadFile"]>>, ParentType, ContextType, RequireFields<ComponentSharedSliderFilesArgs, "pagination" | "sort">>;
  files_connection?: Resolver<Maybe<ResolversTypes["UploadFileRelationResponseCollection"]>, ParentType, ContextType, RequireFields<ComponentSharedSliderFiles_ConnectionArgs, "pagination" | "sort">>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ComponentSharedVkVideoResolvers<ContextType = any, ParentType extends ResolversParentTypes["ComponentSharedVkVideo"] = ResolversParentTypes["ComponentSharedVkVideo"]> = {
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  link?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  thumbnail?: Resolver<Maybe<ResolversTypes["UploadFile"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface DateTimeScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["DateTime"], any> {
  name: "DateTime";
}

export type DeleteMutationResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes["DeleteMutationResponse"] = ResolversParentTypes["DeleteMutationResponse"]> = {
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type GenericMorphResolvers<ContextType = any, ParentType extends ResolversParentTypes["GenericMorph"] = ResolversParentTypes["GenericMorph"]> = {
  __resolveType: TypeResolveFn<"ComponentContentBlocksEvent" | "ComponentContentBlocksInfoBlock" | "ComponentServicesBlockCarouselView" | "ComponentServicesBlockHeader" | "ComponentSharedAddress" | "ComponentSharedButton" | "ComponentSharedEmbeddedVideo" | "ComponentSharedMedia" | "ComponentSharedQuote" | "ComponentSharedRichText" | "ComponentSharedSchedule" | "ComponentSharedSeo" | "ComponentSharedSlider" | "ComponentSharedVkVideo" | "Global" | "I18NLocale" | "PageLanding" | "ReviewWorkflowsWorkflow" | "ReviewWorkflowsWorkflowStage" | "Service" | "UploadFile" | "UsersPermissionsPermission" | "UsersPermissionsRole" | "UsersPermissionsUser", ParentType, ContextType>;
};

export type GlobalResolvers<ContextType = any, ParentType extends ResolversParentTypes["Global"] = ResolversParentTypes["Global"]> = {
  PrimalBuilding?: Resolver<ResolversTypes["ComponentSharedAddress"], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  ok?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  phone?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  rutube?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  serviceSchedule?: Resolver<Array<Maybe<ResolversTypes["ComponentSharedSchedule"]>>, ParentType, ContextType, RequireFields<GlobalServiceScheduleArgs, "pagination" | "sort">>;
  telegram?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  vk?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  youtube?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleResolvers<ContextType = any, ParentType extends ResolversParentTypes["I18NLocale"] = ResolversParentTypes["I18NLocale"]> = {
  code?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type I18NLocaleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["I18NLocaleEntityResponseCollection"] = ResolversParentTypes["I18NLocaleEntityResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["I18NLocale"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export interface JsonScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes["JSON"], any> {
  name: "JSON";
}

export type MutationResolvers<ContextType = any, ParentType extends ResolversParentTypes["Mutation"] = ResolversParentTypes["Mutation"]> = {
  changePassword?: Resolver<Maybe<ResolversTypes["UsersPermissionsLoginPayload"]>, ParentType, ContextType, RequireFields<MutationChangePasswordArgs, "currentPassword" | "password" | "passwordConfirmation">>;
  createPageLanding?: Resolver<Maybe<ResolversTypes["PageLanding"]>, ParentType, ContextType, RequireFields<MutationCreatePageLandingArgs, "data" | "status">>;
  createReviewWorkflowsWorkflow?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflow"]>, ParentType, ContextType, RequireFields<MutationCreateReviewWorkflowsWorkflowArgs, "data" | "status">>;
  createReviewWorkflowsWorkflowStage?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflowStage"]>, ParentType, ContextType, RequireFields<MutationCreateReviewWorkflowsWorkflowStageArgs, "data" | "status">>;
  createService?: Resolver<Maybe<ResolversTypes["Service"]>, ParentType, ContextType, RequireFields<MutationCreateServiceArgs, "data" | "status">>;
  createUsersPermissionsRole?: Resolver<Maybe<ResolversTypes["UsersPermissionsCreateRolePayload"]>, ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsRoleArgs, "data">>;
  createUsersPermissionsUser?: Resolver<ResolversTypes["UsersPermissionsUserEntityResponse"], ParentType, ContextType, RequireFields<MutationCreateUsersPermissionsUserArgs, "data">>;
  deleteGlobal?: Resolver<Maybe<ResolversTypes["DeleteMutationResponse"]>, ParentType, ContextType>;
  deletePageLanding?: Resolver<Maybe<ResolversTypes["DeleteMutationResponse"]>, ParentType, ContextType, RequireFields<MutationDeletePageLandingArgs, "documentId">>;
  deleteReviewWorkflowsWorkflow?: Resolver<Maybe<ResolversTypes["DeleteMutationResponse"]>, ParentType, ContextType, RequireFields<MutationDeleteReviewWorkflowsWorkflowArgs, "documentId">>;
  deleteReviewWorkflowsWorkflowStage?: Resolver<Maybe<ResolversTypes["DeleteMutationResponse"]>, ParentType, ContextType, RequireFields<MutationDeleteReviewWorkflowsWorkflowStageArgs, "documentId">>;
  deleteService?: Resolver<Maybe<ResolversTypes["DeleteMutationResponse"]>, ParentType, ContextType, RequireFields<MutationDeleteServiceArgs, "documentId">>;
  deleteUploadFile?: Resolver<Maybe<ResolversTypes["UploadFile"]>, ParentType, ContextType, RequireFields<MutationDeleteUploadFileArgs, "id">>;
  deleteUsersPermissionsRole?: Resolver<Maybe<ResolversTypes["UsersPermissionsDeleteRolePayload"]>, ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsRoleArgs, "id">>;
  deleteUsersPermissionsUser?: Resolver<ResolversTypes["UsersPermissionsUserEntityResponse"], ParentType, ContextType, RequireFields<MutationDeleteUsersPermissionsUserArgs, "id">>;
  emailConfirmation?: Resolver<Maybe<ResolversTypes["UsersPermissionsLoginPayload"]>, ParentType, ContextType, RequireFields<MutationEmailConfirmationArgs, "confirmation">>;
  forgotPassword?: Resolver<Maybe<ResolversTypes["UsersPermissionsPasswordPayload"]>, ParentType, ContextType, RequireFields<MutationForgotPasswordArgs, "email">>;
  login?: Resolver<ResolversTypes["UsersPermissionsLoginPayload"], ParentType, ContextType, RequireFields<MutationLoginArgs, "input">>;
  register?: Resolver<ResolversTypes["UsersPermissionsLoginPayload"], ParentType, ContextType, RequireFields<MutationRegisterArgs, "input">>;
  resetPassword?: Resolver<Maybe<ResolversTypes["UsersPermissionsLoginPayload"]>, ParentType, ContextType, RequireFields<MutationResetPasswordArgs, "code" | "password" | "passwordConfirmation">>;
  updateGlobal?: Resolver<Maybe<ResolversTypes["Global"]>, ParentType, ContextType, RequireFields<MutationUpdateGlobalArgs, "data" | "status">>;
  updatePageLanding?: Resolver<Maybe<ResolversTypes["PageLanding"]>, ParentType, ContextType, RequireFields<MutationUpdatePageLandingArgs, "data" | "documentId" | "status">>;
  updateReviewWorkflowsWorkflow?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflow"]>, ParentType, ContextType, RequireFields<MutationUpdateReviewWorkflowsWorkflowArgs, "data" | "documentId" | "status">>;
  updateReviewWorkflowsWorkflowStage?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflowStage"]>, ParentType, ContextType, RequireFields<MutationUpdateReviewWorkflowsWorkflowStageArgs, "data" | "documentId" | "status">>;
  updateService?: Resolver<Maybe<ResolversTypes["Service"]>, ParentType, ContextType, RequireFields<MutationUpdateServiceArgs, "data" | "documentId" | "status">>;
  updateUploadFile?: Resolver<ResolversTypes["UploadFile"], ParentType, ContextType, RequireFields<MutationUpdateUploadFileArgs, "id">>;
  updateUsersPermissionsRole?: Resolver<Maybe<ResolversTypes["UsersPermissionsUpdateRolePayload"]>, ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsRoleArgs, "data" | "id">>;
  updateUsersPermissionsUser?: Resolver<ResolversTypes["UsersPermissionsUserEntityResponse"], ParentType, ContextType, RequireFields<MutationUpdateUsersPermissionsUserArgs, "data" | "id">>;
};

export type PageLandingResolvers<ContextType = any, ParentType extends ResolversParentTypes["PageLanding"] = ResolversParentTypes["PageLanding"]> = {
  About_us?: Resolver<ResolversTypes["ComponentContentBlocksInfoBlock"], ParentType, ContextType>;
  Events?: Resolver<Array<Maybe<ResolversTypes["ComponentContentBlocksEvent"]>>, ParentType, ContextType, RequireFields<PageLandingEventsArgs, "pagination" | "sort">>;
  Hero_header?: Resolver<ResolversTypes["ComponentContentBlocksInfoBlock"], ParentType, ContextType>;
  How_to_become_a_christian?: Resolver<ResolversTypes["ComponentContentBlocksInfoBlock"], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PageLandingEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["PageLandingEntityResponseCollection"] = ResolversParentTypes["PageLandingEntityResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["PageLanding"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type PaginationResolvers<ContextType = any, ParentType extends ResolversParentTypes["Pagination"] = ResolversParentTypes["Pagination"]> = {
  page?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  pageCount?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  pageSize?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  total?: Resolver<ResolversTypes["Int"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type QueryResolvers<ContextType = any, ParentType extends ResolversParentTypes["Query"] = ResolversParentTypes["Query"]> = {
  global?: Resolver<Maybe<ResolversTypes["Global"]>, ParentType, ContextType, RequireFields<QueryGlobalArgs, "status">>;
  i18NLocale?: Resolver<Maybe<ResolversTypes["I18NLocale"]>, ParentType, ContextType, RequireFields<QueryI18NLocaleArgs, "documentId" | "status">>;
  i18NLocales?: Resolver<Array<Maybe<ResolversTypes["I18NLocale"]>>, ParentType, ContextType, RequireFields<QueryI18NLocalesArgs, "pagination" | "sort" | "status">>;
  i18NLocales_connection?: Resolver<Maybe<ResolversTypes["I18NLocaleEntityResponseCollection"]>, ParentType, ContextType, RequireFields<QueryI18NLocales_ConnectionArgs, "pagination" | "sort" | "status">>;
  me?: Resolver<Maybe<ResolversTypes["UsersPermissionsMe"]>, ParentType, ContextType>;
  pageLanding?: Resolver<Maybe<ResolversTypes["PageLanding"]>, ParentType, ContextType, RequireFields<QueryPageLandingArgs, "documentId" | "status">>;
  pageLandings?: Resolver<Array<Maybe<ResolversTypes["PageLanding"]>>, ParentType, ContextType, RequireFields<QueryPageLandingsArgs, "pagination" | "sort" | "status">>;
  pageLandings_connection?: Resolver<Maybe<ResolversTypes["PageLandingEntityResponseCollection"]>, ParentType, ContextType, RequireFields<QueryPageLandings_ConnectionArgs, "pagination" | "sort" | "status">>;
  reviewWorkflowsWorkflow?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflow"]>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowArgs, "documentId" | "status">>;
  reviewWorkflowsWorkflowStage?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflowStage"]>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowStageArgs, "documentId" | "status">>;
  reviewWorkflowsWorkflowStages?: Resolver<Array<Maybe<ResolversTypes["ReviewWorkflowsWorkflowStage"]>>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowStagesArgs, "pagination" | "sort" | "status">>;
  reviewWorkflowsWorkflowStages_connection?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflowStageEntityResponseCollection"]>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowStages_ConnectionArgs, "pagination" | "sort" | "status">>;
  reviewWorkflowsWorkflows?: Resolver<Array<Maybe<ResolversTypes["ReviewWorkflowsWorkflow"]>>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflowsArgs, "pagination" | "sort" | "status">>;
  reviewWorkflowsWorkflows_connection?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflowEntityResponseCollection"]>, ParentType, ContextType, RequireFields<QueryReviewWorkflowsWorkflows_ConnectionArgs, "pagination" | "sort" | "status">>;
  service?: Resolver<Maybe<ResolversTypes["Service"]>, ParentType, ContextType, RequireFields<QueryServiceArgs, "documentId" | "status">>;
  services?: Resolver<Array<Maybe<ResolversTypes["Service"]>>, ParentType, ContextType, RequireFields<QueryServicesArgs, "pagination" | "sort" | "status">>;
  services_connection?: Resolver<Maybe<ResolversTypes["ServiceEntityResponseCollection"]>, ParentType, ContextType, RequireFields<QueryServices_ConnectionArgs, "pagination" | "sort" | "status">>;
  uploadFile?: Resolver<Maybe<ResolversTypes["UploadFile"]>, ParentType, ContextType, RequireFields<QueryUploadFileArgs, "documentId" | "status">>;
  uploadFiles?: Resolver<Array<Maybe<ResolversTypes["UploadFile"]>>, ParentType, ContextType, RequireFields<QueryUploadFilesArgs, "pagination" | "sort" | "status">>;
  uploadFiles_connection?: Resolver<Maybe<ResolversTypes["UploadFileEntityResponseCollection"]>, ParentType, ContextType, RequireFields<QueryUploadFiles_ConnectionArgs, "pagination" | "sort" | "status">>;
  usersPermissionsRole?: Resolver<Maybe<ResolversTypes["UsersPermissionsRole"]>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRoleArgs, "documentId" | "status">>;
  usersPermissionsRoles?: Resolver<Array<Maybe<ResolversTypes["UsersPermissionsRole"]>>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRolesArgs, "pagination" | "sort" | "status">>;
  usersPermissionsRoles_connection?: Resolver<Maybe<ResolversTypes["UsersPermissionsRoleEntityResponseCollection"]>, ParentType, ContextType, RequireFields<QueryUsersPermissionsRoles_ConnectionArgs, "pagination" | "sort" | "status">>;
  usersPermissionsUser?: Resolver<Maybe<ResolversTypes["UsersPermissionsUser"]>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUserArgs, "documentId" | "status">>;
  usersPermissionsUsers?: Resolver<Array<Maybe<ResolversTypes["UsersPermissionsUser"]>>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsersArgs, "pagination" | "sort" | "status">>;
  usersPermissionsUsers_connection?: Resolver<Maybe<ResolversTypes["UsersPermissionsUserEntityResponseCollection"]>, ParentType, ContextType, RequireFields<QueryUsersPermissionsUsers_ConnectionArgs, "pagination" | "sort" | "status">>;
};

export type ReviewWorkflowsWorkflowResolvers<ContextType = any, ParentType extends ResolversParentTypes["ReviewWorkflowsWorkflow"] = ResolversParentTypes["ReviewWorkflowsWorkflow"]> = {
  contentTypes?: Resolver<ResolversTypes["JSON"], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  stages?: Resolver<Array<Maybe<ResolversTypes["ReviewWorkflowsWorkflowStage"]>>, ParentType, ContextType, RequireFields<ReviewWorkflowsWorkflowStagesArgs, "pagination" | "sort">>;
  stages_connection?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflowStageRelationResponseCollection"]>, ParentType, ContextType, RequireFields<ReviewWorkflowsWorkflowStages_ConnectionArgs, "pagination" | "sort">>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["ReviewWorkflowsWorkflowEntityResponseCollection"] = ResolversParentTypes["ReviewWorkflowsWorkflowEntityResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["ReviewWorkflowsWorkflow"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageResolvers<ContextType = any, ParentType extends ResolversParentTypes["ReviewWorkflowsWorkflowStage"] = ResolversParentTypes["ReviewWorkflowsWorkflowStage"]> = {
  color?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  workflow?: Resolver<Maybe<ResolversTypes["ReviewWorkflowsWorkflow"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["ReviewWorkflowsWorkflowStageEntityResponseCollection"] = ResolversParentTypes["ReviewWorkflowsWorkflowStageEntityResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["ReviewWorkflowsWorkflowStage"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ReviewWorkflowsWorkflowStageRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["ReviewWorkflowsWorkflowStageRelationResponseCollection"] = ResolversParentTypes["ReviewWorkflowsWorkflowStageRelationResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["ReviewWorkflowsWorkflowStage"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceResolvers<ContextType = any, ParentType extends ResolversParentTypes["Service"] = ResolversParentTypes["Service"]> = {
  Header?: Resolver<ResolversTypes["ComponentServicesBlockHeader"], ParentType, ContextType>;
  Landing_page_carousel_view?: Resolver<Maybe<ResolversTypes["ComponentServicesBlockCarouselView"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ServiceEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["ServiceEntityResponseCollection"] = ResolversParentTypes["ServiceEntityResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["Service"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileResolvers<ContextType = any, ParentType extends ResolversParentTypes["UploadFile"] = ResolversParentTypes["UploadFile"]> = {
  alternativeText?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  caption?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  ext?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  formats?: Resolver<Maybe<ResolversTypes["JSON"]>, ParentType, ContextType>;
  hash?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  height?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  mime?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  previewUrl?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  provider?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  provider_metadata?: Resolver<Maybe<ResolversTypes["JSON"]>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  related?: Resolver<Maybe<Array<Maybe<ResolversTypes["GenericMorph"]>>>, ParentType, ContextType>;
  size?: Resolver<ResolversTypes["Float"], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  url?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  width?: Resolver<Maybe<ResolversTypes["Int"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["UploadFileEntityResponseCollection"] = ResolversParentTypes["UploadFileEntityResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["UploadFile"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UploadFileRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["UploadFileRelationResponseCollection"] = ResolversParentTypes["UploadFileRelationResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["UploadFile"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsCreateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsCreateRolePayload"] = ResolversParentTypes["UsersPermissionsCreateRolePayload"]> = {
  ok?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsDeleteRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsDeleteRolePayload"] = ResolversParentTypes["UsersPermissionsDeleteRolePayload"]> = {
  ok?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsLoginPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsLoginPayload"] = ResolversParentTypes["UsersPermissionsLoginPayload"]> = {
  jwt?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  user?: Resolver<ResolversTypes["UsersPermissionsMe"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsMe"] = ResolversParentTypes["UsersPermissionsMe"]> = {
  blocked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["UsersPermissionsMeRole"]>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsMeRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsMeRole"] = ResolversParentTypes["UsersPermissionsMeRole"]> = {
  description?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPasswordPayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsPasswordPayload"] = ResolversParentTypes["UsersPermissionsPasswordPayload"]> = {
  ok?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsPermission"] = ResolversParentTypes["UsersPermissionsPermission"]> = {
  action?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["UsersPermissionsRole"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsPermissionRelationResponseCollection"] = ResolversParentTypes["UsersPermissionsPermissionRelationResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["UsersPermissionsPermission"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsRole"] = ResolversParentTypes["UsersPermissionsRole"]> = {
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  description?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  name?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  permissions?: Resolver<Array<Maybe<ResolversTypes["UsersPermissionsPermission"]>>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissionsArgs, "pagination" | "sort">>;
  permissions_connection?: Resolver<Maybe<ResolversTypes["UsersPermissionsPermissionRelationResponseCollection"]>, ParentType, ContextType, RequireFields<UsersPermissionsRolePermissions_ConnectionArgs, "pagination" | "sort">>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  type?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  users?: Resolver<Array<Maybe<ResolversTypes["UsersPermissionsUser"]>>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsersArgs, "pagination" | "sort">>;
  users_connection?: Resolver<Maybe<ResolversTypes["UsersPermissionsUserRelationResponseCollection"]>, ParentType, ContextType, RequireFields<UsersPermissionsRoleUsers_ConnectionArgs, "pagination" | "sort">>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsRoleEntityResponseCollection"] = ResolversParentTypes["UsersPermissionsRoleEntityResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["UsersPermissionsRole"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUpdateRolePayloadResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsUpdateRolePayload"] = ResolversParentTypes["UsersPermissionsUpdateRolePayload"]> = {
  ok?: Resolver<ResolversTypes["Boolean"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsUser"] = ResolversParentTypes["UsersPermissionsUser"]> = {
  blocked?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  confirmed?: Resolver<Maybe<ResolversTypes["Boolean"]>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  documentId?: Resolver<ResolversTypes["ID"], ParentType, ContextType>;
  email?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  provider?: Resolver<Maybe<ResolversTypes["String"]>, ParentType, ContextType>;
  publishedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  role?: Resolver<Maybe<ResolversTypes["UsersPermissionsRole"]>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes["DateTime"]>, ParentType, ContextType>;
  username?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsUserEntityResponse"] = ResolversParentTypes["UsersPermissionsUserEntityResponse"]> = {
  data?: Resolver<Maybe<ResolversTypes["UsersPermissionsUser"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserEntityResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsUserEntityResponseCollection"] = ResolversParentTypes["UsersPermissionsUserEntityResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["UsersPermissionsUser"]>, ParentType, ContextType>;
  pageInfo?: Resolver<ResolversTypes["Pagination"], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type UsersPermissionsUserRelationResponseCollectionResolvers<ContextType = any, ParentType extends ResolversParentTypes["UsersPermissionsUserRelationResponseCollection"] = ResolversParentTypes["UsersPermissionsUserRelationResponseCollection"]> = {
  nodes?: Resolver<Array<ResolversTypes["UsersPermissionsUser"]>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type Resolvers<ContextType = any> = {
  ComponentContentBlocksEvent?: ComponentContentBlocksEventResolvers<ContextType>;
  ComponentContentBlocksInfoBlock?: ComponentContentBlocksInfoBlockResolvers<ContextType>;
  ComponentServicesBlockCarouselView?: ComponentServicesBlockCarouselViewResolvers<ContextType>;
  ComponentServicesBlockHeader?: ComponentServicesBlockHeaderResolvers<ContextType>;
  ComponentSharedAddress?: ComponentSharedAddressResolvers<ContextType>;
  ComponentSharedButton?: ComponentSharedButtonResolvers<ContextType>;
  ComponentSharedEmbeddedVideo?: ComponentSharedEmbeddedVideoResolvers<ContextType>;
  ComponentSharedMedia?: ComponentSharedMediaResolvers<ContextType>;
  ComponentSharedQuote?: ComponentSharedQuoteResolvers<ContextType>;
  ComponentSharedRichText?: ComponentSharedRichTextResolvers<ContextType>;
  ComponentSharedSchedule?: ComponentSharedScheduleResolvers<ContextType>;
  ComponentSharedSeo?: ComponentSharedSeoResolvers<ContextType>;
  ComponentSharedSlider?: ComponentSharedSliderResolvers<ContextType>;
  ComponentSharedVkVideo?: ComponentSharedVkVideoResolvers<ContextType>;
  DateTime?: GraphQLScalarType;
  DeleteMutationResponse?: DeleteMutationResponseResolvers<ContextType>;
  GenericMorph?: GenericMorphResolvers<ContextType>;
  Global?: GlobalResolvers<ContextType>;
  I18NLocale?: I18NLocaleResolvers<ContextType>;
  I18NLocaleEntityResponseCollection?: I18NLocaleEntityResponseCollectionResolvers<ContextType>;
  JSON?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  PageLanding?: PageLandingResolvers<ContextType>;
  PageLandingEntityResponseCollection?: PageLandingEntityResponseCollectionResolvers<ContextType>;
  Pagination?: PaginationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  ReviewWorkflowsWorkflow?: ReviewWorkflowsWorkflowResolvers<ContextType>;
  ReviewWorkflowsWorkflowEntityResponseCollection?: ReviewWorkflowsWorkflowEntityResponseCollectionResolvers<ContextType>;
  ReviewWorkflowsWorkflowStage?: ReviewWorkflowsWorkflowStageResolvers<ContextType>;
  ReviewWorkflowsWorkflowStageEntityResponseCollection?: ReviewWorkflowsWorkflowStageEntityResponseCollectionResolvers<ContextType>;
  ReviewWorkflowsWorkflowStageRelationResponseCollection?: ReviewWorkflowsWorkflowStageRelationResponseCollectionResolvers<ContextType>;
  Service?: ServiceResolvers<ContextType>;
  ServiceEntityResponseCollection?: ServiceEntityResponseCollectionResolvers<ContextType>;
  UploadFile?: UploadFileResolvers<ContextType>;
  UploadFileEntityResponseCollection?: UploadFileEntityResponseCollectionResolvers<ContextType>;
  UploadFileRelationResponseCollection?: UploadFileRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsCreateRolePayload?: UsersPermissionsCreateRolePayloadResolvers<ContextType>;
  UsersPermissionsDeleteRolePayload?: UsersPermissionsDeleteRolePayloadResolvers<ContextType>;
  UsersPermissionsLoginPayload?: UsersPermissionsLoginPayloadResolvers<ContextType>;
  UsersPermissionsMe?: UsersPermissionsMeResolvers<ContextType>;
  UsersPermissionsMeRole?: UsersPermissionsMeRoleResolvers<ContextType>;
  UsersPermissionsPasswordPayload?: UsersPermissionsPasswordPayloadResolvers<ContextType>;
  UsersPermissionsPermission?: UsersPermissionsPermissionResolvers<ContextType>;
  UsersPermissionsPermissionRelationResponseCollection?: UsersPermissionsPermissionRelationResponseCollectionResolvers<ContextType>;
  UsersPermissionsRole?: UsersPermissionsRoleResolvers<ContextType>;
  UsersPermissionsRoleEntityResponseCollection?: UsersPermissionsRoleEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUpdateRolePayload?: UsersPermissionsUpdateRolePayloadResolvers<ContextType>;
  UsersPermissionsUser?: UsersPermissionsUserResolvers<ContextType>;
  UsersPermissionsUserEntityResponse?: UsersPermissionsUserEntityResponseResolvers<ContextType>;
  UsersPermissionsUserEntityResponseCollection?: UsersPermissionsUserEntityResponseCollectionResolvers<ContextType>;
  UsersPermissionsUserRelationResponseCollection?: UsersPermissionsUserRelationResponseCollectionResolvers<ContextType>;
};

