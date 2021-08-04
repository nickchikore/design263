using System.Collections;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace design263API.Entities
{
    [Table("Services")]
    // Offering myDeserializedClass = JsonConvert.DeserializeObject<Root>(myJsonResponse); 
    public class Offering
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string ClassRef { get; set; }
        public int Index { get; set; }
        public string Url { get; set; }
        public string Avatar { get; set; }
        public string ImageRef { get; set; }
        public string Summary { get; set; }
        public List<OfferingPackage> Packages { get; set; }
        public List<Testimonial> Testimonials { get; set; }
        public List<Offer> Offer { get; set; }
        public Composition Composition { get; set; }
    }


}

