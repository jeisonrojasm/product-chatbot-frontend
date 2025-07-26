export type TextareaIAProps = {
  value: string;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onSendMessage?: () => void;
};