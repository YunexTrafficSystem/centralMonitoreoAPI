import { model, Schema } from "npm:mongoose";

enum modState {
  pass,
  warn,
  fail,
  disconnected,
}

interface TLight {
  type: string;
  comment: string;
  message: string;
  code: string;
  addr: string;
  msgID: number;

  state: modState;
  coords: [number, number];
}

const ligthsSchema = new Schema<TLight>({
  type: String,
  comment: String,
  message: String,
  code: String,
  addr: String,
  msgID: Number,

  state: Number,
  coords: Array,
}, {
  timestamps: true,
});

// Validaciones

const lightsModel = model("Lights", ligthsSchema);

export default lightsModel;
