export type ProjectListProps = {
  id: number;
  content: string;
};
export type ProjectBoxProps = {
  idx: ProjectListProps;
  onClick: (idx: ProjectListProps) => void;
};
