"use server"

import { loginRequestSchema } from "../constants/types/requests/login.request";
import { LoginResponse } from "../constants/types/responses/login.response";

export const loginAction = async (prevState: LoginResponse | undefined, formData: FormData): Promise<LoginResponse> => {
  const validateFields = await loginRequestSchema.safeParseAsync({
    email: formData.get("email"),
    password: formData.get("password"),
  })
  if (!validateFields.success) {
    return {
    }
  }
  return null!;
}
