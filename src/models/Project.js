export class Project {
  constructor(ownerId, name, status, favorite, image, owner_image) {
    this.ownerId = ownerId
    this.favorite = favorite
    this.name = name
    this.status = status
    this.image = image
    this.owner_image = owner_image
  }
}
