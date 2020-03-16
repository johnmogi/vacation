export class VacsModel {
  public constructor(
    public vacationID?: number,
    public vacationName?: string,
    public description?: string,
    public destination?: string,
    public picFileName?: string,
    public startDate?: string,
    public endDate?: string,
    public price?: string
  ) {}
}
