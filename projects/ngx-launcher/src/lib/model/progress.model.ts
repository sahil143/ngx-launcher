export class Progress {
  name: string;
  message: string;
  hyperText?: string;
  completed?: boolean;
  error?: boolean;
  routes?: {[key: string]: string};
}
