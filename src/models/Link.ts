import { model, Schema } from 'mongoose'

const LinkSchema = new Schema(
  {
    long: { type: String, required: true },
    short: { type: String, required: true }
  },
  { versionKey: false }
)

LinkSchema.methods.toJSON = function () {
  const { _id, ...link } = this.toObject()
  link.linkId = _id

  return link
}

export = model('Link', LinkSchema)
