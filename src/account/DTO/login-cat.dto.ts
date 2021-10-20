interface Login{
  token : string;
}

export interface LoginResponseModel extends Login{
  success : boolean;
  message? : string;
  status : number;
}

export interface LoginReq extends Login{}

