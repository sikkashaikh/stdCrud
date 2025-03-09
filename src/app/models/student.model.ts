export interface Student {
    id: string;
    name: string;
    age: number;
    stream : {streamid: string, streamname: string}
  }

  export interface Streams {
    id: string;
    name: string;
  }

  export interface Subject {
    id: string;
    streamid: string;
    name: string;
  }
  