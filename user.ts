import { RestRequest, RestResponse } from "./rest";

export interface UserCreateRequest extends RestRequest {
    tag: string;
    password: string;
}

export interface UserCreateResponse extends RestResponse {}

export interface UserLogInRequest extends RestRequest {
    tag: string;
    password: string;
}

export interface UserLogInResponse extends RestResponse {
    session?: string;
}

export interface UserLogOutRequest extends RestRequest {
    session: string;
}

export interface UserLogOutResponse extends RestResponse {}
