export class Project {
  constructor(ownerID, name, status, favorite, image, owner_image) {
    this.ownerID = ownerID
    this.favorite = favorite
    this.name = name
    this.status = status
    this.image = image
    this.owner_image = owner_image
  }
}
