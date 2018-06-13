export class Grant {
  constructor (
    public _id: string,
    public name: string,
    public grantor: string,
    public url: string,
    public dateStart: Date,
    public deadline: Date,
    public price: number,
    public geoScale: string,
    public grantee: string[],
    public region?: string,
    public city?: string,
    public description?: string,
    public categories?: string[],
  ) {  }
}
