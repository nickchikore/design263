namespace design263API.Entities
{
    public class InPackageOffering
    {
        public int OfferingId { get; set; }
        public string Offering { get; set; }
        public string Rate { get; set; }
        public PackageInfo PackageInfo { get; set; }
        public int PackageInfoId { get; set; }
    }

}