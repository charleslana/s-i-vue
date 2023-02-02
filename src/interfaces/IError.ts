export default interface IError {
  response?: {
    status: number;
    data: {
      validation: {
        body: {
          message: string;
        };
      };
      message: string;
    };
  };
  message: string;
}
