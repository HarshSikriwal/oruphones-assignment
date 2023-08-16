interface UserSchema {
  email: string;
  name: string;
  password: string;
  phone_number?: number;
  about: string;
  skills: string[];
  certifications?: { skills: string; source: string }[];
  experience?: {
    from: number;
    to: number;
    role: "Full-time" | "Freelance" | "Intern";
    companyName: string;
    jobPosition: string;
  }[];
  education: {
    from: number;
    to: number;
    degreeName: string;
    instituteName: string;
    description?: string;
  }[];
}

export default UserSchema;
