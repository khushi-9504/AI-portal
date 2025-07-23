// Before submission
export interface SignUpFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
  gender: string;
  manager: string;
  role: string;
  state: string;
  country: string;
  postalCode?: string;
  joiningDate: string;
  profilePic: FileList; //  FileList before upload
}

// After upload — for Redux or API
export interface SignUpDataToStore extends Omit<SignUpFormData, "profilePic"> {
  profilePic: string; // string Cloudinary URL
}

export interface LoginFormData {
  email: string;
  password: string;
}

export interface ForgotPasswordForm {
  email: string;
  newPassword: string;
  confirmPassword: string;
}
