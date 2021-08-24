export interface DimensionInterface {
  id: string;
  organization: string;
  projects: string[];
  datasource: string;
  name: string;
  sql: string;
  dateCreated: Date;
  dateUpdated: Date;
}
