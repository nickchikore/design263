using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace design263API.Entities
{
    [Table("Packages")]
    public class OfferingPackage
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public PackageInfo PackageInfo { get; set; }
        public int Rate { get; set; }
        public List<Testimonial> Testimonials { get; set; }
        public List<string> Tags { get; set; }
        public Offering Offering { get; set; }
        public int OfferingId { get; set; }
    }
}