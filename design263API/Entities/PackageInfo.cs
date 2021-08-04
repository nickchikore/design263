using System.Collections.Generic;

namespace design263API.Entities
{
    public class PackageInfo
    {
        public int PackageId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string ImgUrl { get; set; }
        public string RefIcon { get; set; }
        public List<InPackageOffering> InPackageOfferings { get; set; }
    }
}