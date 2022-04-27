export interface PartnersProps {
  name?: string;
  email?: string;
  nickname?: string;
  cellphone?: string;
  localization?: string;
  associatedAt?: string;
  association_status?: React.ReactNode;
}

export interface PartnersTableProps {
  name?: string;
  city?: string;
  email?: string;
  state?: string;
  nickname?: string;
  cellphone?: string;
  localization?: string;
  associated_at?: string;
  association_status?: string;
}

export interface FormInputsProps {
  search: string;
}
