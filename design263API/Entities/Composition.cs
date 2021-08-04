using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace design263API.Entities
{
    [Table("Composition")]

    public class Composition
    {        
        public string Title { get; set; }
        public List<string> Metatags { get; set; }
        public string Description { get; set; }
        public string Heading { get; set; }
        public string Subheading { get; set; }
        public string Synopsis { get; set; }
        public Offering Offering { get; set; }
        public int OfferingId { get; set; }
    }
}