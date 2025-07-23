export interface editProfileFormData {
  firstName: string;
  lastName: string;
  phone: string;
  email: string;
  role: string;
  country: string;
  state: string;
  postalCode?: string;
  manager: string;
  joiningDate: string;
  profilePic?: FileList | string;
}
